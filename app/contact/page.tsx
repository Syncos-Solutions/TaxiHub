"use client"

import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User, Sparkles, CheckCircle2, AlertCircle } from "lucide-react"
import { useRef, useState } from "react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      console.log('📤 Submitting contact form:', formData)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log('📥 Response:', data)

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: '✅ Thank you! We\'ve received your message and our team will get back to you soon.',
        })
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" })
        
        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' })
        }, 10000)
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || '❌ Something went wrong. Please try again or call us directly.',
        })
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again or contact us at +94 77 659 9542',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden mt-[60px]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-[hsl(var(--chart-3))] rounded-full blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            className="flex items-center justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(255, 255, 255, 0.3)",
                    "0 0 0 20px rgba(255, 255, 255, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="absolute inset-0 rounded-full"
              />
              <MessageSquare className="w-20 h-20 relative z-10" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
          >
            Get In Touch
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have questions? We're here to help. Reach out to us anytime.
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-wide">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We're available 24/7 to answer your questions and help you book your next ride across Sri Lanka.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactInfoCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                detail="+94 77 659 9542"
                link="tel:+94776599542"
                delay={0.1}
              />
              <ContactInfoCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                detail="support@mihithlanka.com"
                link="mailto:support@mihithlanka.com"
                delay={0.2}
              />
              <ContactInfoCard
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                detail="Colombo, Sri Lanka"
                link="#"
                delay={0.3}
              />
              <ContactInfoCard
                icon={<Clock className="w-6 h-6" />}
                title="Working Hours"
                detail="24/7 - Always Available"
                link="#"
                delay={0.4}
              />
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--chart-3))]/10 to-[hsl(var(--destructive-foreground))]/10 border-l-4 border-[hsl(var(--chart-3))] rounded-r-xl p-6"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-[0.02] rounded-full -mr-16 -mt-16" />
              <p className="text-sm text-gray-700 relative z-10">
                <strong className="text-black">Quick Response Guaranteed:</strong> Our team will get back to you soon.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-0 hover:opacity-5 rounded-bl-full transition-opacity duration-500" />

              {/* Success/Error Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className={`mb-6 p-5 rounded-2xl border-2 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border-green-500'
                      : 'bg-red-50 border-red-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus.type === 'success' ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      </motion.div>
                    )}
                    <div className="flex-1">
                      <p className={`text-sm font-bold ${
                        submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {submitStatus.message}
                      </p>
                      {submitStatus.type === 'success' && (
                        <p className="text-xs text-green-700 mt-2">
                          Check your email for a confirmation message. We'll be in touch soon! 📧
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2 tracking-wide">
                    Your Name *
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all duration-300 bg-white text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2 tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all duration-300 bg-white text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-black mb-2 tracking-wide">
                    WhatsApp Number *
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all duration-300 bg-white text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="(+94) 77 123 4567"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-black mb-2 tracking-wide">
                    Your Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all duration-300 bg-white text-black placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full relative overflow-hidden bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: isSubmitting ? ["-100%", "100%"] : "-100%",
                    }}
                    transition={{
                      duration: 1,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />

                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-black rounded-3xl p-12 md:p-16 overflow-hidden relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Floating Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--chart-3))] rounded-full blur-3xl"
            />

            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Prefer to Book Directly?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Call us now for immediate assistance or visit our booking page.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+94776599542"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </motion.a>

                <motion.a
                  href="/booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Ride
                  <Send className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

// Contact Info Card Component
function ContactInfoCard({
  icon,
  title,
  detail,
  link,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  detail: string
  link: string
  delay?: number
}) {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ x: 5, scale: 1.02 }}
      className="group flex items-start space-x-4 bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-black hover:shadow-lg transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow"
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="font-bold text-black mb-1 tracking-wide">{title}</h3>
        <p className="text-gray-600 group-hover:text-black transition-colors">{detail}</p>
      </div>
    </motion.a>
  )
}
