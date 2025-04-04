import type { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center">{children}</h2>
      <div className="w-20 h-1 gradient-purple rounded-full mt-6"></div>
    </div>
  )
}

export default SectionTitle

