import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoAverdi from '../assets/logo_averdi.avif';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  // Handle scroll from navigation state
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  const navLinkClass = (isActive: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'text-[#E86C1F] bg-[#E86C1F]/10'
        : 'text-gray-600 hover:text-[#E86C1F] hover:bg-gray-50'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-gray-200/50 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={logoAverdi} alt="Averdi Logo" className="h-28 w-auto mt-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link
                to="/"
                className={navLinkClass(location.pathname === '/')}
              >
                Hjem
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className={navLinkClass(false)}
              >
                Tjenester
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={navLinkClass(false)}
              >
                Om oss
              </button>
              <Link
                to="/kunnskapsbank"
                className={navLinkClass(location.pathname.startsWith('/kunnskapsbank'))}
              >
                Kunnskapsbank
              </Link>
              <Link
                to="/aktuelt/regler-tiltakssonen-2025"
                className={navLinkClass(location.pathname.startsWith('/aktuelt'))}
              >
                Aktuelt
              </Link>
              <Link
                to="/kunnskapsbank/tiltakssonen"
                className={navLinkClass(location.pathname === '/kunnskapsbank/tiltakssonen')}
              >
                Dybdeguide
              </Link>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-[#E86C1F] to-[#F4B223] rounded-full hover:shadow-lg hover:shadow-[#E86C1F]/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E86C1F]"
            >
              Kontakt oss
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-[#E86C1F] hover:bg-[#E86C1F]/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl w-full text-left text-base font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-[#E86C1F] bg-[#E86C1F]/10'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#E86C1F]'
                }`}
              >
                Hjem
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:bg-gray-50 hover:text-[#E86C1F] block px-4 py-3 rounded-xl w-full text-left text-base font-medium transition-colors"
              >
                Tjenester
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:bg-gray-50 hover:text-[#E86C1F] block px-4 py-3 rounded-xl w-full text-left text-base font-medium transition-colors"
              >
                Om oss
              </button>
              <Link
                to="/kunnskapsbank"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl w-full text-left text-base font-medium transition-colors ${
                  location.pathname.startsWith('/kunnskapsbank')
                    ? 'text-[#E86C1F] bg-[#E86C1F]/10'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#E86C1F]'
                }`}
              >
                Kunnskapsbank
              </Link>
              <Link
                to="/aktuelt/regler-tiltakssonen-2025"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl w-full text-left text-base font-medium transition-colors ${
                  location.pathname.startsWith('/aktuelt')
                    ? 'text-[#E86C1F] bg-[#E86C1F]/10'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#E86C1F]'
                }`}
              >
                Aktuelt
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:bg-gray-50 hover:text-[#E86C1F] block px-4 py-3 rounded-xl w-full text-left text-base font-medium transition-colors"
              >
                Kontakt
              </button>
              
              <div className="pt-4 mt-2 border-t border-gray-100">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#E86C1F] to-[#F4B223] rounded-xl shadow-md active:scale-95 transition-all"
                >
                  Kontakt oss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}