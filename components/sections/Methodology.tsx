"use client";
import { motion } from "framer-motion";
import { SmartText } from "@/components/ui/SmartText";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export function Methodology() {
  const { t } = useLang();
  const { label, headline, steps } = siteConfig.methodology;

  return (
    <section className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-micro text-lime-500">{t(label)}</span>
          <SmartText
            text={t(headline)}
            as="h2"
            className="text-h2 text-white mt-4 font-heading"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-lime-500/30 via-lime-500/50 to-lime-500/30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.15,
              }}
              className="flex flex-col items-center text-center px-6 py-8 relative"
            >
              {/* Number circle */}
              <div
                className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center relative z-10",
                  "bg-surface-01 border border-lime-500/30",
                  "mb-6",
                )}
              >
                <span className="font-mono text-2xl text-lime-500 font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-h3 text-white font-heading mb-3">
                {t(step.title)}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                {t(step.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
