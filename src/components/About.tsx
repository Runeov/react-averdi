import { useNavigate } from 'react-router-dom';
import { FeatureTabs } from '../components/ui/FeatureTabs';
import type { FeatureTabItem } from '../components/ui/FeatureTabs';

// Assets
import regnskapIcon from '../assets/regnskap.avif';
import lonnIcon from '../assets/lonn.avif';
import raadgivingIcon from '../assets/raadgiving.avif';
import fakturaIcon from '../assets/faktura.avif';

export function Services() {
  const navigate = useNavigate();

  // Her definerer vi dataene for denne spesifikke seksjonen
  const servicesData: FeatureTabItem[] = [
    {
      id: "regnskap",
      icon: regnskapIcon,
      title: "Regnskap",
      shortDesc: "Full kontroll på tallene",
      content: "Vi tar hånd om hele regnskapsførselen for din bedrift. Fra daglig bokføring til årsoppgjør sørger vi for at alt er i orden. Skybasert regnskap via Power Office GO eller Finago Office gir deg oppdatert regnskap til enhver tid med full systemtilgang.",
      bullets: [
        "Løpende bokføring og bilagsbehandling",
        "Perioderapportering og årsregnskap",
        "Mva-oppgaver og skattemeldinger",
        "Remittering og prosjektregnskap"
      ],
      link: "/tjenester/regnskap"
    },
    {
      id: "lonn",
      icon: lonnIcon,
      title: "Lønn",
      shortDesc: "Korrekt lønn til rett tid",
      content: "Vårt lønnssystem håndterer alt fra lønnskjøring til rapportering til myndighetene. Vi sørger for at alle ansatte får riktig lønn til rett tid, og at alle lovpålagte rapporter sendes inn korrekt og i tide.",
      bullets: [
        "Lønnskjøring og lønnsslipp",
        "A-melding og skatterapportering",
        "Feriepengeberegning",
        "Digitale reiseregninger"
      ],
      link: "/tjenester/lonn"
    },
    {
      id: "fakturering",
      icon: fakturaIcon,
      title: "Fakturering",
      shortDesc: "Bedre likviditet",
      content: "Vi hjelper deg med effektiv fakturering som forbedrer cash flow. Våre systemer automatiserer fakturautsendelse og purringer, slik at du kan fokusere på kjernevirksomheten din.",
      bullets: [
        "Automatisert fakturautsendelse",
        "Påminnelser og inkassooppfølging",
        "Kundeoppfølging",
        "Integrasjon mot bank"
      ],
      link: "/tjenester/fakturering"
    },
    {
      id: "raadgiving",
      icon: raadgivingIcon,
      title: "Rådgivning",
      shortDesc: "Strategisk vekst",
      content: "Med vår erfaring gir vi deg strategisk rådgivning som hjelper bedriften din å vokse. Vi ser på hele bildet - fra skatteoptimalisering til langsiktig økonomisk planlegging.",
      bullets: [
        "Strategisk økonomisk planlegging",
        "Skatteoptimalisering og strukturering",
        "Budsjett og prognoser",
        "Verdivurdering"
      ],
      link: "/tjenester/raadgiving"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E86C1F]/10 text-[#E86C1F] text-sm font-medium mb-4">
            Våre Tjenester
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Komplette økonomitjenester
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Velg en tjeneste under for å se hvordan vi kan forenkle din hverdag.
          </p>
        </div>

        {/* Reusable Component */}
        <FeatureTabs items={servicesData} themeColor="#E86C1F" />

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-[#E86C1F]/10 max-w-3xl mx-auto hover:shadow-xl transition-shadow">
            <div className="p-3 bg-[#E86C1F]/10 rounded-full text-[#E86C1F]">
              <span className="text-2xl">💡</span>
            </div>
            <div className="text-left flex-1">
              <h3 className="font-bold text-lg text-slate-900">Søker du støtte fra Sametinget?</h3>
              <p className="text-slate-500 text-sm">
                Vi har laget en komplett guide om tilskuddsordninger, krav og søknadsprosess.
              </p>
            </div>
            <button
              onClick={() => navigate('/kunnskapsbank/sametinget')}
              className="whitespace-nowrap px-6 py-2.5 bg-slate-900 text-white font-medium rounded-full hover:bg-[#E86C1F] transition-colors"
            >
              Les guiden vår
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}