import type { ReactNode } from "react";

type ChapterShellProps = {
  id?: string;
  ariaLabelledBy?: string;
  children: ReactNode;
  className?: string;
  /** Narrower vertical rhythm */
  tight?: boolean;
};

export function ChapterShell({
  id,
  ariaLabelledBy,
  children,
  className = "",
  tight = false,
}: ChapterShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`section-chapter ${tight ? "section-chapter-tight" : ""} ${className}`.trim()}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}
