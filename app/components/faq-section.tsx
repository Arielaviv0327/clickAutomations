"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteContent } from "../data/site-content"
import SectionTitle from "./section-title"

interface FaqItemProps {
  icon: LucideIcon
  question: string
  answer: string
}

const FaqItem = ({ icon: Icon, question, answer }: FaqItemProps) => {
  return (
    <AccordionItem value={question} className="border border-white/10 rounded-lg overflow-hidden">
      <AccordionTrigger className="px-4 py-3 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-2">
          <div className="bg-secondary/20 p-1 rounded-full">
            <div className="text-secondary">
              <Icon size={18} />
            </div>
          </div>
          <span>{question}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 py-3 text-gray-300">{answer}</AccordionContent>
    </AccordionItem>
  )
}

const FaqSection = memo(() => {
  const { faq } = siteContent

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>{faq.title}</SectionTitle>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.map((item, index) => (
                <FaqItem key={index} icon={item.icon} question={item.question} answer={item.answer} />
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

FaqSection.displayName = "FaqSection"

export default FaqSection

