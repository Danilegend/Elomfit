
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/7293d3da-2b1a-46b6-a9c1-a80841c94d43.png')",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Life with Elomfit
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Professional personal training tailored to your fitness goals in Turku, Finland.
          </p>
          <button 
            onClick={scrollToContact} 
            className="btn-secondary group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-10 rounded-full bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
