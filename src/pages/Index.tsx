
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
      <div className="min-h-screen w-full bg-modern-mesh">
        <div className="min-h-screen bg-white/10 backdrop-blur-sm">
          <Header />
          <div className="p-6">
            <Button
              onClick={() => setShowProfileDemo(false)}
              className="mb-6 btn-modern-blue"
            >
              ← Back to Home
            </Button>
            <ProfileDemo />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-modern-mesh">
      <div className="min-h-screen bg-white/5 backdrop-blur-sm">
        <Header />
        <main className="space-y-20 px-4 md:px-6 lg:px-8 py-12">
          <HeroSection />
          
          {/* Demo Profile Button */}
          <section className="max-w-7xl mx-auto text-center">
            <div className="modern-card p-8">
              <h3 className="text-headline-medium text-modern-gradient mb-4">
                Experience Our Platform
              </h3>
              <p className="text-body-large text-gray-600 mb-6">
                See how our teacher profiles showcase expertise and build trust
              </p>
              <Button
                onClick={() => setShowProfileDemo(true)}
                className="btn-modern-blue"
              >
                <User className="w-5 h-5 mr-2" />
                View Profile Demo
              </Button>
            </div>
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
    </div>
  );
};

export default Index;
