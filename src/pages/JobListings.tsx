
import React from 'react';
import { JobListings } from '@/components/JobListings';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';

export const JobListingsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Job Opportunities</h1>
              <p className="text-orange-100 mt-1">Find the perfect teaching position for you</p>
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

      <div className="max-w-7xl mx-auto p-6">
        <JobListings />
      </div>
    </div>
  );
};
