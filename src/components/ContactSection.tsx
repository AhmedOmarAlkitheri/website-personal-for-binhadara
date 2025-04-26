
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
      value: "730280622 967 +",
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
    <section id="contact" className="py-20 bg-white px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-portfolio-dark mb-4">
          التواصل
        </h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-portfolio-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-portfolio-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] border-gray-300 focus:border-portfolio-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
          
          {/* Contact Information */}
          <div>
            <Card className="shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-primary mb-6">معلومات التواصل</h3>
                
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
            
            {/* <Card className="shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03606260403!2d-74.25987584776404!3d40.69767006792443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1638547817556!5m2!1sen!2sca"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  aria-label="Location Map"
                />
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
