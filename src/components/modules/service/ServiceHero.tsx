import { motion } from 'framer-motion';
import type { ServiceHeroData } from '../../../types/service';

interface ServiceHeroProps {
  data: ServiceHeroData;
  onCtaClick: () => void;
}

export const ServiceHero = ({ data, onCtaClick }: ServiceHeroProps) => {


  return (
    <section className="relative overflow-hidden bg-slate-900 lg:bg-slate-50 pt-8 pb-20 lg:pt-12 lg:pb-20">
      {/* BACKGROUNDS */}
      <div className="absolute inset-0 z-0">
        {/* 1. Mobile/Tablet (< 1024px): Full Background Image with Overlay */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
            alt="Regnskap i Nord"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>

        {/* 2. Desktop (>= 1024px): Clean Background with Blobs */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-[#E86C1F]/10 rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#F4B223]/10 rounded-full blur-[100px] opacity-70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge/Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 lg:bg-[#E86C1F]/10 text-orange-200 lg:text-[#E86C1F] text-sm font-medium mb-4 mt-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 lg:bg-[#E86C1F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400 lg:bg-[#E86C1F]"></span>
              </span>
              Regnskap & Økonomi
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white lg:text-slate-900 mb-6"
            >
              {data.title.split('\\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < data.title.split('\\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-200 lg:text-slate-600 mb-8 leading-relaxed"
            >
              {data.subtitle}
            </motion.p>

            {/* Info Box */}
            <div className="space-y-4 text-base text-slate-200 lg:text-slate-600 mb-10 leading-relaxed bg-white/10 lg:bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 lg:border-[#E86C1F]/10 shadow-sm">
              <p>
                <strong>Statsautorisert regnskap</strong> er grunnlaget for gode beslutninger.
              </p>
              <p>
                Med Averdi får du tilgang til ekspertise innen <strong className="text-white lg:text-slate-900">tiltakssonen, Sametinget og moderne digitale løsninger</strong>. Vi hjelper deg å navigere i komplekse regler og finne de beste løsningene.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] text-white hover:shadow-lg hover:shadow-[#E86C1F]/30 hover:-translate-y-0.5 h-12 px-8"
              >
                Få et uforpliktende tilbud
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('fordeler')?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white/20 lg:border-[#E86C1F]/20 bg-white/10 lg:bg-white/50 text-white lg:text-slate-600 backdrop-blur-sm hover:bg-white/20 lg:hover:bg-white/80 hover:text-white lg:hover:text-[#E86C1F] h-12 px-8"
              >
                Se våre tjenester
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400 lg:text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 lg:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 1 0 18 0z" />
                </svg>
                <span>Statsautorisert trygghet</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 lg:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 1 0 18 0z" />
                </svg>
                <span>Ekspertise i nord</span>
              </div>
            </div>
          </div>

          {/* Image Content - Hidden on Mobile (< 1024px), Visible on Desktop */}
          <div className="hidden lg:flex relative h-full items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none group">
              {/* Decorative blob behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#E86C1F]/20 to-[#F4B223]/20 rounded-full blur-2xl -z-10 transition-all duration-700 group-hover:blur-3xl"></div>

              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
                alt="Regnskap i Nord"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/50 transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating Card: Status */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#E86C1F]/10 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E86C1F]/10 p-2 rounded-lg text-[#E86C1F]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Effekt</p>
                    <p className="text-sm font-bold text-slate-900">Full oversikt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};