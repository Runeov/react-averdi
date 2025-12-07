import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import type { ServicePageConfig } from '../../types/service';
import { ServiceHero } from '../modules/service/ServiceHero';
import { ServiceProducts } from '../modules/service/ServiceProducts';
import { ServiceSales } from '../modules/service/ServiceSales';
import { ServiceFAQ } from '../modules/service/ServiceFAQ';
import { ServiceArticles } from '../modules/service/ServiceArticles';

interface Props {
  config: ServicePageConfig;
}

export const ServicePageLayout = ({ config }: Props) => {
  const navigate = useNavigate();

  const getThemeColor = (theme: string): string => {
    const themeColors: Record<string, string> = {
      orange: "#E86C1F",
      blue: "#20638f",
      green: "#22c55e",
      slate: "#64748b"
    };
    return themeColors[theme] || themeColors.orange;
  };

  return (
    <>
      <Helmet>
        <title>{config.hero.title} | Averdi</title>
        <meta name="description" content={config.hero.subtitle} />
      </Helmet>

      <main className="min-h-screen bg-white">
        <ServiceHero
          data={config.hero}
          onCtaClick={() => navigate('/kontakt')}
        />
        <ServiceProducts tabs={config.products} themeColor={getThemeColor(config.hero.theme)} />
        <ServiceSales profile={config.expert} theme={config.hero.theme} />
        <ServiceFAQ items={config.faq} />
        <ServiceArticles tag={config.articleTag} />
      </main>
    </>
  );
};