type T3 = readonly [string, string, string];
const s = <T extends T3>(v: T) => v;

export const partners = {
  meta: {
    title: s(["Meta", "Meta", "Meta"]),
    site: "https://about.meta.com",
    logo: "/images/logos/logo_meta.webp",
  },
  mastercard: {
    title: s(["Mastercard", "Mastercard", "Mastercard"]),
    site: "https://www.mastercard.com",
    logo: "/images/logos/logo_mastercard.webp",
  },
  binance: {
    title: s(["Binance", "Binance", "Binance"]),
    site: "https://www.binance.com",
    logo: "/images/logos/logo_binance.webp",
  },
  solana: {
    title: s(["Solana", "Solana", "Solana"]),
    site: "https://solana.com",
    logo: "/images/logos/logo_solana.webp",
  },
  ton: {
    title: s(["TON", "TON", "TON"]),
    site: "https://ton.org",
    logo: "/images/logos/logo_ton.webp",
  },
  indrive: {
    title: s(["inDrive", "inDrive", "inDrive"]),
    site: "https://indrive.com",
    logo: "/images/logos/logo_indrive.webp",
  },
  bybit: {
    title: s(["Bybit", "Bybit", "Bybit"]),
    site: "https://www.bybit.com",
    logo: "/images/logos/logo_bybit.webp",
  },
  bnb_chain: {
    title: s(["BNB Chain", "BNB Chain", "BNB Chain"]),
    site: "https://www.bnbchain.org",
    logo: "/images/logos/logo_bnbchain.webp",
  },
  quantum_black: {
    title: s([
      "QuantumBlack / McKinsey",
      "QuantumBlack / McKinsey",
      "QuantumBlack / McKinsey",
    ]),
    site: "https://www.mckinsey.com/capabilities/quantumblack",
    logo: "/images/logos/logo_quantum.webp",
  },
  chainalysis: {
    title: s(["Chainalysis", "Chainalysis", "Chainalysis"]),
    site: "https://www.chainalysis.com",
    logo: "/images/logos/logo_chainanalysis.webp",
  },
  superteam: {
    title: s(["Superteam", "Superteam", "Superteam"]),
    site: "https://superteam.fun",
    logo: "/images/logos/logo_superteam.webp",
  },
  grand_mobile: {
    title: s(["Grand Mobile", "Grand Mobile", "Grand Mobile"]),
    site: "https://grandmobile.kz",
    logo: "/images/logos/logo_grandmobile.webp",
  },
  ogames: {
    title: s(["Ogames", "Ogames", "Ogames"]),
    site: "https://ogames.kz",
    logo: "/images/logos/logo_ogames.webp",
  },
  activ: {
    title: s(["Activ 5G", "Activ 5G", "Activ 5G"]),
    site: "https://activ.kz",
    logo: "/images/logos/logo_activ.webp",
  },
  kazakhtelecom: {
    title: s(["Kazakhtelecom", "Kazakhtelecom", "Qazaqtelecom"]),
    site: "https://telecom.kz/",
    logo: "/images/logos/logo_kazakhtelecom.webp",
  },
  bcc: {
    title: s(["Bank CenterCredit", "Банк ЦентрКредит", "Банк ЦентрКредит"]),
    site: "https://www.bcc.kz/kz/",
    logo: "/images/logos/logo_bcc.webp",
  },
  bcc_hub: {
    title: s(["BCC Hub", "BCC Hub", "BCC Hub"]),
    site: "https://hub.bcc.kz",
    logo: "/images/logos/logo_bcc_hub.webp",
  },
  kpmg: {
    title: s(["KPMG", "KPMG", "KPMG"]),
    site: "https://kpmg.com",
    logo: "/images/logos/logo_kpmg.webp",
  },
  astana_hub: {
    title: s(["Astana Hub", "Astana Hub", "Astana Hub"]),
    site: "https://astanahub.com",
    logo: "/images/logos/logo_ahub.webp",
  },
  astana_innovations: {
    title: s([
      "Astana Innovations",
      "Astana Innovations",
      "Astana Innovations",
    ]),
    site: "https://astanahub.com",
    logo: "/images/logos/logo_astanainnovations.webp",
  },
  tumo: {
    title: s(["TUMO", "TUMO", "TUMO"]),
    site: "https://astana.tumo.kz/",
    logo: "/images/logos/logo_tumo.webp",
  },
  tomorrow_school: {
    title: s(["Tomorrow School", "Tomorrow School", "Tomorrow School"]),
    site: "https://tomorrow-school.ai/",
    logo: "/images/logos/logo_tomorrow-school.webp",
  },
  alem_ai: {
    title: s(["Alem.AI", "Alem.AI", "Alem.AI"]),
    site: "https://alemai.kz",
    logo: "/images/logos/logo_alem-ai.webp",
  },
  ai_digital_ministry: {
    title: s(["AI Digital Ministry", "МЦРИАП", "ЦДИАӨМ"]),
    site: "https://www.gov.kz/memleket/entities/mdai",
    logo: "/images/logos/logo_aidm.webp",
  },
  adgs: {
    title: s(["ADGS", "АДГС", "МҚІА"]),
    site: "https://www.gov.kz/memleket/entities/qyzmet",
    logo: "/images/logos/logo_adgs.webp",
  },
  nitec: {
    title: s(["NITEC", "NITEC", "NITEC"]),
    site: "https://nitec.kz",
    logo: "/images/logos/logo_nitec.webp",
  },
  national_bank: {
    title: s(["National Bank", "Национальный Банк", "Ұлттық Банк"]),
    site: "https://nationalbank.kz",
    logo: "/images/logos/logo_national_bank.webp",
  },
  afm: {
    title: s(["AFM", "АФМ", "ҚМА"]),
    site: "https://www.gov.kz/memleket/entities/afm",
    logo: "/images/logos/logo_afm.webp",
  },
  mnvo: {
    title: s(["Ministry of Science & Higher Education", "МНВО", "ҒЖБМ"]),
    site: "https://www.gov.kz/memleket/entities/sci",
    logo: "/images/logos/logo_mnvo.webp",
  },
  npck: {
    title: s(["NPCK", "НПК", "ҰТК"]),
    site: "https://npck.kz/",
    logo: "/images/logos/logo_npck.svg",
  },
  agu: {
    title: s(["AGU", "АГУ", "МБА"]),
    site: "https://apa.kz/",
    logo: "/images/logos/logo_agu.webp",
  },
  depa_team: {
    title: s(["Depa Team", "Depa Team", "Depa Team"]),
    site: null,
    logo: "/images/logos/logo_depa-team.webp",
  },
  the_steppe: {
    title: s(["The Steppe", "The Steppe", "The Steppe"]),
    site: "https://the-steppe.com/",
    logo: "/images/logos/logo_steppe.webp",
  },
} as const;

export type PartnerId = keyof typeof partners;
