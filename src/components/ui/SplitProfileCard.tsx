import { useState } from 'react';
import { Mail, Phone, Home } from 'lucide-react';

interface SplitProfileCardProps {
  name?: string;
  surname?: string;
  role?: string;
  quote?: string;
  imageUrl?: string;
  colorTheme?: 'orange' | 'blue' | 'red' | 'yellow' | 'green';
  socialLinks?: {
    home?: string;
    email?: string;
    phone?: string;
  };
}

export const SplitProfileCard = ({
  name = "Navn",
  surname = "Etternavn",
  role = "Rolle",
  quote = "Quote goes here.",
  imageUrl = "https://placehold.co/800x1000/e2e8f0/1e293b?text=Profile",
  colorTheme = "orange",
  socialLinks = { home: "", email: "", phone: "" }
}: SplitProfileCardProps) => {
  const [imageError, setImageError] = useState(false);

  const themes: Record<string, { bar: string; textHigh: string }> = {
    blue: { bar: "bg-[#20638f]", textHigh: "text-[#20638f]" },
    red: { bar: "bg-[#962d22]", textHigh: "text-[#962d22]" },
    yellow: { bar: "bg-[#bf6516]", textHigh: "text-[#bf6516]" },
    orange: { bar: "bg-[#E86C1F]", textHigh: "text-[#E86C1F]" },
    green: { bar: "bg-[#22c55e]", textHigh: "text-[#22c55e]" }
  };

  const currentTheme = themes[colorTheme] || themes.orange;

  return (
    <div className="group relative w-full h-full min-h-[450px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Skewed Image Section */}
      <div className="absolute top-0 left-0 w-[55%] h-full overflow-hidden z-10 -skew-x-[15deg] origin-top-left bg-gray-200">
        <img
          src={imageError ? "https://placehold.co/800x1000/e2e8f0/1e293b?text=Profile" : imageUrl}
          alt={`${name} ${surname}`}
          onError={() => setImageError(true)}
          className="w-[140%] h-full object-cover relative -left-[15%] skew-x-[15deg] scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-0 right-0 w-[5px] h-full bg-black/10 z-20" aria-hidden="true" />
      </div>

      {/* Shadow Element */}
      <div className="absolute top-0 left-0 h-full w-[45%] bg-black/20 -skew-x-[17deg] shadow-[15px_0_25px_rgba(0,0,0,0.7)] pointer-events-none z-0 transform transition-all duration-500 group-hover:-translate-x-2" />

      {/* Content Section */}
      <div className="absolute top-0 right-0 w-[50%] h-full z-20 flex flex-col justify-end p-6 pb-20 font-raleway text-right">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">

          <h2 className="text-2xl lg:text-3xl font-light uppercase border-b border-black/10 pb-2 mb-3 text-gray-800">
            {name} <span className={`font-extrabold ${currentTheme.textHigh}`}>{surname}</span>
          </h2>

          <p className="text-sm lg:text-base text-gray-600 leading-relaxed opacity-80 mb-4 line-clamp-5">
            {quote}
          </p>

          <div className="flex justify-end space-x-3 items-center">
            {socialLinks.home && (
              <a href={socialLinks.home} aria-label="Visit Website" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Home size={20} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} aria-label="Send Email" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.phone && (
              <a href={`tel:${socialLinks.phone}`} aria-label="Call" className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1">
                <Phone size={20} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Color Bar */}
      <div className={`absolute bottom-0 left-0 w-full p-3 px-8 text-right text-white text-sm italic tracking-wide font-raleway font-medium z-30 transition-colors duration-300 ${currentTheme.bar}`}>
        {role}
      </div>
    </div>
  );
};