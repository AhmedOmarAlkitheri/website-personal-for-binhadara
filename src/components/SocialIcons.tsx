
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, LanguagesIcon } from "lucide-react";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {
  const socialLinks = [
    { 
      icon: <Mail size={18} />, 
      href: "mailto:youremail@example.com", 
      label: "Email"
    },
    { 
      icon: <Linkedin size={18} />, 
      href: "https://linkedin.com/in/yourprofile", 
      label: "LinkedIn"
    },
    { 
      icon: <Github size={18} />, 
      href: "https://github.com/yourusername", 
      label: "GitHub"
    },
    { 
      icon: <Phone size={18} />, 
      href: "tel:+1234567890", 
      label: "Phone"
    },

  //   { 
  //  //   icon: <aricon size={18} />, 
    
  //     onclick:"changeLanguage('en')",
  //     label: "English"
  //   },
  //   { 
  //     icon: <arabic size={18} />, 
     

  //     onclick: "changeLanguage('ar')",
  //     label: "العربية"
  //   }
  
  ];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {socialLinks.map((link, index) => (
        <Button 
          key={index}
          size="icon" 
          variant="ghost" 
          className="rounded-full h-9 w-9 hover:bg-portfolio-light hover:text-portfolio-primary"
          asChild
        >
          <a 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialIcons;
