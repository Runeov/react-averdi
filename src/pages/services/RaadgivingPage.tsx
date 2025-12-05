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
import raadgivingIcon from '../../assets/raadgiving.avif';
import regnskapIcon from '../../assets/regnskap.avif';

// --- COMPONENT: SplitProfileCard (Flexible Grid Version) ---
const SplitProfileCard = ({
  name = "Navn",
  surname = "Etternavn",
  role = "Rolle",
  quote = "Quote goes here.",
  imageUrl = "https://placehold.co/800x1000/e2e8f0/1e293b?text=Profile",
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
    <div className="group relative w-full h-full min-h-[450px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Skewed Image Section */}
      <div className="absolute top-0 left-0 w-[55%] h-full overflow-hidden z-10 -skew-x-[15deg] origin-top-left bg-gray-200">
        <img 
          src={imageError ? "https://placehold.co/800x1000/e2e8f0/1e293b?text=Profile" : imageUrl}
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

          <p className="text-sm lg:text-base text-gray-600 leading-relaxed opacity-80 mb-4 line-clamp-5">
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

// --- DATA: Services Tabs ---
const raadgivingServicesData: FeatureTabItem[] = [
  {
    id: "strategi",
    icon: raadgivingIcon,
    title: "Strategisk Rådgivning",
    shortDesc: "Planlegg for vekst",
    content: "Vi hjelper deg å løfte blikket fra den daglige driften. Sammen legger vi en strategi for hvordan bedriften din skal vokse, øke lønnsomheten og nå sine mål. Vi er din sparringspartner i viktige beslutninger.",
    bullets: [
      "Forretningsutvikling",
      "Lønnsomhetsanalyser",
      "Strategisk planlegging",
      "Styreadbeid og ledelse"
    ],
    link: "/kontakt",
    linkText: "Book et strategimøte"
  },
  {
    id: "grunder",
    icon: regnskapIcon,
    title: "Starte bedrift?",
    shortDesc: "Gründerhjelpen",
    content: "Å starte egen bedrift er spennende, men det er mange fallgruver. Vi hjelper deg med valg av selskapsform, registrering i Brønnøysundregistrene, oppsett av rutiner og budsjetter for oppstartsfasen.",
    bullets: [
      "Valg av selskapsform (AS vs ENK)",
      "Stiftelsesdokumenter",
      "Forretningsplan",
      "Søknad om støtte (Sametinget/Innovasjon Norge)"
    ],
    link: "/kontakt",
    linkText: "Få hjelp til oppstart"
  },
  {
    id: "skatt",
    icon: raadgivingIcon,
    title: "Skatt & Avgift",
    shortDesc: "Optimalisering",
    content: "Skattereglene endres stadig, og det er lett å betale for mye – eller gjøre feil. Vi sikrer at du benytter deg av de fradragene du har krav på, og at selskapsstrukturen din er optimalisert for skatt.",
    bullets: [
      "Skattemelding for næringsdrivende",
      "Utbytteberegning",
      "Generasjonsskifte",
      "MVA-rådgivning"
    ],
    link: "/kontakt",
    linkText: "Snakk med oss om skatt"
  }
];

// --- DATA: FAQs ---
const faqs = [
  {
    question: "Hva koster en rådgivningstime?",
    answer: "Vi tilbyr både timebasert rådgivning og faste pakker. For gründere har vi ofte egne oppstartspakker til redusert pris. Kontakt oss for et uforpliktende tilbud tilpasset ditt behov."
  },
  {
    question: "Kan dere hjelpe med søknader til Sametinget?",
    answer: "Ja, vi har spesialkompetanse på tilskuddsordninger i Nord-Norge, inkludert Sametinget og Innovasjon Norge. Vi hjelper deg å skrive gode søknader og sette opp budsjetter som oppfyller kravene."
  },
  {
    question: "Bør jeg velge AS eller Enkeltpersonforetak?",
    answer: "Det avhenger av risiko, omsetning og ambisjoner. Et AS gir bedre sikkerhet for privatøkonomien og mulighet for ansettelser, mens et ENK er enklere å administrere i starten. Vi hjelper deg å velge riktig."
  }
];

export function RaadgivingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- SCHEMA MARKUP ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Bedriftsrådgivning",
        "provider": {
          "@type": "AccountingService",
          "name": "Averdi",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Finnmark",
            "addressCountry": "NO"
          }
        },
        "description": "Strategisk rådgivning for bedrifter i Nord-Norge. Vi bistår med oppstart, skatt, vekst og styrearbeid.",
        "areaServed": ["Finnmark", "Nord-Troms", "Norge"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Rådgivningstjenester",
          "itemListElement": raadgivingServicesData.map(s => ({
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
        <title>Rådgivning & Gründerhjelp | Strategi & Skatt | Averdi</title>
        <meta name="description" content="Skap vekst i din bedrift med Averdi. Vi tilbyr strategisk rådgivning, gründerhjelp og bistand med skatt og avgift. Møt våre eksperter Ingvald og Jan-Atle." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="bg-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-50 text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {/* Using a meeting/advisory image - Replace with actual image if you have one */}
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Strategisk Rådgivning" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
             <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#E86C1F]/20 blur-3xl opacity-50"></div>
             <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#F4B223]/20 blur-3xl opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 bg-[#E86C1F]/20 text-white border border-[#E86C1F] rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                Rådgivning & Utvikling
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Fra tall til <br/>
                <span className="text-[#E86C1F]">strategisk handling.</span>
              </h1>
              <p className="text-xl text-slate-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Vi hjelper deg å se mulighetene bak tallene. Enten du skal starte opp, vokse, eller trenger en sparringspartner i vanskelige tider, står vi klare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/kontakt')} className="px-8 py-4 bg-[#E86C1F] hover:bg-[#d65f18] text-white rounded-full font-bold transition-all shadow-lg shadow-orange-500/20 border border-transparent">
                  Book et møte
                </button>
                <button onClick={() => document.getElementById('eksperter')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/50 hover:border-white rounded-full font-bold transition-all backdrop-blur-sm">
                  Møt våre rådgivere
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
                Vi hjelper deg å nå målene dine
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vår kompetanse strekker seg langt utover debet og kredit. Se hvordan vi kan bistå din bedrift.
              </p>
            </div>
            
            <FeatureTabs items={raadgivingServicesData} themeColor="#E86C1F" /> 
          </div>
        </section>

        {/* --- EXPERTS SECTION (2 COLUMNS) --- */}
        <section id="eksperter" className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Møt våre eksperter</h2>
              <p className="text-slate-600 mt-2">Dine sparringspartnere for vekst og utvikling.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              
              {/* --- EXPERT 1: Ingvald --- */}
              <div className="h-full">
                <SplitProfileCard
                  name="Ingvald"
                  surname="Laiti"
                  role="Daglig Leder / Statsaut. Regnskapsfører"
                  colorTheme="orange"
                  imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                  quote="Tall er ferskvare. Min jobb er å sikre at du forstår hva de betyr for din bedrift i dag, og i morgen."
                  socialLinks={{
                    home: "",
                    email: "ingvald.laiti@averdi.no",
                    phone: "90767993"
                  }}
                />
              </div>

              {/* --- EXPERT 2: Jan-Atle --- */}
              <div className="h-full">
                <SplitProfileCard
                  name="Jan-Atle"
                  surname=" "
                  role="Senior Bedriftsrådgiver"
                  colorTheme="blue" 
                  // Placeholder image for Jan-Atle
                  imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  quote="Gode beslutninger krever godt grunnlag. Jeg hjelper deg med strategi, forretningsutvikling og de store linjene."
                  socialLinks={{
                    home: "",
                    email: "post@averdi.no", // Generic until specific email is known
                    phone: "78445050"
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Spørsmål om rådgivning?</h2>
              <p className="text-slate-600 mt-2">Noen vanlige spørsmålene vi får fra våre kunder.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Klar for å ta neste steg?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10">
              Uansett om du er i startgropen eller planlegger vekst, har vi kompetansen du trenger. La oss ta en uforpliktende prat.
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