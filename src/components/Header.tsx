
import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'about', label: 'About Us', icon: BookOpen, action: () => scrollToSection('about') },
    { id: 'services', label: 'Services', icon: BookOpen, action: () => scrollToSection('services') },
    { id: 'testimonials', label: 'Testimonials', icon: BookOpen, action: () => scrollToSection('testimonials') },
  ];

  return (
    <header className="w-full bg-white shadow-xl border-b-2 border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  onClick={item.action}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-blue-100 hover:text-orange-700"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              size="sm"
              variant="outline"
              className="border-orange-200 hover:border-orange-400 hover:bg-orange-50"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Register
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            >
              <LogIn className="w-4 h-4 mr-2" />
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
                    onClick={item.action}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-blue-100 hover:text-orange-700"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="mt-4 pt-4 border-t border-orange-100 flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Register
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
