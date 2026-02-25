"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skillCategories } from "@/data/skills";
import { FadeIn } from "@/components/animations/fade-in";

const topSkills = skillCategories
  .flatMap((cat) => cat.skills)
  .filter((s) => s.level === "Advanced")
  .slice(0, 8);

export function HomeAboutTeaser() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeIn>
            <div>
              <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
                About Me
              </h2>
              <p className="mb-4 text-muted-foreground">
                Computer science graduate starting an MSc in Data and Finance at Albert
                School &times; Mines Paris PSL. I build AI systems for quantitative finance,
                with experience across machine learning, full-stack development, and research.
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                I&apos;m seeking opportunities at the intersection of machine learning and
                quantitative finance — internships, research collaborations, or roles where
                I can apply predictive modeling to real-world financial systems.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="border-ring font-mono text-xs text-foreground"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "ML Pipelines",
                  "Quant Finance",
                  "Full-Stack",
                  "Research",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
