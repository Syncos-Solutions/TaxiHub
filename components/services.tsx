"use client"

import { Car, Users, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Economy Rides",
    description: "Affordable and comfortable rides for your daily commute",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Group Rides",
    description: "Travel with friends and family in spacious vehicles",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Express Service",
    description: "Quick pickups and fast routes to your destination",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Premium Safety",
    description: "Verified drivers and real-time tracking for peace of mind",
    color: "from-green-500 to-green-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of taxi services designed to meet every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 hover:border-accent/50 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="text-accent group-hover:scale-110 transition-transform" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
