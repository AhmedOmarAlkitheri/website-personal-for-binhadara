
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, LanguagesIcon, HomeIcon } from "lucide-react";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "" }) => {
  const socialLinks = [
    { 
      icon: <Mail size={18} />, 
      href: window.location.href = "mailto:a.o.a.770284548@gmail.com", 
   
      label: "Email"
    },
    { 
      icon: <Linkedin size={18} />, 
      href: window.location.href = "https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D9%83%D8%AB%D9%8A%D8%B1%D9%8A-194127317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      label: "LinkedIn"
    },
    { 
      icon: <Github size={18} />, 
      href: window.location.href = "https://github.com/AhmedOmarAlkitheri", 
      label: "GitHub"
    },
    { 
      icon: <Phone size={18} />, 
      href: "tel:+967730280622", 
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
