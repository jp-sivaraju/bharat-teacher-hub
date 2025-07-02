
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TeacherFilters } from '@/components/TeacherFilters';
import { TeacherCards } from '@/components/TeacherCards';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AboutSection } from '@/components/AboutSection';
import { ProfileDemo } from '@/components/ProfileDemo';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Index = () => {
  const [filters, setFilters] = useState({
    subject: '',
    language: '',
    experience: '',
    board: ''
  });
  const [showProfileDemo, setShowProfileDemo] = useState(false);

  if (showProfileDemo) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <Header />
        <div className="p-6">
          <Button
            onClick={() => setShowProfileDemo(false)}
            className="mb-6 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
          >
            ← Back to Home
          </Button>
          <ProfileDemo />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      <main className="space-y-16 px-4 md:px-6 lg:px-8 py-8">
        <HeroSection />
        
        {/* Demo Profile Button */}
        <section className="max-w-7xl mx-auto text-center">
          <Button
            onClick={() => setShowProfileDemo(true)}
            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
          >
            <User className="w-4 h-4 mr-2" />
            View Profile Demo
          </Button>
        </section>
        
        <section className="max-w-7xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-orange-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Find Your Perfect Job with Find Your Perfect Teacher
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join thousands of educators who have found their ideal teaching positions through our comprehensive platform. 
              Connect with schools, colleges, and home tuition opportunities across India.
            </p>
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
