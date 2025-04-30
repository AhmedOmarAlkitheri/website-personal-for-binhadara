
import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Skill {
  name: string;
  description: string;
  isArabic?: boolean;
}

const SkillsSection: React.FC = () => {
  const isMobile = useIsMobile();
 
  const technicalSkills: Skill[] = [
    { 
      name: "تطوير تطبيقات الموبايل",
      description: "باستخدام Flutter و Dart.",
      isArabic: true
    },
    { 
      name: "إدارة قواعد البيانات: NoSQL AND DBMS",
      description: "(Firebase,Supabase,SqlFlite,Oracle,SqlServer,MySql)",
      isArabic: true
    },
    { 
      name: "التعامل مع APIs",
      description: "التعامل مع العمليات الاساسية (PUT,POST,GET,DELETE,PATCH)و العمليات الاخرى.",
      isArabic: true
    },
    { 
      name: "استخدام أدوات التحكم بالإصدارات",
      description: "مثل GIT AND GitHub.",
      isArabic: true
    }
  ];
  
  const programmingLanguages: Skill[] = [
    { 
      name: "Dart",
      description: "",
      isArabic: false
    },
    { 
      name: "C#",
      description: "",
      isArabic: false
    },
    { 
      name: "PHP",
      description: "",
      isArabic: false
    },
    { 
      name: "C++",
      description: "",
      isArabic: false
    }
  ];

  // Function to detect if text is Arabic
  const isArabicText = (text: string) => {
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  };

  return (
    <section 
      id="skills" 
      className="py-12 md:py-16 px-4 md:px-10 bg-gradient-to-br from-portfolio-light to-white"
      dir="rtl" // Default to RTL for the section
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-secondary mb-10">
          المهارات
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Technical Skills Section */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-3 mb-4" dir="rtl">
              <Lightbulb className="w-7 h-7 text-portfolio-primary" />
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-portfolio-secondary">
                المهارات التقنية
              </h3>
            </div>

            <div className="max-h-[400px] overflow-y-auto pr-1 pb-2">
              <div className="grid gap-3">
                {technicalSkills.map((skill, index) => (
                  <Card 
                    key={index} 
                    className={`p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-r-4 border-r-portfolio-primary ${
                      skill.isArabic ? "text-right" : "text-left"
                    }`}
                    dir={skill.isArabic ? "rtl" : "ltr"}
                  >
                    <h4 className="font-heading font-semibold text-base md:text-lg text-portfolio-secondary mb-1">
                      {skill.name}
                    </h4>
                    {skill.description && (
                      <p className="text-sm md:text-base text-gray-600 break-words">
                        {skill.description}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Programming Languages Section */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="flex items-center gap-3 mb-4" dir="rtl">
              <Code className="w-7 h-7 text-portfolio-primary" />
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-portfolio-secondary">
                لغات البرمجة
              </h3>
            </div>
            <div className="grid gap-3">
              {programmingLanguages.map((skill, index) => (
                <Card 
                  key={index} 
                  className={`p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-r-4 border-r-portfolio-primary ${
                    skill.isArabic ? "text-right" : "text-left"
                  }`}
                  dir={skill.isArabic ? "rtl" : "ltr"}
                >
                  <h4 className="font-heading font-semibold text-base md:text-lg text-portfolio-secondary">
                    {skill.name}
                  </h4>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
