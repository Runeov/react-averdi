import { Separator } from './ui/separator';
import { scrollToSection } from './ui/utils';

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-10 pb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src="/logo_averdi.avif" alt="Averdi Logo" className="h-24 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Autorisert regnskapsførerselskap som hjelper norske bedrifter med 
              regnskap, lønn og økonomisk rådgivning siden 1999.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Org.nr: 980 383 571</p>
              <p>Godkjent av Finanstilsynet</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Hurtiglenker</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-primary transition-colors"
                >
                  Hjem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                >
                  Tjenester
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Kontakt</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Karasjok</p>
                <p>Hovedgata 15</p>
                <p>9730 Karasjok</p>
                <a href="tel:+4778466000" className="hover:text-primary transition-colors group">
                  <span className="group-hover:hidden">Ring oss</span>
                  <span className="hidden group-hover:inline">+47 78 46 60 00</span>
                </a>
              </div>
              <div className="rounded-lg overflow-hidden border mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.8947234567!2d25.507!3d69.472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sHovedgata%2015%2C%209730%20Karasjok!5e0!3m2!1sen!2sno!4v1234567890"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Averdi Karasjok Office Location"
                />
              </div>
             
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Averdi AS. Alle rettigheter forbeholdt.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Personvern</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}