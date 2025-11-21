"use client";

import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: string;
  title: string;
  bullets: string[];
  expandedContent?: string;
  className?: string;
}

export function ServiceCard({ icon, title, bullets, expandedContent, className }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{icon}</div>
          <div className="flex-1">
            <h3 className="text-xl mb-3">{title}</h3>
            <ul className="space-y-2 mb-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {expandedContent && (
          <>
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0 h-auto text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            >
              Les mer
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
            
            {isExpanded && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-muted-foreground leading-relaxed">
                  {expandedContent}
                </p>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}