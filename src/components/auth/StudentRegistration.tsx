
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const StudentRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    studentAge: '',
    currentClass: '',
    targetExams: '',
    subjects: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student registration submitted:', formData);
    toast({
      title: "Registration Successful!",
      description: "Your student registration has been submitted. We'll contact you soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-2 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-8 h-8" />
          <div>
            <CardTitle className="text-2xl">Student Registration</CardTitle>
            <CardDescription className="text-orange-100">
              Register to find the best teachers and tutoring services
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name *</Label>
              <Input 
                id="studentName"
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                placeholder="Enter student's name"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentName">Parent/Guardian Name *</Label>
              <Input 
                id="parentName"
                value={formData.parentName}
                onChange={(e) => handleInputChange('parentName', e.target.value)}
                placeholder="Enter parent/guardian name"
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
                placeholder="contact@example.com"
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
              <Label htmlFor="studentAge">Student Age *</Label>
              <Input 
                id="studentAge"
                value={formData.studentAge}
                onChange={(e) => handleInputChange('studentAge', e.target.value)}
                placeholder="Enter age"
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentClass">Current Class/Grade *</Label>
              <Select value={formData.currentClass} onValueChange={(value) => handleInputChange('currentClass', value)}>
                <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">Class 1-5</SelectItem>
                  <SelectItem value="6-8">Class 6-8</SelectItem>
                  <SelectItem value="9-10">Class 9-10</SelectItem>
                  <SelectItem value="11-12">Class 11-12</SelectItem>
                  <SelectItem value="graduation">Graduation</SelectItem>
                  <SelectItem value="post-graduation">Post Graduation</SelectItem>
                </SelectContent>
              </Select>
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
              <Label htmlFor="targetExams">Target Exams</Label>
              <Input 
                id="targetExams"
                value={formData.targetExams}
                onChange={(e) => handleInputChange('targetExams', e.target.value)}
                placeholder="JEE, NEET, CBSE, etc."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              />
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
            <Label htmlFor="subjects">Subjects of Interest *</Label>
            <Input 
              id="subjects"
              value={formData.subjects}
              onChange={(e) => handleInputChange('subjects', e.target.value)}
              placeholder="Mathematics, Physics, Chemistry, etc."
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Additional Requirements</Label>
            <Textarea 
              id="requirements"
              value={formData.requirements}
              onChange={(e) => handleInputChange('requirements', e.target.value)}
              placeholder="Tell us about specific learning needs, preferences, etc."
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-lg py-6 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Register as Student
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
