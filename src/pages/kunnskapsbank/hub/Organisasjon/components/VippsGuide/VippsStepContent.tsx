import React, { useState } from 'react';
import { 
  Check, ClipboardList, ArrowRight, ArrowLeft, Plug, 
  MousePointer2, Sliders, ArrowLeftRight, Rocket, ArrowDown 
} from 'lucide-react';

interface Props {
  currentStep: number;
  setStep: (step: number) => void;
}

const VippsStepContent: React.FC<Props> = ({ currentStep, setStep }) => {
  
  // --- SUB-COMPONENT: Step 1 (Checklist) ---
  const PreparationStep = () => {
    const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false]);

    const toggleCheck = (index: number) => {
      const newItems = [...checkedItems];
      newItems[index] = !newItems[index];
      setCheckedItems(newItems);
    };

    return (
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 text-[#ff5b24] p-3 rounded-xl mr-4">
            <ClipboardList className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">1. Forberedelser</h2>
        </div>
        
        <p className="text-slate-600 mb-8 text-lg">
          Før vi kobler systemene sammen, må vi sikre at du har riktige tilganger. Dette er en engangsjobb.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
          <h3 className="font-bold text-slate-900 mb-4">Sjekkliste før start:</h3>
          <ul className="space-y-3">
            {[
              "Vi har en aktiv Vipps Bedriftsavtale.",
              "Jeg har Administrator-tilgang i PowerOffice Go.",
              "Jeg har tilgang til Vipps Portalen (portal.vippsmobilepay.com)."
            ].map((item, idx) => (
              <li 
                key={idx}
                onClick={() => toggleCheck(idx)}
                className="flex items-start cursor-pointer hover:bg-white p-3 rounded-lg transition border border-transparent hover:border-slate-200 select-none"
              >
                <div className={`mt-0.5 mr-3 w-5 h-5 rounded border flex items-center justify-center transition-colors ${checkedItems[idx] ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-slate-300'}`}>
                  {checkedItems[idx] && <Check className="w-3.5 h-3.5" />}
                </div>
                <span className={`text-slate-700 ${checkedItems[idx] ? 'line-through opacity-75' : ''}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button onClick={() => setStep(2)} className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition flex items-center font-bold">
            Neste: Aktivering <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  // --- SUB-COMPONENT: Step 2 (Activation UI Mock) ---
  const ActivationStep = () => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4">
          <Plug className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">2. Aktiver i PowerOffice Go</h2>
      </div>

      <p className="text-slate-600 mb-8">
        PowerOffice Go har et stort bibliotek av utvidelser. Slik finner du den:
      </p>

      {/* Mockup */}
      <div className="border border-slate-200 rounded-lg overflow-hidden mb-8 shadow-inner bg-slate-50">
        <div className="bg-slate-800 text-white p-3 flex items-center space-x-4 text-xs">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="font-mono opacity-50">go.poweroffice.net</span>
        </div>
        <div className="p-6">
          <div className="flex">
             {/* Sidebar Mock */}
            <div className="w-1/4 space-y-2 border-r pr-4 hidden sm:block">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              <div className="h-4 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded w-fit">Innstillinger</div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>
            {/* Content Mock */}
            <div className="w-full sm:w-3/4 sm:pl-6">
              <h4 className="font-bold text-slate-700 mb-4 text-sm">Utvidelser</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border p-3 rounded bg-white flex items-center opacity-50">
                   <div className="w-8 h-8 bg-slate-300 rounded mr-2"></div>
                   <div className="h-3 bg-slate-200 w-20 rounded"></div>
                </div>
                <div className="border-2 border-orange-400 p-3 rounded bg-white flex items-center justify-between shadow-sm relative">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#ff5b24] rounded mr-2 flex items-center justify-center text-white font-bold text-xs">V</div>
                    <span className="font-bold text-slate-800 text-sm">Vipps Integrasjon</span>
                  </div>
                  <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">Aktiver</button>
                  {/* Floating Hand */}
                  <div className="absolute -right-2 -bottom-4 pointer-events-none">
                     <MousePointer2 className="w-8 h-8 text-slate-800 fill-white animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={() => setStep(1)} className="text-slate-500 hover:text-slate-800 px-4 py-2 font-medium flex items-center">
          <ArrowLeft className="mr-2 w-4 h-4" /> Tilbake
        </button>
        <button onClick={() => setStep(3)} className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition flex items-center font-bold">
          Neste: Konfigurasjon <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // --- SUB-COMPONENT: Step 3 (Mapping Logic) ---
  const ConfigurationStep = () => {
    // State for interactive mapping
    const [kioskIndex, setKioskIndex] = useState(0);
    const [medlemIndex, setMedlemIndex] = useState(0);

    const kioskOptions = [
      { id: '3000', text: 'Konto 3000 (Salg mva)', valid: true, msg: 'Riktig! Kiosksalg er ofte mva-pliktig.' },
      { id: '3200', text: 'Konto 3200 (Salg utenfor)', valid: true, msg: 'Mulig, hvis salget er unntatt mva.' },
      { id: '1920', text: 'Konto 1920 (Bank)', valid: false, msg: 'Feil. Vipps-salg er ikke penger i banken ennå.' }
    ];
    
    const medlemOptions = [
      { id: '1500', text: 'Konto 1500 (Kundefordringer)', valid: true, msg: 'Riktig! Matcher mot faktura her.' },
      { id: '3000', text: 'Konto 3000 (Salg)', valid: false, msg: 'Feil. Inntekten er allerede bokført ved fakturering.' }
    ];

    const MappingRow = ({ label, desc, options, index, setIndex }: any) => {
      const current = options[index];
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mb-8 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="text-center">
            <div className="bg-orange-100 text-[#ff5b24] p-3 rounded font-bold border border-orange-200 mb-2">{label}</div>
            <div className="text-xs text-slate-400">{desc}</div>
          </div>
          
          <div className="flex justify-center">
             <button 
               onClick={() => setIndex((index + 1) % options.length)}
               className="bg-slate-50 border hover:bg-slate-100 p-3 rounded-full shadow-sm text-slate-500 transition active:scale-95"
             >
               <ArrowLeftRight className="w-5 h-5" />
             </button>
          </div>

          <div className="text-center">
            <div className={`p-3 rounded font-bold border mb-2 transition-colors ${current.valid ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
              {current.text}
            </div>
            <div className={`text-xs ${current.valid ? 'text-green-600' : 'text-red-500'}`}>{current.msg}</div>
          </div>
        </div>
      );
    };

    return (
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 text-green-600 p-3 rounded-xl mr-4">
            <Sliders className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">3. Konfigurasjon</h2>
        </div>
        
        <p className="text-slate-600 mb-8">
           Vi må fortelle PowerOffice hvilke Vippsnumre som hører til hvilke regnskapskontoer. Prøv å koble riktig under:
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
           <MappingRow 
             label="Vipps Kiosk (#11111)" desc="Salg av vaffel/kaffe"
             options={kioskOptions} index={kioskIndex} setIndex={setKioskIndex}
           />
           <MappingRow 
             label="Vipps Medlem (#22222)" desc="Betaling av faktura"
             options={medlemOptions} index={medlemIndex} setIndex={setMedlemIndex}
           />
        </div>

        <div className="flex justify-between">
          <button onClick={() => setStep(2)} className="text-slate-500 hover:text-slate-800 px-4 py-2 font-medium flex items-center">
            <ArrowLeft className="mr-2 w-4 h-4" /> Tilbake
          </button>
          <button onClick={() => setStep(4)} className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition flex items-center font-bold">
            Neste: Daglig Drift <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  // --- SUB-COMPONENT: Step 4 (Process Flow) ---
  const DailyStep = () => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 text-purple-600 p-3 rounded-xl mr-4">
          <Rocket className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">4. Den nye hverdagen</h2>
      </div>

      <p className="text-slate-600 mb-8">
        Når alt er satt opp, går det meste av seg selv. Her er hvordan dataflyten fungerer i praksis.
      </p>

      {/* Visual Flow */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 mb-8 relative">
        <div className="absolute left-8 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-300 hidden md:block z-0"></div>
        
        <div className="space-y-6 relative z-10">
          <div className="flex items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <div className="bg-[#ff5b24] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-5 shrink-0 z-10">1</div>
            <div>
              <h5 className="font-bold text-slate-900">Kjøp skjer (Vipps)</h5>
              <p className="text-sm text-slate-500">Medlem betaler kontingent (med KID) eller kjøper pølse i kiosken.</p>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start md:pl-8 text-slate-300"><ArrowDown /></div>

          <div className="flex items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-5 shrink-0 z-10">2</div>
            <div>
              <h5 className="font-bold text-slate-900">Automatisk Import (Natt)</h5>
              <p className="text-sm text-slate-500">Integrasjonen henter oppgjørsrapport fra Vipps og sender til PowerOffice.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start md:pl-8 text-slate-300"><ArrowDown /></div>

          <div className="flex items-start md:items-center bg-green-50 p-5 rounded-xl shadow-sm border border-green-100">
            <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-5 shrink-0 z-10"><Check className="w-6 h-6"/></div>
            <div>
              <h5 className="font-bold text-green-900">Bokføring & Avstemming</h5>
              <p className="text-xs text-green-700 mt-1">
                 <span className="font-semibold">Kiosk:</span> Sum føres på inntekt. <br className="sm:hidden" />
                 <span className="font-semibold sm:ml-2">Faktura:</span> Lukkes automatisk (Reskontro).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start">
        <button onClick={() => setStep(3)} className="text-slate-500 hover:text-slate-800 px-4 py-2 font-medium flex items-center">
          <ArrowLeft className="mr-2 w-4 h-4" /> Tilbake
        </button>
      </div>
    </div>
  );

  // Render correct step
  switch (currentStep) {
    case 1: return <PreparationStep />;
    case 2: return <ActivationStep />;
    case 3: return <ConfigurationStep />;
    case 4: return <DailyStep />;
    default: return <PreparationStep />;
  }
};

export default VippsStepContent;