import { SametingetHub } from '../components/SametingetHub';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function SametingetPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Søke støtte fra Sametinget? Vi hjelper deg | Averdi</title>
        <meta 
          name="description" 
          content="Skal du søke støtte fra Sametinget? Vi har ekspertise på tilskuddsordninger for næringsliv i samiske områder (STN). Øk sjansen for godkjent søknad." 
        />
      </Helmet>
      <SametingetHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}