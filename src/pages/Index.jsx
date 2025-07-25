
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
import { useIsMobile } from '@/hooks/use-mobile';

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
  
  const isMobile = useIsMobile();

  if (showProfileDemo) {
    return (
      <div className="min-h-screen w-full bg-background font-inter">
        <Header />
        <div className="p-3 sm:p-4 animate-fade-in-up">
          <Button
            onClick={() => setShowProfileDemo(false)}
            className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
        <div className="p-3 sm:p-4 animate-fade-in-up">
          <Button
            onClick={() => setShowJobListings(false)}
            className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            ← Back to Home
          </Button>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-scale-in px-4">
              <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Job Opportunities</h1>
              <p className="text-foreground text-sm sm:text-base">Find teaching positions at schools and colleges</p>
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
        <div className="p-3 sm:p-4 animate-fade-in-up">
          <Button
            onClick={() => setShowTeacherSearch(false)}
            className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            ← Back to Home
          </Button>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 animate-scale-in px-4">
              <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Find Teachers</h1>
              <p className="text-foreground text-sm sm:text-base">Search and filter qualified teachers for your needs</p>
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
      <main className="space-y-6 sm:space-y-8 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <div className="animate-fade-in-up">
          <HeroSection />
        </div>
        
        {/* Enhanced Filter Section with Better Mobile Visibility */}
        <section className="max-w-6xl mx-auto animate-slide-in-left">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 border-primary/20 shadow-educational-lg backdrop-blur-sm">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4 font-display">
                Discover Your Perfect Match
              </h2>
              <p className="text-foreground text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                Choose your path to educational excellence with our comprehensive platform
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
              <Button
                onClick={() => setShowProfileDemo(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-educational transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl w-full sm:max-w-xs"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Profile Demo
              </Button>
              <Button
                onClick={() => setShowJobListings(true)}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-educational transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-sm w-full sm:max-w-xs"
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Browse Job Postings
              </Button>
              <Button
                onClick={() => setShowTeacherSearch(true)}
                variant="outline"
                className="border-2 border-emerald text-emerald hover:bg-emerald-light hover:text-emerald shadow-educational transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-sm w-full sm:max-w-xs"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Find Teachers
              </Button>
            </div>
          </div>
        </section>
        
        <section className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <AboutSection />
        </section>
        
        <section className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ServicesSection />
        </section>
        
        <section className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <TestimonialsSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
