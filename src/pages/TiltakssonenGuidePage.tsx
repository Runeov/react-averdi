import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Building2, Users, FileText, ArrowRight, ExternalLink, Info, Calendar, Scale, HeartHandshake, AlertTriangle, Newspaper, Quote } from 'lucide-react';
import tiltakssonenKart from '../assets/tiltakssonen_norgeskart.avif';
import SEO from '../components/SEO';
import ArbeidsgiveravgiftCalculator from '../components/ArbeidsgiveravgiftCalculator';

// --- DATA OG LOGIKK ---
// Data er nå flyttet til ../data/agaData.ts og håndteres av Calculator-komponenten

const FAQSection = () => {
  const faqs = [
    { question: "Hvilke kommuner er i tiltakssonen (Sone 5)?", answer: "Sone 5 omfatter hele Finnmark fylke samt følgende kommuner i Troms: Karlsøy, Kvænangen, Kåfjord, Lyngen, Nordreisa, Skjervøy og Storfjord. Her er satsen 0%." },
    { question: "Gjelder 800.000-kroners regelen for alle?", answer: "Nei. Regelen om fritak for lønnskostnader under 800 000 kr gjelder KUN for veldedige og allmennyttige organisasjoner, ikke ordinære aksjeselskaper." },
    { question: "Hva menes med 'fribeløp' i sone 1a?", answer: "Fribeløpet er en grense for hvor mye statsstøtte (differansen mellom full og redusert avgift) bedriften kan motta før de må betale full sats. For 2025 er fribeløpet satt til 850 000 kroner per foretak." },
    { question: "Hvordan påvirker EØS-reglene transportbransjen?", answer: "Transportsektoren er unntatt fra det generelle gruppeunntaket. Det betyr at transportbedrifter i utgangspunktet ikke kan bruke redusert sats, med mindre de holder seg innenfor fribeløpet for bagatellmessig støtte." },
  ];

  return (
    <section className="my-16" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Ofte stilte spørsmål</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3" itemProp="name">
              <span className="text-[#E86C1F] mt-1 hidden sm:block">Q:</span>{faq.question}
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-slate-700 leading-relaxed sm:pl-8" itemProp="text">
                <span className="font-semibold text-[#F4B223] hidden sm:inline">A: </span> {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function TiltakssonenGuidePage() {
  const richSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Komplett guide til differensiert arbeidsgiveravgift 2025",
    "description": "Alt om soner, statsstøtteregler, fribeløp og unntak for frivillige organisasjoner.",
    "image": ["https://runeov.github.io/react-averdi/assets/tiltakssonen_kart.jpg"],
    "datePublished": "2025-01-15T08:00:00+01:00",
    "dateModified": new Date().toISOString(),
    "author": { "@type": "Person", "name": "Ingvald Laiti", "url": "https://runeov.github.io/react-averdi/om-oss/ansatte/ingvald-laiti" },
    "publisher": { "@type": "Organization", "name": "Averdi AS", "logo": { "@type": "ImageObject", "url": "https://runeov.github.io/react-averdi/logo_averdi.png" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Hjem",
      "item": "https://runeov.github.io/react-averdi"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Kunnskapsbank",
      "item": "https://runeov.github.io/react-averdi/kunnskapsbank"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "Arbeidsgiveravgift Guide",
      "item": "https://runeov.github.io/react-averdi/kunnskapsbank/arbeidsgiveravgift-guide"
    }]
  };

  return (
    <>
      <SEO 
        title="Differensiert Arbeidsgiveravgift: Komplett Guide 2025" 
        description="Forstå statsstøttereglene, fribeløp, sektorunntak og regler for frivillige organisasjoner. En faglig guide for norske bedrifter." 
        canonical="/kunnskapsbank/arbeidsgiveravgift-guide"
        type="website" 
      />
      
      <script type="application/ld+json">
        {JSON.stringify([richSchemaData, breadcrumbSchema])}
      </script>

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        
        {/* HERO */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16 border-b border-slate-100">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#E86C1F]/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <nav className="mb-8 text-sm"><ol className="flex items-center gap-2 text-slate-500"><li><Link to="/">Hjem</Link></li><li>/</li><li className="text-slate-900 font-semibold">Arbeidsgiveravgift Guide</li></ol></nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E86C1F]/10 text-[#E86C1F] text-sm font-medium mb-6 border border-[#E86C1F]/20">
              <Scale className="w-4 h-4" />
              <span>Faglig dybdeartikkel (2025)</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight">
              Differensiert <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">Arbeidsgiveravgift</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              De fleste vet at satsen varierer fra 0% til 14,1%. Færre kjenner til statsstøttefellene, fribeløpsordningen og særreglene for ideelle organisasjoner.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-5xl">
          
          <article className="prose prose-lg prose-slate max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Det grunnleggende systemet</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Norge er delt inn i ulike soner for arbeidsgiveravgift med satser som varierer fra 0 % i tiltakssonen (Finnmark og Nord-Troms) til 14,1 % i sentrale strøk. Formålet er å kompensere for ulemper ved å drive virksomhet i distriktene.
            </p>
            <p>
              Men systemet er underlagt EØS-avtalens regler om statsstøtte. Det betyr at selv om bedriften din ligger i en sone med lav sats, er det ikke sikkert du kan benytte den fullt ut.
            </p>

            <figure className="my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img src={tiltakssonenKart} alt="Kart over Norge: Grønt område markerer Finnmark og Nord-Troms (Sone 5)" className="w-full h-auto" loading="lazy" />
              <figcaption className="text-center text-sm text-slate-600 p-4 bg-slate-50 border-t border-slate-100 italic">
                Soneinndelingen danner utgangspunktet, men regelverket om statsstøtte overstyrer ofte kartet.
              </figcaption>
            </figure>
          </article>

          {/* DEN NYE KOMPONENTEN ER HER */}
          <ArbeidsgiveravgiftCalculator />

          {/* NY SEKSJON: AKTUELT FRA FAGEKSPERTEN (Autoritetsbygging) */}
          <section className="my-16 bg-white border-l-4 border-[#E86C1F] shadow-lg rounded-r-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#E86C1F]/10 rounded-lg">
                  <Newspaper className="h-6 w-6 text-[#E86C1F]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Aktuelt fra fageksperten</h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Advarsel fra revisor: Hjemmekontor i sør kan koste deg dyrt</h3>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      I kjølvannet av pandemien ser vi en farlig trend blant nordnorske bedrifter. Man ansetter folk fra hele landet, men glemmer at arbeidsgiveravgiften følger den ansatte, ikke hovedkontoret.
                    </p>
                    <p className="font-medium text-slate-800 bg-slate-50 p-4 rounded-lg border border-slate-200 relative">
                      <Quote className="absolute top-2 right-2 h-4 w-4 text-slate-300" />
                      "La meg være krystallklar: Hvis du har en utvikler som sitter fast på hjemmekontor i Oslo, skal du betale 14,1 % avgift på den lønna – selv om bedriften din ligger midt i Karasjok."
                    </p>
                    <p>
                      Skatteetaten har begynt å se nøyere på dette. De sjekker reiseregninger, IP-adresser ved pålogging og hvor den ansatte faktisk er folkeregistrert. Feilen oppstår ofte fordi lønnssystemet automatisk setter "Sone 5" på alle ansatte.
                    </p>
                    <p>
                      Min anbefaling? Ta en gjennomgang av alle ansatte som ikke møter fysisk på kontoret hver uke. Det er billigere å rette opp nå enn å ta straffeskatten etter bokettersyn.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">IMG</div>
                    <div className="text-sm">
                      <p className="font-bold text-slate-900">Ingvald Laiti</p>
                      <p className="text-slate-500">Statsautorisert regnskapsfører</p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Aid for Home Office Rule */}
                <div className="md:w-1/3 bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Hvor skal avgiften betales?</h4>
                   <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm opacity-50">
                        <Building2 className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="text-xs text-slate-500">Bedriftens adresse</p>
                          <p className="font-bold text-slate-400 line-through">Karasjok (0%)</p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <ArrowRight className="h-5 w-5 text-slate-300 rotate-90 md:rotate-0" />
                      </div>
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border-2 border-[#E86C1F] shadow-md relative">
                        <div className="absolute -top-2 -right-2 bg-[#E86C1F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">GJELDER</div>
                        <Users className="h-5 w-5 text-[#E86C1F]" />
                        <div>
                          <p className="text-xs text-slate-500">Ansattes arbeidssted</p>
                          <p className="font-bold text-slate-900">Oslo (14,1%)</p>
                        </div>
                      </div>
                   </div>
                   <p className="text-xs text-slate-500 mt-4 italic text-center">
                     Det er hvor arbeidet utføres som avgjør satsen.
                   </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAGLIG DYPDYKK: STATSSTØTTE */}
          <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl shadow-xl mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
             
             <div className="flex items-center gap-3 mb-6 relative z-10">
               <Scale className="h-8 w-8 text-[#E86C1F]" />
               <h2 className="text-2xl sm:text-3xl font-bold">Dypdykk: Statsstøttereglene</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8 relative z-10">
               <div>
                 <h3 className="text-xl font-bold text-[#E86C1F] mb-3">Hvorfor er dette statsstøtte?</h3>
                 <p className="text-slate-300 leading-relaxed mb-4">
                   En lavere avgiftssats enn 14,1 % regnes som en økonomisk fordel gitt av staten. I henhold til EØS-avtalen er statsstøtte som vrir konkurransen i utgangspunktet forbudt, men det finnes gruppeunntak for regionalstøtte.
                 </p>
                 <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                   <p className="text-sm text-slate-300">
                     <strong>Beregningsgrunnlag for støtte:</strong><br/>
                     Differansen mellom full sats (14,1 %) og den satsen du faktisk betaler, multiplisert med lønnsgrunnlaget.
                   </p>
                 </div>
               </div>

               <div>
                 <h3 className="text-xl font-bold text-[#E86C1F] mb-3">Sektorunntak og Fribeløp</h3>
                 <p className="text-slate-300 leading-relaxed mb-4">
                   Enkelte sektorer får ikke benytte de regionale satsene automatisk. Dette gjelder blant annet:
                 </p>
                 <ul className="list-disc pl-5 space-y-1 text-slate-300 mb-6">
                   <li>Transportsektoren</li>
                   <li>Finans- og forsikringsvirksomhet</li>
                   <li>Stålproduksjon og syntetiske fibre</li>
                 </ul>
                 <p className="text-slate-300 leading-relaxed">
                   <strong>Løsningen er "Fribeløpet":</strong><br/>
                   Selv om bedriften din faller inn under et sektorunntak (eller har brukt opp kvoten), kan du bruke ordningen for <em>bagatellmessig støtte</em>. Du kan beregne lav sats inntil differansen utgjør fribeløpet (ca. 850 000 kr i 2025). Overstiges dette, må du betale full sats på det overskytende.
                 </p>
               </div>
             </div>
          </section>

          {/* SÆRREGLER FOR FRIVILLIGE */}
          <section className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <HeartHandshake className="h-8 w-8 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Særregler for frivillige organisasjoner</h2>
              </div>
              
              <p className="text-lg text-slate-700 mb-8 max-w-3xl">
                For veldedige og allmennyttige institusjoner (idrettslag, korps, humanitære organisasjoner) gjelder egne, svært gunstige regler. Disse kommer <em>i tillegg</em> til de regionale satsene.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Rule 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Regel 1</span>
                    Totalgrensen
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Hvis organisasjonens <strong>totale lønnsutgifter</strong> er under <strong>800 000 kroner</strong> i året, skal det ikke betales arbeidsgiveravgift i det hele tatt.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Gjelder uansett sone
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Regel 2</span>
                    Per ansatt-grensen
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Fritaket gjelder kun for lønnsutbetalinger inntil <strong>80 000 kroner</strong> per ansatt. 
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                     <p className="text-sm text-red-800 flex items-start gap-2">
                       <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                       <strong>Advarsel:</strong> Hvis lønnen til en ansatt overstiger 80 000 kr, må det beregnes avgift av <em>hele</em> beløpet, ikke bare det overskytende.
                     </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/60 rounded-lg border border-green-100">
                <h4 className="font-bold text-slate-800 mb-2">Eksempel fra praksis:</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Et idrettslag har totale lønnskostnader på 600 000 kr. Ingen ansatte tjener over 80 000 kr. <br/>
                  <strong>Resultat:</strong> 0 kr i arbeidsgiveravgift.<br/><br/>
                  Hvis <em>én</em> trener tjener 85 000 kr, må idrettslaget betale full avgift (f.eks. 14,1%) på de 85 000 kronene, men resten av lønnsmassen forblir avgiftsfri (gitt at totalen er under 800k).
                </p>
              </div>

              {/* NY INTERNLENKE / CTA TIL ORGANISASJONSSIDEN */}
              <div className="mt-8 flex justify-center">
                <Link to="/kunnskapsbank/organisasjoner" className="group inline-flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full font-bold shadow-sm border border-green-200 hover:bg-green-50 hover:shadow-md transition-all">
                  <HeartHandshake className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                  Se vår komplette guide for lag og foreninger i nord
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </section>

          <section className="mb-16 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">3 klassiske feller bedrifter går i</h2>
            <div className="grid md:grid-cols-1 gap-6">
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm flex gap-4">
                <div className="bg-red-100 p-3 h-fit rounded-lg"><Building2 className="h-6 w-6 text-red-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">1. Hjemmekontor-fellen</h3>
                  <p className="text-slate-700 mb-2">En utvikler ansatt i Alta-bedriften din flytter til Oslo, men beholder jobben via Teams.</p>
                  <p className="text-sm bg-red-50 text-red-900 p-3 rounded-lg border border-red-100">
                    <strong>Konsekvens:</strong> Du må betale 14,1% avgift på denne personens lønn. Arbeidsstedet følger den ansatte.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500 shadow-sm flex gap-4">
                 <div className="bg-yellow-100 p-3 h-fit rounded-lg"><Users className="h-6 w-6 text-yellow-700" /></div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">2. "Hoveddelsregelen" for pendlere</h3>
                   <p className="text-slate-700 mb-2">En snekker jobber 2 uker i Alta og 3 uker i Tromsø (Sone 4a) samme måned.</p>
                   <p className="text-sm bg-yellow-50 text-yellow-900 p-3 rounded-lg border border-yellow-100">
                     <strong>Konsekvens:</strong> Siden hoveddelen (mer enn 50%) er utenfor sone 5, skal du betale Tromsø-sats (7,9%) på <em>hele</em> månedslønnen.
                   </p>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm flex gap-4">
                 <div className="bg-blue-100 p-3 h-fit rounded-lg"><Scale className="h-6 w-6 text-blue-700" /></div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">3. Sektor-fellen (Statsstøtte)</h3>
                   <p className="text-slate-700 mb-2">Et transportselskap i Finnmark tror de automatisk har 0% avgift på alt, uten å sjekke fribeløpet.</p>
                   <p className="text-sm bg-blue-50 text-blue-900 p-3 rounded-lg border border-blue-100">
                     <strong>Konsekvens:</strong> Når "støtten" (differansen opp til 14,1%) overstiger fribeløpet (ca 850k), må de begynne å betale 14,1% på resten av årets lønn.
                   </p>
                 </div>
               </div>
            </div>
          </section>

          <FAQSection />

          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Offisielle kilder og lovdata</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-[#E86C1F] mt-0.5 shrink-0" />
                <div>
                  <a href="https://lovdata.no/dokument/NL/lov/1997-02-28-19/KAPITTEL_8-5#%C2%A723-2" target="_blank" rel="noopener noreferrer" className="text-[#E86C1F] hover:underline font-bold">Folketrygdloven § 23-2</a>
                  <p className="text-sm text-slate-600">Lovhjemmelen for soner og satser.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-[#E86C1F] mt-0.5 shrink-0" />
                <div>
                  <a href="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/arbeidsgiveravgift/frivillige-og-ideelle/" target="_blank" rel="noopener noreferrer" className="text-[#E86C1F] hover:underline font-bold">Skatteetaten: Frivillige organisasjoner</a>
                  <p className="text-sm text-slate-600">Detaljer om 800 000 kroners-grensen.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="relative overflow-hidden bg-slate-900 p-8 sm:p-12 rounded-3xl text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E86C1F] rounded-full filter blur-[80px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Rapporterer du riktig i A-meldingen?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
              Statsstøttereglene er komplekse. Vi tar en sjekk av om du utnytter fribeløpet riktig, eller om du risikerer en smell.
            </p>
            <Link to="/kontakt" className="relative z-10 inline-flex items-center gap-2 bg-[#E86C1F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d6621a] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#E86C1F]/40">
              Sjekk min bedrift <ArrowRight className="h-5 w-5" />
            </Link>
          </section>

          <section className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
                 <span className="font-bold text-slate-500">IMG</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-slate-900">Fagansvarlig</h3>
                <p className="text-slate-700 mt-2 text-sm leading-relaxed max-w-2xl">
                  <Link to="/om-oss/ansatte/ingvald-laiti" className="font-bold text-slate-900 hover:text-[#E86C1F] hover:underline">Ingvald Laiti</Link> er statsautorisert regnskapsfører i Averdi AS. Han har spesialisert seg på det nordnorske avgiftsregelverket og bistår daglig bedrifter med korrekt rapportering av differensiert arbeidsgiveravgift og statsstøtte.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}