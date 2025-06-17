
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UserPlus, Upload, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    subjects: '',
    boards: '',
    languages: '',
    location: '',
    bio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration form submitted:', formData);
    toast({
      title: "Registration Successful! पंजीकरण सफल!",
      description: "Your profile has been created. We'll contact you soon with job opportunities.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          Teacher Registration
        </h1>
        <p className="text-2xl text-gray-600">शिक्षक पंजीकरण</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Join thousands of teachers who have found their dream jobs. Create your profile in minutes and start receiving job opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-6 text-white">
          <div className="flex items-center space-x-3">
            <UserPlus className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Create Your Teacher Profile</h2>
              <p className="text-orange-100">अपना शिक्षक प्रोफाइल बनाएं</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name पूरा नाम *</Label>
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
              <Label htmlFor="email">Email Address ईमेल पता *</Label>
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
              <Label htmlFor="phone">Phone Number फोन नंबर *</Label>
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
              <Label htmlFor="qualification">Highest Qualification उच्चतम योग्यता *</Label>
              <Select value={formData.qualification} onValueChange={(value) => handleInputChange('qualification', value)}>
                <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                  <SelectValue placeholder="Select your qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="b.ed">B.Ed</SelectItem>
                  <SelectItem value="m.ed">M.Ed</SelectItem>
                  <SelectItem value="b.sc">B.Sc</SelectItem>
                  <SelectItem value="m.sc">M.Sc</SelectItem>
                  <SelectItem value="ba">B.A</SelectItem>
                  <SelectItem value="ma">M.A</SelectItem>
                  <SelectItem value="phd">Ph.D</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Teaching Experience शिक्षण अनुभव *</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Preferred Location पसंदीदा स्थान *</Label>
              <Input 
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Delhi, Mumbai, Bangalore..."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="subjects">Subjects विषय *</Label>
              <Input 
                id="subjects"
                value={formData.subjects}
                onChange={(e) => handleInputChange('subjects', e.target.value)}
                placeholder="Mathematics, Physics, Chemistry..."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="boards">Boards Experienced बोर्ड अनुभव</Label>
              <Input 
                id="boards"
                value={formData.boards}
                onChange={(e) => handleInputChange('boards', e.target.value)}
                placeholder="CBSE, ICSE, State Board..."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="languages">Languages Spoken भाषाएं *</Label>
            <Input 
              id="languages"
              value={formData.languages}
              onChange={(e) => handleInputChange('languages', e.target.value)}
              placeholder="Hindi, English, Bengali..."
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">About Yourself अपने बारे में</Label>
            <Textarea 
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Tell us about your teaching philosophy, achievements, and what makes you a great teacher..."
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300 min-h-[100px]"
            />
          </div>

          <div className="border-2 border-dashed border-orange-300 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
            <Upload className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Resume & Documents</h3>
            <p className="text-gray-600 mb-4">रिज्यूमे और दस्तावेज अपलोड करें</p>
            <Button variant="outline" className="hover:bg-orange-50 hover:border-orange-300">
              Choose Files
            </Button>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-lg py-6 transition-all duration-300 transform hover:scale-105"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Register as Teacher
          </Button>
        </form>
      </div>
    </div>
  );
};
