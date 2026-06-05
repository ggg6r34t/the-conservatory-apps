import { EditorialPanel } from "@/components/editorial-panel";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "primary" | "secondary" | "tertiary";
};

const accentDot = {
  primary: "bg-primary-fixed",
  secondary: "bg-secondary-container",
  tertiary: "bg-tertiary-fixed",
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  accent = "primary",
}: FeatureCardProps) {
  return (
    <article className="h-full">
      <EditorialPanel className="flex h-full flex-col gap-4">
        <span
          className={`inline-block h-2 w-2 rounded-full ${accentDot[accent]}`}
          aria-hidden
        />
        <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
          {eyebrow}
        </p>
        <h3 className="m-0 font-serif text-2xl font-bold leading-snug text-primary">
          {title}
        </h3>
        <p className="m-0 flex-1 text-base leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </EditorialPanel>
    </article>
  );
}
