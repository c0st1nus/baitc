'use client'
import { useLang } from '@/context/LangContext'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const LANGS = [
  { index: 0, label: 'EN' },
  { index: 1, label: 'RU' },
  { index: 2, label: 'KZ' },
] as const

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-full',
        'border border-white/10 bg-white/5 backdrop-blur-md',
        'p-1',
        className
      )}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') setLang(((lang + 1) % 3) as 0 | 1 | 2)
        if (e.key === 'ArrowLeft') setLang(((lang + 2) % 3) as 0 | 1 | 2)
      }}
      tabIndex={0}
      role="radiogroup"
      aria-label="Language selector"
    >
      {LANGS.map(({ index, label }) => (
        <button
          key={index}
          onClick={() => setLang(index as 0 | 1 | 2)}
          role="radio"
          aria-checked={lang === index}
          className={cn(
            'relative px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest',
            'transition-colors duration-200 cursor-pointer',
            lang === index ? 'text-black' : 'text-slate-400 hover:text-white'
          )}
        >
          {lang === index && (
            <motion.div
              layoutId="lang-pill"
              className="absolute inset-0 rounded-full bg-lime-400"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  )
}
