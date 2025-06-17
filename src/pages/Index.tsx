
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TeacherFilters } from '@/components/TeacherFilters';
import { TeacherCards } from '@/components/TeacherCards';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { ContactSection } from '@/components/ContactSection';
import { AboutSection } from '@/components/AboutSection';
import { LoginSection } from '@/components/LoginSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [filters, setFilters] = useState({
    subject: '',
    language: '',
    experience: '',
    board: ''
  });

  useEffect(() => {
    const handleNavigateToRegistration = () => {
      setActiveSection('registration');
    };

    window.addEventListener('navigateToRegistration', handleNavigateToRegistration);
    
    return () => {
      window.removeEventListener('navigateToRegistration', handleNavigateToRegistration);
    };
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            <HeroSection />
            <TeacherFilters filters={filters} setFilters={setFilters} />
            <TeacherCards filters={filters} />
            <ServicesSection />
            <TestimonialsSection />
          </div>
        );
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'testimonials':
        return <TestimonialsSection />;
      case 'login':
        return <LoginSection />;
      case 'registration':
        return <RegistrationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <div>
            <HeroSection />
            <TeacherFilters filters={filters} setFilters={setFilters} />
            <TeacherCards filters={filters} />
            <ServicesSection />
            <TestimonialsSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="p-4 md:p-6 lg:p-8">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
