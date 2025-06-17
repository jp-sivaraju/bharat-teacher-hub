
import React from 'react';
import { Target, Users, Award, TrendingUp, Heart, Shield } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Registered Teachers', labelHindi: 'पंजीकृत शिक्षक' },
    { icon: Award, number: '1,000+', label: 'Partner Schools', labelHindi: 'साझेदार स्कूल' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate', labelHindi: 'सफलता दर' },
    { icon: Heart, number: '24/7', label: 'Support', labelHindi: 'सहायता' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      titleHindi: 'हमारा लक्ष्य',
      description: 'To bridge the gap between talented teachers and quality educational institutions across India, ensuring every child has access to excellent education.',
      descriptionHindi: 'भारत में प्रतिभाशाली शिक्षकों और गुणवत्तापूर्ण शैक्षणिक संस्थानों के बीच अंतर को पाटना, यह सुनिश्चित करना कि हर बच्चे को उत्कृष्ट शिक्षा मिले।'
    },
    {
      icon: Users,
      title: 'Our Vision',
      titleHindi: 'हमारी दृष्टि',
      description: 'To become India\'s most trusted platform for teacher recruitment, empowering educators to find fulfilling careers and helping schools build strong academic teams.',
      descriptionHindi: 'शिक्षक भर्ती के लिए भारत का सबसे विश्वसनीय प्लेटफॉर्म बनना, शिक्षकों को संतुष्टिजनक करियर खोजने में सशक्त बनाना और स्कूलों को मजबूत शैक्षणिक टीम बनाने में मदद करना।'
    },
    {
      icon: Shield,
      title: 'Our Values',
      titleHindi: 'हमारे मूल्य',
      description: 'Integrity, Excellence, Innovation, and Inclusivity. We believe in transparent processes, quality assurance, and supporting every teacher\'s professional growth.',
      descriptionHindi: 'ईमानदारी, उत्कृष्टता, नवाचार, और समावेशिता। हम पारदर्शी प्रक्रियाओं, गुणवत्ता आश्वासन, और हर शिक्षक के व्यावसायिक विकास का समर्थन करने में विश्वास करते हैं।'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          About TeacherConnect
        </h1>
        <p className="text-2xl text-gray-600">टीचर कनेक्ट के बारे में</p>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          TeacherConnect is India's leading platform connecting passionate educators with premier educational institutions. 
          Since 2020, we've been transforming the way teachers find opportunities and schools discover talent.
        </p>
      </div>

      {/* Hero Story Section */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-xl text-orange-100">हमारी कहानी</p>
            <p className="text-lg text-orange-50 leading-relaxed">
              Founded by a team of experienced educators and technology professionals, TeacherConnect was born from the vision 
              to democratize access to quality teaching opportunities across India. We recognized that talented teachers often 
              struggled to find the right schools, while institutions faced challenges in identifying qualified educators.
            </p>
            <p className="text-lg text-orange-50 leading-relaxed">
              Our platform leverages cutting-edge technology with deep understanding of the Indian education system to create 
              meaningful connections that benefit teachers, schools, and ultimately, students across the nation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <Icon className="w-8 h-8 text-yellow-200 mx-auto mb-3" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-orange-100 text-sm">{stat.label}</div>
                  <div className="text-orange-200 text-xs">{stat.labelHindi}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-100 p-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{value.title}</h3>
                  <p className="text-orange-600 font-medium">{value.titleHindi}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed italic">{value.descriptionHindi}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Teachers Choose Us</h2>
          <p className="text-xl text-gray-600">शिक्षक हमें क्यों चुनते हैं</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Verified Schools', subtitle: 'सत्यापित स्कूल', description: 'All partner institutions are thoroughly verified' },
            { title: 'Quick Placement', subtitle: 'त्वरित नियुक्ति', description: 'Average placement time of 2-3 weeks' },
            { title: 'Fair Salary', subtitle: 'उचित वेतन', description: 'Competitive and transparent salary packages' },
            { title: 'Career Growth', subtitle: 'करियर विकास', description: 'Opportunities for advancement and skill development' }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h4 className="font-bold text-gray-800">{feature.title}</h4>
              <p className="text-orange-600 text-sm font-medium">{feature.subtitle}</p>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
