
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Clock, Users, BookOpen, Building, DollarSign, Calendar, Award, Home } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const mockJobs = [
  {
    id: '1',
    title: 'Mathematics Teacher',
    subject: 'Mathematics',
    level: 'Secondary',
    type: 'school',
    instituteName: 'Sunrise International School',
    location: 'Mumbai, Maharashtra',
    urgency: 'High',
    applicants: 12,
    description: 'We are looking for an experienced Mathematics teacher to join our secondary school team. The ideal candidate should have a strong background in mathematics education and be passionate about student development. You will be responsible for planning and delivering engaging mathematics lessons to students aged 14-18, preparing them for board examinations, and fostering a positive learning environment.',
    requirements: [
      'Bachelor\'s degree in Mathematics or Education',
      'Minimum 3 years teaching experience',
      'Strong communication skills',
      'Experience with CBSE curriculum preferred',
      'Knowledge of modern teaching methodologies',
      'Ability to work in a team environment'
    ],
    postedDate: '2 days ago',
    experience: '3+ years',
    salary: '₹35,000 - ₹45,000'
  },
  {
    id: '2',
    title: 'Physics Faculty',
    subject: 'Physics',
    level: 'JEE Advanced',
    type: 'college',
    instituteName: 'Excellence Engineering College',
    location: 'Delhi, India',
    urgency: 'High',
    applicants: 8,
    description: 'Seeking a highly qualified Physics faculty member for JEE Advanced preparation. The candidate should have excellent problem-solving skills and experience in competitive exam coaching. You will be responsible for conducting lectures, developing study materials, and mentoring students for JEE Advanced examinations.',
    requirements: [
      'M.Sc or PhD in Physics',
      'Minimum 5 years JEE coaching experience',
      'Strong analytical and problem-solving skills',
      'Experience with advanced physics concepts',
      'Published research papers preferred',
      'Excellent communication and presentation skills'
    ],
    postedDate: '1 day ago',
    experience: '5+ years',
    salary: '₹50,000 - ₹70,000'
  },
  {
    id: '3',
    title: 'English Teacher',
    subject: 'English',
    level: 'Primary',
    type: 'school',
    instituteName: 'Green Valley School',
    location: 'Bangalore, Karnataka',
    urgency: 'Medium',
    applicants: 15,
    description: 'Looking for a creative and enthusiastic English teacher for primary classes. The role involves developing language skills and fostering a love for reading and writing among young students. You will create engaging lesson plans and activities that make learning English fun and effective.',
    requirements: [
      'Bachelor\'s degree in English Literature or Education',
      'Experience with primary education',
      'Creative teaching methods',
      'Good communication skills',
      'Knowledge of child psychology',
      'Experience with activity-based learning'
    ],
    postedDate: '3 days ago',
    experience: '2+ years',
    salary: '₹30,000 - ₹40,000'
  },
  {
    id: '4',
    title: 'Chemistry Faculty',
    subject: 'Chemistry',
    level: 'NEET',
    type: 'college',
    instituteName: 'Medical Prep Institute',
    location: 'Chennai, Tamil Nadu',
    urgency: 'Medium',
    applicants: 5,
    description: 'Experienced Chemistry faculty required for NEET preparation classes. The candidate should have in-depth knowledge of organic, inorganic, and physical chemistry. You will be responsible for conducting comprehensive lectures, preparing study materials, and helping students achieve their medical entrance exam goals.',
    requirements: [
      'M.Sc in Chemistry',
      'NEET coaching experience',
      'Strong subject knowledge',
      'Ability to explain complex concepts simply',
      'Experience with medical entrance coaching',
      'Result-oriented approach'
    ],
    postedDate: '4 days ago',
    experience: '3+ years',
    salary: '₹45,000 - ₹65,000'
  }
];

export const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const job = mockJobs.find(j => j.id === id);
  
  if (!job) {
    return (
      <div className="min-h-screen w-full bg-background font-inter">
        <div className="bg-gradient-to-r from-deep-blue via-deep-blue to-primary text-ivory p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-ivory">Job Not Found</h1>
                <p className="text-ivory/80 mt-1">The requested job posting could not be found</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link to="/">
                <Button variant="secondary" className="bg-ivory/20 hover:bg-ivory/30 text-ivory border-ivory/30 shadow-educational">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="secondary" className="bg-ivory/20 hover:bg-ivory/30 text-ivory border-ivory/30 shadow-educational">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 text-center">
          <p className="text-charcoal text-lg">Please check the job listing and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background font-inter">
      {/* Header */}
      <div className="bg-gradient-to-r from-deep-blue via-deep-blue to-primary text-ivory p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-ivory">Job Details</h1>
                <p className="text-ivory/80 mt-1">Complete information about this position</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link to="/">
                <Button variant="secondary" className="bg-ivory/20 hover:bg-ivory/30 text-ivory border-ivory/30 shadow-educational">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="secondary" className="bg-ivory/20 hover:bg-ivory/30 text-ivory border-ivory/30 shadow-educational">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Job Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-card rounded-lg border-2 border-border shadow-educational-lg overflow-hidden">
          {/* Job Header */}
          <div className="bg-gradient-to-r from-primary/5 to-brand-100/20 p-6 border-b border-border">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-deep-blue mb-2">{job.title}</h2>
                <div className="flex items-center space-x-2 mb-2">
                  <Building className="w-5 h-5 text-emerald" />
                  <p className="text-lg text-deep-blue font-medium">{job.instituteName}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-charcoal" />
                  <span className="text-charcoal">{job.location}</span>
                </div>
              </div>
              <Badge 
                variant={job.urgency === 'High' ? 'destructive' : job.urgency === 'Medium' ? 'default' : 'secondary'}
                className="text-sm"
              >
                {job.urgency} Priority
              </Badge>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center space-x-2 text-sm">
                <BookOpen className="w-4 h-4 text-emerald" />
                <div>
                  <p className="font-medium text-deep-blue">{job.subject}</p>
                  <p className="text-charcoal">{job.level}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="w-4 h-4 text-emerald" />
                <div>
                  <p className="font-medium text-deep-blue">{job.applicants}</p>
                  <p className="text-charcoal">Applicants</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4 text-emerald" />
                <div>
                  <p className="font-medium text-deep-blue">{job.experience}</p>
                  <p className="text-charcoal">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <DollarSign className="w-4 h-4 text-emerald" />
                <div>
                  <p className="font-medium text-deep-blue">{job.salary}</p>
                  <p className="text-charcoal">Salary</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-deep-blue mb-3 flex items-center">
                <Building className="w-5 h-5 mr-2 text-emerald" />
                Job Description
              </h3>
              <p className="text-charcoal leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-deep-blue mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-emerald" />
                Requirements
              </h3>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-charcoal">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-brand-50 to-brand-100/30 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-emerald" />
                  <span className="text-charcoal">Posted {job.postedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald" />
                  <span className="text-charcoal capitalize">{job.type} Position</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-border">
              <Button className="flex-1 bg-gradient-to-r from-primary via-brand-500 to-brand-600 hover:from-primary/90 hover:via-brand-500/90 hover:to-brand-600/90 text-primary-foreground shadow-educational">
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-emerald text-emerald hover:bg-emerald-light hover:text-emerald shadow-educational"
              >
                Save Job
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-charcoal text-charcoal hover:bg-muted hover:text-charcoal shadow-educational"
                onClick={() => window.print()}
              >
                Print Details
              </Button>
            </div>
          </div>
        </div>

        {/* Related Jobs Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-deep-blue mb-4">Similar Positions</h3>
          <div className="text-center p-8 bg-card rounded-lg border border-border">
            <p className="text-charcoal mb-4">Discover more opportunities that match your profile</p>
            <Link to="/jobs">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-educational">
                Browse All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
