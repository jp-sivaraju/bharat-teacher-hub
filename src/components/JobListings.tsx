
import React, { useState, useMemo } from 'react';
import { JobCard } from './JobCard';
import { JobFilters } from './JobFilters';
import { JobDetailsModal } from './JobDetailsModal';

interface JobPosting {
  id: string;
  title: string;
  subject: string;
  level: string;
  type: 'school' | 'college';
  instituteName: string;
  location: string;
  urgency: 'High' | 'Medium' | 'Low';
  applicants: number;
  description: string;
  requirements: string[];
  postedDate: string;
  experience: string;
  salary: string;
}

// Mock data for demonstration
const mockJobs: JobPosting[] = [
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
    description: 'We are looking for an experienced Mathematics teacher to join our secondary school team. The ideal candidate should have a strong background in mathematics education and be passionate about student development.',
    requirements: [
      'Bachelor\'s degree in Mathematics or Education',
      'Minimum 3 years teaching experience',
      'Strong communication skills',
      'Experience with CBSE curriculum preferred'
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
    description: 'Seeking a highly qualified Physics faculty member for JEE Advanced preparation. The candidate should have excellent problem-solving skills and experience in competitive exam coaching.',
    requirements: [
      'M.Sc or PhD in Physics',
      'Minimum 5 years JEE coaching experience',
      'Strong analytical and problem-solving skills',
      'Experience with advanced physics concepts'
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
    description: 'Looking for a creative and enthusiastic English teacher for primary classes. The role involves developing language skills and fostering a love for reading and writing among young students.',
    requirements: [
      'Bachelor\'s degree in English Literature or Education',
      'Experience with primary education',
      'Creative teaching methods',
      'Good communication skills'
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
    description: 'Experienced Chemistry faculty required for NEET preparation classes. The candidate should have in-depth knowledge of organic, inorganic, and physical chemistry.',
    requirements: [
      'M.Sc in Chemistry',
      'NEET coaching experience',
      'Strong subject knowledge',
      'Ability to explain complex concepts simply'
    ],
    postedDate: '4 days ago',
    experience: '3+ years',
    salary: '₹45,000 - ₹65,000'
  }
];

export const JobListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique values for filters
  const subjects = useMemo(() => {
    return Array.from(new Set(mockJobs.map(job => job.subject)));
  }, []);

  const levels = useMemo(() => {
    return Array.from(new Set(mockJobs.map(job => job.level)));
  }, []);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.instituteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.subject.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSubject = selectedSubject === '' || job.subject === selectedSubject;
      const matchesLevel = selectedLevel === '' || job.level === selectedLevel;
      const matchesUrgency = selectedUrgency === '' || job.urgency === selectedUrgency;
      const matchesType = selectedType === '' || job.type === selectedType;

      return matchesSearch && matchesSubject && matchesLevel && matchesUrgency && matchesType;
    });
  }, [searchTerm, selectedSubject, selectedLevel, selectedUrgency, selectedType]);

  const handleViewDetails = (job: JobPosting) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedSubject('');
    setSelectedLevel('');
    setSelectedUrgency('');
    setSelectedType('');
  };

  return (
    <div className="space-y-6">
      <JobFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        selectedUrgency={selectedUrgency}
        onUrgencyChange={setSelectedUrgency}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        onClearFilters={handleClearFilters}
        subjects={subjects}
        levels={levels}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-orange-900">
          Available Positions ({filteredJobs.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-orange-600 text-lg mb-2">No jobs found</p>
          <p className="text-orange-500">Try adjusting your search criteria or filters</p>
        </div>
      )}

      <JobDetailsModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
