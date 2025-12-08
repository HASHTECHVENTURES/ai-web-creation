import { LucideIcon } from "lucide-react";

interface ClientCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ClientCard = ({ icon: Icon, title, description }: ClientCardProps) => {
  return (
    <div className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110">
        <Icon size={28} className="text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
