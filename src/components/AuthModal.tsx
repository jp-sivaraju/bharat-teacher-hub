
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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
  onAuthTypeChange?: (type: AuthType) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, authType, onAuthTypeChange }) => {
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

  const handleBackToMenu = () => {
    onAuthTypeChange?.('register');
  };

  const renderContent = () => {
    switch (authType) {
      case 'login':
        return <LoginSection />;
      case 'register':
        return <RegistrationSection onSelectType={(type) => onAuthTypeChange?.(type as AuthType)} />;
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

  const showBackButton = authType !== 'login' && authType !== 'register';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToMenu}
              className="absolute left-0 top-0 flex items-center gap-2 text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Menu
            </Button>
          )}
          <DialogTitle className="text-2xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            {getModalTitle()}
          </DialogTitle>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};
