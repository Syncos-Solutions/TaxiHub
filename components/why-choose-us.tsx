"use client"

import { Clock, Users, MapPin, CreditCard, Headphones, Shield } from "lucide-react"

const reasons = [
  { icon: Clock, text: "Available 24/7 for your convenience" },
  { icon: Users, text: "Professional and courteous drivers" },
  { icon: CreditCard, text: "Transparent pricing with no hidden fees" },
  { icon: MapPin, text: "Real-time GPS tracking" },
  { icon: Shield, text: "Multiple payment options" },
  { icon: Headphones, text: "Excellent customer support" },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
            <img src="/professional-taxi-driver-with-car.jpg" alt="Why choose us" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Why Choose TaxiHub?</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-foreground text-lg font-medium">{reason.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
