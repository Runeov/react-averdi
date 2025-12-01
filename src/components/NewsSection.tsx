import { useEffect, useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import { companyNews } from '../data/news';

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  isCompanyNews?: boolean;
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Funksjon for å hente nyheter fra RSS2JSON API
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://www.regnskapnorge.no/regnskapnorgerss'));
        
        if (!response.ok) {
          throw new Error('Failed to fetch news (Initial attempt)');
        }

        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('Failed to parse RSS feed (Initial attempt)');
        }

        const newsItems: NewsItem[] = data.items.slice(0, 3).map((item: any) => ({
          title: item.title,
          link: item.link,
          description: item.description?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' || '',
          pubDate: new Date(item.pubDate).toLocaleDateString('no-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }));

        // Merge company news with external news
        const internalNews: NewsItem[] = companyNews.map(item => ({
          title: item.title,
          link: item.link || '#',
          description: item.summary,
          pubDate: new Date(item.date).toLocaleDateString('no-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          isCompanyNews: true
        }));

        setNews([...internalNews, ...newsItems]);
      } catch (err) {
        console.error('Error fetching news:', err);
        // Fallback til XML parsing ved feil
        fetchXMLFeed();
      } finally {
        setLoading(false);
      }
    };

    // Funksjon for å hente nyheter via XML (Fallback)
    const fetchXMLFeed = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.regnskapnorge.no/regnskapnorgerss'));
        const data = await response.json();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        
        const newsItems: NewsItem[] = Array.from(items).slice(0, 3).map(item => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          description: item.querySelector('description')?.textContent?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' || '',
          pubDate: new Date(item.querySelector('pubDate')?.textContent || '').toLocaleDateString('no-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }));

        // Merge company news with external news (fallback)
        const internalNews: NewsItem[] = companyNews.map(item => ({
          title: item.title,
          link: item.link || '#',
          description: item.summary,
          pubDate: new Date(item.date).toLocaleDateString('no-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          isCompanyNews: true
        }));

        setNews([...internalNews, ...newsItems]);
      } catch (err) {
        console.error('Error fetching news fallback:', err);
        setError('Kunne ikke laste nyheter for øyeblikket.');
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="relative">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-muted-foreground py-12 bg-secondary/20 rounded-xl max-w-lg mx-auto">
            {error}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col h-full relative bg-white rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden"
              >
                {/* Updated to Averdi colors */}
                <div className={`absolute top-0 left-0 w-full h-1 ${item.isCompanyNews ? 'bg-gradient-to-r from-[#E86C1F] to-[#F4B223]' : 'bg-gray-200'}`}></div>
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <span className={`w-2 h-2 rounded-full ${item.isCompanyNews ? 'bg-[#E86C1F]' : 'bg-gray-400'} animate-pulse`}></span>
                      {item.pubDate}
                    </div>
                    {item.isCompanyNews && (
                      <span className="px-2 py-0.5 bg-[#E86C1F]/10 text-[#E86C1F] text-xs font-bold rounded-full uppercase tracking-wide">
                        Averdi
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors" title={item.title}>
                    {item.title}
                  </h3>
                  
                  <div className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-secondary/10 text-foreground font-medium hover:bg-primary hover:text-white transition-all duration-300 gap-2 group/btn"
                    >
                      Les hele saken
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-16">
          <a 
            href="https://www.regnskapnorge.no/fagstoff/artikler/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center text-primary text-lg font-medium hover:no-underline hover:text-primary/80 transition-colors"
          >
            Se alle nyheter hos Regnskap Norge 
            <span className="text-xl ml-2">→</span>
          </a>
        </div>
    </div>
  );
}