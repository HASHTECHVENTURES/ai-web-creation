import { useLocation, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { jsPDF } from "jspdf";
import companyLogo from "@/assets/company-logo.png";

const MarketResearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const report = location.state?.report;
  const companyName = location.state?.companyName || "Company";

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

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let yPosition = margin;

    // Load and add logo
    try {
      const img = new Image();
      img.src = companyLogo;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      
      // Add logo centered at top
      const logoWidth = 25;
      const logoHeight = 25;
      const logoX = (pageWidth - logoWidth) / 2;
      pdf.addImage(img, "PNG", logoX, yPosition, logoWidth, logoHeight);
      yPosition += logoHeight + 5;
    } catch (error) {
      console.log("Could not load logo");
    }

    // Add company name header
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(31, 41, 55);
    pdf.text("Markets-Simplified", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 10;

    // Add report title
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text(`Market Research Report: ${companyName}`, pageWidth / 2, yPosition, { align: "center" });
    yPosition += 8;

    // Add generation date
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(107, 114, 128);
    pdf.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition, { align: "center" });
    yPosition += 15;

    // Add horizontal line
    pdf.setDrawColor(209, 213, 219);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Process markdown content to plain text
    const plainText = report
      .replace(/#{1,6}\s/g, "") // Remove heading markers
      .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold markers
      .replace(/\*([^*]+)\*/g, "$1") // Remove italic markers
      .replace(/`([^`]+)`/g, "$1") // Remove code markers
      .replace(/---/g, "") // Remove horizontal rules
      .replace(/- /g, "• "); // Replace list markers

    // Add report content
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);

    const lines = pdf.splitTextToSize(plainText, contentWidth);
    
    for (let i = 0; i < lines.length; i++) {
      if (yPosition > pageHeight - 40) {
        // Add footer before new page
        addFooter(pdf, pageWidth, pageHeight);
        pdf.addPage();
        yPosition = margin;
      }
      
      const line = lines[i];
      
      // Check if line starts with bullet
      if (line.startsWith("•")) {
        pdf.text(line, margin + 5, yPosition);
      } else {
        pdf.text(line, margin, yPosition);
      }
      yPosition += 6;
    }

    // Add disclaimer section
    yPosition += 10;
    if (yPosition > pageHeight - 60) {
      addFooter(pdf, pageWidth, pageHeight);
      pdf.addPage();
      yPosition = margin;
    }

    // Disclaimer box
    pdf.setDrawColor(251, 191, 36);
    pdf.setFillColor(254, 252, 232);
    pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, "FD");
    
    yPosition += 8;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(146, 64, 14);
    pdf.text("DISCLAIMER", margin + 5, yPosition);
    
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(60, 60, 60);
    const disclaimer = "This report is generated using artificial intelligence and should be used for informational purposes only. The analysis and insights provided are based on publicly available data and AI algorithms. Markets-Simplified recommends validating this information with additional research and professional consultation before making business decisions.";
    const disclaimerLines = pdf.splitTextToSize(disclaimer, contentWidth - 10);
    disclaimerLines.forEach((line: string) => {
      pdf.text(line, margin + 5, yPosition);
      yPosition += 4;
    });

    // Add footer to last page
    addFooter(pdf, pageWidth, pageHeight);

    // Save PDF
    pdf.save(`${companyName.replace(/\s+/g, "-")}-Market-Research-Report.pdf`);
  };

  const addFooter = (pdf: jsPDF, pageWidth: number, pageHeight: number) => {
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(156, 163, 175);
    pdf.text("© Markets-Simplified | www.markets-simplified.com", pageWidth / 2, pageHeight - 10, { align: "center" });
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
              onClick={handleDownloadPDF}
              className="gradient-primary text-primary-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF Report
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
            
            {/* AI Disclaimer Banner */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <FileText className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Disclaimer:</strong> This report is AI-generated and should be used for informational purposes only. 
                Please validate findings with additional research before making business decisions.
              </p>
            </div>

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



