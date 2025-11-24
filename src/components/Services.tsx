import { ServiceCard } from './ServiceCard';
import regnskapIcon from '../assets/regnskap.avif';
import lonnIcon from '../assets/lonn.avif';
import raadgivingIcon from '../assets/raadgiving.avif';
import fakturaIcon from '../assets/faktura.avif';

export function Services() {
  const services = [
    {
      icon: regnskapIcon,
      title: "Regnskap",
      bullets: [
        "Løpende bokføring og bilagsbehandling",
        "Månedsrapporter og årsregnskap",
        "Mva-oppgaver og skattemeldinger"
      ],
      expandedContent: "Vi tar hånd om hele regnskapsførselen for din bedrift. Fra daglig bokføring til årsoppgjør sørger vi for at alt er i orden. Våre autoriserte regnskapsførere har lang erfaring med alt fra små enkeltpersonforetak til større AS-selskaper."
    },
    {
      icon: lonnIcon,
      title: "Lønn",
      bullets: [
        "Lønnskjøring og lønnsslipp",
        "A-melding og skatterapportering",
        "Feriepengeberegning og utbetaling"
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
      </div>
    </section>
  );
}