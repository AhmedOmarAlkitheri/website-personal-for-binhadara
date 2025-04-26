
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, user authentication, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1517430816045-df4ccef2c7ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides accurate forecasts, interactive maps, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React Native", "OpenWeather API", "GeoLocation"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Personal Finance Tracker",
      description: "An application for tracking expenses, income, investments, and setting financial goals with visual analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Angular", "Express", "PostgreSQL", "D3.js"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/finance-tracker"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          Projects
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-primary mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-portfolio-light text-portfolio-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-portfolio-primary border-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.repoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-gray-700 hover:bg-gray-100"
                      asChild
                    >
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
