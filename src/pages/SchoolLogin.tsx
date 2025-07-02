
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { School, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { VerificationBadge } from '@/components/VerificationBadge';

export const SchoolLogin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [verificationFilter, setVerificationFilter] = useState('all');

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
    <div className="min-h-screen w-full bg-modern-mesh flex items-center justify-center p-6">
      <div className="min-h-screen w-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 modern-gradient rounded-2xl flex items-center justify-center shadow-xl">
                <School className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-display-medium text-modern-gradient text-shadow-modern">
              School Portal
            </h1>
            <p className="text-body-large text-gray-700">
              Sign in to manage your school's teacher requirements
            </p>
          </div>

          {/* Verification Filter */}
          <div className="modern-card">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-lg text-gray-800">Filter by Verification Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Select value={verificationFilter} onValueChange={setVerificationFilter}>
                <SelectTrigger className="input-modern">
                  <SelectValue placeholder="Select verification status" />
                </SelectTrigger>
                <SelectContent className="glass-effect border border-white/20">
                  <SelectItem value="all">All Schools</SelectItem>
                  <SelectItem value="verified">
                    <div className="flex items-center space-x-2">
                      <span>Verified Schools</span>
                      <VerificationBadge status="verified" size="sm" />
                    </div>
                  </SelectItem>
                  <SelectItem value="non-verified">
                    <div className="flex items-center space-x-2">
                      <span>Non-Verified Schools</span>
                      <VerificationBadge status="not-verified" size="sm" />
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </div>

          <div className="modern-card">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 modern-gradient rounded-2xl flex items-center justify-center shadow-xl">
                  <School className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-headline-large text-modern-gradient">
                School Login
              </CardTitle>
              <CardDescription className="text-body-medium">Manage your school's teacher requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="school-email" className="text-body-medium font-semibold">Email Address</Label>
                  <Input
                    id="school-email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="input-modern"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school-password" className="text-body-medium font-semibold">Password</Label>
                  <Input
                    id="school-password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="input-modern"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-modern"
                >
                  Sign In as School
                </Button>
                <div className="text-center space-y-3">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline block transition-colors duration-200">
                    Forgot your password?
                  </a>
                  <Link to="/school-register" className="text-sm text-purple-600 hover:text-purple-700 hover:underline block transition-colors duration-200">
                    Don't have an account? Register here
                  </Link>
                </div>
              </form>
            </CardContent>
          </div>

          <div className="text-center">
            <Link to="/" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
