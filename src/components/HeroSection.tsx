
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
            اسمي,<span className="text-portfolio-primary">أحمد عمر بن حيدرة</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
          مطور تطبيقات و أنظمة ذات إمكانية متوسط في تطوير التطبيقات و الأنظمة أتميز بقدرتي على التعلم السريع وحل المشكلات التقنية، وأسعى لاكتساب خبرة عملية في بيئة مهنية تدعم الابتكار والتطوير. أطمح للعمل ضمن فريق يتيح لي تطبيق مهاراتي والمساهمة في إنجاز مشاريع ذات جودة عالية.
          </p>
          <link rel="stylesheet" href= "https://Wa.me/967730280622" title="as" />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button 
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
              onClick={() => "https://Wa.me/967730280622"
                // scrollToSection("contact")
              }
            >
             تواصل معي
            </Button>
          
            {/* <Button 
              variant="outline" 
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button> */}
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 

              src="src/components/images/personImage.png" 
              alt="Eng.BinHadara" 
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
