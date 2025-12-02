import { ArrowLeft, Utensils, Camera, Tent, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function SamiskReiselivPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-24 px-4 min-h-screen bg-background">
      <Helmet>
        <title>Tilskudd til Samisk Reiseliv & Kreative Næringer | Søknadshjelp | Averdi</title>
        <meta 
          name="description" 
          content="Søk støtte til samisk reiseliv, mat eller kreativ næring. Vi hjelper deg med søknad, budsjett og revisorgodkjent regnskap som kreves for utbetaling." 
        />
        <meta name="keywords" content="samisk reiseliv, samisk mat, kreative næringer, sametinget støtte, etablerertilskudd, regnskap kultur" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Åpen for søknader 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
            Samisk Reiseliv, Kreativ Næring og Mat
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Skal du starte opplevelsesbedrift, utvikle lokalmat eller leve av kunst? Dette er Sametingets mest fleksible ordning, men den krever at du skiller tydelig mellom hobby og næring.
          </p>
        </header>

        {/* The "Hook" */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3 prose prose-lg text-muted-foreground">
            <p>
              Dette programmet er tredelt og dekker bransjer som ofte faller mellom to stoler i det ordinære virkemiddelapparatet.
            </p>
            <p>
              For <strong>etablerere</strong> kan du få inntil <strong>250 000 kr</strong> i støtte. For <strong>utviklingsprosjekter</strong> og investeringer kan støtten være inntil <strong>500 000 kr</strong>.
            </p>
            <p>
              <strong>Viktig:</strong> For kreative næringer og matprodusenter er Sametinget strenge på lønnsomhet. Hvis regnskapet ditt bærer preg av "hobbyvirksomhet" uten profittmål, blir søknaden avslått. Vi hjelper deg å sette opp et profesjonelt budsjett som viser næringsmessig drift.
            </p>
          </div>
          
          {/* CTA Card */}
          <Card className="md:col-span-2 bg-indigo-50 border-indigo-100 shadow-sm h-fit">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2 text-foreground">Sikre utbetalingen</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Alle tilskudd over 100 000 kr krever bekreftelse fra statsautorisert regnskapsfører før pengene utbetales. Vi kan være din partner.
              </p>
              <Button onClick={scrollToContact} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
                Få hjelp med søknaden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Category Icons */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center">
            <Tent className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="font-bold mb-2">Samisk Reiseliv</h3>
            <p className="text-sm text-muted-foreground">Autentiske opplevelser basert på samisk kultur. (Ikke bare overnatting).</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center">
            <Camera className="h-10 w-10 text-pink-600 mb-4" />
            <h3 className="font-bold mb-2">Kreativ Næring</h3>
            <p className="text-sm text-muted-foreground">Musikk, design, litteratur og visuell kunst som drives kommersielt.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center text-center">
            <Utensils className="h-10 w-10 text-orange-600 mb-4" />
            <h3 className="font-bold mb-2">Samisk Mat</h3>
            <p className="text-sm text-muted-foreground">Videreforedling av råvarer fra reindrift, fiske og utmark.</p>
          </div>
        </div>

        {/* Pitfalls Analysis */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-900">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
              Vanlige feil i denne ordningen
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-amber-900">Blanding av privat- og bedriftsøkonomi</h4>
                  <p className="text-amber-800/80 text-sm">
                    Spesielt for enkeltpersonforetak innen kunst og mat. Sametinget godtar ikke at du kjøper utstyr til "privat bruk" på firmaets regning. Vi hjelper deg å skille dette rent regnskapsmessig.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-amber-900">Feilføring av "Eget arbeid"</h4>
                  <p className="text-amber-800/80 text-sm">
                    Du kan budsjettere med eget arbeid (inntil 20% av prosjektet), men satsen er låst (maks 400 kr/t). Mange setter denne for høyt og får kutt i støtten.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-amber-900">Mangler markedsplan</h4>
                  <p className="text-amber-800/80 text-sm">
                    For kreative næringer må du vise hvordan du skal <em>tjene penger</em>, ikke bare skape kunst. Vi hjelper deg å sette opp salgsprognoser som virker troverdige.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Gjør lidenskapen til et levebrød</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vi i Averdi har lang erfaring med kulturnæringer i nord. La oss ta regnskapet, så kan du skape verdiene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 h-14 bg-indigo-600 hover:bg-indigo-700 text-white">
              Book et gratis møte
            </Button>
            <a 
              href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/naring/samisk-reiseliv-kreative-naringer-og-samisk-mat/" 
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