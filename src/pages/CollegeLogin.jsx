import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { jsxDEV as SAVEDxjs } from 'react/jsx-dev-runtime';
import { useNavigate } from 'react-router-dom';

export const CollegeLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/college-dashboard');
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M5 7h14m-9 3h5m-5 3h5m-5 3h5m-5 3h5"></path>
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">College Login</h2>
            <p className="text-center text-orange-600 mb-6">Access your college dashboard and post job openings</p>
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

                Sign In as College
              </Button>
              <div className="text-center">
                <a href="#" className="text-orange-600 hover:underline text-sm">Forgot your password?</a>
              </div>
              <div className="text-center mt-2">
                <a href="/college-register" className="text-orange-600 hover:underline text-sm">Don't have an account? Register here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};