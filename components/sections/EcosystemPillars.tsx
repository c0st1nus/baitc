'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLang } from '@/context/LangContext'
import { useMode } from '@/context/ModeContext'
import { siteConfig } from '@/config/site'
import { SmartText } from '@/components/ui/SmartText'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
}

type PillarData = {
  badge: string
  headline: readonly [string, string, string]
  description: readonly [string, string, string]
  achievements: ReadonlyArray<{
    title: readonly [string, string, string]
    stat: readonly [string, string, string]
  }>
  stat: string
  statLabel: readonly [string, string, string]
  cta: readonly [string, string, string]
}

function PillarCard({
  pillar,
  side,
  activeMode,
  onHover,
}: {
  pillar: PillarData
  side: 'blockchain' | 'ai'
  activeMode: string | null
  onHover: (mode: 'blockchain' | 'ai' | null) => void
}) {
  const { t } = useLang()
  const isActive = activeMode === side
  const isInactive = activeMode !== null && activeMode !== side

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: side === 'ai' ? 0.15 : 0 }}
      onMouseEnter={() => onHover(side)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        'glass rounded-2xl p-8 flex flex-col gap-6 transition-all duration-500 cursor-default',
        isActive && 'border-lime-500/40 scale-[1.01]',
        isInactive && 'opacity-60 scale-[0.99]',
      )}
    >
      <span className={cn(
        'text-micro px-3 py-1 rounded-full w-fit',
        'bg-lime-500/10 text-lime-500',
      )}>
        {pillar.badge}
      </span>

      <SmartText
        text={t(pillar.headline)}
        as="h3"
        className="text-h3 text-white font-heading leading-[1.1] whitespace-pre-line"
      />

      <p className="text-slate-300 text-sm leading-relaxed">{t(pillar.description)}</p>

      <div className="flex flex-col gap-3 mt-2">
        {pillar.achievements.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-lime-500/50 mt-0.5 shrink-0">━━</span>
            <div>
              <span className="text-white text-sm font-medium">{t(a.title)}</span>
              <span className="text-slate-400 text-sm ml-2">→ {t(a.stat)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-white/6 flex items-end justify-between">
        <div>
          <span className="text-2xl font-mono text-white font-bold">{pillar.stat}</span>
          <span className="text-sm text-slate-400 ml-2">{t(pillar.statLabel)}</span>
        </div>
        <a
          href="#initiatives"
          className="text-lime-500 text-sm hover:text-lime-400 transition-colors"
        >
          {t(pillar.cta)}
        </a>
      </div>
    </motion.div>
  )
}

export function EcosystemPillars() {
  const { t } = useLang()
  const { setMode } = useMode()
  const { label, headline, blockchain, ai } = siteConfig.pillars
  const [hoveredMode, setHoveredMode] = useState<'blockchain' | 'ai' | null>(null)

  const handleHover = (mode: 'blockchain' | 'ai' | null) => {
    setHoveredMode(mode)
    setMode(mode ?? 'neutral')
  }

  return (
    <section className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <motion.div {...fadeUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-12">
          <span className="text-micro text-lime-500">{t(label)}</span>
          <SmartText text={t(headline)} as="h2" className="text-h2 text-white mt-4 font-heading" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PillarCard pillar={blockchain} side="blockchain" activeMode={hoveredMode} onHover={handleHover} />
          <PillarCard pillar={ai} side="ai" activeMode={hoveredMode} onHover={handleHover} />
        </div>
      </div>
    </section>
  )
}
