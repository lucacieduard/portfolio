import { Contact } from "./components/contactSection/Contact";
import { ExperienceSection } from "./components/exprerienceSection/Experience";
import { Hero } from "./components/heroSection/Hero";
import WorkSection from "./components/workSection/WorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <WorkSection />
      <Contact />
    </>
  );
}
