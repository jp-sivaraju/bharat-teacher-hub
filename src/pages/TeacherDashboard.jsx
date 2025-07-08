
import React from 'react';
import { TeacherProfileCompletion } from '@/components/TeacherProfileCompletion';
import { VerificationBadge } from '@/components/VerificationBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { User, Briefcase, Settings, LogOut, Bell, Search, Star } from 'lucide-react';

export const TeacherDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
              <p className="text-orange-100 mt-1">Welcome back, Teacher!</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Link to="/">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TeacherProfileCompletion />
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Job Applications</span>
                  <Button size="sm" variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Find More Jobs
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Mathematics Teacher - Delhi Public School</h3>
                      <p className="text-sm text-gray-600">Applied 2 days ago</p>
                    </div>
                    <Badge variant="secondary">Under Review</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Physics Teacher - St. Mary's School</h3>
                      <p className="text-sm text-gray-600">Applied 1 week ago</p>
                    </div>
                    <Badge variant="default">Interview Scheduled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Profile Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Verification Status</span>
                    <VerificationBadge status="pending" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Profile Views</span>
                    <Badge variant="outline">142 this month</Badge>
                  </div>
                  <Button className="w-full" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/jobs">
                  <Button className="w-full justify-start" variant="outline">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Browse Jobs
                  </Button>
                </Link>
                <Link to="/verification-plans">
                  <Button className="w-full justify-start" variant="outline">
                    <Star className="w-4 h-4 mr-2" />
                    Get Verified
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
