
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AboutSection } from '@/components/AboutSection';
import { ProfileDemo } from '@/components/ProfileDemo';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Index = () => {
  const [showProfileDemo, setShowProfileDemo] = useState(false);

  if (showProfileDemo) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-warm-white via-soft-blue-50 to-warm-white-200">
        <Header />
        <div className="p-6">
          <Button
            onClick={() => setShowProfileDemo(false)}
            className="mb-6 bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 hover:from-soft-blue-600 hover:to-soft-blue-700 text-white shadow-blue"
          >
            ← Back to Home
          </Button>
          <ProfileDemo />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-warm-white via-soft-blue-50 to-warm-white-200 bg-pattern">
      <Header />
      <main className="space-y-16 px-4 md:px-6 lg:px-8 py-8">
        <HeroSection />
        
        {/* Demo Profile Button */}
        <section className="max-w-7xl mx-auto text-center">
          <Button
            onClick={() => setShowProfileDemo(true)}
            className="bg-gradient-to-r from-muted-coral-500 to-muted-coral-600 hover:from-muted-coral-600 hover:to-muted-coral-700 text-white shadow-coral-lg hover:shadow-coral transform hover:scale-105 transition-all duration-300"
          >
            <User className="w-4 h-4 mr-2" />
            View Profile Demo
          </Button>
        </section>
        
        <section className="max-w-7xl mx-auto">
          <AboutSection />
        </section>
        
        <section className="max-w-7xl mx-auto">
          <ServicesSection />
        </section>
        
        <section className="max-w-7xl mx-auto">
          <TestimonialsSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
