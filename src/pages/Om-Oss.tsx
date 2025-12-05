import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';

// --- DATA SECTION (Inlined to prevent import errors) ---

export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  office: string;
  description: string;
  longDescription: string;
  experience: string;
  specialties: string[];
  education: string[];
  languages: string[];
  workingHours: string;
  achievements: string[];
  clientTypes: string[];
  image?: string;
  relatedHubs?: { title: string; link: string }[];
}

const employees: Record<string, Employee> = {
  "ingvald-laiti": {
    id: "ingvald-laiti",
    name: "Ingvald Laiti",
    role: "Daglig leder / Statsautorisert regnskapsfører",
    email: "ingvald.laiti@averdi.no",
    phone: "907 67 993",
    office: "karasjok",
    description: "Spesialist på regnskap for samiske organisasjoner og offentlig forvaltning.",
    longDescription: `Som grunnlegger av Averdi har Ingvald over 30 års erfaring med næringslivet i Finnmark. Han er **statsautorisert regnskapsfører** med en unik spisskompetanse innen **regnskap for samiske organisasjoner og institusjoner**.

    Offentlig tilskuddsforvaltning og prosjektregnskap kan være komplekst. Ingvald hjelper styret og daglig leder med å navigere i regelverket, sikre korrekt rapportering av offentlige midler, og trygge den økonomiske styringen. Han er din fremste rådgiver for større virksomheter som krever høy formell kompetanse.`,
    experience: "30+ år",
    specialties: [
      "Samiske organisasjoner",
      "Offentlig tilskudd",
      "Institusjonsregnskap",
      "Virksomhetsstyring"
    ],
    education: [
      "Statsautorisert regnskapsfører"
    ],
    languages: ["Norsk", "Nordsamisk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Organisasjoner",
      "Samiske institusjoner",
      "Stiftelser"
    ],
    relatedHubs: [
      { title: "Lag og Foreninger", link: "/kunnskapsbank/organisasjoner" },
      { title: "Sametinget Støtte", link: "/kunnskapsbank/sametinget" }
    ]
  },

  "jan-atle-guttorm": {
    id: "jan-atle-guttorm",
    name: "Jan Atle Guttorm",
    role: "Regnskapsfører",
    email: "jan.atle.guttorm@averdi.no",
    phone: "915 48 089",
    office: "karasjok",
    description: "Ekspert på primærnæringer, reindrift og skattemelding for enkeltpersonforetak.",
    longDescription: `Jan Atle er din trygghet når det gjelder **primærnæringer og småbedrifter**. Han har inngående kjennskap til de spesielle skattereglene som gjelder for reindrift, jordbruk og fiske i tiltakssonen.
    
    Driver du et enkeltpersonforetak (ENK)? Jan Atle sørger for at årsoppgjør og skattemelding blir levert korrekt, og at du får alle fradragene du har krav på. Han hjelper deg å holde orden i bilagene slik at du kan fokusere på driften.`,
    experience: "30+ år",
    specialties: [
      "Reindriftsregnskap",
      "Jordbruk og fiske",
      "Enkeltpersonforetak",
      "Skattemelding"
    ],
    education: [
      "Regnskapsfører"
    ],
    languages: ["Norsk", "Nordsamisk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Reindriftsutøvere",
      "Enkeltpersonforetak",
      "Småbedrifter"
    ],
    relatedHubs: [
      { title: "Primærnæringer", link: "/kunnskapsbank/sametinget/primaernaering" }
    ]
  },

  "hilde-laiti": {
    id: "hilde-laiti",
    name: "Hilde M. Laiti",
    role: "Regnskapsfører",
    email: "hilde.marie.laiti@averdi.no",
    phone: "400 44 918",
    office: "karasjok",
    description: "Spesialist på handel, butikkdrift og integrasjon av kassesystemer.",
    longDescription: `Hilde er vår ekspert på **handel og butikkdrift**. I en bransje med små marginer er det avgjørende med stålkontroll på varelager og omsetning. Hilde hjelper deg å sette opp effektive rutiner som kobler kassesystemet (POS) direkte mot regnskapet.
    
    Driver du nettbutikk? Hilde kan bistå med integrasjoner mot Shopify eller WooCommerce, og håndtering av betalingsløsninger som Klarna og Vipps. Hun er også en superbruker på PowerOffice GO og hjelper deg å digitalisere bedriften.`,
    experience: "Erfaren",
    specialties: [
      "Handel og butikk",
      "Kassesystemer (POS)",
      "Nettbutikk-regnskap",
      "Lønnskjøring"
    ],
    education: [
      "Regnskapsfører"
    ],
    languages: ["Norsk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Butikker",
      "Nettbutikker",
      "Tjenesteyting"
    ],
    relatedHubs: [
      { title: "Regnskap for Handel", link: "/kunnskapsbank/handel" }
    ]
  },

  "alida-norvang": {
    id: "alida-norvang",
    name: "Alida G. Norvang",
    role: "Regnskapsfører",
    email: "alida.norvang@averdi.no",
    phone: "480 52 329",
    office: "karasjok",
    description: "Trygg støttespiller for lag og foreninger. Hjelper med momskompensasjon og medlemslister.",
    longDescription: `Frivilligheten er hjørnesteinen i lokalsamfunnet, men reglene kan være vanskelige. Alida har spesialisert seg på regnskap for **lag og foreninger**. Hun avlaster kassereren og sørger for at årsmøtet får et korrekt og oversiktlig regnskap.
    
    Alida passer på fristene for **momskompensasjon**, slik at foreningen får tilbake pengene de har krav på. Hun kan også bistå med medlemsregister og rapportering av lotteri- og grasrotmidler.`,
    experience: "30+ år",
    specialties: [
      "Lag og foreninger",
      "Momskompensasjon",
      "Frivillighetsregisteret",
      "Årsmøtepapirer"
    ],
    education: [
      "Regnskapsfører"
    ],
    languages: ["Norsk", "Nordsamisk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Idrettslag",
      "Foreninger",
      "Småbedrifter"
    ],
    relatedHubs: [
      { title: "Lag og Foreninger", link: "/kunnskapsbank/organisasjoner" }
    ]
  },

  "tonje-iren-anti": {
    id: "tonje-iren-anti",
    name: "Tonje Iren Anti",
    role: "Statsautorisert regnskapsfører",
    email: "tonje.iren.anti@averdi.no",
    phone: "480 23 265",
    office: "karasjok",
    description: "Rådgiver for lokalt næringsliv og samiske organisasjoner.",
    longDescription: `Tonje Iren kombinerer rollen som statsautorisert regnskapsfører med dyp lokal forankring. Hun jobber mye med **lokale småbedrifter** i Karasjok og omegn, og er en viktig sparringspartner for daglig leder.
    
    Hun har også bred erfaring med prosjektregnskap for **samiske organisasjoner** som mottar støtte fra Sametinget. Tonje sikrer at midlene rapporteres korrekt slik at dere unngår trekk i støtten eller krav om tilbakebetaling.`,
    experience: "15+ år",
    specialties: [
      "Samiske organisasjoner",
      "Prosjektrapportering",
      "Lokalt næringsliv",
      "Rådgivning"
    ],
    education: [
      "Statsautorisert regnskapsfører",
      "Bachelor i Økonomi"
    ],
    languages: ["Norsk", "Nordsamisk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Prosjektbedrifter",
      "Organisasjoner",
      "Lokale firma"
    ],
    relatedHubs: [
      { title: "Sametinget Hub", link: "/kunnskapsbank/sametinget" }
    ]
  },

  "linda-marja-anti-kildedam": {
    id: "linda-marja-anti-kildedam",
    name: "Linda Marja Anti Kildedam",
    role: "Økonomirådgiver",
    email: "linda.kildedam@averdi.no",
    phone: "480 51 672",
    office: "karasjok",
    description: "Hjelper gründere og duodji-utøvere med etablering og søknader.",
    longDescription: `Linda Marja brenner for nyskaping. Hun er den du snakker med når du skal **starte egen bedrift**. Hun hjelper deg med forretningsplan, budsjettering og valg av selskapsform (AS eller ENK).
    
    Hun har spesiell kompetanse på **Duodji-næringen** og de spesifikke støtteordningene som finnes der. Trenger du hjelp til å søke etablererstøtte eller investeringsstøtte fra Sametinget? Linda guider deg gjennom søknadsprosessen.`,
    experience: "Erfaren",
    specialties: [
      "Gründerhjelp",
      "Etablering",
      "Duodji-støtte",
      "Søknadsskriving"
    ],
    education: [
      "Økonomirådgiver"
    ],
    languages: ["Norsk", "Nordsamisk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Nyetablerere",
      "Duodji-utøvere",
      "Gründere"
    ],
    relatedHubs: [
      { title: "Støtte til Duodji", link: "/kunnskapsbank/sametinget/duodji" },
      { title: "Variert Næringsliv", link: "/kunnskapsbank/sametinget/variert-naeringsliv" }
    ]
  },

  "john-david-utsi-gaup": {
    id: "john-david-utsi-gaup",
    name: "John David Utsi Gaup",
    role: "Økonomirådgiver",
    email: "John.davit@averdi.no",
    phone: "480 23 265",
    office: "karasjok",
    description: "Strategisk rådgivning for reiseliv og vekstbedrifter.",
    longDescription: `John David jobber med tallene som forteller hvor bedriften din er på vei. Han spesialiserer seg på **lønnsomhetsanalyse og strategi** for bedrifter som ønsker å vokse.
    
    Jobber du innen **samisk reiseliv** eller opplevelsesnæring? John David hjelper deg å kalkulere riktige priser på produktene dine og sette opp likviditetsbudsjetter som sikrer sunn drift gjennom hele sesongen.`,
    experience: "Erfaren",
    specialties: [
      "Økonomisk analyse",
      "Reiseliv og opplevelser",
      "Likviditetsstyring",
      "Vekststrategi"
    ],
    education: [
      "Økonomirådgiver"
    ],
    languages: ["Norsk", "Nordsamisk"],
    workingHours: "Man-Fre: 08:00-16:00",
    achievements: [],
    clientTypes: [
      "Reiselivsbedrifter",
      "Vekstbedrifter",
      "Prosjekt"
    ],
    relatedHubs: [
      { title: "Samisk Reiseliv", link: "/kunnskapsbank/sametinget/samisk-reiseliv" }
    ]
  }
};

// --- COMPONENT: SplitProfileCard (Flexible Version) ---
const SplitProfileCard = ({
  name = "Navn",
  surname = "Etternavn",
  role = "Rolle",
  quote = "Quote goes here.",
  imageUrl = "https://placehold.co/800x1000/e2e8f0/1e293b?text=Profile",
  colorTheme = "orange",
  socialLinks = { home: "", email: "", phone: "" },
  office = ""
}) => {
  const [imageError, setImageError] = useState(false);

  const themes: Record<string, { bar: string; textHigh: string; bg: string }> = {
    blue: { bar: "bg-[#20638f]", textHigh: "text-[#20638f]", bg: "bg-blue-50" },
    red: { bar: "bg-[#962d22]", textHigh: "text-[#962d22]", bg: "bg-red-50" },
    yellow: { bar: "bg-[#bf6516]", textHigh: "text-[#bf6516]", bg: "bg-orange-50" },
    orange: { bar: "bg-[#E86C1F]", textHigh: "text-[#E86C1F]", bg: "bg-orange-50" }
  };

  const currentTheme = themes[colorTheme] || themes.orange;

  return (
    <div className="group relative w-full h-full min-h-[500px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Skewed Image Section */}
      <div className="absolute top-0 left-0 w-[55%] h-full overflow-hidden z-10 -skew-x-[15deg] origin-top-left bg-gray-200">
        <img 
          src={imageError ? "https://placehold.co/800x1000/e2e8f0/1e293b?text=Ansatt" : imageUrl}
          alt={`${name} ${surname}`}
          onError={() => setImageError(true)}
          className="w-[140%] h-full object-cover relative -left-[15%] skew-x-[15deg] scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-0 right-0 w-[5px] h-full bg-black/10 z-20" aria-hidden="true" />
      </div>

      {/* Shadow Element */}
      <div className="absolute top-0 left-0 h-full w-[45%] bg-black/20 -skew-x-[17deg] shadow-[15px_0_25px_rgba(0,0,0,0.7)] pointer-events-none z-0 transform transition-all duration-500 group-hover:-translate-x-2" />

      {/* Content Section */}
      <div className="absolute top-0 right-0 w-[50%] h-full z-20 flex flex-col justify-end p-6 pb-20 font-raleway text-right">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          
          <h2 className="text-2xl lg:text-3xl font-light uppercase border-b border-black/10 pb-2 mb-3 text-gray-800">
            {name} <span className={`font-extrabold ${currentTheme.textHigh}`}>{surname}</span>
          </h2>

          <p className="text-sm lg:text-base text-gray-600 leading-relaxed opacity-80 mb-6 line-clamp-6">
            {quote}
          </p>

          <div className="flex flex-col items-end gap-3">
             {/* Office Location Badge */}
             {office && (
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <MapPin className="w-3 h-3" />
                {office}
              </div>
            )}

            <div className="flex justify-end space-x-4 items-center">
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} aria-label="Send Email" className="text-gray-800 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200">
                  <Mail size={24} strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.phone && (
                <a href={`tel:${socialLinks.phone}`} aria-label="Call" className="text-gray-800 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200">
                  <Phone size={24} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Color Bar */}
      <div className={`absolute bottom-0 left-0 w-full p-3 px-8 text-right text-white text-sm italic tracking-wide font-raleway font-medium z-30 transition-colors duration-300 ${currentTheme.bar}`}>
        {role}
      </div>
    </div>
  );
};

export function MeetOurTeamPage() {
  const navigate = useNavigate();

  // Helper to split full name into First and Last name for the visual effect
  const splitName = (fullName: string) => {
    const parts = fullName.split(' ');
    const surname = parts.pop() || "";
    const name = parts.join(' ');
    return { name, surname };
  };

  // Convert employees object to array for mapping
  const teamList = Object.values(employees);

  // Theme cycler for visual variety
  const themeOrder = ['orange', 'blue', 'red'];

  return (
    <>
      <Helmet>
        <title>Møt Teamet | Regnskapsførere i Karasjok | Averdi</title>
        <meta name="description" content="Bli kjent med menneskene i Averdi. Våre statsautoriserte regnskapsførere og rådgivere står klare til å hjelpe deg med vekst og verdiskapning." />
      </Helmet>

      <main className="bg-slate-50 min-h-screen">
        
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-900 text-white">
           <div className="absolute inset-0 z-0">
             {/* Abstract background shapes */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E86C1F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
           </div>

           <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-orange-300 text-sm font-bold mb-8">
               <Users className="w-4 h-4" />
               Vårt Team
             </div>
             
             <h1 className="text-4xl lg:text-7xl font-bold mb-8 font-raleway">
               Menneskene bak <br/>
               <span className="text-[#E86C1F]">tallene.</span>
             </h1>
             
             <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
               I Averdi møter du ikke en chatbot, men ekte mennesker med lokal forankring og høy kompetanse. 
               Vi er sammensatt av statsautoriserte regnskapsførere, rådgivere og spesialister på alt fra reindrift til butikkdata.
             </p>

           </div>
        </section>

        {/* --- TEAM GRID --- */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {teamList.map((employee, index) => {
              const { name, surname } = splitName(employee.name);
              const theme = themeOrder[index % themeOrder.length]; // Cycles through themes

              return (
                <motion.div
                  key={employee.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full cursor-pointer"
                  onClick={() => navigate(`/om-oss/ansatte/${employee.id}`)}
                >
                  <SplitProfileCard
                    name={name}
                    surname={surname}
                    role={employee.role}
                    quote={employee.description}
                    imageUrl={employee.image || `https://source.unsplash.com/random/800x1000/?portrait,professional&sig=${index}`}
                    office={employee.office}
                    colorTheme={theme}
                    socialLinks={{
                        home: "",
                      email: employee.email,
                      phone: employee.phone
                    }}
                  />
                </motion.div>
              );
            })}

          </div>
        </section>

        {/* --- JOIN US CTA --- */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Vil du bli en av oss?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Averdi er i vekst, og vi er alltid på utkikk etter dyktige hoder. 
              Er du regnskapsfører eller økonomirådgiver med hjerte for nordnorsk næringsliv?
            </p>
            <button 
              onClick={() => navigate('/kontakt')}
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#E86C1F] transition-colors shadow-lg"
            >
              Ta kontakt for en karriereprat
            </button>
          </div>
        </section>

      </main>
    </>
  );
}