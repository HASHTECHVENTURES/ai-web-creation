import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
}

export const ArticleCard = ({
  title,
  excerpt,
  category,
  imageUrl,
}: ArticleCardProps) => {
  return (
    <article className="group relative h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-video overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
          {category}
        </span>
        <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto">
          Read More
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
};
