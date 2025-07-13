
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
      <header className="w-full bg-background text-foreground sticky top-0 z-50 shadow-sm border-b border-border backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">TeacherConnect</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 text-foreground hover:bg-accent hover:text-primary font-medium"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Button
                  onClick={() => {
                    setShowRegisterDropdown(!showRegisterDropdown);
                    setShowLoginDropdown(false);
                  }}
                  size="sm"
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary font-medium"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                {showRegisterDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <Link 
                        to="/teacher-register" 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        Teacher Registration
                      </Link>
                      <Link 
                        to="/school-register" 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        onClick={() => setShowRegisterDropdown(false)}
                      >
                        School Registration
                      </Link>
                      <Link 
                        to="/college-register" 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg font-medium rounded-md transition-all duration-300"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                {showLoginDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <Link 
                        to="/teacher-login" 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        Teacher Login
                      </Link>
                      <Link 
                        to="/school-login" 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        onClick={() => setShowLoginDropdown(false)}
                      >
                        School Login
                      </Link>
                      <Link 
                        to="/college-login" 
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
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
              className="lg:hidden text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border backdrop-blur-md bg-background/90">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-4 py-2 rounded-md text-left text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="mt-4 pt-4 border-t border-border flex space-x-3">
                <Button size="sm" variant="outline" className="flex-1 border-border text-foreground hover:bg-accent hover:text-primary font-medium">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
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
