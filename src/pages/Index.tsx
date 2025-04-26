
import React, { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
     {/*    <AboutSection /> */}
     <EducationSection />
        <SkillsSection />
       
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

