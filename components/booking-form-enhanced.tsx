"use client"

import React, { useState, useEffect } from "react"
import { MapPin, Calendar, Clock, Users, Car, User, Mail, Phone, Star, Zap, Shield, ThumbsUp, CheckCircle, Award, DollarSign, Headphones } from "lucide-react"
import BookingMap from "./BookingMapClient"

interface FormData {
  title: string
  firstName: string
  lastName: string
  email: string
  whatsapp: string
  pickup: string
  destination: string
  date: string
  time: string
  passengers: string
  vehicleType: string
  specialRequests: string
}

export default function BookingFormEnhanced() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
    vehicleType: "economy",
    specialRequests: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.whatsapp || !formData.pickup || !formData.destination || 
        !formData.date || !formData.time) {
      alert("Please fill in all required fields!")
      return
    }

    setIsSubmitting(true)

    try {
      // Send booking data to API
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert(`Thank you ${formData.title} ${formData.firstName} ${formData.lastName}! Your booking request has been submitted successfully. 

📧 We've sent a confirmation email to ${formData.email}
📱 We'll contact you on WhatsApp at ${formData.whatsapp} shortly.

Please check your email for booking details.`)
        
        // Reset form
        setFormData({
          title: "Mr",
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: "",
          pickup: "",
          destination: "",
          date: "",
          time: "",
          passengers: "1",
          vehicleType: "economy",
          specialRequests: "",
        })
      } else {
        throw new Error('Failed to send booking')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('❌ Sorry, there was an error submitting your booking. Please try again or contact us directly at +94 701234567')
    } finally {
      setIsSubmitting(false)
    }
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

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified drivers and well-maintained vehicles for your safety"
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Transparent pricing with no hidden charges"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service for your convenience"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Highly rated by thousands of satisfied customers"
    },
  ]

  return (
    <section id="Booking" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-wider text-gray-900">
          BOOK YOUR RIDE WITH MIHITH TOURS
        </h2>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff9d00] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-all duration-300 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-2 h-8 bg-[#ff9d00] rounded-full mr-3 animate-pulse"></div>
                Booking Details
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="pb-6 border-b-2 border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="bg-[#ff9d00] rounded-full p-2 mr-2">
                        <User className="text-white" size={20} />
                      </div>
                      Personal Information
                    </h3>
                    
                    {/* Name with Title */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="transform hover:scale-105 transition-transform">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Title
                        </label>
                        <select
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300"
                          required
                        >
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Ms">Ms</option>
                          <option value="Dr">Dr</option>
                        </select>
                      </div>
                      
                      <div className="col-span-2 transform hover:scale-105 transition-transform">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4 transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="mb-4 transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="inline mr-2 text-gray-600" size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                        required
                      />
                    </div>

                    {/* WhatsApp Number */}
                    <div className="transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="inline mr-2 text-gray-600" size={16} />
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+94 XX XXX XXXX"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                        required
                      />
                    </div>
                  </div>

                  {/* Journey Details Section */}
                  <div className="pb-6 border-b-2 border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="bg-[#ff9d00] rounded-full p-2 mr-2">
                        <MapPin className="text-white" size={20} />
                      </div>
                      Journey Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Pickup Location */}
                      <div className="transform hover:scale-105 transition-transform">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter pickup location"
                          value={formData.pickup}
                          onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                          required
                        />
                        <div className="mt-2 flex flex-wrap gap-2">
                          {sriLankanCities.slice(0, 4).map((city) => (
                            <button
                              key={city}
                              type="button"
                              onClick={() => setFormData({ ...formData, pickup: city })}
                              className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-[#ff9d00] hover:text-white text-gray-700 rounded-full transition-all transform hover:scale-110 shadow-sm hover:shadow-md"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Destination */}
                      <div className="transform hover:scale-105 transition-transform">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Destination *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter destination"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                          required
                        />
                        <div className="mt-2 flex flex-wrap gap-2">
                          {sriLankanCities.slice(4, 8).map((city) => (
                            <button
                              key={city}
                              type="button"
                              onClick={() => setFormData({ ...formData, destination: city })}
                              className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-800 hover:text-white text-gray-700 rounded-full transition-all transform hover:scale-110 shadow-sm hover:shadow-md"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Date */}
                      <div className="transform hover:scale-105 transition-transform">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Calendar className="inline mr-2 text-gray-600" size={18} />
                          Date *
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                          required
                        />
                      </div>

                      {/* Time */}
                      <div className="transform hover:scale-105 transition-transform">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <Clock className="inline mr-2 text-gray-600" size={18} />
                          Time *
                        </label>
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9d00] focus:border-transparent transition-all hover:border-gray-300 hover:shadow-md"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff9d00] hover:bg-[#ff9d00]/90 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Booking...
                      </span>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className={`transition-all duration-1000 delay-400 space-y-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <BookingMap selectedPickup={formData.pickup} selectedDestination={formData.destination} />
          </div>
        </div>
      </div>
    </section>
  )
}