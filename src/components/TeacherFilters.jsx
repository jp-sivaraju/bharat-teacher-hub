
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export const TeacherFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    // Search functionality can be implemented here
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Find Your Perfect Teacher
        </h2>
        <p className="text-gray-600">Use our advanced filters to discover the ideal educator for your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Subject</label>
          <Select value={filters.subject} onValueChange={(value) => handleFilterChange('subject', value)}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="biology">Biology</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="computer-science">Computer Science</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Language</label>
          <Select value={filters.language} onValueChange={(value) => handleFilterChange('language', value)}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Experience</label>
          <Select value={filters.experience} onValueChange={(value) => handleFilterChange('experience', value)}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Board</label>
          <Select value={filters.board} onValueChange={(value) => handleFilterChange('board', value)}>
            <SelectTrigger className="border-2 hover:border-orange-300 focus:border-orange-500 transition-all duration-300">
              <SelectValue placeholder="Select board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cbse">CBSE</SelectItem>
              <SelectItem value="icse">ICSE</SelectItem>
              <SelectItem value="state-board">State Board</SelectItem>
              <SelectItem value="iit-jee">IIT-JEE</SelectItem>
              <SelectItem value="neet">NEET</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={handleSearch}
          className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          <Search className="w-5 h-5 mr-2" />
          Search Teachers
        </Button>
      </div>
    </div>
  );
};
