import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables?: string[];
  featured?: boolean;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  deliverables,
  featured = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "gradient-primary text-primary-foreground shadow-glow"
          : "bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-indigo-950/20 border border-border/50 shadow-card hover:shadow-glow"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
          featured
            ? "bg-primary-foreground/20"
            : "gradient-primary"
        }`}
      >
        <Icon size={28} className={featured ? "text-primary-foreground" : "text-primary-foreground"} />
      </div>

      {/* Content */}
      <h3
        className={`font-display text-xl font-bold mb-3 ${
          featured ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-4 ${
          featured ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>

      {/* Deliverables */}
      {deliverables && deliverables.length > 0 && (
        <ul className="space-y-2">
          {deliverables.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 text-sm ${
                featured ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  featured ? "bg-secondary" : "bg-primary"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Decorative gradient */}
      {!featured && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
    </div>
  );
};
