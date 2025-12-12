import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

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
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
          {/* Brand */}
          <div className="lg:col-span-1 animate-fade-in">
            <Link to="/" className="flex items-center gap-1 mb-4 hover:opacity-80 transition-opacity duration-300 group">
              <img 
                src={companyLogo} 
                alt="SanMi Strategy Advisor Logo" 
                className="h-12 w-auto md:h-14 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display font-bold text-base md:text-lg text-slate-900">
                SanMi <span className="text-primary">Strategy Advisor</span>
              </span>
            </Link>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Strategic consulting and market intelligence practice led by Sanjiv Bhaskar, 
              helping businesses navigate complex markets with clarity and confidence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center hover:bg-slate-300 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:contact@sanmistrategyadvisor.com"
                className="w-9 h-9 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center hover:bg-slate-300 hover:scale-110 transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <h4 className="font-display font-semibold text-sm md:text-base mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={service} className="animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s`, opacity: 0 }}>
                  <Link
                    to="/services"
                    className="text-slate-600 hover:text-primary hover:translate-x-1 transition-all duration-300 text-xs inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <h4 className="font-display font-semibold text-sm md:text-base mb-3 md:mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={industry} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.05}s`, opacity: 0 }}>
                  <Link
                    to="/industries"
                    className="text-slate-600 hover:text-primary hover:translate-x-1 transition-all duration-300 text-xs inline-block"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <h4 className="font-display font-semibold text-sm md:text-base mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 group">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-slate-600 text-xs group-hover:text-primary transition-colors duration-300">
                  contact@sanmistrategyadvisor.com
                </span>
              </li>
              <li className="flex items-start gap-2.5 group">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-slate-600 text-xs group-hover:text-primary transition-colors duration-300">
                  Based in India, Serving Globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-200 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-slate-500 text-xs md:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} SanMi Strategy Advisor. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <Link to="/contact" className="text-slate-500 hover:text-slate-800 text-xs md:text-sm transition-colors duration-300 hover:underline">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-slate-500 hover:text-slate-800 text-xs md:text-sm transition-colors duration-300 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
