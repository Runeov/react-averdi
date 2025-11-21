import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ArrowLeft, Mail, Phone, MapPin, Award, Users, Clock } from 'lucide-react';

interface ProfilePageProps {
  employee: {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    office: 'karasjok';
    photo?: string;
    description: string;
    experience: string;
    specialties: string[];
    education: string[];
    languages: string[];
    workingHours: string;
    achievements: string[];
    clientTypes: string[];
  };
  onBack: () => void;
}

export function ProfilePage({ employee, onBack }: ProfilePageProps) {
  const officeInfo = {
    karasjok: {
      name: 'Karasjok',
      address: 'Hovedgata 15, 9730 Karasjok',
      icon: '🏔️'
    },
  };

  const currentOffice = officeInfo[employee.office];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Tilbake til teamet
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  {employee.photo ? (
                  <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-4xl text-primary">
                        {employee.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  <h1 className="text-2xl mb-2">{employee.name}</h1>
                  <p className="text-lg text-primary mb-4">{employee.role}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {currentOffice.name}
                    </Badge>
                    <Badge variant="outline">{employee.experience}</Badge>
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                    Kontaktinformasjon
                  </h3>
                  
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full justify-start"
                    >
                      <a href={`mailto:${employee.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send e-post
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      asChild
                      className="w-full justify-start"
                    >
                      <a href={`tel:${employee.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Ring direkte
                      </a>
                    </Button>
                  </div>

                  <div className="pt-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{currentOffice.name} kontor</p>
                        <p>{currentOffice.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{employee.workingHours}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl mb-4">Om {employee.name.split(' ')[0]}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {employee.description}
                </p>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Spesialområder
                </h2>
                <div className="flex flex-wrap gap-2">
                  {employee.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education & Certifications */}
            {employee.education.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl mb-4">Utdanning og sertifiseringer</h2>
                  <ul className="space-y-2">
                    {employee.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Client Types */}
            {employee.clientTypes.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Klienttyper
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {employee.clientTypes.map((type, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="text-muted-foreground">{type}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Languages */}
            {employee.languages.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl mb-4">Språk</h2>
                  <div className="flex flex-wrap gap-2">
                    {employee.languages.map((language, index) => (
                      <Badge key={index} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Achievements */}
            {employee.achievements.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl mb-4">Utmerkelser og anerkjennelser</h2>
                  <ul className="space-y-3">
                    {employee.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* CTA Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-3">
                  Har du spørsmål til {employee.name.split(' ')[0]}?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ta kontakt direkte for personlig rådgivning og hjelp med dine økonomiske behov.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a href={`mailto:${employee.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Send e-post
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`tel:${employee.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Ring nå
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}