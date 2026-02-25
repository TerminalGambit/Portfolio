import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About — Jack Massey",
  description:
    "Computer science graduate, machine learning engineer. Education, experience, skills, and research in AI-driven finance and quantitative systems.",
};

export default function AboutPage() {
  return <About />;
}
