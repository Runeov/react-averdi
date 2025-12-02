import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader2 } from 'lucide-react';

// Core pages (Load instantly)
import { Home } from './pages/Home';

// Lazy Load pages (Load only when clicked)
const KunnskapsbankPage = lazy(() => import('./pages/KunnskapsbankPage').then(m => ({ default: m.KunnskapsbankPage })));
const SametingetPage = lazy(() => import('./pages/SametingetPage').then(m => ({ default: m.SametingetPage })));
const HandelPage = lazy(() => import('./pages/HandelPage').then(m => ({ default: m.HandelPage })));
const OrganisasjonPage = lazy(() => import('./pages/OrganisasjonPage').then(m => ({ default: m.OrganisasjonPage })));
const EmployeeProfilePage = lazy(() => import('./pages/EmployeeProfilePage').then(m => ({ default: m.EmployeeProfilePage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(m => ({ default: m.TeamPage })));
// Sametinget Deep Links
const VariertNaeringslivPage = lazy(() => import('./pages/VariertNaeringslivPage').then(m => ({ default: m.VariertNaeringslivPage })));
const SamiskReiselivPage = lazy(() => import('./pages/SamiskReiselivPage').then(m => ({ default: m.SamiskReiselivPage })));
const PrimaernaeringPage = lazy(() => import('./pages/PrimaernaeringPage').then(m => ({ default: m.PrimaernaeringPage })));
const DuodjiPage = lazy(() => import('./pages/DuodjiPage').then(m => ({ default: m.DuodjiPage })));

// Duodji Sub-pages
const ProduktutviklingPage = lazy(() => import('./pages/duodji/ProduktutviklingPage').then(m => ({ default: m.ProduktutviklingPage })));
const MarkedspromoteringPage = lazy(() => import('./pages/duodji/MarkedspromoteringPage').then(m => ({ default: m.MarkedspromoteringPage })));
const UtstyrInvesteringPage = lazy(() => import('./pages/duodji/UtstyrInvesteringPage').then(m => ({ default: m.UtstyrInvesteringPage })));
const EtablererstottePage = lazy(() => import('./pages/duodji/EtablererstottePage').then(m => ({ default: m.EtablererstottePage })));
const DokumentasjonPage = lazy(() => import('./pages/duodji/DokumentasjonPage').then(m => ({ default: m.DokumentasjonPage })));
const KompetansehevingPage = lazy(() => import('./pages/duodji/KompetansehevingPage').then(m => ({ default: m.KompetansehevingPage })));

const StylesheetPage = lazy(() => import('./components/StylesheetPage').then(module => ({ default: module.StylesheetPage })));

// Loading Spinner
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

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
        {/* Suspense handles the loading state while lazy pages download */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kunnskapsbank" element={<KunnskapsbankPage />} />
            <Route path="/kunnskapsbank/sametinget" element={<SametingetPage />} />
            
            {/* SAMETINGET ROUTES */}
            <Route path="/kunnskapsbank/sametinget/variert-naeringsliv" element={<VariertNaeringslivPage />} />
            <Route path="/kunnskapsbank/sametinget/samisk-reiseliv" element={<SamiskReiselivPage />} />
            <Route path="/kunnskapsbank/sametinget/primaernaering" element={<PrimaernaeringPage />} />
            <Route path="/kunnskapsbank/sametinget/duodji" element={<DuodjiPage />} />
            
            {/* DUODJI SUB-ROUTES */}
            <Route path="/kunnskapsbank/sametinget/duodji/produktutvikling" element={<ProduktutviklingPage />} />
            <Route path="/kunnskapsbank/sametinget/duodji/markedspromotering" element={<MarkedspromoteringPage />} />
            <Route path="/kunnskapsbank/sametinget/duodji/utstyr-investering" element={<UtstyrInvesteringPage />} />
            <Route path="/kunnskapsbank/sametinget/duodji/etablererstotte" element={<EtablererstottePage />} />
            <Route path="/kunnskapsbank/sametinget/duodji/dokumentasjon" element={<DokumentasjonPage />} />
            <Route path="/kunnskapsbank/sametinget/duodji/kompetanseheving" element={<KompetansehevingPage />} />

<Route path="/om-oss/ansatte/:id" element={<EmployeeProfilePage />} />
<Route path="/om-oss/team" element={<TeamPage />} />
            <Route path="/kunnskapsbank/handel" element={<HandelPage />} />
            <Route path="/kunnskapsbank/organisasjoner" element={<OrganisasjonPage />} />
            <Route path="/farger" element={<StylesheetPage onBack={() => window.history.back()} />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}