"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { siteContent } from "../data/site-content"
import SectionTitle from "./section-title"

interface SkillItemProps {
  icon: LucideIcon
  text: string
}

const SkillItem = ({ icon: Icon, text }: SkillItemProps) => (
  <li className="flex items-start gap-3">
    <div className="bg-secondary/20 p-2 rounded-full mt-1">
      <Icon size={16} className="text-secondary" />
    </div>
    <span className="text-lg text-gray-300">{text}</span>
  </li>
)

const AboutSection = memo(() => {
  const { about } = siteContent
  const WhoWeAreIcon = about.whoWeAre.icon
  const ExpertiseIcon = about.expertise.icon

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>{about.title}</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="size-8 rounded-full gradient-blue flex items-center justify-center">
                  <WhoWeAreIcon size={18} className="text-white" />
                </div>
                <span>{about.whoWeAre.title}</span>
              </h3>
              {about.whoWeAre.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg mb-6 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-10 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <div className="size-8 rounded-full gradient-blue flex items-center justify-center">
                  <ExpertiseIcon size={18} className="text-white" />
                </div>
                <span>{about.expertise.title}</span>
              </h3>
              <ul className="space-y-4">
                {about.expertise.skills.map((skill, index) => (
                  <SkillItem key={index} icon={skill.icon} text={skill.text} />
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"

export default AboutSection

