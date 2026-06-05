type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Tighter vertical rhythm for nested groups */
  compact?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-[var(--space-page)] ${compact ? "py-10 md:py-14" : "py-14 md:py-20"} ${className}`}
    >
      {(eyebrow || title || description) && (
        <header className={`max-w-2xl ${compact ? "mb-8" : "mb-12 md:mb-14"}`}>
          {eyebrow && (
            <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
