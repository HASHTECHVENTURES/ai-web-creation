import { Link } from "react-router-dom";
import {
  BarChart3,
  Target,
  Handshake,
  TrendingUp,
  Users,
  Building2,
  Briefcase,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ClientCard } from "@/components/cards/ClientCard";
import heroVennDiagram from "@/assets/hero-venn-diagram.png";

const services = [
  {
    icon: BarChart3,
    title: "Market Intelligence & Insights",
    description:
      "Comprehensive market analysis, competitor benchmarking, and trend identification to drive informed decisions.",
    colorVariant: "blue" as const,
  },
  {
    icon: Target,
    title: "Strategy Development",
    description: "Market-entry strategies, pricing optimization, and go-to-market planning for sustainable growth.",
    colorVariant: "teal" as const,
  },
  {
    icon: Handshake,
    title: "M&A Advisory Support",
    description: "Target screening, market validation, and due diligence support for successful transactions.",
    colorVariant: "purple" as const,
  },
  {
    icon: TrendingUp,
    title: "Business Growth Consulting",
    description: "Product launch support, expansion strategies, and channel optimization for accelerated growth.",
    colorVariant: "rose" as const,
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description: "Strategic briefings, leadership advisory, and decision support for C-suite executives.",
    colorVariant: "amber" as const,
  },
];

const clients = [
  {
    icon: Building2,
    title: "Corporates",
    description: "Strategic market intelligence for enterprise growth",
    colorVariant: "blue" as const,
  },
  {
    icon: Briefcase,
    title: "Private Equity",
    description: "Due diligence and market validation for investments",
    colorVariant: "green" as const,
  },
  {
    icon: Users,
    title: "Industry Associations",
    description: "Market research and industry trend analysis",
    colorVariant: "purple" as const,
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Go-to-market strategy and scaling support",
    colorVariant: "orange" as const,
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold mb-4 md:mb-6 animate-scale-in">
                Led by Sanjiv Bhaskar
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
                Strategic Insights. <span className="text-gradient-gold">Simplified.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                25+ years of market intelligence and strategic consulting experience, helping businesses navigate
                complex decisions with clarity and confidence.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-accent text-secondary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
              <div className="w-full max-w-lg mx-auto aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src={heroVennDiagram}
                  alt="Sanjiv Bhaskar presenting data-driven strategy - Consulting meets Market Research"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-card animate-float hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">25+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Services"
            title="Clarity for Today. Strategy for Tomorrow"
            subtitle="Comprehensive strategic consulting services tailored to your business needs"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-8 md:mt-12 max-w-7xl mx-auto items-stretch">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  colorVariant={service.colorVariant}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <Button asChild size="lg" className="gradient-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Research Highlight */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-muted/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl bg-gradient-to-br from-white via-primary/5 to-secondary/5 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 text-center space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
              FREE MARKET SNAPSHOT
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Get a quick view of your market before you commit.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions and receive a brief, AI‑assisted snapshot of your market — demand, competitors,
              and risks — tailored to your business.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-glow">
                <Link to="/market-research">
                  Get Free Market Snapshot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clients"
            title={<>Empowering Business Leaders, Visionaries,<br className="hidden md:block" />Founders, and Forward Thinkers</>}
            subtitle="Partnering with organizations across industries to deliver actionable insights"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {clients.map((client, index) => (
              <div
                key={client.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <ClientCard icon={client.icon} title={client.title} description={client.description} colorVariant={client.colorVariant} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Simplify Your Strategy?"
            subtitle="Let's discuss how strategic insights can accelerate your business growth"
            centered
            light
          />
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8 md:mt-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button asChild size="lg" className="gradient-accent text-secondary-foreground font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <Link to="/contact" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
