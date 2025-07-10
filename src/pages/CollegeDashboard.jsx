import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Plus, Settings, LogOut, Bell, Search, TrendingUp } from 'lucide-react';

export const CollegeDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Updated Header */}
        <div className="bg-orange-400 text-white p-4 rounded-t-lg flex justify-between items-center mb-6 shadow-lg border-2 border-orange-800">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-orange-200" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Excellence College of Engineering</h1>
              <p className="text-sm text-orange-100">Established 2008 • AICTE, UGC • Delhi, India</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-orange-700">
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-orange-700">
                <LogOut className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* College Overview */}
        <Card className="border-2 border-orange-200 shadow-md mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-800">College Overview</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Director:</strong> Dr. Anil Patel</div>
            <div><strong>Address:</strong> 456 Academic Road, Delhi, India 110001</div>
            <div><strong>Contact:</strong> +91 87654 32109</div>
            <div><strong>Email:</strong> info@excellencecollege.edu.in</div>
            <div><strong>Website:</strong> <a href="https://excellencecollege.edu.in" className="text-orange-600 hover:underline">excellencecollege.edu.in</a></div>
            <div><strong>Total Faculty:</strong> 50</div>
            <div><strong>Open Positions:</strong> 6</div>
            <div><strong>Total Students:</strong> 3000</div>
            <div><strong>Student-Faculty Ratio:</strong> 60:1</div>
            <div><strong>Achievements:</strong> Best Research Institution 2024, Excellence in Innovation</div>
            <div><strong>Facilities:</strong> Smart Classrooms, Research Labs, Library, Auditorium</div>
          </CardContent>
        </Card>

        {/* Job Openings and Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Open Positions */}
          <Card className="border-2 border-orange-200 shadow-md">
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold text-orange-800">Open Positions</CardTitle>
              <Link to="/post-job">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Post Faculty Position
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {Array.from({ length: 6 }).some(() => true) ? (
                  [
                    { title: 'Assistant Professor - Computer Science', applications: 12, status: 'Active', salary: '₹50,000 - ₹70,000' },
                    { title: 'Associate Professor - Physics', applications: 18, status: 'Under Review', salary: '₹60,000 - ₹80,000' },
                  ].map((job, index) => (
                    <li key={index} className="p-3 bg-orange-50 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <p className="font-medium text-orange-800">{job.title}</p>
                        <p className="text-sm text-gray-600">Applications: {job.applications} | Salary: {job.salary}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex space-x-2">
                        <Badge variant={job.status === 'Under Review' ? 'secondary' : 'default'}>{job.status}</Badge>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-600">No open positions currently.</p>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="border-2 border-orange-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-orange-800">Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { title: 'Assistant Professor - Computer Science', urgency: 'High', status: 'Pending', applications: 12 },
                  { title: 'Associate Professor - Physics', urgency: 'Medium', status: 'Reviewed', applications: 8 },
                ].map((job, index) => (
                  <li key={index} className="p-3 bg-orange-50 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <p className="font-medium text-orange-800">{job.title}</p>
                      <p className="text-sm text-gray-600">Urgency: {job.urgency} | Applications: {job.applications}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge variant={job.status === 'Reviewed' ? 'default' : 'secondary'}>{job.status}</Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};