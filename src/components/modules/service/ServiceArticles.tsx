import { useNavigate } from 'react-router-dom';

interface ServiceArticlesProps {
  tag: string;
}

export const ServiceArticles = ({ tag }: ServiceArticlesProps) => {
  const navigate = useNavigate();

  // Mock data for articles - this would be replaced with real data later
  const relatedArticles = [
    {
      id: 1,
      title: "Slik påvirker Tiltakssonen din arbeidsgiveravgift i 2025",
      excerpt: "Driver du bedrift i Finnmark eller Nord-Troms? Her er alt du må vite om 0-sats og rapportering.",
      date: "15. jan 2025",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
      slug: "/kunnskapsbank/bedrifter/tiltakssonen/arbeidsgiveravgift"
    },
    {
      id: 2,
      title: "Krav til prosjektregnskap for Sametinget",
      excerpt: "Har du fått innvilget støtte? Unngå at midlene trekkes tilbake på grunn av manglende rapportering.",
      date: "03. feb 2025",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
      slug: "/kunnskapsbank/organisasjoner/sametinget/prosjektregnskap"
    },
    {
      id: 3,
      title: "Årsoppgjør: Huskeliste for småbedrifter",
      excerpt: "En enkel sjekkliste for deg som vil være godt forberedt til årsoppgjøret.",
      date: "10. feb 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      slug: "/aktuelt/arsoppgjor-huskeliste"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#E86C1F] font-bold tracking-wider text-sm uppercase">Kunnskapsbanken</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Siste om {tag}</h2>
          </div>
          <button onClick={() => navigate('/kunnskapsbank')} className="hidden md:flex items-center gap-2 text-slate-600 hover:text-[#E86C1F] font-medium transition-colors">
            Se alle artikler
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => navigate(article.slug)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                  {tag}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-slate-400 text-sm mb-2">{article.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#E86C1F] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 line-clamp-3 mb-4 flex-1">
                  {article.excerpt}
                </p>
                <span className="text-[#E86C1F] font-bold text-sm flex items-center gap-2 mt-auto">
                  Les artikkelen
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};