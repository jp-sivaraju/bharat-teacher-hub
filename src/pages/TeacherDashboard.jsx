import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, Settings, LogOut, Bell, Search, Star } from 'lucide-react';


const sampleProfiles = {
  teacher: {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+91 98765 43210',
    address: '123 Education Street, Academic District',
    city: 'Mumbai',
    userType: 'teacher',
    qualification: 'PhD in Mathematics',
    experience: '10+ years',
    specialization: 'Advanced Mathematics & Physics',
    subjects: ['Mathematics', 'Physics', 'Calculus', 'Algebra'],
    rating: 4.8,
    bio: 'Passionate mathematics educator with over 10 years of experience in teaching advanced mathematics and physics. Specialized in helping students prepare for competitive exams like JEE and NEET.',
    joinDate: 'January 2020'
  }
};

export const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState('teacher');
  const [isOwnProfile, setIsOwnProfile] = useState(true);

  const handleEdit = () => {
    console.log('Edit profile clicked');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-orange-500 text-white p-4 rounded-t-lg flex justify-between items-center mb-4 border-2 border-orange-600">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{sampleProfiles.teacher.name}</h1>
              <p className="text-sm text-orange-100">{sampleProfiles.teacher.experience} <span className="text-green-300">Verified</span> <span className="text-green-300">Teacher</span></p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-orange-500">
              Verify Profile
            </Button>
            <Button variant="outline" onClick={handleSubmit} size="sm" className="text-white border-white hover:bg-white hover:text-orange-500">

              Edit Profile
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-orange-500">
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="border-2 border-orange-200">
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-xl font-bold">45</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-200">
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">Active Classes</p>
              <p className="text-xl font-bold">8</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-200">
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">Monthly Earnings</p>
              <p className="text-xl font-bold text-green-500">₹25,000</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-200">
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm">Profile Views</p>
              <p className="text-xl font-bold">1250</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Profile Completion */}
          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-600 mb-2">68% Complete</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Personal Information</span><span className="text-orange-500">Required</span></li>
                <li className="flex justify-between"><span>Contact Details</span><span className="text-orange-500">Required</span></li>
                <li className="flex justify-between"><span>Educational Qualifications</span><span>Complete</span></li>
                <li className="flex justify-between"><span>Experience</span><span>Complete</span></li>
                <li className="flex justify-between"><span>Teaching Subjects</span><span>Complete</span></li>
                <li className="flex justify-between"><span>Certifications & Licenses</span><span>Complete</span></li>
                <li className="flex justify-between"><span>Resume</span><span>Complete</span></li>
                <li className="flex justify-between"><span>Profile Picture</span><span>Complete</span></li>
                <li className="flex justify-between"><span>Expectations</span><span>Complete</span></li>
              </ul>
            </CardContent>
          </Card>

          {/* Today's Classes */}
          <Card className="border-2 border-orange-200 col-span-2">
            <CardHeader>
              <CardTitle>Today's Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-2 bg-orange-50 rounded">
                  <p>Mathematics</p>
                  <p className="text-sm text-gray-600">Rahul Sharma - 10:00 AM</p>
                </div>
                <div className="p-2 bg-orange-50 rounded">
                  <p>Physics</p>
                  <p className="text-sm text-gray-600">Priya Patel - 2:00 PM</p>
                </div>
                <div className="p-2 bg-orange-50 rounded">
                  <p>Calculus</p>
                  <p className="text-sm text-gray-600">Amit Kumar - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Teaching Subjects */}
          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle>Teaching Subjects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {sampleProfiles.teacher.subjects.map((subject, index) => (
                  <li key={index} className="text-orange-500">{subject}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Briefcase className="w-4 h-4 mr-2" />
                Upload Resume
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Upload Certificate
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Set Salary Expectations
              </Button>
            </CardContent>
          </Card>

          {/* Profile Insights */}
          <Card className="border-2 border-orange-200 col-span-2">
            <CardHeader>
              <CardTitle>Profile Insights</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Profile Views</p>
                <p className="text-xl font-bold">1250</p>
              </div>
              <div>
                <p className="text-gray-600">Salary Expectation</p>
                <p className="text-xl font-bold text-green-500">₹50,000</p>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-600">
              <p>Complete your salary expectations</p>
              <p>Upload your latest certificates</p>
              <p>New job match available</p>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card className="border-2 border-orange-200 col-span-2">
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-2 bg-orange-50 rounded">
                  <p>Anjali Singh</p>
                  <p className="text-sm text-gray-600">"Excellent teaching method!"</p>
                  <div className="flex space-x-1 text-yellow-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <div className="p-2 bg-orange-50 rounded">
                  <p>Whiz Gupta</p>
                  <p className="text-sm text-gray-600">"Very patient and helpful!"</p>
                  <div className="flex space-x-1 text-yellow-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};