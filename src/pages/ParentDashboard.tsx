import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  DollarSign,
  Edit,
  User,
  Clock,
  TrendingUp,
  Star,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const parentData = {
  name: 'Mrs. Kavita Sharma',
  children: [
    {
      name: 'Rahul Sharma',
      class: 'Class 12',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      avgScore: 85,
      teachers: 3
    },
    {
      name: 'Priya Sharma',
      class: 'Class 10',
      subjects: ['Mathematics', 'Science', 'English'],
      avgScore: 92,
      teachers: 2
    }
  ],
  totalTeachers: 5,
  monthlyExpense: 15000,
  upcomingClasses: [
    { child: 'Rahul', subject: 'Mathematics', time: '10:00 AM', teacher: 'Dr. Sarah Johnson' },
    { child: 'Priya', subject: 'Science', time: '2:00 PM', teacher: 'Prof. Amit Kumar' },
    { child: 'Rahul', subject: 'Physics', time: '4:00 PM', teacher: 'Dr. Priya Patel' }
  ],
  recentUpdates: [
    { child: 'Rahul', message: 'Completed Math assignment with 95% score', type: 'success' },
    { child: 'Priya', message: 'Science test scheduled for tomorrow', type: 'info' },
    { child: 'Rahul', message: 'Physics homework pending submission', type: 'warning' }
  ]
};

export const ParentDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{parentData.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="bg-white/20">
                  Parent of {parentData.children.length} children
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
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Children</p>
                  <p className="text-2xl font-bold">{parentData.children.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Teachers</p>
                  <p className="text-2xl font-bold">{parentData.totalTeachers}</p>
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
                  <p className="text-sm text-gray-600">Monthly Expense</p>
                  <p className="text-2xl font-bold">₹{parentData.monthlyExpense.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Performance</p>
                  <p className="text-2xl font-bold">{Math.round(parentData.children.reduce((acc, child) => acc + child.avgScore, 0) / parentData.children.length)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Children Overview */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-purple-500" />
              <span>Children's Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {parentData.children.map((child, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{child.name}</h3>
                    <Badge variant="outline" className="border-purple-300">{child.class}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Average Score</p>
                    <p className="text-xl font-bold text-green-600">{child.avgScore}%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Subjects:</p>
                    <div className="flex flex-wrap gap-1">
                      {child.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="border-blue-300 text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teachers: <span className="font-medium">{child.teachers}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>Today's Classes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {parentData.upcomingClasses.map((class_, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium">{class_.child} - {class_.subject}</p>
                    <span className="text-sm font-medium text-blue-600">{class_.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">Teacher: {class_.teacher}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                <span>Recent Updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {parentData.recentUpdates.map((update, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {update.type === 'success' && <Star className="w-4 h-4 text-green-500" />}
                      {update.type === 'info' && <Calendar className="w-4 h-4 text-blue-500" />}
                      {update.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{update.child}</p>
                      <p className="text-sm text-gray-700">{update.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};