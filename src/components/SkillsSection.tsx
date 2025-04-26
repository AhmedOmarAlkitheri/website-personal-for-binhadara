
import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb } from "lucide-react";

interface Skill {
  name: string;
  description: string ;
}

const SkillsSection: React.FC = () => {
 
  const technicalSkills: Skill[] = [
    { 
      name: "تطوير تطبيقات الموبايل",
      description:"باستخدام Flutter و Dart.",
    },
    { 
      name: "إدارة قواعد البيانات:  NoSQL AND DBMS",
      description: "(Firebase,Supabase,SqlFlite,Oracle,SqlServer,MySql)"
    },
    { 
      name: "التعامل مع APIs",
      description: "التعامل مع العمليات الاساسية (PUT,POST,GET,DELETE,PATCH)و العمليات الاخرى."
    },
    { 
      name: "استخدام أدوات التحكم بالإصدارات",
      description: "مثل GIT AND GitHub."
    }
  ];
  const programmingLanguages: Skill[] = [
    { 
      name: "Dart",
     description:"",
    },
    { 
      name: "#C",
      description:"",
    },
    { 
      name: "PHP",
      description:"",
    },
    { 
      name: "++C",
      description:"",
    }
  ];

  return (
    <section 
    id="skills" 
    className="py-20 px-6 md:px-10 bg-gradient-to-br from-portfolio-light to-white"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-secondary mb-12">
        المهارات
      </h2>
  
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Technical Skills Section */}
        <div className="w-full md:w-[70%] space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-portfolio-primary" />
            <h3 className="text-2xl font-heading font-semibold text-portfolio-secondary">
              المهارات التقنية
            </h3>
          </div>
          <div className="grid gap-4">
            {technicalSkills.map((skill, index) => (
              <Card 
                key={index} 
                className="p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-portfolio-primary"
              >
                <h4 className="font-heading font-semibold text-lg text-portfolio-secondary mb-1">
                  {skill.name}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
  
        {/* Programming Languages Section */}
        <div className="w-full md:w-[30%] space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-portfolio-primary" />
            <h3 className="text-2xl font-heading font-semibold text-portfolio-secondary">
              لغات البرمجة
            </h3>
          </div>
          <div className="grid gap-4">
            {programmingLanguages.map((skill, index) => (
              <Card 
                key={index} 
                className="p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-portfolio-primary"
              >
                <h4 className="font-heading font-semibold text-lg text-portfolio-secondary mb-1">
                  {skill.name}
                </h4>
                <p className="text-gray-600">{skill.description}</p>
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
