'use client'
import { cn } from '@/lib/utils'
import { useLang } from '@/context/LangContext'
import { siteConfig } from '@/config/site'
import { SmartText } from '@/components/ui/SmartText'

export function Footer() {
  const { t } = useLang()
  const { tagline, legal, ticker, copyright, socials, contact } = siteConfig.footer

  return (
    <footer className="relative mt-16">
      {/* News ticker */}
      <div className="w-full overflow-hidden border-t border-lime-500/10 bg-[rgba(34,197,94,0.05)] py-2">
        <div
          className="flex gap-12 animate-marquee whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {[...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="font-mono text-[11px] text-lime-500 shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-obsidian py-16">
        <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-heading font-bold text-white tracking-tight">BAITC</span>
            <SmartText
              text={t(tagline)}
              as="p"
              className="text-slate-400 text-sm mt-4 leading-relaxed max-w-[280px]"
            />
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center',
                    'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10',
                    'transition-all duration-200 text-sm font-medium',
                  )}
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm text-white font-heading font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-sm text-white font-heading font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <div className="space-y-1">
              <p className="font-mono text-[12px] text-slate-500">{legal.name}</p>
              <p className="font-mono text-[12px] text-slate-500">{legal.bin}</p>
              <p className="font-mono text-[12px] text-slate-500">{t(legal.address)}</p>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-mono text-[12px] text-slate-400">{contact.email}</p>
              <p className="font-mono text-[12px] text-slate-400">{contact.telegram}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mt-12 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-slate-600">{copyright}</p>
          <p className="text-[12px] text-slate-700 font-mono">Building a generative nation.</p>
        </div>
      </div>
    </footer>
  )
}
