
import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 rounded-3xl mb-8 p-8 md:p-12 text-white">
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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                India's Premier
                <span className="block text-yellow-200">Teaching Platform</span>
              </h1>
              <p className="text-xl text-orange-100">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-orange-50 leading-relaxed">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity or hire exceptional educators.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">CBSE Certified</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">IIT Coaching</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Engineering Subjects</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">State Boards</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <Users className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">50,000+</h3>
              <p className="text-orange-100">Certified Teachers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <Award className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">2,500+</h3>
              <p className="text-orange-100">Partner Institutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <TrendingUp className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">98%</h3>
              <p className="text-orange-100">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <GraduationCap className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-orange-100">Daily Opportunities</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <h4 className="font-semibold mb-2">IIT & Engineering Focus</h4>
            <p className="text-sm text-orange-100">Specialized opportunities in technical education</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <h4 className="font-semibold mb-2">Verified Credentials</h4>
            <p className="text-sm text-orange-100">All teachers undergo thorough verification</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <h4 className="font-semibold mb-2">Instant Matching</h4>
            <p className="text-sm text-orange-100">AI-powered job matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};
