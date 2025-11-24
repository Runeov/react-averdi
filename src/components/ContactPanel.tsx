import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Copy } from 'lucide-react';
import { useState } from 'react';
import contactLogo from '../assets/contact.avif';
export function ContactPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send to a backend
    alert('Takk for din henvendelse! Vi kontakter deg snart.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    alert(`${type} kopiert til utklippstavlen`);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Trenger du hjelp? Ta kontakt!
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Kontakt oss
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Klar for å ta kontroll over økonomien? Vi hjelper deg gjerne!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl mb-6">Kom i kontakt</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">Ring oss direkte</p>
                      <div className="flex items-center gap-2">
                        <a 
                          href="tel:+4778466000" 
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          +47 78 46 60 00
                        </a>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard('+47 78 46 60 00', 'Telefonnummer')}
                          className="h-6 w-6 p-0"
                          aria-label="Kopier telefonnummer"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-1">Send e-post</p>
                      <div className="flex items-center gap-2">
                        <a 
                          href="mailto:post@averdi.no" 
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          post@averdi.no
                        </a>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard('post@averdi.no', 'E-postadresse')}
                          className="h-6 w-6 p-0"
                          aria-label="Kopier e-postadresse"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-2">Vårt kontor</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <span>Karasjok: Hovedgata 15, 9730 Karasjok</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard('Hovedgata 15, 9730 Karasjok', 'Adresse')}
                            className="h-4 w-4 p-0"
                            aria-label="Kopier adresse"
                          >
                            <Copy className="h-2 w-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Google Maps */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Finn oss på kartet</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2 text-sm">Karasjok</p>
                    <div className="rounded-lg overflow-hidden border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.8947234567!2d25.507!3d69.472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sHovedgata%2015%2C%209730%20Karasjok!5e0!3m2!1sen!2sno!4v1234567890"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Averdi Karasjok Office Location"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>



            <div className="grid grid-cols-2 gap-4">
              <Button size="lg" asChild className="h-16 group">
                <a href="tel:+4778466000" className="flex flex-col items-center gap-1">
                  <Phone className="h-5 w-5" />
                  <span className="group-hover:hidden">Ring nå</span>
                  <span className="hidden group-hover:inline">+47 78 46 60 00</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-16 group">
                <a href="mailto:post@averdi.no" className="flex flex-col items-center gap-1">
                  <Mail className="h-5 w-5" />
                  <span className="group-hover:hidden">Send e-post</span>
                  <span className="hidden group-hover:inline">post@averdi.no</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="relative bg-white shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <img src={contactLogo} alt="Contact Logo" className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Send oss en melding
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">Navn *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1.5 h-12 text-base border-2 hover:border-primary/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-base font-medium">Bedrift</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="mt-1.5 h-12 text-base border-2 hover:border-primary/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">E-post *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-1.5 h-12 text-base border-2 hover:border-primary/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-1.5 h-12 text-base border-2 hover:border-primary/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium">Melding *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Fortell oss hvordan vi kan hjelpe deg..."
                    required
                    className="mt-1.5 text-base border-2 hover:border-primary/50 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Mail className="mr-2 h-5 w-5" />
                  Send melding
                </Button>
              </form>
            </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}