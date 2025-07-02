
import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-3xl mb-8 p-8 md:p-12 text-white shadow-orange-lg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
        }}
      ></div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance text-glow">
                India's Premier
                <span className="block text-amber-200 font-display">Teaching Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 font-inter font-light leading-relaxed text-pretty">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-orange-50 leading-relaxed font-inter text-pretty">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity or hire exceptional educators.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 font-medium font-inter">CBSE Certified</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 font-medium font-inter">IIT Coaching</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 font-medium font-inter">Engineering Subjects</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 font-medium font-inter">State Boards</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/25 border border-white/20">
              <Users className="w-8 h-8 text-amber-200 mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold font-display">50,000+</h3>
              <p className="text-orange-100 font-inter font-medium">Certified Teachers</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/25 border border-white/20">
              <Award className="w-8 h-8 text-amber-200 mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold font-display">2,500+</h3>
              <p className="text-orange-100 font-inter font-medium">Partner Institutions</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/25 border border-white/20">
              <TrendingUp className="w-8 h-8 text-amber-200 mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold font-display">98%</h3>
              <p className="text-orange-100 font-inter font-medium">Success Rate</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/25 border border-white/20">
              <GraduationCap className="w-8 h-8 text-amber-200 mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold font-display">1000+</h3>
              <p className="text-orange-100 font-inter font-medium">Daily Opportunities</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/15 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20 group">
            <h4 className="font-display font-semibold text-lg mb-3 group-hover:text-glow transition-all">IIT & NEET and Civils Focused</h4>
            <p className="text-sm md:text-base text-orange-100 font-inter leading-relaxed text-pretty">Specialized opportunities in competitive exam preparation</p>
          </div>
          <div className="text-center p-6 bg-white/15 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20 group">
            <h4 className="font-display font-semibold text-lg mb-3 group-hover:text-glow transition-all">Verified Credentials</h4>
            <p className="text-sm md:text-base text-orange-100 font-inter leading-relaxed text-pretty">All teachers undergo thorough verification</p>
          </div>
          <div className="text-center p-6 bg-white/15 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all duration-300 border border-white/20 group">
            <h4 className="font-display font-semibold text-lg mb-3 group-hover:text-glow transition-all">Instant Matching</h4>
            <p className="text-sm md:text-base text-orange-100 font-inter leading-relaxed text-pretty">AI-powered job matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};
