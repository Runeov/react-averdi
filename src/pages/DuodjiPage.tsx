import { ArrowLeft, Brush, Component, Gem, ShoppingBag, DollarSign, School, FileText } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function DuodjiPage() {
  const navigate = useNavigate();

  const duodjiTopics = [
    { 
      title: "Produktutvikling og Design", 
      description: "Støtte til å utvikle nye produkter, prototyper og designprosjekter innen duodji.", 
      icon: Component, 
      link: "/kunnskapsbank/sametinget/duodji/produktutvikling" 
    },
    { 
      title: "Marked og Promotering", 
      description: "Finansiering for messer, nettbutikk, markedsføringsmateriell og salgsfremmende tiltak.", 
      icon: ShoppingBag, 
      link: "/kunnskapsbank/sametinget/duodji/markedspromotering" 
    },
    { 
      title: "Utstyr og Investering", 
      description: "Tilskudd til innkjøp av maskiner, verktøy og utstyr som øker produksjonskapasiteten.", 
      icon: Gem, 
      link: "/kunnskapsbank/sametinget/duodji/utstyr-investering" 
    },
    { 
      title: "Etablererstøtte", 
      description: "Hjelp til de første driftsårene, for å sikre en solid økonomisk oppstart for duodji-utøvere.", 
      icon: DollarSign, 
      link: "/kunnskapsbank/sametinget/duodji/etablererstotte" 
    },
    { 
      title: "Dokumentasjon og Formidling", 
      description: "Støtte til dokumentasjon av tradisjonell kunnskap og formidling gjennom publikasjoner eller utstillinger.", 
      icon: FileText, 
      link: "/kunnskapsbank/sametinget/duodji/dokumentasjon" 
    },
    { 
      title: "Kompetanseheving og Kurs", 
      description: "Tilskudd til kurs, workshops og mentorordninger for å øke din faglige kompetanse i duodji.", 
      icon: School, 
      link: "/kunnskapsbank/sametinget/duodji/kompetanseheving" 
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-background max-w-screen-xl mx-auto">
      <Helmet>
        <title>Duodji Støtteordninger - 6 Måter å få Tilskudd | Averdi</title>
        <meta 
          name="description" 
          content="Oversikt over de 6 støtteordningene for Duodji fra Sametinget. Vi hjelper deg med søknadsprosessen for produktutvikling, utstyr og markedsføring." 
        />
      </Helmet>
      
      <Button 
        variant="ghost" 
        onClick={() => navigate('/kunnskapsbank/sametinget')} 
        className="mb-12 pl-0 text-muted-foreground hover:text-primary -ml-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Sametinget-oversikt
      </Button>

      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
          <Brush className="h-4 w-4" />
          Duodji Støtte
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground leading-tight">
          6 Duodji Ordninger: Få støtte til Håndverk
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Duodji-utøvere har tilgang til flere spesialtilpassede ordninger. Velg ditt fokusområde under for å finne ut hvordan Averdi kan hjelpe med regnskap og søknadsbudsjettering.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {duodjiTopics.map((topic, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border-primary/10">
            <Link to={topic.link} className="flex flex-col h-full">
              <CardHeader className="pb-4">
                <topic.icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {topic.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}