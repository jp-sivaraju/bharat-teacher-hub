
import React from 'react';
import { CollegeRegistration } from '@/components/auth/CollegeRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CollegeRegister = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-warm-white via-soft-blue-50 to-warm-white-200">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4 border-soft-blue-300 hover:border-soft-blue-500 hover:bg-soft-blue-50 text-slate-gray-700">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <CollegeRegistration />
        </div>
      </div>
    </div>
  );
};
