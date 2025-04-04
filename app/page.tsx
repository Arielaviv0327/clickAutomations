"use client"

import { useEffect } from "react"
import AnimatedBackground from "./components/animated-background"
import SiteHeader from "./components/site-header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import FaqSection from "./components/faq-section"
import ContactSection from "./components/contact-section"
import SiteFooter from "./components/site-footer"

export default function LandingPage() {
  // Preload any resources or initialize services here
  useEffect(() => {
    // This is where you would add any global initialization
    // that needs to happen once when the page loads
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative" dir="rtl">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </div>
  )
}

