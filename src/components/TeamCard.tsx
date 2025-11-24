import { useState } from 'react';
import { ChevronUp, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: string | React.ReactElement;
  title: string;
  bullets: string[];
  expandedContent?: string;
  className?: string;
}

export function ServiceCard({ icon, title, bullets, expandedContent, className = '' }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group relative rounded-xl border border-primary/10 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${className}`}>
      {/* Background hover effect for the whole card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
      
      <div className="p-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
          
          {/* Forenklet Ikon-container uten stil/boks */}
          <div className="flex-shrink-0">
            {typeof icon === 'string' ? (
              <img src={icon} alt={`${title} icon`} className="w-12 h-12 object-contain" />
            ) : (
              <div className="w-12 h-12 text-primary">{icon}</div>
            )}
          </div>

          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <ul className="space-y-3 mb-6">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {expandedContent && (
              <>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 max-h-96 mb-6' : 'opacity-0 max-h-0'}`}>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {expandedContent}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground p-0 h-auto text-primary hover:text-primary/80 bg-transparent gap-2 group/btn"
                >
                  {isExpanded ? 'Vis mindre' : 'Les mer'}
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 transition-transform" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}