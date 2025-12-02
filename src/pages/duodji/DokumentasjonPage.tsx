import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export function DokumentasjonPage() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Støtte til Dokumentasjon av Duodji | Bok & Utstilling | Averdi</title>
        <meta name="description" content="Søk støtte til å dokumentere og formidle duodji-tradisjoner. Vi hjelper deg med prosjektbudsjettet for bokutgivelser og utstillinger." />
      </Helmet>

      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-cyan-100 rounded-xl"><FileText className="h-8 w-8 text-cyan-600" /></div>
          <h1 className="text-4xl font-bold">Dokumentasjon og Formidling</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Har du unik kunnskap som bør bevares? Sametinget gir støtte til prosjekter som sikrer at gamle teknikker, mønstre og arbeidsmetoder ikke går tapt.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100">
            <h3 className="font-bold text-lg mb-4 text-cyan-900">Typiske prosjekter som støttes:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <BookOpen className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm"><strong>Bokutgivelser:</strong> Fagbøker om teknikker, materialbruk eller lokal duodji-historie.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm"><strong>Utstillinger:</strong> Produksjon av utstillingsmateriell og kataloger for visning av duodji.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm"><strong>Digitalisering:</strong> Foto og video av arbeidsprosesser for publisering på nett.</span>
              </li>
            </ul>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-4">Økonomiske rammer</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Maksimal støtte:</p>
                <p className="text-2xl font-bold text-cyan-700">500 000 kr</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dekningsgrad:</p>
                <p className="font-medium">Inntil 50% av kostnadene</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground italic">
                  NB: Rene trykkekostnader dekkes ofte over en annen post (litteratur). Vi hjelper deg å velge riktig ordning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mb-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            Krav til "Faglig Innhold"
          </h2>
          <p className="mb-4 text-muted-foreground">
            Dette er den vanskeligste delen av søknaden. Det er ikke nok å si at du skal "lage en bok". Du må beskrive:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-foreground font-medium">
            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-orange-400 rounded-full" /> Hvordan kunnskapen er truet</li>
            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-orange-400 rounded-full" /> Målgruppen for formidlingen</li>
            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-orange-400 rounded-full" /> Faglig kvalitetssikring</li>
            <li className="flex items-center gap-2"><div className="h-2 w-2 bg-orange-400 rounded-full" /> Distribusjonsplan</li>
          </ul>
        </div>
      </section>

      <div className="text-center">
        <Button onClick={scrollToContact} size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8">
          Kvalitetssikre prosjektet ditt
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}