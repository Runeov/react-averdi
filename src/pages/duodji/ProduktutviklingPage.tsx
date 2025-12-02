import { ArrowLeft, Component, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export function ProduktutviklingPage() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Støtte til Produktutvikling Duodji | Design & Prototyper | Averdi</title>
        <meta name="description" content="Skal du utvikle en ny kolleksjon? Få inntil 500 000 kr i støtte fra Sametinget. Vi hjelper deg med prosjektbeskrivelse og budsjett." />
      </Helmet>

      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 rounded-xl"><Component className="h-8 w-8 text-blue-600" /></div>
          <h1 className="text-4xl font-bold">Produktutvikling og Design</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          For å leve av duodji må man ofte fornye seg. Sametinget gir støtte til å utvikle nye produkter, modernisere design eller tilpasse tradisjonelle teknikker til nye markeder.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="md:col-span-2 border-blue-100 bg-blue-50/50">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-4 text-blue-900">Hva kan du få støtte til?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Materialkostnader</strong> til prototyper og første kolleksjon.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Konsulenthjelp</strong> (f.eks. designer eller mønsterkonstruktør).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Markedsundersøkelser</strong> og testing av produkter.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-white p-6 rounded-xl border shadow-sm h-fit">
          <h4 className="font-bold mb-2">Satser 2025</h4>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-muted-foreground">Maks støtte:</p>
              <p className="font-bold text-lg">500 000 kr</p>
            </div>
            <div>
              <p className="text-muted-foreground">Dekningsgrad:</p>
              <p className="font-bold text-lg">Inntil 50%</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-900">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
            Unngå "Hobby-fellen"
          </h2>
          <p className="mb-4 text-amber-900/80">
            Sametinget skiller strengt mellom hobby og næring. For å få støtte til produktutvikling må du sannsynliggjøre at produktet skal selges med fortjeneste.
          </p>
          <p className="text-amber-900/80">
            Vi hjelper deg å sette opp en <strong>produktkalkyle</strong> som viser at du har regnet på timebruk, materialsvinn og marginer. Uten dette blir søknaden ofte avslått som "ikke næringsrettet".
          </p>
        </div>
      </section>

      <div className="text-center">
        <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          Få hjelp med søknaden
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}