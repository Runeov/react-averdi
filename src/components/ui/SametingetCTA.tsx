import { useNavigate } from 'react-router-dom';
import sametingetLogo from '../../assets/Logo_sametinget_3d_farger_skra.avif';

export function SametingetCTA() {
  const navigate = useNavigate();

  return (
    <div className="mt-20 text-center px-4">
      {/* Changes: 
        1. Removed border classes.
        2. Increased shadow opacity and blur for a 'floating' effect.
        3. Added a very subtle gradient background to the card.
      */}
      <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 max-w-3xl mx-auto group">
        
        {/* Image Container */}
        <div className="shrink-0 relative">
            {/* Decorative blob:
               Changed to a soft Yellow/Gold (#FDBE11) to complement the Blue/Red theme 
               and match the yellow stripe in the provided image.
            */}
            <div className="absolute inset-0 bg-[#FDBE11] rounded-2xl transform rotate-6 scale-110 transition-transform duration-300 group-hover:rotate-12 opacity-20"></div>
            
            <div className="relative w-24 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
                <img 
                    src={sametingetLogo} 
                    alt="Sametinget Logo" 
                    className="w-full h-full object-cover p-1"
                />
            </div>
        </div>

        {/* Text Content */}
        <div className="text-left flex-1">
          {/* Header: 
             Changed to Deep Blue (#00529B) to match the brand identity 
             instead of generic slate-900.
          */}
          <h3 className="font-bold text-xl text-[#00529B] group-hover:text-[#003d75] transition-colors">
            Søker du støtte fra Sametinget?
          </h3>
          <p className="text-slate-600 text-base mt-2 leading-relaxed">
            Vi har laget en komplett guide om tilskuddsordninger, krav og søknadsprosess.
          </p>
        </div>
        
        {/* Button */}
        {/* Button Styles:
            1. Base color: Sámi Blue (#00529B)
            2. Hover color: Sámi Red (#EA2628) 
            This creates a vibrant interaction that mimics the logo's palette.
        */}
        <button
          onClick={() => navigate('/kunnskapsbank/sametinget')}
          className="shrink-0 whitespace-nowrap px-8 py-3 bg-[#00529B] text-white font-semibold rounded-full hover:bg-[#EA2628] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-900/20"
        >
          Les guiden vår
        </button>
      </div>
    </div>
  );
}