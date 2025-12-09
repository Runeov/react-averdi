import React, { useState } from 'react';

const VippsCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(20000);
  
  // Logic assumptions
  const feePercent = 0.0175; // 1.75%
  const fee = Math.round(revenue * feePercent);
  const timeManual = 6; // Hours/month manual
  const timeAuto = 0.5; // Hours/month automated
  
  // Simple Chart Height Calculation for SVG
  const maxTime = 7;
  const hManual = (timeManual / maxTime) * 100;
  const hAuto = (timeAuto / maxTime) * 100;

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Hva koster det, og hva sparer vi?</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Inputs */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-8 text-[#ff5b24]">Kostnadskalkulator</h3>
            
            <div className="mb-10">
              <label className="block text-sm text-slate-400 mb-4">Månedlig omsetning via Vipps (kr)</label>
              <input 
                type="range" 
                min="1000" max="100000" step="1000" 
                value={revenue}
                onChange={(e) => setRevenue(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-[#ff5b24] mb-4"
              />
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">1 000 kr</span>
                <span className="text-3xl font-bold text-white">{revenue.toLocaleString('no-NO')} kr</span>
                <span className="text-slate-500">100 000 kr</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-700">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Est. Vipps Gebyr (~1.75%)</p>
                <p className="text-3xl font-bold text-white">{fee.toLocaleString('no-NO')} kr</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Tid spart (Admin)</p>
                <p className="text-3xl font-bold text-green-400">~{Math.round(timeManual - timeAuto)} timer</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center italic">* Priser er estimater for idrettslag. Sjekk din avtale.</p>
          </div>

          {/* Simple SVG Chart */}
          <div className="bg-white p-8 rounded-2xl text-slate-900 flex flex-col">
            <h3 className="text-lg font-bold mb-8 text-slate-800">Tidsbruk per måned (Timer)</h3>
            
            <div className="flex-1 flex items-end justify-center gap-12 px-4 pb-4 border-b border-slate-200 min-h-[200px]">
              {/* Bar 1 */}
              <div className="flex flex-col items-center w-24 group">
                <div className="font-bold mb-2 text-slate-600 group-hover:text-slate-900">{timeManual}t</div>
                <div 
                  className="w-full bg-slate-300 rounded-t-lg transition-all duration-500 group-hover:bg-slate-400"
                  style={{ height: `${hManual * 2}px` }} 
                ></div>
                <div className="mt-3 text-sm font-medium text-slate-500 text-center leading-tight">Manuell<br/>Avstemming</div>
              </div>

              {/* Bar 2 */}
              <div className="flex flex-col items-center w-24 group">
                <div className="font-bold mb-2 text-blue-600">{timeAuto}t</div>
                <div 
                  className="w-full bg-blue-600 rounded-t-lg transition-all duration-500 shadow-lg shadow-blue-200"
                  style={{ height: `${hAuto * 2}px` }} 
                ></div>
                <div className="mt-3 text-sm font-bold text-blue-800 text-center leading-tight">Automatisert<br/>(PowerOffice)</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VippsCalculator;