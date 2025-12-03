import { useParams, Navigate, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        type="article"
        publishedTime={article.publishDate}
        author={article.author}
        canonical={`/aktuelt/${article.slug}`}
      />

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-[#E86C1F] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbake til forsiden
        </Link>

        <article className="prose prose-slate lg:prose-lg max-w-none">
          <header className="mb-8 not-prose">
            <div className="text-sm text-[#E86C1F] font-bold mb-2 uppercase tracking-wide">
              Aktuelt & Råd fra Averdi
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-slate-500 text-sm border-b pb-8 border-slate-100">
              <span className="font-medium text-slate-900">{article.author}</span>
              <span className="mx-2 text-slate-300">•</span>
              <time dateTime={article.publishDate}>{article.publishDate}</time>
            </div>
          </header>

          <div className="text-slate-800">
            {article.content}
          </div>

          <div className="bg-gradient-to-br from-[#E86C1F]/5 to-[#F4B223]/10 p-8 rounded-xl mt-16 border border-[#E86C1F]/20 not-prose shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Trenger bedriften din hjelp med dette?</h3>
            <p className="text-slate-600 mb-6 text-lg">
              Vi i Averdi er spesialister på regnskap i tiltakssonen. La oss ta en sjekk på om dere henter ut alle fordelene dere har krav på.
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] hover:shadow-lg hover:shadow-[#E86C1F]/30">
                Book et gratis møte <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}