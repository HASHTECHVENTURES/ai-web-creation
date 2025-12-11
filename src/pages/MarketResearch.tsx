import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FileText, Building2, MapPin, Phone, Mail, Briefcase, Sparkles } from "lucide-react";
import heroMarketResearch from "@/assets/hero-market-research.png";
const marketFacts = ["Market research can reduce business risk by up to 40%", "Companies that conduct regular market research grow 3x faster than those that don't", "85% of successful businesses use market intelligence for strategic decisions", "AI-powered analysis can process market data 100x faster than traditional methods", "Market research helps identify opportunities worth 5-10x the investment", "Data-driven decisions increase revenue by an average of 6% annually"];
const MarketResearch = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [formData, setFormData] = useState({
    companyName: "",
    city: "",
    phone: "",
    email: "",
    lineOfBusiness: ""
  });

  // Rotate facts while loading
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setCurrentFactIndex(prev => (prev + 1) % marketFacts.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.city || !formData.phone || !formData.email || !formData.lineOfBusiness) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    setCurrentFactIndex(0);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('market-research', {
        body: formData
      });
      if (error) throw error;

      // Navigate to results page with report data and company info
      navigate("/market-research/result", {
        state: {
          report: data.report,
          companyName: formData.companyName
        }
      });
    } catch (error) {
      console.error('Error generating report:', error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to generate report. Please try again.",
        variant: "destructive"
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroMarketResearch})`
      }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-4 md:mb-6 animate-scale-in">
              <FileText size={16} />
              <span className="text-xs md:text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Market Report</h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Get comprehensive market intelligence powered by AI. Enter your company details 
              and receive a detailed analysis of your market landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card border border-border hover:shadow-glow transition-shadow duration-300 animate-fade-in">
              <SectionHeading title="Enter Company Details" subtitle="Provide your company information to generate a tailored market research report." />

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="flex items-center gap-2 text-foreground">
                    <Building2 size={16} className="text-primary" />
                    Company Name *
                  </Label>
                  <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" className="bg-background text-foreground border-border" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2 text-foreground">
                    <MapPin size={16} className="text-primary" />
                    City *
                  </Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" className="bg-background text-foreground border-border" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                      <Phone size={16} className="text-primary" />
                      Phone *
                    </Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" className="bg-background text-foreground border-border" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                      <Mail size={16} className="text-primary" />
                      Email *
                    </Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" className="bg-background text-foreground border-border" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lineOfBusiness" className="flex items-center gap-2 text-foreground">
                    <Briefcase size={16} className="text-primary" />
                    Line of Business *
                  </Label>
                  <Textarea id="lineOfBusiness" name="lineOfBusiness" value={formData.lineOfBusiness} onChange={handleChange} placeholder="Describe your line of business (e.g., Industrial automation, Building technologies, Environmental solutions...)" rows={3} className="bg-background text-foreground border-border" required />
                </div>

                <Button type="submit" className="w-full gradient-primary text-white shadow-glow hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" disabled={isLoading}>
                  {isLoading ? <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Report...
                    </> : <>
                      <FileText className="mr-2 h-4 w-4" />
                      Get Market Report
                    </>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Dialog */}
      <Dialog open={isLoading} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md [&>button]:hidden" onPointerDownOutside={e => e.preventDefault()} onInteractOutside={e => e.preventDefault()}>
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 py-4">
            <div className="relative">
              <Loader2 className="h-10 w-10 md:h-12 md:w-12 animate-spin text-primary" />
              <Sparkles className="absolute -top-1 -right-1 h-5 w-5 md:h-6 md:w-6 text-secondary animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                Generating Your Report
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Our AI is analyzing market data and preparing insights...
              </p>
            </div>
            <div className="w-full space-y-3">
              <div className="bg-muted/50 rounded-lg p-3 md:p-4 border border-border/50 animate-fade-in">
                <p className="text-xs md:text-sm font-semibold text-primary mb-2">Did you know?</p>
                <p className="text-xs md:text-sm text-foreground transition-opacity duration-500">
                  {marketFacts[currentFactIndex]}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse transition-all duration-1000" style={{
                width: '60%'
              }} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>;
};
export default MarketResearch;