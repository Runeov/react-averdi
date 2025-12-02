import { ArrowLeft, School, GraduationCap, Users, AlertCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export function KompetansehevingPage() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Støtte til Kurs og Kompetanse Duodji | Lærling & Mentor | Averdi</title>
        <meta name="description" content="Vil du heve kompetansen din i duodji? Søk støtte til kurs, hospitering eller mentorordning. Vi hjelper bedriften din med søknaden." />
      </Helmet>

      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-yellow-100 rounded-xl"><School className="h-8 w-8 text-yellow-700" /></div>
          <h1 className="text-4xl font-bold">Kompetanseheving og Kurs</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Ingen blir utlært i duodji. Denne ordningen er todelt: Den støtter deg som vil <em>lære</em>, og deg som vil <em>lære bort</em> (arrangere kurs).
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* For den som vil lære */}
        <Card className="border-yellow-200 bg-yellow-50/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-yellow-700" />
              <h3 className="font-bold text-lg">For din egen utvikling</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Som duodjiutøver kan du søke støtte for å reise på kurs, hospitere hos en mester, eller delta på fagsamlinger.
            </p>
            <ul className="space-y-2 text-sm font-medium text-yellow-900">
              <li>• Reise- og oppholdskostnader</li>
              <li>• Kursavgifter</li>
              <li>• Materialer til opplæring</li>
            </ul>
          </CardContent>
        </Card>

        {/* For den som vil arrangere */}
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-blue-700" />
              <h3 className="font-bold text-lg">Arrangere kurs</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Duodjibedrifter og foreninger kan søke støtte til å leie inn instruktører og holde kurs for å videreføre kunnskap.
            </p>
            <ul className="space-y-2 text-sm font-medium text-blue-900">
              <li>• Honorar til instruktør</li>
              <li>• Leie av lokaler</li>
              <li>• Markedsføring av kurset</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-16">
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            Viktig om regnskap for kurs
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hvis du arrangerer kurs mot betaling, er dette <strong>skattepliktig inntekt</strong>. Mange glemmer at kursvirksomhet ofte er mva-pliktig (unntatt ren undervisning, men grensegangen er vanskelig).
            </p>
            <p>
              Sametinget krever et eget prosjektregnskap for kurset som viser deltakeravgifter og faktiske kostnader. Vi hjelper deg å sette opp dette riktig så du ikke får en skattesmell i etterkant.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Button onClick={scrollToContact} size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8">
          Få hjelp med kursbudsjett
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}