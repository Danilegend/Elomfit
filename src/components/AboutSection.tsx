
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
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
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elomfit-dark animate-on-scroll opacity-0">
            About <span className="text-elomfit-primary">Elomfit</span>
          </h2>
          <div className="w-20 h-1 bg-elomfit-accent mx-auto mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            <img 
              src="/lovable-uploads/94437f27-31c9-4a44-9dca-c5d7e563e9b2.png" 
              alt="Elomfit Trainer" 
              className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-elomfit-dark">My Philosophy</h3>
            <p className="text-gray-700 mb-6 text-lg">
              At Elomfit, fitness is about transforming your life, not just working out. Whether you want to lose weight, build muscle, or improve your sports performance, I'll create a personalized plan to help you get real, lasting results.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Elomfit is for everyone—whether you're a beginner, an athlete, or looking to improve your lifestyle. My approach combines effective training techniques with personalized guidance to help you achieve sustainable fitness results.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-elomfit-accent rounded-full mr-2"></div>
                <span className="text-gray-800 font-medium">Personalized Approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-elomfit-accent rounded-full mr-2"></div>
                <span className="text-gray-800 font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-elomfit-accent rounded-full mr-2"></div>
                <span className="text-gray-800 font-medium">Lasting Results</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-elomfit-accent rounded-full mr-2"></div>
                <span className="text-gray-800 font-medium">All Fitness Levels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
