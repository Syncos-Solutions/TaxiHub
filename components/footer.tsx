"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                T
              </div>
              <span className="font-bold text-lg">TaxiHub</span>
            </div>
            <p className="text-primary-foreground/70">
              Your trusted taxi service for reliable and affordable rides across Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-accent transition-colors duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-accent transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>info@taxihub.lk</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 TaxiHub Sri Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
