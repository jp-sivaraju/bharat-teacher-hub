import React from 'react';
import { StudentRegistration } from '@/components/auth/StudentRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const StudentRegister = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <StudentRegistration />
        </div>
      </div>
    </div>
  );
};