
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LoginSection } from './LoginSection';
import { RegistrationSection } from './RegistrationSection';
import { TeacherRegistration } from './auth/TeacherRegistration';
import { StudentRegistration } from './auth/StudentRegistration';
import { ParentRegistration } from './auth/ParentRegistration';
import { SchoolRegistration } from './auth/SchoolRegistration';
import { InstitutionRegistration } from './auth/InstitutionRegistration';
import { HomeTuitionRegistration } from './auth/HomeTuitionRegistration';

type AuthType = 'login' | 'register' | 'teacher-register' | 'student-register' | 'parent-register' | 'school-register' | 'institution-register' | 'home-tuition-register';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  authType: AuthType;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, authType }) => {
  const getModalTitle = () => {
    switch (authType) {
      case 'login':
        return 'Sign In';
      case 'register':
        return 'Choose Registration Type';
      case 'teacher-register':
        return 'Teacher Registration';
      case 'student-register':
        return 'Student Registration';
      case 'parent-register':
        return 'Parent Registration';
      case 'school-register':
        return 'School Registration';
      case 'institution-register':
        return 'Institution Registration';
      case 'home-tuition-register':
        return 'Home Tuition Registration';
      default:
        return 'Authentication';
    }
  };

  const renderContent = () => {
    switch (authType) {
      case 'login':
        return <LoginSection />;
      case 'register':
        return <RegistrationSection />;
      case 'teacher-register':
        return <TeacherRegistration />;
      case 'student-register':
        return <StudentRegistration />;
      case 'parent-register':
        return <ParentRegistration />;
      case 'school-register':
        return <SchoolRegistration />;
      case 'institution-register':
        return <InstitutionRegistration />;
      case 'home-tuition-register':
        return <HomeTuitionRegistration />;
      default:
        return <LoginSection />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            {getModalTitle()}
          </DialogTitle>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};
