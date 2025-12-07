import { SplitProfileCard } from '../../ui/SplitProfileCard';
import type { ExpertProfile, ServiceTheme } from '../../../types/service';

interface ServiceSalesProps {
  profile: ExpertProfile;
  theme: ServiceTheme;
}

export const ServiceSales = ({ profile, theme }: ServiceSalesProps) => {
  const socialLinks = {
    home: "",
    email: profile.email,
    phone: profile.phone
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch min-h-[600px]">
          {/* LEFT SIDE: SplitProfileCard */}
          <div className="w-full h-full flex flex-col">
            <SplitProfileCard
              name={profile.name.split(' ')[0]}
              surname={profile.name.split(' ')[1] || ""}
              role={profile.role}
              colorTheme={theme === 'slate' ? 'blue' : theme}
              imageUrl={profile.image}
              quote={profile.quote}
              socialLinks={socialLinks}
            />
          </div>

          {/* RIGHT SIDE: SALES PITCH */}
          <div className="flex flex-col justify-center lg:pl-8 py-8 lg:py-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#E86C1F] text-sm font-bold mb-6 border border-orange-200 w-fit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Verdiskapning i fokus
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Regnskap er mer enn <br/>
              <span className="text-[#E86C1F]">bare lovpålagt rapportering.</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mange ser på regnskap som en kjedelig nødvendighet, men for oss er det fundamentet for gode beslutninger. {profile.name.split(' ')[0]} er ikke bare din regnskapsfører – han er din sparringspartner.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Strategisk Rådgivning</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Vi hjelper deg å tolke tallene slik at du kan styre bedriften mot økt lønnsomhet og vekst. Hva tjener du egentlig penger på?
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="p-3 bg-green-50 text-green-600 rounded-lg h-fit">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v16H4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Full Oversikt</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Få kontroll på likviditet og nøkkeltall. Vi sørger for at du alltid har et oppdatert styringsgrunnlag tilgjengelig.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/kontakt'}
              className="inline-flex items-center gap-2 text-[#E86C1F] font-bold text-lg hover:gap-3 transition-all group w-fit"
            >
              Book et strategimøte med {profile.name.split(' ')[0]}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};