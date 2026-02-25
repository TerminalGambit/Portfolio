import type { Metadata } from "next";
import { DashboardContent } from "@/components/sections/dashboard-content";

export const metadata: Metadata = {
  title: "Market Dashboard — Jack Massey",
  description:
    "Interactive technical analysis dashboard with candlestick charts, RSI, MACD, and Bollinger Bands. Data visualization and quantitative finance showcase.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
