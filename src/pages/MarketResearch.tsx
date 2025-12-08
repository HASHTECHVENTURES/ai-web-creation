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
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <FileText size={16} />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Market Research
            </h1>
            <p className="text-lg text-muted-foreground">
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
                  <Label htmlFor="companyName" className="flex items-center gap-2">
                    <Building2 size={16} className="text-primary" />
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    City *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
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
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
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
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lineOfBusiness" className="flex items-center gap-2">
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
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground shadow-glow"
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Your Market Research Report"
                subtitle="AI-generated analysis based on your company details"
              />
              <div className="mt-8 bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                    {report}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default MarketResearch;
