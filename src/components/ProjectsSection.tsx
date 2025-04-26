
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
      title:"تطبيق لمركز رواد المستقبل",
      description: "تطبيق خاص بطلاب المركز لادارة عمليات التسجيل و تلقي الاشعارات من الادارة و عرض معلومات السكن و عدد الطلاب المتواجدين معه في نفس الغرفة و ايضاء ميزة ارسال الشكاوي و تلقي الرد و يستطيع الطالب الاطلاع على تقييمات البرامج المشترك فيها سوا كانت (شهريه او نصفيه او سنويه ) و يحتوي التطبيق على ميزة (Dark Theme , Light Theme) و غيرها من مهام التي يقوم بها الطالب و يستعرضها التطبيق .",
      image: "src/components/images/ALRawad.jpg",
     
      tags: ["Flutter", "Dart", "MySql", "Working with API"],
     
    },
    {
      title: "نظام فلزة",
      description: " نظام إلكتروني لأدارة نقل الركاب و البضائع ويستطيع من خلال هذا النظام تحديد ما اذا كانت المركب تعمل او لا و يستطيع معرفة من هو الموظف الذي قام بعمليات في  يوم معين و غيرها من الوظائف و المهام التي ينفذها النظام.",
      image: "https://images.unsplash.com/photo-1517430816045-df4ccef2c7ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["#C", "SqlServer","Oracle" ,"Net FrameWork."],
   
    },
    {
      title: "تطبيق متجر إلكتروني",
      description: "تطبيق متجر إلكتروني خاص بالعميل (Client) حيث يستطيع العميل شراء منتجات تكون تابعه لصنف معين لبراند معين و يحتوي على خصومات لمنتجات معينه و يحتوي على Banner  لأعلان عن منتج و يحتوي على الكثير من المميزات مثل يقدر العميل معرفة جميع الطلبات التي تم شراوها او تم إلغائها من قبل العميل و ميزت ال Theme (Dart,Light) وغيرها من العمليات والوظائف .",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Flutter", "Dart", "Firebase","Supabase"],
      // demoUrl: "https://example.com",
      // repoUrl: "https://github.com/yourusername/weather-app"
    },
    {
      title: "نظام إلكتروني لأدارة حلقات تحفيظ القران الكريم للمؤسسة",
      description: "من خلال هذا النظام يسمح بادارة مراكز التحفيظ التابعة لها والاشراف على الحلقات و التواصل بين الاعضاء بشكل سهل وإعطاء صلاحيات مختلفة للمستخدمين وإنشاء التقارير المختلفة وإسترجاع او إنشاء نسخة من قاعدة البيانات وغيرها من المهام الموجوده في النظام",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags:  ["#C", "SqlServer","Crystal Report" ,".Net FrameWork"],
      // demoUrl: "https://example.com",
      // repoUrl: "https://github.com/yourusername/finance-tracker"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          مشاريعي
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>

<div className="grid md:grid-cols-2 gap-8">
  {projects.map((project, index) => (
    <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      
    
      <div className="h-64 w-full overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title} 
    className="w-full h-full object-fill transition-transform duration-500 hover:scale-105"
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
      </CardContent>
    </Card>
  ))}
</div>


      </div>
    </section>
  );
};

export default ProjectsSection;
