"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLang } from "@/context/LangContext";
import { siteConfig } from "@/config/site";
import { SmartText } from "@/components/ui/SmartText";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

type Quote = (typeof siteConfig.marquee.quotes)[number];

function QuoteCard({
  q,
  index,
  t,
}: {
  q: Quote;
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
        delay: index * 0.1,
      }}
      onAnimationComplete={() => setIsReady(true)}
      className={cn(
        "glass rounded-2xl p-6 flex flex-col",
        isReady && "transition-all duration-300",
        "hover:translate-y-[-4px] hover:border-lime-500/20",
      )}
    >
      <span className="text-5xl text-lime-500/40 font-serif leading-none mb-2">
        «
      </span>

      <p className="text-slate-200 leading-[1.7] flex-1 text-[15px]">
        {t(q.text)}
      </p>

      <div className="h-px bg-lime-500/10 my-5" />

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center shrink-0">
          <span className="text-lime-500 text-lg font-heading font-bold">
            {t(q.author).charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white text-[15px] font-heading font-semibold">
            {t(q.author)}
          </p>
          <p className="text-slate-400 text-[13px]">{t(q.role)}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function QuotesWall() {
  const { t } = useLang();
  const { label, headline } = siteConfig.quotes;
  const quotes = siteConfig.marquee.quotes;

  return (
    <section className="py-[clamp(5rem,10vw,10rem)]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <QuoteCard key={i} q={q} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
