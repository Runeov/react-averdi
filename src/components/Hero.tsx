import { Button } from './ui/button';
import { scrollToSection } from './ui/utils';
import karasjokOver from '../assets/karasjok_Over.avif';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Regnskap og rådgivning
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Trygg økonomistyring <br className="hidden lg:block" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                med hjertet i Finnmark
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Siden 1999 har vi vært en trygg havn for bedrifter. Men trygghet betyr ikke stillstand.
            </p>

            <div className="space-y-4 text-base text-muted-foreground mb-10 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/5 shadow-sm">
              <p>
                Hos Averdi møter <strong className="text-foreground">erfaring innovasjon</strong>.
              </p>
              <p>
                Vi kobler autoriserte regnskapsførere som kan lovverket til fingerspissene, med unge digitale hoder som sikrer at du utnytter dagens teknologi fullt ut.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-full px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:bg-primary/90"
              >
                Kontakt oss
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="rounded-full px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 border-primary/20 hover:text-primary"
              >
                Se våre tjenester
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Etablert 1999</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Lokal kunnskap</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-full flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none group">
              {/* Decorative blob behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10 group-hover:blur-3xl transition-all duration-700"></div>
              
              <img 
                src={karasjokOver} 
                alt="Karasjok oversiktsbilde - Averdi sitt hjemsted"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/50 transition-transform duration-700 group-hover:scale-[1.02]" 
                fetchPriority="high"
              />
              
              {/* Floating Card: Lokasjon */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-primary/10 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Lokasjon</p>
                    <p className="text-sm font-bold text-foreground">Karasjok, Norge</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}