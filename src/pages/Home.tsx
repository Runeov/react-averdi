import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { ContactPanel } from '../components/ContactPanel';
import { KunnskapsbankTeaser } from '../components/KunnskapsbankTeaser';

export function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <KunnskapsbankTeaser />
      <ContactPanel />
    </main>
  );
}