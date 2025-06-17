
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter, RotateCcw } from 'lucide-react';

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
  const subjects = [
    'Mathematics', 'Science', 'English', 'Hindi', 'History', 'Geography', 
    'Physics', 'Chemistry', 'Biology', 'Economics', 'Computer Science'
  ];

  const languages = [
    'Hindi', 'English', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 
    'Urdu', 'Kannada', 'Malayalam', 'Punjabi'
  ];

  const experienceOptions = [
    'Fresher (0-1 years)', '1-3 years', '3-5 years', '5-10 years', '10+ years'
  ];

  const boards = [
    'CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'NIOS'
  ];

  const clearFilters = () => {
    setFilters({
      subject: '',
      language: '',
      experience: '',
      board: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-orange-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Find Your Perfect Teacher</h2>
            <p className="text-gray-600">अपने लिए सही शिक्षक खोजें</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Subject विषय</label>
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
          <label className="text-sm font-medium text-gray-700">Language भाषा</label>
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
          <label className="text-sm font-medium text-gray-700">Experience अनुभव</label>
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
          <label className="text-sm font-medium text-gray-700">Board बोर्ड</label>
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
    </div>
  );
};
