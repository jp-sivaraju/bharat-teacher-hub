
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Plus, ArrowLeft, MapPin, DollarSign, Calendar, Users } from 'lucide-react';

export const PostJob = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Post a Job</h1>
              <p className="text-orange-100 mt-1">Find the perfect teacher for your institution</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g., Mathematics Teacher" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Mathematics, Physics" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="level">Education Level</Label>
                <Input id="level" placeholder="e.g., High School, College" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input id="location" className="pl-10" placeholder="City, State" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input id="salary" className="pl-10" placeholder="e.g., ₹25,000 - ₹40,000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Required Experience</Label>
                <Input id="experience" placeholder="e.g., 2-5 years" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea 
                id="description" 
                rows={6}
                placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea 
                id="requirements" 
                rows={4}
                placeholder="List the qualifications, skills, and experience required..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level</Label>
                <select id="urgency" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Application Deadline</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input id="deadline" type="date" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Job Preview</h3>
              <Card className="border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-orange-900 text-lg mb-1">Mathematics Teacher</h3>
                      <p className="text-orange-700 font-medium">Your Institution Name</p>
                    </div>
                    <Badge variant="default">Medium</Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-orange-600">
                      <MapPin className="w-4 h-4" />
                      <span>Mumbai, Maharashtra</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-orange-600">
                      <DollarSign className="w-4 h-4" />
                      <span>₹25,000 - ₹40,000</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-orange-600">
                      <Calendar className="w-4 h-4" />
                      <span>Posted today</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-orange-700 mb-4">
                    We are looking for an experienced Mathematics teacher to join our team...
                  </p>
                  
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex space-x-4 pt-6">
              <Button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                Post Job
              </Button>
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
