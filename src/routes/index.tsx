import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { AmbientCanvas } from '~/components/AmbientCanvas'
import { CustomCursor } from '~/components/CustomCursor'
import { Navbar } from '~/components/Navbar'
import { Hero } from '~/components/Hero'
import { MarqueeTicker } from '~/components/MarqueeTicker'
import { AboutSection } from '~/components/AboutSection'
import { AchievementsSection } from '~/components/AchievementsSection'
import { ExperienceSection } from '~/components/ExperienceSection'
import { WorkSection } from '~/components/WorkSection'
import { InteractiveTerminal } from '~/components/InteractiveTerminal'
import { StackSection } from '~/components/StackSection'
import { ContactSection } from '~/components/ContactSection'
import { Footer } from '~/components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="relative min-h-screen text-[#f2f0ea]">
      <CustomCursor />
      <AmbientCanvas />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <MarqueeTicker />
        <AboutSection />
        <AchievementsSection />
        <ExperienceSection />
        <WorkSection />
        <StackSection />
        <ContactSection />
      </main>

      <InteractiveTerminal />
      <Footer />
    </div>
  )
}

