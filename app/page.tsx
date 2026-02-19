import { AdaptiveBackground } from "@/components/background/AdaptiveBackground";
import { Navigation } from "@/components/layout/Navigation";
import { ContactSection } from "@/components/sections/ContactSection";
import { EcosystemPillars } from "@/components/sections/EcosystemPillars";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { ImpactDashboard } from "@/components/sections/ImpactDashboard";
import { InitiativesTimeline } from "@/components/sections/InitiativesTimeline";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { Methodology } from "@/components/sections/Methodology";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { QuotesWall } from "@/components/sections/QuotesWall";

export default function Home() {
  return (
    <>
      <AdaptiveBackground />
      <Navigation />
      <main>
        <Hero />
        <MarqueeSection />
        <ImpactDashboard />
        <EcosystemPillars />
        <Methodology />
        <InitiativesTimeline />
        <QuotesWall />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
