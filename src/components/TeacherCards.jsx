import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, BookOpen, Clock, Phone, Mail, GraduationCap, Users } from 'lucide-react';

export const TeacherCards = ({ filters }) => {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      experience: '10+ years',
      board: 'CBSE',
      language: 'Hindi',
      location: 'Delhi',
      rating: 4.9,
      students: 500,
      qualification: 'M.Sc, B.Ed',
      specialization: 'Class 9-12, JEE Prep',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹800/hour',
      availability: 'Available',
      subjects: ['Mathematics', 'Statistics'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 2,
      name: 'Prof. Rajesh Kumar',
      subject: 'Physics',
      experience: '15+ years',
      board: 'ICSE',
      language: 'English',
      location: 'Mumbai',
      rating: 4.8,
      students: 750,
      qualification: 'M.Sc Physics, Ph.D',
      specialization: 'JEE/NEET Preparation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹1200/hour',
      availability: 'Available',
      subjects: ['Physics', 'Applied Physics'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 3,
      name: 'Mrs. Sunita Patel',
      subject: 'English',
      experience: '8 years',
      board: 'State Board',
      language: 'Gujarati',
      location: 'Ahmedabad',
      rating: 4.7,
      students: 300,
      qualification: 'M.A English, B.Ed',
      specialization: 'Class 6-10, Communication Skills',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e130bb?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹600/hour',
      availability: 'Available',
      subjects: ['English', 'Literature'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 4,
      name: 'Dr. Amit Singh',
      subject: 'Chemistry',
      experience: '12 years',
      board: 'CBSE',
      language: 'Hindi',
      location: 'Lucknow',
      rating: 4.9,
      students: 650,
      qualification: 'M.Sc, Ph.D Chemistry',
      specialization: 'IIT-JEE Coaching, Organic Chemistry',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹1000/hour',
      availability: 'Available',
      subjects: ['Chemistry', 'Organic Chemistry'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 5,
      name: 'Prof. Lakshmi Menon',
      subject: 'Biology',
      experience: '11 years',
      board: 'CBSE',
      language: 'Tamil',
      location: 'Chennai',
      rating: 4.8,
      students: 420,
      qualification: 'M.Sc Botany, Ph.D',
      specialization: 'NEET Preparation, Botany',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹900/hour',
      availability: 'Available',
      subjects: ['Biology', 'Botany', 'Zoology'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 6,
      name: 'Mr. Arjun Das',
      subject: 'Computer Science',
      experience: '6 years',
      board: 'ICSE',
      language: 'Bengali',
      location: 'Kolkata',
      rating: 4.6,
      students: 280,
      qualification: 'B.Tech CSE, M.Tech',
      specialization: 'Programming, Web Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹800/hour',
      availability: 'Available',
      subjects: ['Computer Science', 'Programming'],
      teachingModes: ['Online']
    },
    {
      id: 7,
      name: 'Dr. Kavita Reddy',
      subject: 'Mathematics',
      experience: '14 years',
      board: 'State Board',
      language: 'Telugu',
      location: 'Hyderabad',
      rating: 4.9,
      students: 580,
      qualification: 'M.Sc Math, Ph.D',
      specialization: 'Advanced Mathematics, Calculus',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹950/hour',
      availability: 'Available',
      subjects: ['Mathematics', 'Calculus', 'Algebra'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 8,
      name: 'Prof. Mohammed Ali',
      subject: 'Physics',
      experience: '9 years',
      board: 'CBSE',
      language: 'Urdu',
      location: 'Lucknow',
      rating: 4.7,
      students: 360,
      qualification: 'M.Sc Physics, B.Ed',
      specialization: 'Mechanics, Thermodynamics',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹750/hour',
      availability: 'Available',
      subjects: ['Physics', 'Applied Physics'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 9,
      name: 'Mrs. Neha Joshi',
      subject: 'History',
      experience: '7 years',
      board: 'ICSE',
      language: 'Marathi',
      location: 'Pune',
      rating: 4.5,
      students: 240,
      qualification: 'M.A History, B.Ed',
      specialization: 'Ancient History, Social Studies',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹550/hour',
      availability: 'Available',
      subjects: ['History', 'Social Studies'],
      teachingModes: ['Online', 'Offline']
    },
    {
      id: 10,
      name: 'Dr. Ravi Shankar',
      subject: 'Economics',
      experience: '13 years',
      board: 'CBSE',
      language: 'Kannada',
      location: 'Bangalore',
      rating: 4.8,
      students: 490,
      qualification: 'M.A Economics, Ph.D',
      specialization: 'Macro Economics, Statistics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      hourlyRate: '₹850/hour',
      availability: 'Available',
      subjects: ['Economics', 'Business Studies'],
      teachingModes: ['Online', 'Offline']
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    return (
      (!filters.subject || teacher.subjects.some(subject => 
        subject.toLowerCase().includes(filters.subject.toLowerCase())
      )) &&
      (!filters.language || teacher.language === filters.language) &&
      (!filters.experience || teacher.experience.includes(filters.experience.split(' ')[0])) &&
      (!filters.board || teacher.board === filters.board)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground font-mono">
          Available Teachers ({filteredTeachers.length})
        </h2>
        <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full font-mono">
          उपलब्ध शिक्षक
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredTeachers.map((teacher) => (
          <div 
            key={teacher.id}
            className="bg-card rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] border border-border overflow-hidden group"
          >
            <div className="p-8">
              {/* Header Section */}
              <div className="flex items-start space-x-6 mb-6">
                <div className="relative">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-border shadow-lg"
                  />
                  {teacher.verified && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-card flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                      {teacher.name}
                    </h3>
                    <div className="flex items-center space-x-1 bg-muted px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-bold text-foreground font-mono">{teacher.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-muted text-foreground font-medium font-mono">
                      {teacher.subject}
                    </Badge>
                    <Badge variant="outline" className="border-border text-foreground bg-card font-mono">
                      {teacher.board}
                    </Badge>
                    <Badge variant="outline" className="border-border text-foreground bg-card font-mono">
                      {teacher.language}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-mono">{teacher.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-mono">{teacher.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-mono">{teacher.students}+ students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="bg-muted rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1 font-mono">Qualification</p>
                    <p className="font-semibold text-foreground font-mono">{teacher.qualification}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1 font-mono">Specialization</p>
                    <p className="font-semibold text-foreground font-mono">{teacher.specialization}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1 font-mono">Rate</p>
                    <p className="font-bold text-primary text-lg font-mono">{teacher.hourlyRate}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1 font-mono">Mode</p>
                    <div className="flex space-x-1">
                      {teacher.teachingModes.map((mode, idx) => (
                        <span key={idx} className="text-xs bg-card text-foreground px-2 py-1 rounded-full border border-border font-mono">
                          {mode}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subjects Section */}
              <div className="mb-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 font-mono">Subjects Taught</p>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject, idx) => (
                    <span key={idx} className="text-sm bg-muted text-foreground px-3 py-1 rounded-full font-medium border border-border font-mono">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 py-3 font-semibold font-mono">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Now
                </Button>
                <Button variant="outline" className="flex-1 hover:bg-muted hover:border-primary transition-all duration-300 py-3 font-mono">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-muted-foreground mb-2 font-mono">No teachers found</h3>
          <p className="text-muted-foreground font-mono">Try adjusting your filters to see more results</p>
        </div>
      )}
    </div>
  );
};
