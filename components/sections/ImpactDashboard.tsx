'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLang } from '@/context/LangContext'
import { siteConfig } from '@/config/site'
import { SmartText } from '@/components/ui/SmartText'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
}

export function ImpactDashboard() {
  const { t } = useLang()
  const { label, headline, cards } = siteConfig.impact

  return (
    <section id="impact" className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-12">
          <span className="text-micro text-lime-500">{t(label)}</span>
          <SmartText text={t(headline)} as="h2" className="text-h2 text-white mt-4 font-heading" />
        </motion.div>

        {/* Simple 3-column grid, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className={cn(
                'glass rounded-2xl p-6 flex flex-col justify-between min-h-[160px]',
                'hover:translate-y-[-4px] hover:border-lime-500/30 transition-all duration-300',
                i === 0 && 'bg-linear-to-br from-lime-500/4 to-transparent',
              )}
            >
              <div>
                <AnimatedCounter
                  value={card.value}
                  suffix={card.suffix}
                  className="font-mono font-bold text-white block text-[clamp(2rem,4vw,3rem)]"
                />
                <p className="text-slate-300 mt-2 text-sm">{t(card.label)}</p>
              </div>
              <p className="text-micro text-lime-500/70 mt-4">{t(card.sublabel)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
