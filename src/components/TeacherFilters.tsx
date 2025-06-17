
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, RotateCcw, Search } from 'lucide-react';

interface TeacherFiltersProps {
  filters: {
    subject: string;
    language: string;
    experience: string;
    board: string;
  };
  setFilters: (filters: any) => void;
}

export const TeacherFilters: React.FC<TeacherFiltersProps> = ({ filters, setFilters }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Geography', 
    'Physics', 'Chemistry', 'Biology', 'Economics', 'Computer Science',
    'Engineering Mathematics', 'Mechanical Engineering', 'Civil Engineering',
    'Electrical Engineering', 'Computer Engineering', 'Electronics Engineering',
    'IIT-JEE Physics', 'IIT-JEE Chemistry', 'IIT-JEE Mathematics',
    'NEET Biology', 'NEET Physics', 'NEET Chemistry'
  ];

  const languages = [
    'English', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 
    'Urdu', 'Kannada', 'Malayalam', 'Punjabi', 'Assamese', 'Odia'
  ];

  const experienceOptions = [
    'Fresher (0-1 years)', '1-3 years', '3-5 years', '5-10 years', '10+ years'
  ];

  const boards = [
    'CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'NIOS', 'IIT-JEE', 'NEET', 'Engineering Entrance'
  ];

  const clearFilters = () => {
    setFilters({
      subject: '',
      language: '',
      experience: '',
      board: ''
    });
    setSearchTerm('');
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'with filters:', filters);
    // Add search functionality here
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-orange-100 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3 animate-slide-in-left">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center animate-pulse">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Find Your Perfect Teacher</h2>
            <p className="text-gray-600">Use advanced filters to discover ideal educators</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 animate-slide-in-right"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 animate-scale-in" style={{animationDelay: '0.3s'}}>
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              placeholder="Search by teacher name, qualification, or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300"
            />
          </div>
          <Button 
            onClick={handleSearch}
            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Subject</label>
          <Select value={filters.subject} onValueChange={(value) => setFilters({...filters, subject: value})}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Language</label>
          <Select value={filters.language} onValueChange={(value) => setFilters({...filters, language: value})}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>{language}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Experience</label>
          <Select value={filters.experience} onValueChange={(value) => setFilters({...filters, experience: value})}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select Experience" />
            </SelectTrigger>
            <SelectContent>
              {experienceOptions.map((exp) => (
                <SelectItem key={exp} value={exp}>{exp}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Board/Exam</label>
          <Select value={filters.board} onValueChange={(value) => setFilters({...filters, board: value})}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select Board" />
            </SelectTrigger>
            <SelectContent>
              {boards.map((board) => (
                <SelectItem key={board} value={board}>{board}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Filter Tags */}
      <div className="mt-4 flex flex-wrap gap-2 animate-fade-in" style={{animationDelay: '0.9s'}}>
        <span className="text-sm text-gray-600 mr-2">Quick filters:</span>
        {['IIT-JEE', 'NEET', 'CBSE', 'Engineering', 'Mathematics', 'Physics'].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilters({...filters, subject: tag.includes('IIT') || tag.includes('NEET') ? tag : '', board: tag.includes('CBSE') ? tag : ''})}
            className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-all duration-300 transform hover:scale-105"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
