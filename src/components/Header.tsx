
import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type AuthType = 'login' | 'register' | 'teacher-register' | 'school-register' | 'college-register' | 'home-tuition-register';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <header className="w-full glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 modern-gradient rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-modern-gradient">
                  TeacherConnect
                </h1>
                <p className="text-sm text-gray-600 font-medium hidden sm:block">Education Excellence Platform</p>
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
                    className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm text-gray-700 hover:bg-white/60 hover:shadow-lg hover:text-blue-700 backdrop-blur-sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="relative">
                <Button
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  size="sm"
                  className="bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg border border-white/40 backdrop-blur-sm transition-all duration-300"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                {showLoginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-52 glass-effect rounded-xl shadow-2xl z-50 border border-white/20">
                    <div className="py-2">
                      <Link to="/teacher-register" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
                        Teacher Registration
                      </Link>
                      <Link to="/school-register" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
                        School Registration
                      </Link>
                      <Link to="/college-register" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
                        College Registration
                      </Link>
                      <Link to="/home-tuition-register" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
                        Home Tuition Registration
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <Button 
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  className="btn-modern"
                >
                  Sign In
                </Button>
                {showLoginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-xl shadow-2xl z-50 border border-white/20">
                    <div className="py-2">
                      <Link to="/teacher-login" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
                        Teacher Login
                      </Link>
                      <Link to="/school-login" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
                        School Login
                      </Link>
                      <Link to="/college-login" className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg mx-2 transition-all duration-200">
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
              className="lg:hidden bg-white/60 hover:bg-white/80 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/20">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 font-medium text-gray-700 hover:bg-white/40 backdrop-blur-sm"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="mt-4 pt-4 border-t border-white/20 flex space-x-3">
                <Button size="sm" className="flex-1 bg-white/60 text-gray-700 hover:bg-white/80 border border-white/40">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                <Button size="sm" className="flex-1 btn-modern">
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
