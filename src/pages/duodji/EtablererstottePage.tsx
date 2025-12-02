import { ArrowLeft, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export function EtablererstottePage() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Etablererstøtte Duodji | Start din egen bedrift | Averdi</title>
        <meta name="description" content="Start duodji-bedrift med inntil 75% støtte fra Sametinget. Vi hjelper deg med forretningsplan og mva-registrering." />
      </Helmet>

      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-green-100 rounded-xl"><DollarSign className="h-8 w-8 text-green-600" /></div>
          <h1 className="text-4xl font-bold">Etablererstøtte</h1>
        </div>
        <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-6">
          Høyeste sats: 75% dekning
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Er du i startfasen (registrert for mindre enn 3 år siden)? Da har du tilgang til Sametingets gunstigste ordning. Her kan du få dekket store deler av oppstartskostnadene.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-4">Dette dekkes:</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Mindre investeringer (verktøy/utstyr)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Markedsføring og profilering</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Kurs og kompetanseheving</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> <strong>Egen lønn</strong> (inntil 15 000 kr/mnd i utviklingsfasen)</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
          <h3 className="font-bold text-lg mb-4 text-green-900">Krav for å søke</h3>
          <ul className="space-y-3 text-sm text-green-800">
            <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2"/> Bedriften må være under 3 år gammel.</li>
            <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2"/> Du må ha en godkjent forretningsplan.</li>
            <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2"/> Du kan ikke ha fått etablererstøtte før.</li>
          </ul>
        </div>
      </div>

      <section className="mb-16 border-l-4 border-primary pl-6 py-2">
        <h3 className="text-xl font-bold mb-2">Vi hjelper deg med "Momsfellen"</h3>
        <p className="text-muted-foreground">
          Mange nyetablerere glemmer at tilskudd beregnes <em>eksklusiv mva</em>. Hvis du kjøper en symaskin til 25 000 kr, må du legge ut momsen (5 000 kr) selv. Vi hjelper deg å planlegge likviditeten slik at du ikke går tom for penger før støtten utbetales.
        </p>
      </section>

      <div className="text-center">
        <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
          Hjelp meg med forretningsplanen
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}