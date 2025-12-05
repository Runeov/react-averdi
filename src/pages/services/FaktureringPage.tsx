import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Home,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { FeatureTabs, type FeatureTabItem } from '../../components/ui/FeatureTabs';

// Assets
import fakturaIcon from '../../assets/faktura.avif';
import regnskapIcon from '../../assets/regnskap.avif'; // Using as fallback/variety

// --- COMPONENT: SplitProfileCard (Full Width Version) ---
const SplitProfileCard = ({
  name = "Navn",
  surname = "Etternavn",
  role = "Rolle",
  quote = "Quote goes here.",
  imageUrl = "https://placehold.co/1200x600/e2e8f0/1e293b?text=Profile", // Widescreen placeholder
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
    // Container set to 100% width, min-height adjusted for banner look
    <div className="group relative w-full min-h-[500px] lg:min-h-[550px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      {/* Font Injection for Raleway */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Skewed Image Section - Adjusted for Full Width (Less skew width, more content space) */}
      <div className="absolute top-0 left-0 w-[45%] h-full overflow-hidden z-10 -skew-x-[12deg] origin-top-left bg-gray-200">
        <img 
          src={imageError ? "https://placehold.co/1200x600/e2e8f0/1e293b?text=Profile" : imageUrl}
          alt={`${name} ${surname}`}
          onError={() => setImageError(true)}
          className="w-[150%] h-full object-cover relative -left-[20%] skew-x-[12deg] scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-0 right-0 w-[5px] h-full bg-black/10 z-20" aria-hidden="true" />
      </div>

      {/* Shadow Element */}
      <div className="absolute top-0 left-0 h-full w-[35%] bg-black/20 -skew-x-[15deg] shadow-[15px_0_25px_rgba(0,0,0,0.7)] pointer-events-none z-0 transform transition-all duration-500 group-hover:-translate-x-2" />

      {/* Content Section - Occupies the right 55-60% */}
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

      {/* Bottom Color Bar */}
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
        <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-50">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#E86C1F]/10 blur-3xl opacity-70"></div>
             <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#F4B223]/10 blur-3xl opacity-60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 bg-[#E86C1F]/10 text-[#E86C1F] rounded-full text-sm font-bold mb-6">
                Fakturering & Likviditet
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Bedre likviditet, <br/>
                <span className="text-[#E86C1F]">mindre bekymring.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Vi hjelper deg å få pengene inn på konto. Med automatiserte rutiner for fakturering og purring sikrer vi at du får betalt for jobben du gjør.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/kontakt')} className="px-8 py-4 bg-[#E86C1F] hover:bg-[#d65f18] text-white rounded-full font-bold transition-all shadow-lg shadow-orange-500/20">
                  Få hjelp med fakturering
                </button>
                <button onClick={() => document.getElementById('tjenester')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 hover:border-[#E86C1F] hover:text-[#E86C1F] rounded-full font-bold transition-all">
                  Se våre løsninger
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES --- */}
        <section id="tjenester" className="py-24 bg-white">
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
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Wrapper allows full width usage */}
            <div className="w-full shadow-2xl rounded-sm">
              <SplitProfileCard
                name="Ingvald"
                surname="Laiti"
                role="Daglig Leder / Statsaut. Regnskapsfører"
                colorTheme="orange"
                // Using a slightly wider crop or professional office shot if available
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
        <section className="py-20 bg-white">
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
        <section className="py-24 bg-[#E86C1F] text-white">
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