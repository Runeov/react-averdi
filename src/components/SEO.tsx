import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  type = 'website',
  publishedTime,
  author
}: SEOProps) {
  const siteUrl = 'https://runeov.github.io/react-averdi';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const jsonLd = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "image": [
      `${siteUrl}/logo-og.png`
    ],
    "datePublished": publishedTime,
    "dateModified": publishedTime,
    "author": [{
      "@type": "Person",
      "name": author || "Averdi Teamet"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Averdi AS",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/favicon.svg`
      }
    }
  } : null;

  return (
    <Helmet>
      <title>{title} | Averdi Regnskap</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}