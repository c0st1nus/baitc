'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLang } from '@/context/LangContext'
import { siteConfig } from '@/config/site'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function Navigation() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40',
          'transition-all duration-500',
          scrolled
            ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)] h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading text-white font-bold text-lg tracking-tight">
            BAITC
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'font-heading text-[13px] font-medium uppercase tracking-wider',
                  'text-slate-400 hover:text-white transition-colors duration-200'
                )}
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <MagneticButton
              strength={0.3}
              href="#contact"
              className={cn(
                'rounded-full px-5 py-2',
                'bg-lime-500 text-black',
                'font-heading text-[13px] font-medium uppercase tracking-wider',
                'hover:bg-lime-400 transition-colors duration-200'
              )}
            >
              {t(siteConfig.nav.cta)}
            </MagneticButton>
          </div>

          {/* Mobile Burger */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center"
            onClick={() => {
              setMobileOpen(!mobileOpen)
              if ('vibrate' in navigator) navigator.vibrate(5)
            }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  'block w-5 h-[1.5px] bg-white transition-all duration-300',
                  mobileOpen && 'rotate-45 translate-y-[4.5px]'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-[1.5px] bg-white transition-all duration-300',
                  mobileOpen && '-rotate-45 -translate-y-[4.5px]'
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 glass-modal flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {siteConfig.nav.links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="text-h2 text-white font-heading"
              >
                {t(link.label)}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <LanguageSwitcher className="mt-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
