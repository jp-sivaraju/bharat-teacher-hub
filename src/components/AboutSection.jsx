
import React from 'react';
import { Target, Users, Award, TrendingUp, Heart, Shield } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Registered Teachers' },
    { icon: Award, number: '1,000+', label: 'Partner Schools' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate' },
    { icon: Heart, number: '24/7', label: 'Support' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To bridge the gap between talented teachers and quality educational institutions across India, ensuring every child has access to excellent education.'
    },
    {
      icon: Users,
      title: 'Our Vision',
      description: 'To become India\'s most trusted platform for teacher recruitment, empowering educators to find fulfilling careers and helping schools build strong academic teams.'
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Integrity, Excellence, Innovation, and Inclusivity. We believe in transparent processes, quality assurance, and supporting every teacher\'s professional growth.'
    }
  ];

  return (
    <div id="about" className="scroll-mt-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-mono">
          About TeacherConnect
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
          TeacherConnect is India's leading platform connecting passionate educators with premier educational institutions. 
          Since 2020, we've been transforming the way teachers find opportunities and schools discover talent.
        </p>
      </div>

      {/* Hero Story Section */}
      <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-card-foreground">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-mono">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-mono">
              <p>
                Founded by a team of experienced educators and technology professionals, TeacherConnect was born from the vision 
                to democratize access to quality teaching opportunities across India. We recognized that talented teachers often 
                struggled to find the right schools, while institutions faced challenges in identifying qualified educators.
              </p>
              <p>
                Our platform leverages cutting-edge technology with deep understanding of the Indian education system to create 
                meaningful connections that benefit teachers, schools, and ultimately, students across the nation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-border">
                  <Icon className="w-8 h-8 text-foreground mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground font-mono">{stat.number}</div>
                  <div className="text-muted-foreground text-sm font-mono">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-border p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-mono">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-mono">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Choose Us */}
      <div className="bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-mono">Why Teachers Choose Us</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Verified Schools', description: 'All partner institutions are thoroughly verified' },
            { title: 'Quick Placement', description: 'Average placement time of 2-3 weeks' },
            { title: 'Fair Salary', description: 'Competitive and transparent salary packages' },
            { title: 'Career Growth', description: 'Opportunities for advancement and skill development' }
          ].map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
              </div>
              <h4 className="font-bold text-foreground mb-2 font-mono">{feature.title}</h4>
              <p className="text-muted-foreground text-sm font-mono">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
