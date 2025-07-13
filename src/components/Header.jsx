
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
      <header className="w-full bg-card/95 backdrop-blur-md text-foreground sticky top-0 z-50 shadow-educational border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand - Using Saffron gradient */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-educational">
                <BookOpen className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-brand-600 to-deep-blue bg-clip-text text-transparent">
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
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 text-foreground hover:bg-emerald-light hover:text-emerald font-medium hover:shadow-educational group"
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
                  className="border-2 border-emerald/30 hover:border-emerald hover:bg-emerald-light text-foreground hover:text-emerald font-medium transition-all duration-200 hover:shadow-educational"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                {showRegisterDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-educational-lg z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to="/teacher-register" 
                        className="block px-4 py-3 text-sm text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200 border-l-2 border-transparent hover:border-emerald"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        Teacher Registration
                      </Link>
                      <Link 
                        to="/school-register" 
                        className="block px-4 py-3 text-sm text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200 border-l-2 border-transparent hover:border-emerald"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        School Registration
                      </Link>
                      <Link 
                        to="/college-register" 
                        className="block px-4 py-3 text-sm text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200 border-l-2 border-transparent hover:border-emerald"
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
                  className="bg-gradient-to-r from-primary via-brand-500 to-brand-600 hover:from-primary/90 hover:via-brand-500/90 hover:to-brand-600/90 text-primary-foreground shadow-educational hover:shadow-educational-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                {showLoginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-educational-lg z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to="/teacher-login" 
                        className="block px-4 py-3 text-sm text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200 border-l-2 border-transparent hover:border-emerald"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        Teacher Login
                      </Link>
                      <Link 
                        to="/school-login" 
                        className="block px-4 py-3 text-sm text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200 border-l-2 border-transparent hover:border-emerald"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        School Login
                      </Link>
                      <Link 
                        to="/college-login" 
                        className="block px-4 py-3 text-sm text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200 border-l-2 border-transparent hover:border-emerald"
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
              className="lg:hidden text-foreground hover:bg-emerald-light hover:text-emerald"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/50 backdrop-blur-md bg-card/90">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-foreground hover:bg-emerald-light hover:text-emerald transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="mt-4 pt-4 border-t border-border/50 flex space-x-3">
                <Button size="sm" variant="outline" className="flex-1 border-emerald/30 text-foreground hover:bg-emerald-light hover:text-emerald font-medium">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-brand-600 text-primary-foreground font-medium">
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
