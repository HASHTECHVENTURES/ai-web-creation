import { Mail, Linkedin, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import heroContact from "@/assets/hero-contact.png";
import { useState, useEffect } from "react";

const services = [
  "Market Intelligence & Insights",
  "Strategy Development & Execution",
  "M&A Advisory Support",
  "Business Growth Consulting",
  "Executive Advisory",
  "General Inquiry",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");
  const [selectedService, setSelectedService] = useState<string>(
    serviceFromUrl || ""
  );

  useEffect(() => {
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
    }
  }, [serviceFromUrl]);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContact})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-scale-in">
              Contact
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Ready to simplify your strategic decisions? Let's discuss how I can 
              help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form and I'll get back to you within 24 hours"
              />

              <form className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-card border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select a service or purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can I help you?"
                    className="bg-card border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or challenge..."
                    rows={5}
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8 animate-fade-in-right mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
              <SectionHeading
                title="Contact Information"
                subtitle="Prefer to reach out directly? Here's how you can connect with me."
              />

              <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Email</h3>
                    <p className="text-sm md:text-base text-muted-foreground">contact@sanmistrategyadvisor.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Linkedin className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">LinkedIn</h3>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-all duration-300"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Location</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Based in India, Serving Globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Clock className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Response Time</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="font-display font-bold text-foreground mb-2">
                  Quick Response Promise
                </h3>
                <p className="text-muted-foreground text-sm">
                  I personally review every inquiry and respond within 24 hours. 
                  For urgent matters, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-2">
            Prefer to explore first?
          </p>
          <p className="text-foreground">
            Check out my{" "}
            <a href="/services" className="text-primary font-medium hover:underline">
              services
            </a>
            {" "}or read my{" "}
            <a href="/thought-leadership" className="text-primary font-medium hover:underline">
              thought leadership
            </a>
            {" "}articles.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
