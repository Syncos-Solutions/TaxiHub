"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    if (path === "/#about") {
      return pathname === "/" && activeSection === "/#about"
    }
    return pathname === path
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2) // Remove "/#"
      const element = document.getElementById(sectionId)
      
      if (pathname !== "/") {
        // If not on home page, navigate to home first
        window.location.href = href
      } else {
        // If on home page, smooth scroll to section
        element?.scrollIntoView({ behavior: "smooth" })
        setActiveSection(href)
      }
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur py-4"
      }`}
    >
      {/* Main Navigation Bar */}
      <div className="w-full px-[2%] sm:px-[8%] lg:px-[12%] text-start lg:text-center relative flex justify-between lg:justify-center nav-menu-container">
        {/* Mobile Logo */}
        <div className="lg:hidden flex logo text-2xl uppercase font-bold">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff9d00] rounded-full flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span className="text-gray-900">
              Mihith<span className="text-[#ff9d00]">Taxi</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-2 relative">
          {/* Left Side Navigation */}
          <li>
            <Link
              href="/"
              className={`font-semibold transition-colors duration-300 ${
                pathname === "/" && activeSection === "/"
                  ? "text-[#ff9d00]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveSection("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className={`font-medium transition-colors duration-300 ${
                isActive("/#about")
                  ? "text-[#ff9d00]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={(e) => handleNavClick(e, "/#about")}
            >
              About Us
            </Link>
          </li>

          {/* Center Logo */}
          <div className="logo text-3xl uppercase font-bold mx-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setActiveSection("/")}>
              <div className="w-10 h-10 bg-[#ff9d00] rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-gray-900">
                mihith<span className="text-[#ff9d00]">taxi</span>
              </span>
            </Link>
          </div>

          {/* Right Side Navigation */}
          <li>
            <Link
              href="/booking"
              className={`font-medium transition-colors duration-300 ${
                isActive("/booking")
                  ? "text-[#ff9d00]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 ${
                isActive("/contact")
                  ? "text-[#ff9d00]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Contact Us
            </Link>
          </li>
          
          {/* Book Now Button */}
          <li>
            <Link
              href="/booking"
              className="bg-[#ff9d00] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#ff9d00]/90 hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="justify-center flex items-center">
          <div
            className="toggle-btn lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-gray-900 text-xl" size={24} />
            ) : (
              <Menu className="text-gray-900 text-xl" size={24} />
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`lg:hidden flex flex-col bg-gray-50 shadow-md absolute items-start ps-10 gap-6 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[500px] top-full mt-3 opacity-100 py-6"
              : "max-h-0 opacity-0 top-full py-0"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 ${
                pathname === "/" && activeSection === "/"
                  ? "text-[#ff9d00] font-semibold"
                  : "text-gray-700 hover:text-[#ff9d00]"
              }`}
              onClick={() => {
                setActiveSection("/")
                setIsOpen(false)
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className={`font-medium transition-colors duration-300 ${
                isActive("/#about")
                  ? "text-[#ff9d00] font-semibold"
                  : "text-gray-700 hover:text-[#ff9d00]"
              }`}
              onClick={(e) => handleNavClick(e, "/#about")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className={`font-medium transition-colors duration-300 ${
                isActive("/booking")
                  ? "text-[#ff9d00] font-semibold"
                  : "text-gray-700 hover:text-[#ff9d00]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 ${
                isActive("/contact")
                  ? "text-[#ff9d00] font-semibold"
                  : "text-gray-700 hover:text-[#ff9d00]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className="bg-[#ff9d00] text-white px-6 py-2 rounded-lg font-semibold inline-block hover:bg-[#ff9d00]/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}