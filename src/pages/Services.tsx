import { Link } from "react-router-dom";
import {
  BarChart3,
  Target,
  Handshake,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Search,
  FileSearch,
  Brain,
  Presentation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import heroServices from "@/assets/hero-services.png";

const services = [
  {
    icon: BarChart3,
    title: "Market Intelligence & Insights",
    description:
      "Transform raw market data into actionable intelligence that drives strategic decision-making.",
    deliverables: [
      "Market sizing and forecasting",
      "Competitor benchmarking and analysis",
      "Industry trend identification",
      "Opportunity mapping and prioritization",
      "Customer segmentation analysis",
    ],
    gradient: "from-pink-400/20 via-teal-400/30 to-cyan-400/20",
    pattern: "radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
  },
  {
    icon: Target,
    title: "Strategy Development & Execution",
    description:
      "Develop comprehensive strategies that align market opportunities with your business objectives.",
    deliverables: [
      "Market-entry strategy development",
      "Pricing strategy optimization",
      "Go-to-market planning",
      "Innovation and product strategy",
      "Strategic roadmap creation",
    ],
    gradient: "from-orange-400/20 via-amber-400/30 to-purple-400/20",
    pattern: "radial-gradient(ellipse at 30% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
  },
  {
    icon: Handshake,
    title: "M&A Advisory Support",
    description:
      "Provide market-focused due diligence and insights to support successful M&A transactions.",
    deliverables: [
      "Target screening and identification",
      "Market validation and assessment",
      "Competitive landscape analysis",
      "Risk evaluation and mitigation",
      "Deal insights and recommendations",
    ],
    gradient: "from-blue-400/20 via-indigo-400/30 to-sky-400/20",
    pattern: "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.3) 0%, transparent 70%), linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, transparent 100%)",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Consulting",
    description:
      "Accelerate growth through strategic market expansion and optimization initiatives.",
    deliverables: [
      "Product launch strategy",
      "Geographic expansion planning",
      "Channel strategy optimization",
      "Brand repositioning support",
      "Growth opportunity identification",
    ],
    gradient: "from-emerald-400/20 via-teal-400/30 to-cyan-400/20",
    pattern: "radial-gradient(ellipse at 10% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 90% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description:
      "Provide strategic counsel and decision support to C-suite executives and leadership teams.",
    deliverables: [
      "Executive briefings and presentations",
      "Strategic decision support",
      "Leadership advisory services",
      "Board-level presentations",
      "Strategic planning facilitation",
    ],
    gradient: "from-violet-400/20 via-purple-400/30 to-fuchsia-400/20",
    pattern: "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 40%, rgba(217, 70, 239, 0.3) 0%, transparent 50%)",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroServices})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 animate-fade-in">
              Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Strategic Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in">
              Comprehensive market intelligence and strategic consulting services 
              tailored to your unique business challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - New Design */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of strategic consulting services designed to help your business thrive
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
              >
                <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-stretch">
                  {/* Left Side - Icon and Content */}
                  <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-border/30 shadow-card hover:shadow-glow hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 h-full relative overflow-hidden">
                      {/* Background Pattern */}
                      <div 
                        className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-40"
                        style={{ background: service.pattern }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-50`} />
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl gradient-primary flex items-center justify-center mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <service.icon size={28} className="md:w-8 md:h-8 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4 md:mb-6">
                          {service.description}
                        </p>
                        <Button 
                          asChild 
                          className="gradient-primary text-primary-foreground hover:scale-105 transition-transform duration-300"
                        >
                          <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="group/btn">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Deliverables */}
                  <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-muted/50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-border/20 h-full hover:border-primary/30 transition-all duration-300">
                      <h4 className="font-display font-semibold text-base md:text-lg text-foreground mb-4 md:mb-6">
                        Key Deliverables
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                        {service.deliverables.map((deliverable, idx) => (
                          <div 
                            key={deliverable} 
                            className="flex items-start gap-2 md:gap-3 bg-white/60 rounded-lg p-3 border border-border/20 hover:border-primary/40 hover:bg-white/80 hover:shadow-sm transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${(index * 0.15) + (idx * 0.05)}s`, opacity: 0 }}
                          >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-xs md:text-sm text-foreground/80 leading-relaxed">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Infographic Format */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <SectionHeading
            badge="Process"
            title="How I Work"
            subtitle="A structured approach to delivering actionable insights"
            centered
          />

          {/* Infographic Timeline */}
          <div className="mt-10 md:mt-16">
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-2 items-stretch">
              {[
                { 
                  title: "Discovery", 
                  desc: "Understand your challenges and objectives",
                  icon: Search,
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-50 to-cyan-50",
                },
                { 
                  title: "Research", 
                  desc: "Deep dive into market data and insights",
                  icon: FileSearch,
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-50 to-pink-50",
                },
                { 
                  title: "Analysis", 
                  desc: "Transform data into actionable intelligence",
                  icon: Brain,
                  gradient: "from-orange-500 to-amber-500",
                  bgGradient: "from-orange-50 to-amber-50",
                },
                { 
                  title: "Delivery", 
                  desc: "Present findings with clear recommendations",
                  icon: Presentation,
                  gradient: "from-green-500 to-emerald-500",
                  bgGradient: "from-green-50 to-emerald-50",
                },
              ].map((item, idx, arr) => {
                const IconComponent = item.icon;
                return (
                  <>
                    <div 
                      key={item.title} 
                      className="flex flex-col h-full animate-fade-in lg:col-span-1"
                      style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                    >
                      {/* Step Card */}
                      <div className="relative group flex flex-col h-full">
                        {/* Icon */}
                        <div className="flex justify-center mb-4 md:mb-6">
                          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className={`bg-gradient-to-br ${item.bgGradient} rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-transparent group-hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-glow flex-1 flex flex-col`}>
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 text-center group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-xs md:text-sm text-center leading-relaxed flex-grow">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow between steps */}
                    {idx < arr.length - 1 && (
                      <div 
                        key={`arrow-${idx}`}
                        className="hidden lg:flex items-center justify-center lg:col-span-1"
                      >
                        <div className="flex items-center justify-center w-full h-full pt-8">
                          <ArrowRight className="w-8 h-8 text-primary/50 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Ready to start your journey?</p>
            <Button asChild size="lg" className="gradient-primary text-primary-foreground">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's discuss how these services can help you achieve your goals
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-accent text-secondary-foreground font-semibold"
          >
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
