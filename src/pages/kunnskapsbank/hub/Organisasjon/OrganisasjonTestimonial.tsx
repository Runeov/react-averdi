import React from 'react';
import { Star } from 'lucide-react';

const OrganisasjonTestimonial: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-averdi-blue/10 rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-averdi-blue/10 rounded-tl-full" />
          
          <div className="relative z-10 text-center">
            <div className="flex justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-10 leading-relaxed">
              "Averdi har revolusjonert måten vi driver klubben på. Vi sparer utallige timer på administrasjon hver måned, og har fått full kontroll på økonomien."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
                {/* Placeholder for avatar */}
                 <div className="w-full h-full bg-averdi-blue/20 flex items-center justify-center text-averdi-blue font-bold">AN</div>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">Anne Nordmann</div>
                <div className="text-averdi-blue">Styreleder, Eksempel IL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisasjonTestimonial;