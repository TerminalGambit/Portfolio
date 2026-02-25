export interface OHLCVPoint {
  datetime: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface MarketDataCache {
  ticker: string;
  interval: string;
  lastUpdated: string;
  data: OHLCVPoint[];
}

export interface MACDResult {
  macd: number[];
  signal: number[];
  histogram: number[];
}

export interface BollingerResult {
  upper: number[];
  middle: number[];
  lower: number[];
}

export type TimeFrame = "1D" | "1W" | "1M" | "3M" | "1Y";
export type IndicatorType = "RSI" | "MACD" | "BOLLINGER";

const AVAILABLE_TICKERS = ["SPY", "AAPL", "MSFT"];
const cache = new Map<string, MarketDataCache>();

export function getAvailableTickers() {
  return AVAILABLE_TICKERS;
}

export async function getMarketData(
  ticker: string,
  timeframe: TimeFrame
): Promise<OHLCVPoint[]> {
  const upper = ticker.toUpperCase();
  const key = `${upper}-1day`;

  if (!cache.has(key)) {
    const safe = AVAILABLE_TICKERS.includes(upper) ? upper.toLowerCase() : "spy";
    const base = process.env.__NEXT_ROUTER_BASEPATH || "";
    const res = await fetch(`${base}/data/market/${safe}-daily.json`);
    if (!res.ok) throw new Error(`Failed to load data for ${ticker}`);
    const data: MarketDataCache = await res.json();
    cache.set(key, data);
  }

  const cached = cache.get(key)!;
  return filterByTimeframe(cached.data, timeframe);
}

function filterByTimeframe(data: OHLCVPoint[], tf: TimeFrame): OHLCVPoint[] {
  if (tf === "1Y" || data.length === 0) return data;
  const days: Record<TimeFrame, number> = { "1D": 1, "1W": 5, "1M": 21, "3M": 63, "1Y": 252 };
  return data.slice(-days[tf]);
}

// --- Technical indicators ---

export function calculateRSI(closes: number[], period = 14): number[] {
  const rsi = new Array(closes.length).fill(NaN);
  if (closes.length < period + 1) return rsi;

  let avgGain = 0;
  let avgLoss = 0;

  for (let i = 1; i <= period; i++) {
    const change = closes[i] - closes[i - 1];
    if (change > 0) avgGain += change;
    else avgLoss += Math.abs(change);
  }
  avgGain /= period;
  avgLoss /= period;

  rsi[period] = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss);

  for (let i = period + 1; i < closes.length; i++) {
    const change = closes[i] - closes[i - 1];
    const gain = change > 0 ? change : 0;
    const loss = change < 0 ? Math.abs(change) : 0;
    avgGain = (avgGain * (period - 1) + gain) / period;
    avgLoss = (avgLoss * (period - 1) + loss) / period;
    rsi[i] = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss);
  }
  return rsi;
}

function calculateEMA(data: number[], period: number): number[] {
  const ema = new Array(data.length).fill(NaN);
  if (data.length < period) return ema;

  let sum = 0;
  for (let i = 0; i < period; i++) sum += data[i];
  ema[period - 1] = sum / period;

  const mult = 2 / (period + 1);
  for (let i = period; i < data.length; i++) {
    ema[i] = (data[i] - ema[i - 1]) * mult + ema[i - 1];
  }
  return ema;
}

export function calculateMACD(
  closes: number[],
  fast = 12,
  slow = 26,
  signalPeriod = 9
): MACDResult {
  const result: MACDResult = {
    macd: new Array(closes.length).fill(NaN),
    signal: new Array(closes.length).fill(NaN),
    histogram: new Array(closes.length).fill(NaN),
  };
  if (closes.length < slow) return result;

  const fastEMA = calculateEMA(closes, fast);
  const slowEMA = calculateEMA(closes, slow);

  const macdLine: number[] = [];
  for (let i = 0; i < closes.length; i++) {
    if (!isNaN(fastEMA[i]) && !isNaN(slowEMA[i])) {
      result.macd[i] = fastEMA[i] - slowEMA[i];
      macdLine.push(result.macd[i]);
    }
  }

  const signalEMA = calculateEMA(macdLine, signalPeriod);
  const startIdx = closes.length - macdLine.length;

  for (let i = 0; i < signalEMA.length; i++) {
    const idx = startIdx + i;
    if (!isNaN(signalEMA[i])) {
      result.signal[idx] = signalEMA[i];
      result.histogram[idx] = result.macd[idx] - signalEMA[i];
    }
  }
  return result;
}

export function calculateBollingerBands(
  closes: number[],
  period = 20,
  mult = 2
): BollingerResult {
  const result: BollingerResult = {
    upper: new Array(closes.length).fill(NaN),
    middle: new Array(closes.length).fill(NaN),
    lower: new Array(closes.length).fill(NaN),
  };
  if (closes.length < period) return result;

  for (let i = period - 1; i < closes.length; i++) {
    const slice = closes.slice(i - period + 1, i + 1);
    const sma = slice.reduce((s, v) => s + v, 0) / period;
    const variance = slice.reduce((s, v) => s + (v - sma) ** 2, 0) / period;
    const std = Math.sqrt(variance);
    result.middle[i] = sma;
    result.upper[i] = sma + mult * std;
    result.lower[i] = sma - mult * std;
  }
  return result;
}
