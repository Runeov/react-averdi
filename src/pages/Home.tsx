import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Services } from '../components/Services';
import { SalesPitch } from './SalesPitch';
import { ContactPanel } from '../components/ContactPanel';
import { KunnskapsbankTeaser } from '../components/KunnskapsbankTeaser';

export function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
     <SalesPitch />
      <KunnskapsbankTeaser />
      <ContactPanel />
    </main>
  );
}