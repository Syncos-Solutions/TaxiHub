"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Calendar, Clock, Users, Car } from "lucide-react"

import BookingMap from "./BookingMapClient"


export default function BookingFormEnhanced() {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
    vehicleType: "economy",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    alert("Booking request submitted! Our team will contact you shortly.")
  }

  const sriLankanCities = [
    "Colombo",
    "Kandy",
    "Galle",
    "Jaffna",
    "Trincomalee",
    "Batticaloa",
    "Matara",
    "Negombo",
    "Anuradhapura",
    "Polonnaruwa",
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8">Complete Your Booking</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pickup Location */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <MapPin className="inline mr-2" size={18} />
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {sriLankanCities.slice(0, 4).map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => setFormData({ ...formData, pickup: city })}
                          className="text-xs px-2 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <MapPin className="inline mr-2" size={18} />
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="Enter destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {sriLankanCities.slice(4, 8).map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => setFormData({ ...formData, destination: city })}
                          className="text-xs px-2 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Calendar className="inline mr-2" size={18} />
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Clock className="inline mr-2" size={18} />
                      Time
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Passengers */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Users className="inline mr-2" size={18} />
                      Number of Passengers
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

                  {/* Vehicle Type */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Car className="inline mr-2" size={18} />
                      Vehicle Type
                    </label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="economy">Economy</option>
                      <option value="comfort">Comfort</option>
                      <option value="premium">Premium</option>
                      <option value="van">Van (6+ passengers)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <BookingMap selectedPickup={formData.pickup} selectedDestination={formData.destination} />
          </div>
        </div>
      </div>
    </section>
  )
}
