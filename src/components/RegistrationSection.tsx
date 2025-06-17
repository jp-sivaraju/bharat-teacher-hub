
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Building, Home, GraduationCap, School, User, BookOpen, Users } from 'lucide-react';

interface RegistrationSectionProps {
  onSelectType?: (type: string) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onSelectType }) => {
  const registrationTypes = [
    {
      id: 'teacher-register',
      title: 'Teachers',
      description: 'Join our platform as a certified teacher and connect with institutions',
      icon: User,
    },
    {
      id: 'student-register',
      title: 'Students',
      description: 'Register as a student to find the best teachers and tutoring services',
      icon: BookOpen,
    },
    {
      id: 'parent-register',
      title: 'Parents',
      description: 'Find qualified teachers and tutoring services for your children',
      icon: Users,
    },
    {
      id: 'school-register',
      title: 'Schools',
      description: 'Register your school to find qualified teachers for various subjects',
      icon: School,
    },
    {
      id: 'institution-register',
      title: 'Institutions',
      description: 'Register your coaching center, college, or educational institution',
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
          <GraduationCap className="w-12 h-12 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          Registration Portal
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Choose your registration type to get started with our comprehensive education platform
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registrationTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card 
              key={type.id}
              onClick={() => onSelectType?.(type.id)}
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-orange-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
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
