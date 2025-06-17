
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UserPlus, Upload, CheckCircle, GraduationCap } from 'lucide-react';
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
    bio: '',
    stateRegistrationId: '',
    teacherEmployeeId: '',
    aadharNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration form submitted:', formData);
    toast({
      title: "Registration Successful!",
      description: "Your teacher profile has been created. We'll contact you soon with job opportunities.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4 animate-slide-in-up">
        <div className="flex items-center justify-center mb-4">
          <GraduationCap className="w-12 h-12 text-orange-500 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent animate-scale-in">
          Teacher Registration Portal
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
          Join thousands of certified teachers who have found their dream jobs. Create your comprehensive profile and start receiving personalized job opportunities from top educational institutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden animate-scale-in" style={{animationDelay: '0.6s'}}>
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-6 text-white">
          <div className="flex items-center space-x-3">
            <UserPlus className="w-8 h-8 animate-pulse" />
            <div>
              <h2 className="text-2xl font-bold">Create Your Professional Teaching Profile</h2>
              <p className="text-orange-100">Complete all fields for better job matching</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Personal Information */}
          <div className="space-y-6 animate-slide-in-left" style={{animationDelay: '0.9s'}}>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
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
                <Label htmlFor="location">Preferred Location *</Label>
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
          </div>

          {/* Government IDs & Registration */}
          <div className="space-y-6 animate-slide-in-right" style={{animationDelay: '1.2s'}}>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Government Registration & IDs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="stateRegistrationId">State Registration ID</Label>
                <Input 
                  id="stateRegistrationId"
                  value={formData.stateRegistrationId}
                  onChange={(e) => handleInputChange('stateRegistrationId', e.target.value)}
                  placeholder="Enter State Registration ID"
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teacherEmployeeId">Teacher Employee ID</Label>
                <Input 
                  id="teacherEmployeeId"
                  value={formData.teacherEmployeeId}
                  onChange={(e) => handleInputChange('teacherEmployeeId', e.target.value)}
                  placeholder="Enter Teacher Employee ID"
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                <Input 
                  id="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                  placeholder="Enter 12-digit Aadhar Number"
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                  maxLength={12}
                  required
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-6 animate-slide-in-left" style={{animationDelay: '1.5s'}}>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Professional Qualifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="qualification">Highest Qualification *</Label>
                <Select value={formData.qualification} onValueChange={(value) => handleInputChange('qualification', value)}>
                  <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                    <SelectValue placeholder="Select your qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="b.ed">B.Ed</SelectItem>
                    <SelectItem value="m.ed">M.Ed</SelectItem>
                    <SelectItem value="b.sc">B.Sc</SelectItem>
                    <SelectItem value="m.sc">M.Sc</SelectItem>
                    <SelectItem value="b.tech">B.Tech</SelectItem>
                    <SelectItem value="m.tech">M.Tech</SelectItem>
                    <SelectItem value="ba">B.A</SelectItem>
                    <SelectItem value="ma">M.A</SelectItem>
                    <SelectItem value="phd">Ph.D</SelectItem>
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
                    <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Subject Expertise */}
          <div className="space-y-6 animate-slide-in-right" style={{animationDelay: '1.8s'}}>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Subject Expertise & Boards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="subjects">Subjects *</Label>
                <Input 
                  id="subjects"
                  value={formData.subjects}
                  onChange={(e) => handleInputChange('subjects', e.target.value)}
                  placeholder="Mathematics, Physics, Chemistry, Engineering, IIT-JEE..."
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="boards">Boards Experienced</Label>
                <Input 
                  id="boards"
                  value={formData.boards}
                  onChange={(e) => handleInputChange('boards', e.target.value)}
                  placeholder="CBSE, ICSE, State Board, IIT-JEE, NEET..."
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Languages Spoken *</Label>
              <Input 
                id="languages"
                value={formData.languages}
                onChange={(e) => handleInputChange('languages', e.target.value)}
                placeholder="English, Hindi, Bengali, Tamil..."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-6 animate-slide-in-up" style={{animationDelay: '2.1s'}}>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Professional Summary</h3>
            <div className="space-y-2">
              <Label htmlFor="bio">About Yourself</Label>
              <Textarea 
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about your teaching philosophy, achievements, specializations in engineering/IIT coaching, and what makes you an exceptional educator..."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300 min-h-[120px]"
              />
            </div>
          </div>

          {/* Document Upload */}
          <div className="border-2 border-dashed border-orange-300 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300 animate-pulse" style={{animationDelay: '2.4s'}}>
            <Upload className="w-12 h-12 text-orange-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Certificates & Documents</h3>
            <p className="text-gray-600 mb-4">Upload your degree certificates, teaching certifications, and experience letters</p>
            <Button variant="outline" className="hover:bg-orange-50 hover:border-orange-300 transform hover:scale-105 transition-all duration-300">
              Choose Files
            </Button>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-lg py-6 transition-all duration-300 transform hover:scale-105 animate-pulse"
            style={{animationDelay: '2.7s'}}
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Create Teacher Profile
          </Button>
        </form>
      </div>
    </div>
  );
};
