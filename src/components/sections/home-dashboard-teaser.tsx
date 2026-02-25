"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";

export function HomeDashboardTeaser() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              {/* Chart preview (static visual) */}
              <div className="relative flex items-center justify-center bg-background p-8 lg:p-12">
                <div className="w-full space-y-3">
                  {/* Simulated chart bars */}
                  <div className="flex items-end gap-1 h-32">
                    {[40, 55, 35, 65, 50, 72, 60, 80, 45, 68, 75, 55, 85, 70, 62, 78, 90, 65, 72, 88].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-foreground/10 dark:bg-foreground/10 transition-all"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground/50">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Sep</span>
                    <span>Dec</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="absolute top-4 right-4 border-border font-mono text-[10px] text-muted-foreground"
                >
                  PREVIEW
                </Badge>
              </div>

              {/* Description */}
              <div className="p-8 lg:p-12">
                <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
                  Market Dashboard
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Interactive technical analysis with candlestick charts, RSI, MACD, and
                  Bollinger Bands — demonstrating data visualization and quantitative
                  finance skills.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["Plotly.js", "Technical Analysis", "Real-time Data"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <Button asChild>
                  <Link href="/dashboard">Launch Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
