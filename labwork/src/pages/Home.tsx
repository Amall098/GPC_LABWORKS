/**
 * Home.tsx
 * Main home page for the GPC Labworks website, assembling all major sections.
 */

import PageShell from '../components/layout/PageShell'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import VisitContactSection from '../components/home/VisitContactSection'
import OnlineOrdersSection from '../components/home/OnlineOrdersSection'
import FooterBar from '../components/home/FooterBar'

/**
 * Home page component displaying an overview of GPC Labworks,
 * including services, store hours, and online ordering options.
 */
export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <VisitContactSection />
      <OnlineOrdersSection />
      <FooterBar />
    </PageShell>
  )
}
