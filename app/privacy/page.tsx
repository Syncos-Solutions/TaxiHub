// app/privacy/page.tsx
"use client";

import { Shield, Lock, Eye, Database, UserCheck, Mail, Clock, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function PrivacyPolicy() {
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
          {/* Animated Shield Icon */}
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
              <Shield className="w-20 h-20 relative z-10" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight"
          >
            Privacy Policy
          </motion.h1>

          {/* Animated Description - SIMPLIFIED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            We are committed to protecting your privacy and personal information.
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
              At <span className="font-semibold text-black">MihithTaxi</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our taxi booking services.
            </p>
          </div>
        </motion.section>

        {/* Privacy Sections */}
        <div className="space-y-8">
          
          

          <PrivacySection
            icon=""
            title=""
            delay={0.3}
            content={
              <p className="text-gray-700 leading-relaxed">
                We care about your privacy. When you use our taxi service, we may collect basic information such as your name, phone number, pickup and drop-off locations, and payment details to complete your booking safely. Your information is only used to provide and improve our services. We never sell or share your personal data with others except when needed to process payments or comply with the law. By using our service, you agree to this policy and the way we handle your information responsibly.
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
            Policy Updates
          </h3>
          <p className="text-gray-700 leading-relaxed relative z-10">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </motion.div>

      </div>

      {/* Footer CTA */}
<div><Footer /></div>
       
    </div>
  );
}

// Reusable Privacy Section Component with Animations
function PrivacySection({ 
  icon, 
  title, 
  content,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
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
        
        <div className="flex items-center mb-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white rounded-xl p-4 mr-4 group-hover:shadow-lg transition-shadow"
          >
            {icon}
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
        </div>
        <div className="md:ml-20">
          {content}
        </div>
      </div>
    </motion.section>
  );
}