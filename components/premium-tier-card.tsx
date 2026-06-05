import { EditorialPanel } from "@/components/editorial-panel";

type PremiumTierCardProps = {
  name: string;
  role: string;
  description: string;
  highlighted?: boolean;
};

export function PremiumTierCard({
  name,
  role,
  description,
  highlighted = false,
}: PremiumTierCardProps) {
  return (
    <article className="h-full">
      <EditorialPanel
        variant={highlighted ? "low" : "lowest"}
        className={`flex h-full flex-col gap-3 ${highlighted ? "ring-2 ring-[color-mix(in_srgb,var(--primary)_18%,transparent)]" : ""}`}
      >
        <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          {role}
        </p>
        <h3 className="m-0 font-serif text-2xl font-bold text-primary">{name}</h3>
        <p className="m-0 flex-1 text-sm leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </EditorialPanel>
    </article>
  );
}
