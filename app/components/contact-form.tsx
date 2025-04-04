"use client"

import type React from "react"

import { useState, useEffect, memo } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteContent } from "../data/site-content"
import { initEmailService, sendContactForm } from "../utils/email-service"

const ContactForm = memo(() => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  const { contact } = siteContent

  // Initialize EmailJS
  useEffect(() => {
    initEmailService()
  }, [])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitting(true)
    setFormError("")

    // Remove hyphens for length validation
    const phoneDigitsOnly = phone.replace(/-/g, "")

    // Validate phone number length (digits only, without hyphens)
    if (phoneDigitsOnly.length < 7 || phoneDigitsOnly.length > 15) {
      setFormError("מספר טלפון לא תקין")
      setFormSubmitting(false)
      return
    }

    try {
      const response = await sendContactForm({ name, phone })

      if (response.success) {
        setSubmitted(true)
        setName("")
        setPhone("")
      } else {
        setFormError(response.message)
      }
    } catch (error: any) {
      console.error("Error submitting form:", error)
      setFormError(`שליחת הטופס נכשלה: ${error.message || "אנא נסה שוב מאוחר יותר"}`)
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      {submitted ? (
        <div className="text-center py-8 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 mx-auto w-16 h-16 gradient-purple rounded-full flex items-center justify-center"
          >
            <CheckCircle size={24} className="text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2">{contact.form.successTitle}</h3>
          <p className="text-gray-300">{contact.form.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              {contact.form.nameLabel}
            </label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/10 border-white/20"
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              {contact.form.phoneLabelLabel}
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-white/10 border-white/20"
              minLength={7}
              maxLength={18}
              aria-required="true"
            />
          </div>
          {formError && (
            <div className="mb-4 text-red-500 text-sm" role="alert">
              {formError}
            </div>
          )}
          <Button
            type="submit"
            disabled={formSubmitting}
            className="w-full gradient-purple hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            aria-busy={formSubmitting}
          >
            {formSubmitting ? (
              <span>{contact.form.submittingText}</span>
            ) : (
              <>
                <span>{contact.form.submitButton}</span>
                <Send size={16} />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
})

ContactForm.displayName = "ContactForm"

export default ContactForm

