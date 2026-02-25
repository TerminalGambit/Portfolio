import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects — Jack Massey",
  description:
    "Explore projects in machine learning, AI, quantitative finance, game development, and full-stack engineering by Jack Massey.",
};

export default function ProjectsPage() {
  return <Projects />;
}
