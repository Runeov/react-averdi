import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const OrganisasjonFeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Bygget for frivilligheten</h2>
          <p className="text-xl text-gray-600">
            Vi forstår utfordringene ved å drive en organisasjon. Derfor har vi utviklet verktøy som gjør hverdagen enklere for styret, tillitsvalgte og medlemmer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-averdi-blue transition-colors">
              <Shield className="w-8 h-8 text-averdi-blue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Trygt & Sikkert</h3>
            <p className="text-gray-600 leading-relaxed">
              Full GDPR-samsvar og sikker datalagring i skyen. Vi passer på medlemsdataene deres som om de var våre egne.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-averdi-blue transition-colors">
              <Zap className="w-8 h-8 text-averdi-blue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Effektiv Drift</h3>
            <p className="text-gray-600 leading-relaxed">
              Automatiser tidkrevende oppgaver som fakturering, purringer og medlemskommunikasjon. Bruk tiden på aktivitet.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-averdi-blue transition-colors">
              <Users className="w-8 h-8 text-averdi-blue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">For Alle Roller</h3>
            <p className="text-gray-600 leading-relaxed">
              Skreddersydde verktøy for styret, kasserer, trenere og medlemmer. Alt samlet i én intuitiv plattform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisasjonFeaturesGrid;