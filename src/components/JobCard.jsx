
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, BookOpen, Building } from 'lucide-react';

export const JobCard = ({ job, onViewDetails }) => {
  return (
    <Card className="border-2 border-border shadow-educational hover:shadow-educational-lg transition-all duration-300 bg-card">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-lg mb-1">{job.title}</h3>
            <p className="text-deep-blue font-medium">{job.instituteName}</p>
          </div>
          <Badge variant={job.urgency === 'High' ? 'destructive' : job.urgency === 'Medium' ? 'default' : 'secondary'}>
            {job.urgency}
          </Badge>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-charcoal">
            <BookOpen className="w-4 h-4 text-emerald" />
            <span>{job.subject} - {job.level}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-charcoal">
            <MapPin className="w-4 h-4 text-emerald" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-charcoal">
            <Users className="w-4 h-4 text-emerald" />
            <span>{job.applicants} applicants</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-charcoal">
            <Clock className="w-4 h-4 text-emerald" />
            <span>Posted {job.postedDate}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {job.type === 'school' ? (
              <Building className="w-4 h-4 text-emerald" />
            ) : (
              <BookOpen className="w-4 h-4 text-emerald" />
            )}
            <span className="text-sm text-charcoal capitalize">{job.type}</span>
          </div>
          <Button 
            size="sm" 
            onClick={() => onViewDetails(job)}
            className="bg-gradient-to-r from-primary via-brand-500 to-brand-600 hover:from-primary/90 hover:via-brand-500/90 hover:to-brand-600/90 text-primary-foreground shadow-educational"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
