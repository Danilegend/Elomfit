
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and brief description */}
          <div>
            <div className="mb-4">
              <a href="#home" className="text-2xl font-bold">
                <span className="text-elomfit-light">E</span>LOMFIT
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Professional personal training services in Turku, Finland. Transform your life with customized fitness programs.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Turku, Finland</p>
              <p>040 620 1515</p>
              <p>elomfit@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Elomfit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
