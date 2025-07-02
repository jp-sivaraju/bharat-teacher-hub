
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { School } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';

export const SchoolLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('School login attempted:', formData.email);
    toast({
      title: "Login Successful!",
      description: "Welcome back! Redirecting to your school dashboard.",
    });
    setTimeout(() => {
      navigate('/school-dashboard');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-warm-white via-soft-blue-50 to-warm-white-200 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-4">
            <School className="w-12 h-12 text-soft-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-blue-gradient">
            School Portal
          </h1>
          <p className="text-lg text-slate-gray-600">
            Sign in to access your school dashboard
          </p>
        </div>

        <Card className="border-2 border-soft-blue-200 hover:border-soft-blue-300 transition-all duration-300 shadow-blue">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 rounded-full flex items-center justify-center shadow-blue">
                <School className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-blue-gradient">
              School Login
            </CardTitle>
            <CardDescription className="text-slate-gray-600">Access your school dashboard and post job openings</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institution-email" className="text-slate-gray-700">Email Address</Label>
                <Input
                  id="institution-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-2 border-slate-gray-300 hover:border-soft-blue-400 focus:border-soft-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-password" className="text-slate-gray-700">Password</Label>
                <Input
                  id="institution-password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-2 border-slate-gray-300 hover:border-soft-blue-400 focus:border-soft-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 hover:from-soft-blue-600 hover:to-soft-blue-700 text-white shadow-blue transition-all duration-300"
              >
                Sign In as School
              </Button>
              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-soft-blue-600 hover:text-soft-blue-700 hover:underline block">
                  Forgot your password?
                </a>
                <Link to="/school-register" className="text-sm text-soft-blue-600 hover:text-soft-blue-700 hover:underline block">
                  Don't have an account? Register here
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/" className="text-soft-blue-600 hover:text-soft-blue-700 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
