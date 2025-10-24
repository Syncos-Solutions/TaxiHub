"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Message sent:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Phone</h3>
                  <p className="text-muted-foreground">+94 11 234 5678</p>
                  <p className="text-muted-foreground">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">info@taxihub.lk</p>
                  <p className="text-muted-foreground">support@taxihub.lk</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Hours</h3>
                  <p className="text-muted-foreground">24/7 Service Available</p>
                  <p className="text-muted-foreground">Support: Mon-Sun 8AM-10PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Message subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
