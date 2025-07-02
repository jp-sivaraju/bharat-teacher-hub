import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Target,
  Edit,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const studentData = {
  name: 'Rahul Sharma',
  currentClass: 'Class 12',
  targetExams: 'JEE Main, JEE Advanced',
  subjects: ['Mathematics', 'Physics', 'Chemistry'],
  totalTeachers: 3,
  completedLessons: 45,
  upcomingLessons: 5,
  avgScore: 85,
  upcomingClasses: [
    { subject: 'Mathematics', time: '10:00 AM', teacher: 'Dr. Sarah Johnson', topic: 'Calculus' },
    { subject: 'Physics', time: '2:00 PM', teacher: 'Prof. Amit Kumar', topic: 'Thermodynamics' },
    { subject: 'Chemistry', time: '4:00 PM', teacher: 'Dr. Priya Patel', topic: 'Organic Chemistry' }
  ],
  recentProgress: [
    { subject: 'Mathematics', score: 92, improvement: '+5%' },
    { subject: 'Physics', score: 78, improvement: '+12%' },
    { subject: 'Chemistry', score: 85, improvement: '+3%' }
  ],
  assignments: [
    { subject: 'Mathematics', topic: 'Integration Problems', dueDate: 'Today', status: 'pending' },
    { subject: 'Physics', topic: 'Wave Motion', dueDate: 'Tomorrow', status: 'completed' }
  ]
};

export const StudentDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{studentData.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="bg-white/20">
                  {studentData.currentClass}
                </Badge>
                <Badge variant="secondary" className="bg-white/20">
                  Target: {studentData.targetExams}
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teachers</p>
                  <p className="text-2xl font-bold">{studentData.totalTeachers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completed Lessons</p>
                  <p className="text-2xl font-bold">{studentData.completedLessons}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Upcoming Lessons</p>
                  <p className="text-2xl font-bold">{studentData.upcomingLessons}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold">{studentData.avgScore}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Study Subjects */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                <span>Study Subjects</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {studentData.subjects.map((subject, index) => (
                  <Badge key={index} variant="outline" className="border-blue-300">
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
                <Clock className="w-5 h-5 text-green-500" />
                <span>Today's Classes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {studentData.upcomingClasses.map((class_, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium">{class_.subject}</p>
                    <span className="text-sm font-medium text-blue-600">{class_.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{class_.teacher}</p>
                  <p className="text-sm text-gray-500">Topic: {class_.topic}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Progress */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <span>Recent Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {studentData.recentProgress.map((progress, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{progress.subject}</p>
                    <p className="text-sm text-gray-600">Score: {progress.score}%</p>
                  </div>
                  <span className="text-sm font-medium text-green-600">{progress.improvement}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-500" />
                <span>Assignments</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {studentData.assignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{assignment.topic}</p>
                    <p className="text-sm text-gray-600">{assignment.subject}</p>
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                  <div className="flex items-center">
                    {assignment.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                    )}
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