import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-300 via-orange-500 to-red-800 rounded-3xl mb-12 p-10 md:p-16 text-white shadow-2xl">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ChatGPT Image Jul 9, 2025, 01_29_25 PM.png')"
        }}
      ></div>

      <div className="scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="font-display font-extrabold text-white md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance drop-shadow-lg">
                India's Premier
                <span className="block text-orange-300 font-display">Teaching Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-00 font-inter font-light leading-relaxed text-pretty">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white leading-relaxed font-inter text-pretty">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity or hire exceptional educators.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-orange-300 text-red-900 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 font-semibold font-inter shadow-sm">CBSE Certified</span>
                <span className="bg-orange-300 text-red-900 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 font-semibold font-inter shadow-sm">IIT Coaching</span>
                <span className="bg-orange-300 text-red-900 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 font-semibold font-inter shadow-sm">Engineering Subjects</span>          
                <span className="bg-orange-300 text-red-900 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 font-semibold font-inter shadow-sm">State Boards</span> 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-orange-100/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-orange-30 border border-white/30 shadow-md">
              <Users className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-red-900">50,000+</h3>
              <p className="text-orange-800 font-inter font-medium">Certified Teachers</p>
            </div>
            <div className="bg-orange-100/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-orange-30 border border-white/30 shadow-md">
              <Award className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-red-900">2,500+</h3>
              <p className="text-orange-800 font-inter font-medium">Partner Institutions</p>
            </div>
            <div className="bg-orange-100/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-orange-30 border border-white/30 shadow-md">
              <TrendingUp className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-red-900">98%</h3>
              <p className="text-orange-800 font-inter font-medium">Success Rate</p>
            </div>
            <div className="bg-orange-100/50 backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-orange-30 border border-white/30 shadow-md">
              <GraduationCap className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-red-900">1000+</h3>
              <p className="text-orange-800 font-inter font-medium">Daily Opportunities</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-orange-100/50 rounded-xl backdrop-blur-md transition-all duration-300 border border-white/30 group shadow-md">

            <h4 className="font-display font-semibold text-lg mb-3 text-red-900 group-hover:text-red-700 transition-all">IIT, NEET & Civils Focused</h4>
            <p className="text-base text-orange-800 font-inter leading-relaxed text-pretty">Specialized opportunities in competitive exam preparation</p>
          </div>
          <div className="text-center p-8 bg-orange-100/50 rounded-xl backdrop-blur-md transition-all duration-300 border border-white/30 group shadow-md">
            <h4 className="font-display font-semibold text-lg mb-3 text-red-900 group-hover:text-red-700 transition-all">Verified Credentials</h4>
            <p className="text-base text-orange-800 font-inter leading-relaxed text-pretty">All teachers undergo thorough verification</p>
          </div>
          <div className="text-center p-8 bg-orange-100/50 rounded-xl backdrop-blur-md transition-all duration-300 border border-white/30 group shadow-md">
            <h4 className="font-display font-semibold text-lg mb-3 text-red-900 group-hover:text-red-700 transition-all">Instant Matching</h4>
            <p className="text-base text-orange-800 font-inter leading-relaxed text-pretty">AI-powered job matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};