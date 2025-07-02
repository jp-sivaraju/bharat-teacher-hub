import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Upload, Edit } from 'lucide-react';

interface ProfileSection {
  id: string;
  title: string;
  completed: boolean;
  required: boolean;
}

const profileSections: ProfileSection[] = [
  { id: 'personal', title: 'Personal Information', completed: true, required: true },
  { id: 'contact', title: 'Contact Details', completed: true, required: true },
  { id: 'education', title: 'Educational Qualifications', completed: false, required: true },
  { id: 'experience', title: 'Work Experience', completed: false, required: true },
  { id: 'subjects', title: 'Teaching Subjects', completed: true, required: true },
  { id: 'certifications', title: 'Certifications & Licenses', completed: false, required: false },
  { id: 'resume', title: 'Resume Upload', completed: false, required: true },
  { id: 'profile-picture', title: 'Profile Picture', completed: false, required: false },
  { id: 'salary', title: 'Salary Expectations', completed: false, required: true },
];

export const TeacherProfileCompletion = () => {
  const completedRequired = profileSections.filter(s => s.required && s.completed).length;
  const totalRequired = profileSections.filter(s => s.required).length;
  const completionPercentage = Math.round((completedRequired / totalRequired) * 100);

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Profile Completion</span>
          <Badge variant={completionPercentage >= 80 ? "default" : "secondary"}>
            {completionPercentage}% Complete
          </Badge>
        </CardTitle>
        <Progress value={completionPercentage} className="mt-2" />
      </CardHeader>
      <CardContent className="space-y-3">
        {profileSections.map((section) => (
          <div key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {section.completed ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-orange-500" />
              )}
              <span className={section.completed ? "text-gray-900" : "text-gray-600"}>
                {section.title}
              </span>
              {section.required && (
                <Badge variant="outline" className="text-xs">Required</Badge>
              )}
            </div>
            {!section.completed && (
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4 mr-1" />
                Complete
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};