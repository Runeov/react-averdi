"use client";

import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MobileContactBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Hide the bar when contact section is visible
        setIsVisible(rect.top > window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t shadow-lg md:hidden">
      <div className="flex">
        <Button
          asChild
          className="flex-1 rounded-none h-14 group"
          size="lg"
        >
          <a href="tel:+4778466000" className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="group-hover:hidden">Ring nå</span>
            <span className="hidden group-hover:inline">+47 78 46 60 00</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 rounded-none h-14 border-0 border-l group"
          size="lg"
        >
          <a href="mailto:post@averdi.no" className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" />
            <span className="group-hover:hidden">Send e-post</span>
            <span className="hidden group-hover:inline">post@averdi.no</span>
          </a>
        </Button>
      </div>
    </div>
  );
}