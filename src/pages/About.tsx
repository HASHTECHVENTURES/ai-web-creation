import { Link } from "react-router-dom";
import {
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  TrendingUp,
  Building2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import sanjivBhaskar from "@/assets/sanjiv-bhaskar.png";
import sanjivSpeaking from "@/assets/sanjiv-speaking.png";

const timeline = [
  {
    period: "2025 – Present",
    role: "Independent Consultant",
    company: "Markets-Simplified",
    description:
      "Founded Markets-Simplified to provide boutique strategic consulting and market intelligence services to global clients.",
  },
  {
    period: "2013 – 2024",
    role: "Vice President",
    company: "Frost & Sullivan",
    description:
      "Led market intelligence and strategic consulting engagements for Fortune 500 clients across multiple industries.",
  },
  {
    period: "2008 – 2013",
    role: "Senior Research Manager",
    company: "Leading Research Firm",
    description:
      "Managed research teams and delivered comprehensive market analysis for enterprise clients.",
  },
  {
    period: "2000 – 2008",
    role: "Market Research Analyst",
    company: "Various Organizations",
    description:
      "Built foundational expertise in market research methodologies and competitive intelligence.",
  },
];

const strengths = [
  "Market Intelligence",
  "Strategy Development",
  "M&A Insights",
  "Competitive Analysis",
  "Go-to-Market Strategy",
  "Executive Advisory",
  "Industry Research",
  "Growth Strategy",
];

const industries = [
  { icon: Building2, name: "Building Technologies" },
  { icon: Zap, name: "Industrial Automation" },
  { icon: TrendingUp, name: "Environmental Solutions" },
  { icon: Target, name: "Welding Industries" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold mb-6">
                About
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Sanjiv Bhaskar
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
                Founder & Principal Consultant
              </p>
              <p className="text-primary-foreground/70 leading-relaxed max-w-xl">
                With over 25 years of experience in market intelligence and strategic 
                consulting, I help businesses transform complex market data into 
                actionable strategies that drive growth.
              </p>
            </div>

            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={sanjivBhaskar}
                  alt="Sanjiv Bhaskar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              badge="Background"
              title="Professional Journey"
              subtitle="A career dedicated to market intelligence excellence"
            />

            <div className="mt-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Throughout my career, I have partnered with Fortune 500 companies, 
                  private equity firms, and emerging businesses to deliver strategic 
                  insights that inform critical business decisions. My expertise spans 
                  market sizing, competitive intelligence, M&A due diligence, and 
                  go-to-market strategy development.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  As Vice President at Frost & Sullivan, I led numerous high-impact 
                  consulting engagements that helped clients identify growth opportunities, 
                  validate market assumptions, and develop winning strategies. This 
                  experience has given me deep industry knowledge and a proven track 
                  record of delivering results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Experience"
            title="Career Timeline"
            subtitle="25+ years of progressive experience in market intelligence"
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-20 pb-12 last:pb-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full gradient-primary border-4 border-background" />

                  <div className="bg-card p-6 rounded-2xl border border-border shadow-soft">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {item.role}
                    </h3>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Speaker Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative animate-fade-in max-w-4xl w-full">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={sanjivSpeaking}
                  alt="Sanjiv Bhaskar speaking at conference"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                badge="Industries"
                title="Industry Expertise"
                subtitle="Deep domain knowledge across key sectors"
              />
              <div className="grid grid-cols-2 gap-4 mt-8">
                {industries.map((industry) => (
                  <div
                    key={industry.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
                  >
                    <industry.icon className="w-6 h-6 text-primary" />
                    <span className="font-medium text-foreground text-sm">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                badge="Strengths"
                title="Core Competencies"
                subtitle="Skills honed through decades of practice"
              />
              <div className="flex flex-wrap gap-3 mt-8">
                {strengths.map((strength) => (
                  <span
                    key={strength}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Philosophy"
              title="My Consulting Approach"
              light
              centered
            />
            <blockquote className="text-2xl md:text-3xl font-display text-primary-foreground/90 leading-relaxed mt-8 mb-8">
              "I believe in making complex market decisions simpler. Every insight 
              should lead to action, and every strategy should be grounded in data."
            </blockquote>
            <p className="text-primary-foreground/70 mb-8">— Sanjiv Bhaskar</p>
            <Button
              asChild
              size="lg"
              className="gradient-accent text-secondary-foreground font-semibold"
            >
              <Link to="/contact">
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
