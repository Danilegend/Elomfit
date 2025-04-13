
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

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
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elomfit-dark animate-on-scroll opacity-0">
            Get <span className="text-elomfit-primary">In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-elomfit-accent mx-auto mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-gray-600 text-lg animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            Ready to start your fitness journey? Reach out and let's discuss how I can help you reach your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-elomfit-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-elomfit-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-elomfit-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-elomfit-dark">Phone</h4>
                    <p className="text-gray-600">040 620 1515</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-elomfit-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-elomfit-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-elomfit-dark">Email</h4>
                    <p className="text-gray-600">elomfit@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-elomfit-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-elomfit-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-elomfit-dark">Location</h4>
                    <p className="text-gray-600">Turku, Finland</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-elomfit-dark mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-elomfit-primary hover:bg-elomfit-dark text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-elomfit-primary hover:bg-elomfit-dark text-white p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.5s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-elomfit-dark">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-elomfit-primary"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-elomfit-primary"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-elomfit-primary min-h-[150px]"
                    placeholder="How can I help you?"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className={`mt-6 btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
