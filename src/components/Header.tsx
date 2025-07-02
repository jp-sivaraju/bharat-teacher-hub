
import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type AuthType = 'login' | 'register' | 'teacher-register' | 'school-register' | 'college-register';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

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
    <>
      <header className="w-full bg-warm-white shadow-blue-lg border-b-2 border-soft-blue-200 sticky top-0 z-50 backdrop-blur-md bg-warm-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 rounded-xl flex items-center justify-center shadow-blue">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-blue-gradient text-balance">
                  TeacherConnect
                </h1>
                <p className="text-sm text-slate-gray-600 font-medium hidden sm:block font-inter">Education Excellence Platform</p>
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
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="relative">
                <Button
                  onClick={() => {
                    setShowRegisterDropdown(!showRegisterDropdown);
                    setShowLoginDropdown(false);
                  }}
                  size="sm"
                  variant="outline"
                  className="border-soft-blue-300 hover:border-soft-blue-500 hover:bg-soft-blue-50 text-slate-gray-700 hover:text-soft-blue-700 font-medium font-inter"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                {showRegisterDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-warm-white border border-soft-blue-200 rounded-lg shadow-blue-lg z-50 backdrop-blur-md">
                    <div className="py-2">
                      <Link 
                        to="/teacher-register" 
                        className="block px-4 py-3 text-sm font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 transition-colors"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        Teacher Registration
                      </Link>
                      <Link 
                        to="/school-register" 
                        className="block px-4 py-3 text-sm font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 transition-colors"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        School Registration
                      </Link>
                      <Link 
                        to="/college-register" 
                        className="block px-4 py-3 text-sm font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 transition-colors"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        College Registration
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <Button 
                  onClick={() => {
                    setShowLoginDropdown(!showLoginDropdown);
                    setShowRegisterDropdown(false);
                  }}
                  className="bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 hover:from-soft-blue-600 hover:to-soft-blue-700 text-white shadow-blue font-semibold font-inter hover:scale-105 transition-all duration-300"
                >
                  Sign In
                </Button>
                {showLoginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-warm-white border border-soft-blue-200 rounded-lg shadow-blue-lg z-50 backdrop-blur-md">
                    <div className="py-2">
                      <Link 
                        to="/teacher-login" 
                        className="block px-4 py-3 text-sm font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 transition-colors"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        Teacher Login
                      </Link>
                      <Link 
                        to="/school-login" 
                        className="block px-4 py-3 text-sm font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 transition-colors"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        School Login
                      </Link>
                      <Link 
                        to="/college-login" 
                        className="block px-4 py-3 text-sm font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-50 hover:text-soft-blue-700 transition-colors"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        College Login
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-gray-700 hover:bg-soft-blue-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-soft-blue-200 backdrop-blur-md bg-warm-white/95">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 font-medium font-inter text-slate-gray-700 hover:bg-soft-blue-100 hover:text-soft-blue-700"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="mt-4 pt-4 border-t border-soft-blue-200 flex space-x-3">
                <Button size="sm" variant="outline" className="flex-1 border-soft-blue-300 text-slate-gray-700 hover:bg-soft-blue-50 font-medium font-inter">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 hover:from-soft-blue-600 hover:to-soft-blue-700 text-white font-semibold font-inter">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
