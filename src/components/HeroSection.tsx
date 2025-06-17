
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 rounded-3xl mb-8 p-8 md:p-12 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                भारत का सबसे बड़ा
                <span className="block text-yellow-200">शिक्षक प्लेटफॉर्म</span>
              </h1>
              <p className="text-xl text-orange-100">
                India's Largest Teacher Platform
              </p>
            </div>
            
            <p className="text-lg text-orange-50 leading-relaxed">
              हजारों शिक्षा संस्थानों से जुड़ें और अपने करियर को नई ऊंचाइयों तक पहुंचाएं। 
              CBSE, ICSE, और राज्य बोर्ड के लिए अवसर खोजें।
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Find Teaching Jobs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300"
              >
                Register as Teacher
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <Users className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">50,000+</h3>
              <p className="text-orange-100">Registered Teachers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <Award className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">1,000+</h3>
              <p className="text-orange-100">Schools & Institutes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-orange-100">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-yellow-200 mb-3" />
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-orange-100">Daily Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
