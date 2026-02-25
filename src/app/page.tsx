import { Hero } from "@/components/sections/hero";
import { HomeProjectsTeaser } from "@/components/sections/home-projects-teaser";
import { HomeAboutTeaser } from "@/components/sections/home-about-teaser";
import { HomeDashboardTeaser } from "@/components/sections/home-dashboard-teaser";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProjectsTeaser />
      <HomeDashboardTeaser />
      <HomeAboutTeaser />
    </>
  );
}
