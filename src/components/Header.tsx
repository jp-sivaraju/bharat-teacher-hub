
import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, MessageCircle, UserPlus, Phone, BookOpen, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: BookOpen },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'testimonials', label: 'Testimonials', icon: MessageCircle },
    { id: 'login', label: 'Login', icon: LogIn },
    { id: 'registration', label: 'Register', icon: UserPlus },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  return (
    <header className="w-full bg-white shadow-xl border-b-2 border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Content */}
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                TeacherConnect
              </h1>
              <p className="text-sm text-gray-600 font-medium hidden sm:block">Education Excellence Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg
                    transition-all duration-300 font-medium text-sm
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-blue-100 hover:text-orange-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setActiveSection('registration')}
              className="border-orange-200 hover:border-orange-400 hover:bg-orange-50"
            >
              Register
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setActiveSection('login')}
              className="border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-orange-100">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
                      transition-all duration-300 font-medium
                      ${activeSection === item.id
                        ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-blue-100 hover:text-orange-700'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Mobile Quick Actions */}
            <div className="mt-4 pt-4 border-t border-orange-100 flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setActiveSection('registration');
                  setIsMenuOpen(false);
                }}
                className="flex-1 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
              >
                Register
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setActiveSection('login');
                  setIsMenuOpen(false);
                }}
                className="flex-1 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
