// components/how-it-works-section.tsx
"use client"

import { motion, useInView } from "framer-motion"
import { MapPin, DollarSign, CheckCircle, Car, ArrowRight, Sparkles, Phone } from "lucide-react"
import { useRef, useState } from "react"

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Book Your Taxi",
      description: "Visit our site and enter your pickup location and destination. Choose your preferred vehicle type.",
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Get Instant Quote",
      description: "Receive transparent pricing instantly. No hidden fees, no surprises—just honest, upfront costs.",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Confirm Booking",
      description: "Review your details and confirm. Both you and our driver will be notified immediately.",
    },
    {
      number: "04",
      icon: Car,
      title: "Enjoy Your Ride",
      description: "Sit back and relax. Your professional driver will ensure a safe and comfortable journey.",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none"> */}
        {/* Geometric Shapes */}
        {/* <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-48 -right-48 w-96 h-96 border-[40px] border-[hsl(var(--chart-3))]/10 rounded-full"
        /> */}
        {/* <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border-[50px] border-black/5 rounded-full"
        /> */}
        
        {/* Floating Particles */}
        {/* {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-[hsl(var(--chart-3))] rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 relative"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-block mb-8 relative"
          >
            {/* <div className="relative bg-gradient-to-r from-black via-[hsl(var(--chart-3))] to-black p-[2px] rounded-full">
              <div className="bg-white px-8 py-3 rounded-full flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-[hsl(var(--chart-3))]" />
                </motion.div>
                <span className="font-black text-sm tracking-wider text-black">SIMPLE PROCESS</span>
              </div>
            </div> */}
            
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[hsl(var(--chart-3))] rounded-full blur-xl -z-10"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative"
          >
            
            <span className="bg-gradient-to-br text-4xl md:text-6xl from-black via-black to-[hsl(var(--chart-3))] bg-clip-text text-transparent">
              HOW IT WORKS
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Your journey to seamless travel starts here. Four simple steps, endless possibilities.
          </motion.p>
        </motion.div>

        {/* Steps - Horizontal Timeline Design */}
        <div className="max-w-7xl mx-auto mb-24">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Animated Progress Line */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-black via-[hsl(var(--chart-3))] to-black rounded-full origin-left"
              />
            </div>

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <StepCardHorizontal key={step.number} step={step} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <StepCardVertical key={step.number} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* CTA Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black p-[2px]">
            <div className="relative bg-black rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" 
                  style={{
                    backgroundImage: `
                      linear-gradient(hsl(var(--chart-3)) 1px, transparent 1px),
                      linear-gradient(90deg, hsl(var(--chart-3)) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                  }}
                />
              </div>

              {/* Radial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--chart-3))]/20 via-transparent to-transparent" />

              <div className="relative z-10">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-4">
                    Ready to Ride?
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Experience premium taxi service across Sri Lanka. Book now or explore our tour packages.
                  </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  {/* Primary CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "/booking")}
                    className="group relative overflow-hidden bg-gradient-to-r from-[hsl(var(--chart-3))] to-[hsl(var(--destructive-foreground))] text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      style={{ opacity: 0.2 }}
                    />
                    <span className="relative flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Book Your Ride Now
                    </span>
                  </motion.button>

                  {/* Secondary CTA */}
                  <motion.a
                    href="https://mihithlankatours.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg backdrop-blur-sm hover:border-white/60 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      Explore Tours
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.a>
                </motion.div>

                {/* Bottom Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="text-center text-sm text-gray-400 mt-8"
                >
                  Need multiple destinations or custom tours?{" "}
                  <a
                    href="https://mihithlankatours.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--chart-3))] hover:underline font-semibold"
                  >
                    Visit Mihith Lanka Tours
                  </a>
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
        >
          {["Instant Quotes", "Verified Drivers", "24/7 Available", "Island-Wide"].map((text, i) => (
            <TrustBadge key={text} text={text} delay={1.2 + i * 0.1} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Desktop Step Card (Horizontal Timeline)
function StepCardHorizontal({ step, index, isInView }: { step: any; index: number; isInView: boolean }) {
  const Icon = step.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: 0.6 + index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Icon Circle */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? -10 : 0 
        }}
        className="relative mx-auto w-32 h-32 mb-8"
      >
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(var(--chart-3))] to-black p-[3px]"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Icon className="w-12 h-12 text-black" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute inset-0 rounded-full bg-[hsl(var(--chart-3))] -z-10"
        />

        {/* Number Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ 
            type: "spring",
            delay: 0.8 + index * 0.15,
            stiffness: 200,
            damping: 15
          }}
          className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-sm shadow-lg"
        >
          {step.number}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-black text-black mb-3 tracking-wide">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Hover Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-8 rounded-full bg-[hsl(var(--chart-3))]/20 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-[hsl(var(--chart-3))]" />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Mobile Step Card (Vertical Timeline)
function StepCardVertical({ step, index, isInView }: { step: any; index: number; isInView: boolean }) {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: 0.6 + index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="relative flex gap-6"
    >
      {/* Timeline Line */}
      {index < 3 && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--chart-3))] to-transparent" />
      )}

      {/* Icon Circle */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ 
            type: "spring",
            delay: 0.7 + index * 0.15,
            stiffness: 200,
            damping: 15
          }}
          className="relative w-16 h-16"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(var(--chart-3))] to-black p-[2px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Icon className="w-7 h-7 text-black" strokeWidth={1.5} />
            </div>
          </div>

          {/* Number Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">
            {step.number}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-black text-black mb-2 tracking-wide">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

// Trust Badge Component
function TrustBadge({ text, delay, isInView }: { text: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-[hsl(var(--chart-3))] rounded-2xl p-4 transition-all duration-300"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--chart-3))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-center justify-center gap-2">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
          }}
          className="w-2 h-2 rounded-full bg-[hsl(var(--chart-3))]"
        />
        <span className="text-sm font-bold text-black tracking-wide">{text}</span>
      </div>
    </motion.div>
  )
}