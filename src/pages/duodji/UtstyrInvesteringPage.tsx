import { ArrowLeft, Gem } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';

export function UtstyrInvesteringPage() {
  const navigate = useNavigate();
  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Investeringsstøtte Duodji | Verksted og Utstyr | Averdi</title>
        <meta name="description" content="Trenger du nye maskiner eller verktøy til verkstedet? Vi hjelper duodji-utøvere med investeringsbudsjett og søknad til Sametinget." />
      </Helmet>
      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-lg"><Gem className="h-6 w-6 text-blue-600" /></div>
        <h1 className="text-4xl font-bold">Utstyr og Investering</h1>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Bedre verktøy gir bedre håndverk og effektivitet. Denne posten dekker fysiske investeringer i verkstedet ditt.
      </p>
      <div className="bg-muted/30 p-8 rounded-xl border border-dashed border-muted-foreground/25 text-center">
         <p>Her kommer detaljert guide om investeringsstøtte...</p>
      </div>
    </main>
  );
}