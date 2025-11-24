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
    <section id="services" className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl mb-4">
            Våre tjenester
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyr komplette økonomitjenester tilpasset din bedrifts behov
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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