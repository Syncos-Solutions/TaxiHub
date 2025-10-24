"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Amara Wijesinghe",
    role: "Business Professional",
    rating: 5,
    text: "TaxiHub has been my go-to service for airport transfers. Always on time, professional drivers, and great rates!",
    image: "/diverse-woman-avatar.png",
  },
  {
    name: "Roshan Perera",
    role: "Student",
    rating: 5,
    text: "The booking process is so easy and the drivers are friendly. I feel safe every time I use TaxiHub.",
    image: "/man-avatar.png",
  },
  {
    name: "Lakshmi Jayawardena",
    role: "Homemaker",
    rating: 5,
    text: "Excellent service! The drivers know the city well and the prices are transparent. Highly recommended!",
    image: "/diverse-woman-avatar.png",
  },
  {
    name: "Suresh Kumar",
    role: "Entrepreneur",
    rating: 5,
    text: "I use TaxiHub for all my business travels. Reliable, professional, and always available when I need them.",
    image: "/man-avatar.png",
  },
  {
    name: "Nisha Silva",
    role: "Healthcare Worker",
    rating: 5,
    text: "Working irregular shifts, I need a taxi service I can trust. TaxiHub is always there for me, 24/7!",
    image: "/diverse-woman-avatar.png",
  },
  {
    name: "Dinesh Mendis",
    role: "Freelancer",
    rating: 5,
    text: "Great experience every single time. The app is user-friendly and the customer support is fantastic.",
    image: "/man-avatar.png",
  },
]

export default function TestimonialsList() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
