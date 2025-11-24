import { Button } from './ui/button';
import { scrollToSection } from './ui/utils';
import karasjokOver from '../assets/karasjok_Over.avif';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      <div className="px-4 sm:px-10 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
            <div>
              <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
                <p className="mb-2 font-medium text-indigo-600 uppercase">
                  <span className="rotate-90 inline-block mr-2">|</span> 
                  Regnskap og økonomitjenester
                </p>
                <h1 className="text-slate-900 md:text-5xl text-4xl font-bold !leading-tight">
                  Velkommen til Averdi
                </h1>
                <p className="text-slate-600 text-base leading-relaxed mt-6 mb-4">
                  Din partner for trygg økonomistyring – med faglig tyngde og hjertet i Finnmark
                </p>
                <p className="text-slate-600 text-base leading-relaxed mt-6">
                  Siden 1999 har vi vært en trygg havn for norske bedrifter. Men trygghet betyr ikke stillstand. Hos Averdi møter du en unik kombinasjon: autoriserte regnskapsførere med lang erfaring som kan lovverket til fingerspissene sammen med våre yngre digitale hoder sørger vi for at du utnytter dagens muligheter fullt ut.
                </p>

                <div className="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-lg px-6 py-3 cursor-pointer outline-0"
                  >
                    Kontakt oss
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('services')}
                    className="bg-transparent hover:border-indigo-700 border border-gray-400 transition-all text-base text-slate-900 font-medium rounded-lg px-6 py-3 cursor-pointer outline-0"
                  >
                    Se tjenester
                  </Button>
                </div>
              </div>

              <div className="flex items-center flex-wrap max-lg:justify-center gap-4 mt-8">
                <div className="text-slate-600 text-base">
                  <span className="font-semibold">Siden 1999</span> - Pålitelig økonomipartner
                </div>
              </div>
            </div>

            <div className="w-full aspect-[42/33]">
              <img 
                src={karasjokOver} 
                alt="Profesjonelt kontormiljø hos Averdi"
                className="w-full h-full object-contain" 
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}