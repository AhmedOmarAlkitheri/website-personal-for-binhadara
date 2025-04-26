
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-portfolio-light px-6 md:px-10 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-portfolio-dark">
            Hi, I'm <span className="text-portfolio-primary">Your Name</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            I'm a developer passionate about creating beautiful and functional web applications. With expertise in various programming languages and frameworks, I build solutions that solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button 
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown className="text-portfolio-primary" size={30} />
      </button>
    </section>
  );
};

export default HeroSection;
