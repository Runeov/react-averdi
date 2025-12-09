import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import VippsHero from '../../components/VippsGuide/VippsHero';
import VippsStepContent from '../../components/VippsGuide/VippsStepContent';
import VippsCalculator from '../../components/VippsGuide/VippsCalculator';
import VippsResources from '../../components/VippsGuide/VippsResources';

const VippsPowerOfficeGuidePage: React.FC = () => {
  // State for the interactive guide steps
  const [currentStep, setCurrentStep] = useState(1);

  const scrollToGuide = () => {
    const element = document.getElementById('guide-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>Guide: Vipps MobilePay til PowerOffice Go | Averdi</title>
        <meta name="description" content="Komplett guide for idrettslag: Koble Vipps mot PowerOffice Go for automatisk regnskap." />
      </Helmet>

      {/* Hero Section */}
      <VippsHero onStartClick={scrollToGuide} />

      {/* Main Interactive Guide Section */}
      <main id="guide-section" className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Step Navigation Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold mb-6 text-slate-900">Innholdsfortegnelse</h2>
              <nav className="space-y-2">
                <StepButton step={1} current={currentStep} label="Forberedelser" onClick={setCurrentStep} />
                <StepButton step={2} current={currentStep} label="Aktiver i PowerOffice" onClick={setCurrentStep} />
                <StepButton step={3} current={currentStep} label="Konfigurasjon" onClick={setCurrentStep} />
                <StepButton step={4} current={currentStep} label="Daglig Drift" onClick={setCurrentStep} />
              </nav>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg text-sm text-blue-900 border border-blue-100">
                <p className="font-bold mb-1">Trenger du teknisk hjelp?</p>
                Sjekk utvikler-dokumentasjonen nederst på siden.
              </div>
            </div>
          </div>

          {/* Step Content Area */}
          <div className="lg:w-2/3">
            <VippsStepContent currentStep={currentStep} setStep={setCurrentStep} />
          </div>
        </div>
      </main>

      {/* ROI Calculator Section */}
      <VippsCalculator />

      {/* Footer / Resources */}
      <VippsResources />
    </div>
  );
};

// Helper sub-component for sidebar buttons
const StepButton = ({ step, current, label, onClick }: { step: number, current: number, label: string, onClick: (s: number) => void }) => {
  const isActive = current === step;
  return (
    <button 
      onClick={() => onClick(step)}
      className={`w-full text-left p-4 border-l-4 font-medium transition-all flex items-center group rounded-r-lg
        ${isActive 
          ? 'border-l-[#ff5b24] bg-orange-50 text-slate-900' 
          : 'border-l-slate-200 hover:bg-slate-50 text-slate-600'
        }`}
    >
      <span className={`w-8 h-8 rounded-full flex items-center justify-center border mr-3 text-sm transition-colors
        ${isActive 
          ? 'bg-white text-[#ff5b24] border-orange-200 font-bold' 
          : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:bg-slate-200'
        }`}>
        {step}
      </span>
      {label}
    </button>
  );
};

export default VippsPowerOfficeGuidePage;