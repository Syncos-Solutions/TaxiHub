import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ServicesEnhanced from "@/components/services-enhanced"
import WhyChooseUs from "@/components/why-choose-us"
import VehicleSlider from "@/components/vehicle-slider"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesEnhanced />
      <VehicleSlider />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
