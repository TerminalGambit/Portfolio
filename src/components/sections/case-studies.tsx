"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/case-studies";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PageTransition } from "@/components/layout/page-transition";

const statusColor: Record<string, string> = {
  Complete: "border-border text-muted-foreground",
  "Production Ready": "border-green-500 text-green-600 dark:text-green-400",
  "In Progress": "border-amber-500 text-amber-600 dark:text-amber-400",
};

const MAX_VISIBLE_TAGS = 4;
const MAX_VISIBLE_IMPACT = 2;
const MAX_VISIBLE_METRICS = 3;

function getCaseStudyCategories(): string[] {
  const types = Array.from(new Set(caseStudies.map((cs) => cs.companyType)));
  return ["All", ...types];
}

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getCaseStudyCategories();

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.companyType === activeCategory);

  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="mb-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Case Studies
            </h2>
            <p className="mb-8 text-muted-foreground">
              Real-world consulting projects in data science, optimization, and finance.
            </p>
          </FadeIn>

          {/* Category filter bar */}
          <FadeIn delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies by industry">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all ${
                    activeCategory === cat
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-ring hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Case studies grid */}
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((cs) => {
                const extraTags = cs.methodologies.length - MAX_VISIBLE_TAGS;
                const metricEntries = Object.entries(cs.metrics).slice(0, MAX_VISIBLE_METRICS);
                return (
                  <StaggerItem key={cs.slug}>
                    <motion.div layout layoutId={cs.slug}>
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
                              <span className="font-mono text-xs text-muted-foreground">
                                {cs.period}
                              </span>
                            </div>

                            {/* Client badge */}
                            <div className="mb-1 flex items-center gap-2">
                              <span className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] font-medium text-foreground">
                                {cs.company}
                              </span>
                              <span className="text-[11px] text-muted-foreground">
                                {cs.companyType}
                              </span>
                            </div>

                            <CardTitle className="text-lg leading-tight group-hover:text-accent-blue transition-colors">
                              {cs.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                              {cs.summary}
                            </p>

                            {/* Key metrics */}
                            {metricEntries.length > 0 && (
                              <div className="grid grid-cols-2 gap-2">
                                {metricEntries.map(([key, val]) => (
                                  <div
                                    key={key}
                                    className="rounded-md border border-border bg-background px-3 py-2"
                                  >
                                    <p className="font-mono text-sm font-semibold">{val}</p>
                                    <p className="text-xs text-muted-foreground">{key}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Impact bullets */}
                            <ul className="space-y-1">
                              {cs.impact.slice(0, MAX_VISIBLE_IMPACT).map((h) => (
                                <li
                                  key={h}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ring" />
                                  {h}
                                </li>
                              ))}
                            </ul>

                            {/* Methodology tags */}
                            <div className="flex flex-wrap gap-1.5">
                              {cs.methodologies
                                .slice(0, MAX_VISIBLE_TAGS)
                                .map((method) => (
                                  <span
                                    key={method}
                                    className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                                  >
                                    {method}
                                  </span>
                                ))}
                              {extraTags > 0 && (
                                <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                                  +{extraTags} more
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </AnimatePresence>
          </StaggerChildren>
        </div>
      </section>
    </PageTransition>
  );
}
