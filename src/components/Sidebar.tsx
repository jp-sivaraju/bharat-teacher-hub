
import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, MessageCircle, UserPlus, Phone, BookOpen } from 'lucide-react';
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
    { id: 'registration', label: 'Registration', icon: UserPlus },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        w-64 bg-white shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo/Brand */}
        <div className="p-6 border-b border-orange-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                TeacherConnect
              </h1>
              <p className="text-sm text-gray-500">शिक्षक संपर्क</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
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
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl
                      transition-all duration-300 transform hover:scale-105
                      ${activeSection === item.id
                        ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:text-orange-600'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Info */}
        <div className="p-4 border-t border-orange-100">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-xl">
            <p className="text-sm text-gray-600 text-center">
              भारत का #1 शिक्षक प्लेटफॉर्म
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              India's #1 Teacher Platform
            </p>
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
