"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { siteContent } from "../data/site-content"
import SectionTitle from "./section-title"
import ContactForm from "./contact-form"

const ContactSection = memo(() => {
  const { contact } = siteContent

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>{contact.title}</SectionTitle>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"

export default ContactSection

