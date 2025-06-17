
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UserPlus, Building, Home, GraduationCap, School } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const RegistrationSection = () => {
  const { toast } = useToast();
  const [registrationType, setRegistrationType] = useState<'school' | 'institution' | 'home-tuition' | null>(null);
  const [formData, setFormData] = useState({
    // Common fields
    contactPersonName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    requirements: '',
    
    // School specific
    schoolName: '',
    boardAffiliation: '',
    studentStrength: '',
    establishedYear: '',
    
    // Institution specific
    institutionName: '',
    institutionType: '',
    coursesOffered: '',
    facultyCount: '',
    
    // Home tuition specific
    studentName: '',
    studentClass: '',
    subjects: '',
    preferredTime: '',
    budgetRange: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration form submitted:', { type: registrationType, data: formData });
    toast({
      title: "Registration Successful!",
      description: `Your ${registrationType} registration has been submitted. We'll contact you soon.`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setRegistrationType(null);
    setFormData({
      contactPersonName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      requirements: '',
      schoolName: '',
      boardAffiliation: '',
      studentStrength: '',
      establishedYear: '',
      institutionName: '',
      institutionType: '',
      coursesOffered: '',
      facultyCount: '',
      studentName: '',
      studentClass: '',
      subjects: '',
      preferredTime: '',
      budgetRange: ''
    });
  };

  if (!registrationType) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Registration Portal
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose your registration type to get started with finding the perfect teachers for your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div 
            onClick={() => setRegistrationType('school')}
            className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <School className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Schools</h3>
            <p className="text-gray-600 mb-4">Register your school to find qualified teachers for various subjects and grades.</p>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
              Register School
            </Button>
          </div>

          <div 
            onClick={() => setRegistrationType('institution')}
            className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Building className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Institutions</h3>
            <p className="text-gray-600 mb-4">Register your coaching center, college, or educational institution.</p>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
              Register Institution
            </Button>
          </div>

          <div 
            onClick={() => setRegistrationType('home-tuition')}
            className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Home Tuitions</h3>
            <p className="text-gray-600 mb-4">Find qualified teachers for personalized home tuition services.</p>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
              Find Home Tutor
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getFormTitle = () => {
    switch (registrationType) {
      case 'school':
        return 'School Registration';
      case 'institution':
        return 'Institution Registration';
      case 'home-tuition':
        return 'Home Tuition Request';
      default:
        return 'Registration';
    }
  };

  const getFormIcon = () => {
    switch (registrationType) {
      case 'school':
        return <School className="w-8 h-8" />;
      case 'institution':
        return <Building className="w-8 h-8" />;
      case 'home-tuition':
        return <Home className="w-8 h-8" />;
      default:
        return <UserPlus className="w-8 h-8" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            {getFormTitle()}
          </h1>
        </div>
        <Button 
          variant="outline" 
          onClick={resetForm}
          className="hover:bg-orange-50"
        >
          Back to Options
        </Button>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-6 text-white">
          <div className="flex items-center space-x-3">
            {getFormIcon()}
            <div>
              <h2 className="text-2xl font-bold">{getFormTitle()}</h2>
              <p className="text-orange-100">Complete the form to get started</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Common Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                <Input 
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                  placeholder="Enter contact person's name"
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
          </div>

          {/* Specific Fields Based on Registration Type */}
          {registrationType === 'school' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">School Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input 
                    id="schoolName"
                    value={formData.schoolName}
                    onChange={(e) => handleInputChange('schoolName', e.target.value)}
                    placeholder="Enter school name"
                    className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="boardAffiliation">Board Affiliation *</Label>
                  <Select value={formData.boardAffiliation} onValueChange={(value) => handleInputChange('boardAffiliation', value)}>
                    <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
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
                  <Label htmlFor="studentStrength">Student Strength</Label>
                  <Input 
                    id="studentStrength"
                    value={formData.studentStrength}
                    onChange={(e) => handleInputChange('studentStrength', e.target.value)}
                    placeholder="Number of students"
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
            </div>
          )}

          {registrationType === 'institution' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Institution Details</h3>
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
                  <Label htmlFor="coursesOffered">Courses Offered</Label>
                  <Input 
                    id="coursesOffered"
                    value={formData.coursesOffered}
                    onChange={(e) => handleInputChange('coursesOffered', e.target.value)}
                    placeholder="IIT-JEE, NEET, Engineering, etc."
                    className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
                  />
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
              </div>
            </div>
          )}

          {registrationType === 'home-tuition' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Tuition Requirements</h3>
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
                  <Label htmlFor="studentClass">Class/Grade *</Label>
                  <Select value={formData.studentClass} onValueChange={(value) => handleInputChange('studentClass', value)}>
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
                  <Label htmlFor="subjects">Subjects Required *</Label>
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
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                    <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                      <SelectItem value="evening">Evening (6 PM - 10 PM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="budgetRange">Budget Range (per month)</Label>
                  <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                    <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                      <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                      <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                      <SelectItem value="20000+">₹20,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Requirements Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Additional Requirements</h3>
            <div className="space-y-2">
              <Label htmlFor="requirements">Specific Requirements</Label>
              <Textarea 
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                placeholder="Tell us about your specific teaching requirements, qualifications needed, salary expectations, etc."
                className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300 min-h-[120px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-lg py-6 transition-all duration-300 transform hover:scale-105"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Submit Registration
          </Button>
        </form>
      </div>
    </div>
  );
};
