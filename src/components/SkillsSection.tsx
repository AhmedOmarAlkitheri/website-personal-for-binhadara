
import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb } from "lucide-react";

interface Skill {
  name: string;
  description: string;
}

const SkillsSection: React.FC = () => {
  const programmingLanguages: Skill[] = [
    { 
      name: "JavaScript/TypeScript",
      description: "Web & Mobile Development"
    },
    { 
      name: "Python",
      description: "Data Analysis & Backend Development"
    },
    { 
      name: "Java",
      description: "Enterprise Applications"
    },
    { 
      name: "C++",
      description: "System Programming"
    }
  ];

  const technicalSkills: Skill[] = [
    { 
      name: "React & React Native",
      description: "Frontend & Mobile Development"
    },
    { 
      name: "Node.js & Express",
      description: "Backend Development"
    },
    { 
      name: "AWS & Cloud Services",
      description: "Cloud Infrastructure"
    },
    { 
      name: "DevOps & CI/CD",
      description: "Development Operations"
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-10 bg-gradient-to-br from-portfolio-light to-white"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-secondary mb-12">
          My Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-portfolio-primary" />
              <h3 className="text-2xl font-heading font-semibold text-portfolio-secondary">
                Programming Languages
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
                  <p className="text-gray-600">
                    {skill.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-portfolio-primary" />
              <h3 className="text-2xl font-heading font-semibold text-portfolio-secondary">
                Technical Skills
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
                  <p className="text-gray-600">
                    {skill.description}
                  </p>
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
