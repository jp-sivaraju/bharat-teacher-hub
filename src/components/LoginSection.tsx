
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School, Building, Home, User, BookOpen, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const LoginSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    console.log('Login attempted:', { userType, email: formData.email });
    toast({
      title: "Login Successful!",
      description: `Welcome back! You've been logged in as ${userType}.`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const LoginForm = ({ userType, icon: Icon, title, description }: {
    userType: string;
    icon: React.ElementType;
    title: string;
    description: string;
  }) => (
    <Card className="border-2 hover:border-orange-300 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => handleSubmit(e, userType)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`${userType}-email`}>Email Address</Label>
            <Input
              id={`${userType}-email`}
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${userType}-password`}>Password</Label>
            <Input
              id={`${userType}-password`}
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 transition-all duration-300"
          >
            Sign In
          </Button>
          <div className="text-center">
            <a href="#" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-12 h-12 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Sign in to your account to access our comprehensive teaching platform
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="teachers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-orange-50">
            <TabsTrigger value="teachers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              Teachers
            </TabsTrigger>
            <TabsTrigger value="schools" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              Schools
            </TabsTrigger>
            <TabsTrigger value="colleges" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              Colleges
            </TabsTrigger>
            <TabsTrigger value="home-tuitions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              Home Tuitions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="teachers">
            <LoginForm
              userType="teacher"
              icon={User}
              title="Teacher Login"
              description="Access your teaching profile and job opportunities"
            />
          </TabsContent>

          <TabsContent value="schools">
            <LoginForm
              userType="school"
              icon={School}
              title="School Login"
              description="Manage your school's teacher requirements"
            />
          </TabsContent>

          <TabsContent value="colleges">
            <LoginForm
              userType="college"
              icon={Building}
              title="College Login"
              description="Access your college dashboard and manage faculty"
            />
          </TabsContent>

          <TabsContent value="home-tuitions">
            <LoginForm
              userType="home-tuition"
              icon={Home}
              title="Home Tuition Login"
              description="Find and manage home tutoring services"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
