
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { VerificationBadge } from '@/components/VerificationBadge';

export const CollegeLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [verificationFilter, setVerificationFilter] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('College login attempted:', formData.email);
    toast({
      title: "Login Successful!",
      description: "Welcome back! Redirecting to home page to view teachers.",
    });
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-4">
            <Building className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-orange-gradient">
            College Portal
          </h1>
          <p className="text-lg text-orange-800">
            Sign in to access your college dashboard
          </p>
        </div>

        {/* Verification Filter */}
        <Card className="border-2 border-orange-200 shadow-orange">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-orange-600" />
              <CardTitle className="text-lg text-orange-800">Filter by Verification Status</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Select value={verificationFilter} onValueChange={setVerificationFilter}>
              <SelectTrigger className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500 transition-all duration-300">
                <SelectValue placeholder="Select verification status" />
              </SelectTrigger>
              <SelectContent className="bg-white border-orange-200">
                <SelectItem value="all">All Colleges</SelectItem>
                <SelectItem value="verified">
                  <div className="flex items-center space-x-2">
                    <span>Verified Colleges</span>
                    <VerificationBadge status="verified" size="sm" />
                  </div>
                </SelectItem>
                <SelectItem value="non-verified">
                  <div className="flex items-center space-x-2">
                    <span>Non-Verified Colleges</span>
                    <VerificationBadge status="not-verified" size="sm" />
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-orange">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-orange">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-orange-gradient">
              College Login
            </CardTitle>
            <CardDescription className="text-orange-700">Access your college dashboard and manage faculty</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institution-email" className="text-orange-800">Email Address</Label>
                <Input
                  id="institution-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-password" className="text-orange-800">Password</Label>
                <Input
                  id="institution-password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500 transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-orange transition-all duration-300"
              >
                Sign In as College
              </Button>
              <div className="text-center space-y-2">
                <a href="#" className="text-sm text-orange-600 hover:text-orange-700 hover:underline block">
                  Forgot your password?
                </a>
                <Link to="/college-register" className="text-sm text-orange-600 hover:text-orange-700 hover:underline block">
                  Don't have an account? Register here
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
