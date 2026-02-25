"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PageTransition } from "@/components/layout/page-transition";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:contact@jackmassey.dev",
    description: "Get in touch about a project or opportunity",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/TerminalGambit",
    description: "Open-source projects and code",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jack-massey",
    description: "Professional network and career updates",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <PageTransition>
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="text-center">
              <h2 className="mb-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Get In Touch
              </h2>
              <p className="mb-10 text-muted-foreground">
                Interested in collaborating on AI/finance projects, or looking for a
                data science & ML engineer? I&apos;d love to connect.
              </p>
            </div>
          </FadeIn>

          {/* Social link cards */}
          <StaggerChildren className="mb-10 grid gap-4 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <StaggerItem key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="block h-full"
                >
                  <Card className="group h-full border-border bg-card transition-all duration-300 hover:border-accent-blue/50 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                      <div className="text-muted-foreground transition-colors group-hover:text-accent-blue">
                        {link.icon}
                      </div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Currently available for */}
          <FadeIn delay={0.2}>
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
                Currently Available For
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  "ML/AI research internships",
                  "Quantitative finance roles",
                  "Technical collaborations",
                  "Open-source contributions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Whether it&apos;s a quantitative finance research project, an ML
                engineering role, or a technical collaboration — I&apos;d love to
                hear about it.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-muted-foreground">
                  Based in Monaco &middot; Open to remote & on-site
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
