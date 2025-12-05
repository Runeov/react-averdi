import React, { useState } from 'react';
import { Mail, Phone, Home } from 'lucide-react';

/**
 * SplitProfileCard
 * A responsive, accessible profile card with a distinct skewed split design.
 * * Props:
 * - name: string
 * - surname: string (highlighted)
 * - role: string
 * - quote: string
 * - imageUrl: string
 * - colorTheme: 'blue' | 'red' | 'yellow' (default: 'blue')
 * - socialLinks: { home?: string, email?: string, phone?: string }
 */
const SplitProfileCard = ({
  name = "Tiffany",
  surname = "Case",
  role = "Software Engineer",
  quote = "That's the whole problem with science. You've got a bunch of empiricists trying to describe things of unimaginable wonder.",
  imageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
  colorTheme = "blue",
  socialLinks = { home: "#", email: "#", phone: "#" }
}) => {
  const [imageError, setImageError] = useState(false);

  // Theme configuration map
  const themes: Record<string, { bar: string; textHigh: string }> = {
    blue: {
      bar: "bg-[#20638f]",
      textHigh: "text-[#20638f]",
    },
    red: {
      bar: "bg-[#962d22]",
      textHigh: "text-[#962d22]",
    },
    yellow: {
      bar: "bg-[#bf6516]",
      textHigh: "text-[#bf6516]",
    }
  };

  const currentTheme = themes[colorTheme] || themes.blue;

  return (
    <div className="group relative w-full min-h-[360px] bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
      {/* Font Injection for Raleway - localized to this component usage */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;800&display=swap');
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Skewed Image Section */}
      <div className="absolute top-0 left-0 w-[55%] h-full overflow-hidden z-10 -skew-x-[15deg] origin-top-left bg-gray-200">
        <img 
          src={imageError ? "https://placehold.co/400x600/e2e8f0/1e293b?text=Profile" : imageUrl}
          alt={`${name} ${surname}`}
          onError={() => setImageError(true)}
          className="w-[140%] h-full object-cover relative -left-[15%] skew-x-[15deg] scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Dark overlay strip for depth effect */}
        <div className="absolute top-0 right-0 w-[5px] h-full bg-black/10 z-20" aria-hidden="true" />
      </div>

      {/* Shadow Element (The dark diagonal shadow from original) */}
      <div className="absolute top-0 left-0 h-full w-[45%] bg-black/20 -skew-x-[17deg] shadow-[15px_0_25px_rgba(0,0,0,0.7)] pointer-events-none z-0 transform transition-all duration-500 group-hover:-translate-x-2" />

      {/* Content Section */}
      <div className="absolute top-0 right-0 w-[50%] h-full z-20 flex flex-col justify-end p-6 pb-16 font-raleway text-right">
        
        {/* Content Wrapper that moves up on hover */}
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          
          <h2 className="text-2xl font-light uppercase border-b border-black/10 pb-2 mb-3 text-gray-800">
            {name} <span className="font-extrabold text-black">{surname}</span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed opacity-80 mb-4 line-clamp-4">
            {quote}
          </p>

          {/* Icons */}
          <div className="flex justify-end space-x-3 items-center">
            {socialLinks.home && (
              <a 
                href={socialLinks.home} 
                aria-label="Visit Website"
                className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1"
              >
                <Home size={22} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`} 
                aria-label="Send Email"
                className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1"
              >
                <Mail size={22} strokeWidth={1.5} />
              </a>
            )}
            {socialLinks.phone && (
              <a 
                href={`tel:${socialLinks.phone}`} 
                aria-label="Call"
                className="text-gray-800 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-200 p-1"
              >
                <Phone size={22} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Color Bar (Role) */}
      <div 
        className={`absolute bottom-0 left-0 w-full p-3 px-8 text-right text-white text-sm italic tracking-wide font-raleway font-medium z-30 transition-colors duration-300 ${currentTheme.bar}`}
      >
        {role}
      </div>
    </div>
  );
};

/**
 * Main App
 * Demonstrates the 50% split layout requested by the user.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6 md:p-12">
      
      <div className="max-w-6xl w-full mb-8">
        <h1 className="text-white text-3xl font-light mb-2 font-sans">Team <span className="font-bold text-blue-400">Profiles</span></h1>
        <p className="text-gray-400 text-sm mb-8">Hover over the cards to see contact details.</p>
        
        {/* GRID LAYOUT DEMO 
          This grid specifically answers the request to "display 50% of a page".
          On medium screens and up (md:), it splits into 2 columns.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Card 1: The "Right One" (Blue/Tiffany Style) */}
          <SplitProfileCard 
            name="Tiffany"
            surname="Case"
            role="Software Engineer"
            colorTheme="blue"
            imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            quote="That's the whole problem with science. You've got a bunch of empiricists trying to describe things of unimaginable wonder."
          />

          {/* Card 2: Variation (Red) */}
          <SplitProfileCard 
            name="Victoria"
            surname="Pena"
            role="Illustrator"
            colorTheme="red"
            imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
            quote="A voice crackles in Calvin's radio: 'Enemy fighters at two o'clock!' 'Roger. What should I do until then?'"
          />
          
        </div>
      </div>

      {/* Instructions for user */}
      <div className="bg-neutral-800 p-4 rounded text-xs text-neutral-400 max-w-lg text-center">
        <p>Responsive behavior: Stacks on mobile, 50% width on desktop.</p>
      </div>

    </div>
  );
}