import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';

export const ParentLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Parent login attempted:', formData.email);
    toast({
      title: "Login Successful!",
      description: "Welcome back! Redirecting to your parent dashboard.",
    });
    setTimeout(() => {
      navigate('/parent-dashboard');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-12 h-12 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Parent Portal
          </h1>
          <p className="text-lg text-gray-700">
            Sign in to manage your child's education
          </p>
        </div>

        <Card className="border-2 hover:border-purple-300 transition-all duration-300">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Parent Login
            </CardTitle>
            <CardDescription>Manage your child's education and find tutors</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="parent-email">Email Address</Label>
                <Input
                  id="parent-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-2 hover:border-purple-300 focus:border-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parent-password">Password</Label>
                <Input
                  id="parent-password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-2 hover:border-purple-300 focus:border-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Sign In as Parent
              </Button>
              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline block">
                  Forgot your password?
                </a>
                <Link to="/parent-register" className="text-sm text-pink-600 hover:text-pink-700 hover:underline block">
                  Don't have an account? Register here
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/" className="text-purple-600 hover:text-purple-700 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};