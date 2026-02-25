"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PageTransition } from "@/components/layout/page-transition";

const statusColor: Record<string, string> = {
  Active: "border-accent-blue text-accent-blue",
  "Production Ready": "border-green-500 text-green-600 dark:text-green-400",
  Completed: "border-border text-muted-foreground",
  "In Development": "border-amber-500 text-amber-600 dark:text-amber-400",
};

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/projects" className="transition-colors hover:text-foreground">
                Projects
              </Link>
              <span>/</span>
              <span className="text-foreground">{project.title}</span>
            </nav>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.05}>
            <div className="mb-8">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className={statusColor[project.status] || ""}
                >
                  {project.status}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          </FadeIn>

          {/* Metrics */}
          {project.metrics && (
            <StaggerChildren className="mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Object.entries(project.metrics).map(([key, val]) => (
                <StaggerItem key={key}>
                  <div className="rounded-lg border border-border bg-card px-5 py-4">
                    <p className="font-mono text-2xl font-semibold">{val}</p>
                    <p className="text-sm text-muted-foreground">{key}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}

          {/* Highlights */}
          <FadeIn delay={0.15}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-blue" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Technologies */}
          <FadeIn delay={0.2}>
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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

          {/* Actions */}
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <Button asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source
                  </a>
                </Button>
              )}
              {project.liveDemo && (
                <Button asChild variant="outline">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              )}
              <Button asChild variant="ghost">
                <Link href="/projects">Back to Projects</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
