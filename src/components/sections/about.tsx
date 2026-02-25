"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { education, experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PageTransition } from "@/components/layout/page-transition";

export function About() {
  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero section */}
          <FadeIn>
            <h2 className="mb-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              About
            </h2>
            <p className="mb-8 max-w-2xl text-muted-foreground">
              Computer science graduate pursuing an MSc in Data and Finance at Albert
              School &times; Mines Paris PSL. I build AI systems for quantitative finance
              and deliver data-driven consulting for companies like Generali France,
              Valrhona, JEMA, and SwissBorg.
            </p>
          </FadeIn>

          {/* What I'm looking for */}
          <FadeIn delay={0.1}>
            <div className="mb-8 max-w-2xl">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
                What I&apos;m Looking For
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Starting my MSc in Data and Finance in 2025, I&apos;m seeking
                opportunities at the intersection of machine learning and quantitative
                finance — internships, research collaborations, or roles where I can
                apply predictive modeling to real-world financial systems.
              </p>
            </div>
          </FadeIn>

          {/* What I do best */}
          <FadeIn delay={0.15}>
            <div className="mb-12 max-w-2xl">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
                What I Do Best
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  "End-to-end ML pipelines — data to deployment",
                  "Quantitative finance modeling & market analysis",
                  "Business intelligence & data consulting",
                  "Full-stack application architecture",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ring" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left column: Education + Experience */}
            <div className="space-y-12">
              <div>
                <FadeIn>
                  <h3 className="mb-6 text-sm font-semibold tracking-wide text-muted-foreground">
                    Education
                  </h3>
                </FadeIn>
                <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
                  {education.map((edu, i) => (
                    <FadeIn key={edu.institution} delay={i * 0.08}>
                      <div className="relative">
                        <div className="absolute -left-[25px] top-2 h-2 w-2 rounded-full border border-ring bg-background" />
                        <div className="flex items-baseline gap-2">
                          <p className="font-mono text-xs text-muted-foreground">
                            {edu.period}
                          </p>
                          {edu.location && (
                            <span className="font-mono text-xs text-muted-foreground/60">
                              &middot; {edu.location}
                            </span>
                          )}
                        </div>
                        <p className="font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <Separator className="bg-border" />

              <div>
                <FadeIn>
                  <h3 className="mb-6 text-sm font-semibold tracking-wide text-muted-foreground">
                    Experience
                  </h3>
                </FadeIn>
                <div className="space-y-6">
                  {experience.map((exp, i) => (
                    <FadeIn key={exp.role + exp.company} delay={i * 0.08}>
                      <div>
                        <div className="flex items-baseline justify-between">
                          <p className="font-medium">{exp.role}</p>
                          <span className="font-mono text-xs text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} &middot; {exp.location}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {exp.description}
                        </p>
                        {exp.technologies.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        {exp.publication && (
                          <a
                            href={exp.publication}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent-blue transition-colors hover:text-accent-blue/80"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                            View Publication
                          </a>
                        )}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: Skills */}
            <div>
              <FadeIn>
                <h3 className="mb-6 text-sm font-semibold tracking-wide text-muted-foreground">
                  Skills
                </h3>
              </FadeIn>
              <div className="space-y-6">
                {skillCategories.map((cat, catIdx) => (
                  <FadeIn key={cat.name} delay={catIdx * 0.06}>
                    <div>
                      <p className="mb-2 text-xs font-medium text-muted-foreground">
                        {cat.name}
                      </p>
                      <StaggerChildren className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <StaggerItem key={skill.name}>
                            <Badge
                              variant="outline"
                              className={`font-mono text-xs ${
                                skill.level === "Advanced"
                                  ? "border-ring text-foreground"
                                  : skill.level === "Intermediate"
                                    ? "border-border text-muted-foreground"
                                    : "border-border/50 text-muted-foreground/70"
                              }`}
                            >
                              {skill.name}
                            </Badge>
                          </StaggerItem>
                        ))}
                      </StaggerChildren>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
