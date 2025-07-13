
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { LoginSection } from './LoginSection';
import { RegistrationSection } from './RegistrationSection';
import { TeacherRegistration } from './auth/TeacherRegistration';
import { SchoolRegistration } from './auth/SchoolRegistration';
import { CollegeRegistration } from './auth/CollegeRegistration';
import { HomeTuitionRegistration } from './auth/HomeTuitionRegistration';

export const AuthModal = ({ isOpen, onClose, authType, onAuthTypeChange }) => {
  const getModalTitle = () => {
    switch (authType) {
      case 'login':
        return 'Sign In';
      case 'register':
        return 'Choose Registration Type';
      case 'teacher-register':
        return 'Teacher Registration';
      case 'school-register':
        return 'School Registration';
      case 'college-register':
        return 'College Registration';
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
        return <RegistrationSection onSelectType={(type) => onAuthTypeChange?.(type)} />;
      case 'teacher-register':
        return <TeacherRegistration />;
      case 'school-register':
        return <SchoolRegistration />;
      case 'college-register':
        return <CollegeRegistration />;
      case 'home-tuition-register':
        return <HomeTuitionRegistration />;
      default:
        return <LoginSection />;
    }
  };

  const showBackButton = authType !== 'login' && authType !== 'register';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="relative">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToMenu}
              className="absolute left-0 top-0 flex items-center gap-2 text-primary hover:text-primary/80 font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Menu
            </Button>
          )}
          <DialogTitle className="text-2xl text-foreground font-mono">
            {getModalTitle()}
          </DialogTitle>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};
