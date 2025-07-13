
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const CollegeLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/college-dashboard');
  }
  
  return (
    <div className="min-h-screen w-full bg-background font-mono">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="mb-4 border-border hover:bg-muted text-foreground font-mono">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md border border-border">
            <div className="flex justify-center mb-4">
              <span className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M5 7h14m-9 3h5m-5 3h5m-5 3h5m-5 3h5"></path>
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2 text-foreground font-mono">College Login</h2>
            <p className="text-center text-muted-foreground mb-6 font-mono">Access your college dashboard and post job openings</p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-1 font-mono">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full p-2 border border-border rounded-md bg-background text-foreground font-mono placeholder:text-muted-foreground" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-1 font-mono">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full p-2 border border-border rounded-md bg-background text-foreground font-mono placeholder:text-muted-foreground" />
              </div>
              <Button type="submit" onClick={handleSubmit} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-md mb-4 font-mono">
                Sign In as College
              </Button>
              <div className="text-center">
                <a href="#" className="text-primary hover:underline text-sm font-mono">Forgot your password?</a>
              </div>
              <div className="text-center mt-2">
                <a href="/college-register" className="text-primary hover:underline text-sm font-mono">Don't have an account? Register here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
