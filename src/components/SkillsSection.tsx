
import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Paintbrush, Cloud } from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ReactNode;
  description: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: "Web Development", 
      icon: <Code className="w-6 h-6 text-portfolio-primary" />,
      description: "Frontend and Backend Development"
    },
    { 
      name: "Mobile Development", 
      icon: <Code className="w-6 h-6 text-portfolio-primary" />,
      description: "iOS and Android Development"
    },
    { 
      name: "UI/UX Design", 
      icon: <Paintbrush className="w-6 h-6 text-portfolio-primary" />,
      description: "User Interface and Experience Design"
    },
    { 
      name: "Graphic Design", 
      icon: <Paintbrush className="w-6 h-6 text-portfolio-primary" />,
      description: "Visual Design and Branding"
    },
    { 
      name: "Design Other", 
      icon: <Paintbrush className="w-6 h-6 text-portfolio-primary" />,
      description: "Additional Design Services"
    },
    { 
      name: "Cloud Services", 
      icon: <Cloud className="w-6 h-6 text-portfolio-primary" />,
      description: "Cloud Infrastructure and Deployment"
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-10"
      style={{ 
        background: 'linear-gradient(135deg, #FFF4E6 0%, #FFE6D0 100%)' 
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-secondary mb-4">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-portfolio-primary/10 hover:border-portfolio-primary"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-portfolio-light rounded-full">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-portfolio-secondary">
                  {skill.name}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
