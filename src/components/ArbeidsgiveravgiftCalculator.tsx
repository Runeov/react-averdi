import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { kommuneListe, satser2025 } from '../data/agaData';

export default function ArbeidsgiveravgiftCalculator() {
  const [payroll, setPayroll] = useState<number>(5000000);
  const [selectedKommuneId, setSelectedKommuneId] = useState<string>("5610_5"); // Karasjok som default
  const [isAgriculture, setIsAgriculture] = useState(false);

  // Formatere valuta
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('no-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 }).format(val);

  const formatPercent = (val: number) => 
    new Intl.NumberFormat('no-NO', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(val);

  // Finn valgt kommune
  const kommune = useMemo(() => 
    kommuneListe.find(k => k.id === selectedKommuneId), 
  [selectedKommuneId]);

  // Beregninger
  const beregnAvgift = () => {
    if (!kommune) return { cost: 0, rate: 0, navn: '' };

    const soneData = satser2025.satser[kommune.sone];
    const sats = isAgriculture ? soneData.landbruk : soneData.oridnaer;
    
    // Spesialhåndtering for Sone 1a
    if (kommune.sone === "1a" && !isAgriculture) {
      const differanseSats = satser2025.sone1_ref - sats;
      const maksLonnsgrunnlagLavSats = satser2025.fribeloep_sone1a / differanseSats;

      if (payroll <= maksLonnsgrunnlagLavSats) {
        return { 
          cost: payroll * sats, 
          rate: sats, 
          navn: soneData.navn,
          fribeloepBrukt: payroll * differanseSats,
          overFribeloep: false
        };
      } else {
        const kostnadLavDel = maksLonnsgrunnlagLavSats * sats;
        const kostnadHoyDel = (payroll - maksLonnsgrunnlagLavSats) * satser2025.sone1_ref;
        const totalKostnad = kostnadLavDel + kostnadHoyDel;
        
        return { 
          cost: totalKostnad, 
          rate: totalKostnad / payroll,
          navn: `${soneData.navn} (Kombinert)`,
          fribeloepBrukt: satser2025.fribeloep_sone1a,
          overFribeloep: true
        };
      }
    }

    return { 
      cost: payroll * sats, 
      rate: sats, 
      navn: soneData.navn 
    };
  };

  const resultat = beregnAvgift();
  const sammenligningSone1 = payroll * satser2025.sone1_ref;
  const besparelse = sammenligningSone1 - resultat.cost;

  // Gruppere kommuner for dropdown
  const grupperteKommuner = useMemo(() => {
    const grupper: Record<string, typeof kommuneListe> = {};
    kommuneListe.forEach(k => {
      if (!grupper[k.fylke]) grupper[k.fylke] = [];
      grupper[k.fylke].push(k);
    });
    return Object.entries(grupper).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-[#E86C1F]/5 to-[#F4B223]/10 border-2 border-[#E86C1F]/20 rounded-2xl shadow-lg relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#E86C1F] rounded-full filter blur-3xl opacity-5"></div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="p-3 bg-[#E86C1F] rounded-xl shadow-md">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Offisiell avgiftskalkulator (2025)</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6 relative z-10">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">Velg kommune:</label>
          <div className="relative">
            <select 
              value={selectedKommuneId} 
              onChange={(e) => setSelectedKommuneId(e.target.value)}
              className="w-full p-4 border-2 border-slate-300 rounded-xl text-lg bg-white focus:ring-2 focus:ring-[#E86C1F] outline-none appearance-none cursor-pointer hover:border-[#E86C1F]/50 transition-colors"
            >
              {grupperteKommuner.map(([fylke, kommuner]) => (
                <optgroup key={fylke} label={fylke}>
                  {kommuner.map(k => (
                    <option key={k.id} value={k.id}>
                      {k.navn} (Sone {k.sone}{k.kommentar ? ` - ${k.kommentar}` : ''})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
        <div>
           <label className="block text-sm font-semibold text-slate-700 mb-3">Årlige lønnskostnader (brutto):</label>
           <div className="relative">
             <input 
                type="number" 
                value={payroll} 
                onChange={(e) => setPayroll(Number(e.target.value))} 
                className="w-full p-4 border-2 border-slate-300 rounded-xl text-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#E86C1F] outline-none pr-16" 
                placeholder="5000000" 
             />
             <span className="absolute right-5 top-5 text-slate-500 font-semibold">NOK</span>
           </div>
        </div>
      </div>

      <div className="mb-6 relative z-10">
        <label className="flex items-center gap-2 cursor-pointer select-none group">
          <input 
            type="checkbox" 
            checked={isAgriculture}
            onChange={(e) => setIsAgriculture(e.target.checked)}
            className="w-5 h-5 text-[#E86C1F] rounded focus:ring-[#E86C1F] border-slate-300 cursor-pointer"
          />
          <span className="text-slate-700 font-medium group-hover:text-[#E86C1F] transition-colors">Virksomhet innen landbruk eller fiske (Særskilte satser i Sone 4a)</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative z-10">
        <div className="bg-white p-5 rounded-xl border-2 border-slate-200 shadow-sm opacity-70">
          <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-2">Sone 1 (Referanse 14,1%)</p>
          <p className="text-xl font-bold text-slate-500">{formatCurrency(sammenligningSone1)}</p>
        </div>
        <div className={`p-5 rounded-xl border-2 shadow-md transition-all duration-300 ${kommune?.sone === '5' ? 'bg-green-50 border-green-300 ring-2 ring-green-500/20' : 'bg-white border-slate-300'}`}>
          <p className={`text-xs uppercase tracking-wide font-bold mb-2 ${kommune?.sone === '5' ? 'text-green-700' : 'text-slate-600'}`}>
            Din kostnad ({kommune?.navn}, {resultat.navn})
          </p>
          <div className="flex items-baseline gap-2">
            <p className={`text-2xl font-bold ${kommune?.sone === '5' ? 'text-green-800' : 'text-slate-800'}`}>
                {formatCurrency(resultat.cost)}
            </p>
            <span className="text-sm font-semibold text-slate-500">
                ({formatPercent(resultat.rate)})
            </span>
          </div>
          {/* Info om fribeløp for sone 1a */}
          {kommune?.sone === '1a' && !isAgriculture && (
             <div className="mt-2 text-xs text-slate-600 bg-slate-100 p-2 rounded border border-slate-200">
                {resultat.overFribeloep ? (
                    <span className="text-red-600 font-semibold">Fribeløp (850k) oppbrukt. Full sats på overskytende.</span>
                ) : (
                    <span>Fribeløp brukt: {formatCurrency(resultat.fribeloepBrukt || 0)} av 850 000.</span>
                )}
             </div>
          )}
        </div>
      </div>

      <div className="pt-6 border-t-2 border-slate-200/50 text-center relative z-10">
        <p className="text-sm text-slate-600 mb-2 font-medium">Din likviditetsfordel:</p>
        <p className="text-5xl font-extrabold bg-gradient-to-r from-[#E86C1F] to-[#F4B223] bg-clip-text text-transparent inline-block">
          {formatCurrency(besparelse)}
        </p>
        {kommune?.sone === "5" && (
            <p className="text-green-600 font-medium text-sm mt-2 flex justify-center items-center gap-1">
                <CheckCircle2 className="w-4 h-4"/> Ingen avgift i tiltakssonen
            </p>
        )}
      </div>

      {/* NY CTA: KONVERTERING I KALKULATOR */}
      <div className="mt-8 bg-white/60 p-4 rounded-xl border border-[#E86C1F]/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 backdrop-blur-sm">
        <div className="flex items-start gap-3">
            <div className="p-2 bg-[#E86C1F]/10 rounded-full mt-1 shrink-0">
                <HelpCircle className="w-5 h-5 text-[#E86C1F]" />
            </div>
            <div className="text-left">
                <p className="text-sm font-bold text-slate-800">Stemmer ikke tallene med ditt lønnssystem?</p>
                <p className="text-xs text-slate-600">Mange betaler for mye uten å vite det. Vi tar en rask sjekk.</p>
            </div>
        </div>
        <Link to="/kontakt" className="whitespace-nowrap flex items-center gap-2 text-sm font-bold text-white bg-[#E86C1F] hover:bg-[#d6621a] px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md">
            Kontakt oss
            <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}