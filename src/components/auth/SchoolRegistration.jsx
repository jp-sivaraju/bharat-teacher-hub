import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { School, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const SchoolRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPersonName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    registrationId: '',
    certificate: '',
    boardAffiliation: '',
    studentStrength: '',
    establishedYear: '',
    grades: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('School registration submitted:', formData);
    toast({
      title: "Registration Successful!",
      description: "Your school registration has been submitted. We'll contact you soon.",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-2 shadow-educational-lg">
      <CardHeader className="bg-gradient-to-r from-primary to-deep-blue text-white">
        <div className="flex items-center space-x-3">
          <School className="w-8 h-8" />
          <div>
            <CardTitle className="text-2xl">School Registration</CardTitle>
            <CardDescription className="text-brand-100">
              Register your school to find qualified teachers
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-deep-blue border-b border-border pb-2">School Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="schoolName">School Name *</Label>
                <Input 
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange('schoolName', e.target.value)}
                  placeholder="Enter school name"
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                <Input 
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                  placeholder="Principal/Administrator name"
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
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
                  placeholder="school@example.com"
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
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
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
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
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="boardAffiliation">Board Affiliation *</Label>
                <Select value={formData.boardAffiliation} onValueChange={(value) => handleInputChange('boardAffiliation', value)}>
                  <SelectTrigger className="border-2 hover:border-primary focus:border-primary transition-all duration-300">
                    <SelectValue placeholder="Select board" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state-board">State Board</SelectItem>
                    <SelectItem value="igcse">IGCSE</SelectItem>
                    <SelectItem value="ib">IB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationId">Registration ID *</Label>
                <Input 
                  id="registrationId"
                  value={formData.registrationId}
                  onChange={(e) => handleInputChange('registrationId', e.target.value)}
                  placeholder="School registration ID"
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificate">Certificate *</Label>
                <Input 
                  id="certificate"
                  value={formData.certificate}
                  onChange={(e) => handleInputChange('certificate', e.target.value)}
                  placeholder="Certificate details"
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="establishedYear">Established Year</Label>
                <Input 
                  id="establishedYear"
                  value={formData.establishedYear}
                  onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                  placeholder="Year established"
                  className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">School Address *</Label>
              <Textarea 
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter complete school address"
                className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="grades">Grades/Classes Offered *</Label>
              <Input 
                id="grades"
                value={formData.grades}
                onChange={(e) => handleInputChange('grades', e.target.value)}
                placeholder="e.g., Pre-K to 12th Grade"
                className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Teacher Requirements</Label>
              <Textarea 
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                placeholder="Tell us about the subjects and qualifications you're looking for in teachers"
                className="border-2 hover:border-primary focus:border-primary transition-all duration-300"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-deep-blue hover:from-brand-600 hover:to-deep-blue text-lg py-6 transition-all duration-300 shadow-educational"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Register School
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
