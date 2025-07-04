
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AboutSection } from '@/components/AboutSection';
import { ProfileDemo } from '@/components/ProfileDemo';
import { JobListings } from '@/components/JobListings';
import { Button } from '@/components/ui/button';
import { User, Briefcase } from 'lucide-react';

const Index = () => {
  const [showProfileDemo, setShowProfileDemo] = useState(false);
  const [showJobListings, setShowJobListings] = useState(false);

  if (showProfileDemo) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <Header />
        <div className="p-6">
          <Button
            onClick={() => setShowProfileDemo(false)}
            className="mb-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-orange"
          >
            ← Back to Home
          </Button>
          <ProfileDemo />
        </div>
      </div>
    );
  }

  if (showJobListings) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <Header />
        <div className="p-6">
          <Button
            onClick={() => setShowJobListings(false)}
            className="mb-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-orange"
          >
            ← Back to Home
          </Button>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-orange-900 mb-4">Job Opportunities</h1>
              <p className="text-lg text-orange-700">Find the perfect teaching position at schools and colleges</p>
            </div>
            <JobListings />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 bg-pattern">
      <Header />
      <main className="space-y-16 px-4 md:px-6 lg:px-8 py-8">
        <HeroSection />
        
        {/* Demo Profile Button */}
        <section className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setShowProfileDemo(true)}
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-orange-lg hover:shadow-orange transform hover:scale-105 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" />
              View Profile Demo
            </Button>
            <Button
              onClick={() => setShowJobListings(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Browse Job Postings
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
  );
};

export default Index;
