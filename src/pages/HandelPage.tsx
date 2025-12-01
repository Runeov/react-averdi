import { HandelHub } from '../components/HandelHub';
import { useNavigate } from 'react-router-dom';

export function HandelPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      <HandelHub onBack={() => navigate('/kunnskapsbank')} />
    </main>
  );
}