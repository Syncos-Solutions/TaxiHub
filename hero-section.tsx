"use client"

import { LiquidButton } from "@/components/ui/ui/liquid-glass-button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import BookingHero from "./components/booking-hero"
import BookingFormEnhanced from "./components/booking-form-enhanced"

export default function HeroSection() {
  

  return (
    <div id="hero" className="relative w-full overflow-hidden bg-white">
      {/* Container - Full width on mobile/tablet, margins on desktop */}
            <BookingHero />
            <BookingFormEnhanced />
    </div>
  )
}