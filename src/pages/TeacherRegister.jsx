
import React from 'react';
import { TeacherRegistration } from '@/components/auth/TeacherRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TeacherRegister = () => {
  return (
    <div className="min-h-screen w-full bg-background font-inter">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4 border-border hover:bg-muted text-foreground shadow-educational">
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
export default TeacherRegister;
