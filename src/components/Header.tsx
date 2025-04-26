import React from "react";
import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

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
    { name: "التعليم", id: "education" },
    { name: "المهارات", id: "skills" },
    { name: "المشاريع", id: "projects" },
    { name: "معلومات التواصل", id: "contact" }
  ];
  
  return (
    <header
    className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 flex items-center justify-between",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}
  >
    <div className="inline-block font-heading font-bold text-xl md:text-2xl text-portfolio-primary">
      مطور تطبيقات. بن حيدرة
    </div>

    {/* قائمة التنقل العادية (للشاشات الكبيرة) */}
    <div
      dir="rtl"
      className="hidden md:flex items-center space-x-8 space-x-reverse flex-wrap"
    >
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

    {/* أيقونات السوشال وزر المينيو */}
    <div className="flex items-center space-x-4">
      <SocialIcons className="hidden md:flex" />
      <Button
        variant="outline"
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        قائمة
      </Button>
    </div>

    {/* المينيو المنسدلة للجوال */}
    {menuOpen && (
      <div
        dir="rtl"
        className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col items-start space-y-4 md:hidden"
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="text-gray-700 hover:text-portfolio-primary transition-colors w-full text-right"
            onClick={() => {
              scrollToSection(link.id);
              setMenuOpen(false);
            }}
          >
            {link.name}
          </button>
        ))}
      </div>
    )}
  </header>
  
  );
};

export default Header;

