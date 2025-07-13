
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AboutSection } from '@/components/AboutSection';
import { ProfileDemo } from '@/components/ProfileDemo';
import { JobListings } from '@/components/JobListings';
import { TeacherFilters } from '@/components/TeacherFilters';
import { TeacherCards } from '@/components/TeacherCards';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Search } from 'lucide-react';

const Index = () => {
  const [showProfileDemo, setShowProfileDemo] = useState(false);
  const [showJobListings, setShowJobListings] = useState(false);
  const [showTeacherSearch, setShowTeacherSearch] = useState(false);
  const [filters, setFilters] = useState({
    subject: '',
    language: '',
    experience: '',
    board: '',
    location: '',
    priceRange: '',
    teachingMode: '',
    availability: '',
    searchName: ''
  });

  if (showProfileDemo) {
    return (
      <div className="min-h-screen w-full bg-background font-inter">
        <Header />
        <div className="p-4">
          <Button
            onClick={() => setShowProfileDemo(false)}
            className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational"
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
      <div className="min-h-screen w-full bg-background font-inter">
        <Header />
        <div className="p-4">
          <Button
            onClick={() => setShowJobListings(false)}
            className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational"
          >
            ← Back to Home
          </Button>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-foreground mb-2">Job Opportunities</h1>
              <p className="text-charcoal">Find teaching positions at schools and colleges</p>
            </div>
            <JobListings />
          </div>
        </div>
      </div>
    );
  }

  if (showTeacherSearch) {
    return (
      <div className="min-h-screen w-full bg-background font-inter">
        <Header />
        <div className="p-4">
          <Button
            onClick={() => setShowTeacherSearch(false)}
            className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational"
          >
            ← Back to Home
          </Button>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-foreground mb-2">Find Teachers</h1>
              <p className="text-charcoal">Search and filter qualified teachers for your needs</p>
            </div>
            <TeacherFilters filters={filters} setFilters={setFilters} />
            <TeacherCards filters={filters} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background font-inter">
      <Header />
      <main className="space-y-8 px-4 md:px-6 lg:px-8 py-6">
        <HeroSection />
        
        <section className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={() => setShowProfileDemo(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational transform hover:scale-105 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" />
              View Profile Demo
            </Button>
            <Button
              onClick={() => setShowJobListings(true)}
              variant="outline"
              className="border-emerald text-emerald hover:bg-emerald-light hover:text-emerald shadow-educational transform hover:scale-105 transition-all duration-300"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Browse Job Postings
            </Button>
            <Button
              onClick={() => setShowTeacherSearch(true)}
              variant="outline"
              className="border-emerald text-emerald hover:bg-emerald-light hover:text-emerald shadow-educational transform hover:scale-105 transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              Find Teachers
            </Button>
          </div>
        </section>
        
        <section className="max-w-6xl mx-auto">
          <AboutSection />
        </section>
        
        <section className="max-w-6xl mx-auto">
          <ServicesSection />
        </section>
        
        <section className="max-w-6xl mx-auto">
          <TestimonialsSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
