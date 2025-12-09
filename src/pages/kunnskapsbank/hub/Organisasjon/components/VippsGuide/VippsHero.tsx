import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

interface VippsHeroProps {
  onStartClick: () => void;
}

const VippsHero: React.FC<VippsHeroProps> = ({ onStartClick }) => {
  return (
    <header className="bg-white pt-24 pb-24 relative overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="bg-orange-100 text-[#ff5b24] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
            For Idrettslag & Foreninger
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Fra Kiosksalg til <span className="text-averdi-blue">Ferdig Regnskap</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            En komplett guide for å koble Vipps MobilePay sammen med PowerOffice Go. Slipp manuelle bilag og få automatisk bokføring av dugnad, kiosk og medlemskontingenter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onStartClick} 
              className="bg-[#ff5b24] hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1"
            >
              Start Oppsettet
            </button>
            <a 
              href="#resources" 
              className="bg-white border-2 border-slate-200 text-slate-700 hover:border-averdi-blue hover:text-averdi-blue text-lg px-8 py-4 rounded-full font-semibold transition"
            >
              Se Dokumentasjon
            </a>
          </div>
        </div>

        {/* Comparison Blocks */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-lg text-slate-700 mb-2 flex items-center">
              <Clock className="w-5 h-5 text-red-500 mr-2" /> Den gamle måten
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Manuell nedlasting av CSV-filer fra Vipps-portalen, knotete matching mot bankutskrift, og manuell føring av "Dagens salg".
            </p>
            <div className="w-full bg-slate-200 rounded-full h-3 mb-2 overflow-hidden">
              <div className="bg-red-400 h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-right text-slate-500 font-medium">Tidsbruk: Høy</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-lg text-averdi-blue mb-2 flex items-center">
              <Sparkles className="w-5 h-5 text-blue-500 mr-2" /> Den nye måten
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Transaksjoner hentes automatisk. PowerOffice Go matcher innbetalinger mot faktura (KID) eller bokfører dagsoppgjør direkte.
            </p>
            <div className="w-full bg-white rounded-full h-3 mb-2 overflow-hidden border border-blue-100">
              <div className="bg-green-500 h-full rounded-full" style={{ width: '15%' }}></div>
            </div>
            <p className="text-xs text-right text-slate-500 font-medium">Tidsbruk: Minimal</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VippsHero;