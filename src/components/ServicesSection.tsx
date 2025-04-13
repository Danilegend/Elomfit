
import React, { useEffect, useRef } from 'react';
import { Dumbbell, Users, Weight, Activity, Heart, BarChart3 } from 'lucide-react';

const serviceData = [
  {
    icon: <Dumbbell className="h-10 w-10 text-elomfit-primary" />,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific fitness goals, with personalized attention and guidance.'
  },
  {
    icon: <Users className="h-10 w-10 text-elomfit-primary" />,
    title: 'Group Training',
    description: 'Motivating group sessions that combine fun and effective workouts designed for all fitness levels.'
  },
  {
    icon: <Weight className="h-10 w-10 text-elomfit-primary" />,
    title: 'Weight Loss Coaching',
    description: 'Strategic programs combining exercise and nutrition guidance to help you achieve sustainable weight loss.'
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-elomfit-primary" />,
    title: 'Muscle Building',
    description: 'Specialized strength training protocols designed to build muscle mass and improve body composition.'
  },
  {
    icon: <Activity className="h-10 w-10 text-elomfit-primary" />,
    title: 'Performance Coaching',
    description: 'Advanced training techniques to enhance athletic performance for sports and competitive activities.'
  },
  {
    icon: <Heart className="h-10 w-10 text-elomfit-primary" />,
    title: 'Lifestyle & Habit Change',
    description: 'Holistic approach to fitness that includes lifestyle coaching to build sustainable healthy habits.'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="services" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elomfit-dark animate-on-scroll opacity-0">
            My <span className="text-elomfit-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-elomfit-accent mx-auto mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-gray-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            Discover how my personalized training services can help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow animate-on-scroll opacity-0 border-t-4 border-elomfit-primary"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-elomfit-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
