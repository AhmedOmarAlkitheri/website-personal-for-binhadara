
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Globe, Mail, Send, HomeIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    console.log("Form submitted:", formState);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormState({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    
    
      { 
        icon: <MapPin className="text-portfolio-primary" size={24} />, 
        label: " العنوان ", 
        value: "حضرموت - شبام - وادي بن علي"
      },
    {
      icon: <Phone className="text-portfolio-primary" size={24} />,
      label: " رقم الجوال ",
      value: "730280622 967+",
    },
    {
      icon: <Globe className="text-portfolio-primary" size={24} />,
      label: " الموقع الألكتروني الشخصي ",
      value: "https://remarkable-hummingbird-49e0e1.netlify.app",
     // "http://website-personal-for-binhadara.lovable.app",
    },
    {
      icon: <Mail className="text-portfolio-primary" size={24} />,
      label: " البريد الألكتروني ",
      value: "a.o.a.770284548@gmail.com",
    },

  ];

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-white via-gray-50 to-white px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-portfolio-dark mb-6 tracking-wide">
        تواصل معي
      </h2>
      <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-14 rounded-full"></div>
  
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Contact Information */}
        <Card className="w-full md:w-2/3 bg-white shadow-2xl rounded-3xl transition hover:scale-105 duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6 text-center">
              معلومات التواصل
            </h3>
  
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-portfolio-primary text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">{info.label}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  
  
  );
};

export default ContactSection;
