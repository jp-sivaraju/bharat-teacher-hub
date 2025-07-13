
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
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-2xl border-2 border-primary/20 shadow-educational-lg space-y-6 animate-scale-in backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-6 h-6 text-primary animate-pulse" />
        <h3 className="font-bold text-foreground text-xl font-display">Filter Job Opportunities</h3>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="ml-auto text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="relative animate-slide-in-left">
        <Search className="w-5 h-5 absolute left-3 top-3 text-primary" />
        <Input
          placeholder="Search jobs, institutions, locations..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 border-2 border-primary/30 focus:border-primary text-foreground font-medium bg-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
          <Select value={selectedSubject} onValueChange={onSubjectChange}>
            <SelectTrigger className="border-2 border-primary/30 focus:border-primary text-foreground font-medium bg-background/80 backdrop-blur-sm rounded-xl">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <label className="block text-sm font-semibold text-foreground mb-2">Level</label>
          <Select value={selectedLevel} onValueChange={onLevelChange}>
            <SelectTrigger className="border-2 border-primary/30 focus:border-primary text-foreground font-medium bg-background/80 backdrop-blur-sm rounded-xl">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <label className="block text-sm font-semibold text-foreground mb-2">Urgency</label>
          <Select value={selectedUrgency} onValueChange={onUrgencyChange}>
            <SelectTrigger className="border-2 border-primary/30 focus:border-primary text-foreground font-medium bg-background/80 backdrop-blur-sm rounded-xl">
              <SelectValue placeholder="Select urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Urgency</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <label className="block text-sm font-semibold text-foreground mb-2">Type</label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger className="border-2 border-primary/30 focus:border-primary text-foreground font-medium bg-background/80 backdrop-blur-sm rounded-xl">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="school">School</SelectItem>
              <SelectItem value="college">College</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 animate-fade-in-up">
          {searchTerm && (
            <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
              Search: {searchTerm}
            </Badge>
          )}
          {selectedSubject && selectedSubject !== "all" && (
            <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
              Subject: {selectedSubject}
            </Badge>
          )}
          {selectedLevel && selectedLevel !== "all" && (
            <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
              Level: {selectedLevel}
            </Badge>
          )}
          {selectedUrgency && selectedUrgency !== "all" && (
            <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
              Urgency: {selectedUrgency}
            </Badge>
          )}
          {selectedType && selectedType !== "all" && (
            <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
              Type: {selectedType}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
