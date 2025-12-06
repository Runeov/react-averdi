import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Home,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  LineChart
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
        {/* Adjusted padding for more compact large screen view (lg:pb-20 instead of 32) */}
        <section className="relative overflow-hidden bg-slate-900 lg:bg-slate-50 pt-8 pb-20 lg:pt-12 lg:pb-20">

          {/* BACKGROUNDS */}
          <div className="absolute inset-0 z-0">

            {/* 1. Mobile/Tablet (< 1024px): Full Background Image with Overlay */}
            <div className="absolute inset-0 lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Rådgivning & Utvikling"
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
                  Rådgivning & Utvikling
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white lg:text-slate-900 mb-6">
                  Fra tall til <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">strategisk handling.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-200 lg:text-slate-600 mb-8 leading-relaxed">
                  Vi hjelper deg å se mulighetene bak tallene. Enten du skal starte opp, vokse, eller trenger en sparringspartner i vanskelige tider, står vi klare.
                </p>

                {/* Info Box - Adapted for contrast */}
                <div className="space-y-4 text-base text-slate-200 lg:text-slate-600 mb-10 leading-relaxed bg-white/10 lg:bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 lg:border-[#E86C1F]/10 shadow-sm">
                  <p>
                    <strong>Strategisk rådgivning</strong> er grunnlaget for gode beslutninger.
                  </p>
                  <p>
                    Med Averdi får du tilgang til ekspertise innen <strong className="text-white lg:text-slate-900">forretningsutvikling, skatteoptimalisering og vekststrategier</strong>. Vi hjelper deg å navigere i komplekse regler og finne de beste løsningene.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/kontakt')}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] text-white hover:shadow-lg hover:shadow-[#E86C1F]/30 hover:-translate-y-0.5 h-12 px-8"
                  >
                    Snakk med en rådgiver
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
                    <span>Strategisk planlegging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 lg:text-green-600" />
                    <span>Ekspertise i nord</span>
                  </div>
                </div>
              </div>

              {/* Image Content - Hidden on Mobile (< 1024px), Visible on Desktop */}
              <div className="hidden lg:flex relative h-full items-center justify-center">
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none group">
                  {/* Decorative blob behind image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#E86C1F]/20 to-[#F4B223]/20 rounded-full blur-2xl -z-10 transition-all duration-700 group-hover:blur-3xl"></div>

                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Rådgivning & Utvikling"
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
                        <p className="text-sm font-bold text-slate-900">Strategisk vekst</p>
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
                En enklere hverdag for deg og din bedrift
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vår kompetanse strekker seg langt utover debet og kredit. Klikk deg gjennom fanene for å se hva vi kan hjelpe deg med.
              </p>
            </div>

            <FeatureTabs items={raadgivingServicesData} themeColor="#E86C1F" />
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
                  quote="Tall er ferskvare. Min jobb er å sikre at du forstår hva de betyr for din bedrift i dag, og i morgen."
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
                  Verdiskapning i fokus
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Rådgivning er mer enn <br/>
                  <span className="text-[#E86C1F]">bare lovpålagt rapportering.</span>
                </h2>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Mange ser på rådgivning som en kjedelig nødvendighet, men for oss er det fundamentet for gode beslutninger. Ingvald er ikke bare din rådgiver – han er din sparringspartner.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Strategisk Rådgivning</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Vi hjelper deg å tolke tallene slik at du kan styre bedriften mot økt lønnsomhet og vekst. Hva tjener du egentlig penger på?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg h-fit">
                      <LineChart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Full Oversikt</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Få kontroll på likviditet og nøkkeltall. Vi sørger for at du alltid har et oppdatert styringsgrunnlag tilgjengelig.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/kontakt')}
                  className="inline-flex items-center gap-2 text-[#E86C1F] font-bold text-lg hover:gap-3 transition-all group w-fit"
                >
                  Book et strategimøte med Ingvald
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
              <h2 className="text-3xl font-bold text-slate-900">Spørsmål om rådgivning?</h2>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Klar til å ta strategiske beslutninger?</h2>
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