import { SametingetHub } from '../components/SametingetHub';
import { useNavigate } from 'react-router-dom';

export function SametingetPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <SametingetHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}