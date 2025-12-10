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
import sanjivBhaskar from "@/assets/sanjiv-bhaskar.png";
import heroConsulting from "@/assets/hero-consulting.png";

const services = [
  {
    icon: BarChart3,
    title: "Market Intelligence & Insights",
    description:
      "Comprehensive market analysis, competitor benchmarking, and trend identification to drive informed decisions.",
  },
  {
    icon: Target,
    title: "Strategy Development",
    description:
      "Market-entry strategies, pricing optimization, and go-to-market planning for sustainable growth.",
  },
  {
    icon: Handshake,
    title: "M&A Advisory Support",
    description:
      "Target screening, market validation, and due diligence support for successful transactions.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Consulting",
    description:
      "Product launch support, expansion strategies, and channel optimization for accelerated growth.",
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description:
      "Strategic briefings, leadership advisory, and decision support for C-suite executives.",
  },
];

const clients = [
  {
    icon: Building2,
    title: "Corporates",
    description: "Strategic market intelligence for enterprise growth",
  },
  {
    icon: Briefcase,
    title: "Private Equity",
    description: "Due diligence and market validation for investments",
  },
  {
    icon: Users,
    title: "Industry Associations",
    description: "Market research and industry trend analysis",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Go-to-market strategy and scaling support",
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

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold mb-6">
                Led by Sanjiv Bhaskar
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Strategic Insights.{" "}
                <span className="text-gradient-gold">Simplified.</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
                25+ years of market intelligence and strategic consulting experience, 
                helping businesses navigate complex decisions with clarity and confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-accent text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroConsulting}
                  alt="Sanjiv Bhaskar presenting data-driven strategy - Consulting meets Market Research"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card animate-float">
                <div className="text-3xl font-display font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Mini Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="order-2 lg:order-1 w-72 mx-auto lg:mx-0">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-card">
                <img
                  src={sanjivBhaskar}
                  alt="Sanjiv Bhaskar - Founder of Markets-Simplified"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="About"
                title="Meet Sanjiv Bhaskar"
                subtitle="Founder & Principal Consultant at Markets-Simplified"
              />
              <p className="text-muted-foreground leading-relaxed mt-6 mb-8">
                With over 25 years of experience in market intelligence and strategic consulting, 
                Sanjiv has helped Fortune 500 companies, private equity firms, and growing 
                businesses navigate complex markets and make confident decisions.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/about">
                  Read Full Bio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Services"
            title="Clarity for Today. Strategy for Tomorrow"
            subtitle="Comprehensive strategic consulting services tailored to your business needs"
            centered
          />

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {services.map((service) => (
              <div key={service.title} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary text-primary-foreground">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Clients"
            title="Who I Work With"
            subtitle="Partnering with organizations across industries to deliver actionable insights"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {clients.map((client) => (
              <ClientCard
                key={client.title}
                icon={client.icon}
                title={client.title}
                description={client.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Ready to Simplify Your Strategy?"
            subtitle="Let's discuss how strategic insights can accelerate your business growth"
            centered
            light
          />
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="gradient-accent text-secondary-foreground font-semibold"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
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
