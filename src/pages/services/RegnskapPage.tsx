import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Landmark,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

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
        <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920" 
              alt="Regnskap i Nord" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 bg-[#E86C1F]/20 text-[#E86C1F] rounded-full text-sm font-bold mb-6 border border-[#E86C1F]/20">
                Statsautorisert Regnskapsførerselskap
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Regnskap som forstår <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">
                  Nord-Norge
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Vi kombinerer lokal ekspertise om tiltakssonen og Sametinget med moderne skybaserte systemer. 
                Få ro i sjelen og full oversikt over bedriftens økonomi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/kontakt')} className="px-8 py-4 bg-[#E86C1F] hover:bg-[#d65f18] text-white rounded-full font-bold transition-all shadow-lg shadow-orange-500/20">
                  Få et uforpliktende tilbud
                </button>
                <button onClick={() => document.getElementById('fordeler')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all backdrop-blur-sm">
                  Se våre tjenester
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- SPECIALIZATION (Why Averdi?) --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            
            {/* HER ER TEKSTEN DU BA OM: */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Hvorfor velge en lokal partner?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
                Mange regnskapsbyråer kan tall, men vi kan rammebetingelsene dine. 
                Vi er spesialisert på utfordringene og fordelene som gjelder for distrikts-Norge.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Landmark className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sametinget-eksperter</h3>
                <p className="text-slate-600">
                  Vi hjelper organisasjoner og bedrifter med søknader og prosjektrapportering til Sametinget. Vi sikrer at regnskapet oppfyller alle formelle krav.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tiltakssonen</h3>
                <p className="text-slate-600">
                  Vi kan reglene for 0-sats arbeidsgiveravgift, nedskriving av studielån og finnmarksfradrag. Vi passer på at du får alle fordelene du har krav på.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-orange-100 text-[#E86C1F] rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Statsautorisert trygghet</h3>
                <p className="text-slate-600">
                  Som statsautorisert regnskapsførerselskap garanterer vi kvalitet og lovlighet i alle ledd. Sov godt om natten vel vitende om at bøkene er i orden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DETAILED SERVICES LIST (ID: Fordeler) --- */}
        <section id="fordeler" className="py-24 bg-white">
          <div className="container mx-auto px-4">
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

        {/* --- FAQ SECTION --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Ofte stilte spørsmål</h2>
              <p className="text-slate-600 mt-2">Dette lurer mange på om regnskap i nord.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left"
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
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Klar for en enklere hverdag?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10">
              La oss ta en prat om dine behov. Vi gir deg et uforpliktende tilbud tilpasset din bedrift, enten du er liten eller stor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/kontakt')}
                className="px-8 py-4 bg-white text-[#E86C1F] rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg"
              >
                Kontakt oss i dag
              </button>
              <button 
                onClick={() => navigate('/om-oss')}
                className="px-8 py-4 bg-[#E86C1F] border-2 border-white text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
              >
                Les mer om oss
              </button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}