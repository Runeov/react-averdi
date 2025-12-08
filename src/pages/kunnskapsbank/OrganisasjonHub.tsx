import { ServicePageLayout } from '../../components/templates/ServicePageLayout';
import type { ServicePageConfig } from '../../types/service';
import { Users, Handshake, Calculator, Receipt, Trophy } from 'lucide-react';

export function OrganisasjonHub() {
  const config: ServicePageConfig = {
    hero: {
      title: "Organisasjoner - Økonomistyring for Frivillighet",
      subtitle: "Komplett veiledning for lag, foreninger og frivillige organisasjoner. Lær om momskompensasjon, støtteordninger og økonomisk styring.",
      theme: "green"
    },
    products: [
      {
        id: "stotteordninger",
        title: "Støtteordninger",
        shortDesc: "Guide til støtteordninger for organisasjoner",
        icon: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
        content: "Komplett guide til støtteordninger fra Innovasjon Norge, fylket og andre kilder. Vi hjelper deg å finne riktige ordninger og søke på riktig måte.",
        bullets: [
          "Innovasjon Norge-støtte",
          "Fylkeskommunal støtte",
          "Kommunale ordninger",
          "Søknadsprosess og dokumentasjon",
          "Rapportering og oppfølging"
        ],
        link: "/kunnskapsbank/organisasjoner/stotteordninger",
        linkText: "Utforsk støtteordninger"
      },
      {
        id: "momskompensasjon",
        title: "Momskompensasjon",
        shortDesc: "Guide til momskompensasjon for frivillige organisasjoner",
        icon: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        content: "Lær om momskompensasjon for frivillige organisasjoner. Vi hjelper deg å forstå reglene, beregne kompensasjonen og søke om refusjon.",
        bullets: [
          "Krav og kvalifisering",
          "Beregning av momskompensasjon",
          "Dokumentasjonskrav",
          "Søknadsprosess",
          "Eksempler og case-studier"
        ],
        link: "/kunnskapsbank/organisasjoner/momskompensasjon",
        linkText: "Lær om momskompensasjon"
      },
      {
        id: "idrettslag",
        title: "Idrettslag",
        shortDesc: "Guide til økonomistyring for idrettslag",
        icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        content: "Komplett guide til økonomistyring for idrettslag. Vi hjelper deg med regnskap, medlemsregister, støtteordninger og rapportering.",
        bullets: [
          "Regnskap og budsjettering",
          "Medlemsregister og kontingent",
          "Støtteordninger for idrett",
          "Rapportering til idrettsforbund",
          "Arrangementsøkonomi"
        ],
        link: "/kunnskapsbank/organisasjoner/idrettslag",
        linkText: "Les om økonomi for idrettslag"
      }
    ],
    expert: {
      name: "Ingvald Laiti",
      role: "Statsaut. Regnskapsfører & Organisasjonsspesialist",
      quote: "Frivillige organisasjoner er hjørnestenen i vårt samfunn. La oss hjelpe deg å styrke økonomien slik at du kan fokusere på det som virkelig betyr noe.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      email: "ingvald.laiti@averdi.no",
      phone: "90767993"
    },
    faq: [
      {
        question: "Hva er de vanligste økonomiske utfordringene for frivillige organisasjoner?",
        answer: "De vanligste utfordringene er manglende økonomisk kompetanse, uregelmessige inntekter, komplekse rapporteringskrav og utfordringer med momshåndtering. Vi kan hjelpe deg med alle disse områdene."
      },
      {
        question: "Hvordan kan vi optimalisere vår momskompensasjon?",
        answer: "Optimalisering krever god dokumentasjon av alle utgifter, riktig klassifisering av aktiviteter og strategisk timing av søknader. Vi kan hjelpe deg med en skreddersydd strategi."
      },
      {
        question: "Hva er de beste støtteordningene for idrettslag?",
        answer: "De beste ordningene varierer etter idrett, størrelse og aktivitetsnivå. Vi kan hjelpe deg å identifisere de mest relevante ordningene og søke på riktig måte."
      },
      {
        question: "Hvordan kan vi forbedre vår økonomistyring?",
        answer: "Bedre økonomistyring oppnås gjennom regelmessig rapportering, klare budsjetter, god dokumentasjon og strategisk planlegging. Vi kan hjelpe deg å implementere gode rutiner."
      }
    ],
    articleTag: "organisasjoner"
  };

  return <ServicePageLayout config={config} />;
}