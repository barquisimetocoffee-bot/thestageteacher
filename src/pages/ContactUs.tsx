import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";

const ContactUs = () => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,

      title: "Email Us",
      details: "support@ecerta.com",
      description: "Get in touch for general inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our support team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Education Street, Tech City, TC 12345",
      description: "Our headquarters location",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "When we're available to help",
    },
  ];

  return (
    <>
      <Navigation onShowLogin={() => setShowLogin(true)} />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <ScrollInFromBottom delay={0.3}>
                <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Contact
                  <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Us
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We'd love to hear from you. Get in touch with our team for
                  support, partnerships, or any questions about Ecerta.
                </p>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="group shadow bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-tr rounded-bl-sm   group-hover:scale-105 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{info.title}</h2>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 my-2 text-base/6">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-base/6 pt-2">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <ScrollInFromBottom delay={0.3}>
              <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow bg-gray-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            placeholder="John Doe"
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="border border-gray-200 focus:outline-none py-6"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            placeholder="johndoe@gmail.com"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="border border-gray-200 focus:outline-none py-6"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          placeholder="I need help with..."
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="border border-gray-200 focus:outline-none py-6"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <Textarea
                          value={formData.message}
                          placeholder="Enter your message here..."
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="border border-gray-200 focus:outline-none py-4 min-h-[120px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full my-btn text-white p-6 group"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:rotate-45 transition-all duration-300" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </ScrollInFromBottom>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
