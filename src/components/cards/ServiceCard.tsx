import { LucideIcon } from "lucide-react";

type ColorVariant = "blue" | "teal" | "purple" | "rose" | "amber";

const colorVariants: Record<ColorVariant, string> = {
  blue: "bg-gradient-to-br from-blue-50 via-sky-50/50 to-indigo-50/30 dark:from-blue-950/40 dark:via-sky-950/30 dark:to-indigo-950/20 border-blue-100/50 dark:border-blue-800/30",
  teal: "bg-gradient-to-br from-teal-50 via-emerald-50/50 to-cyan-50/30 dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-cyan-950/20 border-teal-100/50 dark:border-teal-800/30",
  purple: "bg-gradient-to-br from-purple-50 via-violet-50/50 to-fuchsia-50/30 dark:from-purple-950/40 dark:via-violet-950/30 dark:to-fuchsia-950/20 border-purple-100/50 dark:border-purple-800/30",
  rose: "bg-gradient-to-br from-rose-50 via-pink-50/50 to-red-50/30 dark:from-rose-950/40 dark:via-pink-950/30 dark:to-red-950/20 border-rose-100/50 dark:border-rose-800/30",
  amber: "bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/30 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/20 border-amber-100/50 dark:border-amber-800/30",
};

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables?: string[];
  featured?: boolean;
  colorVariant?: ColorVariant;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  deliverables,
  featured = false,
  colorVariant = "blue",
}: ServiceCardProps) => {
  return (
    <div
      className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "gradient-primary text-primary-foreground shadow-glow"
          : `${colorVariants[colorVariant]} border shadow-card hover:shadow-glow`
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
