import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AboutProps {
  onViewProfile?: (employeeId: string) => void;
}

export function About({ onViewProfile }: AboutProps) {
  const navigate = useNavigate();
  // Placeholder image URL since local file might be missing
  const placeholderImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80";

  // Vi definerer kun Ingvald her siden han skal ha spesiell visning.
  // Resten av teamet vises nå på /om-oss/team
  const generalManager = {
    id: "ingvald-laiti",
    name: "Ingvald Laiti",
    role: "Daglig leder / Statsautorisert regnskapsfører",
    email: "ingvald.laiti@averdi.no",
    phone: "907 67 993",
    description: "Leder teamet med faglig tyngde og sikrer det solide fundamentet."
  };

  const handleProfileClick = (id: string) => {
    navigate(`/om-oss/ansatte/${id}`);
    window.scrollTo(0, 0);
  };

  const handleSeeAllTeam = () => {
    navigate('/om-oss/team');
    window.scrollTo(0, 0);
  };

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
            Din lokale partner siden 1989
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vi kombinerer lokal kunnskap med moderne teknologi for å gi deg de beste løsningene.
          </p>
        </div>

        {/* --- Main Story / Hero --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:h-full min-h-[500px] lg:min-h-[500px] group">
            <div className="absolute inset-0 bg-black/60 lg:hidden z-10"></div>
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
                  Averdi ble etablert i 1989 som Laitis Regnskapskontor, og ble til Averdi Karasjok AS i 1999.
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block text-left">
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">Lokal forankring</h3>
                <p>
                  Averdi ble etablert i 1989 som Laitis Regnskapskontor, og ble til Averdi Karasjok AS i 1999. Med vårt kontor i Karasjok er vi dypt forankret i regionen, og kombinerer vår lokale kunnskap med profesjonelle regnskapstjenester for organisasjoner, småbedrifter og handel.
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">Din suksess er vårt mål</h3>
                <p>
                  Vi brenner for å se våre kunder lykkes, enten du driver en organisasjon, småbedrift eller handel. Vår kompetanse sikrer at din økonomi er i trygge hender.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">Spesialkompetanse</h3>
                <p>
                  Vi har omfattende erfaring med regnskap for Samiske organisasjoner og institusjoner. Vår lokale forankring i Karasjok gir oss unik innsikt i regionens behov.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- General Manager Section (Ingvald) --- */}
        <div className="mb-16">
            <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E86C1F]/10 relative group hover:border-[#E86C1F]/30 transition-colors duration-300">
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
                        Ingvald Laiti er daglig leder og statsautorisert regnskapsfører. Han startet Laitis Regnskapskontor i 1989, som ble til Averdi Karasjok AS i 1999. Han leder teamet med solid erfaring og faglig tyngde.
                      </p>
                      <p>
                        Ingvald er dedikert til å opprettholde Averdis posisjon som en fremtidsrettet og tillitvekkende samarbeidspartner, med et sterkt fokus på kundenes behov og lokal tilstedeværelse fra Karasjok.
                      </p>
                    </div>
                    
                    <div className="pt-6 flex flex-wrap gap-6 justify-center md:justify-start items-center border-t border-gray-100 mt-6">
                      <button
                        onClick={() => handleProfileClick(generalManager.id)}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-6 py-2 bg-[#E86C1F] text-white hover:bg-[#E86C1F]/90 gap-2 shadow-sm"
                      >
                        <User className="h-4 w-4" />
                        Se profil
                      </button>

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

        {/* --- Team Teaser (New Section) --- */}
        <section className="bg-primary/5 rounded-3xl text-center py-16 px-6 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Møt resten av gjengen
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Vi er et sterkt team med bred kompetanse innen alt fra reindrift og duodji til netthandel og organisasjonsdrift. 
              Våre regnskapsførere og rådgivere står klare til å hjelpe deg.
            </p>
            
            <button
              onClick={handleSeeAllTeam}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-2 group"
            >
              <User className="h-5 w-5" />
              Se alle ansatte
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
              Trygg partner for bedrifter i regionen siden 1989
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