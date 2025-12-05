import { motion } from 'framer-motion';
import LogoFinago from '../assets/Logo_finago.avif';
import LogoPowerOfficeGo from '../assets/Logo_PowerOffice-Go.avif';
import LogoRegnskapNorge from '../assets/Logo_Regnskap-norge.avif';

export function TrustStrip() {
    const logos = [
        { 
            src: LogoFinago, 
            alt: "Finago", 
            href: "https://finago.com/no" 
        },
        { 
            src: LogoPowerOfficeGo, 
            alt: "PowerOffice Go", 
            href: "https://poweroffice.no" 
        },
        { 
            src: LogoRegnskapNorge, 
            alt: "Regnskap Norge", 
            href: "https://www.regnskapnorge.no" 
        },
    ];

    return (
        <section className="py-8 bg-slate-50/50">
            {/* Smaller, subtler header */}
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider text-center mb-6">
                Samarbeidspartnere
            </h3>

            {/* Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
                {logos.map((logo, index) => (
                    <motion.a
                        key={index}
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Reduced height (h-20), padding (p-4), and shadow
                        className="flex items-center justify-center border rounded-md shadow-sm hover:shadow-md transition-all border-slate-200 p-4 bg-white h-20 group"
                        
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                        <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            // Smaller max-height for logos
                            className="max-h-8 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        />
                    </motion.a>
                ))}
            </div>
        </section>
    );
}