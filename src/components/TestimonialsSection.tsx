
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mrs. Kavya Nair',
      role: 'Mathematics Teacher',
      school: 'DPS International School, Bangalore',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e130bb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'TeacherConnect helped me find my dream job within 2 weeks! The platform is user-friendly and the opportunities are genuine.',
      testimonialHindi: 'टीचर कनेक्ट ने मुझे 2 सप्ताह में मेरी ड्रीम जॉब दिलाई! यह प्लेटफॉर्म बहुत अच्छा है और अवसर वास्तविक हैं।'
    },
    {
      name: 'Dr. Rahul Gupta',
      role: 'Physics Professor',
      school: 'St. Xavier\'s College, Mumbai',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Excellent platform for experienced teachers. I got multiple interview calls and landed a senior position with better package.',
      testimonialHindi: 'अनुभवी शिक्षकों के लिए बेहतरीन प्लेटफॉर्म। मुझे कई इंटरव्यू कॉल मिले और बेहतर पैकेज के साथ सीनियर पोजीशन मिली।'
    },
    {
      name: 'Ms. Priya Singh',
      role: 'English Teacher',
      school: 'Kendriya Vidyalaya, Delhi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'As a fresher, I was worried about finding a good teaching job. TeacherConnect made it easy with their excellent support.',
      testimonialHindi: 'एक नए शिक्षक के रूप में, मुझे अच्छी टीचिंग जॉब मिलने की चिंता थी। टीचर कनेक्ट ने बेहतरीन सपोर्ट के साथ इसे आसान बना दिया।'
    },
    {
      name: 'Prof. Anjali Sharma',
      role: 'Chemistry HOD',
      school: 'Ryan International School, Gurgaon',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Great platform with verified schools and transparent processes. I recommend it to all teaching professionals.',
      testimonialHindi: 'सत्यापित स्कूलों और पारदर्शी प्रक्रियाओं के साथ बेहतरीन प्लेटफॉर्म। मैं इसे सभी शिक्षण पेशेवरों को सुझाती हूं।'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          What Teachers Say
        </h1>
        <p className="text-2xl text-gray-600">शिक्षकों के विचार</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Read success stories from thousands of teachers who found their dream jobs through our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-orange-600 font-medium">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.school}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-orange-200" />
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-4 space-y-3">
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                <p className="text-gray-600 text-sm italic">"{testimonial.testimonialHindi}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
