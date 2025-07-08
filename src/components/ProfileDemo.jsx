
import React, { useState } from 'react';
import { ProfileView } from './ProfileView';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
  },
  student: {
    id: '2',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 87654 32109',
    address: '456 Student Colony, Learning Area',
    city: 'Delhi',
    userType: 'student',
    age: 17,
    currentClass: 'Class 12',
    targetExams: 'JEE Main, JEE Advanced',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    bio: 'Aspiring engineer preparing for JEE entrance exams. Looking for experienced teachers to help improve my problem-solving skills in mathematics and physics.',
    joinDate: 'March 2023'
  }
};

export const ProfileDemo = () => {
  const [selectedProfile, setSelectedProfile] = useState('teacher');
  const [isOwnProfile, setIsOwnProfile] = useState(true);

  const handleEdit = () => {
    console.log('Edit profile clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Profile View Demo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-4">
              <Button
                variant={selectedProfile === 'teacher' ? 'default' : 'outline'}
                onClick={() => setSelectedProfile('teacher')}
              >
                Teacher Profile
              </Button>
              <Button
                variant={selectedProfile === 'student' ? 'default' : 'outline'}
                onClick={() => setSelectedProfile('student')}
              >
                Student Profile
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isOwnProfile}
                  onChange={(e) => setIsOwnProfile(e.target.checked)}
                  className="rounded border-orange-300"
                />
                <span>Show as own profile (enables edit button)</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <ProfileView
          profile={sampleProfiles[selectedProfile]}
          isOwnProfile={isOwnProfile}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};
