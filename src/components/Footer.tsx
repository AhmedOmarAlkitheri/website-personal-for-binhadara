
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-bold">Your Name</h3>
            <p className="mt-2 text-gray-300 max-w-md">
              Building elegant solutions for complex problems through modern web and mobile development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialIcons className="mb-4" />
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
