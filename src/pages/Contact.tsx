import { Mail, Linkedin, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold mb-6 animate-fade-in">
            Contact
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto animate-fade-in">
            Ready to simplify your strategic decisions? Let's discuss how I can 
            help you achieve your business goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form and I'll get back to you within 24 hours"
              />

              <form className="mt-8 space-y-6">
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
                  className="w-full gradient-primary text-primary-foreground font-semibold"
                >
                  Schedule Consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              <SectionHeading
                title="Contact Information"
                subtitle="Prefer to reach out directly? Here's how you can connect with me."
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@markets-simplified.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Based in India, Serving Globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
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
