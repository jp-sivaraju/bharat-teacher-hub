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
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const teacherData = {
  name: 'Dr. Sarah Johnson',
  rating: 4.8,
  subjects: ['Mathematics', 'Physics', 'Calculus', 'Algebra'],
  experience: '10+ years',
  totalStudents: 45,
  activeClasses: 8,
  monthlyEarnings: 25000,
  completedLessons: 320,
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
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{teacherData.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{teacherData.rating}</span>
                <Badge variant="secondary" className="bg-white/20">
                  {teacherData.experience}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
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
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold">{teacherData.totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Classes</p>
                  <p className="text-2xl font-bold">{teacherData.activeClasses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Earnings</p>
                  <p className="text-2xl font-bold">₹{teacherData.monthlyEarnings.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completed Lessons</p>
                  <p className="text-2xl font-bold">{teacherData.completedLessons}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Teaching Subjects */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>Teaching Subjects</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {teacherData.subjects.map((subject, index) => (
                  <Badge key={index} variant="outline" className="border-orange-300">
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>Today's Classes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {teacherData.upcomingClasses.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{class_.subject}</p>
                    <p className="text-sm text-gray-600">{class_.student}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{class_.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Reviews */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-green-500" />
              <span>Recent Reviews</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {teacherData.recentReviews.map((review, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{review.student}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">"{review.comment}"</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};