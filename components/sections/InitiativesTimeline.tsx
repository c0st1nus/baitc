"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SmartText } from "@/components/ui/SmartText";
import { events } from "@/config/events";
import { type PartnerId, partners } from "@/config/partners";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export function InitiativesTimeline() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"all" | "blockchain" | "ai">("all");

  const { label, headline, filters } = siteConfig.initiatives;
  const items = events;

  // Filter and Sort (Newest first)
  const filteredItems = useMemo(() => {
    // Cast to array to loosen the readonly tuple type
    let res = [...items] as (typeof items)[number][];
    if (filter !== "all") {
      res = res.filter((item) => item.type === filter);
    }
    // Items are technically ordered by year/time in site.ts (2022 -> 2025).
    // We want newest first for the timeline (2025 -> 2022).
    return res.reverse();
  }, [filter]);

  // Group by year for sticky headers
  const groupedItems = useMemo(() => {
    const groups: Record<string, (typeof items)[number][]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.year]) groups[item.year] = [];
      groups[item.year].push(item);
    });
    return groups;
  }, [filteredItems]);

  const years = Object.keys(groupedItems).sort((a, b) => Number(b) - Number(a));

  return (
    <section
      id="initiatives"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-micro text-lime-500">{t(label)}</span>
          <SmartText
            text={t(headline)}
            as="h2"
            className="text-h2 text-white mt-4 font-heading mb-6"
          />

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(["all", "blockchain", "ai"] as const).map((f, i) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "text-sm px-5 py-2 rounded-full transition-all duration-300 font-heading uppercase tracking-wider border",
                  filter === f
                    ? "bg-lime-500 text-black border-lime-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10",
                )}
              >
                {t(filters[i])}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-12 bottom-0 w-[3.5px] bg-linear-to-b from-lime-500/50 via-lime-500/20 to-transparent" />

          <div className="space-y-24">
            {years.map((year) => (
              <div key={year} className="relative">
                {/* Check if we have items for this year (should always be true) */}

                {/* Sticky Year Header */}
                <div className="sticky top-24 z-20 flex md:justify-center pl-0 md:pl-0 mb-12 pointer-events-none">
                  <div className="bg-obsidian/80 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full shadow-xl">
                    <span className="font-mono text-2xl md:text-3xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                      {year}
                    </span>
                  </div>
                </div>

                <div className="space-y-16">
                  {groupedItems[year].map((item, index) => {
                    // We need a global index to determine left/right if we want a continuous zigzag,
                    // OR we just alternate within the year.
                    // Looking at the example, it seems strictly alternating.
                    // Let's find the absolute index of this item in the filtered list
                    // actually simple modulo on the map index inside this group might look weird if groups have odd numbers.
                    // Let's calculate continuous index.
                    const flatIndex = filteredItems.indexOf(item);
                    const isRight = flatIndex % 2 !== 0;

                    return (
                      <div
                        key={`${item.title[0]}-${index}`}
                        className="relative"
                      >
                        {/* Dot on the line */}
                        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-obsidian border-2 border-lime-500 z-10 shadow-[0_0_10px_rgba(34,197,94,0.5)] translate-x-[-7px]" />

                        <div
                          className={cn(
                            "flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between pt-2 pl-12 md:pl-0",
                            isRight ? "md:flex-row-reverse" : "",
                          )}
                        >
                          {/* Image / Visual Side */}
                          <motion.div
                            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className={cn(
                              "w-full md:w-[calc(50%-40px)]",
                              isRight ? "md:text-left" : "md:text-right",
                            )}
                          >
                            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video md:aspect-4/3 lg:aspect-video shadow-2xl">
                              <Image
                                src={item.image}
                                alt={t(item.title)}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                              {/* Badge inside image for mobile, or top corner */}
                              <div className="absolute top-4 left-4 flex gap-2">
                                <span
                                  className={cn(
                                    "text-[10px] font-bold px-2 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-white uppercase tracking-wider",
                                    item.type === "blockchain"
                                      ? "text-lime-400 border-lime-500/30"
                                      : "text-cyan-400 border-cyan-500/30",
                                  )}
                                >
                                  {item.type}
                                </span>
                                {"badge" in item && item.badge && (
                                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-yellow-500/20 backdrop-blur border border-yellow-500/30 text-yellow-300 uppercase tracking-wider">
                                    {t(item.badge)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.div>

                          {/* Content Side */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                              duration: 0.6,
                              delay: 0.2,
                              ease: "easeOut",
                            }}
                            className={cn(
                              "w-full md:w-[calc(50%-40px)] flex flex-col justify-center",
                              !isRight
                                ? "md:text-right md:items-end"
                                : "md:text-left md:items-start",
                            )}
                          >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-heading leading-tight">
                              {t(item.title)}
                            </h3>
                            <p className="text-lime-400 text-sm md:text-base font-medium mb-4">
                              {t(item.tagline)}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
                              {t(item.description)}
                            </p>

                            {/* Stats */}
                            <div
                              className={cn(
                                "grid grid-cols-2 gap-4 mb-6 w-full max-w-md",
                                !isRight ? "md:ml-auto" : "",
                              )}
                            >
                              {item.stats.map((stat, idx) => (
                                <div
                                  key={idx}
                                  className={cn(
                                    "bg-white/5 border border-white/5 rounded-xl p-3 backdrop-blur-sm",
                                    !isRight ? "text-right" : "text-left",
                                  )}
                                >
                                  <div className="text-xl md:text-2xl font-mono font-bold text-white mb-1">
                                    {stat.value}
                                  </div>
                                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                                    {t(stat.label)}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Partners */}
                            {item.partners && item.partners.length > 0 && (
                              <div className="pt-2">
                                <p className="text-xs text-muted-foreground mb-3">
                                  {t(["Partners", "Партнеры", "Серіктестер"])}
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                  {item.partners.map((companyKey, pIdx) => {
                                    const company =
                                      partners[companyKey as PartnerId];

                                    if (!company) return null;

                                    return (
                                      <a
                                        key={pIdx}
                                        href={company.site || "#"}
                                        target={
                                          company.site ? "_blank" : undefined
                                        }
                                        rel={
                                          company.site
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        className="block cursor-pointer"
                                      >
                                        <div className="h-14 md:h-16 rounded-xl px-5 py-3 flex items-center justify-center overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 hover:bg-white/8">
                                          <Image
                                            src={company.logo}
                                            alt={t(company.title)}
                                            width={200}
                                            height={80}
                                            className="h-full w-auto max-w-28 md:max-w-32 object-contain transition-all duration-300 opacity-70 hover:opacity-100"
                                          />
                                        </div>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            <button className="mt-6 flex items-center gap-2 text-lime-500 text-sm font-bold uppercase tracking-widest hover:text-lime-400 transition-colors group">
                              {t(["Learn more", "Подробнее", "Толығырақ"])}
                              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
