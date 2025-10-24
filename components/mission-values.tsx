"use client"

import { Target, Heart, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, reliable, and affordable transportation solutions that connect people and communities across Sri Lanka.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize customer satisfaction and safety in every ride, ensuring a comfortable and trustworthy experience.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously improve our services with modern technology and best practices in the taxi industry.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We support local drivers and contribute to the economic growth of communities we serve.",
  },
]

export default function MissionValues() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These principles guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
