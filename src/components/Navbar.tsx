"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 64; // Height of the navbar (h-16 = 4rem = 64px)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (currentPage !== 'home') {
      onNavigate?.('home');
      // Wait for navigation to complete before scrolling
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src="/logo_averdi.avif" alt="Averdi Logo" className="h-24 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`transition-colors px-3 py-2 rounded-md ${
                  currentPage === 'home' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Hjem
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              >
                Tjenester
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              >
                Om oss
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              >
                Nyheter
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              >
                Kontakt
              </button>
              <button
                onClick={() => handleNavigation('stylesheet')}
                className={`transition-colors px-3 py-2 rounded-md ${
                  currentPage === 'stylesheet' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Farger
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-8"
            >
              Kontakt oss
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <button 
                onClick={() => handleNavigation('home')}
                className={`block px-3 py-2 rounded-md w-full text-left transition-colors ${
                  currentPage === 'home' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Hjem
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Tjenester
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Om oss
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Nyheter
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Kontakt
              </button>
              <button
                onClick={() => handleNavigation('stylesheet')}
                className={`block px-3 py-2 rounded-md w-full text-left transition-colors ${
                  currentPage === 'stylesheet' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Farger
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Kontakt oss
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}