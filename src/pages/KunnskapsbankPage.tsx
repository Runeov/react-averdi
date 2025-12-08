import { BookOpen, ArrowRight, Newspaper, Building2, ShoppingBag, Landmark, Briefcase } from 'lucide-react';
import { NewsSection } from '../components/NewsSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function KunnskapsbankPage() {
  const guides = [
    {
      title: "Sametinget & Tilskudd",
      description: "Komplett guide for bedrifter i STN-området. Lær om støtteordninger, krav til lønnsomhet og hvordan du unngår avslag.",
      icon: Landmark,
      color: "text-[#E86C1F]",
      bgColor: "bg-[#E86C1F]/10",
      borderColor: "border-[#E86C1F]/20",
      hoverBorder: "hover:border-[#E86C1F]/50",
      link: "/kunnskapsbank/sametinget",
      badge: "Utvalgt Guide"
    },
    {
      title: "Bedrifter & Næringsliv",
      description: "Komplett veiledning for bedrifter i Nord-Norge. Lær om tiltakssonen, handel, arbeidsgiveravgift og økonomisk styring.",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      hoverBorder: "hover:border-blue-300",
      link: "/kunnskapsbank/bedrifter",
      badge: "Nyhet"
    },
    {
      title: "Lag & Foreninger",
      description: "Trygg økonomistyring for frivilligheten. Få hjelp med momskompensasjon, medlemsregister og styrearbeid.",
      icon: Building2,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      hoverBorder: "hover:border-red-300",
      link: "/kunnskapsbank/organisasjoner",
      badge: "Populær"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-background">
      <Helmet>
        <title>Kunnskapsbank - Guider for Næringsliv og Foreninger | Averdi</title>
        <meta 
          name="description" 
          content="Få tilgang til ekspertguider om støtteordninger fra Sametinget, lønnsom butikkdrift og økonomistyring for lag og foreninger. Averdi deler kunnskap." 
        />
        <meta name="keywords" content="Sametinget støtte, STN-området, regnskap butikk, økonomi forening, regnskapsfører Karasjok, bedriftsrådgivning" />
      </Helmet>

      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Kunnskapsbank
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Ressurser og Fagstoff
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vi deler vår kompetanse for å hjelpe din bedrift å vokse. Velg ditt område under for skreddersydde guider.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {guides.map((guide, index) => (
              <Link 
                key={index}
                to={guide.link}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg border ${guide.borderColor} ${guide.hoverBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full`}
              >
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${guide.bgColor} ${guide.color}`}>
                    {guide.badge}
                  </span>
                </div>
                
                <div className={`mb-6 p-4 rounded-xl w-fit ${guide.bgColor} ${guide.color} group-hover:scale-110 transition-transform duration-300`}>
                  <guide.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {guide.description}
                </p>
                
                <div className="flex items-center font-medium text-primary group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                  Gå til guiden
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          {/* News Section Integration */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-8">
              <Newspaper className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Siste Nytt</h3>
            </div>
            <NewsSection />
          </div>
        </div>
      </section>
    </main>
  );
}