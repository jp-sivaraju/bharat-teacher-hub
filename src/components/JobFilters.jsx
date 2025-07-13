
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';

export const JobFilters = ({
  searchTerm,
  onSearchChange,
  selectedSubject,
  onSubjectChange,
  selectedLevel,
  onLevelChange,
  selectedUrgency,
  onUrgencyChange,
  selectedType,
  onTypeChange,
  onClearFilters,
  subjects,
  levels
}) => {
  const hasActiveFilters = selectedSubject || selectedLevel || selectedUrgency || selectedType || searchTerm;

  return (
    <div className="bg-white p-4 rounded-lg border-2 border-orange-200 space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-orange-500" />
        <h3 className="font-semibold text-orange-900">Filter Jobs</h3>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="ml-auto text-orange-600 border-orange-300"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-3 text-orange-400" />
        <Input
          placeholder="Search jobs, institutions, locations..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 border-orange-300 focus:border-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select value={selectedSubject} onValueChange={onSubjectChange}>
          <SelectTrigger className="border-orange-300">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedLevel} onValueChange={onLevelChange}>
          <SelectTrigger className="border-orange-300">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            {levels.map((level) => (
              <SelectItem key={level} value={level}>{level}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedUrgency} onValueChange={onUrgencyChange}>
          <SelectTrigger className="border-orange-300">
            <SelectValue placeholder="Urgency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Urgency</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="border-orange-300">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="school">School</SelectItem>
            <SelectItem value="college">College</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {searchTerm && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              Search: {searchTerm}
            </Badge>
          )}
          {selectedSubject && selectedSubject !== "all" && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              Subject: {selectedSubject}
            </Badge>
          )}
          {selectedLevel && selectedLevel !== "all" && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              Level: {selectedLevel}
            </Badge>
          )}
          {selectedUrgency && selectedUrgency !== "all" && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              Urgency: {selectedUrgency}
            </Badge>
          )}
          {selectedType && selectedType !== "all" && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              Type: {selectedType}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
