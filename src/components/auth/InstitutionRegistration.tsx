
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const InstitutionRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPersonName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    institutionType: '',
    coursesOffered: '',
    facultyCount: '',
    establishedYear: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Institution registration submitted:', formData);
    toast({
      title: "Registration Successful!",
      description: "Your institution registration has been submitted. We'll contact you soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-2 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="flex items-center space-x-3">
          <Building className="w-8 h-8" />
          <div>
            <CardTitle className="text-2xl">Institution Registration</CardTitle>
            <CardDescription className="text-orange-100">
              Register your coaching center, college, or educational institution
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Institution Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="institutionName">Institution Name *</Label>
                <Input 
                  id="institutionName"
                  value={formData.institutionName}
                  onChange={(e) => handleInputChange('institutionName', e.target.value)}
                  placeholder="Enter institution name"
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                <Input 
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                  placeholder="Director/Administrator name"
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
                  placeholder="institution@example.com"
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
                <Label htmlFor="institutionType">Institution Type *</Label>
                <Select value={formData.institutionType} onValueChange={(value) => handleInputChange('institutionType', value)}>
                  <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coaching-center">Coaching Center</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="training-institute">Training Institute</SelectItem>
                    <SelectItem value="skill-development">Skill Development Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="facultyCount">Current Faculty Count</Label>
                <Input 
                  id="facultyCount"
                  value={formData.facultyCount}
                  onChange={(e) => handleInputChange('facultyCount', e.target.value)}
                  placeholder="Number of faculty members"
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="establishedYear">Established Year</Label>
                <Input 
                  id="establishedYear"
                  value={formData.establishedYear}
                  onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                  placeholder="Year established"
                  className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Institution Address *</Label>
              <Textarea 
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter complete institution address"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coursesOffered">Courses Offered</Label>
              <Input 
                id="coursesOffered"
                value={formData.coursesOffered}
                onChange={(e) => handleInputChange('coursesOffered', e.target.value)}
                placeholder="IIT-JEE, NEET, Engineering, MBA, etc."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Faculty Requirements</Label>
              <Textarea 
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                placeholder="Tell us about the faculty positions and qualifications you're looking for"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-lg py-6 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Register Institution
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
