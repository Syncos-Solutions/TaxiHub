import Navigation from "@/components/navigation"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}
