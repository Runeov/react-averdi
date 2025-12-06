import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Phone,
  Home,
  ChevronDown,
  TrendingUp,
  LineChart,
  Lightbulb,
  CheckCircle2,
  Store,
  Car
} from 'lucide-react';
import { useState } from 'react';
import { FeatureTabs, type FeatureTabItem } from '../../components/ui/FeatureTabs';

// Assets
import lonnIcon from '../../assets/lonn.avif';
import raadgivingIcon from '../../assets/raadgiving.avif';

// --- NEW COMPONENT: SplitProfileCard ---
const SplitProfileCard = ({
  name = "Navn",
  surname = "Etternavn",
  role = "Rolle",
  quote = "Quote goes here.",
  imageUrl = "https://placehold.co/400x600/e2e8f0/1e293b?text=Profile",
  colorTheme = "orange",
  socialLinks = { home: "", email: "", phone: "" }
}) => {
  const [imageError, setImageError] = useState(false);

  // Theme configuration map
  const themes: Record<string, { bar: string; textHigh: string }> = {
    blue: { bar: "bg-[#20638f]", textHigh: "text-[#20638f]" },
    red: { bar: "bg-[#962d22]", textHigh: "text-[#962d22]" },
    yellow: { bar: "bg-[#bf6516]", textHigh: "text-[#bf6516]" },
    orange: { bar: "bg-[#E86C1F]", textHigh: "text-[#E86C1F]" }
  };

  const currentTheme = themes[colorTheme] || themes.orange;

  return (
    // Component is set to h-full and w-full to fill the grid column (50%)
    <div className="group relative w-full h-full min-h-[500px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      {/* Font Injection for Raleway */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Skewed Image Section */}
      <div className="absolute top-0 left-0 w-[55%] h-full overflow-hidden z-10 -skew-x-[15deg] origin-top-left bg-gray-200">
        <img 
          src={imageError ? "https://placehold.co/400x600/e2e8f0/1e293b?text=Profile" : imageUrl}
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
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed opacity-80 mb-4 line-clamp-6">
            {quote}
          </p>
          <div className="flex justify-end space-x-3 items-center">
            {socialLinks.home && (
              <a href={socialLinks.home} aria-label="Visit Website" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Home size={20} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} aria-label="Send Email" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.phone && (
              <a href={`tel:${socialLinks.phone}`} aria-label="Call" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Phone size={20} strokeWidth={1.5} />
              </a>
            )}
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


// --- FEATURE TABS DATA ---
const lonnServicesData: FeatureTabItem[] = [
  {
    id: "lonnskjoring",
    icon: lonnIcon,
    title: "Lønnskjøring & A-melding",
    shortDesc: "Korrekt og til rett tid",
    content: "Vi tar oss av hele lønnsprosessen, fra beregning av lønn og skattetrekk til utsendelse av lønnsslipper og innrapportering av A-melding. Vi sørger for at alle frister overholdes.",
    bullets: [
      "Månedlig lønnskjøring",
      "Automatisk A-melding til Altinn",
      "Digitale lønnsslipper til ansatte",
      "Håndtering av feriepenger"
    ],
    link: "/kontakt",
    linkText: "Få et tilbud på lønnskjøring"
  },
  {
    id: "reiseregning",
    icon: raadgivingIcon,
    title: "Reiseregninger & Utlegg",
    shortDesc: "Enkel digital håndtering",
    content: "Gjør det enkelt for dine ansatte å registrere reiser og utlegg. Vi bruker moderne systemer (som Tripletex/PowerOffice Go appen) som lar ansatte ta bilde av kvitteringer og sende inn direkte fra mobilen.",
    bullets: [
      "App-basert registrering",
      "Korrekt behandling av dietter og satser",
      "Raskere tilbakebetaling til ansatte",
      "Full oversikt og kontroll"
    ],
    link: "/kontakt",
    linkText: "Snakk med oss om digitale løsninger"
  },
  {
    id: "sykepenger",
    icon: lonnIcon,
    title: "Sykepenger & Refusjon",
    shortDesc: "Vi håndterer NAV",
    content: "Det kan være komplisert å holde styr på regler for sykepenger, egenmeldingsdager og refusjoner fra NAV. Vi tar jobben, slik at du sikrer at bedriften får de refusjonene dere har krav på.",
    bullets: [
      "Oppfølging av sykemeldinger",
      "Beregning av sykepenger",
      "Søknad om refusjon fra NAV",
      "Rådgivning om regelverk"
    ],
    link: "/kontakt",
    linkText: "Kontakt oss for hjelp med sykepenger"
  },
  {
    id: "hr",
    icon: raadgivingIcon,
    title: "HR-støtte & Rådgivning",
    shortDesc: "Din partner i personalsaker",
    content: "Vi er mer enn bare en lønnssentral. Vi kan også bistå med generelle HR-spørsmål, arbeidsavtaler, personalhåndbøker og rådgivning rundt ansettelsesforhold.",
    bullets: [
      "Standard arbeidsavtaler",
      "Oppdatering av personalhåndbok",
      "Rådgivning ved ansettelser/oppsigelser",
      "Sparringspartner for ledelsen"
    ],
    link: "/kontakt",
    linkText: "Se hvordan vi kan bistå med HR"
  }
];

// --- FAQ DATA ---
const faqs = [
  {
    question: "Hvilke lønnssystemer støtter dere?",
    answer: "Vi jobber primært i Tripletex, PowerOffice Go og Duett. Disse systemene er skybaserte og gir både deg som leder og dine ansatte en enkel og effektiv hverdag."
  },
  {
    question: "Kan dere håndtere lønn for bedrifter i tiltakssonen?",
    answer: "Absolutt. Vi har inngående kunnskap om særreglene for arbeidsgiveravgift og skattetrekk som gjelder i Finnmark og Nord-Troms."
  },
  {
    question: "Hva koster det å outsource lønn?",
    answer: "Prisen avhenger av antall ansatte og kompleksiteten i lønnskjøringen (f.eks. mye overtid/tillegg). Kontakt oss for en uforpliktende prat og et tilbud."
  }
];

export function LonnPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- SCHEMA MARKUP ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Lønnstjenester og HR-støtte",
        "provider": {
          "@type": "AccountingService",
          "name": "Averdi",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Finnmark",
            "addressCountry": "NO"
          }
        },
        "description": "Komplette lønnstjenester for bedrifter i Nord-Norge. A-melding, reiseregninger, sykepenger og HR-rådgivning med fokus på lokale regelverk.",
        "areaServed": ["Finnmark", "Nord-Troms", "Norge"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Lønnstjenester",
          "itemListElement": lonnServicesData.map(s => ({
             "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Lønnstjenester i Nord | A-melding, Reiseregning & HR | Averdi</title>
        <meta name="description" content="Vi sikrer korrekt lønn til rett tid for din bedrift i Nord-Norge. Vi er eksperter på lokale regler, digitale systemer og HR-støtte. Snakk med Ingvald." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="bg-white">
        
        {/* --- HERO SECTION --- */}
        {/* Adjusted padding for more compact large screen view (lg:pb-20 instead of 32) */}
        <section className="relative overflow-hidden bg-slate-900 lg:bg-slate-50 pt-8 pb-20 lg:pt-12 lg:pb-20">

          {/* BACKGROUNDS */}
          <div className="absolute inset-0 z-0">

            {/* 1. Mobile/Tablet (< 1024px): Full Background Image with Overlay */}
            <div className="absolute inset-0 lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
                alt="Lønn og HR"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
            </div>

            {/* 2. Desktop (>= 1024px): Clean Background with Blobs */}
            <div className="hidden lg:block absolute inset-0">
               <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-[#E86C1F]/10 rounded-full blur-[100px] opacity-70"></div>
               <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#F4B223]/10 rounded-full blur-[100px] opacity-70"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

              {/* Text Content */}
              {/* Text color adapts: White on Mobile (Dark BG) -> Slate on Desktop (Light BG) */}
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

                {/* Badge/Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 lg:bg-[#E86C1F]/10 text-orange-200 lg:text-[#E86C1F] text-sm font-medium mb-4 mt-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 lg:bg-[#E86C1F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400 lg:bg-[#E86C1F]"></span>
                  </span>
                  Lønn & HR
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white lg:text-slate-900 mb-6">
                  Korrekt lønn, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">hver eneste gang.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-200 lg:text-slate-600 mb-8 leading-relaxed">
                  Vi tar ansvaret for at dine ansatte får riktig lønn til rett tid. Slipp bekymringer for A-melding, reiseregninger og kompliserte regelverk i nord.
                </p>

                {/* Info Box - Adapted for contrast */}
                <div className="space-y-4 text-base text-slate-200 lg:text-slate-600 mb-10 leading-relaxed bg-white/10 lg:bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 lg:border-[#E86C1F]/10 shadow-sm">
                  <p>
                    <strong>Riktig lønn</strong> er grunnlaget for gode arbeidsforhold.
                  </p>
                  <p>
                    Med Averdi får du tilgang til moderne systemer for <strong className="text-white lg:text-slate-900">A-melding, reiseregninger og sykepenger</strong>. Vi reduserer administrasjonstiden og sikrer korrekt utbetaling.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/kontakt')}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] text-white hover:shadow-lg hover:shadow-[#E86C1F]/30 hover:-translate-y-0.5 h-12 px-8"
                  >
                    Snakk med en lønnsekspert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => document.getElementById('tjenester')?.scrollIntoView({behavior: 'smooth'})}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white/20 lg:border-[#E86C1F]/20 bg-white/10 lg:bg-white/50 text-white lg:text-slate-600 backdrop-blur-sm hover:bg-white/20 lg:hover:bg-white/80 hover:text-white lg:hover:text-[#E86C1F] h-12 px-8"
                  >
                    Se våre tjenester
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 lg:text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 lg:text-green-600" />
                    <span>Automatisk A-melding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 lg:text-green-600" />
                    <span>Full oversikt</span>
                  </div>
                </div>
              </div>

              {/* Image Content - Hidden on Mobile (< 1024px), Visible on Desktop */}
              <div className="hidden lg:flex relative h-full items-center justify-center">
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none group">
                  {/* Decorative blob behind image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#E86C1F]/20 to-[#F4B223]/20 rounded-full blur-2xl -z-10 transition-all duration-700 group-hover:blur-3xl"></div>

                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
                    alt="Lønn og HR"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/50 transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Floating Card: Status */}
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#E86C1F]/10 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#E86C1F]/10 p-2 rounded-lg text-[#E86C1F]">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Effekt</p>
                        <p className="text-sm font-bold text-slate-900">Nøyaktig utbetaling</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES --- */}
        <section id="tjenester" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                En enklere hverdag for deg og dine ansatte
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vi tilbyr en komplett portefølje av tjenester innen lønn og personal. Klikk deg gjennom fanene for å se hva vi kan hjelpe deg med.
              </p>
            </div>
            
            <FeatureTabs items={lonnServicesData} themeColor="#E86C1F" /> 
          </div>
        </section>

        {/* --- EXPERTS & SALES PITCH SECTION (50/50 Split) --- */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch min-h-[600px]">
              
              {/* --- LEFT SIDE: SplitProfileCard (50% WIDTH) --- */}
              <div className="w-full h-full flex flex-col">
                <SplitProfileCard
                  name="Ingvald"
                  surname="Laiti"
                  role="Daglig Leder / Statsaut. Regnskapsfører"
                  colorTheme="orange"
                  imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                  quote="Tallene forteller historien om din bedrifts helse. Min jobb er å hjelpe deg å skrive neste kapittel, med fokus på vekst og trygghet."
                  socialLinks={{
                    home: "",
                    email: "ingvald.laiti@averdi.no",
                    phone: "90767993"
                  }}
                />
              </div>

              {/* --- RIGHT SIDE: SALES PITCH --- */}
              <div className="flex flex-col justify-center lg:pl-8 py-8 lg:py-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#E86C1F] text-sm font-bold mb-6 border border-orange-200 w-fit">
                  <TrendingUp className="w-4 h-4" />
                  Systemer & Rådgivning
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Fra kassaapparat til <br/>
                  <span className="text-[#E86C1F]">lønnskonto.</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Å drive butikk eller bedrift handler om mange bevegelige deler. Hvordan skal kassa settes opp for å håndtere kontantsalg korrekt? Hvordan påvirker firmabilen skatten til de ansatte?
                  Vi hjelper deg å koble systemene sammen, fra salget slås inn til lønna står på konto.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Butikk & Kontant</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Vi hjelper deg med oppsett av systemer som <strong>Finago</strong> og integrasjon mot <strong>PowerOffice Go</strong>. Slik sikrer vi at kontantsalg og dagsoppgjør flyter automatisk.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg h-fit">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Lønnsregulativ & Bil</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Firmabil, diett eller komplekse tillegg? Vi har full kontroll på lønnsregulativet, slik at skatt og feriepenger alltid blir riktig beregnet.
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/kontakt')}
                  className="inline-flex items-center gap-2 text-[#E86C1F] font-bold text-lg hover:gap-3 transition-all group w-fit"
                >
                  Snakk med oss om systemer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Spørsmål om lønn?</h2>
              <p className="text-slate-600 mt-2">Her er noen av de vanligste spørsmålene vi får.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-200/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 bg-[#E86C1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Klar til å sette bort lønnskjøringen?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10">
              La oss ta en prat om dine behov. Vi finner en løsning som passer din bedrift, slik at du kan fokusere på det du er best på.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/kontakt')}
                className="px-8 py-4 bg-white text-[#E86C1F] rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg"
              >
                Kontakt oss i dag
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}