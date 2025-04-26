
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
      value: "www.yourwebsite.com",
    },
    {
      icon: <Mail className="text-portfolio-primary" size={24} />,
      label: " البريد الألكتروني ",
      value: "a.o.a.770284548@gmail.com",
    },

  ];

  return (
    <section id="contact" className="w-full py-20 bg-white px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
        التواصل
      </h2>
      <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
  
     
        {/* Contact Information */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-portfolio-primary">معلومات التواصل</h3>
  
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.label}</h4>
                    <p className="text-gray-700">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
  
        {/* Optional: Google Map Card (معلق بالكود حقك) */}
        {/* 
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label="Location Map"
            />
          </CardContent>
        </Card> 
        */}
   
    </div>
  </section>
  
  );
};

export default ContactSection;
