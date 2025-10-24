"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Calendar, Clock, Users } from "lucide-react"

export default function Hero() {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking:", formData)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/placeholder.svg?height=800&width=1200&query=sri%20lankan%20taxi%20car)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
              Your Ride, <span className="text-accent">Your Way</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Fast, reliable, and affordable taxi services across Sri Lanka. Book your ride in seconds and travel with
              confidence 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-center"
              >
                Book Now
              </Link>
              <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-foreground/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold text-primary mb-6">Book Your Ride</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Time
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  <Users className="inline mr-2" size={16} />
                  Passengers
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5+ Passengers</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
