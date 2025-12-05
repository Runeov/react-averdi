import { ArrowLeft, Tractor, Anchor, Mountain, AlertCircle, CheckCircle2, TrendingUp, Coins } from 'lucide-react';
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
        <title>Tilskudd til Primærnæringer 2025 | Reindrift, Fiske, Jordbruk | Averdi</title>
        <meta 
          name="description" 
          content="Søk støtte til tilleggsnæring i reindrift, fiskebåt eller fjøs. Vi kjenner reglene for etablerertilskudd (75%) og investeringer (50%) i primærnæringene." 
        />
        <meta name="keywords" content="tilleggsnæring reindrift, sametinget støtte, fiskebåt, løsdrift fjøs, etablerertilskudd reindrift, regnskap primærnæring" />
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
            Oppdaterte satser for 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
            Støtte til Primærnæringer
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Enten du skal utvikle reindriften med nye produkter, bygge om til løsdrift eller kjøpe din første sjark. Her er de økonomiske spillereglene du må kjenne til.
          </p>
        </header>

        {/* REINDRIFT & TILLEGGSNÆRING - Expanded Section */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-amber-50/80 border border-amber-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-amber-100 rounded-2xl text-amber-700">
                  <Mountain className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-amber-900">Reindrift & Tilleggsnæring</h2>
                  <p className="text-amber-800 font-medium">Fra tradisjonell drift til nye inntekter</p>
                </div>
              </div>

              <div className="prose prose-amber max-w-none mb-8 text-muted-foreground">
                <p>
                  Sametinget satser stort på at reindriftsutøvere skal få flere ben å stå på. 
                  Støtteordningen <strong>"Tilleggsnæring i reindrift"</strong> gjelder for deg som vil utnytte ressursene i reindrifta til å skape nye produkter eller tjenester (f.eks. turisme, videreforedling av kjøtt/skinn).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Option A: Investment */}
                <Card className="bg-white border-amber-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3 text-amber-700">
                      <TrendingUp className="h-5 w-5" />
                      <h3 className="font-bold text-lg">Investering & Utvikling</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      For etablerte aktører som vil investere i anlegg, maskiner eller produktutvikling.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1 border-b border-amber-100">
                        <span className="text-muted-foreground">Maks støtte:</span>
                        <span className="font-bold">500 000 kr</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-amber-100">
                        <span className="text-muted-foreground">Dekningsgrad:</span>
                        <span className="font-bold">Inntil 50%</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Nedre grense:</span>
                        <span className="font-bold">30 000 kr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Option B: Startup */}
                <Card className="bg-white border-amber-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3 text-green-700">
                      <Coins className="h-5 w-5" />
                      <h3 className="font-bold text-lg">Etablerertilskudd</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      For deg som starter <strong>ny bedrift</strong> (under 3 år). Denne er gunstigere enn investering!
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1 border-b border-amber-100">
                        <span className="text-muted-foreground">Maks støtte:</span>
                        <span className="font-bold">250 000 kr</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-amber-100">
                        <span className="text-muted-foreground">Dekningsgrad:</span>
                        <span className="font-bold text-green-600">Inntil 75%</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Egen lønn:</span>
                        <span className="font-bold">15 000 kr/mnd (maks 5 mnd)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-amber-100/50 p-6 rounded-xl flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div className="text-sm text-amber-900">
                  <strong>Viktig krav om regnskap:</strong> For alle tilskudd over 100 000 kr <em>krever</em> Sametinget at regnskapet bekreftes av en <strong>statsautorisert regnskapsfører</strong> før siste utbetaling. 
                  Vi hjelper deg å sette opp prosjektregnskapet riktig fra start, slik at du ikke får avslag på sluttutbetalingen.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Primary Industries */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          
          {/* JORDBRUK */}
          <Card className="border-green-200 bg-green-50/50 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
            <CardContent className="pt-8">
              <div className="p-3 bg-green-100 w-fit rounded-xl mb-4 text-green-700">
                <Tractor className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-green-900">Jordbruk</h3>
              <p className="text-sm font-medium text-green-800 mb-4 uppercase tracking-wide">
                Fokus på driftsbygninger
              </p>
              <ul className="space-y-3 mb-6 text-sm text-green-900/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>50% støtte</strong> til ombygging/tilbygg for løsdrift</span>
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
          <Card className="border-blue-200 bg-blue-50/50 relative overflow-hidden h-full">
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
        </div>

        {/* Common Traps Section */}
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
                  Sametinget beregner støtte ut fra kostnader <em>eksklusiv merverdiavgift</em>. Du må ha likviditet til å legge ut for momsen selv, da denne ikke dekkes av tilskuddet.
                </p>
                <h4 className="font-bold text-foreground mb-2">2. Driftsplan (Jordbruk)</h4>
                <p>
                  For å få støtte til driftsbygning, kreves en godkjent driftsplan som viser at investeringen er lønnsom over tid. En dårlig plan er den vanligste årsaken til avslag.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">3. Fiskeriregistrering</h4>
                <p className="mb-4">
                  For støtte til fartøy må du stå på blad B i Fiskermanntallet (eller blad A for ungdom under 30). Fartøyet må også ha kvoterettigheter.
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