
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
      testimonial: 'TeacherConnect helped me find my dream job within 2 weeks! The platform is user-friendly and the opportunities are genuine.'
    },
    {
      name: 'Dr. Rahul Gupta',
      role: 'Physics Professor',
      school: 'St. Xavier\'s College, Mumbai',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Excellent platform for experienced teachers. I got multiple interview calls and landed a senior position with better package.'
    },
    {
      name: 'Ms. Priya Singh',
      role: 'English Teacher',
      school: 'Kendriya Vidyalaya, Delhi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'As a fresher, I was worried about finding a good teaching job. TeacherConnect made it easy with their excellent support.'
    },
    {
      name: 'Prof. Anjali Sharma',
      role: 'Chemistry HOD',
      school: 'Ryan International School, Gurgaon',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Great platform with verified schools and transparent processes. I recommend it to all teaching professionals.'
    }
  ];

  return (
    <div id="testimonials" className="scroll-mt-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-brand-700 bg-clip-text text-transparent">
          What Teachers Say
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Read success stories from thousands of teachers who found their dream jobs through our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-card rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-border overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-border"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-muted" />
              </div>
              
              <div className="bg-gradient-to-r from-secondary to-muted rounded-xl p-6">
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.testimonial}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
