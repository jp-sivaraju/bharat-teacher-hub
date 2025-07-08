
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const TeacherRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    qualification: '',
    experience: '',
    specialization: '',
    teachingExperience: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Teacher registration submitted:', formData);
    toast({
      title: "Registration Successful!",
      description: "Your teacher registration has been submitted. We'll contact you soon.",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-2 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="flex items-center space-x-3">
          <User className="w-8 h-8" />
          <div>
            <CardTitle className="text-2xl">Teacher Registration</CardTitle>
            <CardDescription className="text-orange-100">
              Join our platform as a certified teacher
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input 
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input 
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Enter city"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualification">Highest Qualification *</Label>
              <Select value={formData.qualification} onValueChange={(value) => handleInputChange('qualification', value)}>
                <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                  <SelectValue placeholder="Select qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="b.tech">B.Tech</SelectItem>
                  <SelectItem value="m.tech">M.Tech</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="msc">M.Sc</SelectItem>
                  <SelectItem value="bsc">B.Sc</SelectItem>
                  <SelectItem value="bed">B.Ed</SelectItem>
                  <SelectItem value="med">M.Ed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Teaching Experience *</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Full Address *</Label>
            <Textarea 
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter complete address"
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialization">Subject Specialization *</Label>
            <Input 
              id="specialization"
              value={formData.specialization}
              onChange={(e) => handleInputChange('specialization', e.target.value)}
              placeholder="Mathematics, Physics, Chemistry, Engineering, etc."
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Additional Information</Label>
            <Textarea 
              id="requirements"
              value={formData.requirements}
              onChange={(e) => handleInputChange('requirements', e.target.value)}
              placeholder="Tell us about your teaching approach, achievements, etc."
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-lg py-6 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Register as Teacher
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
