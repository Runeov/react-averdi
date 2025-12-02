import { HandelHub } from '../components/HandelHub';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function HandelPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Regnskap for Handel og Butikk | Lønnsom Drift | Averdi</title>
        <meta 
          name="description" 
          content="Optimaliser din butikkdrift med Averdi. Vi bistår handelstand med varelagerstyring, kassesystemer og marginanalyser for økt lønnsomhet." 
        />
        <meta name="keywords" content="regnskap butikk, butikkøkonomi, varelagerstyring, lønnsomhet handel, regnskapsfører detaljhandel" />
      </Helmet>
      <HandelHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}