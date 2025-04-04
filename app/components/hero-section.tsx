"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteContent } from "../data/site-content"

const HeroSection = memo(() => {
  const { hero } = siteContent

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: hero.title }} />
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">{hero.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              className="text-lg px-8 py-6 gradient-purple hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>{hero.primaryButton}</span>
              <ArrowRight size={16} className="mr-2" />
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-white/20 hover:bg-white/10 transition-colors"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              {hero.secondaryButton}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection

