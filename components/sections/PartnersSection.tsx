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

export function PartnersSection() {
  const { t } = useLang();
  const { label, headline, categories, cta } = siteConfig.partners;

  return (
    <section id="partners" className="py-[clamp(5rem,10vw,10rem)]">
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

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              {...fadeUp}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: ci * 0.1,
              }}
            >
              <h3 className="text-sm text-slate-400 font-heading uppercase tracking-wider mb-6">
                {t(cat.title)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cat.logos.map((logo, li) => (
                  <div
                    key={li}
                    className={cn(
                      "flex items-center justify-center px-4 py-6 rounded-xl",
                      "bg-white/3 border border-white/6",
                      "text-white/50 hover:text-white hover:scale-[1.04] hover:bg-white/6",
                      "transition-all duration-200 cursor-default",
                    )}
                  >
                    <span className="text-sm font-heading font-medium text-center leading-tight">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="text-lime-500 hover:text-lime-400 transition-colors text-sm"
          >
            {t(cta)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
