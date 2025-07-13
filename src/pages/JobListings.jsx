
import React from 'react';
import { JobListings } from '@/components/JobListings';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';

export const JobListingsPage = () => {
  return (
    <div className="min-h-screen w-full bg-background font-inter">
      <div className="bg-gradient-to-r from-deep-blue via-deep-blue to-primary text-ivory p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-ivory">Job Opportunities</h1>
              <p className="text-ivory/80 mt-1">Find the perfect teaching position for you</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="secondary" className="bg-ivory/20 hover:bg-ivory/30 text-ivory border-ivory/30 shadow-educational">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <JobListings />
      </div>
    </div>
  );
};
