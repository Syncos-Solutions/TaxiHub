import Navigation from "@/components/navigation"
import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsList from "@/components/testimonials-list"
import Footer from "@/components/footer"

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TestimonialsHero />
      <TestimonialsList />
      <Footer />
    </main>
  )
}
