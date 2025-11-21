import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Loader2 } from 'lucide-react';

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
    const fetchNews = async () => {
      try {
        // Using a CORS proxy to fetch the RSS feed since we're in a browser environment
        // Trying a different proxy service that might handle XML better
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://www.regnskapnorge.no/regnskapnorgerss'));
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('Failed to parse RSS feed');
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
        // Fallback to XML parsing if JSON API fails
        fetchXMLFeed();
      } finally {
        setLoading(false);
      }
    };

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
    <section id="news" className="py-10 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl mb-4">Siste nytt fra Regnskap Norge</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hold deg oppdatert på de siste endringene og nyhetene innen regnskap og økonomi.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-muted-foreground py-12">
            {error}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{item.pubDate}</div>
                  <CardTitle className="text-xl mb-2 line-clamp-2" title={item.title}>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-base mb-6 line-clamp-3">
                    {item.description}
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full mt-auto group">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Les mer
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button asChild variant="link" className="text-primary">
            <a href="https://www.regnskapnorge.no/fagstoff/artikler/" target="_blank" rel="noopener noreferrer">
              Se alle nyheter hos Regnskap Norge &rarr;
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}