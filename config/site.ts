type T3 = readonly [string, string, string];

const s = <T extends T3>(v: T) => v;

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
  companies: {
    meta: {
      title: ["Meta", "Meta", "Meta"],
      site: "https://about.meta.com",
      logo: "/images/logos/logo_meta.webp",
    },
    mastercard: {
      title: ["Mastercard", "Mastercard", "Mastercard"],
      site: "https://www.mastercard.com",
      logo: "/images/logos/logo_mastercard.webp",
    },
    binance: {
      title: ["Binance", "Binance", "Binance"],
      site: "https://www.binance.com",
      logo: "/images/logos/logo_binance.webp",
    },
    solana: {
      title: ["Solana", "Solana", "Solana"],
      site: "https://solana.com",
      logo: "/images/logos/logo_solana.webp",
    },
    ton: {
      title: ["TON", "TON", "TON"],
      site: "https://ton.org",
      logo: "/images/logos/logo_ton.webp",
    },
    indrive: {
      title: ["InDrive", "InDrive", "InDrive"],
      site: "https://indrive.com",
      logo: "/images/logos/logo_indrive.webp",
    },
    bybit: {
      title: ["Bybit", "Bybit", "Bybit"],
      site: "https://www.bybit.com",
      logo: "/images/logos/logo_bybit.webp",
    },
    bnb_chain: {
      title: ["BNB Chain", "BNB Chain", "BNB Chain"],
      site: "https://www.bnbchain.org",
      logo: "/images/logos/logo_bnb_chain.webp",
    },
    quantum_black: {
      title: ["Quantum Black", "Quantum Black", "Quantum Black"],
      site: "https://www.mckinsey.com/capabilities/quantumblack",
      logo: "/images/logos/logo_quantum.webp",
    },
    chainalysis: {
      title: ["Chainalysis", "Chainalysis", "Chainalysis"],
      site: "https://www.chainalysis.com",
      logo: "/images/logos/logo_chainanalysis.webp",
    },
    grand_mobile: {
      title: ["Grand Mobile", "Grand Mobile", "Grand Mobile"],
      site: "https://grandmobile.kz",
      logo: "/images/logos/logo_grandmobile.webp",
    },
    ogames: {
      title: ["Ogames", "Ogames", "Ogames"],
      site: "https://ogames.kz",
      logo: "/images/logos/logo_ogames.webp",
    },
    superteam: {
      title: ["Superteam", "Superteam", "Superteam"],
      site: "https://superteam.fun",
      logo: "/images/logos/logo_superteam.webp",
    },
    activ: {
      title: ["Activ", "Activ", "Activ"],
      site: "https://activ.kz",
      logo: "/images/logos/logo_activ.webp",
    },
    bcc_hub: {
      title: ["BCC Hub", "BCC Hub", "BCC Hub"],
      site: "https://hub.bcc.kz",
      logo: "/images/logos/logo_bcc_hub.webp",
    },
    afm: {
      title: [
        "Agency for Financial Monitoring",
        "Агенство по Финансовому Мониторингу",
        "Қаржы мониторингі агенттігі",
      ],
      site: "https://websfm.kz/",
      logo: "/images/logos/logo_afm.webp",
    },
    aidm: {
      title: [
        "Ministry of Digital Development and AI",
        "Министерство Цифрового Развития и ИИ",
        "Цифрлық даму және ЖИ министрлігі",
      ],
      site: null,
      logo: "/images/logos/logo_aidm.webp",
    },
    alem_ai: {
      title: ["Alem AI", "Alem AI", "Alem AI"],
      site: "https://alemai.kz",
      logo: "/images/logos/logo_alem-ai.webp",
    },
    agds: {
      title: [
        "Agency for Civil Service Affairs",
        "Агентство по делам государственной службы",
        "Мемлекеттік қызмет істері агенттігі",
      ],
      site: null,
      logo: "/images/logos/logo_adgs.webp",
    },
    nitec: {
      title: [
        "National Institute of Technology",
        "Национальный институт технологий",
        "Ұлттық технологиялар институты",
      ],
      site: "https://nitec.kz",
      logo: "/images/logos/logo_nitec.webp",
    },
    agu: {
      title: ["AGU", "AGU", "AGU"],
      site: null,
      logo: "/images/logos/logo_agu.webp",
    },
    astana_hub: {
      title: ["Astana Hub", "Astana Hub", "Astana Hub"],
      site: "https://astanahub.com",
      logo: "/images/logos/logo_ahub.webp",
    },
    astana_inovations: {
      title: ["Astana Innovations", "Astana Innovations", "Astana Innovations"],
      site: "https://astanahub.com",
      logo: "/images/logos/logo_astanainnovations.webp",
    },
    national_bank: {
      title: ["National Bank", "Национальный Банк", "Ұлттық Банкі"],
      site: "https://nationalbank.kz",
      logo: "/images/logos/logo_national_bank.webp",
    },
    mnvo: {
      title: [
        "Ministry of Information and Communications",
        "Министерство информации и коммуникаций РК",
        "Қазақстан Республикасының Ақпарат және коммуникациялар министрлігі",
      ],
      site: "https://www.gov.kz/memleket/entities/msn",
      logo: "/images/logos/logo_mnvo.webp",
    },
    npck: {
      title: [
        "National Payment Corporation of Kazakhstan",
        "Национальная платежная корпорация Казахстана",
        "Қазақстан Республикасының Ұлттық төлем корпорациясы",
      ],
      site: "https://npck.kz/",
      logo: "/images/logos/logo_npck.svg",
    },
    tumo: {
      title: ["TUMO", "TUMO", "TUMO"],
      site: "https://astana.tumo.kz/",
      logo: "/images/logos/logo_tumo.webp",
    },
    tomorow_school: {
      title: ["Tomorow School", "Tomorow School", "Tomorow School"],
      site: "https://tomorrow-school.ai/",
      logo: "/images/logos/logo_tomorrow-school.webp",
    },
    kazakhtelecom: {
      title: ["Kazakhtelecom", "Казактелеком", "Қазақтелеком"],
      site: "https://telecom.kz/",
      logo: "/images/logos/logo_kazakhtelecom.webp",
    },
    centrecredit: {
      title: ["Bank CentreCredit", "Банк ЦентрКредит", "Банк ЦентрКредит"],
      site: "https://www.bcc.kz/kz/",
      logo: "/images/logos/logo_bcc.webp",
    },
    kpmg: {
      title: ["KPMG", "KPMG", "KPMG"],
      site: null,
      logo: "/images/logos/logo_kpmg.webp",
    },
  },
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

  marquee: {
    quotes: [
      {
        text: s([
          '"Generative Nation reflects Kazakhstan\'s aspiration to build a robust innovation ecosystem, inspired by Singapore and South Korea."',
          "«Генеративная Нация отражает стремление Казахстана создать мощную инновационную экосистему, вдохновлённую Сингапуром и Южной Кореей.»",
          "«Генеративті Ұлт — Қазақстанның Сингапур мен Оңтүстік Кореядан шабыт алған инновациялық экожүйе құру ұмтылысының көрінісі.»",
        ]),
        author: s(["Zhaslan Madiyev", "Жаслан Мадиев", "Жаслан Мадиев"]),
        role: s([
          "Deputy Prime Minister of the Republic of Kazakhstan",
          "Заместитель Премьер-Министра Республики Казахстан",
          "Қазақстан Республикасының Премьер-Министрінің орынбасары",
        ]),
      },
      {
        text: s([
          '"Kazakhstan is the first country in the world to introduce a blockchain curriculum on a nationwide scale."',
          "«Казахстан — первая страна в мире, внедрившая блокчейн-программу на национальном уровне.»",
          "«Қазақстан — блокчейн оқу бағдарламасын ұлттық деңгейде енгізген әлемдегі бірінші ел.»",
        ]),
        author: s(["Sayasat Nurbek", "Саясат Нурбек", "Саясат Нүрбек"]),
        role: s([
          "Minister of Science & Higher Education",
          "Министр науки и высшего образования",
          "Ғылым және жоғары білім министрі",
        ]),
      },
      {
        text: s([
          '"Meta Llama Accelerator demonstrates how collaboration between government, industry, and innovators can unlock AI for the public good."',
          "«Meta Llama Accelerator демонстрирует, как сотрудничество государства, бизнеса и инноваторов раскрывает потенциал ИИ для общественного блага.»",
          "«Meta Llama Accelerator мемлекет, бизнес және инноваторлар арасындағы ынтымақтастық ЖИ-ді қоғам игілігіне ашатынын көрсетеді.»",
        ]),
        author: s(["Sarim Aziz", "Сарим Азиз", "Сарим Азиз"]),
        role: s([
          "Director of Public Policy, Meta",
          "Директор по государственной политике, Meta",
          "Meta мемлекеттік саясат бойынша директоры",
        ]),
      },
    ],
  },

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
    items: [
      {
        year: "2025",
        type: "ai" as const,
        title: s([
          "Meta Llama Accelerator",
          "Meta Llama Accelerator",
          "Meta Llama Accelerator",
        ]),
        tagline: s([
          "Global AI × local enterprise partnership",
          "Глобальный ИИ × местное партнёрство",
          "Жаһандық ЖИ × жергілікті серіктестік",
        ]),
        description: s([
          "We developed the Meta Llama Accelerator program to bridge global AI technologies with local business needs. In partnership with Meta, we helped companies and government entities implement applied AI solutions, build prototypes, and establish long-term innovation expertise across various sectors.",
          "Мы разработали программу Meta LLaMA Accelerator, чтобы соединить глобальные AI-технологии с локальными потребностями бизнеса. В партнерстве с Meta мы помогли компаниям и государственным структурам внедрять прикладные AI-решения, создавать прототипы и выстраивать долгосрочную инновационную экспертизу в разных секторах.",
          "Біз жаһандық AI технологияларын жергілікті бизнес қажеттіліктерімен байланыстыру үшін Meta LLaMA Accelerator бағдарламасын әзірледік. Meta-мен серіктестікте біз компаниялар мен мемлекеттік құрылымдарға қолданбалы AI шешімдерін енгізуге, прототиптер жасауға және әртүрлі секторларда ұзақ мерзімді инновациялық сараптаманы қалыптастыруға көмектестік.",
        ]),
        badge: s(["IN PROGRESS 🔥", "В ПРОЦЕССЕ 🔥", "ЖҮРІП ЖАТЫР 🔥"]),
        stats: [
          { value: "Meta", label: s(["partner", "партнёр", "серіктес"]) },
          { value: "2025", label: s(["launch", "запуск", "іске қосу"]) },
          {
            value: "1000+",
            label: s(["participants", "участников", "қатысушы"]),
          },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=Meta+Llama+Accelerator",
        partners: [
          "Meta",
          "AI Digital Ministry",
          "Astana Innovations",
          "NITEC",
          "The Steppe",
        ],
      },
      {
        year: "2025",
        type: "blockchain" as const,
        title: s(["Decentrathon 4.0", "Деценtратон 4.0", "Decentrathon 4.0"]),
        tagline: s([
          "Largest Web3 hackathon in Central Asia",
          "Крупнейший Web3-хакатон в Центральной Азии",
          "Орталық Азиядағы ең үлкен Web3 хакатон",
        ]),
        description: s([
          "Decentrathon 4.0 marked a new stage in the country's innovation agenda, uniting over 4,800 developers across 20 cities to create scalable AI and Web3 solutions. The program connected corporate challenges with top engineering talents, building a nationwide bridge between technologies and the real needs of the economy.",
          "Decentrathon 4.0 открыл новый этап инновационной повестки страны, объединив более 4 800 разработчиков в 20 городах для создания масштабируемых AI и Web3-решений. Программа соединила корпоративные вызовы с лучшими инженерными талантами, выстроив общенациональный мост между технологиями и реальными потребностями экономики.",
          "Decentrathon 4.0 еліміздің инновациялық күн тәртібінің жаңа кезеңін ашып, 20 қалада 4 800-ден астам әзірлеушіні ауқымды AI және Web3 шешімдерін жасау үшін біріктірді. Бағдарлама корпоративтік міндеттерді ең үздік инженерлік таланттармен байланыстырып, технологиялар мен экономиканың нақты қажеттіліктері арасында жалпыұлттық көпір орнатты.",
        ]),
        badge: s(["FLAGSHIP 2025", "ФЛАГМАН 2025", "ФЛАГМАН 2025"]),
        stats: [
          {
            value: "4,800",
            label: s(["developers", "разработчиков", "әзірлеуші"]),
          },
          {
            value: "$50k",
            label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
          },
          { value: "20", label: s(["cities", "городов", "қала"]) },
          { value: "370+", label: s(["projects", "проектов", "жоба"]) },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+4.0",
        partners: [
          "Astana Hub",
          "inDrive",
          "Bank CenterCredit",
          "Solana",
          "Superteam",
        ],
      },
      {
        year: "2025",
        type: "blockchain" as const,
        title: s(["Decentrathon 3.0", "Деценtратон 3.0", "Decentrathon 3.0"]),
        tagline: s([
          "Global online expansion",
          "Глобальное онлайн-расширение",
          "Жаһандық онлайн кеңейту",
        ]),
        description: s([
          "For the first time, the hackathon was held entirely online, expanding participation to 18 countries and setting a new standard for digital collaboration. The online model demonstrated the country's ability to host innovative competitions on a global scale, engaging the tech community across borders.",
          "Впервые хакатон прошел полностью онлайн, расширив участие до 18 стран и установив новый стандарт цифровой коллаборации. Онлайн-модель продемонстрировала способность страны проводить инновационные соревнования глобального масштаба, вовлекая технологическое сообщество без границ.",
          "Хакатон алғаш рет толығымен онлайн өтіп, қатысушылар географиясын 18 елге дейін кеңейтті және цифрлық ынтымақтастықтың жаңа стандартын орнатты. Онлайн модель еліміздің жаһандық деңгейдегі инновациялық жарыстарды өткізу қабілетін көрсетіп, шекарасыз технологиялық қауымдастықты тартты.",
        ]),
        stats: [
          { value: "18", label: s(["countries", "стран", "ел"]) },
          {
            value: "$30k",
            label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
          },
          {
            value: "2,780",
            label: s(["developers", "разработчиков", "әзірлеуші"]),
          },
          { value: "352", label: s(["projects", "проектов", "жоба"]) },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+3.0",
        partners: [
          "Astana Hub",
          "Mastercard",
          "Kazakhtelecom",
          "Activ 5G",
          "Grand Mobile",
        ],
      },
      {
        year: "2025",
        type: "ai" as const,
        title: s(["AI Qyzmet", "AI Qyzmet", "AI Qyzmet"]),
        tagline: s([
          "AI literacy for government officials",
          "ИИ-грамотность для госслужащих",
          "Мемлекеттік қызметкерлерге ЖИ сауаттылығы",
        ]),
        description: s([
          "We trained over 50,000 civil servants across Kazakhstan under the AI Qyzmet program, the first national AI training initiative for the public sector in Central Eurasia. The program helps public servants integrate AI into daily workflows, from document preparation and data analysis to public service delivery and decision-making.",
          "Мы обучили более 50 000 государственных служащих по всему Казахстану в рамках программы AI Qyzmet, первой национальной инициативы по обучению искусственному интеллекту для госсектора в Центральной Евразии. Программа помогает госслужащим интегрировать AI в повседневные рабочие процессы, от подготовки документов и анализа данных до предоставления государственных услуг и принятия решений.",
          "Біз Орталық Еуразиядағы мемлекеттік секторға арналған алғашқы ұлттық жасанды интеллект оқыту бастамасы – AI Qyzmet бағдарламасы аясында Қазақстан бойынша 50 000-нан астам мемлекеттік қызметкерді оқыттық. Бағдарлама мемлекеттік қызметкерлерге құжаттарды дайындау мен деректерді талдаудан бастап, мемлекеттік қызметтерді көрсету мен шешім қабылдауға дейінгі күнделікті жұмыс процестеріне AI енгізуге көмектеседі.",
        ]),
        badge: s([
          "FIRST IN CENTRAL EURASIA",
          "ПЕРВЫЙ В ЦЕНТРАЛЬНОЙ ЕВРАЗИИ",
          "ОРТАЛЫҚ ЕУРАЗИЯДА БІРІНШІ",
        ]),
        stats: [
          {
            value: "50,000",
            label: s(["civil servants", "госслужащих", "қызметкер"]),
          },
          {
            value: "KPMG",
            label: s(["certified", "сертификат", "сертификат"]),
          },
          {
            value: "32",
            label: s(["video lectures", "видеолекций", "бейнедәрістер"]),
          },
        ],
        image: "https://placehold.co/600x400/22c55e/ffffff?text=AI+Qyzmet",
        partners: ["AI Digital Ministry", "ADGS", "AGU"],
      },
      {
        year: "2024",
        type: "blockchain" as const,
        title: s(["Decentrathon 2.0", "Деценtратон 2.0", "Decentrathon 2.0"]),
        tagline: s([
          "Expanded to more cities and tracks",
          "Расширение на больше городов и треков",
          "Көбірек қалалар мен тректерге кеңейтілді",
        ]),
        description: s([
          "The second Decentrathon went beyond Web3, introducing tracks in AI, Telegram Mini Apps, and GameDev. This evolution transformed Decentrathon into a multidisciplinary innovation platform, fostering applied creativity across various industries.",
          "Второй Decentrathon вышел за рамки Web3, представив треки в сферах AI, Telegram Mini Apps и разработки игр. Эта эволюция превратила Decentrathon в многопрофильную инновационную платформу, развивающую прикладную креативность в разных индустриях.",
          "Екінші Decentrathon Web3 шеңберінен шығып, AI, Telegram Mini Apps және ойын әзірлеу салаларындағы тректерді ұсынды. Бұл эволюция Decentrathon-ды әртүрлі индустриялардағы қолданбалы креативтілікті дамытатын көпсалалы инновациялық платформаға аййналдырды.",
        ]),
        stats: [
          {
            value: "1,500+",
            label: s(["developers", "разработчиков", "әзірлеуші"]),
          },
          { value: "10", label: s(["cities", "городов", "қала"]) },
          {
            value: "$50k",
            label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
          },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+2.0",
        partners: ["Astana Hub", "QuantumBlack", "OGAMES"],
      },
      {
        year: "2024",
        type: "ai" as const,
        title: s(["AI People", "AI People", "AI People"]),
        tagline: s([
          "Free AI bootcamp for everyone",
          "Бесплатный ИИ-буткемп для всех",
          "Барлығына тегін ЖИ-буткемп",
        ]),
        description: s([
          "A free intensive AI course for everyone. The program reached students, teachers, and professionals, providing access to cutting-edge AI knowledge and tools.",
          "Бесплатный интенсивный курс по AI для всех желающих. Программа охватила студентов, преподавателей и профессионалов, предоставляя доступ к передовым знаниям и инструментам искусственного интеллекта.",
          "Баршаға арналған тегін қарқынды AI курсы. Бағдарлама студенттерді, мұғалімдерді және мамандарды қамтып, озық AI білімі мен құралдарына қолжетімділік ұсынды.",
        ]),
        stats: [
          { value: "3,000+", label: s(["learners", "учеников", "оқушы"]) },
          { value: "Free", label: s(["access", "доступ", "қол жетімділік"]) },
        ],
        image: "https://placehold.co/600x400/22c55e/ffffff?text=AI+People",
        partners: ["Astana Hub", "AI Digital Ministry"],
      },
      {
        year: "2023",
        type: "blockchain" as const,
        title: s(["Decentrathon 1.0", "Деценtратон 1.0", "Decentrathon 1.0"]),
        tagline: s([
          "World's first multi-location Web3 hackathon",
          "Первый в мире мультилокационный Web3-хакатон",
          "Әлемдегі бірінші мульти-локациялы Web3 хакатон",
        ]),
        description: s([
          "The first-ever multi-location Web3 hackathon in the world. Uniting developers across 5 cities simultaneously, it set the precedent for decentralized innovation events in the region.",
          "Первый в мире мультилокационный Web3-хакатон. Объединив разработчиков в 5 городах одновременно, он создал прецедент для децентрализованных инновационных событий в регионе.",
          "Әлемдегі тұңғыш мульти-локациялы Web3 хакатон. 5 қаладағы әзірлеушілерді бір уақытта біріктіріп, аймақтағы орталықсыздандырылған инновациялық іс-шараларға жол ашты.",
        ]),
        badge: s(["WORLD FIRST", "ПЕРВЫЙ В МИРЕ", "ӘЛЕМДЕ БІРІНШІ"]),
        stats: [
          {
            value: "800+",
            label: s(["developers", "разработчиков", "әзірлеуші"]),
          },
          { value: "5", label: s(["cities", "городов", "қала"]) },
          {
            value: "$10k",
            label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
          },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+1.0",
        partners: ["Astana Hub", "BNB Chain"],
      },
      {
        year: "2023",
        type: "blockchain" as const,
        title: s([
          "BNB Chain Zero2Hero",
          "BNB Chain Zero2Hero",
          "BNB Chain Zero2Hero",
        ]),
        tagline: s([
          "6-month Web3 builder program",
          "6-месячная программа Web3",
          "6 айлық Web3 бағдарламасы",
        ]),
        description: s([
          "A comprehensive 6-month specialized program for Web3 developers. From zero to hero, participants went through intensive training to become proficient blockchain builders.",
          "Комплексная 6-месячная специализированная программа для Web3-разработчиков. Участники прошли интенсивное обучение, чтобы стать профессиональными создателями блокчейн-решений.",
          "Web3 әзірлеушілеріне арналған 6 айлық кешенді бағдарлама. Қатысушылар кәсіби блокчейн мамандары болу үшін қарқынды дайындықтан өтті.",
        ]),
        stats: [
          {
            value: "200",
            label: s(["builders", "разработчиков", "әзірлеуші"]),
          },
          { value: "6", label: s(["months", "месяцев", "ай"]) },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=BNB+Chain+Zero2Hero",
        partners: ["BNB Chain"],
      },
      {
        year: "2022",
        type: "blockchain" as const,
        title: s([
          "University Outreach Program",
          "Университетская программа",
          "Университеттік бағдарлама",
        ]),
        tagline: s([
          "Blockchain curriculum for 22 universities",
          "Блокчейн-программа для 22 университетов",
          "22 университетке арналған блокчейн бағдарламасы",
        ]),
        description: s([
          "We implemented a comprehensive blockchain curriculum across 22 major universities. This initiative laid the academic foundation for the next generation of blockchain developers in the country.",
          "Мы внедрили комплексную учебную программу по блокчейну в 22 ведущих университетах. Эта инициатива заложила академический фундамент для следующего поколения блокчейн-разработчиков в стране.",
          "Біз 22 жетекші университетте блокчейн бойынша кешенді оқу бағдарламасын енгіздік. Бұл бастама еліміздегі блокчейн әзірлеушілерінің келесі буыны үшін академиялық негіз қалады.",
        ]),
        badge: s(["WORLD FIRST", "ПЕРВЫЙ В МИРЕ", "ӘЛЕМДЕ БІРІНШІ"]),
        stats: [
          {
            value: "22",
            label: s(["universities", "университетов", "университет"]),
          },
          { value: "5,000+", label: s(["students", "студентов", "студент"]) },
        ],
        image:
          "https://placehold.co/600x400/22c55e/ffffff?text=University+Outreach",
        partners: [
          "Science & Higher Education Ministry",
          "Binance",
          "BNB Chain",
        ],
      },
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
          "Meta",
          "Binance",
          "BNB Chain",
          "Solana",
          "TON",
          "Mastercard",
          "inDrive",
          "Bybit",
          "QuantumBlack / McKinsey",
          "Chainalysis",
          "Superteam KZ",
        ],
      },
      {
        title: s([
          "Government & Public Institutions",
          "Государственные и публичные институты",
          "Мемлекеттік және қоғамдық мекемелер",
        ]),
        logos: [
          "AI Digital Ministry",
          "МНВО",
          "ADGS",
          "National Bank of Kazakhstan",
          "Astana Hub",
          "Astana Innovations",
          "NITEC",
          "NPCK",
        ],
      },
      {
        title: s([
          "Education, Finance & Media",
          "Образование, финансы и медиа",
          "Білім, қаржы және медиа",
        ]),
        logos: [
          "KPMG",
          "Tomorrow School",
          "TUMO",
          "Kazakhtelecom",
          "Bank CenterCredit",
          "BCC Hub",
          "Activ 5G",
          "STEPPE",
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
