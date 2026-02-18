import { AdaptiveBackground } from '@/components/background/AdaptiveBackground'
import { Navigation } from '@/components/layout/Navigation'
import { Hero } from '@/components/sections/Hero'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { ImpactDashboard } from '@/components/sections/ImpactDashboard'
import { EcosystemPillars } from '@/components/sections/EcosystemPillars'
import { Methodology } from '@/components/sections/Methodology'
import { InitiativesTimeline } from '@/components/sections/InitiativesTimeline'
import { QuotesWall } from '@/components/sections/QuotesWall'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

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
  )
}
