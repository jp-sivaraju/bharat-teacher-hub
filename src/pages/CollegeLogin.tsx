import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';

export const CollegeLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('College login attempted:', formData.email);
    toast({
      title: "Login Successful!",
      description: "Welcome back! Redirecting to your college dashboard.",
    });
    setTimeout(() => {
      navigate('/college-dashboard');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-4">
            <Building className="w-12 h-12 text-indigo-500" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            College Portal
          </h1>
          <p className="text-lg text-gray-700">
            Sign in to access your college dashboard
          </p>
        </div>

        <Card className="border-2 hover:border-indigo-300 transition-all duration-300">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              College Login
            </CardTitle>
            <CardDescription>Access your college dashboard and manage faculty</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institution-email">Email Address</Label>
                <Input
                  id="institution-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-2 hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-password">Password</Label>
                <Input
                  id="institution-password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-2 hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Sign In as College
              </Button>
              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 hover:underline block">
                  Forgot your password?
                </a>
                <Link to="/college-register" className="text-sm text-purple-600 hover:text-purple-700 hover:underline block">
                  Don't have an account? Register here
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};