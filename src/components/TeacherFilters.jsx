import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, MapPin, Clock, GraduationCap, IndianRupee } from 'lucide-react';

export const TeacherFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value === 'all' ? '' : value }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    // Search functionality can be implemented here
  };

  const clearFilters = () => {
    setFilters({
      subject: '',
      language: '',
      experience: '',
      board: '',
      location: '',
      priceRange: '',
      teachingMode: '',
      availability: '',
      searchName: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl shadow-xl border-2 border-primary/20 p-6 mb-8 animate-scale-in backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="text-center flex-1">
          <h2 className="text-3xl font-bold text-foreground mb-2 font-display animate-fade-in-up">
            Find Your Perfect Teacher
          </h2>
          <p className="text-foreground font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Use our advanced filters to discover the ideal educator for your needs
          </p>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="ml-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Search by Name */}
      <div className="mb-6 animate-slide-in-left">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-3 text-primary" />
          <Input
            placeholder="Search teachers by name..."
            value={filters.searchName || ''}
            onChange={(e) => handleFilterChange('searchName', e.target.value)}
            className="pl-10 border-2 border-primary/30 focus:border-primary rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
          />
        </div>
      </div>

      {/* Main Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <label className="text-sm font-semibold text-foreground flex items-center">
            <GraduationCap className="w-4 h-4 mr-1 text-primary" />
            Subject
          </label>
          <Select value={filters.subject || 'all'} onValueChange={(value) => handleFilterChange('subject', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="biology">Biology</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="computer-science">Computer Science</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="geography">Geography</SelectItem>
              <SelectItem value="economics">Economics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <label className="text-sm font-semibold text-foreground flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-primary" />
            Location
          </label>
          <Select value={filters.location || 'all'} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="kolkata">Kolkata</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
              <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="lucknow">Lucknow</SelectItem>
              <SelectItem value="jaipur">Jaipur</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <label className="text-sm font-semibold text-foreground flex items-center">
            <Clock className="w-4 h-4 mr-1 text-primary" />
            Experience
          </label>
          <Select value={filters.experience || 'all'} onValueChange={(value) => handleFilterChange('experience', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience</SelectItem>
              <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5-10">5-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <label className="text-sm font-semibold text-foreground flex items-center">
            <IndianRupee className="w-4 h-4 mr-1 text-primary" />
            Price Range
          </label>
          <Select value={filters.priceRange || 'all'} onValueChange={(value) => handleFilterChange('priceRange', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="0-500">₹0 - ₹500/hour</SelectItem>
              <SelectItem value="500-800">₹500 - ₹800/hour</SelectItem>
              <SelectItem value="800-1200">₹800 - ₹1200/hour</SelectItem>
              <SelectItem value="1200+">₹1200+/hour</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Secondary Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <label className="text-sm font-semibold text-foreground">Language</label>
          <Select value={filters.language || 'all'} onValueChange={(value) => handleFilterChange('language', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
              <SelectItem value="gujarati">Gujarati</SelectItem>
              <SelectItem value="kannada">Kannada</SelectItem>
              <SelectItem value="urdu">Urdu</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <label className="text-sm font-semibold text-foreground">Board</label>
          <Select value={filters.board || 'all'} onValueChange={(value) => handleFilterChange('board', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Boards</SelectItem>
              <SelectItem value="cbse">CBSE</SelectItem>
              <SelectItem value="icse">ICSE</SelectItem>
              <SelectItem value="state-board">State Board</SelectItem>
              <SelectItem value="iit-jee">IIT-JEE</SelectItem>
              <SelectItem value="neet">NEET</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <label className="text-sm font-semibold text-foreground">Teaching Mode</label>
          <Select value={filters.teachingMode || 'all'} onValueChange={(value) => handleFilterChange('teachingMode', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="online">Online Only</SelectItem>
              <SelectItem value="offline">Offline Only</SelectItem>
              <SelectItem value="both">Both Online & Offline</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <label className="text-sm font-semibold text-foreground">Availability</label>
          <Select value={filters.availability || 'all'} onValueChange={(value) => handleFilterChange('availability', value)}>
            <SelectTrigger className="border-2 border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl font-medium text-foreground bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Availabilities</SelectItem>
              <SelectItem value="available">Available Now</SelectItem>
              <SelectItem value="busy">Busy</SelectItem>
              <SelectItem value="weekend-only">Weekends Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mb-6 animate-fade-in-up">
          <div className="flex flex-wrap gap-2">
            {filters.searchName && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Name: {filters.searchName}
              </Badge>
            )}
            {filters.subject && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Subject: {filters.subject}
              </Badge>
            )}
            {filters.location && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Location: {filters.location}
              </Badge>
            )}
            {filters.experience && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Experience: {filters.experience}
              </Badge>
            )}
            {filters.priceRange && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Price: {filters.priceRange}
              </Badge>
            )}
            {filters.language && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Language: {filters.language}
              </Badge>
            )}
            {filters.board && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Board: {filters.board}
              </Badge>
            )}
            {filters.teachingMode && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Mode: {filters.teachingMode}
              </Badge>
            )}
            {filters.availability && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-primary/30 font-medium">
                Availability: {filters.availability}
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Search Button */}
      <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
        <Button 
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
        >
          <Search className="w-5 h-5 mr-2" />
          Search Teachers
        </Button>
      </div>
    </div>
  );
};
