import { ArrowLeft, CheckCircle2, AlertCircle, MapPin, HelpCircle, FileText, TrendingUp, Briefcase, Palette, Tractor, ExternalLink, Music } from 'lucide-react';

interface SametingetHubProps {
  onBack: () => void;
}

export function SametingetHub({ onBack }: SametingetHubProps) {
  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="relative bg-primary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#E86C1F]/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Tilbake til Kunnskapsbanken
          </button>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl">
            Alt du må vite om <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">tilskudd fra Sametinget</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            En komplett guide for bedrifter, organisasjoner og etablerere. Vi hjelper deg fra søknad til godkjent regnskap.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#cluster1" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              💰 Støtteordninger
            </a>
            <a href="#cluster2" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              📊 Regnskap & Krav
            </a>
            <a href="#cluster3" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              📍 Geografi (STN)
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 space-y-24">
        
        {/* Cluster 1: Spesifikke støtteordninger */}
        <section id="cluster1" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Hvilken støtte passer for deg?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Variert næringsliv */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-4 p-3 bg-orange-50 text-orange-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Variert næringsliv</h3>
              <p className="text-muted-foreground mb-4 text-sm flex-grow">
                For bedrifter som vil satse. Dekker investeringer, utvikling og kompetanseheving. Støtten kan dekke inntil 35% av godkjente kostnader.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Krav til lønnsomhet og budsjett</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Inntil 500.000 kr i støtte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Må være registrert i STN-området</span>
                </li>
              </ul>
              <a
                href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/naring/variert-naringsliv/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Les mer hos Sametinget
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* Duodji */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-4 p-3 bg-purple-50 text-purple-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Duodji</h3>
              <p className="text-muted-foreground mb-4 text-sm flex-grow">
                Egne ordninger for tradisjonelt håndverk. Både driftstilskudd, investeringer, markedstilpasning og kompetanseheving.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                  <span>Skille hobby vs. næring (omsetningskrav)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Krav om duodjiregisteret</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Støtte til verksted og utstyr</span>
                </li>
              </ul>
              <a
                href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/duodji/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Les mer hos Sametinget
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* Primærnæringer */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Tractor className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Primærnæringer</h3>
              <p className="text-muted-foreground mb-4 text-sm flex-grow">
                Støtte til tilleggsnæring for reindrift, samt støtte til fiskebåt, jordbruk og marine næringer.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Kombinasjonsnæringer prioriteres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Førstegangs-investeringer i fiskebåt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Tilleggsnæring i reindrift</span>
                </li>
              </ul>
              <a
                href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/naring/marine-naringer/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Les mer hos Sametinget
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* Kreative næringer */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-4 p-3 bg-pink-50 text-pink-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kreative næringer</h3>
              <p className="text-muted-foreground mb-4 text-sm flex-grow">
                Støtte til musikk, litteratur, visuell kunst og scenekunst. Både prosjektstøtte og etablererstipend.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Prosjektstøtte til utgivelser</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Turnéstøtte og formidling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Artiststipend</span>
                </li>
              </ul>
              <a
                href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/kultur/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Les mer hos Sametinget
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* Samisk reiseliv */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <div className="mb-4 p-3 bg-blue-50 text-blue-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Samisk reiseliv</h3>
              <p className="text-muted-foreground mb-4 text-sm flex-grow">
                Støtte til utvikling av samiske reiselivsprodukter som formidler samisk kultur på en autentisk måte.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Krav om samisk kulturelement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Produktutvikling og markedsføring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Infrastruktur og tilrettelegging</span>
                </li>
              </ul>
              <a
                href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/naring/samisk-reiseliv/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Les mer hos Sametinget
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Cluster 2: Regnskap og Pain Points */}
        <section id="cluster2" className="scroll-mt-24 bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white text-primary rounded-xl shadow-sm">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Unngå at pengene må betales tilbake</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Må du ha revisor?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mange tror de må ha revisor for alle prosjekter, men grensen går ofte ved <strong>100 000 kr</strong> i tilskudd. 
                For mindre beløp holder det ofte at en autorisert regnskapsfører (som oss) bekrefter regnskapet.
              </p>
              <div className="bg-white p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold mb-2 text-primary">Averdi hjelper deg med:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Prosjektregnskap oppsatt etter kravene</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Revisorbekreftelse (via partnere) ved behov</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Sluttrapportering innen fristen</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Typiske feil som gir avslag</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mt-1">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Manglende skille mellom privat og næring</h4>
                    <p className="text-sm text-muted-foreground">Spesielt viktig for Duodji og enkeltpersonforetak. Vi rydder opp i bilagene.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mt-1">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Glemte frister</h4>
                    <p className="text-sm text-muted-foreground">Rapporteringsfristen er absolutt. Vi passer på datoene for deg.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg mt-1">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Feil timeføring av eget arbeid</h4>
                    <p className="text-sm text-muted-foreground">Sametinget har egne satser for eget arbeid. Bruker du feil sats, kan støtten kuttes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster 3: Geografi (STN) */}
        <section id="cluster3" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <MapPin className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Kan din bedrift søke? (STN-området)</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 bg-primary/5">
                <h3 className="text-2xl font-bold mb-4">Virkemiddelområdet for tilskudd til næringsutvikling (STN)</h3>
                <p className="text-muted-foreground mb-6">
                  For å søke på de fleste næringsrettede tilskuddene, må bedriften din være registrert i en av disse kommunene.
                </p>
                <div className="space-y-2">
                  <p className="font-bold text-primary">Finnmark:</p>
                  <p className="text-sm text-gray-600">Kautokeino, Karasjok, Porsanger, Tana, Nesseby, Lebesby (deler), Gamvik (deler), Måsøy (deler), Nordkapp (deler), Sør-Varanger (deler), Alta (deler), Loppa (deler), Hammerfest (deler)</p>
                  
                  <p className="font-bold text-primary mt-4">Troms:</p>
                  <p className="text-sm text-gray-600">Kvænangen, Kåfjord, Lyngen (deler), Nordreisa (deler), Skjervøy (deler), Storfjord (deler), Lavangen, Tjeldsund (deler), Tromsø (deler), Balsfjord (deler), Karlsøy (deler), Dyrøy (deler), Salangen (deler), Gratangen (deler), Harstad (deler), Senja (deler)</p>
                  
                  <p className="font-bold text-primary mt-4">Nordland:</p>
                  <p className="text-sm text-gray-600">Hamarøy (deler), Narvik (deler), Evenes (deler)</p>
                </div>
              </div>
              <div className="relative min-h-[300px] bg-gray-200">
                {/* Placeholder for Map */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Kart over STN-området</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster 4: FAQ */}
        <section id="faq" className="scroll-mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ofte stilte spørsmål</h2>
            <p className="text-muted-foreground">Korte svar på det mange lurer på om Sametingets støtteordninger.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Hvor mye kan jeg få i støtte?", a: "Dette varierer per ordning, men for variert næringsliv er grensen ofte 500 000 kr. For investeringer kan du ofte få inntil 35% av kostnadene dekket." },
              { q: "Når kommer pengene?", a: "Tilskudd utbetales som regel etterskuddsvis, eller i rater etter hvert som du dokumenterer utgifter. Du må ofte legge ut selv først." },
              { q: "Kan jeg få støtte til lønn?", a: "Sametinget gir sjelden støtte til ordinær drift/lønn. Unntaket er ofte etablererstipend eller prosjektledelse i en avgrenset utviklingsfase." },
              { q: "Hva er kravet til egenkapital?", a: "Dette varierer, men du må ofte vise at du kan finansiere den delen av prosjektet som Sametinget ikke dekker (restfinansiering)." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {item.q}
                </h4>
                <p className="text-muted-foreground pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Trenger du hjelp med søknaden?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Vi kjenner regelverket og hjelper deg med budsjett, regnskap og rapportering. 
            La oss ta papirarbeidet, så kan du fokusere på bedriften.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#E86C1F] to-[#F4B223] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Kontakt oss for en prat
          </button>
        </section>

      </div>
    </div>
  );
}