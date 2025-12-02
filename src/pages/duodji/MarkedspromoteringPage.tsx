import { ArrowLeft, ShoppingBag, Globe, Plane, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';

export function MarkedspromoteringPage() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Markedsstøtte Duodji | Nettbutikk & Messer | Averdi</title>
        <meta name="description" content="Få støtte til markedsføring, nettbutikk eller messedeltakelse. Vi hjelper deg å dokumentere effekten overfor Sametinget." />
      </Helmet>

      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-pink-100 rounded-xl"><ShoppingBag className="h-8 w-8 text-pink-600" /></div>
          <h1 className="text-4xl font-bold">Marked og Promotering</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Det hjelper ikke å lage verdens fineste kniv hvis ingen vet om den. Sametinget støtter tiltak som får produktene dine ut til kunden.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
          <Globe className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">Digital Synlighet</h3>
          <p className="text-muted-foreground text-sm">
            Støtte til å bygge <strong>nettbutikk</strong>, profesjonell fotografering av produkter, eller betalt annonsering i sosiale medier.
          </p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
          <Plane className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">Messer og Salg</h3>
          <p className="text-muted-foreground text-sm">
            Dekning av reise, opphold og standleie for å delta på viktige salgsmesser (f.eks. Jokkmokk, Oslo Design Fair).
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl text-center mb-12">
        <h3 className="text-xl font-bold mb-4">Krav til søknaden</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Du må ha en klar <strong>markedsplan</strong>. Hvem er kunden? Hvordan skal tiltaket øke omsetningen? Vi hjelper deg å formulere dette profesjonelt.
        </p>
        <Button onClick={scrollToContact} className="bg-pink-600 hover:bg-pink-700 text-white">
          Få hjelp med markedsplan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}