
import React from 'react';
import { GraduationCap, Users, BookOpen, Award, TrendingUp, Shield } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Teacher Placement',
      description: 'Connect with top schools and educational institutions across India',
      features: ['CBSE, ICSE, State Board positions', 'Full-time & Part-time opportunities', 'Competitive salary packages']
    },
    {
      icon: Users,
      title: 'Career Counseling',
      description: 'Get expert guidance on your teaching career path',
      features: ['Personalized career roadmap', 'Interview preparation', 'Skill development guidance']
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Enhance your teaching skills with our certified programs',
      features: ['Modern teaching methods', 'Digital classroom training', 'Certification courses']
    },
    {
      icon: Award,
      title: 'Skill Verification',
      description: 'Validate your teaching expertise with our assessment system',
      features: ['Subject proficiency tests', 'Teaching methodology evaluation', 'Digital badges & certificates']
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Advance your teaching career with leadership opportunities',
      features: ['Principal & HOD positions', 'Administrative roles', 'Academic coordinator jobs']
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: 'Find stable and secure teaching positions',
      features: ['Government school positions', 'Permanent placements', 'Pension & benefits']
    }
  ];

  return (
    <div id="services" className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We provide comprehensive services to help teachers find their dream jobs and advance their careers in the education sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
