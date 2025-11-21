"use client";

// import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function OfficeSwitcher() {
  const offices = {
    karasjok: {
      name: "Karasjok",
      address: "Hovedgata 15, 9730 Karasjok",
      phone: "+47 78 46 60 00",
      email: "karasjok@averdi.no",
      contact: "Inga Márjá Somby",
      contactTitle: "Kontorleder",
      hours: "Man-Fre: 08:00-16:00"
    },
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl mb-4">
            Kontakt oss
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi er her for å hjelpe deg
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-2">Kontakt {offices.karasjok.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {offices.karasjok.contact} - {offices.karasjok.contactTitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-muted-foreground">{offices.karasjok.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Telefon</p>
                        <a
                          href={`tel:${offices.karasjok.phone}`}
                          className="text-primary hover:text-primary/80 transition-colors group"
                        >
                          <span className="group-hover:hidden">Ring oss</span>
                          <span className="hidden group-hover:inline">{offices.karasjok.phone}</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">E-post</p>
                        <a
                          href={`mailto:${offices.karasjok.email}`}
                          className="text-primary hover:text-primary/80 transition-colors group"
                        >
                          <span className="group-hover:hidden">Send e-post</span>
                          <span className="hidden group-hover:inline">{offices.karasjok.email}</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Åpningstider</p>
                        <p className="text-muted-foreground">{offices.karasjok.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      🏔️
                    </div>
                    <p className="text-lg font-medium">{offices.karasjok.name}</p>
                    <p className="text-muted-foreground">
                      Hjerte av Finnmark
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}