import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FileText, Building2, MapPin, Phone, Mail, Briefcase } from "lucide-react";
import ReactMarkdown from "react-markdown";

const MarketResearch = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    city: "",
    phone: "",
    email: "",
    lineOfBusiness: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.city || !formData.lineOfBusiness) {
      toast({
        title: "Missing Information",
        description: "Please fill in company name, city, and line of business.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setReport(null);

    try {
      const { data, error } = await supabase.functions.invoke('market-research', {
        body: formData,
      });

      if (error) throw error;

      setReport(data.report);
      toast({
        title: "Report Generated",
        description: "Your market research report is ready.",
      });
    } catch (error) {
      console.error('Error generating report:', error);
      toast({
        title: "Error",
        description: "Failed to generate report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <FileText size={16} />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Market Research
            </h1>
            <p className="text-lg text-white/80">
              Get comprehensive market intelligence powered by AI. Enter your company details 
              and receive a detailed analysis of your market landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <SectionHeading
                title="Enter Company Details"
                subtitle="Provide your company information to generate a tailored market research report."
              />

              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="flex items-center gap-2 text-foreground">
                    <Building2 size={16} className="text-primary" />
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="bg-background text-foreground border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2 text-foreground">
                    <MapPin size={16} className="text-primary" />
                    City *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="bg-background text-foreground border-border"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                      <Phone size={16} className="text-primary" />
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="bg-background text-foreground border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                      <Mail size={16} className="text-primary" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="bg-background text-foreground border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lineOfBusiness" className="flex items-center gap-2 text-foreground">
                    <Briefcase size={16} className="text-primary" />
                    Line of Business *
                  </Label>
                  <Textarea
                    id="lineOfBusiness"
                    name="lineOfBusiness"
                    value={formData.lineOfBusiness}
                    onChange={handleChange}
                    placeholder="Describe your line of business (e.g., Industrial automation, Building technologies, Environmental solutions...)"
                    rows={3}
                    className="bg-background text-foreground border-border"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary text-white shadow-glow"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Report...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Market Research Report
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      {report && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Your Market Research Report"
                subtitle="AI-generated analysis based on your company details"
              />
              <div className="mt-8 bg-card rounded-2xl p-8 shadow-card border border-border">
                <article className="prose prose-lg prose-headings:text-foreground prose-headings:font-display prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-ul:text-foreground max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-3xl font-bold text-foreground mb-4 mt-6">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-bold text-foreground mb-3 mt-6 border-b border-border pb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">{children}</h3>,
                      p: ({ children }) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
                      strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                      ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                      li: ({ children }) => <li className="text-foreground">{children}</li>,
                      hr: () => <hr className="my-6 border-border" />,
                    }}
                  >
                    {report}
                  </ReactMarkdown>
                </article>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default MarketResearch;
