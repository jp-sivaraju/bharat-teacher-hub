
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, BookOpen, Building } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  subject: string;
  level: string;
  type: 'school' | 'college';
  instituteName: string;
  location: string;
  urgency: 'High' | 'Medium' | 'Low';
  applicants: number;
  description: string;
  requirements: string[];
  postedDate: string;
  experience: string;
}

interface JobCardProps {
  job: JobPosting;
  onViewDetails: (job: JobPosting) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onViewDetails }) => {
  return (
    <Card className="border-2 border-orange-200 shadow-orange hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-orange-900 text-lg mb-1">{job.title}</h3>
            <p className="text-orange-700 font-medium">{job.instituteName}</p>
          </div>
          <Badge variant={job.urgency === 'High' ? 'destructive' : job.urgency === 'Medium' ? 'default' : 'secondary'}>
            {job.urgency}
          </Badge>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-orange-600">
            <BookOpen className="w-4 h-4" />
            <span>{job.subject} - {job.level}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-orange-600">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-orange-600">
            <Users className="w-4 h-4" />
            <span>{job.applicants} applicants</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-orange-600">
            <Clock className="w-4 h-4" />
            <span>Posted {job.postedDate}</span>
          </div>
        </div>
        
        <p className="text-sm text-orange-700 mb-4 line-clamp-2">{job.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {job.type === 'school' ? (
              <Building className="w-4 h-4 text-orange-500" />
            ) : (
              <BookOpen className="w-4 h-4 text-orange-500" />
            )}
            <span className="text-sm text-orange-600 capitalize">{job.type}</span>
          </div>
          <Button 
            size="sm" 
            onClick={() => onViewDetails(job)}
            className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
