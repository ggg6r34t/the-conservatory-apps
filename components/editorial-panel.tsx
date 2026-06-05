type EditorialPanelProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "low" | "lowest" | "high";
};

const variantClasses = {
  low: "bg-surface-container-low",
  lowest: "bg-surface-container-lowest shadow-[var(--shadow-soft)]",
  high: "bg-surface-container-high",
};

export function EditorialPanel({
  children,
  className = "",
  variant = "lowest",
}: EditorialPanelProps) {
  return (
    <div
      className={`rounded-[var(--radius-panel)] p-6 md:p-10 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
