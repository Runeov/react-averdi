import { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { About } from './components/About';
import { NewsSection } from './components/NewsSection';
import { ContactPanel } from './components/ContactPanel';
import { Footer } from './components/Footer';
import { Loader2 } from 'lucide-react';

const StylesheetPage = lazy(() => import('./components/StylesheetPage').then(module => ({ default: module.StylesheetPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'stylesheet') {
    return (
      <Suspense fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      }>
        <StylesheetPage onBack={() => handleNavigate('home')} />
      </Suspense>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <NewsSection />
      <ContactPanel />
      <Footer />
    </main>
  );
}
