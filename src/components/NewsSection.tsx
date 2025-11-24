import { useEffect, useState } from 'react';
import { ExternalLink, Loader2, Newspaper } from 'lucide-react';

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
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

        setNews(newsItems);
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

        setNews(newsItems);
      } catch (err) {
        console.error('Error fetching news fallback:', err);
        setError('Kunne ikke laste nyheter for øyeblikket.');
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="news" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration - Matches About/Services style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Newspaper className="h-4 w-4" />
            Aktuelt
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Siste nytt fra Regnskap Norge</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hold deg oppdatert på de siste endringene og nyhetene innen regnskap og økonomi.
          </p>
        </div>

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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/10"></div>
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    {item.pubDate}
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
    </section>
  );
}