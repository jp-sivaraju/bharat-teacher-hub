import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const SchoolLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/school-dashboard');
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4 border-orange-300 hover:border-orange-500 hover:bg-orange-50 text-orange-700">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-orange-200">
            <div className="flex justify-center mb-4">
              <span className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">School Login</h2>
            <p className="text-center text-orange-600 mb-6">Access your school profile and opportunities</p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full p-2 border border-orange-300 rounded-md" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full p-2 border border-orange-300 rounded-md" />
              </div>
              <Button type="submit" onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md mb-4">
                Sign In as School
              </Button>
              <div className="text-center">
                <a href="#" className="text-orange-600 hover:underline text-sm">Forgot your password?</a>
              </div>
              <div className="text-center mt-2">
                <a href="" className="text-orange-600 hover:underline text-sm">Don't have an account? Register here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};