"use client"

import { useState } from "react"
import { Car, Users, Zap, Shield, Smartphone, Award, Clock, MapPin } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Economy Rides",
    description: "Affordable and comfortable rides for your daily commute",
    features: ["Budget-friendly", "Reliable service"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Group Rides",
    description: "Travel with friends and family in spacious vehicles",
    features: ["Spacious", "Group discounts"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Express Service",
    description: "Quick pickups and fast routes to your destination",
    features: ["Fast pickup", "Quick routes"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Premium Safety",
    description: "Verified drivers and real-time tracking for peace of mind",
    features: ["Verified drivers", "Real-time tracking"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Easy Booking",
    description: "Book your ride in seconds with our mobile app",
    features: ["Quick booking", "Multiple payment options"],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Luxury rides with professional drivers",
    features: ["Luxury vehicles", "Professional drivers"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Available round the clock for your convenience",
    features: ["Always available", "Night service"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Serving all major cities and towns in Sri Lanka",
    features: ["Island-wide", "Remote areas"],
    color: "from-red-500 to-red-600",
  },
]

export default function ServicesEnhanced() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Premium <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience world-class taxi services with cutting-edge technology and exceptional customer care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 hover:border-accent/50 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-accent/20 to-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-accent group-hover:rotate-12 transition-transform duration-300" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center gap-2 text-sm text-primary/70 group-hover:text-accent transition-colors duration-300"
                          style={{
                            opacity: hoveredIndex === index ? 1 : 0.7,
                            transform: hoveredIndex === index ? "translateX(0)" : "translateX(-10px)",
                            transition: `all 0.3s ease ${fIndex * 50}ms`,
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
