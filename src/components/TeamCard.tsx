import { Mail, Phone, User, Linkedin, MessageCircle } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo?: string;
  description?: string;
  onViewProfile?: () => void;
}

export function TeamCard({ name, role, email, phone, photo, description, onViewProfile }: TeamCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-primary/20 h-full flex flex-col overflow-hidden">
      <div className="p-6 text-center flex flex-col h-full">
        <div className="mb-4 flex-shrink-0">
          {photo ? (
            <img
              src={photo}
              alt={`${name} - ${role}`}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto bg-primary/10 flex items-center justify-center">
              <span className="text-2xl text-primary font-bold">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-1 flex-shrink-0">{name}</h3>
        <p className="text-primary font-medium mb-3 flex-shrink-0">{role}</p>
        
        {/* Always render description space for consistent height */}
        <div className="mb-4 flex-1 flex items-center justify-center min-h-[60px]">
          <p className="text-sm text-muted-foreground leading-relaxed text-center text-gray-600">
            {description || "Engasjert regnskapsfører dedikert til å hjelpe våre kunder med profesjonelle økonomitjenester."}
          </p>
        </div>
        
        <div className="space-y-2 mt-auto">
          {onViewProfile && (
            <button
              onClick={onViewProfile}
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 hover:bg-primary hover:text-white gap-2 mb-2"
            >
              <User className="h-4 w-4" />
              Se profil
            </button>
          )}
          
          <div className="flex justify-center gap-2 text-muted-foreground mt-4 pt-4 border-t border-gray-100">
            <a 
              href={`mailto:${email}`} 
              aria-label={`Send e-post til ${name}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 hover:text-primary hover:bg-primary/10"
            >
              <Mail className="h-4 w-4" />
            </a>
            
            <a 
              href={`tel:${phone}`} 
              aria-label={`Ring ${name}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 hover:text-primary hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" />
            </a>
            
            <a 
              href="#" 
              aria-label={`Send melding til ${name}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 hover:text-primary hover:bg-primary/10"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            
            <a 
              href="#" 
              aria-label={`Se ${name} på LinkedIn`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 hover:text-primary hover:bg-primary/10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}