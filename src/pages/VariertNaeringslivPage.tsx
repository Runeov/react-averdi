import { ArrowLeft, Briefcase, TrendingUp, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function VariertNaeringslivPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-24 px-4 min-h-screen bg-background">
      <Helmet>
        <title>Tilskudd til Variert Næringsliv | Satser og Regler 2025 | Averdi</title>
        <meta 
          name="description" 
          content="Guide til Sametingets ordning 'Variert næringsliv'. Se om du bor i STN-området, og lær forskjellen på investeringstilskudd (40%) og etablerertilskudd (75%)." 
        />
        <meta name="keywords" content="variert næringsliv, sametinget støtte, STN-området, etablerertilskudd, investeringsstøtte, regnskap finnmark" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
            </span>
            Søknadsfrist: Løpende behandling (Åpen 2025)
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
            Variert Næringsliv
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Dette er hovedordningen for bedrifter i samiske distrikter. Den dekker alt fra kjøp av maskiner til markedsføring, men støttesatsen avhenger av om du er i startgropen eller i vekst.
          </p>
        </header>

        {/* The Two Main Paths */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Path 1: Etablering */}
          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Etablerertilskudd</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                For deg som har registrert foretaket for mindre enn 3 år siden.
              </p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Inntil 75%</strong> av kostnadene dekkes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Maksimalt <strong>250 000 kr</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Kan dekke mindre investeringer, konsulenter og markedsavklaring</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Path 2: Investering */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Investering & Utvikling</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                For etablerte bedrifter som skal vokse eller omstille seg.
              </p>
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span><strong>Inntil 40%</strong> av kostnadene dekkes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Maksimalt <strong>500 000 kr</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Dekker "harde" investeringer (bygg, maskiner) og utviklingsprosjekter</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Critical Requirement: STN Area */}
        <section className="mb-16">
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Er du i riktig område? (STN)</h3>
                <p className="text-muted-foreground mb-6">
                  For å søke på denne ordningen <strong>må</strong> bedriften være registrert og ha adresse i en kommune som er del av "Virkemiddelområdet for samisk næringsutvikling".
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Finnmark:</h4>
                    <p className="text-muted-foreground">Alle kommuner.</p>
                    
                    <h4 className="font-bold text-foreground mt-4 mb-2">Nordland:</h4>
                    <p className="text-muted-foreground">Hamarøy, Narvik (deler), Evenes (deler).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Troms:</h4>
                    <p className="text-muted-foreground">
                      Kvænangen, Kåfjord, Lyngen, Nordreisa, Skjervøy, Storfjord, Lavangen, Tjeldsund, 
                      Tromsø (deler), Balsfjord (deler), Karlsøy, Dyrøy, Salangen, Gratangen, Harstad (deler), Senja (deler).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accountant's Role */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-900">
              <AlertCircle className="h-6 w-6 text-amber-600" />
              Dette må du vite om budsjettet
            </h2>
            <div className="space-y-6 text-amber-900/80">
              <p>
                <strong>1. Krav til lønnsomhet:</strong> Sametinget støtter ikke prosjekter som ikke viser til fremtidig overskudd. Vi hjelper deg å sette opp et driftsbudsjett som viser levedyktighet.
              </p>
              <p>
                <strong>2. Eget arbeid:</strong> Du kan legge inn eget arbeid som en kostnad (egeninnsats), men maksimalt inntil 20% av totale kostnader. Timesatsen er låst til 400 kr/t. Dette er en vanlig feilkilde.
              </p>
              <p>
                <strong>3. Utbetaling:</strong> Tilskudd utbetales etterskuddsvis. Du må kunne finansiere momsen selv (tilskudd beregnes ekskl. mva). For tilskudd over 100 000 kr kreves bekreftelse fra regnskapsfører ved sluttrapportering.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Start prosessen riktig</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ikke bruk tid på en søknad som blir avvist på grunn av formelle feil i budsjettet. 
            Vi kvalitetssikrer tallene dine før du sender inn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 h-14 bg-[#E86C1F] hover:bg-[#E86C1F]/90 text-white">
              Kontakt oss for bistand
            </Button>
            <a 
              href="https://sametinget.no/stipend-og-tilskudd/oversikt-over-tilskuddsordninger/naring/variert-naringsliv/" 
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