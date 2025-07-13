
import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white rounded-3xl mb-12 p-10 md:p-16 shadow-lg border border-border">
      <div className="scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance">
                India's Premier
                <span className="block text-primary font-display">Teaching Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-inter font-light leading-relaxed text-pretty">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-inter text-pretty">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity or hire exceptional educators.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">CBSE Certified</span>
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">IIT Coaching</span>
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">Engineering Subjects</span>          
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">State Boards</span> 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">50,000+</h3>
              <p className="text-muted-foreground font-inter font-medium">Certified Teachers</p>
            </div>
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">2,500+</h3>
              <p className="text-muted-foreground font-inter font-medium">Partner Institutions</p>
            </div>
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">98%</h3>
              <p className="text-muted-foreground font-inter font-medium">Success Rate</p>
            </div>
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">1000+</h3>
              <p className="text-muted-foreground font-inter font-medium">Daily Opportunities</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-xl backdrop-blur-md transition-all duration-300 border border-border group shadow-sm hover:shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-all">IIT, NEET & Civils Focused</h4>
            <p className="text-base text-muted-foreground font-inter leading-relaxed text-pretty">Specialized opportunities in competitive exam preparation</p>
          </div>
          <div className="text-center p-8 bg-card rounded-xl backdrop-blur-md transition-all duration-300 border border-border group shadow-sm hover:shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-all">Verified Credentials</h4>
            <p className="text-base text-muted-foreground font-inter leading-relaxed text-pretty">All teachers undergo thorough verification</p>
          </div>
          <div className="text-center p-8 bg-card rounded-xl backdrop-blur-md transition-all duration-300 border border-border group shadow-sm hover:shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-all">Instant Matching</h4>
            <p className="text-base text-muted-foreground font-inter leading-relaxed text-pretty">AI-powered job matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};
