
import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden modern-card rounded-3xl mb-8 p-8 md:p-12 text-white">
      {/* Modern Background */}
      <div className="absolute inset-0 modern-gradient rounded-3xl"></div>
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
        }}
      ></div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-display-large text-white text-shadow-modern">
                India's Premier
                <span className="block text-yellow-200">Teaching Platform</span>
              </h1>
              <p className="text-headline-medium text-white/90 font-light">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-body-large text-white/80 leading-relaxed">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity or hire exceptional educators.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="glass-effect px-4 py-2 rounded-full text-white border border-white/20">CBSE Certified</span>
                <span className="glass-effect px-4 py-2 rounded-full text-white border border-white/20">IIT Coaching</span>
                <span className="glass-effect px-4 py-2 rounded-full text-white border border-white/20">Engineering Subjects</span>
                <span className="glass-effect px-4 py-2 rounded-full text-white border border-white/20">State Boards</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/20">
              <Users className="w-10 h-10 text-yellow-200 mb-4" />
              <h3 className="text-3xl font-bold text-white">50,000+</h3>
              <p className="text-white/80 text-body-small">Certified Teachers</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/20">
              <Award className="w-10 h-10 text-yellow-200 mb-4" />
              <h3 className="text-3xl font-bold text-white">2,500+</h3>
              <p className="text-white/80 text-body-small">Partner Institutions</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/20">
              <TrendingUp className="w-10 h-10 text-yellow-200 mb-4" />
              <h3 className="text-3xl font-bold text-white">98%</h3>
              <p className="text-white/80 text-body-small">Success Rate</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/20">
              <GraduationCap className="w-10 h-10 text-yellow-200 mb-4" />
              <h3 className="text-3xl font-bold text-white">1000+</h3>
              <p className="text-white/80 text-body-small">Daily Opportunities</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            <h4 className="font-semibold mb-3 text-white text-headline-medium">IIT & NEET and Civils Focused</h4>
            <p className="text-body-small text-white/80">Specialized opportunities in competitive exam preparation</p>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            <h4 className="font-semibold mb-3 text-white text-headline-medium">Verified Credentials</h4>
            <p className="text-body-small text-white/80">All teachers undergo thorough verification</p>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-500 border border-white/20">
            <h4 className="font-semibold mb-3 text-white text-headline-medium">Instant Matching</h4>
            <p className="text-body-small text-white/80">AI-powered job matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};
