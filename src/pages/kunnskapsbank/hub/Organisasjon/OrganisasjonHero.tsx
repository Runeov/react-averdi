import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OrganisasjonHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-averdi-blue to-blue-900 pt-32 pb-40 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
            Fremtidens plattform for 
            <span className="block text-blue-300">moderne foreningsdrift</span>
          </h1>
          <p className="text-xllg:text-2xl text-blue-100 mb-12 leading-relaxed">
            Samle administrasjon, økonomi og kommunikasjon på ett sted. 
            Frigjør tid til det som virkelig betyr noe – aktiviteten.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/kontakt">
              <button className="w-full sm:w-auto bg-white text-averdi-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center">
                Start reisen i dag
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                Se hvordan det fungerer
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Curved wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50 fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default OrganisasjonHero;