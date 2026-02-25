"use client";

import { lazy, Suspense } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { PageTransition } from "@/components/layout/page-transition";

const MarketDashboard = lazy(() =>
  import("@/components/sections/market-dashboard").then((m) => ({
    default: m.MarketDashboard,
  }))
);

export function DashboardContent() {
  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h1 className="mb-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Market Dashboard
            </h1>
            <p className="mb-8 max-w-2xl text-muted-foreground">
              Interactive technical analysis dashboard with candlestick charts, RSI,
              MACD, and Bollinger Bands. Built to demonstrate data visualization and
              quantitative finance skills.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Suspense
              fallback={
                <div className="h-[500px] w-full animate-pulse rounded-lg border border-border bg-card" />
              }
            >
              <MarketDashboard />
            </Suspense>
          </FadeIn>

          {/* Context section */}
          <FadeIn delay={0.2}>
            <div className="mt-12 rounded-lg border border-border bg-card p-6 md:p-8">
              <h2 className="mb-3 font-heading text-lg font-semibold">
                About This Dashboard
              </h2>
              <p className="mb-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                This dashboard showcases technical analysis capabilities — rendering
                real-time candlestick charts with configurable indicators. It demonstrates
                proficiency in data visualization, financial modeling, and interactive
                web applications.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["Plotly.js", "Canvas Rendering", "Technical Indicators", "Real-time Data", "Responsive Design"].map(
                  (tech) => (
                    <Badge key={tech} variant="outline" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  )
                )}
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/finance-utility-market-analysis">
                  View Finance Utility Project
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
