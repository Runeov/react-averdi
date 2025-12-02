import { 
  ArrowLeft, 
  ShoppingBag, 
  BarChart3, 
  Calculator, 
  CreditCard, 
  Monitor, 
  Truck, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface HandelHubProps {
  onBack: () => void;
}

export function HandelHub({ onBack }: HandelHubProps) {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  // Structured Data for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvilke kassesystemer fungerer med regnskapet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vi anbefaler skybaserte systemer som snakker direkte med PowerOffice GO eller Tripletex. Eksempler er Zettle, Front Systems og Diller. Dette sparer deg for manuelt arbeid."
        }
      },
      {
        "@type": "Question",
        "name": "Hvordan håndterer dere nettbutikk-salg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vi setter opp integrasjoner mot Shopify, WooCommerce eller andre plattformer slik at salg og innbetalinger (Klarna/Vipps) bokføres automatisk."
        }
      },
      {
        "@type": "Question",
        "name": "Hva er kravene til varetelling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle butikker må ha tilfredsstillende varelagerkontroll. Vi hjelper deg å sette opp rutiner for løpende telling eller årlig varetelling som tilfredsstiller Skatteetatens krav."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-primary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
            aria-label="Tilbake til oversikten"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Tilbake til Kunnskapsbanken
          </button>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl">
            Regnskap for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">handel og butikk</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Full kontroll på varelager, marginer og kassesystemer. Vi hjelper deg å drive lønnsomt, enten du har fysisk butikk eller nettbutikk.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#drift" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              📈 Drift & Lønnsomhet
            </a>
            <a href="#systemer" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              💻 Systemer (POS/Nett)
            </a>
            <a href="#regler" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              ⚖️ Lover & Regler
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 space-y-24">
        
        {/* Cluster 1: Drift & Lønnsomhet */}
        <section id="drift" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Drift & Lønnsomhet</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-4 p-3 bg-blue-50 text-blue-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Varelager</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Varelageret binder kapital. Vi hjelper deg med omløpshastighet og korrekt verdsettelse for skatt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Calculator className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marginer</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Vet du hva du faktisk tjener per vare? Vi setter opp rapporter som viser bruttofortjeneste i sanntid.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-4 p-3 bg-purple-50 text-purple-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <CreditCard className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Likviditet</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Handel krever at du kjøper før du selger. Vi hjelper deg å styre kontantstrømmen gjennom sesongene.
              </p>
            </div>
          </div>
        </section>

        {/* Cluster 2: Systemer & Teknologi */}
        <section id="systemer" className="scroll-mt-24 bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white text-primary rounded-xl shadow-sm">
              <Monitor className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Sømløse Systemer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Integrasjoner som sparer tid</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manuell punching av dagsomsetning er historie. Vi kobler kassen og nettbutikken din direkte mot regnskapet.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold mb-4 text-primary">Vi er eksperter på:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span><strong>PowerOffice GO</strong> & <strong>Tripletex</strong> som motor</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span>Integrasjon mot <strong>Shopify</strong> og <strong>WooCommerce</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span>Kassesystemer (Zettle, Front Systems, m.fl.)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] bg-white rounded-2xl shadow-lg p-8 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShoppingBag className="h-32 w-32" aria-hidden="true" />
              </div>
              <h4 className="font-bold text-lg mb-4">Hvorfor integrasjon?</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg h-fit">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">Automatisk bokføring</p>
                    <p className="text-sm text-muted-foreground">Salg kommer rett inn i regnskapet hver dag.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg h-fit">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">Oppdatert lagerstatus</p>
                    <p className="text-sm text-muted-foreground">Nettbutikk og kasse snakker sammen.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg h-fit">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">Færre feil</p>
                    <p className="text-sm text-muted-foreground">Slutt på manuelle tastefeil.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cluster 3: Lover & Regler */}
        <section id="regler" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <AlertCircle className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Unngå fellene</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Kasseloven</h3>
              <p className="text-muted-foreground mb-4">
                Har du et kassesystem som tilfredsstiller kravene? Alle systemer må kunne produsere SAF-T filer ved kontroll. Vi sjekker om ditt system er godkjent.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">MVA og Import</h3>
              <p className="text-muted-foreground mb-4">
                Importerer du varer? MVA-reglene kan være kompliserte. Vi sikrer at du får fradragene du har krav på, og at tollen blir riktig.
              </p>
            </div>
          </div>
        </section>

        {/* Cluster 4: FAQ (Matches Schema) */}
        <section className="scroll-mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ofte stilte spørsmål om butikkdrift</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                Hvilke kassesystemer bør jeg velge?
              </h4>
              <p className="text-muted-foreground pl-7">
                Vi anbefaler systemer som integrerer sømløst med regnskapssystemet (PowerOffice GO/Tripletex). Eksempler er Zettle, Diller og Front Systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                Hvordan fungerer nettbutikk-integrasjon?
              </h4>
              <p className="text-muted-foreground pl-7">
                Vi setter opp en kobling (API) mellom din nettbutikk (f.eks. Shopify) og regnskapet. Da bokføres salg og innbetalinger fra Vipps/Klarna automatisk.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Få orden på butikken</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            La oss ta en gjennomgang av dine rutiner og systemer. Vi finner løsningen som sparer deg for tid og penger.
          </p>
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Book et møte
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </section>

      </div>
    </div>
  );
}