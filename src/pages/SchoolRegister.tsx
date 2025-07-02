
import React from 'react';
import { SchoolRegistration } from '@/components/auth/SchoolRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const SchoolRegister = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4 border-orange-300 hover:border-orange-500 hover:bg-orange-50 text-orange-700">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <SchoolRegistration />
        </div>
      </div>
    </div>
  );
};
