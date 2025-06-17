
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, BookOpen, Clock, Phone, Mail } from 'lucide-react';

interface TeacherCardsProps {
  filters: {
    subject: string;
    language: string;
    experience: string;
    board: string;
  };
}

export const TeacherCards: React.FC<TeacherCardsProps> = ({ filters }) => {
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
      specialization: 'Class 9-12',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
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
      specialization: 'JEE/NEET Prep',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
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
      specialization: 'Class 6-10',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e130bb?w=150&h=150&fit=crop&crop=face'
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
      specialization: 'IIT-JEE Coaching',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    return (
      (!filters.subject || teacher.subject.includes(filters.subject)) &&
      (!filters.language || teacher.language === filters.language) &&
      (!filters.experience || teacher.experience.includes(filters.experience.split(' ')[0])) &&
      (!filters.board || teacher.board === filters.board)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Available Teachers ({filteredTeachers.length})
        </h2>
        <p className="text-gray-600">उपलब्ध शिक्षक</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTeachers.map((teacher) => (
          <div 
            key={teacher.id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{teacher.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {teacher.subject}
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-800">
                      {teacher.board}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{teacher.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{teacher.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Qualification</p>
                    <p className="font-medium">{teacher.qualification}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Specialization</p>
                    <p className="font-medium">{teacher.specialization}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Language</p>
                    <p className="font-medium">{teacher.language}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Students Taught</p>
                    <p className="font-medium">{teacher.students}+</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-4">
                <Button className="flex-1 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" className="flex-1 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
