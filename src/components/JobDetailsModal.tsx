
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, BookOpen, Building, DollarSign, Calendar, Award } from 'lucide-react';

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
  salary: string;
}

interface JobDetailsModalProps {
  job: JobPosting | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, isOpen, onClose }) => {
  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl text-orange-900 mb-2">{job.title}</DialogTitle>
              <DialogDescription className="text-orange-700 font-medium text-base">
                {job.instituteName}
              </DialogDescription>
            </div>
            <Badge variant={job.urgency === 'High' ? 'destructive' : job.urgency === 'Medium' ? 'default' : 'secondary'}>
              {job.urgency} Priority
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Overview */}
          <div className="grid grid-cols-2 gap-4">
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
              <Calendar className="w-4 h-4" />
              <span>Posted {job.postedDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-orange-600">
              <Award className="w-4 h-4" />
              <span>{job.experience} required</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-green-700 font-medium">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="font-semibold text-orange-900 mb-2 flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Job Description
            </h3>
            <p className="text-orange-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-semibold text-orange-900 mb-2">Requirements</h3>
            <ul className="space-y-1">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-2 text-orange-700">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4 border-t border-orange-200">
            <Button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
              Apply Now
            </Button>
            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
              Save Job
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
