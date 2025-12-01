import { ServiceCard } from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import regnskapIcon from '../assets/regnskap.avif';
import lonnIcon from '../assets/lonn.avif';
import raadgivingIcon from '../assets/raadgiving.avif';
import fakturaIcon from '../assets/faktura.avif';

export function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: regnskapIcon,
      title: "Regnskap",
      bullets: [
        "Løpende bokføring og bilagsbehandling",
        "Perioderapportering og årsregnskap",
        "Mva-oppgaver og skattemeldinger",
        "Remittering",
        "Prosjektregnskap"
      ],
      expandedContent: "Vi tar hånd om hele regnskapsførselen for din bedrift. Fra daglig bokføring til årsoppgjør sørger vi for at alt er i orden. Skybasert regnskap via Power Office GO eller Finago Office (24SevenOffice) gir deg oppdatert regnskap til enhver tid med full systemtilgang. Våre statsautoriserte regnskapsførere har lang erfaring med alt fra organisasjoner og småbedrifter til handel."
    },
    {
      icon: lonnIcon,
      title: "Lønn",
      bullets: [
        "Lønnskjøring og lønnsslipp",
        "A-melding og skatterapportering",
        "Feriepengeberegning og utbetaling",
        "Digitale reiseregninger"
      ],
      expandedContent: "Vårt lønnssystem håndterer alt fra lønnskjøring til rapportering til myndighetene. Vi sørger for at alle ansatte får riktig lønn til rett tid, og at alle lovpålagte rapporter sendes inn korrekt og i tide."
    },
    {
      icon: fakturaIcon,
      title: "Fakturering",
      bullets: [
        "Automatisert fakturautsendelse",
        "Påminnelser og inkassooppfølging",
        "Kundeoppfølging og betaling"
      ],
      expandedContent: "Vi hjelper deg med effektiv fakturering som forbedrer cash flow. Våre systemer automatiserer fakturautsendelse og purringer, slik at du kan fokusere på kjernevirksomheten din."
    },
    {
      icon: raadgivingIcon,
      title: "Rådgivning",
      bullets: [
        "Strategisk økonomisk planlegging",
        "Skatteoptimalisering og strukturering",
        "Budsjett og prognoser"
      ],
      expandedContent: "Med vår erfaring gir vi deg strategisk rådgivning som hjelper bedriften din å vokse. Vi ser på hele bildet - fra skatteoptimalisering til langsiktig økonomisk planlegging."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration - matching Hero style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Våre Tjenester
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Komplette økonomitjenester
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vi kombinerer moderne teknologi med personlig oppfølging for å gi din bedrift den beste hverdagen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              bullets={service.bullets}
              expandedContent={service.expandedContent}
            />
          ))}
        </div>
        {/* CTA for Sametinget Guide */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-[#E86C1F]/10 max-w-3xl mx-auto">
            <div className="p-3 bg-[#E86C1F]/10 rounded-full text-[#E86C1F]">
              <span className="text-2xl">💡</span>
            </div>
            <div className="text-left flex-1">
              <h3 className="font-bold text-lg text-foreground">Søker du støtte fra Sametinget?</h3>
              <p className="text-muted-foreground text-sm">
                Vi har laget en komplett guide om tilskuddsordninger, krav og søknadsprosess.
              </p>
            </div>
            <button
              onClick={() => navigate('/kunnskapsbank/sametinget')}
              className="whitespace-nowrap px-6 py-2.5 bg-secondary/10 text-foreground font-medium rounded-full hover:bg-[#E86C1F] hover:text-white transition-colors"
            >
              Les guiden vår
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}