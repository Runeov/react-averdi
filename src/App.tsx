import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader2 } from 'lucide-react';

// Core pages (Load instantly)
import { Home } from './pages/Home';
import { MeetOurTeamPage } from './pages/Om-Oss';

// Lazy Load pages (Load only when clicked)
const KunnskapsbankPage = lazy(() => import('./pages/KunnskapsbankPage').then(m => ({ default: m.KunnskapsbankPage })));

// Kunnskapsbank Hub Pages
const SametingetHub = lazy(() => import('./pages/kunnskapsbank/SametingetHub').then(m => ({ default: m.SametingetHub })));
const BedriftHub = lazy(() => import('./pages/kunnskapsbank/BedriftHub').then(m => ({ default: m.BedriftHub })));
const OrganisasjonHub = lazy(() => import('./pages/kunnskapsbank/hub/OrganisasjonHub'));

// Services Pages
const RegnskapPage = lazy(() => import('./pages/services/RegnskapPage').then(m => ({ default: m.RegnskapPage })));
const LonnPage = lazy(() => import('./pages/services/LonnPage').then(m => ({ default: m.LonnPage })));
const FaktureringPage = lazy(() => import('./pages/services/FaktureringPage').then(m => ({ default: m.FaktureringPage })));
const RaadgivingPage = lazy(() => import('./pages/services/RaadgivingPage').then(m => ({ default: m.RaadgivingPage })));

// New Hub & Spoke Structure
// Sametinget Hub
const KulturSprakPage = lazy(() => import('./pages/kunnskapsbank/sametinget/kultur-sprak'));
const NaeringsstottePage = lazy(() => import('./pages/kunnskapsbank/sametinget/naeringsstotte'));
const InstitusjonsutviklingPage = lazy(() => import('./pages/kunnskapsbank/sametinget/institusjonsutvikling'));
const DuodjiNewPage = lazy(() => import('./pages/kunnskapsbank/sametinget/duodji'));

// Bedrifter Hub
const ArbeidsgiveravgiftPage = lazy(() => import('./pages/kunnskapsbank/bedrifter/tiltakssonen/arbeidsgiveravgift'));
const FinnmarksfradragPage = lazy(() => import('./pages/kunnskapsbank/bedrifter/tiltakssonen/finnmarksfradrag'));
const KassasystemPage = lazy(() => import('./pages/kunnskapsbank/bedrifter/handel/kassasystem'));

// Organisasjoner Hub
const StotteordningerPage = lazy(() => import('./pages/kunnskapsbank/organisasjoner/stotteordninger'));
const MomskompensasjonPage = lazy(() => import('./pages/kunnskapsbank/organisasjoner/momskompensasjon'));
const IdrettslagPage = lazy(() => import('./pages/kunnskapsbank/organisasjoner/idrettslag'));

// Legacy pages (to be migrated)
const SametingetPage = lazy(() => import('./pages/SametingetPage').then(m => ({ default: m.SametingetPage })));
const HandelPage = lazy(() => import('./pages/HandelPage').then(m => ({ default: m.HandelPage })));
// Legacy OrganisasjonPage removed - using new OrganisasjonHub instead
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
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import TiltakssonenGuidePage from './pages/TiltakssonenGuidePage';

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
            <Route path="/om-oss" element={<MeetOurTeamPage />} />
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
            {/* Legacy route removed - using new OrganisasjonHub instead */}
            <Route path="/farger" element={<StylesheetPage onBack={() => window.history.back()} />} />
            <Route path="/aktuelt/:slug" element={<ArticlePage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/kunnskapsbank/tiltakssonen" element={<TiltakssonenGuidePage />} />

           {/* KUNNSKAPSBANK HUB PAGES */}
           <Route path="/kunnskapsbank/sametinget" element={<SametingetHub />} />
           <Route path="/kunnskapsbank/bedrifter" element={<BedriftHub />} />
           <Route path="/kunnskapsbank/organisasjoner" element={<OrganisasjonHub />} />

           {/* NEW HUB & SPOKE ROUTES */}
            {/* Sametinget Hub */}
            <Route path="/kunnskapsbank/sametinget/kultur-sprak" element={<KulturSprakPage />} />
            <Route path="/kunnskapsbank/sametinget/naeringsstotte" element={<NaeringsstottePage />} />
            <Route path="/kunnskapsbank/sametinget/institusjonsutvikling" element={<InstitusjonsutviklingPage />} />
            <Route path="/kunnskapsbank/sametinget/duodji" element={<DuodjiNewPage />} />

            {/* Bedrifter Hub */}
            <Route path="/kunnskapsbank/bedrifter/tiltakssonen/arbeidsgiveravgift" element={<ArbeidsgiveravgiftPage />} />
            <Route path="/kunnskapsbank/bedrifter/tiltakssonen/finnmarksfradrag" element={<FinnmarksfradragPage />} />
            <Route path="/kunnskapsbank/bedrifter/handel/kassasystem" element={<KassasystemPage />} />

            {/* Organisasjoner Hub */}
            <Route path="/kunnskapsbank/organisasjoner/stotteordninger" element={<StotteordningerPage />} />
            <Route path="/kunnskapsbank/organisasjoner/momskompensasjon" element={<MomskompensasjonPage />} />
            <Route path="/kunnskapsbank/organisasjoner/idrettslag" element={<IdrettslagPage />} />

            {/* Services Routes */}
            <Route path="/tjenester/regnskap" element={<RegnskapPage />} />
            <Route path="/tjenester/lonn" element={<LonnPage />} />
            <Route path="/tjenester/fakturering" element={<FaktureringPage />} />
            <Route path="/tjenester/raadgiving" element={<RaadgivingPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}