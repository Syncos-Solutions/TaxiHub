import Navigation from "@/components/navigation"
import BookingHero from "@/components/booking-hero"
import BookingFormEnhanced from "@/components/booking-form-enhanced"
import Footer from "@/components/footer"

export default function Booking() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BookingHero />
      <BookingFormEnhanced />
      <Footer />
    </main>
  )
}
