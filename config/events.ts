import type { PartnerId } from "./partners";

type T3 = readonly [string, string, string];
const s = <T extends T3>(v: T) => v;

export const events = [
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
      { value: "Meta", label: s(["partner", "партнёр", "серіктес"]) },
      { value: "2025", label: s(["launch", "запуск", "іске қосу"]) },
      { value: "1000+", label: s(["participants", "участников", "қатысушы"]) },
    ],
    image:
      "https://placehold.co/600x400/22c55e/ffffff?text=Meta+Llama+Accelerator",
    partners: [
      "meta",
      "ai_digital_ministry",
      "astana_innovations",
      "nitec",
      "the_steppe",
    ] satisfies PartnerId[],
  },
  {
    id: "decentrathon-4",
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
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+4.0",
    partners: [
      "astana_hub",
      "indrive",
      "bcc",
      "solana",
      "superteam",
    ] satisfies PartnerId[],
  },
  {
    id: "decentrathon-3",
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
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+3.0",
    partners: [
      "astana_hub",
      "mastercard",
      "kazakhtelecom",
      "activ",
      "grand_mobile",
    ] satisfies PartnerId[],
  },
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
        label: s(["civil servants", "госслужащих", "қызметкер"]),
      },
      { value: "KPMG", label: s(["certified", "сертификат", "сертификат"]) },
      {
        value: "32",
        label: s(["video lectures", "видеолекций", "бейнедәрістер"]),
      },
    ],
    image: "https://placehold.co/600x400/22c55e/ffffff?text=AI+Qyzmet",
    partners: ["ai_digital_ministry", "adgs", "agu"] satisfies PartnerId[],
  },
  {
    id: "decentrathon-2",
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
      "Екінші Decentrathon Web3 шеңберінен шығып, AI, Telegram Mini Apps және ойын әзірлеу салаларындағы тректерді ұсынды. Бұл эволюция Decentrathon-ды әртүрлі индустриялардағы қолданбалы креативтілікті дамытатын көпсалалы инновациялық платформаға аийналдырды.",
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
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+2.0",
    partners: ["astana_hub", "quantum_black", "ogames"] satisfies PartnerId[],
  },
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
      "A free intensive AI course for everyone. The program reached students, teachers, and professionals, providing access to cutting-edge AI knowledge and tools.",
      "Бесплатный интенсивный курс по AI для всех желающих. Программа охватила студентов, преподавателей и профессионалов, предоставляя доступ к передовым знаниям и инструментам искусственного интеллекта.",
      "Баршаға арналған тегін қарқынды AI курсы. Бағдарлама студенттерді, мұғалімдерді және мамандарды қамтып, озық AI білімі мен құралдарына қолжетімділік ұсынды.",
    ]),
    stats: [
      { value: "3,000+", label: s(["learners", "учеников", "оқушы"]) },
      { value: "Free", label: s(["access", "доступ", "қол жетімділік"]) },
    ],
    image: "https://placehold.co/600x400/22c55e/ffffff?text=AI+People",
    partners: ["astana_hub", "ai_digital_ministry"] satisfies PartnerId[],
  },
  {
    id: "decentrathon-1",
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
      { value: "800+", label: s(["developers", "разработчиков", "әзірлеуші"]) },
      { value: "5", label: s(["cities", "городов", "қала"]) },
      {
        value: "$10k",
        label: s(["prize fund", "призовой фонд", "жүлде қоры"]),
      },
    ],
    image: "https://placehold.co/600x400/22c55e/ffffff?text=Decentrathon+1.0",
    partners: ["astana_hub", "bnb_chain"] satisfies PartnerId[],
  },
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
      "A comprehensive 6-month specialized program for Web3 developers. From zero to hero, participants went through intensive training to become proficient blockchain builders.",
      "Комплексная 6-месячная специализированная программа для Web3-разработчиков. Участники прошли интенсивное обучение, чтобы стать профессиональными создателями блокчейн-решений.",
      "Web3 әзірлеушілеріне арналған 6 айлық кешенді бағдарлама. Қатысушылар кәсіби блокчейн мамандары болу үшін қарқынды дайындықтан өтті.",
    ]),
    stats: [
      { value: "200", label: s(["builders", "разработчиков", "әзірлеуші"]) },
      { value: "6", label: s(["months", "месяцев", "ай"]) },
    ],
    image:
      "https://placehold.co/600x400/22c55e/ffffff?text=BNB+Chain+Zero2Hero",
    partners: ["bnb_chain"] satisfies PartnerId[],
  },
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
    image:
      "https://placehold.co/600x400/22c55e/ffffff?text=University+Outreach",
    partners: ["astana_hub", "mnvo", "npck", "binance"] satisfies PartnerId[],
  },
] as const;

export type EventId = (typeof events)[number]["id"];
export type EventType = (typeof events)[number]["type"];
