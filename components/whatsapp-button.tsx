"use client"

import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Replace with your actual WhatsApp number
  const whatsappNumber = "+94 77 728 8286"
  const message = "Hello! I'd like to book a taxi service."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-2"
        }`}
      >
        <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <span className="text-sm font-medium">Need help? Chat with us!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-[6px] border-transparent border-l-white"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.408-5.248-0.292-0.508c-1.224-2.163-1.87-4.588-1.87-7.070 0-7.467 6.067-13.533 13.533-13.533s13.533 6.067 13.533 13.533-6.067 13.533-13.533 13.533zM21.867 18.267c-0.267-0.133-1.6-0.787-1.867-0.88-0.267-0.093-0.453-0.133-0.64 0.133s-0.747 0.88-0.907 1.067c-0.16 0.187-0.32 0.213-0.587 0.080s-1.147-0.427-2.187-1.36c-0.813-0.72-1.36-1.613-1.52-1.88s-0.013-0.413 0.12-0.547c0.12-0.12 0.267-0.32 0.4-0.48s0.187-0.267 0.267-0.453c0.080-0.187 0.040-0.347-0.027-0.48s-0.64-1.547-0.88-2.107c-0.24-0.56-0.48-0.48-0.64-0.48s-0.347-0.027-0.533-0.027-0.507 0.067-0.773 0.347c-0.267 0.267-1.013 0.987-1.013 2.413s1.040 2.8 1.173 2.987c0.133 0.187 1.867 2.853 4.533 4.0 0.64 0.267 1.12 0.427 1.507 0.547 0.64 0.213 1.227 0.173 1.693 0.107 0.507-0.080 1.6-0.653 1.827-1.293s0.227-1.173 0.16-1.293c-0.067-0.107-0.253-0.187-0.52-0.32z" />
        </svg>

        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </button>
    </div>
  )
}