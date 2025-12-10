import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  muted?: boolean;
}

export const IndustryCard = ({
  icon: Icon,
  title,
  description,
  muted = false,
}: IndustryCardProps) => {
  return (
    <div
      className={`group relative h-full flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        muted
          ? "bg-muted/50 border-border/50 opacity-80"
          : "bg-card border-border shadow-card hover:shadow-glow"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 flex-shrink-0 ${
          muted ? "bg-muted" : "gradient-primary"
        }`}
      >
        <Icon size={24} className={muted ? "text-muted-foreground" : "text-primary-foreground"} />
      </div>

      {/* Content */}
      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
        {description}
      </p>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};
