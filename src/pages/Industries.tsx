import { Link } from "react-router-dom";
import { Building2, Zap, Leaf, Wrench, HardHat, ArrowRight, Clock, Target, Users, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
const industries = [{
  icon: Building2,
  title: "Building Technologies",
  description: "Deep expertise in HVAC, building automation, smart buildings, and construction technologies. Understanding market dynamics, competitive landscapes, and growth opportunities in the evolving built environment sector.",
  highlights: ["HVAC systems and components", "Building automation and controls", "Smart building solutions", "Energy management systems"],
  featured: true
}, {
  icon: Zap,
  title: "Industrial Automation",
  description: "Comprehensive knowledge of factory automation, robotics, industrial IoT, and Industry 4.0 trends. Helping clients navigate digital transformation and automation investments.",
  highlights: ["Factory automation systems", "Industrial robotics", "IIoT and connectivity", "Process automation"],
  featured: true
}, {
  icon: Leaf,
  title: "Environmental Solutions",
  description: "Market intelligence across sustainability, clean technology, and environmental monitoring sectors. Supporting clients in the growing green economy.",
  highlights: ["Air quality monitoring", "Water treatment solutions", "Waste management tech", "Sustainability consulting"],
  featured: true
}, {
  icon: Wrench,
  title: "Welding Industries",
  description: "Specialized expertise in welding equipment, consumables, and related technologies. Understanding manufacturing trends and technology evolution in joining technologies.",
  highlights: ["Welding equipment and systems", "Consumables and materials", "Automation in welding", "Safety and compliance"],
  featured: true
}, {
  icon: HardHat,
  title: "Personal Protective Equipment",
  description: "Market research and analysis in the PPE sector, covering industrial safety, respiratory protection, and workplace safety solutions.",
  highlights: ["Industrial safety equipment", "Respiratory protection", "Workplace safety solutions", "Regulatory compliance"],
  featured: false
}];
const Industries = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold mb-6 animate-fade-in">
            Industries
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">Proven Excellence</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto animate-fade-in">
            Deep domain knowledge across key industrial sectors, built through 
            years of research and consulting experience.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => <div key={industry.title} className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 animate-fade-in ${industry.featured ? "bg-card border-border shadow-card hover:shadow-glow" : "bg-muted/30 border-border/50 opacity-90"}`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${industry.featured ? "gradient-primary" : "bg-muted"}`}>
                  <industry.icon size={32} className={industry.featured ? "text-primary-foreground" : "text-muted-foreground"} />
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  {industry.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {industry.highlights.map(highlight => <span key={highlight} className={`px-3 py-1 rounded-full text-xs font-medium ${industry.featured ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {highlight}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Industry Focus - Infographic Style */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeading 
              badge="Approach" 
              title="Why Industry Focus Matters" 
              subtitle="Deep domain expertise leads to better insights and recommendations" 
              centered 
            />
          </div>
          
          {/* Infographic Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-sm">{item.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Need Industry-Specific Insights?" subtitle="Let's discuss how my domain expertise can benefit your project" centered light />
          <Button asChild size="lg" className="mt-8 gradient-accent text-secondary-foreground font-semibold">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Industries;