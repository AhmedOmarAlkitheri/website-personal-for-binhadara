
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          نبذه عني
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <Card className="p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">Who I Am</h3>
              <p className="text-gray-700 mb-6">
                I am a passionate developer with a strong background in web development, mobile applications, and software engineering. 
                With years of experience in the tech industry, I've developed a deep understanding of how to build efficient and 
                user-friendly applications.
              </p>
              <p className="text-gray-700">
                My approach to work combines technical expertise with creative problem-solving. I believe in writing clean, 
                maintainable code and creating intuitive user experiences. When I'm not coding, I enjoy hiking, reading, and 
                exploring new technologies.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">My Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span>Building responsive and accessible web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span>Developing cross-platform mobile applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span>Creating efficient backend APIs and database designs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span>Implementing modern UI/UX design patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span>Managing the full software development lifecycle</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
