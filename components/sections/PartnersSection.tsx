"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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

        <div className="space-y-16">
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
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {t(cat.title)}
              </h3>
              <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 p-4">
                {cat.logos.map((companyKey, li) => {
                  const company =
                    siteConfig.companies[
                      companyKey as keyof typeof siteConfig.companies
                    ];

                  if (!company) return null;

                  return (
                    <div key={li} className="group">
                      <a
                        href={company.site || "#"}
                        target={company.site ? "_blank" : undefined}
                        rel={company.site ? "noopener noreferrer" : undefined}
                        className={cn(
                          "block cursor-pointer",
                          !company.site && "pointer-events-none",
                        )}
                      >
                        <div className="relative aspect-3/2 rounded-2xl p-4 md:p-6 flex items-center justify-center overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-background">
                          <div className="relative w-full h-full flex items-center justify-center p-2">
                            <Image
                              src={company.logo}
                              alt={t(company.title)}
                              width={200}
                              height={100}
                              className="object-contain transition-all duration-300"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            {t(cta)}{" "}
            <a
              href="#contact"
              className="text-primary hover:text-primary/80 transition-colors font-medium underline decoration-primary/30 hover:decoration-primary/60"
            >
              {t(["Contact us", "Связаться с нами", "Бізбен хабарласыңыз"])}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
