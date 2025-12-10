import { LucideIcon } from "lucide-react";

type ColorVariant = "blue" | "green" | "purple" | "orange";

const colorVariants: Record<ColorVariant, { bg: string; border: string; hoverBorder: string }> = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 via-blue-100/50 to-indigo-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 via-emerald-100/50 to-teal-50",
    border: "border-green-200",
    hoverBorder: "hover:border-green-400",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 via-violet-100/50 to-fuchsia-50",
    border: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 via-amber-100/50 to-yellow-50",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-400",
  },
};

interface ClientCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorVariant?: ColorVariant;
}

export const ClientCard = ({ icon: Icon, title, description, colorVariant = "blue" }: ClientCardProps) => {
  const colors = colorVariants[colorVariant];
  
  return (
    <div className={`group h-full flex flex-col text-center p-5 md:p-6 rounded-2xl ${colors.bg} border ${colors.border} ${colors.hoverBorder} hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300`}>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
        <Icon size={28} className="text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground flex-grow leading-relaxed">{description}</p>
    </div>
  );
};
