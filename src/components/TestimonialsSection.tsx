
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mikko L.',
    position: 'Weight Loss Client',
    testimonial: "Working with Elomfit has been transformative! I've lost 15kg and gained so much confidence. The personalized approach made all the difference.",
    image: '/lovable-uploads/843aa0c9-ac3d-421c-9b6b-8b156fcb2880.png' // Using one of the uploaded images
  },
  {
    name: 'Saara T.',
    position: 'Fitness Enthusiast',
    testimonial: "The group sessions are challenging but so much fun. I've seen major improvements in my strength and endurance in just a few months.",
    image: '/lovable-uploads/843aa0c9-ac3d-421c-9b6b-8b156fcb2880.png' // Using one of the uploaded images
  },
  {
    name: 'Johannes K.',
    position: 'Sports Performance',
    testimonial: 'As an athlete, I needed specific training to improve my performance. Elomfit delivered exactly what I needed with expert coaching and support.',
    image: '/lovable-uploads/843aa0c9-ac3d-421c-9b6b-8b156fcb2880.png' // Using one of the uploaded images
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-elomfit-primary/5 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elomfit-dark animate-on-scroll opacity-0">
            Client <span className="text-elomfit-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-elomfit-accent mx-auto mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-gray-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            Hear what my clients have to say about their fitness journey with Elomfit.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full p-6 md:p-10"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
                    <Quote className="absolute text-elomfit-primary/10 h-20 w-20 -top-4 -left-4" />
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-elomfit-light">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="object-cover w-full h-full"  
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.testimonial}"</p>
                        <div>
                          <h4 className="font-bold text-lg text-elomfit-dark">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-elomfit-primary" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-elomfit-primary" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-colors ${current === index ? 'bg-elomfit-primary' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
