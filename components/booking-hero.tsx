"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Car, ArrowRight, Star, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BookingHero() {
  return (
    <div className="relative">
    <section className="relative bg-white overflow-hidden pt-20 md:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Floating Orange Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#ff9d00] rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff9d00] rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
           

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Book Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#ff9d00]">Perfect Ride</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-[#ff9d00]/20 -z-0"
                />
              </span>
              <br />
              in Seconds
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
            >
              Experience comfortable, safe, and reliable taxi service across Sri Lanka. 
              Available 24/7 with professional drivers and transparent pricing.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {[
                { icon: Shield, text: "Safe & Secure" },
                { icon: Clock, text: "24/7 Available" },
                { icon: CheckCircle, text: "Best Prices" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100"
                >
                  <div className="bg-[#ff9d00]/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-[#ff9d00]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/#Booking"
                className="group bg-[#ff9d00] hover:bg-[#ff9d00]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="tel:+94776599542"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-[#ff9d00] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Car className="w-5 h-5" />
                Call Now
              </Link>
            </motion.div>
          </div>

          {/* Right Visual - Animated Taxi Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            {/* Decorative Elements */}
            <div className="relative">
              {/* Background Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-[#ff9d00]/20 rounded-full"
              />

              {/* Taxi SVG Illustration */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <svg
                  viewBox="0 0 500 400"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Taxi Body */}
                  <g id="taxi">
                    {/* Main Body */}
                    <rect x="100" y="180" width="300" height="120" rx="10" fill="#ff9d00" />
                    
                    {/* Windows */}
                    <rect x="120" y="150" width="80" height="60" rx="5" fill="#333" opacity="0.3" />
                    <rect x="220" y="150" width="80" height="60" rx="5" fill="#333" opacity="0.3" />
                    <rect x="320" y="150" width="60" height="60" rx="5" fill="#333" opacity="0.3" />
                    
                    {/* Roof */}
                    <path d="M 120 150 L 100 180 L 400 180 L 380 150 Z" fill="#ffb347" />
                    
                    {/* Wheels */}
                    <circle cx="160" cy="300" r="30" fill="#333" />
                    <circle cx="160" cy="300" r="15" fill="#666" />
                    <circle cx="340" cy="300" r="30" fill="#333" />
                    <circle cx="340" cy="300" r="15" fill="#666" />
                    
                    {/* Headlights */}
                    <rect x="390" y="200" width="10" height="15" rx="2" fill="#FFE5B4" />
                    <rect x="390" y="235" width="10" height="15" rx="2" fill="#FF6B6B" />
                    
                    {/* Door Lines */}
                    <line x1="210" y1="180" x2="210" y2="300" stroke="#333" strokeWidth="2" opacity="0.2" />
                    <line x1="310" y1="180" x2="310" y2="300" stroke="#333" strokeWidth="2" opacity="0.2" />
                    
                    {/* TAXI Sign on Roof */}
                    <rect x="220" y="130" width="60" height="20" rx="3" fill="#333" />
                    <text x="250" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TAXI</text>
                  </g>

                  {/* Animated Route Line */}
                  <motion.path
                    d="M 50 350 Q 150 300, 250 320 T 450 350"
                    stroke="#ff9d00"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Location Pins */}
                  <g id="start-pin">
                    <circle cx="50" cy="350" r="8" fill="#4CAF50" />
                    <circle cx="50" cy="350" r="4" fill="white" />
                  </g>
                  
                  <g id="end-pin">
                    <circle cx="450" cy="350" r="8" fill="#FF6B6B" />
                    <circle cx="450" cy="350" r="4" fill="white" />
                  </g>
                </svg>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 bg-white p-4 rounded-full shadow-lg border border-gray-100"
              >
                <MapPin className="w-6 h-6 text-[#ff9d00]" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-10 left-10 bg-white p-4 rounded-full shadow-lg border border-gray-100"
              >
                <Calendar className="w-6 h-6 text-[#ff9d00]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-100"
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "50+", label: "Professional Drivers" },
            { number: "24/7", label: "Customer Support" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ff9d00] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-[#ff9d00] rounded-full"
          />
        </div>
      </motion.div>
        
        
    </section>
   
    </div>
  )
}