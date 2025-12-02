import { OrganisasjonHub } from '../components/OrganisasjonHub';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function OrganisasjonPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Regnskap for Lag og Foreninger | Frivillighet | Averdi</title>
        <meta 
          name="description" 
          content="Enkel økonomistyring for lag og foreninger. Vi hjelper med medlemsregister, momskompensasjon og årsregnskap for frivillige organisasjoner." 
        />
        <meta name="keywords" content="regnskap forening, kasserer idrettslag, momskompensasjon frivillighet, økonomi organisasjon" />
      </Helmet>
      <OrganisasjonHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}