"use client"

import { Target, Heart, Zap, Users, Award, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, reliable, and affordable transportation solutions that connect people and communities across Sri Lanka.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize customer satisfaction and safety in every ride, ensuring a comfortable and trustworthy experience.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously improve our services with modern technology and best practices in the taxi industry.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Users,
    title: "Community",
    description: "We support local drivers and contribute to the economic growth of communities we serve.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of service quality and professional conduct in all operations.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We are committed to sustainable growth and expanding our services to reach more customers.",
    color: "from-indigo-500 to-indigo-600",
  },
]

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "1000+", label: "Active Drivers" },
  { number: "100+", label: "Cities Covered" },
  { number: "24/7", label: "Service Available" },
]

export default function AboutUsEnhanced() {
  return (
    <div className="space-y-20">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About TaxiHub</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for safe, reliable, and affordable transportation across Sri Lanka
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Our <span className="text-accent">Values & Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                  <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 hover:border-accent/50 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-accent/20 to-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          className="text-accent group-hover:rotate-12 transition-transform duration-300"
                          size={32}
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Meet Our <span className="text-accent">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your transportation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", image: "/professional-man-portrait.png" },
              { name: "Priya Silva", role: "Operations Manager", image: "/professional-woman-portrait.png" },
              { name: "Anil Perera", role: "Customer Support Lead", image: "/professional-man-portrait.png" },
              { name: "Nisha Jayawardena", role: "Technology Director", image: "/professional-woman-portrait.png" },
            ].map((member, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 overflow-hidden rounded-2xl shadow-lg relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
