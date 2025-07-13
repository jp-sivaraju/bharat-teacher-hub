
import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

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
      <header className="w-full bg-white/95 backdrop-blur-md text-gray-800 sticky top-0 z-50 shadow-lg border-b border-purple-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand - Using Purple and Orange gradient */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 bg-clip-text text-transparent">
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
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium hover:shadow-md group"
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
                  className="border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:shadow-md"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                {showRegisterDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-purple-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to="/teacher-register" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        Teacher Registration
                      </Link>
                      <Link 
                        to="/school-register" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        School Registration
                      </Link>
                      <Link 
                        to="/college-register" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
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
                  className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 hover:from-orange-600 hover:via-orange-500 hover:to-orange-700 text-white shadow-lg hover:shadow-xl font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                {showLoginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-purple-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to="/teacher-login" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        Teacher Login
                      </Link>
                      <Link 
                        to="/school-login" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        School Login
                      </Link>
                      <Link 
                        to="/college-login" 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 border-l-2 border-transparent hover:border-purple-500"
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
              className="lg:hidden text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-purple-200 backdrop-blur-md bg-white/90">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="mt-4 pt-4 border-t border-purple-200 flex space-x-3">
                <Button size="sm" variant="outline" className="flex-1 border-purple-300 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium">
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
