//Main landing page
'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LearningPath from '@/components/LearningPath';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import QuoteRibbon from '@/components/QuoteRibbon';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)' 
      }}
    >
      <HeroSection isVisible={isVisible} />
      <FeaturesSection isVisible={isVisible} />
      <LearningPath isVisible={isVisible} />
      <Testimonials isVisible={isVisible} />
      <ContactCTA isVisible={isVisible} />
      <QuoteRibbon isVisible={isVisible} />
    </div>
  );
}