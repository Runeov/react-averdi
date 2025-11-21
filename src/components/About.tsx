import { TeamCard } from './TeamCard';


interface AboutProps {
  onViewProfile?: (employeeId: string) => void;
}

export function About({ onViewProfile }: AboutProps) {
  const team = [
   
  {
    id: "ingvald-laiti",
    name: "Ingvald Laiti",
    role: "Daglig leder / Autorisert regnskapsfører",
    email: "ingvald.laiti@averdi.no",
    phone: "907 67 993",
    description: "Leder teamet med faglig tyngde og sikrer det solide fundamentet"
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
    description:  "Gjør økonomistyringen enklere for deg. Bruker effektive løsninger for å frigjøre tid til kjernevirksomheten."
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
  }
]


  return (
    <section id="about" className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image container - acts as background on mobile, side image on desktop */}
          <div className="relative rounded-xl overflow-hidden shadow-lg lg:h-full min-h-[500px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-black/70 lg:hidden z-10"></div>
            <img
              src="/ingvald_avis.avif"
              alt="Ingvald Laiti - Daglig leder i Averdi"
              className="absolute inset-0 w-full h-full object-cover lg:relative"
            />
            
            {/* Mobile text overlay */}
            <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-center h-full lg:hidden text-white">
              <h2 className="text-2xl sm:text-3xl mb-4 font-bold drop-shadow-md text-center">
                Om Averdi
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed font-medium drop-shadow-sm">
                <p>
                  Siden 1999 har Averdi vært en pålitelig og erfaren partner for norske bedrifter. Med kontor i Karasjok leverer vi profesjonelle regnskapstjenester og dyp lokalkunnskap.
                </p>
                <p>
                  Vårt team består av autoriserte regnskapsførere og erfarne økonomirådgivere som
                  brenner for å hjelpe bedrifter å lykkes. Vi kombinerer lokal kunnskap med moderne
                  teknologi for å gi deg de beste løsningene.
                </p>
                <p>
                  Enten du driver et enkeltpersonforetak eller et større AS, har vi
                  kompetansen og erfaringen som skal til for å ta hånd om din økonomi.
                </p>
              </div>
            </div>
          </div>
          
          {/* Desktop text content - hidden on mobile */}
          <div className="hidden lg:block text-left">
            <h2 className="text-2xl sm:text-3xl mb-6">
              Om Averdi
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Siden 1999 har Averdi vært en pålitelig og erfaren partner for norske bedrifter. Med kontor i Karasjok leverer vi profesjonelle regnskapstjenester og dyp lokalkunnskap.
              </p>
              <p>
                Vårt team består av autoriserte regnskapsførere og erfarne økonomirådgivere som
                brenner for å hjelpe bedrifter å lykkes. Vi kombinerer lokal kunnskap med moderne
                teknologi for å gi deg de beste løsningene.
              </p>
              <p>
                Enten du driver et enkeltpersonforetak eller et større AS, har vi
                kompetansen og erfaringen som skal til for å ta hånd om din økonomi.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl text-center mb-8">Våre ansatte</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                email={member.email}
                phone={member.phone}
                description={member.description}
                onViewProfile={onViewProfile ? () => onViewProfile(member.id) : undefined}
              />
            ))}
          </div>
        </div>

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
            <h4 className="text-lg mb-2">30 års erfaring</h4>
            <p className="text-muted-foreground">
              Fra oppstart til etablerte bedrifter over hele Norge
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