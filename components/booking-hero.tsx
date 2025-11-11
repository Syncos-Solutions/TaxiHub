"use client"
import { motion } from "framer-motion"
import { MapPinned } from "lucide-react"

export default function BookingHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <div className="inline-block mb-4 animate-bounce">
            <MapPinned className="text-white-500" size={72} />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
          >
            Book Your Ride
          </motion.h1>
       
       

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Quick, easy, and secure booking. Get to your destination safely and on time.
          </motion.p>
         
        
      </div>
    </section>
  )
}
