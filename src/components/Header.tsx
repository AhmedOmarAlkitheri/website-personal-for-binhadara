
import React from "react";
import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 flex items-center justify-between",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="font-heading font-bold text-xl md:text-2xl text-portfolio-primary">
        Your Name
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <button 
            key={link.id}
            className="text-gray-700 hover:text-portfolio-primary transition-colors"
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <SocialIcons className="hidden md:flex" />
        <Button 
          variant="outline" 
          className="md:hidden" 
          onClick={() => window.alert("Mobile menu would open here")}
        >
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
