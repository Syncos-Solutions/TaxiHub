"use client"

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About TaxiHub</h1>
        <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          We're committed to providing the most reliable, affordable, and customer-friendly taxi services across Sri
          Lanka.
        </p>
      </div>
    </section>
  )
}
