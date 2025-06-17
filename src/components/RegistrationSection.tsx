import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Building, Home, GraduationCap, School, User, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type RegistrationType = 'school' | 'institution' | 'home-tuition' | 'teacher' | 'student' | null;

export const RegistrationSection = () => {
  const { toast } = useToast();
  const [registrationType, setRegistrationType] = useState<RegistrationType>(null);
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
    budgetRange: '',
    
    // Teacher specific
    fullName: '',
    qualification: '',
    experience: '',
    specialization: '',
    teachingExperience: '',
    
    // Student specific
    parentName: '',
    studentAge: '',
    currentClass: '',
    previousBoard: '',
    targetExams: ''
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
      budgetRange: '',
      fullName: '',
      qualification: '',
      experience: '',
      specialization: '',
      teachingExperience: '',
      parentName: '',
      studentAge: '',
      currentClass: '',
      previousBoard: '',
      targetExams: ''
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
            Choose your registration type to get started with our comprehensive education platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            onClick={() => setRegistrationType('teacher')}
            className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-orange-300"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Teachers</CardTitle>
              <CardDescription>
                Join our platform as a certified teacher and connect with institutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                Register as Teacher
              </Button>
            </CardContent>
          </Card>

          <Card 
            onClick={() => setRegistrationType('student')}
            className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-orange-300"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Students</CardTitle>
              <CardDescription>
                Register as a student to find the best teachers and tutoring services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                Register as Student
              </Button>
            </CardContent>
          </Card>

          <Card 
            onClick={() => setRegistrationType('school')}
            className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-orange-300"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                  <School className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Schools</CardTitle>
              <CardDescription>
                Register your school to find qualified teachers for various subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                Register School
              </Button>
            </CardContent>
          </Card>

          <Card 
            onClick={() => setRegistrationType('institution')}
            className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-orange-300"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Institutions</CardTitle>
              <CardDescription>
                Register your coaching center, college, or educational institution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                Register Institution
              </Button>
            </CardContent>
          </Card>

          <Card 
            onClick={() => setRegistrationType('home-tuition')}
            className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-orange-300"
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Home Tuitions</CardTitle>
              <CardDescription>
                Find qualified teachers for personalized home tuition services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                Find Home Tutor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getFormTitle = () => {
    switch (registrationType) {
      case 'teacher':
        return 'Teacher Registration';
      case 'student':
        return 'Student Registration';
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
      case 'teacher':
        return <User className="w-8 h-8" />;
      case 'student':
        return <BookOpen className="w-8 h-8" />;
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
          className="hover:bg-orange-50 border-2"
        >
          Back to Options
        </Button>
      </div>

      <Card className="max-w-4xl mx-auto border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
          <div className="flex items-center space-x-3">
            {getFormIcon()}
            <div>
              <CardTitle className="text-2xl">{getFormTitle()}</CardTitle>
              <CardDescription className="text-orange-100">
                Complete the form to get started
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Common Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactPersonName">
                    {registrationType === 'teacher' ? 'Full Name' : 
                     registrationType === 'student' ? 'Parent/Guardian Name' : 'Contact Person Name'} *
                  </Label>
                  <Input 
                    id="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                    placeholder={`Enter ${registrationType === 'teacher' ? 'your full name' : 
                                         registrationType === 'student' ? 'parent/guardian name' : 'contact person name'}`}
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

            {/* Teacher specific fields */}
            {registrationType === 'teacher' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Professional Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="space-y-2 md:col-span-2">
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
                </div>
              </div>
            )}

            {/* Student specific fields */}
            {registrationType === 'student' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Student Details</h3>
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
              </div>
            )}

            {/* Keep existing school, institution, and home-tuition specific fields */}
            {registrationType === 'school' && (
              // ... keep existing code (school details section)
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
                  placeholder="Tell us about your specific requirements..."
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
        </CardContent>
      </Card>
    </div>
  );
};
