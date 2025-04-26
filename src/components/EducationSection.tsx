
import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  years: string;
  description: string;
  achievements?: string[];
}

const EducationSection: React.FC = () => {
  const educationHistory: Education[] = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      years: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on computer vision applications.",
      achievements: [
        "Graduated with highest honors",
        "Published research paper on machine learning algorithms",
        "Received scholarship for outstanding academic performance"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "National University",
      years: "2014 - 2018",
      description: "Comprehensive study of software development methodologies, data structures, algorithms, and system design.",
      achievements: [
        "Completed capstone project with distinction",
        "Member of the university programming team",
        "Dean's List for all semesters"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <div className="space-y-8">
          {educationHistory.map((education, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex justify-center">
                  <div className="w-12 h-12 bg-portfolio-light rounded-full flex items-center justify-center">
                    <GraduationCap className="text-portfolio-primary" size={24} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-portfolio-primary">
                    {education.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                    <div className="font-medium text-gray-700">
                      {education.institution}
                    </div>
                    <div className="flex items-center text-gray-500 mt-1 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>{education.years}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-700">
                    {education.description}
                  </p>
                  
                  {education.achievements && (
                    <div className="mt-4">
                      <h4 className="font-medium flex items-center text-gray-700">
                        <Award size={16} className="mr-2" />
                        Achievements
                      </h4>
                      <ul className="mt-2 space-y-1 text-gray-600 pl-6 list-disc">
                        {education.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
