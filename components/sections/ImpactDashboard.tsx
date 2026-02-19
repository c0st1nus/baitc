"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SmartText } from "@/components/ui/SmartText";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

function ImpactCard({
  card,
  index,
  t,
}: {
  card: (typeof siteConfig.impact.cards)[number];
  index: number;
  t: (arr: readonly [string, string, string]) => string;
}) {
  const [isReady, setIsReady] = useState(false);

  return (
    <motion.div
      {...fadeUp}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      onAnimationComplete={() => setIsReady(true)}
      className={cn(
        "glass rounded-2xl p-6 flex flex-col justify-between min-h-[160px]",
        isReady && "transition-all duration-300",
        "hover:translate-y-[-4px] hover:border-lime-500/30",
        index === 0 && "bg-linear-to-br from-lime-500/4 to-transparent",
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
  );
}

export function ImpactDashboard() {
  const { t } = useLang();
  const { label, headline, cards } = siteConfig.impact;

  return (
    <section id="impact" className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-micro text-lime-500">{t(label)}</span>
          <SmartText
            text={t(headline)}
            as="h2"
            className="text-h2 text-white mt-4 font-heading"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <ImpactCard key={i} card={card} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
