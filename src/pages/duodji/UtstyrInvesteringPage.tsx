import { ArrowLeft, Gem, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/button';

export function UtstyrInvesteringPage() {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <Helmet>
        <title>Støtte til Utstyr Duodji | Verksted og Maskiner | Averdi</title>
        <meta name="description" content="Trenger du laserkutter, symaskin eller verktøy? Sametinget gir inntil 50% støtte til investeringer i duodji-verksted." />
      </Helmet>

      <Button variant="ghost" onClick={() => navigate('/kunnskapsbank/sametinget/duodji')} className="mb-8 pl-0 hover:bg-transparent hover:text-primary -ml-2">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Duodji Oversikt
      </Button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-100 rounded-xl"><Gem className="h-8 w-8 text-purple-600" /></div>
          <h1 className="text-4xl font-bold">Utstyr og Investering</h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Profesjonelt utstyr er dyrt, men nødvendig for effektiv produksjon. Sametinget støtter "harde" investeringer som øker kapasiteten din.
        </p>
      </header>

      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h3 className="text-xl font-bold mb-6">Hva regnes som "Investering"?</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Dette støttes:</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Maskiner (Symaskiner, skinnmaskiner)</li>
              <li>• Spesialverktøy og inventar til verksted</li>
              <li>• Ombygging av lokaler til produksjon</li>
              <li>• Datautstyr (hvis strengt nødvendig for produksjon, f.eks. CAD)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> Dette støttes IKKE:</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Rene utskiftinger (vedlikehold)</li>
              <li>• Kjøretøy og tilhengere</li>
              <li>• Brukt utstyr (som hovedregel)</li>
              <li>• Varekostnader/materialer (dette går under drift)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl mb-12">
        <h3 className="font-bold text-purple-900 mb-2">Viktig om regnskap</h3>
        <p className="text-purple-800 text-sm">
          Investeringer over 15 000 kr skal som hovedregel <strong>aktiveres</strong> i regnskapet og avskrives over tid. Dette påvirker skatten din. Vi hjelper deg å vurdere om det lønner seg å kjøpe eller lease (selv om leasing sjelden støttes).
        </p>
      </div>

      <div className="text-center">
        <Button onClick={scrollToContact} size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
          Kontakt oss om investering
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}