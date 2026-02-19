import type { PartnerId } from "./partners";

type T3 = readonly [string, string, string];
const s = <T extends T3>(v: T) => v;

export const events = [
  // ── 2022 ─────────────────────────────────────────────────────────────────
  {
    id: "university-outreach",
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
        label: s([
          "Professors trained",
          "Обучено преподователей",
          "Оқытылған профессорлар",
        ]),
        value: "300+",
      },
      {
        label: s([
          "Students trained",
          "Обученно студентов",
          "Оқытылған студенттер",
        ]),
        value: "5,000+",
      },
      {
        label: s(["universities", "университетов", "университет"]),
        value: "22",
      },
      {
        label: s([
          "Blockchain programs integrated",
          "Интегрировано блокчейн-программ",
          "Блокчейн бағдарламалары енгізілді",
        ]),
        value: "22",
      },
    ],
    image: "/images/events/university-outreach/1.avif",
    partners: ["astana_hub", "mnvo", "npck", "binance"] satisfies PartnerId[],
  },
  // ── 2023 ─────────────────────────────────────────────────────────────────
  {
    id: "bnb-zero2hero",
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
      "We guided 200 participants through a six-month journey combining blockchain education, a hackathon and startup incubation. The program helped developers turn ideas into full-fledged Web3 projects and become part of the global developer ecosystem.",
      "Мы провели 200 участников через шестимесячное путешествие, объединив обучение блокчейну, хакатон и инкубацию стартапов. Программа помогла разработчикам превратить идеи в полноценные Web3-проекты и стать частью глобальной экосистемы разработчиков.",
      "Біз 200 қатысушыны блокчейн оқытуды, хакатонды және стартап инкубациясын біріктіретін алты айлық сапардан өткіздік. Бағдарлама әзірлеушілерге идеяларды толыққанды Web3 жобаларына айналдырып, жаһандық әзірлеуші экожүйесінің бір бөлігіне айналуға көмектесті.",
    ]),
    stats: [
      {
        value: "200",
        label: s(["students selected", "отобранных студентов", "таңдалған студент"]),
      },
      {
        value: "6",
        label: s(["months program", "месяцев программа", "ай бағдарлама"]),
      },
      {
        value: "6",
        label: s(["weeks bootcamp", "недель bootcamp", "апта bootcamp"]),
      },
      {
        value: "200+",
        label: s(["NFT certificates issued", "выдано NFT-сертификатов", "NFT сертификат берілді"]),
      },
    ],
    image: "/images/events/bnb-zero2hero/1.avif",
    partners: ["bnb_chain"] satisfies PartnerId[],
  },
  {
    id: "decentrathon-1",
    year: "2023",
    type: "blockchain" as const,
    title: s(["Decentrathon 1.0", "Decentrathon 1.0", "Decentrathon 1.0"]),
    tagline: s([
      "World's first multi-location Web3 hackathon",
      "Первый в мире мультилокационный Web3-хакатон",
      "Әлемдегі бірінші мульти-локациялы Web3 хакатон",
    ]),
    description: s([
      "We organized the world's first multi-location Web3 hackathon, uniting developers from across Kazakhstan to create decentralized solutions simultaneously in multiple cities. Regional teams took leading positions, proving that strong talent exists far beyond the capital.",
      "Мы организовали первый в мире мультилокационный Web3-хакатон, объединив разработчиков со всего Казахстана для создания децентрализованных решений одновременно в нескольких городах. Региональные команды заняли лидирующие позиции, доказав, что сильные таланты есть далеко за пределами столицы.",
      "Біз Қазақстан бойынша әзірлеушілерді бірнеше қалада бір мезгілде орталықсыздандырылған шешімдер жасау үшін біріктіріп, әлемдегі тұңғыш мульти-локациялы Web3 хакатонды ұйымдастырдық. Аймақтық командалар жетекші позициялар алып, күшті таланттардың астанадан тыс жерлерде де барлығын дәлелдеді.",
    ]),
    badge: s(["WORLD FIRST", "ПЕРВЫЙ В МИРЕ", "ӘЛЕМДЕ БІРІНШІ"]),
    stats: [
      {
        value: "$10,000",
        label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
      },
      { value: "1,590", label: s(["participants", "участников", "қатысушы"]) },
      { value: "12", label: s(["cities", "городов", "қала"]) },
      {
        value: "3",
        label: s(["days duration", "дня длительность", "күн ұзақтығы"]),
      },
    ],
    image: "/images/events/decentrathon-1/1.avif",
    partners: ["bnb_chain", "binance"] satisfies PartnerId[],
  },
  // ── 2024 ─────────────────────────────────────────────────────────────────
  {
    id: "ai-people",
    year: "2024",
    type: "ai" as const,
    title: s(["AI People", "AI People", "AI People"]),
    tagline: s([
      "Free AI bootcamp for everyone",
      "Бесплатный ИИ-буткемп для всех",
      "Барлығына тегін ЖИ-буткемп",
    ]),
    description: s([
      "We trained over 3,000 people across Kazakhstan to use artificial intelligence in everyday life and work. Our goal is to make AI a practical tool. From students to entrepreneurs, participants learned how to automate tasks, create content and make better decisions using AI.",
      "Мы обучили более 3 000 человек по всему Казахстану использовать искусственный интеллект в повседневной жизни и работе. Наша цель — сделать ИИ практичным инструментом. От студентов до предпринимателей, участники освоили, как автоматизировать задачи, создавать контент и принимать более взвешенные решения с помощью ИИ.",
      "Біз Қазақстан бойынша 3 000-нан астам адамды күнделікті өмірде және жұмыста жасанды интеллектті пайдалануға үйреттік. Біздің мақсатымыз – AI-ді практикалық құралға айналдыру. Студенттерден кәсіпкерлерге дейін, қатысушылар AI көмегімен тапсырмаларды автоматтандыруды, мазмұн жасауды және неғұрлым ойластырылған шешімдер қабылдауды үйренді.",
    ]),
    stats: [
      { value: "3,000+", label: s(["learners", "участников", "қатысушы"]) },
      {
        value: "4",
        label: s(["days duration", "дня длительность", "күн ұзақтығы"]),
      },
      { value: "8", label: s(["modules", "модулей", "модуль"]) },
      {
        value: "1,000+",
        label: s(["positive reviews", "положительных отзывов", "оң пікір"]),
      },
    ],
    image: "/images/events/ai-people/1.avif",
    partners: ["astana_hub", "ai_digital_ministry"] satisfies PartnerId[],
  },
  {
    id: "decentrathon-2",
    year: "2024",
    type: "blockchain" as const,
    title: s(["Decentrathon 2.0", "Decentrathon 2.0", "Decentrathon 2.0"]),
    tagline: s([
      "Expanded to more cities and tracks",
      "Расширение на больше городов и треков",
      "Көбірек қалалар мен тректерге кеңейтілді",
    ]),
    description: s([
      "The second Decentrathon went beyond Web3, introducing tracks in AI, Telegram Mini Apps, and GameDev. This evolution transformed Decentrathon into a multidisciplinary innovation platform, fostering applied creativity across various industries.",
      "Второй Decentrathon вышел за рамки Web3, представив треки в сферах AI, Telegram Mini Apps и разработки игр. Эта эволюция превратила Decentrathon в многопрофильную инновационную платформу, развивающую прикладную креативность в разных индустриях.",
      "Екінші Decentrathon Web3 шеңберінен шығып, AI, Telegram Mini Apps және ойын әзірлеу салаларындағы тректерді ұсынды. Бұл эволюция Decentrathon-ды әртүрлі индустриялардағы қолданбалы креативтілікті дамытатын көпсалалы инновациялық платформаға аийналдырды.",
    ]),
    stats: [
      {
        value: "$50,000",
        label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
      },
      {
        value: "3,200+",
        label: s(["developers", "разработчиков", "әзірлеуші"]),
      },
      { value: "19", label: s(["cities", "городов", "қала"]) },
    ],
    image: "/images/events/decentrathon-2/1.avif",
    partners: ["astana_hub", "quantum_black", "ogames"] satisfies PartnerId[],
  },
  // ── 2025 ─────────────────────────────────────────────────────────────────
  {
    id: "ai-qyzmet",
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
        label: s(["civil servants trained", "обучено госслужащих", "оқытылған қызметкер"]),
      },
      {
        value: "80,000",
        label: s(["target by 2026", "цель к 2026 году", "2026 жылға мақсат"]),
      },
      {
        value: "6",
        label: s(["modules", "модулей", "модуль"]),
      },
      {
        value: "32",
        label: s(["video lectures", "видеолекций", "бейнедәрістер"]),
      },
    ],
    image: "/images/events/ai-qyzmet/1.avif",
    partners: [
      "ai_digital_ministry",
      "adgs",
      "agu",
      "astana_hub",
      "mastercard",
      "kpmg",
    ] satisfies PartnerId[],
  },
  {
    id: "decentrathon-3",
    year: "2025",
    type: "blockchain" as const,
    title: s(["Decentrathon 3.0", "Decentrathon 3.0", "Decentrathon 3.0"]),
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
      {
        value: "$30,000",
        label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
      },
      {
        value: "2,780",
        label: s(["developers", "разработчиков", "әзірлеуші"]),
      },
      {
        value: "1,343",
        label: s(["teams", "команд", "команда"]),
      },
      { value: "352", label: s(["projects", "проектов", "жоба"]) },
    ],
    image: "/images/events/decentrathon-3/1.avif",
    partners: [
      "astana_hub",
      "mastercard",
      "kazakhtelecom",
      "activ",
      "grand_mobile",
    ] satisfies PartnerId[],
  },
  {
    id: "decentrathon-4",
    year: "2025",
    type: "blockchain" as const,
    title: s(["Decentrathon 4.0", "Decentrathon 4.0", "Decentrathon 4.0"]),
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
        value: "$50,000",
        label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
      },
      {
        value: "4,825",
        label: s(["developers", "разработчиков", "әзірлеуші"]),
      },
      {
        value: "2,006",
        label: s(["teams", "команд", "команда"]),
      },
      { value: "370+", label: s(["projects", "проектов", "жоба"]) },
    ],
    image: "/images/events/decentrathon-4/1.avif",
    partners: [
      "astana_hub",
      "indrive",
      "bcc",
      "bcc_hub",
      "solana",
      "superteam",
    ] satisfies PartnerId[],
  },
  {
    id: "meta-llama-accelerator",
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
      {
        value: "1,000+",
        label: s(["participants", "участников", "қатысушы"]),
      },
      {
        value: "20",
        label: s(["cities covered", "городов охвачено", "қала қамтылды"]),
      },
      {
        value: "5",
        label: s([
          "partner challenges",
          "челленджей партнеров",
          "серіктес челленджі",
        ]),
      },
      {
        value: "250+",
        label: s([
          "solutions selected",
          "решений отобрано по стране",
          "шешімдер таңдалды",
        ]),
      },
    ],
    image: "/images/events/meta-llama-accelerator/1.avif",
    partners: [
      "meta",
      "ai_digital_ministry",
      "astana_innovations",
      "nitec",
      "the_steppe",
    ] satisfies PartnerId[],
  },
] as const;

export type EventId = (typeof events)[number]["id"];
export type EventType = (typeof events)[number]["type"];
