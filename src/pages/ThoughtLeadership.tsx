import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import heroThoughtLeadership from "@/assets/hero-thought-leadership.png";

const articles = [
  {
    title: "How to Validate Market Entry Decisions",
    excerpt:
      "A comprehensive framework for evaluating market entry opportunities, including key metrics, risk assessment, and decision criteria that leading companies use.",
    category: "Market Entry",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "5-Step Growth Opportunity Framework",
    excerpt:
      "Learn the proven methodology for identifying and prioritizing growth opportunities in competitive markets. From market sizing to implementation planning.",
    category: "Growth Strategy",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Designing an Effective Go-To-Market Strategy",
    excerpt:
      "Key considerations for launching products in new markets, including channel selection, pricing strategies, and competitive positioning.",
    category: "GTM Strategy",
    imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
  {
    title: "Competitive Intelligence for Modern Enterprises",
    excerpt:
      "How to build a sustainable competitive intelligence function that delivers actionable insights to leadership teams consistently.",
    category: "Competitive Intel",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
  },
];

const frameworks = [
  {
    title: "Market Sizing Framework",
    description: "Top-down and bottom-up approaches to accurate market estimation",
  },
  {
    title: "Competitive Positioning Matrix",
    description: "Mapping competitors across key dimensions for strategic planning",
  },
  {
    title: "Growth Opportunity Scoring",
    description: "Prioritizing opportunities based on attractiveness and fit",
  },
  {
    title: "M&A Target Screening Model",
    description: "Systematic approach to identifying acquisition candidates",
  },
];

const ThoughtLeadership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroThoughtLeadership})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 animate-fade-in">
              Thought Leadership
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in text-center">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in text-center">
              Strategic insights, frameworks, and perspectives on market intelligence, 
              business strategy, and growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Articles"
            title="Featured Insights"
            subtitle="Strategic perspectives on market intelligence and business growth"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {articles.map((article, index) => (
              <div
                key={article.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  imageUrl={article.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Frameworks"
            title="Strategic Frameworks"
            subtitle="Proven methodologies developed through years of consulting experience"
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {frameworks.map((framework, index) => (
              <div
                key={framework.title}
                className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-display font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {framework.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {framework.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Workshops */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
                  alt="Conference speaking and workshops"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <SectionHeading
                badge="Speaking"
                title="Workshops & Presentations"
                subtitle="Sharing insights through executive briefings and industry events"
              />
              <p className="text-muted-foreground leading-relaxed mt-6 mb-6">
                I regularly share insights through executive workshops, industry 
                conferences, and custom briefings. Topics include market intelligence 
                best practices, strategic planning, and navigating industry disruption.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/contact">
                  Inquire About Speaking
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Want to Discuss These Ideas?"
            subtitle="Let's explore how these frameworks can apply to your business"
            centered
            light
          />
          <Button
            asChild
            size="lg"
            className="mt-8 gradient-accent text-secondary-foreground font-semibold"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ThoughtLeadership;
