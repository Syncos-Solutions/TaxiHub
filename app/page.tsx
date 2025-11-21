import Navigation from "@/components/navigation"
import HeroSection from "@/hero-section"
import ServicesEnhanced from "@/components/about-testimonial"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesEnhanced />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}