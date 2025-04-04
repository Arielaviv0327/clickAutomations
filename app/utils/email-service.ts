import emailjs from "@emailjs/browser"

// Initialize EmailJS once
let initialized = false

export interface ContactFormData {
  name: string
  phone: string
}

export interface EmailResponse {
  success: boolean
  message: string
}

export const initEmailService = (): void => {
  if (!initialized) {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (!publicKey) {
      console.error("EmailJS public key is missing")
      return
    }

    emailjs.init(publicKey)
    initialized = true
  }
}

export const sendContactForm = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    // Ensure EmailJS is initialized
    initEmailService()

    // Validate service and template IDs
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    if (!serviceId || !templateId) {
      throw new Error("EmailJS configuration is incomplete")
    }

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.phone, // Using phone instead of email
      to_name: "Click Automations",
      message: `name: ${data.name} -end\nphone: ${data.phone} -end`,
    }

    // Send email using EmailJS
    const response = await emailjs.send(serviceId, templateId, templateParams)

    if (response.status === 200) {
      return {
        success: true,
        message: "Form submitted successfully",
      }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error: any) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: `שליחת הטופס נכשלה: ${error.message || "אנא נסה שוב מאוחר יותר"}`,
    }
  }
}

