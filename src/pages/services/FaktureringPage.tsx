import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Home,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import { FeatureTabs, type FeatureTabItem } from '../../components/ui/FeatureTabs';

// Assets
import fakturaIcon from '../../assets/faktura.avif';
import regnskapIcon from '../../assets/regnskap.avif'; 

// --- COMPONENT: SplitProfileCard (Full Width Version) ---
const SplitProfileCard = ({
  name = "Navn",
  surname = "Etternavn",
  role = "Rolle",
  quote = "Quote goes here.",
  imageUrl = "https://placehold.co/1200x600/e2e8f0/1e293b?text=Profile",
  colorTheme = "orange",
  socialLinks = { home: "", email: "", phone: "" }
}) => {
  const [imageError, setImageError] = useState(false);

  const themes: Record<string, { bar: string; textHigh: string }> = {
    blue: { bar: "bg-[#20638f]", textHigh: "text-[#20638f]" },
    red: { bar: "bg-[#962d22]", textHigh: "text-[#962d22]" },
    yellow: { bar: "bg-[#bf6516]", textHigh: "text-[#bf6516]" },
    orange: { bar: "bg-[#E86C1F]", textHigh: "text-[#E86C1F]" }
  };

  const currentTheme = themes[colorTheme] || themes.orange;

  return (
    <div className="group relative w-full min-h-[500px] lg:min-h-[550px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      <div className="absolute top-0 left-0 w-[45%] h-full overflow-hidden z-10 -skew-x-[12deg] origin-top-left bg-gray-200">
        <img 
          src={imageError ? "https://placehold.co/1200x600/e2e8f0/1e293b?text=Profile" : imageUrl}
          alt={`${name} ${surname}`}
          onError={() => setImageError(true)}
          className="w-[150%] h-full object-cover relative -left-[20%] skew-x-[12deg] scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-0 right-0 w-[5px] h-full bg-black/10 z-20" aria-hidden="true" />
      </div>

      <div className="absolute top-0 left-0 h-full w-[35%] bg-black/20 -skew-x-[15deg] shadow-[15px_0_25px_rgba(0,0,0,0.7)] pointer-events-none z-0 transform transition-all duration-500 group-hover:-translate-x-2" />

      <div className="absolute top-0 right-0 w-[60%] h-full z-20 flex flex-col justify-center p-8 lg:p-16 pb-20 font-raleway text-right">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <h2 className="text-3xl lg:text-5xl font-light uppercase border-b border-black/10 pb-4 mb-6 text-gray-800">
            {name} <span className={`font-extrabold ${currentTheme.textHigh}`}>{surname}</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed opacity-80 mb-8 max-w-3xl ml-auto">
            {quote}
          </p>
          <div className="flex justify-end space-x-6 items-center">
            {socialLinks.home && (
              <a href={socialLinks.home} aria-label="Visit Website" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Home size={28} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} aria-label="Send Email" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Mail size={28} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.phone && (
              <a href={`tel:${socialLinks.phone}`} aria-label="Call" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Phone size={28} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 w-full p-4 px-12 text-right text-white text-base italic tracking-wide font-raleway font-medium z-30 transition-colors duration-300 ${currentTheme.bar}`}>
        {role}
      </div>
    </div>
  );
};

// --- DATA: Services Tabs ---
const fakturaServicesData: FeatureTabItem[] = [
  {
    id: "fakturering",
    icon: fakturaIcon,
    title: "Fakturering & Oppfølging",
    shortDesc: "Få betalt i tide",
    content: "Vi sørger for at fakturaene dine går ut automatisk og korrekt. Ved å bruke moderne løsninger som EHF og Vipps-faktura, gjør vi det enklere for kundene dine å betale, noe som reduserer tiden du må vente på pengene.",
    bullets: [
      "Utsendelse via EHF, eFaktura eller e-post",
      "Automatiske betalingspåminnelser",
      "Full oversikt over utestående fordringer",
      "Integrasjon mot bank"
    ],
    link: "/kontakt",
    linkText: "Få hjelp med fakturering"
  },
  {
    id: "inkasso",
    icon: regnskapIcon,
    title: "Purring & Inkasso",
    shortDesc: "Profesjonell innfordring",
    content: "Det er krevende å følge opp kunder som ikke betaler. Vi håndterer purreprosessen profesjonelt og effektivt, og sender saker videre til inkasso ved behov, slik at du slipper den ubehagelige jobben.",
    bullets: [
      "Systematisk purreprosess",
      "Inkassovarsel iht. lovverk",
      "Sømløs overføring til inkassopartner",
      "Bevarer kunderelasjonen"
    ],
    link: "/kontakt",
    linkText: "Kontakt oss om innfordring"
  },
  {
    id: "likviditet",
    icon: fakturaIcon,
    title: "Likviditetsstyring",
    shortDesc: "Styrk betalingsevnen",
    content: "God likviditet er avgjørende for bedriftens overlevelse. Vi hjelper deg å sette opp budsjetter og prognoser, slik at du vet nøyaktig når du har penger på konto og når det strammer seg til.",
    bullets: [
      "Likviditetsbudsjett",
      "Langsiktige prognoser",
      "Rådgivning for bedre cash flow",
      "Rapportering til styret"
    ],
    link: "/kontakt",
    linkText: "Snakk med oss om likviditet"
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "Kan dere sende fakturaer direkte fra mitt system?",
    answer: "Ja, vi jobber i skybaserte systemer som Tripletex og PowerOffice Go. Vi kan enten sende fakturaene for deg, eller sette opp systemet slik at du gjør det enkelt selv med et par tastetrykk."
  },
  {
    question: "Hva skjer hvis kunden ikke betaler?",
    answer: "Vi har automatiske rutiner for dette. Først sendes en vennlig påminnelse, deretter purring/inkassovarsel. Om betalingen fortsatt uteblir, overføres saken sømløst til vår inkassopartner uten at du trenger å løfte en finger."
  },
  {
    question: "Støtter dere EHF-faktura?",
    answer: "Selvsagt. EHF er standarden for fakturering til bedrifter og det offentlige. Vi sikrer at du er rigget for å sende og motta EHF, noe som sikrer raskere behandling og betaling."
  }
];

export function FaktureringPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- SCHEMA MARKUP ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Fakturering og Innfordring",
        "provider": {
          "@type": "AccountingService",
          "name": "Averdi",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Finnmark",
            "addressCountry": "NO"
          }
        },
        "description": "Profesjonell fakturering, purring og likviditetsstyring for bedrifter i Nord-Norge.",
        "areaServed": ["Finnmark", "Nord-Troms", "Norge"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Faktureringstjenester",
          "itemListElement": fakturaServicesData.map(s => ({
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
        <title>Fakturering & Inkasso | Bedre Likviditet | Averdi</title>
        <meta name="description" content="Få betalt raskere med våre effektive rutiner for fakturering og purring. Vi hjelper deg med EHF, likviditetsstyring og oppfølging av kunder." />
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
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920" 
                alt="Fakturering Background" 
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
                  Fakturering & Likviditet
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white lg:text-slate-900 mb-6">
                  Bedre likviditet, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">mindre bekymring.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-200 lg:text-slate-600 mb-8 leading-relaxed">
                  Vi hjelper deg å få pengene inn på konto. Effektive rutiner for fakturering og purring sikrer at du får betalt for jobben du gjør.
                </p>

                {/* Info Box - Adapted for contrast */}
                <div className="space-y-4 text-base text-slate-200 lg:text-slate-600 mb-10 leading-relaxed bg-white/10 lg:bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 lg:border-[#E86C1F]/10 shadow-sm">
                  <p>
                    <strong>Penger på konto</strong> er bedriftens oksygen. 
                  </p>
                  <p>
                    Med Averdi får du tilgang til moderne systemer for <strong className="text-white lg:text-slate-900">EHF, Vipps-faktura og automatisk purring</strong>. Vi reduserer administrasjonstiden og øker sannsynligheten for raskt oppgjør.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/kontakt')}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] text-white hover:shadow-lg hover:shadow-[#E86C1F]/30 hover:-translate-y-0.5 h-12 px-8"
                  >
                    Få hjelp med fakturering
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => document.getElementById('tjenester')?.scrollIntoView({behavior: 'smooth'})}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white/20 lg:border-[#E86C1F]/20 bg-white/10 lg:bg-white/50 text-white lg:text-slate-600 backdrop-blur-sm hover:bg-white/20 lg:hover:bg-white/80 hover:text-white lg:hover:text-[#E86C1F] h-12 px-8"
                  >
                    Se våre løsninger
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 lg:text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 lg:text-green-600" />
                    <span>Automatisk utsending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 lg:text-green-600" />
                    <span>Full kontroll</span>
                  </div>
                </div>
              </div>

              {/* Image Content - Hidden on Mobile (< 1024px), Visible on Desktop */}
              <div className="hidden lg:flex relative h-full items-center justify-center">
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none group">
                  {/* Decorative blob behind image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#E86C1F]/20 to-[#F4B223]/20 rounded-full blur-2xl -z-10 transition-all duration-700 group-hover:blur-3xl"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920" 
                    alt="Fakturering og Likviditet" 
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
                        <p className="text-sm font-bold text-slate-900">Raskere innbetaling</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES --- */}
        {/* Reduced py-24 to py-16 for compactness */}
        <section id="tjenester" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Effektive pengerutiner
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Likviditet er ferskvare. Vi setter opp systemer som gjør veien fra utført arbeid til penger på konto så kort som mulig.
              </p>
            </div>
            
            <FeatureTabs items={fakturaServicesData} themeColor="#E86C1F" /> 
          </div>
        </section>

        {/* --- EXPERT SECTION (100% WIDTH CARD) --- */}
        {/* Reduced py-24 to py-16 */}
        <section className="py-16 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Wrapper allows full width usage */}
            <div className="w-full shadow-2xl rounded-sm">
              <SplitProfileCard
                name="Ingvald"
                surname="Laiti"
                role="Daglig Leder / Statsaut. Regnskapsfører"
                colorTheme="orange"
                imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                quote="Det handler ikke bare om å sende en faktura. Det handler om å bygge rutiner som sikrer at bedriften din alltid har midlene den trenger for å vokse."
                socialLinks={{
                  home: "",
                  email: "ingvald.laiti@averdi.no",
                  phone: "90767993"
                }}
              />
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        {/* Reduced py-20 to py-16 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Spørsmål om fakturering?</h2>
              <p className="text-slate-600 mt-2">Vi gir deg svarene du trenger for en bedre kontantstrøm.</p>
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
        {/* Reduced py-24 to py-16 */}
        <section className="py-16 bg-[#E86C1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Lei av å vente på betaling?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10">
              La oss strømlinjeforme faktureringen din. Ta kontakt for en uforpliktende prat om hvordan vi kan bedre din likviditet.
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