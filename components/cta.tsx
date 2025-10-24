import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Better Rides?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Download the TaxiGo app today and get $5 off your first ride. Available on iOS and Android.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Download iOS
          </Button>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Download Android
          </Button>
        </div>
      </div>
    </section>
  )
}
