import { Link } from "react-router-dom";
import {
  BarChart3,
  Target,
  Handshake,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold mb-6 animate-fade-in">
            Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Strategic Consulting Services
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto animate-fade-in">
            Comprehensive market intelligence and strategic consulting services 
            tailored to your unique business challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-start p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button asChild className="gradient-primary text-primary-foreground">
                    <Link to="/contact">
                      Discuss This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`bg-muted/50 rounded-2xl p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    Key Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Process"
            title="How I Work"
            subtitle="A structured approach to delivering actionable insights"
            centered
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Discovery", desc: "Understand your challenges and objectives" },
              { step: "02", title: "Research", desc: "Deep dive into market data and insights" },
              { step: "03", title: "Analysis", desc: "Transform data into actionable intelligence" },
              { step: "04", title: "Delivery", desc: "Present findings with clear recommendations" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Ready to Get Started?"
            subtitle="Let's discuss how these services can help you achieve your goals"
            centered
            light
          />
          <Button
            asChild
            size="lg"
            className="mt-8 gradient-accent text-secondary-foreground font-semibold"
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
