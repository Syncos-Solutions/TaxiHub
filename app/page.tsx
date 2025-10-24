import Navigation from "@/components/navigation"
import HeroSection from "@/hero-section"
import ServicesEnhanced from "@/components/about-testimonial"
// import WhyChooseUs from "@/components/why-choose-us"
//import VehicleSlider from "@/components/vehicle-slider"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesEnhanced />
      
      
      <Footer />
    </main>
  )
}
