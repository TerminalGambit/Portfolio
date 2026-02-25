"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h1
          className="mb-4 font-heading text-5xl font-bold tracking-tight md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          JACK MASSEY
        </motion.h1>
        <motion.p
          className="mb-2 font-mono text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          ML Engineer &middot; Data &amp; Finance Consultant
        </motion.p>
        <motion.p
          className="mx-auto mb-10 max-w-xl text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
        >
          Machine learning engineer and data consultant building AI-driven
          systems for finance and business intelligence — from predictive
          models to real-world consulting with companies like Generali,
          Valrhona, and JEMA.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
        >
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/projects">Explore My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[130px]">
            <Link href="/about">About Me</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="min-w-[130px]">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
