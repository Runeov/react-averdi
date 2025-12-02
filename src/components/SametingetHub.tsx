import { ArrowLeft, Landmark, ArrowRight, TrendingUp, Brush } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';

interface SametingetHubProps {
  onBack: () => void;
}

export function SametingetHub({ onBack }: SametingetHubProps) {
  const guides = [
    {
      title: "Tilskudd til Variert Næringsliv",
      description: "Den viktigste støtten til investeringer og forretningsutvikling i STN-området. Inkluderer kravet om Statsautorisert Regnskapsfører.",
      icon: TrendingUp,
      link: "/kunnskapsbank/sametinget/variert-naeringsliv",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Duodji (Håndverk) Støtteordninger",
      description: "Få støtte til alt fra produktutvikling og utstyr til kompetanseheving for ditt samiske håndverk. Vi åpner alle de 6 ordningene.",
      icon: Brush,
      link: "/kunnskapsbank/sametinget/duodji",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-20">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-12 pl-0 text-muted-foreground hover:text-primary -ml-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tilbake til Kunnskapsbank
      </Button>

      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Landmark className="h-4 w-4" />
          Sametinget
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
          Sametinget: Støtte og Regnskapshjelp
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Her finner du våre dypdykk i de viktigste tilskuddsordningene for næringsliv og duodji i samiske områder.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {guides.map((guide, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link to={guide.link}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <guide.icon className={`h-8 w-8 ${guide.color} p-1 rounded-md ${guide.bgColor}`} />
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-bold mb-2">
                  {guide.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {guide.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}