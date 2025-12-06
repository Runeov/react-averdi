import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Landmark,
  ChevronDown,
  Mail,
  Phone,
  Home,
  TrendingUp,
  Lightbulb,
  LineChart
} from 'lucide-react';
import { useState } from 'react';

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

// --- MOCK DATA FOR ARTICLES ---
const relatedArticles = [
  {
    id: 1,
    title: "Slik påvirker Tiltakssonen din arbeidsgiveravgift i 2025",
    excerpt: "Driver du bedrift i Finnmark eller Nord-Troms? Her er alt du må vite om 0-sats og rapportering.",
    date: "15. jan 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    slug: "/kunnskapsbank/bedrifter/tiltakssonen/arbeidsgiveravgift"
  },
  {
    id: 2,
    title: "Krav til prosjektregnskap for Sametinget",
    excerpt: "Har du fått innvilget støtte? Unngå at midlene trekkes tilbake på grunn av manglende rapportering.",
    date: "03. feb 2025",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    slug: "/kunnskapsbank/organisasjoner/sametinget/prosjektregnskap"
  },
  {
    id: 3,
    title: "Årsoppgjør: Huskeliste for småbedrifter",
    excerpt: "En enkel sjekkliste for deg som vil være godt forberedt til årsoppgjøret.",
    date: "10. feb 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    slug: "/aktuelt/arsoppgjor-huskeliste"
  }
];

// --- FAQ DATA ---
const faqs = [
  {
    question: "Hvorfor velge en regnskapsfører i Finnmark?",
    answer: "En lokal regnskapsfører kjenner særreglene i tiltakssonen, inkludert 0% arbeidsgiveravgift, finnmarksfradrag og spesielle avskrivningsregler. Vi sikrer at du utnytter alle lokale fordeler."
  },
  {
    question: "Kan dere hjelpe med rapportering til Sametinget?",
    answer: "Ja, vi er spesialister på prosjektregnskap for Sametinget. Vi kjenner kravene til rapportering, revisjon og dokumentasjon for å sikre at du beholder tildelte midler."
  },
  {
    question: "Hvilke regnskapssystemer bruker dere?",
    answer: "Vi bruker moderne, skybaserte systemer som PowerOffice Go og Tripletex. Dette gir deg full oversikt i sanntid, uansett hvor du befinner deg."
  },
  {
    question: "Hva koster det å bruke Averdi?",
    answer: "Vi tilbyr både fastpris og timebaserte avtaler, avhengig av ditt behov og volum. Kontakt oss for et uforpliktende tilbud tilpasset din bedrift."
  }
];

export function RegnskapPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- SCHEMA MARKUP ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Regnskapstjenester Nord-Norge",
        "provider": {
          "@type": "AccountingService",
          "name": "Averdi",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Finnmark",
            "addressCountry": "NO"
          }
        },
        "description": "Statsautorisert regnskapsføring spesialisert på tiltakssonen, Sametinget og nordnorsk næringsliv.",
        "areaServed": ["Finnmark", "Nord-Troms", "Norge"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Regnskapstjenester",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Løpende bokføring" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prosjektregnskap Sametinget" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Årsoppgjør" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Regnskapsfører i Finnmark | Spesialist på Tiltakssonen & Sametinget | Averdi</title>
        <meta name="description" content="Averdi tilbyr statsautorisert regnskap for bedrifter i Nord-Norge. Vi er eksperter på Sametinget-rapportering, tiltakssonen og effektiv digital bokføring." />
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
                alt="Regnskap i Nord"
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
                  Regnskap & Økonomi
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white lg:text-slate-900 mb-6">
                  Regnskap som forstår <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">Nord-Norge.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-200 lg:text-slate-600 mb-8 leading-relaxed">
                  Vi kombinerer lokal ekspertise om tiltakssonen og Sametinget med moderne skybaserte systemer. Få ro i sjelen og full oversikt over bedriftens økonomi.
                </p>

                {/* Info Box - Adapted for contrast */}
                <div className="space-y-4 text-base text-slate-200 lg:text-slate-600 mb-10 leading-relaxed bg-white/10 lg:bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 lg:border-[#E86C1F]/10 shadow-sm">
                  <p>
                    <strong>Statsautorisert regnskap</strong> er grunnlaget for gode beslutninger.
                  </p>
                  <p>
                    Med Averdi får du tilgang til ekspertise innen <strong className="text-white lg:text-slate-900">tiltakssonen, Sametinget og moderne digitale løsninger</strong>. Vi hjelper deg å navigere i komplekse regler og finne de beste løsningene.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/kontakt')}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] text-white hover:shadow-lg hover:shadow-[#E86C1F]/30 hover:-translate-y-0.5 h-12 px-8"
                  >
                    Få et uforpliktende tilbud
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => document.getElementById('fordeler')?.scrollIntoView({behavior: 'smooth'})}
                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white/20 lg:border-[#E86C1F]/20 bg-white/10 lg:bg-white/50 text-white lg:text-slate-600 backdrop-blur-sm hover:bg-white/20 lg:hover:bg-white/80 hover:text-white lg:hover:text-[#E86C1F] h-12 px-8"
                  >
                    Se våre tjenester
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 lg:text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 lg:text-green-600" />
                    <span>Statsautorisert trygghet</span>
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
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
                    alt="Regnskap i Nord"
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
                        <p className="text-sm font-bold text-slate-900">Full oversikt</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES --- */}
        <section id="fordeler" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                En enklere hverdag for deg og din bedrift
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vi skreddersyr oppdraget etter dine behov. Klikk deg gjennom fanene for å se hva vi kan hjelpe deg med.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Alt du trenger for en ryddig økonomi
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Vi skreddersyr oppdraget etter dine behov. Enten du vil gjøre mye selv i skyen, eller sette bort hele papirmølla til oss.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Løpende regnskap & bokføring", desc: "Digital bilagsflyt og effektiv bokføring." },
                    { title: "Lønnskjøring & A-melding", desc: "Korrekt lønn til rett tid, inkludert alle rapporter." },
                    { title: "Årsoppgjør & Skattemelding", desc: "Vi tar oss av årsoppgjøret og dialog med Altinn." },
                    { title: "Fakturering & Purring", desc: "Sikre likviditeten med gode rutiner for innbetaling." },
                    { title: "Økonomisk Rådgivning", desc: "Strategisk sparringspartner for vekst og utvikling." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#E86C1F] flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    alt="Digitalt Regnskap"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm p-6 text-white">
                    <p className="font-bold text-lg mb-1">Full oversikt – alltid</p>
                    <p className="text-sm text-slate-300">Vi bruker Tripletex, PowerOffice Go og Duett for sømløs samhandling.</p>
                  </div>
                </div>
              </div>
            </div>
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
                  Regnskap er mer enn <br/>
                  <span className="text-[#E86C1F]">bare lovpålagt rapportering.</span>
                </h2>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Mange ser på regnskap som en kjedelig nødvendighet, men for oss er det fundamentet for gode beslutninger. Ingvald er ikke bare din regnskapsfører – han er din sparringspartner.
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
              <h2 className="text-3xl font-bold text-slate-900">Spørsmål om regnskap?</h2>
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

        {/* --- RELATED ARTICLES --- */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-[#E86C1F] font-bold tracking-wider text-sm uppercase">Kunnskapsbanken</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">Siste om regnskap & regler</h2>
              </div>
              <button onClick={() => navigate('/kunnskapsbank')} className="hidden md:flex items-center gap-2 text-slate-600 hover:text-[#E86C1F] font-medium transition-colors">
                Se alle artikler <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <article 
                  key={article.id} 
                  className="group cursor-pointer flex flex-col h-full"
                  onClick={() => navigate(article.slug)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                      Regnskap
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="text-slate-400 text-sm mb-2">{article.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E86C1F] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <span className="text-[#E86C1F] font-bold text-sm flex items-center gap-2 mt-auto">
                      Les artikkelen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 bg-[#E86C1F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Klar for å få full kontroll på økonomien?</h2>
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