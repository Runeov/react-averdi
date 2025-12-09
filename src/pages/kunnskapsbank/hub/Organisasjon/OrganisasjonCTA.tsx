import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OrganisasjonCTA: React.FC = () => {
  return (
    <section className="py-24 bg-averdi-blue relative overflow-hidden">
        {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">Klar for å forenkle hverdagen?</h2>
        <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Ta det første steget mot en mer effektiv organisasjon i dag. Vi hjelper dere i gang.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/kontakt">
            <button className="w-full sm:w-auto bg-white text-averdi-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center">
              Kontakt oss
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </Link>
          <Link to="/demo">
            <button className="w-full sm:w-auto border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center">
              Bestill demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrganisasjonCTA;