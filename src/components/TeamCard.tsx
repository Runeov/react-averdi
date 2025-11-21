import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, User } from 'lucide-react';

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
    <Card className="shadow-sm hover:shadow-md transition-shadow">
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
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <a href={`mailto:${email}`}>
                <Mail className="h-4 w-4" />
                E-post
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <a href={`tel:${phone}`}>
                <Phone className="h-4 w-4" />
                Ring
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}