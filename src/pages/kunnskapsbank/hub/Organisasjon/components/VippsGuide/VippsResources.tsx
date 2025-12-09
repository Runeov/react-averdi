import React from 'react';
import { BookOpen, Code } from 'lucide-react';

const VippsResources: React.FC = () => {
  return (
    <footer id="resources" className="bg-slate-100 py-20 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-10">Nyttige Lenker & Ressurser</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a href="https://developer.vippsmobilepay.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-orange-300 transition group text-left flex items-start">
            <div className="bg-orange-100 text-[#ff5b24] p-3 rounded-lg mr-4 group-hover:bg-[#ff5b24] group-hover:text-white transition">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-[#ff5b24] transition">Vipps MobilePay Docs</h4>
              <p className="text-sm text-slate-500 mt-1">Teknisk dokumentasjon for utviklere og integratorer.</p>
            </div>
          </a>

          <a href="https://developer.poweroffice.net/documentation" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition group text-left flex items-start">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition">PowerOffice Go API</h4>
              <p className="text-sm text-slate-500 mt-1">Dokumentasjon av API-endepunkter og utvidelser.</p>
            </div>
          </a>
        </div>

        <p className="text-slate-400 text-sm mt-16 max-w-lg mx-auto leading-relaxed">
          Denne guiden er laget for å forenkle hverdagen til idrettslag. Vi er ikke tilknyttet Vipps eller PowerOffice direkte. 
          Bruk alltid offisiell dokumentasjon ved tekniske implementeringer.
        </p>
      </div>
    </footer>
  );
};

export default VippsResources;