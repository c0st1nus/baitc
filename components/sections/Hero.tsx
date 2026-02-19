"use client";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SmartText } from "@/components/ui/SmartText";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { cn } from "@/lib/utils";

const VERB_INTERVAL = 2500;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export function Hero() {
  const { lang, t } = useLang();
  const [verbIndex, setVerbIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const verbs = siteConfig.hero.verbs;
  const currentVerb = verbs[verbIndex][lang];

  const rotateVerb = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setVerbIndex((prev) => (prev + 1) % verbs.length);
      setIsAnimating(false);
    }, 300);
  }, [verbs.length]);

  useEffect(() => {
    const interval = setInterval(rotateVerb, VERB_INTERVAL);
    return () => clearInterval(interval);
  }, [rotateVerb]);

  // Build headline with rotating verb replacing the [token]
  const headlineTemplate = t(siteConfig.hero.headline);
  const headlineParts = headlineTemplate.split(/\[([^\]]+)\]/);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-[clamp(1.5rem,5vw,4rem)]">
      <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-6 pt-24 pb-16">
        {/* Headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-display text-white"
        >
          {headlineParts.map((part, i) => {
            // Odd indices are the captured groups (inside brackets)
            if (i % 2 === 1) {
              return (
                <span
                  key={i}
                  className={cn(
                    "block bg-linear-to-r from-lime-400 to-emerald-500",
                    "bg-clip-text text-transparent",
                    "drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]",
                    "transition-all duration-300",
                    isAnimating && "opacity-0 translate-y-1",
                  )}
                >
                  {currentVerb}
                </span>
              );
            }
            return <span key={i}>{part.trim()}</span>;
          })}
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="max-w-[640px]"
        >
          <SmartText
            text={t(siteConfig.hero.subheadline)}
            as="p"
            className="text-body-l text-slate-300"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <MagneticButton
            strength={0.4}
            href="#initiatives"
            className={cn(
              "rounded-full px-7 py-3.5",
              "bg-lime-500 text-black",
              "font-heading text-[13px] font-medium uppercase tracking-wider",
              "hover:bg-lime-400 hover:scale-[1.03] transition-all duration-200",
            )}
          >
            {t(siteConfig.hero.cta.primary)}
          </MagneticButton>

          <MagneticButton
            strength={0.3}
            href="#contact"
            className={cn(
              "rounded-full px-7 py-3.5",
              "bg-transparent border border-white/20 text-white",
              "font-heading text-[13px] font-medium uppercase tracking-wider",
              "hover:border-lime-500/30 hover:text-lime-400 transition-all duration-200",
            )}
          >
            {t(siteConfig.hero.cta.secondary)}
          </MagneticButton>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <div className="animate-bounce-gentle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-slate-600"
            >
              <path
                d="M10 4v12m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-micro text-slate-600">
            {t(siteConfig.hero.scrollHint)}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
