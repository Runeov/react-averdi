import { ArrowLeft, Tractor, Anchor, Mountain, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function PrimaernaeringPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-24 px-4 min-h-screen bg-background">
      <Helmet>
        <title>Tilskudd til Primærnæringer 2025 | Fiske, Jordbruk, Reindrift | Averdi</title>
        <meta 
          name="description" 
          content="Søk støtte til båt, fjøs eller reindrift. Vi kjenner de nye 2025-reglene for jordbruk (løsdrift) og førstegangskjøp av fiskefartøy." 
        />
        <meta name="keywords" content="primærnæring tilskudd, fiskebåt støtte, løsdrift fjøs, tilleggsnæring reindrift, sametinget jordbruk, regnskap fiskeri" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/kunnskapsbank/sametinget')} 
          className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tilbake til Sametinget-oversikt
        </Button>

        {/* Header Section */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Nye satser for 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
            Støtte til Primærnæringer
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Enten du skal kjøpe din første sjark, bygge om til løsdrift eller utvikle reindrifta. Her er reglene du må forholde deg til i år.
          </p>
        </header>

        {/* Industry Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          
          {/* JORDBRUK */}
          <Card className="border-green-200 bg-green-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <CardContent className="pt-8">
              <div className="p-3 bg-green-100 w-fit rounded-xl mb-4 text-green-700">
                <Tractor className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-green-900">Jordbruk</h3>
              <p className="text-sm font-medium text-green-800 mb-4 uppercase tracking-wide">
                Oppgradert for 2025
              </p>
              <ul className="space-y-3 mb-6 text-sm text-green-900/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>50% støtte</strong> til driftsbygninger (løsdrift)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Maksbeløp økt til <strong>800 000 kr</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Støtte til nydyrking og gjødsellager</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* FISKE */}
          <Card className="border-blue-200 bg-blue-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <CardContent className="pt-8">
              <div className="p-3 bg-blue-100 w-fit rounded-xl mb-4 text-blue-700">
                <Anchor className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Marine Næringer</h3>
              <p className="text-sm font-medium text-blue-800 mb-4 uppercase tracking-wide">
                Fiskeflåte & Anlegg
              </p>
              <ul className="space-y-3 mb-6 text-sm text-blue-900/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>400 000 kr</strong> til førstegangskjøp av fartøy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Støtte til mottaksanlegg og service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Krav: Registrert i Fiskermanntallet</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* REINDRIFT */}
          <Card className="border-amber-200 bg-amber-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <CardContent className="pt-8">
              <div className="p-3 bg-amber-100 w-fit rounded-xl mb-4 text-amber-700">
                <Mountain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-amber-900">Reindrift</h3>
              <p className="text-sm font-medium text-amber-800 mb-4 uppercase tracking-wide">
                Tilleggsnæring
              </p>
              <ul className="space-y-3 mb-6 text-sm text-amber-900/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Inntil <strong>500 000 kr</strong> til utvikling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Videreforedling av kjøtt og biprodukter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Reiseliv basert på reindrift</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Info / "The Trap" */}
        <section className="mb-16">
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-primary" />
              Dette må være på plass før du søker
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground mb-2">1. Finansiering (Momsfellen)</h4>
                <p className="mb-4">
                  Sametinget beregner støtte ut fra kostnader <em>eksklusiv merverdiavgift</em> (hvis du er mva-registrert). Du må ha likviditet til å legge ut for momsen selv, da denne ikke dekkes av tilskuddet.
                </p>
                <h4 className="font-bold text-foreground mb-2">2. Driftsplan (Jordbruk)</h4>
                <p>
                  For å få støtte til driftsbygning, kreves en godkjent driftsplan som viser at investeringen er lønnsom over tid. En dårlig plan er den vanligste årsaken til avslag eller kutt i støtten.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">3. Fiskeriregistrering</h4>
                <p className="mb-4">
                  For støtte til fartøy må du stå på blad B i Fiskermanntallet (eller blad A for ungdom under 30 i visse tilfeller). Fartøyet må også ha kvoterettigheter.
                </p>
                <h4 className="font-bold text-foreground mb-2">4. Regnskapsfører</h4>
                <p>
                  For alle tilskudd over 100 000 kr kreves bekreftelse fra statsautorisert regnskapsfører. Vi kjenner kravene til "prosjektregnskap" som Sametinget etterspør.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Skal du investere i år?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Primærnæringene har kompliserte avskrivningsregler og mva-satser. 
            Ikke risiker at tilskuddet går tapt i regnskapsfeil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 h-14 bg-green-700 hover:bg-green-800 text-white">
              Kontakt oss om landbruk/fiske
            </Button>
            <a 
              href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/naring/primarnaringer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-lg font-medium transition-colors"
            >
              Les mer hos Sametinget
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}