
import React from 'react';
import { TeacherRegistration } from '@/components/auth/TeacherRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const TeacherRegister = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full bg-background font-inter">
      <div className="p-3 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button 
                variant="outline" 
                className="mb-4 border-border hover:bg-muted text-foreground shadow-educational w-full sm:w-auto"
              >
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
