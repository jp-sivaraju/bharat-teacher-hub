
import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, MessageCircle, UserPlus, Phone, BookOpen, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        w-72 bg-white shadow-2xl border-r-2 border-orange-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo/Brand */}
        <div className="p-6 border-b-2 border-orange-100 bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                TeacherConnect
              </h1>
              <p className="text-sm text-gray-600 font-medium">Education Excellence Platform</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 bg-gradient-to-b from-white to-orange-50/30">
          <ul className="space-y-3 px-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-4 px-6 py-4 rounded-xl
                      transition-all duration-300 transform hover:scale-105 font-medium
                      ${activeSection === item.id
                        ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-xl border-2 border-orange-200'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-blue-100 hover:text-orange-700 hover:shadow-lg border-2 border-transparent hover:border-orange-200'
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-base">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="p-6 border-t-2 border-orange-100 bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-100">
              <h4 className="font-bold text-orange-600 text-center mb-2">Quick Access</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => {
                    setActiveSection('registration');
                    setIsOpen(false);
                  }}
                  className="text-xs border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                >
                  Register
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => {
                    setActiveSection('login');
                    setIsOpen(false);
                  }}
                  className="text-xs border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                >
                  Login
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-4 rounded-xl hover:from-orange-200 hover:to-blue-200 transition-all duration-300 border-2 border-orange-200">
              <p className="text-sm text-gray-700 text-center font-bold">
                India's #1 Teaching Platform
              </p>
              <p className="text-xs text-gray-600 text-center mt-2">
                Connecting Educational Excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
