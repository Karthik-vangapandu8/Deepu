import { HeroSection } from '@/components/HeroSection'
import { JourneySection } from '@/components/JourneySection'
import ProjectsSection from '@/components/ProjectsSection'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Film Grain */}
        <div className="absolute inset-0 film-grain mix-blend-overlay" />
        
        {/* Vintage Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-40" />
        
        {/* Film Strip Borders */}
        <div className="absolute top-0 left-0 w-8 h-full film-strip" />
        <div className="absolute top-0 right-0 w-8 h-full film-strip" />
      </div>

      {/* Spotlight Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 spotlight opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 spotlight opacity-20 blur-3xl" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className="cinematic-fade-in">
          <HeroSection />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 mahanati-gradient opacity-10" />
          <JourneySection />
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--vintage-black)] opacity-90" />
          <ProjectsSection />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 mahanati-gradient opacity-10" />
          <ContactSection />
        </div>
      </div>
      
      {/* Floating Quotes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-96">
            {[
              "Dreams take flight",
              "Courage finds its way",
              "Innovation sparks change"
            ].map((quote, index) => (
              <p
                key={index}
                className="text-gold/10 text-4xl retro-text italic float"
                style={{ animationDelay: `${index * 2}s` }}
              >
                {quote}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Golden Age Decorative Elements */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
        <div className="golden-accent" />
        <div className="h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent mt-2" />
      </div>
    </main>
  )
}
