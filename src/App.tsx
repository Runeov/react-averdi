import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader2 } from 'lucide-react';
import { Home } from './pages/Home';
import { KunnskapsbankPage } from './pages/KunnskapsbankPage';
import { SametingetPage } from './pages/SametingetPage';
import { HandelPage } from './pages/HandelPage';
import { OrganisasjonPage } from './pages/OrganisasjonPage';

const StylesheetPage = lazy(() => import('./components/StylesheetPage').then(module => ({ default: module.StylesheetPage })));

export default function App() {
  return (
    <Router basename="/react-averdi">
      <ScrollToTop />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kunnskapsbank" element={<KunnskapsbankPage />} />
          <Route path="/kunnskapsbank/sametinget" element={<SametingetPage />} />
          <Route path="/kunnskapsbank/handel" element={<HandelPage />} />
          <Route path="/kunnskapsbank/organisasjoner" element={<OrganisasjonPage />} />
          <Route path="/farger" element={
            <Suspense fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            }>
              <StylesheetPage onBack={() => window.history.back()} />
            </Suspense>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
