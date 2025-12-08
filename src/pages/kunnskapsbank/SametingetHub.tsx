import { ServicePageLayout } from '../../components/templates/ServicePageLayout';
import type { ServicePageConfig } from '../../types/service';
import { Landmark, BookOpen, Briefcase, Users, Factory, Languages } from 'lucide-react';

export function SametingetHub() {
  const config: ServicePageConfig = {
    hero: {
      title: "Sametinget - Støtte og Næringsutvikling",
      subtitle: "Komplett veiledning for bedrifter i STN-området. Lær om støtteordninger, krav til lønnsomhet og hvordan du unngår avslag.",
      theme: "orange"
    },
    products: [
      {
        id: "kultur-sprak",
        title: "Kultur og Språk",
        shortDesc: "Bevaring og utvikling av samisk kultur og språk",
        icon: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: "Lær om samisk kultur og språkbevaring i næringslivet. Vi hjelper med å integrere samiske verdier i din bedrift samtidig som du oppfyller kravene for støtteordninger.",
        bullets: [
          "Språkbevaring i næringslivet",
          "Kulturell integrasjon",
          "Støtte til språkprosjekter",
          "Kulturarv og tradisjoner",
          "Samisk identitet i bedriften"
        ],
        link: "/kunnskapsbank/sametinget/kultur-sprak",
        linkText: "Les om kultur og språk"
      },
      {
        id: "naeringsstotte",
        title: "Næringsstøtte",
        shortDesc: "Finansiering og støtte til samiske bedrifter",
        icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        content: "Komplett guide til næringsstøtte fra Sametinget. Vi hjelper deg å navigere i søknadsprosessen, forstå kravene og maksimere dine sjanser for å få støtte.",
        bullets: [
          "Søknadsprosess og krav",
          "Lønnsomhetskrav og dokumentasjon",
          "Prosjektplanlegging",
          "Rapportering og oppfølging",
          "Evaluering og resultater"
        ],
        link: "/kunnskapsbank/sametinget/naeringsstotte",
        linkText: "Lær om næringsstøtte"
      },
      {
        id: "institusjonsutvikling",
        title: "Institusjonsutvikling",
        shortDesc: "Støtte til utvikling av samiske institusjoner",
        icon: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        content: "Veiledning for utvikling og styrking av samiske institusjoner. Vi hjelper med strategisk planlegging, organisasjonsutvikling og søknader om institusjonsstøtte.",
        bullets: [
          "Strategisk planlegging",
          "Organisasjonsutvikling",
          "Søknadsprosesser",
          "Rapportering og evaluering",
          "Bærekraftig utvikling"
        ],
        link: "/kunnskapsbank/sametinget/institusjonsutvikling",
        linkText: "Les om institusjonsutvikling"
      },
      {
        id: "duodji",
        title: "Duodji - Tradisjonelt Håndverk",
        shortDesc: "Støtte og utvikling av samisk håndverk",
        icon: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=800",
        content: "Komplett guide til duodji-støtte. Vi hjelper med søknader, prosjektplanlegging og utvikling av ditt håndverksprosjekt.",
        bullets: [
          "Søknadsprosess og krav",
          "Prosjektplanlegging",
          "Markedsføring og salg",
          "Kvalitetssikring",
          "Tradisjon og innovasjon"
        ],
        link: "/kunnskapsbank/sametinget/duodji",
        linkText: "Utforsk duodji-støtte"
      }
    ],
    expert: {
      name: "Ingvald Laiti",
      role: "Statsaut. Regnskapsfører & Sametinget-spesialist",
      quote: "Sametinget-støtte kan være komplekst, men med riktig veiledning kan du maksimere dine muligheter. La oss hjelpe deg å navigere i systemet.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      email: "ingvald.laiti@averdi.no",
      phone: "90767993"
    },
    faq: [
      {
        question: "Hva er kravene for å få støtte fra Sametinget?",
        answer: "Kravene varierer etter støtteordning, men vanligvis må du ha en registrert bedrift, vise til lønnsomhetspotensiale og ha et klart prosjektmål som støtter samisk kultur eller næringsutvikling."
      },
      {
        question: "Hvor lang tid tar det å få svar på søknaden?",
        answer: "Behandlingstiden varierer, men du kan vanligvis forvente svar innen 4-8 uker etter innsendt søknad. Komplett dokumentasjon og god prosjektplanlegging kan forkorte behandlingstiden."
      },
      {
        question: "Kan jeg søke om flere støtteordninger samtidig?",
        answer: "Ja, det er mulig å søke om flere ordninger, men du må være oppmerksom på at totalstøtten ikke kan overstige 80% av prosjektkostnadene. Vi hjelper deg å optimalisere søknadene."
      },
      {
        question: "Hva skjer hvis prosjektet mitt ikke blir lønnsomt?",
        answer: "Dersom prosjektet ikke blir lønnsomt som planlagt, må du rapportere dette til Sametinget. Vi kan hjelpe deg med å dokumentere utfordringene og eventuelt søke om endringer i prosjektplanen."
      }
    ],
    articleTag: "sametinget"
  };

  return <ServicePageLayout config={config} />;
}