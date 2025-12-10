import { useLocation, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Download } from "lucide-react";

const MarketResearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const report = location.state?.report;

  if (!report) {
    return (
      <Layout>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">No Report Found</h1>
            <p className="text-muted-foreground mb-6">The report data is missing.</p>
            <Button onClick={() => navigate("/market-research")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Market Research
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([report], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "market-research-report.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Layout>
      {/* Header with Back Button */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/market-research")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleDownload}
              className="gradient-primary text-primary-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Your Market Research Report"
              subtitle="AI-generated analysis based on your company details"
            />
            <div className="mt-8 bg-card rounded-2xl p-8 shadow-card border border-border">
              <article className="prose prose-lg prose-headings:text-foreground prose-headings:font-display prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-ul:text-foreground max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold text-foreground mb-4 mt-6">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold text-foreground mb-3 mt-6 border-b border-border pb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">{children}</h3>,
                    p: ({ children }) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                    li: ({ children }) => <li className="text-foreground">{children}</li>,
                    hr: () => <hr className="my-6 border-border" />,
                  }}
                >
                  {report}
                </ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketResearchResult;
