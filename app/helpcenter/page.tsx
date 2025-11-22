// app/help/page.tsx
"use client";

import { HelpCircle, Search, Phone, Mail, MessageCircle, Clock, MapPin, CreditCard, User, Shield, Car, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Black & White with Animations */}
      <div className="relative bg-black text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1
            }}
            className="flex items-center justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 0 0px rgba(255, 255, 255, 0.3)",
                    "0 0 0 20px rgba(255, 255, 255, 0)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="absolute inset-0 rounded-full"
              />
              <HelpCircle className="w-20 h-20 relative z-10" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
          >
            Help Center
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          >
            How can we help you today?
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            {/* <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            <FAQItem
              question="How do I book a taxi?"
              answer="You can book a taxi through our mobile app or website. Simply enter your pickup location, destination, select your vehicle type, and confirm your booking. A driver will be assigned to you shortly."
              delay={0.1}
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept cash, credit/debit cards, and digital wallet payments. You can add your preferred payment method in your account settings for a seamless checkout experience."
              delay={0.2}
            />
            <FAQItem
              question="Can I cancel or modify my booking?"
              answer="Yes, you can cancel or modify your booking before the driver arrives. Cancellation fees may apply if you cancel after the driver has been assigned and is on the way to your location."
              delay={0.3}
            />
            <FAQItem
              question="How is the fare calculated?"
              answer="Fares are calculated based on distance traveled, time duration, current traffic conditions, and vehicle type. You can see an estimated fare before confirming your booking."
              delay={0.4}
            />
            <FAQItem
              question="What if I left something in the taxi?"
              answer="If you've left an item in the taxi, please contact our support team immediately with your trip details. We'll help you connect with the driver to retrieve your belongings."
              delay={0.5}
            />
            <FAQItem
              question="Is my personal information safe?"
              answer="Absolutely. We use industry-standard encryption and security measures to protect your personal and payment information. Read our Privacy Policy for more details."
              delay={0.6}
            />
          </div>
        </motion.section>

        {/* Contact Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-700 text-center text-lg mb-10 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                detail="+94 77 728 8286"
                link="tel:+94777288286"
                delay={0.1}
              />
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                detail="support@mihithlanka.com"
                link="mailto:support@mihithlankatours.com"
                delay={0.2}
              />
              <ContactCard
                icon={<MessageCircle className="w-6 h-6" />}
                title="Live Chat"
                detail="Start a conversation"
                link="https://wa.me/+94777288286"
                delay={0.3}
              />
            </div>
          </div>
        </motion.section>

        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden bg-gray-50 border-l-4 border-black rounded-r-xl p-8 max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-black opacity-[0.02] rounded-full -mr-32 -mt-32" />
          <h3 className="font-bold text-black text-xl mb-3 flex items-center relative z-10">
            <Clock className="w-6 h-6 mr-3" />
            Support Hours
          </h3>
          <p className="text-gray-700 leading-relaxed relative z-10">
            Our customer support team is available 24 hours a day, 7 days a week. We're here to help you whenever you need assistance with your ride or account.
          </p>
        </motion.div>

      </div>

      {/* Footer */}
      <div><Footer /></div>
       
    </div>
  );
}

// Help Card Component
function HelpCard({ 
  icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-black transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-black opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300" />
      
      <div className="bg-black text-white rounded-xl p-3 w-fit mb-4 group-hover:shadow-lg transition-shadow">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      <div className="mt-4 flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
        Learn more
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </motion.div>
  );
}

// FAQ Item Component
function FAQItem({ 
  question, 
  answer,
  delay = 0
}: { 
  question: string; 
  answer: string;
  delay?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-bold text-black pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-5 h-5 text-black transform rotate-90" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Contact Card Component
function ContactCard({ 
  icon, 
  title, 
  detail, 
  link,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  detail: string;
  link: string;
  delay?: number;
}) {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-black transition-all duration-300 hover:shadow-lg text-center group"
    >
      <div className="bg-black text-white rounded-full p-4 w-fit mx-auto mb-4 group-hover:shadow-lg transition-shadow">
        {icon}
      </div>
      <h3 className="font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{detail}</p>
    </motion.a>
  );
}