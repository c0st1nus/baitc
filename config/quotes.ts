type T3 = readonly [string, string, string];
const s = <T extends T3>(v: T) => v;

export const quotes = [
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
] as const;

export type Quote = (typeof quotes)[number];
