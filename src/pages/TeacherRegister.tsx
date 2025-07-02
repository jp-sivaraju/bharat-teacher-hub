import React from 'react';
import { TeacherRegistration } from '@/components/auth/TeacherRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const TeacherRegister = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <TeacherRegistration />
        </div>
      </div>
    </div>
  );
};