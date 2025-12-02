import { ArrowLeft, School } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';

export function KompetansehevingPage() {
  const navigate = useNavigate();
  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Kompetanseheving for Duodji | Kurs og Mentor | Averdi</title>
        <meta name="description" content="Vil du lære mer? Søk støtte til kurs, hospitering eller mentorordninger. Vi hjelper deg å budsjettere for din faglige utvikling." />
      </Helmet>
      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-lg"><School className="h-6 w-6 text-blue-600" /></div>
        <h1 className="text-4xl font-bold">Kompetanseheving og Kurs</h1>
      </div>
      <p className="text-xl text-muted-foreground mb-8">
        Ingen blir utlært. Søk midler til å delta på kurs, lære av en mentor, eller selv holde kurs for å videreføre din kunnskap.
      </p>
      <div className="bg-muted/30 p-8 rounded-xl border border-dashed border-muted-foreground/25 text-center">
         <p>Her kommer detaljert guide om kompetansestøtte...</p>
      </div>
    </main>
  );
}