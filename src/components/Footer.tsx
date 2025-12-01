import { ArrowUp } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoAverdi from '../assets/logo_averdi.avif';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t border-primary/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div>
              <img src={logoAverdi} alt="Averdi Logo" className="h-32 w-auto opacity-90" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-base">
              Statsautorisert regnskapsførerselskap som hjelper organisasjoner, småbedrifter og handel med
              regnskap, lønn og økonomisk rådgivning siden 1989.
            </p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground/80">
              <p>Org.nr: 980 383 571</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p>Godkjent av Finanstilsynet</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Hurtiglenker</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection('home')} // Endret fra 'hero' til 'home' for å matche id i Navbar
                  className="hover:text-[#E86C1F] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E86C1F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hjem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#E86C1F] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E86C1F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Tjenester
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#E86C1F] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E86C1F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Om oss
                </button>
              </li>
              <li>
                <Link
                  to="/kunnskapsbank"
                  className="hover:text-[#E86C1F] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E86C1F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kunnskapsbank
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#E86C1F] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#E86C1F] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Kontakt</h4>
            <div className="space-y-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-semibold text-foreground text-base">Karasjok</p>
                <div className="flex flex-col gap-1">
                  <p>Hovedgata 15</p>
                  <p>9730 Karasjok</p>
                </div>
                <div className="pt-2">
                  <a href="tel:+4778466000" className="text-[#E86C1F] font-medium hover:text-[#E86C1F]/80 transition-colors inline-flex items-center gap-2">
                    <span>📞</span> +47 78 46 60 00
                  </a>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden border border-primary/10 shadow-sm h-[120px] bg-gray-100 relative group">
                {/* Overlay text on map hover could go here, keeping it simple for now */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.8947234567!2d25.507!3d69.472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sHovedgata%2015%2C%209730%20Karasjok!5e0!3m2!1sen!2sno!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Averdi Karasjok Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator Replacement */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <span>© 2024 Averdi AS. Alle rettigheter forbeholdt.</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-[#E86C1F] transition-colors">Personvern</a>
            <a href="#" className="hover:text-[#E86C1F] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#E86C1F] transition-colors">Vilkår</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="md:hidden p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            aria-label="Til toppen"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}