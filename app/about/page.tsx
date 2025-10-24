import Navigation from "@/components/navigation"
import AboutHero from "@/components/about-hero"
import AboutUsEnhanced from "@/components/about-us-enhanced"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutUsEnhanced />
      <Footer />
    </main>
  )
}
