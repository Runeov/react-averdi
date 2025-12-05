import { HandelHub } from '../components/HandelHub';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function HandelPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Regnskap for Butikk & Handel | Kassesystem & Lager | Averdi</title>
        <meta 
          name="description" 
          content="Driver du butikk eller nettbutikk? Vi har spesialisert oss på regnskap for handel. Få hjelp med varelager, kassesystem (POS) og integrasjoner mot nettbutikk." 
        />
        <meta name="keywords" content="regnskap butikk, kassesystem, varelagerstyring, nettbutikk regnskap, shopify norge, poweroffice go butikk" />
      </Helmet>
      
      <HandelHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}