"use client"

import { LiquidButton } from "@/components/ui/ui/liquid-glass-button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Desktop/Tablet images
  const desktopSlides = [
    {
      image: "/1.png",
      alt: "Group of runners in motion",
    },
    {
      image: "/2.png",
      alt: "Female runner with motion blur",
    },
  ]

  // Mobile images
  const mobileSlides = [
    {
      image: "/1-mobile.png",
      alt: "Group of runners in motion",
    },
    {
      image: "/2-mobile.png",
      alt: "Female runner with motion blur",
    },
  ]

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopSlides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [desktopSlides.length])

  // Navigation handlers
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % desktopSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + desktopSlides.length) % desktopSlides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="hero" className="relative w-full overflow-hidden bg-white">
      {/* Container - Full width on mobile/tablet, margins on desktop */}
      <div className="relative w-full px-2 py-20 sm:px-3 sm:py-22 md:px-4 md:py-24 lg:px-12 lg:py-32 xl:px-16 xl:py-36">
        
        {/* Image Container with Navigation Buttons */}
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative flex items-center gap-0 lg:gap-6">
            
            {/* Previous Button - Only visible on large screens */}
            <button
              onClick={prevSlide}
              className="hidden lg:flex flex-shrink-0 text-gray-800 hover:text-[#ff9d00] transition-all duration-200 p-3 hover:scale-110 transform bg-white rounded-full shadow-lg hover:shadow-xl z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image Slider Container */}
            <div className="relative flex-1 w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl">
              {/* Responsive height using Tailwind classes */}
              <div className="relative w-full h-[80vh] sm:h-[65vh] md:h-[80vh] lg:aspect-video">
                
                {/* Mobile Images - Visible only on mobile */}
                <div className="block md:hidden absolute inset-0">
                  {mobileSlides.map((slide, index) => (
                    <div
                      key={`mobile-${index}`}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop/Tablet Images - Visible on tablet and above */}
                <div className="hidden md:block absolute inset-0">
                  {desktopSlides.map((slide, index) => (
                    <div
                      key={`desktop-${index}`}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                {/* Hero Content Inside Image (if needed) */}
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 z-10">
                  <div className="text-center text-white max-w-4xl w-full">
                    {/* Uncomment if you want the button */}
                    {/* <LiquidButton
                      size="xxl"
                      className="font-semibold text-accent text-xs sm:text-sm md:text-base lg:text-lg tracking-wide px-4 sm:px-6 md:px-8"
                      onClick={() => scrollToSection("#fleet")}
                    >
                      Explore Our Fleet
                    </LiquidButton> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button - Only visible on large screens */}
            <button
              onClick={nextSlide}
              className="hidden lg:flex flex-shrink-0 text-gray-800 hover:text-[#ff9d00] transition-all duration-200 p-3 hover:scale-110 transform bg-white rounded-full shadow-lg hover:shadow-xl z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Slide Indicators - Visible on all devices */}
          <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-3.5 md:px-4 py-2 shadow-md">
              {desktopSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? "bg-[#ff9d00] w-6 sm:w-7 md:w-8" 
                      : "bg-gray-400 w-2 sm:w-2.5 md:w-3 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}