import { Contact } from "./components/contactSection/Contact";
import { ExperienceSection } from "./components/exprerienceSection/Experience";
import { Hero } from "./components/heroSection/Hero";
import WorkSection from "./components/workSection/WorkSection";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <Hero />
      <ExperienceSection title="Experience" />
      <ExperienceSection title="Courses" />
      <WorkSection />
      <Contact />
    </>
  );
}
