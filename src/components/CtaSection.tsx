
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-elomfit-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Don't wait—start your transformation today!
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, stronger, and more confident you. Let's achieve your fitness goals together.
          </p>
          <button 
            onClick={scrollToContact} 
            className="btn-secondary group"
          >
            Contact Me
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
