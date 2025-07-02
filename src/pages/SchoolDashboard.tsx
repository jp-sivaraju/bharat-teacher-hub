
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  School, 
  Users, 
  BookOpen, 
  DollarSign,
  Edit,
  UserCheck,
  Clock,
  TrendingUp,
  MapPin,
  Phone,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const schoolData = {
  name: 'Sunrise International School',
  location: 'Mumbai, Maharashtra',
  contact: '+91 98765 43210',
  totalTeachers: 25,
  openPositions: 8,
  totalStudents: 450,
  monthlyBudget: 120000,
  openings: [
    { subject: 'Mathematics', level: 'Secondary', urgency: 'High', applicants: 12 },
    { subject: 'Physics', level: 'Senior Secondary', urgency: 'Medium', applicants: 8 },
    { subject: 'English', level: 'Primary', urgency: 'Low', applicants: 15 }
  ],
  recentApplications: [
    { name: 'Dr. Sarah Johnson', subject: 'Mathematics', experience: '10+ years', status: 'pending' },
    { name: 'Prof. Amit Kumar', subject: 'Physics', experience: '8 years', status: 'reviewed' }
  ]
};

export const SchoolDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <School className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{schoolData.name}</h1>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{schoolData.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{schoolData.contact}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link to="/post-job?type=school">
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
                  <p className="text-2xl font-bold text-orange-800">{schoolData.totalTeachers}</p>
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
                  <p className="text-2xl font-bold text-orange-800">{schoolData.openPositions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <p className="text-sm text-orange-600">Total Students</p>
                  <p className="text-2xl font-bold text-orange-800">{schoolData.totalStudents}</p>
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
                  <p className="text-sm text-orange-600">Monthly Budget</p>
                  <p className="text-2xl font-bold text-orange-800">₹{schoolData.monthlyBudget.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Open Positions */}
          <Card className="border-2 border-orange-200 shadow-orange">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-orange-gradient">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>Open Positions</span>
                </CardTitle>
                <Link to="/post-job?type=school">
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                    <Plus className="w-4 h-4 mr-1" />
                    Add New
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {schoolData.openings.map((opening, index) => (
                <div key={index} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-orange-900">{opening.subject}</p>
                    <Badge variant={opening.urgency === 'High' ? 'destructive' : opening.urgency === 'Medium' ? 'default' : 'secondary'}>
                      {opening.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-orange-700">{opening.level}</p>
                  <p className="text-sm text-orange-600">{opening.applicants} applicants</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="border-2 border-orange-200 shadow-orange">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-gradient">
                <Users className="w-5 h-5 text-orange-500" />
                <span>Recent Applications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schoolData.recentApplications.map((application, index) => (
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
    </div>
  );
};
