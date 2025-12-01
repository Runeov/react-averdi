export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link?: string;
  type: 'company' | 'industry';
}

export const companyNews: NewsItem[] = [
  {
    title: "Nyhet: Spesialkompetanse på handel og butikkdrift",
    date: "2024-11-29",
    summary: "Driver du butikk? Vi har lansert en ny ressursside med fokus på varelager, marginer og kassesystemer. Se hvordan vi kan hjelpe deg å øke lønnsomheten.",
    link: "/kunnskapsbank/handel",
    type: 'company'
  },
  {
    title: "Trygg økonomistyring for lag og foreninger",
    date: "2024-11-28",
    summary: "Sitter du i et styre? Vi har samlet alt du trenger å vite om momskompensasjon, medlemsregister og styreansvar på én plass.",
    link: "/kunnskapsbank/organisasjoner",
    type: 'company'
  },
  {
    title: "Ny guide: Slik søker du tilskudd fra Sametinget",
    date: "2024-11-27",
    summary: "Vi har lansert en komplett guide for bedrifter i STN-området. Lær om støtteordninger, krav til lønnsomhet og hvordan du unngår avslag.",
    link: "/kunnskapsbank/sametinget",
    type: 'company'
  }
];