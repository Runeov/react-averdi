import { 
  ArrowLeft, 
  Users, 
  Heart, 
  FileCheck, 
  Coins, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  ExternalLink,
  HelpCircle,
  ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface OrganisasjonHubProps {
  onBack: () => void;
}

export function OrganisasjonHub({ onBack }: OrganisasjonHubProps) {
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
        "name": "Må idrettslag ha statsautorisert revisor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Som regel nei. Grensen for revisjonsplikt går ofte ved 5 millioner kroner i omsetning. For de fleste holder det med valgt revisor fra årsmøtet, kombinert med et ryddig regnskap fra oss."
        }
      },
      {
        "@type": "Question",
        "name": "Hvordan får vi momskompensasjon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dere kan få tilbake inntil 30% av driftskostnadene (forenklet modell). Søknadsfristen er 1. september. Vi hjelper dere å klargjøre regnskapet slik at dere får maksimalt utbetalt."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor mye kan vi betale i lønn skattefritt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dere kan betale inntil 10 000 kr per person per år helt skattefritt. I tillegg slipper dere arbeidsgiveravgift hvis de totale lønnskostnadene er under 800 000 kr per år."
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
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px]"></div>
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
            Drive frivillig organisasjon i <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Nord-Norge</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Det er forskjell på å drive idrettslag i Oslo og i Karasjok. Her i nord har vi egne støtteordninger, egne språkregler og egne muligheter. Denne guiden hjelper styret ditt å bruke mindre tid på papirer og mer tid på aktivitet.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#pengesekken" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              💰 Pengesekken (Finansiering)
            </a>
            <a href="#drift" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              ⚖️ Drift & Regler
            </a>
            <a href="#geografi" className="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-medium text-foreground hover:shadow-md transition-all border border-gray-100">
              📍 Geografi (Hvor søker du?)
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 space-y-24">
        
        {/* Cluster 1: Pengesekken (Finansiering) */}
        <section id="pengesekken" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <Coins className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Pengesekken: Her er midlene</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Samiske kulturmidler */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-4 p-3 bg-blue-50 text-blue-600 rounded-lg w-fit">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Samiske kulturmidler</h3>
              <p className="text-muted-foreground mb-6">
                Glemte dere fristen 1. november? Fortvil ikke. Det finnes flere potter som har løpende søknadsfrist eller andre datoer.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Kulturtilskudd:</strong> For arrangementer og prosjekter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Språkprosjekter:</strong> Støtte til Sámi giellavahkku og språkkurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Driftstilskudd:</strong> Årlig støtte til faste institusjoner.</span>
                </li>
              </ul>
            </div>

            {/* Momskompensasjon */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="mb-4 p-3 bg-orange-50 text-orange-600 rounded-lg w-fit">
                <FileCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Momskompensasjon</h3>
              <p className="text-muted-foreground mb-6">
                Dette er "gratis penger" rett i kassa. Dere kan få tilbake inntil 30% av driftskostnadene deres gjennom forenklet modell.
              </p>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <p className="font-bold text-orange-800 mb-1">Husk fristen!</p>
                <p className="text-sm text-orange-700">Søknadsfristen er normalt 1. september. Vi hjelper dere å gjøre klart regnskapet i god tid.</p>
              </div>
            </div>
          </div>

          {/* Fylkeskommunale midler */}
          <div className="mt-8 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-gray-600" aria-hidden="true" />
              Fylkeskommunale midler
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Reglene varierer etter hvor dere hører til. Vi har oversikt over støtteordningene i:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl text-center border border-gray-200">
                <span className="font-bold block mb-1">Finnmark</span>
                <span className="text-xs text-muted-foreground">Kultur & Idrett</span>
              </div>
              <div className="bg-white p-4 rounded-xl text-center border border-gray-200">
                <span className="font-bold block mb-1">Troms</span>
                <span className="text-xs text-muted-foreground">Folkehelse & Frivillighet</span>
              </div>
              <div className="bg-white p-4 rounded-xl text-center border border-gray-200">
                <span className="font-bold block mb-1">Nordland</span>
                <span className="text-xs text-muted-foreground">Samiske formål</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster 2: Drift & Pain Points */}
        <section id="drift" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Drift: Unngå fellene</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" aria-hidden="true" />
                  Må vi ha revisor?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Mange tror at alle foreninger må ha statsautorisert revisor. Sannheten er at grensen for revisjonsplikt ofte går ved <strong>5 millioner kroner</strong> i omsetning.
                </p>
                <p className="text-sm font-medium text-foreground">
                  For de fleste holder det med en valgt revisor fra årsmøtet, støttet av et ryddig regnskap fra oss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-blue-600 flex items-center gap-2">
                  <Coins className="h-5 w-5" aria-hidden="true" />
                  Lønn vs. Honorar (10k / 80k regelen)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Skal dere betale treneren eller styrelederen? Her er reglene som sparer dere for skatt og avgift:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                    <span>Lønn inntil <strong>10 000 kr</strong> per person er skattefritt.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                    <span>Ingen arbeidsgiveravgift hvis totale lønnskostnader er under <strong>800 000 kr</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Verktøykasse for styret</h3>
              <p className="text-muted-foreground">
                Vi vet at styrearbeid gjøres på kveldstid. Her er verktøyene som gjør jobben enklere.
              </p>
              
              <div className="grid gap-4">
                <a href="#" className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all group">
                  <span className="font-medium">Mal for innkalling til årsmøte</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all group">
                  <span className="font-medium">Protokoll fra styremøte (Mal)</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all group">
                  <span className="font-medium">Guide: Bli Grasrotmottaker</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster 3: Geografi (Språkforvaltningsområdet) */}
        <section id="geografi" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Hvor hører dere til?</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 lg:p-12">
              <p className="text-lg text-muted-foreground mb-8">
                Organisasjoner i nord har spesielle fordeler hvis de ligger i riktig kommune (Språkforvaltningsområdet eller STN). Sjekk om din kommune er på listen:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-primary border-b border-primary/20 pb-2">Finnmark</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Kautokeino</li>
                    <li>Karasjok</li>
                    <li>Tana</li>
                    <li>Nesseby</li>
                    <li>Porsanger</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-4 text-primary border-b border-primary/20 pb-2">Troms</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Kåfjord</li>
                    <li>Lavangen</li>
                    <li>Tjeldsund</li>
                    <li>Tromsø (egne by-stipender)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-4 text-primary border-b border-primary/20 pb-2">Nordland</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Hamarøy (Lulesamisk senter)</li>
                    <li>Bodø (Kulturhovedstad-effekter)</li>
                    <li>Hattfjelldal</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-purple-50 text-purple-800 rounded-xl text-sm">
                <strong>Tips:</strong> Driver dere lag i Kåfjord? Da kan dere søke på to ekstra potter som lag i Tromsø ikke får. Kontakt oss for detaljer.
              </div>
            </div>
          </div>
        </section>

        {/* Cluster 4: FAQ (Matches Schema) */}
        <section id="faq" className="scroll-mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ofte stilte spørsmål</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                Må idrettslag ha statsautorisert revisor?
              </h4>
              <p className="text-muted-foreground pl-7">
                Som regel nei. Grensen for revisjonsplikt går ofte ved 5 millioner kroner i omsetning. For de fleste holder det med valgt revisor fra årsmøtet, kombinert med et ryddig regnskap fra oss.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                Hvordan får vi momskompensasjon?
              </h4>
              <p className="text-muted-foreground pl-7">
                Dere kan få tilbake inntil 30% av driftskostnadene (forenklet modell). Søknadsfristen er 1. september. Vi hjelper dere å klargjøre regnskapet slik at dere får maksimalt utbetalt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                Hvor mye kan vi betale i lønn skattefritt?
              </h4>
              <p className="text-muted-foreground pl-7">
                Dere kan betale inntil 10 000 kr per person per år helt skattefritt. I tillegg slipper dere arbeidsgiveravgift hvis de totale lønnskostnadene er under 800 000 kr per år.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">La oss ta regnskapet</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Bruk tiden på aktivitet og medlemmene deres, så tar vi oss av tallene, fristene og søknadene.
          </p>
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Kontakt oss for en prat
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </section>

      </div>
    </div>
  );
}