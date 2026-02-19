// config/publications.ts
// Press publications / media mentions for BAITC initiatives.
// Each entry has: url, source (outlet name), title, event (initiative slug).
//
// EventId values are the same slugs used in config/events.ts.

import type { EventId } from "./events";

export interface Publication {
  url: string;
  /** Short outlet name shown as a badge (e.g. "DKNews", "gov.kz") */
  source: string;
  /** Article headline */
  title: string;
  /** Which initiative this publication belongs to */
  event: EventId;
}

export const publications: Publication[] = [
  // ── University Outreach Program ──────────────────────────────────────────
  {
    url: "https://dknews.kz/ru/finansy/302896-kazahstanskie-universitety-vnedryayut-blokcheyn",
    source: "DKNews",
    title: "Казахстанские университеты внедряют блокчейн",
    event: "university-outreach",
  },
  {
    url: "https://kapital.kz/gosudarstvo/111414/v-kazakhstanskikh-vuzakh-nachnut-obuchat-blokcheyn-inzhenerii.html",
    source: "Kapital.kz",
    title: "В казахстанских вузах начнут обучать блокчейн-инженерии",
    event: "university-outreach",
  },
  {
    url: "https://kazpravda.kz/n/ne-imeet-analogov-krupneyshuyu-v-mire-obrazovatelnuyu-initsiativu-v-sfere-blokcheyn-zapuskaet-kazahstan/",
    source: "Казправда",
    title:
      "Не имеет аналогов: крупнейшую в мире образовательную инициативу в сфере блокчейн запускает Казахстан",
    event: "university-outreach",
  },
  {
    url: "https://regtv.kz/2022/12/19/ent-kazahstan-zapyskaet-krypneishyu-v-mire-obrazovatelnyu-iniciativy-v-sfere-blokchein.html",
    source: "RegTV",
    title:
      "Казахстан запускает крупнейшую в мире образовательную инициативу в сфере блокчейн",
    event: "university-outreach",
  },
  {
    url: "https://www.binance.com/ru/blog/%D0%BA%D0%BE%D0%BC%D1%8C%D1%8E%D0%BD%D0%B8%D1%82%D0%B8/7970118227380623599",
    source: "Binance",
    title: "University Outreach Program Kazakhstan",
    event: "university-outreach",
  },
  {
    url: "https://digitalbusiness.kz/2023-10-18/opit-kazahstana-po-izucheniyu-blokcheyna-v-vuzah-masshtabiruyut-na-200-universitetov-v-50-stranah-mira/",
    source: "Digital Business",
    title:
      "Опыт Казахстана по изучению блокчейна в вузах масштабируют на 200 университетов в 50 странах мира",
    event: "university-outreach",
  },
  {
    url: "https://www.gov.kz/memleket/entities/sci/press/news/details/622446?lang=ru",
    source: "Gov.kz",
    title: "Blockchain education program",
    event: "university-outreach",
  },
  {
    url: "https://bluescreen.kz/decentral-asia-digital-tenge-i-kriptopriestuplieniia/",
    source: "Blue Screen",
    title: "Decentral Asia: Цифровой тенге и криптопреступления",
    event: "university-outreach",
  },

  // ── AI People ────────────────────────────────────────────────────────────
  {
    url: "https://astanahub.com/ru/article/v-kazakhstane-zapustilos-obuchenie-naseleniia-primeneniiu-iskusstvennogo-intellekta-v-povsednevnoi-zhizn",
    source: "Astana Hub",
    title:
      "В Казахстане запустилось обучение населения применению искусственного интеллекта",
    event: "ai-people",
  },
  {
    url: "https://www.zakon.kz/obshestvo/6448234-kazakhstantsev-besplatno-obuchat-osnovam-iskusstvennogo-intellekta.html",
    source: "Zakon.kz",
    title: "Казахстанцев бесплатно обучат основам искусственного интеллекта",
    event: "ai-people",
  },
  {
    url: "https://baigenews.kz/kazahstantsev-besplatno-obuchat-primeneniyu-ii-v-zhizni_183924/",
    source: "Baige News",
    title: "Казахстанцев бесплатно обучат применению ИИ в жизни",
    event: "ai-people",
  },
  {
    url: "https://www.gov.kz/memleket/entities/mdai/press/news/details/843712?lang=ru",
    source: "Gov.kz",
    title: "AI Movement initiative launched",
    event: "ai-people",
  },
  {
    url: "https://the-tech.kz/astana-hub-zapuskaet-inicziativu-ai-movement-dlya-razvitiya-ii-v-kazahstane/",
    source: "The Tech",
    title: "Astana Hub запускает инициативу AI Movement",
    event: "ai-people",
  },
  {
    url: "https://astanatv.kz/ru/news/123754/",
    source: "Astana TV",
    title: "AI Movement coverage",
    event: "ai-people",
  },
  {
    url: "https://i-digital.kz/ai/kazakhstancev-budut-obuchat-primenyat-iskusstvennyy-intellekt-v-povsednevnoy-zhizni",
    source: "i-Digital.kz",
    title: "Казахстанцев будут обучать применять искусственный интеллект",
    event: "ai-people",
  },
  {
    url: "https://gurk.kz/news/kazahstanczy-smogut-besplatno-osvoit-azy-raboty-s-iskusstvenny-m-intellektom",
    source: "GURK",
    title: "Казахстанцы смогут бесплатно освоить азы работы с ИИ",
    event: "ai-people",
  },

  // ── AI Qyzmet ────────────────────────────────────────────────────────────
  {
    url: "https://www.apa.kz/ru/%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D1%85-%D0%B3%D0%BE%D1%81%D1%81%D0%BB%D1%83%D0%B6%D0%B0%D1%89%D0%B8%D1%85-%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%82-%D0%B8%D0%B8/",
    source: "APA.kz",
    title: "Казахстанских госслужащих обучат ИИ",
    event: "ai-qyzmet",
  },
  {
    url: "https://www.gov.kz/memleket/entities/almobl-tehnologiya/press/news/details/1018237",
    source: "Gov.kz",
    title: "AI Qyzmet program launch",
    event: "ai-qyzmet",
  },
  {
    url: "https://24.kz/ru/news/social/712013-ai-qyzmet-30-tysyach-gossluzhashchikh-obuchat-ii-navykam-v-etom-godu",
    source: "24.kz",
    title: "AI QYZMET: 30 тысяч госслужащих обучат ИИ навыкам в этом году",
    event: "ai-qyzmet",
  },
  {
    url: "https://inbusiness.kz/ru/last/kazahstan-zapuskaet-pervuyu-v-regione-ai-programmu-dlya-gossluzhashih",
    source: "InBusiness",
    title: "Казахстан запускает первую в регионе AI программу для госслужащих",
    event: "ai-qyzmet",
  },
  {
    url: "https://bluescreen.kz/mintsifry-zapuskaiet-obuchieniie-po-ii-navykam-dlia-ghossluzhashchikh/",
    source: "Blue Screen",
    title: "Минцифры запускает обучение по ИИ навыкам для госслужащих",
    event: "ai-qyzmet",
  },
  {
    url: "https://kpmg.com/kz/ru/home/media/press-releases/2025/05/training-ai-qyzmet.html",
    source: "KPMG",
    title: "Training AI Qyzmet",
    event: "ai-qyzmet",
  },

  // ── Meta Llama Accelerator ───────────────────────────────────────────────
  {
    url: "https://the-tech.kz",
    source: "The Tech",
    title: "Казахстан и Meta открывают акселератор для поддержки...",
    event: "meta-llama-accelerator",
  },
  {
    url: "https://bluescreen.kz",
    source: "Blue Screen",
    title: "Meta запустит акселератор ИИ-проектов в Казахстане",
    event: "meta-llama-accelerator",
  },
  {
    url: "https://ulysmedia.kz/news/52488-meta-zapustit-v-kazakhstane-ai-programmu-dlia-razrabotchikov/",
    source: "Ulysmedia",
    title: "Meta запустит в Казахстане AI-программу для разработчиков",
    event: "meta-llama-accelerator",
  },
  {
    url: "https://qazinform.kz",
    source: "Qazinform",
    title: "Kazakhstan, Meta to launch new program to support AI...",
    event: "meta-llama-accelerator",
  },

  // ── BNB Chain Zero2Hero ──────────────────────────────────────────────────
  {
    url: "https://bluescreen.kz/blokchiein-siet-bnbchain-budiet-obuchat-kazakhstantsiev/",
    source: "Blue Screen",
    title: "Блокчейн-сеть BNBChain будет обучать казахстанцев",
    event: "bnb-zero2hero",
  },
  {
    url: "https://www.bnbchain.org/en/zero2hero-builder-series",
    source: "BNB Chain",
    title: "Zero2Hero Builder Series",
    event: "bnb-zero2hero",
  },
  {
    url: "https://baq.kz/bnbchain-qazaqstanda-kadr-dayyndaydy-298119/",
    source: "BAQ",
    title: "BNBChain Қазақстанда кадр дайындайды",
    event: "bnb-zero2hero",
  },
  {
    url: "https://www.bnbchain.org/en/blog/bnb-chain-kicks-off-zero2hero-hackathon",
    source: "BNB Chain",
    title: "BNB Chain kicks off Zero2Hero Hackathon",
    event: "bnb-zero2hero",
  },

  // ── Decentrathon 1.0 ─────────────────────────────────────────────────────
  {
    url: "https://astanahub.com/en/event/v-kazakhstane-proidet-krupneishii-v-regione-web3-khakaton-decentrathon/",
    source: "Astana Hub",
    title: "Largest Web3 Hackathon in the Region",
    event: "decentrathon-1",
  },
  {
    url: "https://kbtu.edu.kz/ru/activity/3421-krupnejshij-web3-khakaton-decentrathon",
    source: "KBTU",
    title: "Largest Web3 Hackathon Decentrathon",
    event: "decentrathon-1",
  },
  {
    url: "https://www.gov.kz/memleket/entities/aqmola-digital/press/news/details/547725",
    source: "Gov.kz",
    title: "Official Announcement",
    event: "decentrathon-1",
  },
  {
    url: "https://bluescreen.kz/v-kazakhstanie-zaviershilsia-multilokatsionnyi-web3-khakaton-decentrathon/",
    source: "Blue Screen",
    title: "Multi-location Web3 Hackathon Completed",
    event: "decentrathon-1",
  },
  {
    url: "https://www.kstu.kz/hakaton/?lang=ru",
    source: "KSTU",
    title: "Hackathon Information",
    event: "decentrathon-1",
  },
  {
    url: "https://profit.kz/news/64574/V-Kazahstane-sostoitsya-krupnejshij-Web3-hakaton-Decentrathon/",
    source: "Profit.kz",
    title: "Largest Web3 Hackathon Decentrathon",
    event: "decentrathon-1",
  },
  {
    url: "https://the-tech.kz/v-kazahstane-projdet-krupnejshij-v-regione-web3-hakaton-decentrathon/",
    source: "The Tech",
    title: "Largest Regional Web3 Hackathon",
    event: "decentrathon-1",
  },
  {
    url: "https://digitalbusiness.kz/2023-04-28/hakaton-po-web3-s-prizovym-fondom-v-10-tysyach/",
    source: "Digital Business",
    title: "Web3 Hackathon with $10,000 Prize",
    event: "decentrathon-1",
  },
  {
    url: "https://dknews.kz/ru/dk-life/291113-kazahstan-stanovitsya-centrom-blokcheyn-innovaciy",
    source: "DKNews",
    title: "Kazakhstan Becomes Center of Blockchain Innovation",
    event: "decentrathon-1",
  },
  {
    url: "https://digitalbusiness.kz/2023-05-26/v-kazahstane-nachalsya-hakaton/",
    source: "Digital Business",
    title: "Hackathon Started in Kazakhstan",
    event: "decentrathon-1",
  },
  {
    url: "https://bluescreen.kz/krupnieishii-web3-khakaton-ievrazii-proidiet-v-kazakhstanie/",
    source: "Blue Screen",
    title: "Largest Web3 Hackathon in Eurasia",
    event: "decentrathon-1",
  },

  // ── Decentrathon 2.0 ─────────────────────────────────────────────────────
  {
    url: "https://astanahub.com/ru/event/decentrathon-2-0/",
    source: "Astana Hub",
    title: "Decentrathon 2.0",
    event: "decentrathon-2",
  },
  {
    url: "https://wkitu.kz/ru/Meroprijatija/hakaton-decentrathon-2-0/",
    source: "WKITU",
    title: "Hackathon Decentrathon 2.0",
    event: "decentrathon-2",
  },
  {
    url: "https://vecher.kz/ru/article/v-kazahstane-startoval-krupneishii-multilokasionnyi-hakaton-v-mire-decentrathon-20.html",
    source: "Vecher.kz",
    title: "Largest Multi-Location Hackathon",
    event: "decentrathon-2",
  },
  {
    url: "https://mtrk.kz/ru/2024/10/18/khakaton-decentrathon-2-0-s-prizovym-fondom-50-000-starto/",
    source: "MTRK",
    title: "Decentrathon 2.0 with $50,000 Prize",
    event: "decentrathon-2",
  },
  {
    url: "https://dulaty.kz/ru/commercialization-news/item/7279-proshel-multilokatsionnyj-khakaton-decentrathon-2-0.html",
    source: "Dulaty University",
    title: "Multi-Location Hackathon",
    event: "decentrathon-2",
  },
  {
    url: "https://tou.edu.kz/ru/news/11400-tou-dai-azastanni-e-auimdi-decentrathon-20-hakatoni",
    source: "TOU",
    title: "Decentrathon 2.0 in Kazakhstan",
    event: "decentrathon-2",
  },
  {
    url: "https://www.gov.kz/memleket/entities/maidd/press/news/details/867373",
    source: "Gov.kz",
    title: "Decentrathon 2.0 Official Announcement",
    event: "decentrathon-2",
  },
  {
    url: "https://satbayev.university/ru/news/v-satbayev-university-startoval-khakaton-decentrathon-20-predstavivshiy-komandnuyu-rabotu-bez-granits",
    source: "Satbayev University",
    title: "Hackathon Started",
    event: "decentrathon-2",
  },
  {
    url: "https://weproject.media/articles/detail/decentrathon-2-0-krupneyshee-it-sobytie-kazakhstana-s-prizovym-fondom-50-000-i-virtualnoy-yarmarkoy/",
    source: "WeProject Media",
    title: "Kazakhstan Largest IT Event",
    event: "decentrathon-2",
  },
  {
    url: "https://digitalbusiness.kz/2024-10-17/50-000-na-konu-v-kazahstane-startuet-krupneyshiy-multilokatsionniy-hakaton/",
    source: "Digital Business",
    title: "Multi-Location Hackathon Launch",
    event: "decentrathon-2",
  },

  // ── Decentrathon 3.0 ─────────────────────────────────────────────────────
  {
    url: "https://digitalbusiness.kz/2025-05-14/v-kazahstane-proydet-onlayn-hakaton-s-prizovim-fondom-v-16-mln-tenge-kak-stat-uchastnikom/",
    source: "Digital Business",
    title: "Online hackathon with 16M KZT prize pool",
    event: "decentrathon-3",
  },
  {
    url: "https://astanahub.com/ru/article/decentrathon-3-0-startuet-natsionalnyi-onlain-khakaton-s-prizovym-fondom-16-millionov-tenge",
    source: "Astana Hub",
    title: "Decentrathon 3.0 national online hackathon",
    event: "decentrathon-3",
  },
  {
    url: "https://bluescreen.kz/bitva-za-16-mln-opriedielieny-pobieditieli-miezhdunarodnogho-khakatona-decentrathon-3-0/",
    source: "Blue Screen",
    title: "Battle for 16M: Decentrathon 3.0 winners",
    event: "decentrathon-3",
  },
  {
    url: "https://qazaqstan.tv/news/214009",
    source: "Qazaqstan TV",
    title: "Decentrathon 3.0 coverage",
    event: "decentrathon-3",
  },
  {
    url: "https://dknews.kz/ru/tags/Decentrathon%203.0",
    source: "DKNews",
    title: "Decentrathon 3.0 news",
    event: "decentrathon-3",
  },
  {
    url: "https://astanahub.com/ru/article/bitva-za-16-mln-opredeleny-pobediteli-mezhdunarodnogo-khakatona-decentrathon-3-0",
    source: "Astana Hub",
    title: "Decentrathon 3.0 winners announcement",
    event: "decentrathon-3",
  },

  // ── Decentrathon 4.0 ─────────────────────────────────────────────────────
  {
    url: "https://digitalbusiness.kz/2025-09-12/hakaton-eto-ne-autsors-na-novichkov-a-innovatsionnaya-pesochnitsa-pochemu-btsk-i-bcc-hub-stali-partnerami-decentrathon-4-0/",
    source: "Digital Business",
    title: "Hackathon as Innovation Sandbox",
    event: "decentrathon-4",
  },
  {
    url: "https://digitalbusiness.kz/2025-09-17/indrive-s-pomoshchyu-ii-proverit-sostoyanie-svoih-avtomobiley/",
    source: "Digital Business",
    title: "inDrive AI Car Condition Check",
    event: "decentrathon-4",
  },
  {
    url: "https://www.gov.kz/memleket/entities/maidd/press/news/details/1086593?lang=ru",
    source: "Gov.kz",
    title: "Decentrathon 4.0 Official Announcement",
    event: "decentrathon-4",
  },
  {
    url: "https://dknews.kz/ru/dk-it/369654-decentrathon-4-0-luchshie-resheniya-poluchat-shans-na",
    source: "DKNews",
    title: "Decentrathon 4.0 Best Solutions",
    event: "decentrathon-4",
  },
  {
    url: "https://qmu.edu.kz/ru/obyavleniya/decentrathon-4-0-krupneyshiy-oflayn-khakaton-kazakhstana/",
    source: "QMU",
    title: "Largest Offline Hackathon",
    event: "decentrathon-4",
  },
  {
    url: "https://astanatv.kz/ru/news/151908/",
    source: "Astana TV",
    title: "Decentrathon 4.0 Coverage",
    event: "decentrathon-4",
  },
  {
    url: "https://digitalbusiness.kz/2025-09-12/bilet-na-hakaton-na-2-5-mln-dollarov-chto-solana-predlagaet-uchastnikam-decentrathon/",
    source: "Digital Business",
    title: "Solana $2.5M Hackathon Opportunity",
    event: "decentrathon-4",
  },
];

/** Get all publications for a given event */
export function getPublicationsByEvent(eventId: EventId): Publication[] {
  return publications.filter((p) => p.event === eventId);
}
