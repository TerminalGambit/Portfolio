"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/case-studies";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

const statusColor: Record<string, string> = {
  Complete: "border-green-500 text-green-600 dark:text-green-400",
  "Production Ready": "border-accent-blue text-accent-blue",
  "In Progress": "border-amber-500 text-amber-600 dark:text-amber-400",
};

const featured = caseStudies.filter((cs) => cs.featured).slice(0, 3);

export function HomeCaseStudiesTeaser() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
            Case Studies
          </h2>
          <p className="mb-10 text-muted-foreground">
            Real-world business consulting — from problem framing to measurable impact.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {featured.map((cs) => {
            const metricEntries = Object.entries(cs.metrics).slice(0, 3);
            return (
              <StaggerItem key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="block h-full">
                  <Card className="group h-full border-border bg-card transition-all duration-300 hover:border-accent-blue/50 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className={`text-xs ${statusColor[cs.status] || ""}`}
                        >
                          {cs.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          {cs.companyType}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-accent-blue transition-colors">
                        {cs.company}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {cs.title}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 grid grid-cols-3 gap-2">
                        {metricEntries.map(([label, value]) => (
                          <div key={label} className="text-center">
                            <p className="font-mono text-sm font-semibold text-accent-blue">
                              {value}
                            </p>
                            <p className="text-[10px] text-muted-foreground leading-tight">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-xs font-medium text-accent-blue opacity-0 transition-opacity group-hover:opacity-100">
                        View Case Study &rarr;
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/case-studies">View All Case Studies &rarr;</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
