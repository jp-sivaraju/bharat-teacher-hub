
import React from 'react';
import { JobListings } from '@/components/JobListings';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const JobListingsPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full bg-background font-inter">
      <div className="bg-gradient-to-r from-deep-blue via-deep-blue to-primary text-ivory p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-ivory">Job Opportunities</h1>
                <p className="text-ivory/80 mt-1 text-sm sm:text-base">Find the perfect teaching position for you</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="secondary" className="bg-ivory/20 hover:bg-ivory/30 text-ivory border-ivory/30 shadow-educational w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-3 sm:p-6">
        <JobListings />
      </div>
    </div>
  );
};
