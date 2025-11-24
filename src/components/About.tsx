import { TeamCard } from './TeamCard';
import ingvaldAvis from '../assets/ingvald_avis.avif';

interface AboutProps {
  onViewProfile?: (employeeId: string) => void;
}

export function About({ onViewProfile }: AboutProps) {
  // Definer hele teamet
 const team = [
    {
      id: "ingvald-laiti",
      name: "Ingvald Laiti",
      role: "Daglig leder / Autorisert regnskapsfører",
      email: "ingvald.laiti@averdi.no",
      phone: "907 67 993",
      description: "Leder teamet med faglig tyngde og sikrer det solide fundamentet."
    },
    {
      id: "jan-atle-guttorm",
      name: "Jan Atle Guttorm",
      role: "Regnskapsfører",
      email: "jan.atle.guttorm@averdi.no",
      phone: "915 48 089",
      description: "Din garantist for orden. Leverer presis regnskapsføring som gir deg full kontroll i hverdagen."
    },
    {
      id: "hilde-laiti",
      name: "Hilde M. Laiti",
      role: "Regnskapsfører",
      email: "hilde.marie.laiti@averdi.no",
      phone: "400 44 918",
      description: "Gjør økonomistyringen enklere for deg. Bruker effektive løsninger for å frigjøre tid til kjernevirksomheten."
    },
    {
      id: "alida-norvang",
      name: "Alida G. Norvang",
      role: "Regnskapsfører",
      email: "alida.norvang@averdi.no",
      phone: "480 52 329",
      description: "Nøyaktig og pålitelig. Sikrer at regnskapet ditt er en stabil plattform for alle dine viktige beslutninger."
    },
    {
      id: "tonje-iren-anti",
      name: "Tonje Iren Anti",
      role: "Regnskapsfører",
      email: "tonje.iren.anti@averdi.no",
      phone: "480 23 265",
      description: "Sikrer knirkefritt drift. En engasjert støttespiller som passer på at regnskapet ditt alltid er oppdatert."
    },
    {
      id: "linda-kildedam",
      name: "Linda Marja Anti Kildedam",
      role: "Regnskapsfører",
      email: "linda.kildedam@averdi.no",
      phone: "480 51 672",
      description: "Gir deg trygghet og oversikt. Hun sikrer at beslutningsgrunnlaget ditt alltid er i orden."
    },
    {
      id: "john-david-utsi-gaup",
      name: "John David Utsi Gaup",
      role: "Økonomirådgiver",
      email: "john.david.gaup@averdi.no", // SJEKK DENNE
      phone: "XXX XX XXX", // LEGG INN TELEFONNUMMER HER
      description: "Bistår med strategisk rådgivning og analyser for å sikre lønnsom drift og sunn økonomisk utvikling."
    }
  ];

  // Skill ut Ingvald og resten av teamet
  const generalManager = team.find(member => member.id === "ingvald-laiti");
  const restOfTeam = team.filter(member => member.id !== "ingvald-laiti");

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- SEKSJON 1: OM AVERDI --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Om Averdi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Din lokale partner siden 1999
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image container */}
          <div className="relative rounded-xl overflow-hidden shadow-lg lg:h-full min-h-[500px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-black/70 lg:hidden z-10"></div>
            <img
              src={ingvaldAvis}
              alt="Ingvald Laiti - Daglig leder i Averdi"
              className="absolute inset-0 w-full h-full object-cover lg:relative"
            />
            
            {/* Mobile text overlay (Visible only on mobile) */}
            <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-center h-full lg:hidden text-white">
              <h2 className="text-2xl sm:text-3xl mb-4 font-bold drop-shadow-md text-center">
                Om Averdi
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed font-medium drop-shadow-sm">
                <p>
                  Averdi har siden 1999 vært en pålitelig og erfaren partner for norske bedrifter. Med vårt kontor i Karasjok er vi dypt forankret i regionen, og kombinerer vår lokale kunnskap med profesjonelle regnskapstjenester.
                </p>
                <p>
                  Vi brenner for å se våre kunder lykkes, enten du driver et enkeltpersonforetak eller et større AS. Vår kompetanse sikrer at din økonomi er i trygge hender.
                </p>
              </div>
            </div>
          </div>
          
          {/* Desktop text content (Hidden on mobile) */}
          <div className="hidden lg:block text-left">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground block mb-2">Lokal forankring, profesjonell leveranse</strong>
                Averdi har siden 1999 vært en pålitelig og erfaren partner for norske bedrifter. Med vårt kontor i Karasjok er vi dypt forankret i regionen, og kombinerer vår lokale kunnskap med profesjonelle regnskapstjenester og moderne teknologi for å levere de beste løsningene.
              </p>
              <p>
                <strong className="text-foreground block mb-2">Din suksess er vårt mål</strong>
                Vi brenner for å se våre kunder lykkes, enten du driver et enkeltpersonforetak eller et større AS. Vår kompetanse og erfaring sikrer at din økonomi er i trygge hender, slik at du kan fokusere på din kjernevirksomhet.
              </p>
            </div>
          </div>
        </div>

        {/* --- SEKSJON 2: DAGLIG LEDER (INGVALD) --- */}
        {generalManager && (
          <div className="mb-20">
             <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/10">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                   <div className="flex-1 text-center md:text-left space-y-4">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                        Daglig Leder
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {generalManager.name}
                      </h3>
                     <p className="text-xl text-muted-foreground leading-relaxed">
  Ingvald Laiti er daglig leder og statsautorisert regnskapsfører. Han har drevet regnskapsbyrå siden 1999, og leder teamet med solid erfaring og faglig tyngde.
</p>
<p className="text-muted-foreground">
  Ingvald er dedikert til å opprettholde Averdis posisjon som en fremtidsrettet og tillitvekkende samarbeidspartner, med et sterkt fokus på kundenes behov og lokal tilstedeværelse fra Karasjok.
</p>
                      
                      {/* Contact button or link for Ingvald specifically */}
                      <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href={`mailto:${generalManager.email}`} className="text-primary hover:underline font-medium">
                          {generalManager.email}
                        </a>
                        <span className="text-gray-300 hidden md:inline">|</span>
                        <span className="text-muted-foreground">{generalManager.phone}</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- SEKSJON 3: RESTEN AV TEAMET --- */}
        <section className="py-8">
          <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
            <div className="max-w-xl mx-auto">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Møt resten av teamet
              </h3>
              <p className="text-gray-600 mt-3">
                Våre erfarne regnskapsførere og økonomirådgivere står klare til å hjelpe deg
              </p>
            </div>
            <div className="mt-12">
              <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {restOfTeam.map((member) => (
                  <li key={member.id}>
                    <TeamCard
                      name={member.name}
                      role={member.role}
                      email={member.email}
                      phone={member.phone}
                      description={member.description}
                      onViewProfile={onViewProfile ? () => onViewProfile(member.id) : undefined}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Badges / Info Bar */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center bg-secondary/20 rounded-xl p-8">
          <div className="p-4">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="text-lg mb-2">Autorisert regnskapsførerselskap</h4>
            <p className="text-muted-foreground">
              Godkjent av Finanstilsynet med høye kvalitetsstandarder
            </p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-lg mb-2">Solid erfaring</h4>
            <p className="text-muted-foreground">
              Trygg partner for bedrifter i regionen siden 1999
            </p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="text-lg mb-2">Trygg og sikker</h4>
            <p className="text-muted-foreground">
              All data behandles i henhold til GDPR og norsk lovgivning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}