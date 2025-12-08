import { ServicePageLayout } from '../../components/templates/ServicePageLayout';
import type { ServicePageConfig } from '../../types/service';
import { Briefcase, ShoppingBag, Calculator, Percent, Store } from 'lucide-react';

export function BedriftHub() {
  const config: ServicePageConfig = {
    hero: {
      title: "Bedrifter - Lønnsomhet og Vekst",
      subtitle: "Komplett veiledning for bedrifter i Nord-Norge. Lær om tiltakssonen, handel og økonomisk styring.",
      theme: "blue"
    },
    products: [
      {
        id: "tiltakssonen",
        title: "Tiltakssonen - Arbeidsgiveravgift",
        shortDesc: "Guide og kalkulator for arbeidsgiveravgift",
        icon: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        content: "Komplett guide til arbeidsgiveravgift i tiltakssonen. Vi hjelper deg å forstå reglene, beregne avgiften og optimalisere din bedriftsøkonomi.",
        bullets: [
          "Arbeidsgiveravgift beregning",
          "Optimalisering av lønnskostnader",
          "Rapportering og innsending",
          "Endringer i regelverk",
          "Eksempler og case-studier"
        ],
        link: "/kunnskapsbank/bedrifter/tiltakssonen/arbeidsgiveravgift",
        linkText: "Beregne arbeidsgiveravgift"
      },
      {
        id: "finnmarksfradrag",
        title: "Finnmarksfradrag",
        shortDesc: "Guide til finnmarksfradrag for bedrifter",
        icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        content: "Lær om finnmarksfradrag og hvordan du kan utnytte dette til å redusere skatten for din bedrift i Finnmark.",
        bullets: [
          "Krav og kvalifisering",
          "Beregning av fradrag",
          "Dokumentasjonskrav",
          "Optimalisering av skatteposisjon",
          "Eksempler og beregninger"
        ],
        link: "/kunnskapsbank/bedrifter/tiltakssonen/finnmarksfradrag",
        linkText: "Lær om finnmarksfradrag"
      },
      {
        id: "kassasystem",
        title: "Kassesystem og Butikkdrift",
        shortDesc: "Guide til moderne kassesystemer og butikkdrift",
        icon: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        content: "Komplett guide til kassesystemer og butikkdrift. Vi hjelper deg å velge riktig system, optimalisere driften og sikre god økonomistyring.",
        bullets: [
          "Valg av kassesystem",
          "Integrasjon med regnskap",
          "Lagerstyring og salgsanalyse",
          "Kundehåndtering",
          "Sikkerhet og GDPR"
        ],
        link: "/kunnskapsbank/bedrifter/handel/kassasystem",
        linkText: "Les om kassesystemer"
      }
    ],
    expert: {
      name: "Ingvald Laiti",
      role: "Statsaut. Regnskapsfører & Bedriftsspesialist",
      quote: "Succesfulle bedrifter i Nord-Norge trenger lokal kunnskap kombinert med moderne verktøy. La oss hjelpe deg å optimalisere din bedriftsøkonomi.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      email: "ingvald.laiti@averdi.no",
      phone: "90767993"
    },
    faq: [
      {
        question: "Hva er fordelen med å drive bedrift i tiltakssonen?",
        answer: "Tiltakssonen gir unike fordeler som redusert arbeidsgiveravgift, spesielle avskrivningsregler og tilgang til særegne støtteordninger. Dette kan gi din bedrift betydelige konkurransefortrinn."
      },
      {
        question: "Hvordan kan jeg optimalisere min arbeidsgiveravgift?",
        answer: "Optimalisering av arbeidsgiveravgift krever god planlegging av lønnsstruktur, riktig klassifisering av ansatte og strategisk bruk av fradrag. Vi kan hjelpe deg med en skreddersydd strategi."
      },
      {
        question: "Hva er de vanligste feilene bedrifter gjør med finnmarksfradrag?",
        answer: "De vanligste feilene er manglende dokumentasjon, feil beregning av fradragsgrunnlaget og manglende oppfølging av endringer i regelverket. Vi hjelper deg å unngå disse fellene."
      },
      {
        question: "Hvordan velger jeg riktig kassesystem for min butikk?",
        answer: "Valg av kassesystem avhenger av din bedriftsstørrelse, bransje, integrasjonsbehov og budsjett. Vi kan hjelpe deg med en objektiv vurdering av alternativer."
      }
    ],
    articleTag: "bedrifter"
  };

  return <ServicePageLayout config={config} />;
}