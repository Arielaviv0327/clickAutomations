import { memo } from "react"
import { Instagram, Zap } from "lucide-react"
import { siteContent } from "../data/site-content"

const SiteHeader = memo(() => {
  const { header } = siteContent

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" aria-label="Click Automations Home">
          <div className="size-12 rounded-full overflow-hidden">
            <img 
              src="/images/logo.png" 
              alt="Click Automations Logo" 
              width={56} 
              height={56} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-2xl font-bold">{header.logo}</div>
        </a>

        <nav className="hidden md:flex space-x-6 space-x-reverse" aria-label="Main Navigation">
          {header.navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        <a
          href={header.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
          <span className="hidden md:inline">Instagram</span>
        </a>
      </div>
    </header>
  )
})

SiteHeader.displayName = "SiteHeader"

export default SiteHeader

