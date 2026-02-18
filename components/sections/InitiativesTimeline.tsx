'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLang } from '@/context/LangContext'
import { siteConfig } from '@/config/site'
import { SmartText } from '@/components/ui/SmartText'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
}

export function InitiativesTimeline() {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState<'all' | 'blockchain' | 'ai'>('all')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { label, headline, filters, items } = siteConfig.initiatives

  const filtered = filter === 'all' ? items : items.filter((item) => item.type === filter)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <section id="initiatives" className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <motion.div {...fadeUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-8">
          <span className="text-micro text-lime-500">{t(label)}</span>
          <SmartText text={t(headline)} as="h2" className="text-h2 text-white mt-4 font-heading" />
        </motion.div>

        {/* Filters + arrows */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex gap-2">
            {(['all', 'blockchain', 'ai'] as const).map((f, i) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'text-sm px-4 py-1.5 rounded-full transition-all duration-200 font-heading uppercase tracking-wider',
                  filter === f
                    ? 'bg-lime-500 text-black'
                    : 'bg-white/5 text-slate-400 hover:text-white',
                )}
              >
                {t(filters[i])}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Scroll left">←</button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Scroll right">→</button>
          </div>
        </motion.div>

        {/* Year markers */}
        <div className="hidden sm:flex items-center gap-4 mb-6 pl-4">
          {['2022', '2023', '2024', '2025'].map((y) => (
            <div key={y} className="flex items-center gap-2">
              <div className={cn(
                'w-2 h-2 rounded-full',
                y === '2025' ? 'bg-lime-500' : 'bg-slate-600'
              )} />
              <span className={cn(
                'font-mono text-xs',
                y === '2025' ? 'text-lime-500' : 'text-slate-600'
              )}>{y}</span>
              {y !== '2025' && <div className="w-16 h-px bg-slate-700/50" />}
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-[clamp(1.5rem,5vw,4rem)] pr-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {filtered.map((item, i) => (
          <motion.div
            key={`${item.title[0]}-${i}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={cn(
              'snap-start shrink-0 w-[340px] max-sm:w-[85vw]',
              'glass rounded-2xl overflow-hidden flex flex-col',
              'hover:translate-y-[-6px] hover:shadow-[0_24px_60px_rgba(34,197,94,0.12)]',
              'transition-all duration-300 group',
            )}
          >
            {/* Card header */}
            <div className="relative px-5 pt-5 pb-3 border-b border-white/6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <span className={cn(
                  'text-micro px-2 py-0.5 rounded',
                  item.type === 'blockchain' ? 'bg-lime-500/10 text-lime-500' : 'bg-emerald-500/10 text-emerald-400',
                )}>
                  {item.type.toUpperCase()}
                </span>
              </div>
              {'badge' in item && item.badge && (
                <span className="text-micro text-yellow-400/80 bg-yellow-400/10 px-2 py-0.5 rounded mb-2 inline-block">
                  {t(item.badge)}
                </span>
              )}
              <h3 className="text-lg text-white font-heading font-semibold leading-tight">{t(item.title)}</h3>
              <p className="text-slate-400 text-sm mt-1">{t(item.tagline)}</p>
            </div>

            {/* Stats mini-grid */}
            <div className="grid grid-cols-2 gap-3 px-5 py-4 flex-1">
              {item.stats.map((stat, j) => (
                <div key={j}>
                  <span className="font-mono text-xl text-white font-bold">{stat.value}</span>
                  <span className="block text-micro text-slate-500 mt-0.5">{t(stat.label)}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 pb-5">
              <span className="text-lime-500 text-sm group-hover:text-lime-400 transition-colors cursor-pointer">
                {lang === 0 ? 'Learn more →' : lang === 1 ? 'Подробнее →' : 'Толығырақ →'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
