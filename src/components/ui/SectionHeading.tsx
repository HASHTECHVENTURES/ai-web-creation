import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) => {
  if (centered) {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-7xl">
          {badge && (
            <div className="mb-4 text-center">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  light
                    ? "bg-primary-foreground/10 text-secondary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {badge}
              </span>
            </div>
          )}
          <h2
            className={`font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-4 text-center ${
              light ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto ${
                light ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-4xl">
        {badge && (
          <div className="mb-4">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                light
                  ? "bg-primary-foreground/10 text-secondary"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {badge}
            </span>
          </div>
        )}
        <h2
          className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 ${
            light ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-base md:text-lg leading-relaxed ${
              light ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
