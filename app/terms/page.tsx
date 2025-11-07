// app/terms/page.tsx
"use client";

import { FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function TermsConditions() {
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
              <FileText className="w-20 h-20 relative z-10" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
          >
            Terms & Conditions
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Please read these terms carefully before using our service.
          </motion.p>

          {/* Last Updated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm text-gray-300">Last updated: January 2025</span>
            </div>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent" />
            <p className="text-gray-700 leading-relaxed text-lg pl-8">
              Welcome to <span className="font-semibold text-black">Taxihub</span>. By using our taxi booking service, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
            </p>
          </div>
        </motion.section>

        {/* Terms Section - Single Paragraph */}
        <div className="space-y-8">
          
          <TermsSection
            content={
              <p className="text-gray-700 leading-relaxed">
                By using Taxihub's services, you agree to these terms and conditions. Our service is available to individuals aged 18 and above. You must provide accurate booking information and use the service only for lawful purposes. All bookings are subject to driver availability, and prices are calculated based on distance, time, and current rates. Payment must be made through approved methods, and cancellation fees may apply if you cancel after driver assignment. You agree to treat drivers with respect, follow safety guidelines, and not engage in illegal activities during rides. You are responsible for any vehicle damage caused during your trip. While we strive to provide safe and reliable transportation, Taxihub is not liable for delays, route changes, or incidents beyond our control. Our maximum liability is limited to the amount paid for your ride. Prohibited activities include using our service for unlawful purposes, harassing drivers or users, hacking our system, or reselling services without permission. Violations may result in account suspension or termination. We reserve the right to modify these terms at any time, with changes effective immediately upon posting. Your continued use constitutes acceptance of modified terms. By using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            }
          />

        </div>

        {/* Updates Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden bg-gray-50 border-l-4 border-black rounded-r-xl p-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-black opacity-[0.02] rounded-full -mr-32 -mt-32" />
          <h3 className="font-bold text-black text-xl mb-3 flex items-center relative z-10">
            <Clock className="w-6 h-6 mr-3" />
            Agreement
          </h3>
          <p className="text-gray-700 leading-relaxed relative z-10">
            By using Taxihub's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you have any questions, please contact our support team before using the service.
          </p>
        </motion.div>

      </div>

      {/* Footer */}
      <div><Footer /></div>
       
    </div>
  );
}

// Reusable Terms Section Component
function TermsSection({ 
  content,
  delay = 0
}: { 
  content: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-black transition-all duration-300 hover:shadow-xl">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-black opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300" />
        
        <div>
          {content}
        </div>
      </div>
    </motion.section>
  );
}