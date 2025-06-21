
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  Edit,
  Star
} from 'lucide-react';

interface ProfileData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  userType: 'teacher' | 'student' | 'parent' | 'school' | 'institution' | 'home-tuition';
  profileImage?: string;
  // Teacher specific fields
  qualification?: string;
  experience?: string;
  specialization?: string;
  subjects?: string[];
  rating?: number;
  // Student specific fields
  age?: number;
  currentClass?: string;
  targetExams?: string;
  // Additional info
  bio?: string;
  joinDate?: string;
}

interface ProfileViewProps {
  profile: ProfileData;
  isOwnProfile?: boolean;
  onEdit?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ 
  profile, 
  isOwnProfile = false, 
  onEdit 
}) => {
  const getUserTypeIcon = () => {
    switch (profile.userType) {
      case 'teacher':
        return <GraduationCap className="w-6 h-6" />;
      case 'student':
        return <BookOpen className="w-6 h-6" />;
      default:
        return <User className="w-6 h-6" />;
    }
  };

  const getUserTypeColor = () => {
    switch (profile.userType) {
      case 'teacher':
        return 'from-orange-500 to-blue-600';
      case 'student':
        return 'from-blue-500 to-green-600';
      case 'parent':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatUserType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Card */}
      <Card className="border-2 shadow-lg">
        <CardHeader className={`bg-gradient-to-r ${getUserTypeColor()} text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  getUserTypeIcon()
                )}
              </div>
              <div>
                <CardTitle className="text-2xl">{profile.name}</CardTitle>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {formatUserType(profile.userType)}
                  </Badge>
                  {profile.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{profile.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isOwnProfile && (
              <Button
                variant="secondary"
                size="sm"
                onClick={onEdit}
                className="bg-white/20 hover:bg-white/30"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Email:</span>
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Phone:</span>
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-gray-500 mt-1" />
              <div>
                <div className="text-sm text-gray-600">Address:</div>
                <div>{profile.address}</div>
                <div className="text-sm text-gray-500">{profile.city}</div>
              </div>
            </div>
            {profile.joinDate && (
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Member since:</span>
                <span>{profile.joinDate}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Professional/Academic Information */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>
                {profile.userType === 'teacher' ? 'Professional' : 'Academic'} Information
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.qualification && (
              <div>
                <span className="text-sm text-gray-600">Qualification:</span>
                <div className="font-medium">{profile.qualification}</div>
              </div>
            )}
            {profile.experience && (
              <div>
                <span className="text-sm text-gray-600">Experience:</span>
                <div className="font-medium">{profile.experience}</div>
              </div>
            )}
            {profile.specialization && (
              <div>
                <span className="text-sm text-gray-600">Specialization:</span>
                <div className="font-medium">{profile.specialization}</div>
              </div>
            )}
            {profile.currentClass && (
              <div>
                <span className="text-sm text-gray-600">Current Class:</span>
                <div className="font-medium">{profile.currentClass}</div>
              </div>
            )}
            {profile.age && (
              <div>
                <span className="text-sm text-gray-600">Age:</span>
                <div className="font-medium">{profile.age} years</div>
              </div>
            )}
            {profile.targetExams && (
              <div>
                <span className="text-sm text-gray-600">Target Exams:</span>
                <div className="font-medium">{profile.targetExams}</div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Subjects/Interests */}
      {profile.subjects && profile.subjects.length > 0 && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-green-500" />
              <span>
                {profile.userType === 'teacher' ? 'Teaching Subjects' : 'Subjects of Interest'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {profile.subjects.map((subject, index) => (
                <Badge key={index} variant="outline" className="border-orange-300">
                  {subject}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bio/About */}
      {profile.bio && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
