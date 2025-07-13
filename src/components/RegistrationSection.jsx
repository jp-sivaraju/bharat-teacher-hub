
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Building, Home, GraduationCap, School, User } from 'lucide-react';

export const RegistrationSection = ({ onSelectType }) => {
  const registrationTypes = [
    {
      id: 'teacher-register',
      title: 'Teachers',
      description: 'Join our platform as a certified teacher and find job opportunities',
      icon: User,
    },
    {
      id: 'school-register',
      title: 'Schools',
      description: 'Register your school to find qualified teachers for various subjects',
      icon: School,
    },
    {
      id: 'college-register',
      title: 'Colleges',
      description: 'Register your college to find qualified faculty members',
      icon: Building,
    },
    {
      id: 'home-tuition-register',
      title: 'Home Tuitions',
      description: 'Find qualified teachers for personalized home tuition services',
      icon: Home,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center mb-4">
          <GraduationCap className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground font-mono">
          Registration Portal
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-mono">
          Choose your registration type to get started with our comprehensive education platform
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {registrationTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card 
              key={type.id}
              onClick={() => onSelectType?.(type.id)}
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-primary bg-card"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground font-mono">{type.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-mono">{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register as {type.title.slice(0, -1)}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
