"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, getProjectCategories } from "@/data/projects";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PageTransition } from "@/components/layout/page-transition";

const statusColor: Record<string, string> = {
  Active: "border-accent-blue text-accent-blue",
  "Production Ready": "border-green-500 text-green-600 dark:text-green-400",
  Completed: "border-border text-muted-foreground",
  "In Development": "border-amber-500 text-amber-600 dark:text-amber-400",
};

const MAX_VISIBLE_TAGS = 5;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getProjectCategories();

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="mb-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Projects
            </h2>
            <p className="mb-8 text-muted-foreground">
              Featured work in AI, finance, and software engineering.
            </p>
          </FadeIn>

          {/* Category filter bar */}
          <FadeIn delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
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

          {/* Project grid */}
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const extraTags = project.technologies.length - MAX_VISIBLE_TAGS;
                return (
                  <StaggerItem key={project.slug}>
                    <motion.div layout layoutId={project.slug}>
                      <Link href={`/projects/${project.slug}`} className="block h-full">
                        <Card className="group h-full border-border bg-card transition-all duration-300 hover:border-accent-blue/50 hover:shadow-xl hover:-translate-y-1">
                          <CardHeader className="pb-3">
                            <div className="mb-2 flex items-center justify-between">
                              <Badge
                                variant="outline"
                                className={`text-xs ${statusColor[project.status] || ""}`}
                              >
                                {project.status}
                              </Badge>
                              <span className="font-mono text-xs text-muted-foreground">
                                {project.period}
                              </span>
                            </div>
                            <CardTitle className="text-lg leading-tight group-hover:text-accent-blue transition-colors">
                              {project.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                              {project.description}
                            </p>

                            {project.metrics && (
                              <div className="grid grid-cols-2 gap-2">
                                {Object.entries(project.metrics).map(([key, val]) => (
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

                            <ul className="space-y-1">
                              {project.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ring" />
                                  {h}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies
                                .slice(0, MAX_VISIBLE_TAGS)
                                .map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {extraTags > 0 && (
                                <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                                  +{extraTags} more
                                </span>
                              )}
                            </div>

                            {project.github && (
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Source Available
                              </div>
                            )}
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
