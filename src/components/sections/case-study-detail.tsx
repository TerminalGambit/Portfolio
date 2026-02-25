"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/data/case-studies";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PageTransition } from "@/components/layout/page-transition";

const statusColor: Record<string, string> = {
  Complete: "border-border text-muted-foreground",
  "Production Ready": "border-green-500 text-green-600 dark:text-green-400",
  "In Progress": "border-amber-500 text-amber-600 dark:text-amber-400",
};

export function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/case-studies" className="transition-colors hover:text-foreground">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-foreground">{caseStudy.company}</span>
            </nav>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.05}>
            <div className="mb-8">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className={statusColor[caseStudy.status] || ""}
                >
                  {caseStudy.status}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {caseStudy.companyType}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  {caseStudy.period}
                </span>
              </div>
              <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {caseStudy.title}
              </h1>
              <p className="text-lg font-medium text-foreground">
                {caseStudy.company}
              </p>
            </div>
          </FadeIn>

          {/* Summary */}
          <FadeIn delay={0.1}>
            <div className="mb-10">
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {caseStudy.summary}
              </p>
            </div>
          </FadeIn>

          {/* The Problem */}
          <FadeIn delay={0.15}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                The Problem
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {caseStudy.problem}
              </p>
            </div>
          </FadeIn>

          {/* Our Approach */}
          <FadeIn delay={0.2}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Our Approach
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {caseStudy.approach}
              </p>
            </div>
          </FadeIn>

          {/* Key Metrics */}
          <StaggerChildren className="mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {Object.entries(caseStudy.metrics).map(([key, val]) => (
              <StaggerItem key={key}>
                <div className="rounded-lg border border-border bg-card px-5 py-4">
                  <p className="font-mono text-2xl font-semibold">{val}</p>
                  <p className="text-sm text-muted-foreground">{key}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Impact */}
          <FadeIn delay={0.25}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Impact
              </h2>
              <ul className="space-y-3">
                {caseStudy.impact.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <svg
                      className="mt-1 h-4 w-4 flex-shrink-0 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Methodologies */}
          <FadeIn delay={0.3}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Methodologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.methodologies.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Technologies */}
          <FadeIn delay={0.35}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Deliverables */}
          <FadeIn delay={0.4}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Deliverables
              </h2>
              <ul className="space-y-3">
                {caseStudy.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <svg
                      className="mt-1 h-4 w-4 flex-shrink-0 text-accent-blue"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Back action */}
          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="ghost">
                <Link href="/case-studies">Back to Case Studies</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
