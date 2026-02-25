import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact — Jack Massey",
  description:
    "Get in touch with Jack Massey for AI/finance projects, ML engineering roles, or technical collaborations.",
};

export default function ContactPage() {
  return <Contact />;
}
