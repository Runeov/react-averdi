import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
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
    <Card className="relative bg-white shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-primary/20">
      <CardContent className="p-6 text-center">
        <div className="mb-4">
          {photo ? (
            <img
              src={photo}
              alt={`${name} - ${role}`}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto bg-primary/10 flex items-center justify-center">
              <span className="text-2xl text-primary">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg mb-1">{name}</h3>
        <p className="text-primary mb-3">{role}</p>
        
        {description && (
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="space-y-2">
          {onViewProfile && (
            <Button
              variant="outline"
              size="sm"
              onClick={onViewProfile}
              className="w-full flex items-center gap-2 mb-2"
            >
              <User className="h-4 w-4" />
              Se profil
            </Button>
          )}
          
          <div className="flex justify-center gap-4 text-gray-400 mt-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 w-8 p-0 hover:text-primary transition-colors"
            >
              <a href={`mailto:${email}`} aria-label={`Send e-post til ${name}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 w-8 p-0 hover:text-primary transition-colors"
            >
              <a href={`tel:${phone}`} aria-label={`Ring ${name}`}>
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 w-8 p-0 hover:text-primary transition-colors"
            >
              <a href="#" aria-label={`Send melding til ${name}`}>
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 w-8 p-0 hover:text-primary transition-colors"
            >
              <a href="#" aria-label={`Se ${name} på LinkedIn`}>
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}