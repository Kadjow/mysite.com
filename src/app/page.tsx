import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { BeyondCodeSection } from "@/components/sections/beyond-code-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WorkMethodSection } from "@/components/sections/work-method-section";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,oklch(0.86_0.11_190_/_0.22),transparent_40%),radial-gradient(circle_at_top_right,oklch(0.78_0.08_150_/_0.14),transparent_30%)]" />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <WorkMethodSection />
        <BeyondCodeSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
