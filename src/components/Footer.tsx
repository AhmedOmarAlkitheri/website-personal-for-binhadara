
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-bold"> مطور تطبيقات.بن حيدرة</h3>
            <p className="mt-2 text-gray-300 max-w-md">
            إذا كان لديك أي استفسار أو تواجه أي مشكلة في مجال تطوير تطبيقات الموبايل باستخدام Flutter، لا تتردد في التواصل معي عبر منصات التواصل الاجتماعي.
            
أما إذا كنت بحاجة إلى تنفيذ مهمة محددة أو إضافة ميزة معينة أو تطوير جزء من مشروعك، وأنت تبحث عن شخص ينجزها باحترافية وبكتابة كود نظيف (Clean Code)، فأنا هنا لمساعدتك.

حالياً أركز على تنفيذ المهام والمزايا المطلوبة في تطوير تطبيقات الموبايل، وسأسعى مستقبلاً إلى بناء تطبيقات ومواقع كبيرة بمستوى عالٍ من الجودة والاحترافية.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialIcons className="mb-4" />
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} مطور تطبيقات.بن حيدرة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
