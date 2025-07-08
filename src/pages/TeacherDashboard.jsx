
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  Clock, 
  Star,
  Edit,
  MessageSquare,
  Users,
  TrendingUp,
  Award,
  Shield,
  Bell,
  Eye,
  Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TeacherProfileCompletion } from '@/components/TeacherProfileCompletion';
import { VerificationBadge } from '@/components/VerificationBadge';

const teacherData = {
  name: 'Dr. Sarah Johnson',
  rating: 4.8,
  subjects: ['Mathematics', 'Physics', 'Calculus', 'Algebra'],
  experience: '10+ years',
  totalStudents: 45,
  activeClasses: 8,
  monthlyEarnings: 25000,
  completedLessons: 320,
  profileViews: 1250,
  verificationStatus: 'verified',
  salaryExpectation: '₹35,000 - ₹50,000',
  notifications: [
    { id: 1, message: 'Complete your salary expectations', type: 'warning' },
    { id: 2, message: 'Upload your latest certificates', type: 'info' },
    { id: 3, message: 'New job match available!', type: 'success' }
  ],
  upcomingClasses: [
    { subject: 'Mathematics', time: '10:00 AM', student: 'Rahul Sharma' },
    { subject: 'Physics', time: '2:00 PM', student: 'Priya Patel' },
    { subject: 'Calculus', time: '4:00 PM', student: 'Amit Kumar' }
  ],
  recentReviews: [
    { student: 'Anjali Singh', rating: 5, comment: 'Excellent teaching method!' },
    { student: 'Vikram Gupta', rating: 5, comment: 'Very patient and helpful.' }
  ]
};

export const TeacherDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6 shadow-orange-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{teacherData.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>{teacherData.rating}</span>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {teacherData.experience}
                </Badge>
                <VerificationBadge status={teacherData.verificationStatus} size="sm" />
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link to="/verification-plans">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Verify Profile
              </Button>
            </Link>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Link to="/">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                ← Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 border-orange-200 shadow-orange hover:shadow-orange-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-700">Total Students</p>
                  <p className="text-2xl font-bold text-orange-900">{teacherData.totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange hover:shadow-orange-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-700">Active Classes</p>
                  <p className="text-2xl font-bold text-orange-900">{teacherData.activeClasses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange hover:shadow-orange-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-700">Monthly Earnings</p>
                  <p className="text-2xl font-bold text-orange-900">₹{teacherData.monthlyEarnings.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 shadow-orange hover:shadow-orange-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-orange-700">Profile Views</p>
                  <p className="text-2xl font-bold text-orange-900">{teacherData.profileViews}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <TeacherProfileCompletion />
            
            {/* Notifications */}
            <Card className="border-2 border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-orange-800">
                  <Bell className="w-5 h-5 text-orange-500" />
                  <span>Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {teacherData.notifications.map((notification) => (
                  <div key={notification.id} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <p className="text-sm text-orange-800">{notification.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card className="border-2 border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-orange-800">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>Today's Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {teacherData.upcomingClasses.map((class_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <div>
                      <p className="font-medium text-orange-900">{class_.subject}</p>
                      <p className="text-sm text-orange-700">{class_.student}</p>
                    </div>
                    <span className="text-sm font-medium text-orange-600">{class_.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Profile Insights */}
            <Card className="border-2 border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-orange-800">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <span>Profile Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-700">Profile Views</span>
                  <span className="font-medium text-orange-900">{teacherData.profileViews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-700">Salary Expectation</span>
                  <span className="font-medium text-orange-900">{teacherData.salaryExpectation}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Teaching Subjects */}
            <Card className="border-2 border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-orange-800">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>Teaching Subjects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {teacherData.subjects.map((subject, index) => (
                    <Badge key={index} variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="text-orange-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Resume
                </Button>
                <Button variant="outline" className="w-full justify-start border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Certificates
                </Button>
                <Button variant="outline" className="w-full justify-start border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400">
                  <Edit className="w-4 h-4 mr-2" />
                  Update Salary Expectations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Reviews */}
        <Card className="border-2 border-orange-200 shadow-orange">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-800">
              <MessageSquare className="w-5 h-5 text-orange-500" />
              <span>Recent Reviews</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {teacherData.recentReviews.map((review, index) => (
              <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-orange-900">{review.student}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-orange-800">"{review.comment}"</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
