import React from 'react';
import { ParentRegistration } from '@/components/auth/ParentRegistration';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const ParentRegister = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <ParentRegistration />
        </div>
      </div>
    </div>
  );
};