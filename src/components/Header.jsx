
import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'about', label: 'About', icon: BookOpen, action: () => scrollToSection('about') },
    { id: 'services', label: 'Services', icon: BookOpen, action: () => scrollToSection('services') },
    { id: 'testimonials', label: 'Testimonials', icon: BookOpen, action: () => scrollToSection('testimonials') },
  ];

  return (
    <>
      <header className="w-full bg-primary/10 backdrop-blur-md text-deep-blue sticky top-0 z-50 shadow-lg border-b-2 border-primary">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo/Brand - Enhanced mobile styling */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border-2 border-primary">
                <BookOpen className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-primary">
                  TeacherConnect
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 text-deep-blue hover:bg-primary hover:text-white font-medium hover:shadow-md group border border-transparent hover:border-primary"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
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
                  className="border-2 border-primary hover:border-primary hover:bg-primary hover:text-white text-primary font-medium transition-all duration-200 hover:shadow-md"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                {showRegisterDropdown && !isMobile && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border-2 border-primary rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to="/teacher-register" 
                        className="block px-4 py-3 text-sm text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        Teacher Registration
                      </Link>
                      <Link 
                        to="/school-register" 
                        className="block px-4 py-3 text-sm text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        School Registration
                      </Link>
                      <Link 
                        to="/college-register" 
                        className="block px-4 py-3 text-sm text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-4 border-transparent hover:border-primary"
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
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl font-medium transition-all duration-300 transform hover:scale-105 border-2 border-primary"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                {showLoginDropdown && !isMobile && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border-2 border-primary rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to="/teacher-login" 
                        className="block px-4 py-3 text-sm text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        Teacher Login
                      </Link>
                      <Link 
                        to="/school-login" 
                        className="block px-4 py-3 text-sm text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        School Login
                      </Link>
                      <Link 
                        to="/college-login" 
                        className="block px-4 py-3 text-sm text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-4 border-transparent hover:border-primary"
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
              className="md:lg:hidden text-primary hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:lg:hidden py-4 border-t-2 border-primary backdrop-blur-md bg-primary/5">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-deep-blue hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-transparent hover:border-primary"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm sm:text-base">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="mt-4 pt-4 border-t-2 border-primary space-y-3">
                <Link to="/teacher-register" className="block">
                  <Button size="sm" variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Teacher Register
                  </Button>
                </Link>
                <Link to="/school-register" className="block">
                  <Button size="sm" variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium">
                    <UserPlus className="w-4 h-4 mr-2" />
                    School Register
                  </Button>
                </Link>
                <Link to="/teacher-login" className="block">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white font-medium border-2 border-primary">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
