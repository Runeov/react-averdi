import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader2 } from 'lucide-react';
import { Home } from './pages/Home';
import { KunnskapsbankPage } from './pages/KunnskapsbankPage';
import { SametingetPage } from './pages/SametingetPage';
import { HandelPage } from './pages/HandelPage';
import { OrganisasjonPage } from './pages/OrganisasjonPage';
import { VariertNaeringslivPage } from './pages/VariertNaeringslivPage';
import { DuodjiPage } from './pages/DuodjiPage';
import { SamiskReiselivPage } from './pages/SamiskReiselivPage';
import { PrimaernaeringPage } from './pages/PrimaernaeringPage';

// Imports for Duodji Sub-pages
import { ProduktutviklingPage } from './pages/duodji/ProduktutviklingPage';
import { MarkedspromoteringPage } from './pages/duodji/MarkedspromoteringPage';
import { UtstyrInvesteringPage } from './pages/duodji/UtstyrInvesteringPage';
import { EtablererstottePage } from './pages/duodji/EtablererstottePage';
import { DokumentasjonPage } from './pages/duodji/DokumentasjonPage';
import { KompetansehevingPage } from './pages/duodji/KompetansehevingPage';


const StylesheetPage = lazy(() => import('./components/StylesheetPage').then(module => ({ default: module.StylesheetPage })));

export default function App() {
  return (
    <Router basename="/react-averdi">
      <Helmet>
        <html lang="nb" />
        <title>Averdi - Statsautorisert regnskapsførerselskap</title>
        <meta 
          name="description" 
          content="Averdi er et statsautorisert regnskapsførerselskap som hjelper organisasjoner, småbedrifter og handel med regnskap, lønn og økonomisk rådgivning." 
        />
      </Helmet>
      
      <ScrollToTop />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kunnskapsbank" element={<KunnskapsbankPage />} />
          <Route path="/kunnskapsbank/sametinget" element={<SametingetPage />} />
          
          {/* SAMETINGET ROUTES */}
          <Route path="/kunnskapsbank/sametinget/variert-naeringsliv" element={<VariertNaeringslivPage />} />
          <Route path="/kunnskapsbank/sametinget/samisk-reiseliv" element={<SamiskReiselivPage />} />
          <Route path="/kunnskapsbank/sametinget/duodji" element={<DuodjiPage />} />
          <Route path="/kunnskapsbank/sametinget/primaernaering" element={<PrimaernaeringPage />} />
          {/* DUODJI SUB-ROUTES */}
          <Route path="/kunnskapsbank/sametinget/duodji/produktutvikling" element={<ProduktutviklingPage />} />
          <Route path="/kunnskapsbank/sametinget/duodji/markedspromotering" element={<MarkedspromoteringPage />} />
          <Route path="/kunnskapsbank/sametinget/duodji/utstyr-investering" element={<UtstyrInvesteringPage />} />
          <Route path="/kunnskapsbank/sametinget/duodji/etablererstotte" element={<EtablererstottePage />} />
          <Route path="/kunnskapsbank/sametinget/duodji/dokumentasjon" element={<DokumentasjonPage />} />
          <Route path="/kunnskapsbank/sametinget/duodji/kompetanseheving" element={<KompetansehevingPage />} />

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