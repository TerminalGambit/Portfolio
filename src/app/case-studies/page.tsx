import type { Metadata } from "next";
import { CaseStudies } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Jack Massey",
  description:
    "Real-world business consulting projects in data science and finance.",
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
