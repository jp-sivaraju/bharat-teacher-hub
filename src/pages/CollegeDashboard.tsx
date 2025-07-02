
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  BookOpen, 
  DollarSign,
  Edit,
  UserCheck,
  Clock,
  TrendingUp,
  MapPin,
  Phone,
  GraduationCap,
  Plus,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const collegeData = {
  name: 'Excellence Engineering College',
  type: 'Engineering & Technical Education',
  location: 'Delhi, India',
  contact: '+91 87654 32109',
  totalTeachers: 15,
  openPositions: 3,
  totalStudents: 280,
  monthlyRevenue: 450000,
  courses: ['JEE Main', 'JEE Advanced', 'NEET', 'Foundation'],
  openings: [
    { subject: 'Physics', course: 'JEE Advanced', urgency: 'High', applicants: 8 },
    { subject: 'Chemistry', course: 'NEET', urgency: 'Medium', applicants: 5 },
    { subject: 'Mathematics', course: 'Foundation', urgency: 'Low', applicants: 10 }
  ],
  recentApplications: [
    { name: 'Dr. Rajesh Kumar', subject: 'Physics', experience: '12+ years', status: 'reviewed' },
    { name: 'Prof. Neha Singh', subject: 'Chemistry', experience: '6 years', status: 'pending' }
  ]
};

export const CollegeDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Building className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{collegeData.name}</h1>
              <Badge variant="secondary" className="bg-white/20 mt-1">{collegeData.type}</Badge>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{collegeData.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{collegeData.contact}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link to="/post-job?type=college">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Post Job Opening
              </Button>
            </Link>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Link to="/">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
                ← Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-orange-200 shadow-orange">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-600">Total Teachers</p>
                  <p className="text-2xl font-bold text-orange-800">{collegeData.totalTeachers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-600">Open Positions</p>
                  <p className="text-2xl font-bold text-orange-800">{collegeData.openPositions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <p className="text-sm text-orange-600">Total Students</p>
                  <p className="text-2xl font-bold text-orange-800">{collegeData.totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-orange-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-orange-800">₹{collegeData.monthlyRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Courses Offered */}
          <Card className="border-2 border-orange-200 shadow-orange">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-gradient">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>Courses Offered</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {collegeData.courses.map((course, index) => (
                  <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open Positions */}
          <Card className="border-2 border-orange-200 shadow-orange">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-orange-gradient">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <span>Open Positions</span>
                </CardTitle>
                <Link to="/post-job?type=college">
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                    <Plus className="w-4 h-4 mr-1" />
                    Add New
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {collegeData.openings.map((opening, index) => (
                <div key={index} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-orange-900">{opening.subject}</p>
                    <Badge variant={opening.urgency === 'High' ? 'destructive' : opening.urgency === 'Medium' ? 'default' : 'secondary'}>
                      {opening.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-orange-700">{opening.course}</p>
                  <p className="text-sm text-orange-600">{opening.applicants} applicants</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications */}
        <Card className="border-2 border-orange-200 shadow-orange">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-gradient">
              <UserCheck className="w-5 h-5 text-orange-500" />
              <span>Recent Applications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {collegeData.recentApplications.map((application, index) => (
              <div key={index} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-orange-900">{application.name}</p>
                  <Badge variant={application.status === 'pending' ? 'default' : 'secondary'}>
                    {application.status}
                  </Badge>
                </div>
                <p className="text-sm text-orange-700">{application.subject}</p>
                <p className="text-sm text-orange-600">{application.experience}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
