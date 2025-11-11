"use client"

import React, { useState, useEffect } from "react"
import { MapPin, Calendar, Clock, Users, Car, User, Mail, Phone, Star, Zap } from "lucide-react"
import BookingMap from "./BookingMapClient"

interface FormData {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
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
  const [formData, setFormData] = useState<FormData>({
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.pickup || !formData.destination || 
        !formData.date || !formData.time) {
      alert("Please fill in all required fields!")
      return
    }
    console.log("Booking submitted:", formData)
    alert(`Thank you ${formData.title} ${formData.firstName} ${formData.lastName}! Your booking request has been submitted. We'll contact you at ${formData.phone} shortly.`)
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
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Animation */}
        {/* <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-block mb-4 animate-bounce">
            <Zap className="text-yellow-500" size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Book Your Ride
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Complete the form below and we'll get you on the road in no time ✨
          </p>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-all duration-300 border border-purple-100">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                Booking Details
              </h2>

              <div className="space-y-6">
                {/* Personal Information Section */}
                <div className="pb-6 border-b-2 border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-2">
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
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-400"
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
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-400 hover:shadow-md"
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
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-400 hover:shadow-md"
                      required
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="inline mr-2 text-blue-600" size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-400 hover:shadow-md"
                        required
                      />
                    </div>

                    <div className="transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="inline mr-2 text-purple-600" size={16} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+94 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:border-purple-400 hover:shadow-md"
                        required
                      />
                    </div>
                  </div>

                  <div className="transform hover:scale-105 transition-transform">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline mr-2 text-green-600" size={16} />
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 XX XXX XXXX"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover:border-green-400 hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Journey Details Section */}
                <div className="pb-6 border-b-2 border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 mr-2">
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
                        className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover:border-green-400 hover:shadow-md"
                        required
                      />
                      <div className="mt-2 flex flex-wrap gap-2">
                        {sriLankanCities.slice(0, 4).map((city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => setFormData({ ...formData, pickup: city })}
                            className="text-xs px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-500 hover:to-emerald-500 hover:text-white text-green-700 rounded-full transition-all transform hover:scale-110 shadow-sm hover:shadow-md"
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
                        className="w-full px-4 py-3 border-2 border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all hover:border-red-400 hover:shadow-md"
                        required
                      />
                      <div className="mt-2 flex flex-wrap gap-2">
                        {sriLankanCities.slice(4, 8).map((city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => setFormData({ ...formData, destination: city })}
                            className="text-xs px-3 py-1.5 bg-gradient-to-r from-red-100 to-pink-100 hover:from-red-500 hover:to-pink-500 hover:text-white text-red-700 rounded-full transition-all transform hover:scale-110 shadow-sm hover:shadow-md"
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
                        <Calendar className="inline mr-2 text-blue-600" size={18} />
                        Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-400 hover:shadow-md"
                        required
                      />
                    </div>

                    {/* Time */}
                    <div className="transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="inline mr-2 text-purple-600" size={18} />
                        Time *
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all hover:border-purple-400 hover:shadow-md"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Selection Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-2 mr-2">
                      <Car className="text-white" size={20} />
                    </div>
                    Vehicle Selection
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Passengers */}
                    <div className="transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Users className="inline mr-2 text-orange-600" size={18} />
                        Number of Passengers
                      </label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:border-orange-400 hover:shadow-md"
                      >
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4 Passengers</option>
                        <option value="5">5+ Passengers</option>
                      </select>
                    </div>

                    {/* Vehicle Type */}
                    <div className="transform hover:scale-105 transition-transform">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Type
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all hover:border-yellow-400 hover:shadow-md"
                      >
                        <option value="economy">Economy</option>
                        <option value="comfort">Comfort</option>
                        <option value="premium">Premium</option>
                        <option value="van">Van (6+ passengers)</option>
                        <option value="luxury">Luxury</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="transform hover:scale-105 transition-transform">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      placeholder="Any special requirements? (e.g., child seat, wheelchair accessible, extra luggage space)"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-400 hover:shadow-md resize-none"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <BookingMap selectedPickup={formData.pickup} selectedDestination={formData.destination} />
            
            {/* Info Cards */}
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-white">
                <div className="font-bold text-3xl mb-1 flex items-center">
                  24/7 <Zap className="ml-2 animate-pulse" size={24} />
                </div>
                <div className="text-blue-100 text-sm font-medium">Always Available</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-white">
                <div className="font-bold text-3xl mb-1 flex items-center">
                  5 <Star className="ml-1 fill-white" size={24} />
                </div>
                <div className="text-yellow-100 text-sm font-medium">Customer Rating</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}