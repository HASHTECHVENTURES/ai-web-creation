import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

const services = [
  "Market Intelligence",
  "Strategy Development",
  "M&A Advisory",
  "Business Growth",
  "Executive Advisory",
];

const industries = [
  "Building Technologies",
  "Industrial Automation",
  "Environmental Solutions",
  "Welding Industries",
];

export const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Markets-<span className="text-secondary">Simplified</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Strategic consulting and market intelligence practice led by Sanjiv Bhaskar, 
              helping businesses navigate complex markets with clarity and confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@markets-simplified.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <Link
                    to="/industries"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  contact@markets-simplified.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Based in India, Serving Globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Markets-Simplified. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
