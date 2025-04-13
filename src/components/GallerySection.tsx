
import React, { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Images } from 'lucide-react';

// Gallery images
const galleryImages = [
  {
    src: "/lovable-uploads/94437f27-31c9-4a44-9dca-c5d7e563e9b2.png",
    alt: "Personal trainer outdoors",
    caption: "Outdoor training sessions"
  },
  {
    src: "/placeholder.svg",
    alt: "Group fitness class",
    caption: "Group fitness classes"
  },
  {
    src: "/placeholder.svg",
    alt: "Strength training",
    caption: "Strength training"
  },
  {
    src: "/placeholder.svg",
    alt: "Weight loss coaching",
    caption: "Weight loss coaching"
  },
  {
    src: "/placeholder.svg",
    alt: "Performance coaching",
    caption: "Performance coaching"
  }
];

const GallerySection = () => {
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
      id="gallery" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elomfit-dark animate-on-scroll opacity-0">
            Photo <span className="text-elomfit-primary">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-elomfit-accent mx-auto mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}></div>
          <div className="flex items-center justify-center gap-2 mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            <Images className="h-5 w-5 text-elomfit-primary" />
            <p className="text-gray-600 text-lg">
              See Elomfit training in action
            </p>
          </div>
        </div>

        <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="aspect-square relative overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="object-cover h-full w-full transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <p className="text-sm font-medium text-gray-700">{image.caption}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static transform-none mx-2 bg-elomfit-primary text-white hover:bg-elomfit-dark" />
              <CarouselNext className="relative static transform-none mx-2 bg-elomfit-primary text-white hover:bg-elomfit-dark" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
