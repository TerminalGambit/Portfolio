"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

const statusColor: Record<string, string> = {
  Active: "border-accent-blue text-accent-blue",
  "Production Ready": "border-green-500 text-green-600 dark:text-green-400",
  Completed: "border-border text-muted-foreground",
  "In Development": "border-amber-500 text-amber-600 dark:text-amber-400",
};

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function HomeProjectsTeaser() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
            Featured Projects
          </h2>
          <p className="mb-10 text-muted-foreground">
            Highlights from my work in AI, finance, and software engineering.
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
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
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
