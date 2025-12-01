import { OrganisasjonHub } from '../components/OrganisasjonHub';
import { useNavigate } from 'react-router-dom';

export function OrganisasjonPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <OrganisasjonHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}