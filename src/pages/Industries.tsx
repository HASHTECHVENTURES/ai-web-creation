import { Link } from "react-router-dom";
import { ArrowRight, Clock, Target, Users, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import heroIndustries from "@/assets/hero-industries.png";
import industryBuildingTechnologies from "@/assets/industry-building-technologies.png";
import industryIndustrialAutomation from "@/assets/industry-industrial-automation.jpeg";
import industryEnvironmentalSolutions from "@/assets/industry-environmental-solutions.jpg";
import industryWeldingIndustries from "@/assets/industry-welding-industries.jpg";
import industryPpe from "@/assets/industry-ppe.jpg";

const industries = [{
  image: industryBuildingTechnologies,
  title: "Building Technologies",
  description: "Deep expertise in HVAC, building automation, smart buildings, and construction technologies. Understanding market dynamics, competitive landscapes, and growth opportunities in the evolving built environment sector.",
  highlights: ["HVAC systems and components", "Building automation and controls", "Smart building solutions", "Energy management systems"],
  featured: true
}, {
  image: industryIndustrialAutomation,
  title: "Industrial Automation",
  description: "Comprehensive knowledge of factory automation, robotics, industrial IoT, and Industry 4.0 trends. Helping clients navigate digital transformation and automation investments.",
  highlights: ["Factory automation systems", "Industrial robotics", "IIoT and connectivity", "Process automation"],
  featured: true
}, {
  image: industryEnvironmentalSolutions,
  title: "Environmental Solutions",
  description: "Market intelligence across sustainability, clean technology, and environmental monitoring sectors. Supporting clients in the growing green economy.",
  highlights: ["Air quality monitoring", "Water treatment solutions", "Waste management tech", "Sustainability consulting"],
  featured: true
}, {
  image: industryWeldingIndustries,
  title: "Welding Industries",
  description: "Specialized expertise in welding equipment, consumables, and related technologies. Understanding manufacturing trends and technology evolution in joining technologies.",
  highlights: ["Welding equipment and systems", "Consumables and materials", "Automation in welding", "Safety and compliance"],
  featured: true
}, {
  image: industryPpe,
  title: "Personal Protective Equipment",
  description: "Market research and analysis in the PPE sector, covering industrial safety, respiratory protection, and workplace safety solutions.",
  highlights: ["Industrial safety equipment", "Respiratory protection", "Workplace safety solutions", "Regulatory compliance"],
  featured: false
}];

const tagGradients = [
  "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/0 text-primary border border-primary/30 shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
  "bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100/60 text-amber-900 border border-amber-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
  "bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-100/60 text-emerald-900 border border-emerald-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
  "bg-gradient-to-r from-violet-100 via-purple-50 to-violet-100/60 text-violet-900 border border-violet-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
];

const Industries = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroIndustries})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-scale-in">
              Industries
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-in">
              Proven Excellence
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Deep domain knowledge across key industrial sectors, built through 
              years of research and consulting experience.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const isLastCard = index === industries.length - 1;
              return (
                <div 
                  key={industry.title} 
                  className={`group h-full flex flex-col p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in ${isLastCard ? 'sm:col-span-2 sm:max-w-2xl sm:mx-auto' : ''} ${industry.featured ? "bg-card border-border shadow-card hover:shadow-glow" : "bg-muted/30 border-border/50 opacity-90"}`} 
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                <div className="w-full aspect-[3/2] rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-md border border-border/60 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg bg-background">
                  <img 
                    src={industry.image} 
                    alt={`${industry.title} visual`} 
                    loading="lazy" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6 flex-grow">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {industry.highlights.map((highlight, highlightIndex) => {
                    const gradientClass = tagGradients[highlightIndex % tagGradients.length];
                    return (
                      <span 
                        key={highlight} 
                        className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${gradientClass}`}
                      >
                        {highlight}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry Focus - Infographic Style */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <SectionHeading 
              badge="Approach" 
              title="Why Industry Focus Matters" 
              subtitle="Deep domain expertise leads to better insights and recommendations" 
              centered 
            />
          </div>
          
          {/* Infographic Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                number: "01",
                title: "Faster Insights",
                description: "Faster time to insight with existing knowledge base",
                gradient: "from-blue-100 via-blue-50 to-sky-50 dark:from-blue-950 dark:via-blue-900/50 dark:to-sky-950/30"
              },
              {
                icon: Target,
                number: "02",
                title: "Deep Understanding",
                description: "Understanding of industry-specific dynamics and nuances",
                gradient: "from-teal-100 via-teal-50 to-emerald-50 dark:from-teal-950 dark:via-teal-900/50 dark:to-emerald-950/30"
              },
              {
                icon: Users,
                number: "03",
                title: "Strong Network",
                description: "Established network of industry contacts and sources",
                gradient: "from-purple-100 via-purple-50 to-violet-50 dark:from-purple-950 dark:via-purple-900/50 dark:to-violet-950/30"
              },
              {
                icon: Cog,
                number: "04",
                title: "Proven Methods",
                description: "Proven methodologies tailored to each sector",
                gradient: "from-amber-100 via-amber-50 to-orange-50 dark:from-amber-950 dark:via-amber-900/50 dark:to-orange-950/30"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`relative h-full flex flex-col p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br ${item.gradient} border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in group`}
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                {/* Number Badge */}
                <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-primary-foreground font-bold text-xs md:text-sm">{item.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-background/80 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-6 md:left-8 right-6 md:right-8 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="Need Industry-Specific Insights?" subtitle="Let's discuss how my domain expertise can benefit your project" centered light />
          <div className="mt-6 md:mt-8 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <Button asChild size="lg" className="gradient-accent text-secondary-foreground font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
              <Link to="/contact" className="group">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Industries;