"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SmartText } from "@/components/ui/SmartText";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export function ContactSection() {
  const { t } = useLang();
  const { label, headline, description, inquiryTypes, info } =
    siteConfig.contact;
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-[clamp(5rem,10vw,10rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-micro text-lime-500">{t(label)}</span>
            <SmartText
              text={t(headline)}
              as="h2"
              className="text-h2 text-white mt-4 font-heading"
            />
            <SmartText
              text={t(description)}
              as="p"
              className="text-slate-400 text-sm mt-4"
            />

            {/* Inquiry type selector */}
            <div className="flex flex-col gap-3 mt-8">
              {inquiryTypes.map((type, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "text-left px-5 py-4 rounded-xl border transition-all duration-200",
                    selected === i
                      ? "border-lime-500/30 bg-lime-500/5 text-white"
                      : "border-white/6 bg-white/2 text-slate-400 hover:border-white/10",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                        selected === i ? "border-lime-500" : "border-slate-600",
                      )}
                    >
                      {selected === i && (
                        <div className="w-2 h-2 rounded-full bg-lime-500" />
                      )}
                    </div>
                    <span className="font-heading font-medium text-sm">
                      {t(type.label)}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <motion.p
              key={selected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-300 text-sm mt-4 pl-7"
            >
              {t(inquiryTypes[selected].description)}
            </motion.p>
          </motion.div>

          {/* Right column — contact cards */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Email */}
            <button
              onClick={copyEmail}
              className={cn(
                "glass rounded-xl p-5 text-left group",
                "hover:border-lime-500/20 transition-all duration-200",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xl">📧</span>
                <span className="text-micro text-lime-500/70">
                  {copied ? "✓ Copied!" : "Click to copy"}
                </span>
              </div>
              <p className="text-white font-mono text-lg mt-2">{info.email}</p>
              <p className="text-slate-400 text-sm mt-1">Email us directly</p>
            </button>

            {/* Telegram */}
            <a
              href="https://t.me/sammExe"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "glass rounded-xl p-5 group",
                "hover:border-lime-500/20 transition-all duration-200",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xl">✈️</span>
                <span className="text-micro text-lime-500/70">
                  Open Telegram →
                </span>
              </div>
              <p className="text-white font-mono text-lg mt-2">
                {info.telegram}
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Quick response via Telegram
              </p>
            </a>

            {/* Location */}
            <div className="glass rounded-xl p-5">
              <span className="text-slate-500 text-xl">📍</span>
              <p className="text-white text-sm mt-2 whitespace-pre-line">
                {t(info.location)}
              </p>
            </div>

            {/* Legal */}
            <div className="mt-4 px-1">
              <p className="font-mono text-[11px] text-slate-600">
                {siteConfig.footer.legal.name}
              </p>
              <p className="font-mono text-[11px] text-slate-600">
                {siteConfig.footer.legal.bin}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
