"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getMarketData,
  getAvailableTickers,
  calculateRSI,
  calculateMACD,
  calculateBollingerBands,
  type OHLCVPoint,
  type TimeFrame,
  type IndicatorType,
} from "@/lib/market-data";

const TIMEFRAMES: TimeFrame[] = ["1D", "1W", "1M", "3M", "1Y"];
const INDICATORS: IndicatorType[] = ["RSI", "MACD", "BOLLINGER"];

function getChartColors() {
  const style = getComputedStyle(document.documentElement);
  const v = (name: string) => style.getPropertyValue(name).trim();
  return {
    bg: v("--chart-bg"),
    grid: v("--chart-grid"),
    line: v("--chart-line"),
    text: v("--chart-text"),
    label: v("--chart-label"),
    candleUp: v("--chart-candle-up"),
    candleUpFill: v("--chart-candle-up-fill"),
    candleDown: v("--chart-candle-down"),
    candleDownFill: v("--chart-candle-down-fill"),
    volumeUp: v("--chart-volume-up"),
    volumeDown: v("--chart-volume-down"),
    indicator: v("--chart-indicator"),
    indicatorSecondary: v("--chart-indicator-secondary"),
    bbFill: v("--chart-bb-fill"),
    histUp: v("--chart-hist-up"),
    histDown: v("--chart-hist-down"),
  };
}

export function MarketDashboard() {
  const chartRef = useRef<HTMLDivElement>(null);
  const plotlyRef = useRef<any>(null);
  const [ticker, setTicker] = useState("SPY");
  const [timeframe, setTimeframe] = useState<TimeFrame>("1Y");
  const [activeIndicators, setActiveIndicators] = useState<Set<IndicatorType>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dataRef = useRef<OHLCVPoint[]>([]);
  const { theme } = useTheme();

  const toggleIndicator = (ind: IndicatorType) => {
    setActiveIndicators((prev) => {
      const next = new Set(prev);
      if (next.has(ind)) next.delete(ind);
      else next.add(ind);
      return next;
    });
  };

  const renderChart = useCallback(
    (data: OHLCVPoint[], indicators: Set<IndicatorType>) => {
      const Plotly = plotlyRef.current;
      if (!Plotly || !chartRef.current || data.length === 0) return;

      const c = getChartColors();
      const dates = data.map((d) => d.datetime);
      const opens = data.map((d) => d.open);
      const highs = data.map((d) => d.high);
      const lows = data.map((d) => d.low);
      const closes = data.map((d) => d.close);
      const volumes = data.map((d) => d.volume);

      const traces: any[] = [];
      let rowCount = 2;

      // Candlestick
      traces.push({
        type: "candlestick",
        x: dates,
        open: opens,
        high: highs,
        low: lows,
        close: closes,
        increasing: { line: { color: c.candleUp, width: 1 }, fillcolor: c.candleUpFill },
        decreasing: { line: { color: c.candleDown, width: 1 }, fillcolor: c.candleDownFill },
        xaxis: "x",
        yaxis: "y",
        name: ticker,
        hoverinfo: "x+text",
        text: data.map(
          (d) =>
            `O: ${d.open.toFixed(2)}  H: ${d.high.toFixed(2)}  L: ${d.low.toFixed(2)}  C: ${d.close.toFixed(2)}  V: ${(d.volume / 1e6).toFixed(1)}M`
        ),
      });

      // Bollinger bands
      if (indicators.has("BOLLINGER")) {
        const bb = calculateBollingerBands(closes);
        const valid = dates.filter((_, i) => !isNaN(bb.upper[i]));
        traces.push(
          {
            type: "scatter", mode: "lines", x: valid,
            y: bb.upper.filter((v) => !isNaN(v)),
            line: { color: c.indicatorSecondary, width: 1, dash: "dot" },
            xaxis: "x", yaxis: "y", showlegend: false, hoverinfo: "skip",
          },
          {
            type: "scatter", mode: "lines", x: valid,
            y: bb.middle.filter((v) => !isNaN(v)),
            line: { color: c.text, width: 1 },
            xaxis: "x", yaxis: "y", showlegend: false, hoverinfo: "skip",
          },
          {
            type: "scatter", mode: "lines", x: valid,
            y: bb.lower.filter((v) => !isNaN(v)),
            line: { color: c.indicatorSecondary, width: 1, dash: "dot" },
            fill: "tonexty", fillcolor: c.bbFill,
            xaxis: "x", yaxis: "y", showlegend: false, hoverinfo: "skip",
          }
        );
      }

      // Volume
      traces.push({
        type: "bar",
        x: dates,
        y: volumes,
        marker: {
          color: closes.map((cl, i) =>
            i === 0 || cl >= opens[i] ? c.volumeUp : c.volumeDown
          ),
        },
        xaxis: "x", yaxis: "y2", showlegend: false, hoverinfo: "skip",
      });

      // RSI
      if (indicators.has("RSI")) {
        rowCount++;
        const rsi = calculateRSI(closes);
        const axis = `y${rowCount}`;
        traces.push(
          {
            type: "scatter", mode: "lines",
            x: dates.filter((_, i) => !isNaN(rsi[i])),
            y: rsi.filter((v) => !isNaN(v)),
            line: { color: c.indicator, width: 1.5 },
            xaxis: "x", yaxis: axis, showlegend: false,
          },
          {
            type: "scatter", mode: "lines",
            x: [dates[0], dates[dates.length - 1]], y: [70, 70],
            line: { color: c.line, width: 1, dash: "dash" },
            xaxis: "x", yaxis: axis, showlegend: false, hoverinfo: "skip",
          },
          {
            type: "scatter", mode: "lines",
            x: [dates[0], dates[dates.length - 1]], y: [30, 30],
            line: { color: c.line, width: 1, dash: "dash" },
            xaxis: "x", yaxis: axis, showlegend: false, hoverinfo: "skip",
          }
        );
      }

      // MACD
      if (indicators.has("MACD")) {
        rowCount++;
        const macd = calculateMACD(closes);
        const axis = `y${rowCount}`;
        const validIdxs = dates.map((_, i) => i).filter((i) => !isNaN(macd.macd[i]));
        const sigIdxs = validIdxs.filter((i) => !isNaN(macd.signal[i]));
        const histIdxs = validIdxs.filter((i) => !isNaN(macd.histogram[i]));

        traces.push(
          {
            type: "scatter", mode: "lines",
            x: validIdxs.map((i) => dates[i]),
            y: validIdxs.map((i) => macd.macd[i]),
            line: { color: c.indicator, width: 1.5 },
            xaxis: "x", yaxis: axis, showlegend: false,
          },
          {
            type: "scatter", mode: "lines",
            x: sigIdxs.map((i) => dates[i]),
            y: sigIdxs.map((i) => macd.signal[i]),
            line: { color: c.indicatorSecondary, width: 1 },
            xaxis: "x", yaxis: axis, showlegend: false,
          },
          {
            type: "bar",
            x: histIdxs.map((i) => dates[i]),
            y: histIdxs.map((i) => macd.histogram[i]),
            marker: {
              color: histIdxs.map((i) =>
                macd.histogram[i] >= 0 ? c.histUp : c.histDown
              ),
            },
            xaxis: "x", yaxis: axis, showlegend: false,
          }
        );
      }

      const layout = buildLayout(rowCount, indicators, ticker, c);

      Plotly.react(chartRef.current, traces, layout, {
        responsive: true,
        displayModeBar: false,
        scrollZoom: false,
      });
    },
    [ticker]
  );

  // Load Plotly from CDN
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).Plotly) {
      plotlyRef.current = (window as any).Plotly;
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.plot.ly/plotly-2.35.2.min.js";
    script.async = true;
    script.onload = () => {
      plotlyRef.current = (window as any).Plotly;
      if (dataRef.current.length > 0) {
        renderChart(dataRef.current, activeIndicators);
      }
    };
    document.head.appendChild(script);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Load data when ticker or timeframe changes
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    getMarketData(ticker, timeframe)
      .then((data) => {
        if (cancelled) return;
        dataRef.current = data;
        setLoading(false);
        renderChart(data, activeIndicators);
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [ticker, timeframe]); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-render when indicators change
  useEffect(() => {
    if (dataRef.current.length > 0 && plotlyRef.current) {
      renderChart(dataRef.current, activeIndicators);
    }
  }, [activeIndicators, renderChart]);

  // Re-render when theme changes
  useEffect(() => {
    if (dataRef.current.length > 0 && plotlyRef.current) {
      // Small delay to let CSS variables update
      const timeout = setTimeout(() => {
        renderChart(dataRef.current, activeIndicators);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [theme]); // eslint-disable-line react-hooks/exhaustive-deps

  // Resize handler
  useEffect(() => {
    const onResize = () => {
      if (plotlyRef.current && chartRef.current) {
        plotlyRef.current.Plots.resize(chartRef.current);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="mx-auto mt-12 w-full max-w-4xl" aria-label="Market data dashboard">
      {/* Controls */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex gap-1">
          {getAvailableTickers().map((t) => (
            <Button
              key={t}
              variant={ticker === t ? "default" : "ghost"}
              size="sm"
              className={`h-7 px-3 font-mono text-xs ${
                ticker !== t ? "text-muted-foreground hover:text-foreground" : ""
              }`}
              onClick={() => setTicker(t)}
            >
              {t}
            </Button>
          ))}
        </div>

        <div className="mx-2 h-4 w-px bg-border" />

        <div className="flex gap-1">
          {TIMEFRAMES.map((tf) => (
            <Button
              key={tf}
              variant={timeframe === tf ? "default" : "ghost"}
              size="sm"
              className={`h-7 px-2.5 font-mono text-xs ${
                timeframe !== tf ? "text-muted-foreground hover:text-foreground" : ""
              }`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </Button>
          ))}
        </div>

        <div className="mx-2 h-4 w-px bg-border" />

        <div className="flex gap-1">
          {INDICATORS.map((ind) => (
            <Button
              key={ind}
              variant={activeIndicators.has(ind) ? "default" : "ghost"}
              size="sm"
              className={`h-7 px-2.5 font-mono text-xs ${
                !activeIndicators.has(ind) ? "text-muted-foreground hover:text-foreground" : ""
              }`}
              onClick={() => toggleIndicator(ind)}
            >
              {ind === "BOLLINGER" ? "BB" : ind}
            </Button>
          ))}
        </div>

        <Badge
          variant="outline"
          className="ml-auto border-border font-mono text-[10px] text-muted-foreground"
        >
          SAMPLE
        </Badge>
      </div>

      {/* Chart */}
      <div
        className="relative overflow-hidden rounded-lg border border-border bg-card"
        role="img"
        aria-label={`Interactive ${ticker} stock price chart with candlestick data and technical indicators`}
      >
        <div
          ref={chartRef}
          className={`h-[400px] w-full transition-opacity md:h-[450px] ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8">
            {[90, 60, 80, 50, 70].map((w, i) => (
              <div
                key={i}
                className="h-px animate-pulse bg-border"
                style={{ width: `${w}%`, animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        )}
        {error && !loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
            <p className="text-sm">Unable to load chart data</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface ChartColors {
  bg: string;
  grid: string;
  line: string;
  text: string;
  label: string;
  [key: string]: string;
}

function buildLayout(
  rowCount: number,
  indicators: Set<IndicatorType>,
  currentTicker: string,
  c: ChartColors
) {
  const heights = calculateRowHeights(rowCount, indicators);

  const layout: any = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: c.bg,
    font: { family: "Inter, sans-serif", color: c.text, size: 11 },
    margin: { t: 10, r: 10, b: 30, l: 55 },
    showlegend: false,
    xaxis: {
      gridcolor: c.grid,
      linecolor: c.line,
      tickfont: { size: 10, color: c.text },
      rangeslider: { visible: false },
      type: "date",
    },
    yaxis: {
      domain: [heights.candlestickBottom, 1],
      gridcolor: c.grid,
      linecolor: c.line,
      tickfont: { size: 10, color: c.text },
      title: { text: currentTicker, font: { size: 11, color: c.label } },
      side: "right",
    },
    yaxis2: {
      domain: [heights.volumeBottom, heights.volumeTop],
      gridcolor: c.grid,
      linecolor: c.line,
      showticklabels: false,
    },
  };

  let row = 3;
  if (indicators.has("RSI")) {
    layout[`yaxis${row}`] = {
      domain: [heights.rsiBottom!, heights.rsiTop!],
      gridcolor: c.grid,
      linecolor: c.line,
      tickfont: { size: 9, color: c.text },
      title: { text: "RSI", font: { size: 10, color: c.text } },
      range: [0, 100],
      dtick: 20,
      side: "right",
    };
    row++;
  }
  if (indicators.has("MACD")) {
    layout[`yaxis${row}`] = {
      domain: [heights.macdBottom!, heights.macdTop!],
      gridcolor: c.grid,
      linecolor: c.line,
      tickfont: { size: 9, color: c.text },
      title: { text: "MACD", font: { size: 10, color: c.text } },
      side: "right",
    };
  }

  return layout;
}

function calculateRowHeights(rowCount: number, indicators: Set<IndicatorType>) {
  if (rowCount === 2) {
    return { candlestickBottom: 0.15, volumeBottom: 0, volumeTop: 0.12 };
  }
  if (rowCount === 3) {
    const hasRSI = indicators.has("RSI");
    return {
      candlestickBottom: 0.35,
      volumeBottom: 0.22,
      volumeTop: 0.32,
      ...(hasRSI
        ? { rsiBottom: 0, rsiTop: 0.19 }
        : { macdBottom: 0, macdTop: 0.19 }),
    };
  }
  return {
    candlestickBottom: 0.48,
    volumeBottom: 0.37,
    volumeTop: 0.45,
    rsiBottom: 0.19,
    rsiTop: 0.34,
    macdBottom: 0,
    macdTop: 0.16,
  };
}
