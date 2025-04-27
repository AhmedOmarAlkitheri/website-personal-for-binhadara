
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          نبذة عني
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <Card className="p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">من أنا</h3>
              <p className="text-gray-700 mb-6">
                أنا مطور تطبيقات متحمس مع خلفية قوية في تطوير تطبيقات الموبايل باستخدام Flutter. 
                مع خبرة في مجال التقنية، اكتسبت فهمًا عميقًا لكيفية بناء تطبيقات فعالة وسهلة الاستخدام.
              </p>
              <p className="text-gray-700">
                ينهجي في العمل يجمع بين الخبرة التقنية وحل المشكلات بطريقة إبداعية. أؤمن بكتابة كود نظيف 
                وقابل للصيانة وإنشاء تجارب مستخدم بديهية. عندما لا أكون أقوم بالبرمجة، أستمتع بالتنزه والقراءة واستكشاف 
                التقنيات الجديدة.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">خبراتي</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="ml-2 text-portfolio-primary">•</span>
                  <span>بناء تطبيقات موبايل متكاملة باستخدام Flutter</span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 text-portfolio-primary">•</span>
                  <span>تطوير واجهات مستخدم سلسة وجذابة</span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 text-portfolio-primary">•</span>
                  <span>التعامل مع قواعد البيانات وإدارتها</span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 text-portfolio-primary">•</span>
                  <span>تطبيق أنماط تصميم واجهة المستخدم/تجربة المستخدم الحديثة</span>
                </li>
                <li className="flex items-start">
                  <span className="ml-2 text-portfolio-primary">•</span>
                  <span>إدارة دورة تطوير البرمجيات الكاملة</span>
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
