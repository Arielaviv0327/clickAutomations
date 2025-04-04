import { memo } from "react"
import { Instagram, Zap } from "lucide-react"
import { siteContent } from "../data/site-content"

const SiteFooter = memo(() => {
  const { header, footer } = siteContent
  const currentYear = new Date().getFullYear()
  const copyrightText = footer.copyright.replace("{year}", currentYear.toString())

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
               <div className="size-12 rounded-full overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Click Automations Logo" 
                  width={56} 
                  height={56} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl font-bold">{header.logo}</div>
            </div>
            <p className="text-sm text-gray-400">{copyrightText}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {header.navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>

          <a
            href={header.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-secondary" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
})

SiteFooter.displayName = "SiteFooter"

export default SiteFooter

