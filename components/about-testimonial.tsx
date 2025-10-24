"use client"


import { TextGradientScroll } from "@/components/ui/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/ui/timeline"
// import "./globals.css"
import { StaggerTestimonials } from "@/components/ui/ui/stagger-testimonials"
 import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/ui/smooth-scroll-hero"
// import Chatbot from "../components/chatbot"

export default function ServicesEnhanced() {
  const missionStatement =
    "At TaxiHub, we are dedicated to redefining taxi travel across Sri Lanka. Our mission is simple: to provide safe, reliable, and premium rides for everyone — from tourists exploring the island to locals commuting daily. Every vehicle in our network is carefully maintained, and our drivers are verified, ensuring a clean, professional, and seamless experience every time. With TaxiHub, booking a ride is effortless, travel is comfortable, and your journey is always our top priority."

  const timelineEntries = [
  {
    id: 1,
    image: "/prius.jpeg",
    alt: "Toyota Prius parked near tropical beach road in Sri Lanka",
    title: "Toyota Prius – Comfort & Efficiency",
    description: `
      The Toyota Prius is the perfect choice for solo travelers or small groups who prefer a smooth, fuel-efficient ride around the island. Ideal for city transfers and day trips.
      • Passenger Capacity: 1–3 passengers  
      • Air-conditioned comfort  
      • Eco-friendly hybrid performance  
      • Ample luggage space for airport transfers
    `,
    layout: "left" as const,
  },
  {
    id: 2,
    image: "/Toyota-Hiace-KDH-2.jpg",
    alt: "Toyota Hiace KDH van for family and group travel",
    title: "Toyota Hiace KDH – For Families & Groups",
    description: `
      The Toyota Hiace KDH offers spacious seating and reliable performance for families, business teams, and travel groups exploring Sri Lanka together.
      • Passenger Capacity: 1–10 passengers  
      • Dual air-conditioning system  
      • Comfortable long-distance seating  
      • Perfect for tours and airport pickups
    `,
    layout: "right" as const,
  },
  {
    id: 3,
    image: "/highroof.jpg",
    alt: "Toyota High Roof van ready for long distance tours",
    title: "Toyota High Roof – Maximum Space & Comfort",
    description: `
      Our Toyota High Roof is built for large group transfers, excursions, and sightseeing trips. Travel in comfort with plenty of room for everyone and their luggage.
      - Passenger Capacity: 1–14 passengers - 
      - Fully air-conditioned interior  
      - Extra luggage capacity  
      * Ideal for long-distance and tour packages *
    `,
    layout: "left" as const,
  },
    // {
    //   id: 4,
    //   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
    //   alt: "Runner in dynamic motion showing strength and grace",
    //   title: "Join the Movement",
    //   description:
    //     "Running isn't just about the miles—it's about the moments. The early morning conversations, the shared struggles, the collective victories. At Wadada Run Club, you're not just joining a group, you're joining a family. So lace up, step out, and discover what you're truly capable of. Seriously, what are you waiting for?",
    //   layout: "right" as const,
    // },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Mission Statement Section with Grid Background */}
      <section id="about" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none " />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">OUR MISSION</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800 "
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="fleet" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">EXPLORE OUR VEHICLES</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                TaxiHub offers premium taxi services across Sri Lanka — reliable drivers, clean vehicles, and transparent pricing for every trip
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              See what our{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">TRAVELERS</span>{" "}
              say.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Real experiences from travelers who discovered Sri Lanka in comfort with Taxi Hub.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section> 

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/hero1.png"
          mobileImage="/hero1.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section> 
      {/* <Chatbot /> */}
    </div>
  )
}
