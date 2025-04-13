
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Set active section based on scroll position
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-elomfit-primary">
            <span className="text-elomfit-light">E</span>LOMFIT
          </a>
        </div>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center space-y-8 text-xl">
                  <a 
                    href="#home" 
                    onClick={() => scrollToSection('home')}
                    className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    onClick={() => scrollToSection('about')}
                    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  >
                    About
                  </a>
                  <a 
                    href="#services" 
                    onClick={() => scrollToSection('services')}
                    className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                  >
                    Services
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={() => scrollToSection('testimonials')}
                    className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => scrollToSection('contact')}
                    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  >
                    Contact
                  </a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-10">
            <a 
              href="#home" 
              onClick={() => scrollToSection('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => scrollToSection('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => scrollToSection('services')}
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              onClick={() => scrollToSection('testimonials')}
              className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
