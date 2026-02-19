"use client";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/LangContext";
import { cn } from "@/lib/utils";

export function MarqueeSection() {
  const { t } = useLang();
  const quotes = siteConfig.marquee.quotes;

  const renderBlock = (key: string) => (
    <div key={key} className="flex items-center gap-8 shrink-0">
      {quotes.map((q, i) => (
        <div key={`${key}-${i}`} className="flex items-center gap-8 shrink-0">
          <div className="flex items-center gap-3 shrink-0 max-w-[500px]">
            <span className="text-sm text-slate-300 leading-relaxed">
              {t(q.text)}
            </span>
            <span className="text-sm text-slate-500 shrink-0">
              — {t(q.author)}
            </span>
          </div>
          <span className="text-lime-500/30 shrink-0">──</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "border-y border-white/6",
        "bg-[rgba(34,197,94,0.04)]",
        "py-6 group",
      )}
    >
      <div
        className="flex gap-8 animate-marquee group-hover:paused"
        style={{ width: "max-content" }}
      >
        {renderBlock("a")}
        {renderBlock("b")}
        {renderBlock("c")}
      </div>
    </div>
  );
}
