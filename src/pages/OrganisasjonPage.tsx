import { OrganisasjonHub } from '../components/OrganisasjonHub';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function OrganisasjonPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Regnskap for Lag og Foreninger | Idrett & Frivillighet | Averdi</title>
        <meta 
          name="description" 
          content="Enklere hverdag for kasserer og styre. Vi hjelper idrettslag og foreninger med regnskap, momskompensasjon, medlemslister og årsmøtepapirer." 
        />
        <meta name="keywords" content="regnskap forening, kasserer idrettslag, momskompensasjon, frivillighetsregisteret, styrearbeid, årsmøte, nord-norge" />
      </Helmet>
      
      <OrganisasjonHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}