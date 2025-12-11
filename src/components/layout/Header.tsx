import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import companyLogo from "@/assets/company-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Thought Leadership", path: "/thought-leadership" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 group">
            <img
              src={companyLogo}
              alt="Markets-Simplified Logo"
              className="h-14 w-auto md:h-16 lg:h-18 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display font-bold text-lg md:text-xl text-foreground">
              Markets-<span className="text-primary">Simplified</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 hover:shadow-xl transition-all duration-300">
              <Link to="/market-research">FREE MARKET SNAPSHOT</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="transition-transform duration-300">
              {isOpen ? <X size={24} className="rotate-90" /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-all duration-200 hover:pl-6 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button asChild className="w-full gradient-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
                <Link to="/market-research" onClick={() => setIsOpen(false)}>FREE MARKET SNAPSHOT</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
