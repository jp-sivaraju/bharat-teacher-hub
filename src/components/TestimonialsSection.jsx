
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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
    },
    {
      name: 'Mr. Vikram Choudhary',
      role: 'Computer Science Teacher',
      school: 'Delhi Public School, Noida',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Found multiple opportunities in tech education. The matching algorithm is impressive and connects you with relevant positions.'
    },
    {
      name: 'Ms. Lakshmi Iyer',
      role: 'Tamil Literature Teacher',
      school: 'Chettinad Vidyashram, Chennai',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Being able to teach in my mother tongue was important to me. This platform helped me find schools that value regional languages.'
    }
  ];

  return (
    <div id="testimonials" className="scroll-mt-24">
      <div className="text-center space-y-6 mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          What Teachers Say
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Read success stories from thousands of teachers who found their dream jobs through our platform.
        </p>
      </div>

      <Carousel 
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
              <div className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-border overflow-hidden h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground truncate">{testimonial.name}</h3>
                      <p className="text-primary font-medium truncate">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground truncate">{testimonial.school}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                  </div>
                  
                  <div className="bg-accent rounded-xl p-6 flex-1 flex items-center">
                    <p className="text-foreground italic leading-relaxed">"{testimonial.testimonial}"</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-card/90 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary" />
        <CarouselNext className="right-4 bg-card/90 border-primary/30 hover:bg-primary/10 hover:text-primary hover:border-primary" />
      </Carousel>
    </div>
  );
};
