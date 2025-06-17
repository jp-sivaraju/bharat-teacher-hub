
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TeacherFilters } from '@/components/TeacherFilters';
import { TeacherCards } from '@/components/TeacherCards';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AboutSection } from '@/components/AboutSection';

const Index = () => {
  const [filters, setFilters] = useState({
    subject: '',
    language: '',
    experience: '',
    board: ''
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header />
      <main className="space-y-16 px-4 md:px-6 lg:px-8 py-8">
        <HeroSection />
        
        <section className="max-w-7xl mx-auto">
          <TeacherFilters filters={filters} setFilters={setFilters} />
          <div className="mt-8">
            <TeacherCards filters={filters} />
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
