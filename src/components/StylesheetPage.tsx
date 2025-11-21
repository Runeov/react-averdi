"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Palette, Check } from 'lucide-react';

interface ColorScheme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
  buttonPreview: string;
  category: 'professional' | 'modern' | 'traditional' | 'vibrant';
}

const colorSchemes: ColorScheme[] = [
  {
    id: 'averdi-original',
    name: 'Averdi Original (Nettside)',
    description: 'Autentisk gjenskaping av dagens averdi.no med varme gule og mørke grå toner.',
    colors: {
      primary: '#f39c12',
      secondary: '#2c3e50',
      accent: '#fff3cd',
      background: '#ffffff',
      foreground: '#2c3e50',
      muted: '#f1f2f4'
    },
    buttonPreview: 'bg-[#f39c12] text-white hover:bg-[#e67e22]',
    category: 'vibrant'
  },
  {
    id: 'averdi-professional',
    name: 'Averdi Professional',
    description: 'Bransjestandard mørkeblå for tillit, kombinert med Averdi-gul for gjenkjennelse.',
    colors: {
      primary: '#1e3a8a',
      secondary: '#f39c12',
      accent: '#f1f5f9',
      background: '#ffffff',
      foreground: '#1e3a8a',
      muted: '#f8fafc'
    },
    buttonPreview: 'bg-[#1e3a8a] text-white hover:bg-[#1e40af]',
    category: 'professional'
  },
  {
    id: 'averdi-orange',
    name: 'Averdi Legacy Orange',
    description: 'Vår opprinnelige varme og energiske palett med orange og gule toner',
    colors: {
      primary: '#e67e22',
      secondary: '#f39c12',
      accent: '#fff3cd',
      background: '#ffffff',
      foreground: '#2c3e50',
      muted: '#f1f2f4'
    },
    buttonPreview: 'bg-[#e67e22] text-white hover:bg-[#d35400]',
    category: 'vibrant'
  },
  {
    id: 'averdi-bold',
    name: 'Averdi Bold',
    description: 'Kraftig og selvsikker versjon med dypere farger og fet typografi',
    colors: {
      primary: '#d35400',
      secondary: '#e67e22',
      accent: '#fff3cd',
      background: '#ffffff',
      foreground: '#2c3e50',
      muted: '#f1f2f4'
    },
    buttonPreview: 'bg-[#d35400] text-white hover:bg-[#a0400e] font-semibold',
    category: 'vibrant'
  },
  {
    id: 'averdi-soft',
    name: 'Averdi Soft',
    description: 'Myk og tilgjengelig versjon med lysere farger og smidig typografi',
    colors: {
      primary: '#f39c12',
      secondary: '#f1c40f',
      accent: '#fff8dc',
      background: '#ffffff',
      foreground: '#2c3e50',
      muted: '#fef9e7'
    },
    buttonPreview: 'bg-[#f39c12] text-white hover:bg-[#e67e22] font-light',
    category: 'vibrant'
  },
  {
    id: 'averdi-modern',
    name: 'Averdi Modern',
    description: 'Samtidig og fremtidsrettet med oppdaterte farger og moderne typografi',
    colors: {
      primary: '#ff6b35',
      secondary: '#ffc947',
      accent: '#fff3cd',
      background: '#ffffff',
      foreground: '#2c3e50',
      muted: '#f1f2f4'
    },
    buttonPreview: 'bg-[#ff6b35] text-white hover:bg-[#e55a2b]',
    category: 'vibrant'
  },
  {
    id: 'averdi-classic',
    name: 'Averdi Classic',
    description: 'Tradisjonell og tidløs med serif-fonter og klassiske farger',
    colors: {
      primary: '#e67e22',
      secondary: '#f39c12',
      accent: '#fff3cd',
      background: '#ffffff',
      foreground: '#2d3748',
      muted: '#f1f2f4'
    },
    buttonPreview: 'bg-[#e67e22] text-white hover:bg-[#d35400]',
    category: 'vibrant'
  },
  {
    id: 'averdi-warm',
    name: 'Averdi Warm',
    description: 'Varm og koselig med jordnære toner og behagelig bakgrunn',
    colors: {
      primary: '#e17055',
      secondary: '#fdcb6e',
      accent: '#fff4e1',
      background: '#fefbf3',
      foreground: '#2c3e50',
      muted: '#faf6ed'
    },
    buttonPreview: 'bg-[#e17055] text-white hover:bg-[#d63031]',
    category: 'vibrant'
  },
  {
    id: 'professional-blue',
    name: 'Profesjonell Blå',
    description: 'Klassisk og tillitvekkende blå palett, perfekt for finansielle tjenester',
    colors: {
      primary: '#2563eb',
      secondary: '#3b82f6',
      accent: '#dbeafe',
      background: '#ffffff',
      foreground: '#1e293b',
      muted: '#f8fafc'
    },
    buttonPreview: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]',
    category: 'professional'
  },
  {
    id: 'trust-navy',
    name: 'Tillitsskapende Navy',
    description: 'Dyp navy med aksenter som formidler stabilitet og pålitelighet',
    colors: {
      primary: '#1e40af',
      secondary: '#3730a3',
      accent: '#e0e7ff',
      background: '#ffffff',
      foreground: '#0f172a',
      muted: '#f1f5f9'
    },
    buttonPreview: 'bg-[#1e40af] text-white hover:bg-[#1e3a8a]',
    category: 'professional'
  },
  {
    id: 'growth-green',
    name: 'Vekst Grønn',
    description: 'Naturlig grønn palett som symboliserer vekst og økonomisk fremgang',
    colors: {
      primary: '#059669',
      secondary: '#10b981',
      accent: '#d1fae5',
      background: '#ffffff',
      foreground: '#1f2937',
      muted: '#f9fafb'
    },
    buttonPreview: 'bg-[#059669] text-white hover:bg-[#047857]',
    category: 'modern'
  },
  {
    id: 'conservative-gray',
    name: 'Konservativ Grå',
    description: 'Nøytral og tidløs grå palett for maksimal profesjonalitet',
    colors: {
      primary: '#374151',
      secondary: '#6b7280',
      accent: '#f3f4f6',
      background: '#ffffff',
      foreground: '#111827',
      muted: '#f9fafb'
    },
    buttonPreview: 'bg-[#374151] text-white hover:bg-[#1f2937]',
    category: 'traditional'
  },
  {
    id: 'premium-purple',
    name: 'Premium Lilla',
    description: 'Sofistikert lilla palett som formidler luksus og ekspertise',
    colors: {
      primary: '#7c3aed',
      secondary: '#8b5cf6',
      accent: '#ede9fe',
      background: '#ffffff',
      foreground: '#1f2937',
      muted: '#f9fafb'
    },
    buttonPreview: 'bg-[#7c3aed] text-white hover:bg-[#6d28d9]',
    category: 'modern'
  },
  {
    id: 'warm-brown',
    name: 'Varm Brun',
    description: 'Jordnære brune toner som skaper trygghet og stabilitet',
    colors: {
      primary: '#92400e',
      secondary: '#b45309',
      accent: '#fef3c7',
      background: '#ffffff',
      foreground: '#1f2937',
      muted: '#f9fafb'
    },
    buttonPreview: 'bg-[#92400e] text-white hover:bg-[#78350f]',
    category: 'traditional'
  },
  {
    id: 'modern-teal',
    name: 'Moderne Teal',
    description: 'Frisk og moderne teal som kombinerer professionalitet med innovasjon',
    colors: {
      primary: '#0f766e',
      secondary: '#14b8a6',
      accent: '#ccfbf1',
      background: '#ffffff',
      foreground: '#1f2937',
      muted: '#f9fafb'
    },
    buttonPreview: 'bg-[#0f766e] text-white hover:bg-[#134e4a]',
    category: 'modern'
  }
];

interface StylesheetPageProps {
  onBack: () => void;
  currentScheme?: string;
  onSchemeChange?: (schemeId: string) => void;
}

export function StylesheetPage({ onBack, currentScheme = 'averdi-professional', onSchemeChange }: StylesheetPageProps) {
  const [selectedScheme, setSelectedScheme] = useState(currentScheme);

  const handleSchemeSelect = (schemeId: string) => {
    setSelectedScheme(schemeId);
    onSchemeChange?.(schemeId);
    
    // Apply the color scheme theme class to body
    const body = document.body;
    
    // Remove all existing theme classes
    const themeClasses = [
      'theme-averdi-original',
      'theme-averdi-professional',
      'theme-averdi-orange',
      'theme-professional-blue',
      'theme-trust-navy',
      'theme-growth-green',
      'theme-conservative-gray',
      'theme-premium-purple',
      'theme-warm-brown',
      'theme-modern-teal',
      'theme-averdi-bold',
      'theme-averdi-soft',
      'theme-averdi-modern',
      'theme-averdi-classic',
      'theme-averdi-warm'
    ];
    
    themeClasses.forEach(className => {
      body.classList.remove(className);
    });
    
    // Add the new theme class (skip for averdi-professional as it's the default)
    if (schemeId !== 'averdi-professional') {
      const themeClass = `theme-${schemeId}`;
      body.classList.add(themeClass);
    }
  };

  const groupedSchemes = colorSchemes.reduce((acc, scheme) => {
    if (!acc[scheme.category]) {
      acc[scheme.category] = [];
    }
    acc[scheme.category].push(scheme);
    return acc;
  }, {} as Record<string, ColorScheme[]>);

  const categoryNames = {
    professional: 'Profesjonelle',
    modern: 'Moderne', 
    traditional: 'Tradisjonelle',
    vibrant: 'Energiske'
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tilbake
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <Palette className="h-8 w-8 text-primary" />
            <h1 className="text-3xl">Fargepalett</h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Velg en fargepalett som passer best til din bedrifts profil og identitet. 
            Alle palettene er designet for å fungere godt i regnskaps- og finanssektoren.
          </p>
        </div>

        {/* Current Selection Preview */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              Aktiv fargepalett
            </CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const current = colorSchemes.find(s => s.id === selectedScheme);
              return current ? (
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg mb-1">{current.name}</h3>
                    <p className="text-muted-foreground">{current.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className={current.buttonPreview}>
                      Eksempel knapp
                    </Button>
                    <Button variant="outline">
                      Sekundær knapp
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </CardContent>
        </Card>

        {/* Color Scheme Categories */}
        {Object.entries(groupedSchemes).map(([category, schemes]) => (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl">{categoryNames[category as keyof typeof categoryNames]}</h2>
              <Badge variant="outline">{schemes.length}</Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {schemes.map((scheme) => (
                <Card 
                  key={scheme.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedScheme === scheme.id 
                      ? 'ring-2 ring-primary border-primary' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => handleSchemeSelect(scheme.id)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{scheme.name}</span>
                      {selectedScheme === scheme.id && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {scheme.description}
                    </p>
                    
                    {/* Color Preview */}
                    <div className="flex gap-2 mb-4">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: scheme.colors.primary }}
                        title="Primær farge"
                      />
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: scheme.colors.secondary }}
                        title="Sekundær farge"
                      />
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: scheme.colors.accent }}
                        title="Aksent farge"
                      />
                    </div>
                    
                    {/* Button Previews */}
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className={scheme.buttonPreview}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Primær
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={(e) => e.stopPropagation()}
                        style={{ 
                          borderColor: scheme.colors.primary,
                          color: scheme.colors.primary 
                        }}
                      >
                        Sekundær
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Usage Guidelines */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Retningslinjer for fargebruk</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Profesjonelle farger</h4>
              <p className="text-sm text-muted-foreground">
                Blå og navy-toner skaper tillit og stabilitet. Ideelle for å kommunisere pålitelighet i finansielle tjenester.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Moderne farger</h4>
              <p className="text-sm text-muted-foreground">
                Grønne og teal-toner representerer vekst og innovasjon. Perfekte for fremtidsrettede regnskapsfirma.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tradisjonelle farger</h4>
              <p className="text-sm text-muted-foreground">
                Grå og brune toner formidler stabilitet og erfaring. Gode valg for etablerte og konservative bedrifter.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Energiske farger</h4>
              <p className="text-sm text-muted-foreground">
                Varme farger som orange skaper energi og tilgjengelighet. Ideelle for å skille seg ut i markedet.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}