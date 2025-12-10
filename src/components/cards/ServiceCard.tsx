import { LucideIcon } from "lucide-react";

type ColorVariant = "blue" | "teal" | "purple" | "rose" | "amber";

const abstractPatterns: Record<ColorVariant, string> = {
  blue: "radial-gradient(circle at 30% 30%, rgba(166, 193, 238, 0.3) 0%, rgba(251, 194, 235, 0.25) 100%)",
  teal: "radial-gradient(circle at 30% 30%, rgba(137, 247, 254, 0.3) 0%, rgba(102, 166, 255, 0.25) 100%)",
  purple: "radial-gradient(circle at 30% 30%, rgba(251, 194, 235, 0.3) 0%, rgba(166, 193, 238, 0.25) 100%)",
  rose: "radial-gradient(circle at 30% 30%, rgba(253, 203, 241, 0.3) 0%, rgba(230, 222, 233, 0.25) 100%)",
  amber: "radial-gradient(circle at 30% 30%, rgba(246, 211, 101, 0.3) 0%, rgba(253, 160, 133, 0.25) 100%)",
};

const colorVariants: Record<ColorVariant, string> = {
  blue: "bg-gradient-to-br from-blue-50 via-sky-50/50 to-indigo-50/30 dark:from-blue-950/40 dark:via-sky-950/30 dark:to-indigo-950/20 border-blue-100/50 dark:border-blue-800/30",
  teal: "bg-gradient-to-br from-teal-50 via-emerald-50/50 to-cyan-50/30 dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-cyan-950/20 border-teal-100/50 dark:border-teal-800/30",
  purple: "bg-gradient-to-br from-purple-50 via-violet-50/50 to-fuchsia-50/30 dark:from-purple-950/40 dark:via-violet-950/30 dark:to-fuchsia-950/20 border-purple-100/50 dark:border-purple-800/30",
  rose: "bg-gradient-to-br from-rose-50 via-pink-50/50 to-red-50/30 dark:from-rose-950/40 dark:via-pink-950/30 dark:to-red-950/20 border-rose-100/50 dark:border-rose-800/30",
  amber: "bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/30 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/20 border-amber-100/50 dark:border-amber-800/30",
};

const iconColors: Record<ColorVariant, string> = {
  blue: "text-blue-600 dark:text-blue-400",
  teal: "text-teal-600 dark:text-teal-400",
  purple: "text-purple-600 dark:text-purple-400",
  rose: "text-rose-600 dark:text-rose-400",
  amber: "text-amber-600 dark:text-amber-400",
};

const iconBackgrounds: Record<ColorVariant, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/30",
  teal: "bg-teal-100 dark:bg-teal-900/30",
  purple: "bg-purple-100 dark:bg-purple-900/30",
  rose: "bg-rose-100 dark:bg-rose-900/30",
  amber: "bg-amber-100 dark:bg-amber-900/30",
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
      className={`group relative h-full flex flex-col p-4 md:p-5 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden ${
        featured
          ? "gradient-primary text-primary-foreground shadow-glow"
          : `border border-border/30 shadow-card hover:shadow-glow hover:border-primary/50 bg-white/95`
      }`}
    >
      {/* Background Pattern Layer */}
      {!featured && (
        <div
          className="absolute inset-0 rounded-2xl opacity-100"
          style={{
            background: abstractPatterns[colorVariant],
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0 ${
            featured
              ? "bg-primary-foreground/20"
              : iconBackgrounds[colorVariant]
          }`}
        >
          <Icon size={24} className={`${featured ? "text-primary-foreground" : iconColors[colorVariant]} transition-transform duration-300 group-hover:scale-110`} />
        </div>

        {/* Content */}
        <h3
          className={`font-display text-lg font-bold mb-2 min-h-[3.5rem] flex items-start ${
            featured ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
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
      </div>

      {/* Decorative gradient on hover */}
      {!featured && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
      )}
    </div>
  );
};
