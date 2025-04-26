
import React from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface ProgrammingLanguage {
  name: string;
  level: number;
  icon?: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Web Development", level: 90 },
    { name: "Mobile Development", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Management", level: 85 },
    { name: "Cloud Services", level: 75 },
  ];

  const languages: ProgrammingLanguage[] = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "PHP", level: 80 },
    { name: "C#", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-light px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-portfolio-primary mb-8 text-center md:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-portfolio-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-portfolio-primary mb-8 text-center md:text-left">
              Programming Languages
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{language.name}</span>
                    <span className="text-portfolio-primary font-medium">{language.level}%</span>
                  </div>
                  <Progress value={language.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
