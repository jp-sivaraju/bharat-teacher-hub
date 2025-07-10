
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
    <div id="services" className="scroll-mt-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide comprehensive services to help teachers find their dream jobs and advance their careers in the education sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-foreground">{service.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
