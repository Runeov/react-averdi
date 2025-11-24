import { Mail, Phone, User, Linkedin, MessageCircle } from 'lucide-react';

// --- TeamCard Component (For resten av teamet - Tilbake til blå/primary) ---
interface TeamCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo?: string;
  description?: string;
  onViewProfile?: () => void;
}

function TeamCard({ name, role, email, phone, photo, description, onViewProfile }: TeamCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col overflow-hidden group">
      {/* Reverted to standard Primary (Blue) gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/10"></div>
      
      <div className="p-6 text-center flex flex-col h-full">
        <div className="mb-6 flex-shrink-0 relative inline-block mx-auto">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {photo ? (
            <img
              src={photo}
              alt={`${name} - ${role}`}
              className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-white shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-3xl text-primary font-bold">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-1 flex-shrink-0 text-foreground">{name}</h3>
        <p className="text-primary font-medium mb-4 flex-shrink-0 text-sm uppercase tracking-wide">{role}</p>
        
        <div className="mb-6 flex-1 flex items-center justify-center min-h-[60px]">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {description || "Engasjert regnskapsfører dedikert til å hjelpe våre kunder med profesjonelle økonomitjenester."}
          </p>
        </div>
        
        <div className="space-y-3 mt-auto w-full">
          {onViewProfile && (
            <button
              onClick={onViewProfile}
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary/5 text-primary hover:bg-primary hover:text-white border border-primary/10 hover:border-transparent gap-2 mb-2 group/btn"
            >
              <User className="h-4 w-4" />
              Se profil
            </button>
          )}
          
          <div className="flex justify-center gap-2 pt-4 border-t border-gray-100">
            <a 
              href={`mailto:${email}`} 
              aria-label={`Send e-post til ${name}`}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            
            <a 
              href={`tel:${phone}`} 
              aria-label={`Ring ${name}`}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            
            <button 
              aria-label={`Send melding til ${name}`}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
            
            <button 
              aria-label={`Se ${name} på LinkedIn`}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main About Component ---

interface AboutProps {
  onViewProfile?: (employeeId: string) => void;
}

export function About({ onViewProfile }: AboutProps) {
  // Placeholder image URL since local file might be missing
  const placeholderImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80";

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
      description: "En engasjert støttespiller som passer på at regnskapet ditt alltid er oppdatert."
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
      email: "john.david.gaup@averdi.no", 
      phone: "400 00 000",
      description: "Bistår med strategisk rådgivning og analyser for å sikre lønnsom drift og sunn økonomisk utvikling."
    }
  ];

  const generalManager = team.find(member => member.id === "ingvald-laiti");
  const restOfTeam = team.filter(member => member.id !== "ingvald-laiti");

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- Intro Header --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Om Averdi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Din lokale partner siden 1999
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vi kombinerer lokal kunnskap med moderne teknologi for å gi deg de beste løsningene.
          </p>
        </div>

        {/* --- Main Story / Hero --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:h-full min-h-[500px] lg:min-h-[500px] group">
            <div className="absolute inset-0 bg-black/60 lg:hidden z-10"></div>
            {/* Using placeholder image if local file is missing */}
            <img
              src={placeholderImage}
              alt="Averdi kontormiljø"
              className="absolute inset-0 w-full h-full object-cover lg:relative transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="relative z-20 p-8 flex flex-col justify-center h-full lg:hidden text-white">
              <h2 className="text-3xl mb-4 font-bold drop-shadow-md text-center">
                Historien vår
              </h2>
              <div className="space-y-4 text-lg leading-relaxed font-medium drop-shadow-sm text-center">
                <p>
                  Averdi har siden 1999 vært en pålitelig og erfaren partner for norske bedrifter.
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block text-left">
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">Lokal forankring</h3>
                <p>
                  Averdi har siden 1999 vært en pålitelig og erfaren partner for norske bedrifter. Med vårt kontor i Karasjok er vi dypt forankret i regionen, og kombinerer vår lokale kunnskap med profesjonelle regnskapstjenester.
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">Din suksess er vårt mål</h3>
                <p>
                  Vi brenner for å se våre kunder lykkes, enten du driver et enkeltpersonforetak eller et større AS. Vår kompetanse sikrer at din økonomi er i trygge hender.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- General Manager Section (Ingvald) - Kept with Averdi Colors --- */}
        {generalManager && (
          <div className="mb-24">
             <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E86C1F]/10 relative group hover:border-[#E86C1F]/30 transition-colors duration-300">
                {/* Averdi Colors preserved here */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E86C1F] to-[#F4B223]"></div>
                
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#E86C1F]/5 rounded-full blur-3xl group-hover:bg-[#E86C1F]/10 transition-colors"></div>
                
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative z-10">
                   <div className="flex-1 text-center md:text-left space-y-6">
                      <div className="inline-block px-4 py-1.5 bg-[#E86C1F]/10 text-[#E86C1F] rounded-full text-sm font-semibold mb-2">
                        Daglig Leder
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {generalManager.name}
                      </h3>
                      <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                          Ingvald Laiti er daglig leder og statsautorisert regnskapsfører. Han har drevet regnskapsbyrå siden 1999, og leder teamet med solid erfaring og faglig tyngde.
                        </p>
                        <p>
                          Ingvald er dedikert til å opprettholde Averdis posisjon som en fremtidsrettet og tillitvekkende samarbeidspartner, med et sterkt fokus på kundenes behov og lokal tilstedeværelse fra Karasjok.
                        </p>
                      </div>
                      
                      <div className="pt-6 flex flex-wrap gap-6 justify-center md:justify-start items-center border-t border-gray-100 mt-6">
                        <a href={`mailto:${generalManager.email}`} className="text-[#E86C1F] hover:text-[#E86C1F]/80 font-medium flex items-center gap-2 transition-colors">
                          <span className="p-2 bg-[#E86C1F]/10 rounded-full">
                            <Mail className="h-4 w-4" />
                          </span>
                          {generalManager.email}
                        </a>
                        <span className="text-gray-300 hidden md:inline h-6 w-px bg-gray-200"></span>
                        <div className="text-muted-foreground flex items-center gap-2">
                           <span className="p-2 bg-[#E86C1F]/10 rounded-full text-[#E86C1F]">
                             <Phone className="h-4 w-4" />
                           </span>
                           {generalManager.phone}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- Team Grid --- */}
        <section className="py-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
              Vårt Team
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Møt ekspertene
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Våre erfarne regnskapsførere og økonomirådgivere står klare til å hjelpe deg
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {restOfTeam.map((member) => (
              <div key={member.id} className="h-full">
                <TeamCard
                  name={member.name}
                  role={member.role}
                  email={member.email}
                  phone={member.phone}
                  description={member.description}
                  onViewProfile={onViewProfile ? () => onViewProfile(member.id) : undefined}
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- Badges --- */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 text-center bg-white/50 backdrop-blur-md rounded-2xl p-10 border border-primary/5 shadow-lg">
          <div className="p-4 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h4 className="text-xl font-bold mb-2">Autorisert</h4>
            <p className="text-muted-foreground">
              Godkjent av Finanstilsynet med høye kvalitetsstandarder
            </p>
          </div>
          <div className="p-4 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
            <h4 className="text-xl font-bold mb-2">Solid erfaring</h4>
            <p className="text-muted-foreground">
              Trygg partner for bedrifter i regionen siden 1999
            </p>
          </div>
          <div className="p-4 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h4 className="text-xl font-bold mb-2">Trygg og sikker</h4>
            <p className="text-muted-foreground">
              All data behandles i henhold til GDPR og norsk lovgivning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}