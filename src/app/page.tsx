import Navigation from '@/components/shared/navigation'
import Hero from '@/components/home/hero'
import Projects from '@/components/home/projects'
import Footer from '@/components/shared/footer'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Navigation - Full width on mobile, right-aligned on desktop */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      <Footer />
      
    </div>
  )
}
