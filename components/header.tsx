"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl text-foreground">TaxiGo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="#why" className="text-foreground hover:text-primary transition">
              Why Us
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Reviews
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#services" className="block text-foreground hover:text-primary">
              Services
            </a>
            <a href="#why" className="block text-foreground hover:text-primary">
              Why Us
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary">
              Reviews
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">Book Now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
