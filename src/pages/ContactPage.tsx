import { ContactPanel } from '../components/ContactPanel';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Kontakt oss - Averdi"
        description="Ta kontakt med Averdi for regnskap, lønn og økonomisk rådgivning. Vi er lokalisert i Karasjok og hjelper bedrifter i hele Finnmark."
        canonical="/kontakt"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#E86C1F]/5 via-background to-[#F4B223]/10 pt-24 pb-12">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-[#E86C1F]/10 rounded-full blur-[100px] opacity-70"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#F4B223]/10 rounded-full blur-[100px] opacity-70"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E86C1F]/10 text-[#E86C1F] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E86C1F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E86C1F]"></span>
              </span>
              Vi er her for deg
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Kontakt <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86C1F] to-[#F4B223]">Averdi</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Har du spørsmål om regnskap, lønn eller økonomisk rådgivning? Vi hjelper deg gjerne!
            </p>
          </div>
        </section>

        {/* Contact Panel */}
        <ContactPanel />
      </div>
    </>
  );
}