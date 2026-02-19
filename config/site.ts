type T3 = readonly [string, string, string];

const s = <T extends T3>(v: T) => v;

// Data entities are now in separate files:
// - config/partners.ts  → partners record + PartnerId type
// - config/events.ts    → events array (references PartnerId[])
// - config/quotes.ts    → quotes array
// - lib/data.ts         → helper functions (resolvePartners, getEventById)

export const siteConfig = {
  meta: {
    title: s([
      "BAITC — Building AI & Blockchain Ecosystems",
      "BAITC — Строим ИИ и блокчейн экосистемы",
      "BAITC — ЖИ және блокчейн экожүйелерін құрамыз",
    ]),
    description: s([
      "Kazakhstan's leading R&D center for AI and blockchain education, research, and innovation.",
      "Ведущий R&D-центр Казахстана в области образования, исследований и инноваций в ИИ и блокчейне.",
      "Қазақстандағы ЖИ және блокчейн білімі, зерттеу және инновациясының жетекші R&D орталығы.",
    ]),
  },
  // NOTE: Individual partner data moved to config/partners.ts

  nav: {
    links: [
      {
        href: "#initiatives",
        label: s(["Programs", "Программы", "Бағдарламалар"]),
      },
      { href: "#impact", label: s(["Impact", "Влияние", "Нәтиже"]) },
      { href: "#partners", label: s(["Partners", "Партнёры", "Серіктестер"]) },
      { href: "#contact", label: s(["Contact", "Контакт", "Байланыс"]) },
    ],
    cta: s(["Partner With Us", "Стать партнёром", "Серіктес болу"]),
  },

  hero: {
    headline: s([
      "Kazakhstan's [AI & Blockchain] Engine",
      "Двигатель [ИИ и блокчейна] Казахстана.",
      "Қазақстанның [ЖИ және блокчейн] қозғалтқышы",
    ]),
    verbs: [s(["AI", "ИИ", "ЖИ"]), s(["Blockchain", "Блокчейна", "Блокчейн"])],
    subheadline: s([
      "From *50,000 civil servants* to *4,800 developers* — we design programs that transform how Kazakhstan thinks, builds, and governs with technology.",
      "От *50 000 госслужащих* до *4 800 разработчиков* — мы создаём программы, меняющие то, как Казахстан думает, строит и управляет с помощью технологий.",
      "*50 000 мемлекеттік қызметкерден* *4 800 әзірлеушіге* дейін — біз Қазақстанның технологиямен ойлау, құру және басқару тәсілін өзгертетін бағдарламалар жасаймыз.",
    ]),
    cta: {
      primary: s([
        "Explore Programs",
        "Наши программы",
        "Бағдарламаларды қарау",
      ]),
      secondary: s(["Partner With Us", "Стать партнёром", "Серіктес болу"]),
    },
    scrollHint: s([
      "Scroll to explore",
      "Листайте вниз",
      "Төмен қарай жылжытыңыз",
    ]),
  },

  // NOTE: Quotes moved to config/quotes.ts
  marquee: {},

  impact: {
    label: s(["IMPACT", "ВЛИЯНИЕ", "НӘТИЖЕ"]),
    headline: s([
      "Numbers that [speak] for themselves.",
      "Цифры, которые [говорят] сами за себя.",
      "Өздері [сөйлейтін] сандар.",
    ]),
    cards: [
      {
        value: 50000,
        suffix: "+",
        label: s([
          "Civil servants trained in AI",
          "Госслужащих обучено ИИ",
          "Мемлекеттік қызметкер ЖИ-ге оқытылды",
        ]),
        sublabel: s([
          "AI Qyzmet — First in Central Eurasia",
          "AI Qyzmet — Первый в Центральной Евразии",
          "AI Qyzmet — Орталық Еуразиядағы бірінші",
        ]),
        span: "2x2" as const,
      },
      {
        value: 20,
        suffix: "",
        label: s([
          "Cities of Kazakhstan",
          "Городов Казахстана",
          "Қазақстан қаласы",
        ]),
        sublabel: s([
          "Decentrathon 4.0",
          "Деценtратон 4.0",
          "Decentrathon 4.0",
        ]),
        span: "1x1" as const,
      },
      {
        value: 22,
        suffix: "",
        label: s([
          "Universities with blockchain curriculum",
          "Университетов с блокчейн-программой",
          "Блокчейн бағдарламасы бар университет",
        ]),
        sublabel: s([
          "UOP KZ — World First",
          "UOP KZ — Первый в мире",
          "UOP KZ — Әлемде бірінші",
        ]),
        span: "1x1" as const,
      },
      {
        value: 4800,
        suffix: "+",
        label: s([
          "Developers in Decentrathon 4.0",
          "Разработчиков в Деценtратон 4.0",
          "Decentrathon 4.0 әзірлеушілері",
        ]),
        sublabel: s([
          "20 cities · $2.5M Solana opportunity",
          "20 городов · $2.5M Solana opportunity",
          "20 қала · $2.5М Solana мүмкіндігі",
        ]),
        span: "2x1" as const,
      },
      {
        value: 18,
        suffix: "",
        label: s([
          "Countries in Decentrathon 3.0",
          "Стран в Деценtратон 3.0",
          "Decentrathon 3.0 елдері",
        ]),
        sublabel: s([
          "Global online participation",
          "Глобальное онлайн-участие",
          "Ғаламдық онлайн-қатысу",
        ]),
        span: "1x1" as const,
      },
      {
        value: 53000,
        suffix: "+",
        label: s([
          "People trained in AI",
          "Людей обучено ИИ",
          "Адам ЖИ-ге оқытылды",
        ]),
        sublabel: s([
          "AI Qyzmet + AI People combined",
          "AI Qyzmet + AI People суммарно",
          "AI Qyzmet + AI People біріктірілген",
        ]),
        span: "1x1" as const,
      },
    ],
  },

  pillars: {
    label: s(["ECOSYSTEM", "ЭКОСИСТЕМА", "ЭКОЖҮЙЕ"]),
    headline: s([
      "Two pillars. One [mission].",
      "Два направления. Одна [миссия].",
      "Екі бағыт. Бір [миссия].",
    ]),
    blockchain: {
      badge: "BLOCKCHAIN",
      headline: s([
        "Blockchain\nEcosystem",
        "Блокчейн\nЭкосистема",
        "Блокчейн\nЭкожүйе",
      ]),
      description: s([
        "Building the infrastructure for a decentralized digital economy through hackathons, education, and ecosystem development.",
        "Строим инфраструктуру для децентрализованной цифровой экономики через хакатоны, образование и развитие экосистемы.",
        "Хакатондар, білім және экожүйе дамыту арқылы орталықсыздандырылған сандық экономика инфрақұрылымын құрамыз.",
      ]),
      achievements: [
        {
          title: s([
            "Decentrathon 1.0–4.0",
            "Деценtратон 1.0–4.0",
            "Decentrathon 1.0–4.0",
          ]),
          stat: s([
            "5 hackathons, $100K+ prizes",
            "5 хакатонов, $100K+ призов",
            "5 хакатон, $100K+ жүлделер",
          ]),
        },
        {
          title: s([
            "University Outreach",
            "Университетская программа",
            "Университеттік бағдарлама",
          ]),
          stat: s([
            "22 universities, 5,000+ students",
            "22 университета, 5 000+ студентов",
            "22 университет, 5 000+ студент",
          ]),
        },
        {
          title: s([
            "BNB Chain Zero2Hero",
            "BNB Chain Zero2Hero",
            "BNB Chain Zero2Hero",
          ]),
          stat: s([
            "200 builders, 6-month program",
            "200 разработчиков, 6 месяцев",
            "200 әзірлеуші, 6 айлық бағдарлама",
          ]),
        },
      ],
      stat: "5+",
      statLabel: s([
        "hackathons launched",
        "хакатонов запущено",
        "хакатон іске қосылды",
      ]),
      cta: s([
        "See all Blockchain programs →",
        "Все программы Blockchain →",
        "Барлық Blockchain бағдарламалары →",
      ]),
    },
    ai: {
      badge: "AI",
      headline: s([
        "Artificial\nIntelligence",
        "Искусственный\nИнтеллект",
        "Жасанды\nИнтеллект",
      ]),
      description: s([
        "Scaling AI literacy from government officials to everyday citizens — with KPMG-certified programs and global partnerships.",
        "Масштабируем ИИ-грамотность от госслужащих до обычных граждан — с KPMG-сертифицированными программами и глобальными партнёрствами.",
        "ЖИ сауаттылығын мемлекеттік қызметкерлерден қарапайым азаматтарға дейін кеңейтеміз — KPMG сертификатталған бағдарламалармен.",
      ]),
      achievements: [
        {
          title: s(["AI Qyzmet", "AI Qyzmet", "AI Qyzmet"]),
          stat: s([
            "50,000 civil servants, KPMG-certified",
            "50 000 госслужащих, KPMG",
            "50 000 қызметкер, KPMG",
          ]),
        },
        {
          title: s(["AI People", "AI People", "AI People"]),
          stat: s([
            "3,000+ learners, free bootcamp",
            "3 000+ учеников, бесплатный буткемп",
            "3 000+ оқушы, тегін буткемп",
          ]),
        },
        {
          title: s([
            "Meta Llama Accelerator",
            "Meta Llama Accelerator",
            "Meta Llama Accelerator",
          ]),
          stat: s([
            "Global AI × local enterprise",
            "Глобальный ИИ × местный бизнес",
            "Жаһандық ЖИ × жергілікті кәсіп",
          ]),
        },
      ],
      stat: "53,000+",
      statLabel: s([
        "people trained in AI",
        "людей обучено ИИ",
        "адам ЖИ-ге оқытылды",
      ]),
      cta: s([
        "See all AI programs →",
        "Все программы AI →",
        "Барлық AI бағдарламалары →",
      ]),
    },
  },

  methodology: {
    label: s(["HOW WE WORK", "КАК МЫ РАБОТАЕМ", "БІЗДІҢ ЖҰМЫС"]),
    headline: s([
      "From idea to [national scale].",
      "От идеи до [национального масштаба].",
      "Идеядан [ұлттық масштабқа] дейін.",
    ]),
    steps: [
      {
        number: "01",
        title: s(["Design", "Проектируем", "Жобалаймыз"]),
        description: s([
          "We study the challenge and design a program tailored to the real context — not a template.",
          "Мы изучаем задачу и проектируем программу под реальный контекст — не шаблон.",
          "Міндетті зерттеп, нақты контекстке арналған бағдарлама жобалаймыз — шаблон емес.",
        ]),
      },
      {
        number: "02",
        title: s(["Execute", "Запускаем", "Іске қосамыз"]),
        description: s([
          "We launch, manage, and iterate until the result is achieved — not just delivered.",
          "Мы запускаем, управляем и итерируем до достижения результата — не просто сдачи.",
          "Нәтижеге жеткенше іске қосамыз, басқарамыз және итерациялаймыз.",
        ]),
      },
      {
        number: "03",
        title: s(["Scale", "Масштабируем", "Масштабтаймыз"]),
        description: s([
          "We scale proven programs to national level — reaching every region and institution.",
          "Мы масштабируем проверенные программы на уровень страны — охватывая каждый регион.",
          "Тексерілген бағдарламаларды ұлттық деңгейге дейін масштабтаймыз.",
        ]),
      },
    ],
  },

  // NOTE: initiatives.items moved to config/events.ts
  initiatives: {
    label: s(["PROGRAMS", "ПРОГРАММЫ", "БАҒДАРЛАМАЛАР"]),
    headline: s([
      "Building since [2022].",
      "Строим с [2022] года.",
      "[2022] жылдан бері құрамыз.",
    ]),
    filters: [
      s(["All", "Все", "Барлығы"]),
      s(["Blockchain", "Блокчейн", "Блокчейн"]),
      s(["AI", "ИИ", "ЖИ"]),
    ],
  },

  quotes: {
    label: s(["TRUST", "ДОВЕРИЕ", "СЕНІМ"]),
    headline: s([
      "Voices behind the [mission].",
      "Голоса за [миссией].",
      "[Миссияның] артындағы дауыстар.",
    ]),
  },

  partners: {
    label: s(["PARTNERS", "ПАРТНЁРЫ", "СЕРІКТЕСТЕР"]),
    headline: s([
      "The ecosystem behind the [Generative Nation].",
      "Экосистема за [Генеративной Нацией].",
      "[Генеративті Ұлт] артындағы экожүйе.",
    ]),
    categories: [
      {
        title: s([
          "Global Technology Partners",
          "Глобальные технологические партнёры",
          "Жаһандық технологиялық серіктестер",
        ]),
        logos: [
          "meta",
          "mastercard",
          "binance",
          "solana",
          "ton",
          "indrive",
          "bybit",
          "bnb_chain",
          "quantum_black",
          "chainalysis",
          "grand_mobile",
          "ogames",
          "superteam",
          "activ",
          "bcc_hub",
        ],
      },
      {
        title: s([
          "Government & Public Institutions",
          "Государственные и общественные учреждения",
          "Мемлекеттік және қоғамдық мекемелер",
        ]),
        logos: [
          "afm",
          "ai_digital_ministry",
          "alem_ai",
          "adgs",
          "nitec",
          "agu",
          "astana_hub",
          "astana_innovations",
          "national_bank",
          "mnvo",
          "npck",
          "tumo",
          "tomorrow_school",
          "kazakhtelecom",
          "bcc",
        ],
      },
    ],
    cta: s([
      "Interested in partnering? Get in touch →",
      "Хотите стать партнёром? Свяжитесь с нами →",
      "Серіктес болғыңыз келе ме? Бізбен байланысыңыз →",
    ]),
  },

  contact: {
    label: s(["CONTACT", "КОНТАКТ", "БАЙЛАНЫС"]),
    headline: s([
      "Have a program idea? [Let's make it real.]",
      "Есть идея программы? [Давайте реализуем.]",
      "Бағдарлама идеясы бар ма? [Жүзеге асырайық.]",
    ]),
    description: s([
      "_Response within 24 hours._",
      "_Ответим в течение 24 часов._",
      "_24 сағат ішінде жауап береміз._",
    ]),
    inquiryTypes: [
      {
        label: s([
          "Corporate Training",
          "Корпоративное обучение",
          "Корпоративтік оқыту",
        ]),
        description: s([
          "We design custom AI & blockchain programs for teams.",
          "Мы проектируем кастомные ИИ и блокчейн программы для команд.",
          "Командаларға арналған ЖИ және блокчейн бағдарламалары жасаймыз.",
        ]),
      },
      {
        label: s([
          "Hackathon Partnership",
          "Партнёрство по хакатонам",
          "Хакатон серіктестігі",
        ]),
        description: s([
          "Co-create a national or corporate hackathon with us.",
          "Создайте национальный или корпоративный хакатон вместе с нами.",
          "Бізбен бірге ұлттық немесе корпоративтік хакатон құрыңыз.",
        ]),
      },
      {
        label: s([
          "Government Program",
          "Государственная программа",
          "Мемлекеттік бағдарлама",
        ]),
        description: s([
          "Scale AI/blockchain literacy across government.",
          "Масштабируйте ИИ/блокчейн грамотность в государственном секторе.",
          "Мемлекеттік секторда ЖИ/блокчейн сауаттылығын масштабтаңыз.",
        ]),
      },
    ],
    info: {
      email: "team@baitc.org",
      telegram: "@sammExe",
      location: s([
        "Astana, Kazakhstan\nMukhtar Auezov st., 26",
        "Астана, Казахстан\nул. Мухтара Ауэзова, 26",
        "Астана, Қазақстан\nМұхтар Әуезов көш., 26",
      ]),
    },
  },

  footer: {
    tagline: s([
      "Building a [Generative Nation] — one program at a time.",
      "Строим [Генеративную Нацию] — программа за программой.",
      "[Генеративті Ұлт] құрамыз — бағдарлама артынан бағдарлама.",
    ]),
    legal: {
      name: "Private Fund «Blockchain Center»",
      bin: "BIN: 110340010901",
      address: s([
        "010000, Kazakhstan, Astana, Mukhtar Auezov st., 26",
        "010000, Казахстан, Астана, ул. Мухтара Ауэзова, 26",
        "010000, Қазақстан, Астана, Мұхтар Әуезов көш., 26",
      ]),
    },
    ticker: [
      "▶  META LLAMA ACCELERATOR — LAUNCHED MAY 2025",
      "▶  DECENTRATHON 4.0 — 4,800 DEVELOPERS ACROSS 20 CITIES",
      "▶  AI QYZMET — 50,000 CIVIL SERVANTS TRAINED IN AI",
      "▶  DECENTRATHON 3.0 — 18 COUNTRIES PARTICIPATED",
    ],
    copyright: "© 2025 BAITC. All rights reserved.",
    ctrlKHint: s([
      "Press Ctrl+K for commands",
      "Нажмите Ctrl+K для команд",
      "Пәрмендер үшін Ctrl+K басыңыз",
    ]),
    contact: {
      email: "team@baitc.org",
      telegram: "@sammExe",
      location: s([
        "Astana, Kazakhstan",
        "Астана, Казахстан",
        "Астана, Қазақстан",
      ]),
    },
    socials: [
      { label: "Telegram", href: "https://t.me/baitc_kz" },
      { label: "LinkedIn", href: "https://linkedin.com/company/baitc" },
    ],
  },
} as const;
