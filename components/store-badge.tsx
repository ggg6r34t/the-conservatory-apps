import Image from "next/image";
import {
  STORE_BADGE_SIZE,
  STORE_ICON_PATHS,
  STORE_ICON_SIZE,
} from "@/lib/store-icons";

type Store = "apple" | "google";

type StoreBadgeProps = {
  store: Store;
  href?: string;
  /** On dark hero film — light outlines for Google, Apple stays solid */
  onDark?: boolean;
};

const copy = {
  apple: {
    line1: "Download on the",
    line2: "App Store",
    aria: "Download on the App Store",
    eyebrowCaps: false,
  },
  google: {
    line1: "GET IT ON",
    line2: "Google Play",
    aria: "Get it on Google Play",
    eyebrowCaps: true,
  },
} as const;

function StoreMarkIcon({ store }: { store: Store }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center">
      <Image
        src={STORE_ICON_PATHS[store]}
        alt=""
        width={STORE_ICON_SIZE.width}
        height={STORE_ICON_SIZE.height}
        className="max-h-9 max-w-9 object-contain object-center"
        aria-hidden
      />
    </span>
  );
}

const badgeShell = [
  "inline-flex shrink-0 items-center justify-start gap-4",
  "rounded-[14px] px-5",
  "no-underline transition-[transform,opacity] duration-300",
  "hover:-translate-y-px focus-visible:rounded-[14px]",
].join(" ");

export function StoreBadge({ store, href = "#download", onDark = false }: StoreBadgeProps) {
  const text = copy[store];
  const isApple = store === "apple";

  const appleStyles = onDark
    ? "bg-primary text-on-primary shadow-[0_8px_28px_rgba(22,56,40,0.35)] hover:opacity-95"
    : "bg-primary text-on-primary hover:opacity-92";

  const googleStyles = onDark
    ? "border border-[color-mix(in_srgb,var(--surface-container-lowest)_42%,transparent)] bg-transparent text-[color-mix(in_srgb,var(--surface-container-lowest)_95%,white)] hover:bg-[color-mix(in_srgb,var(--surface-container-lowest)_8%,transparent)]"
    : "border border-[color-mix(in_srgb,var(--outline)_55%,var(--outline-variant))] bg-transparent text-primary hover:bg-[color-mix(in_srgb,var(--surface-container-high)_50%,transparent)]";

  const eyebrowClass = [
    "font-sans text-[0.6875rem] font-bold leading-none",
    text.eyebrowCaps ? "uppercase tracking-[0.14em]" : "normal-case tracking-[0.01em]",
    isApple
      ? onDark
        ? "text-[color-mix(in_srgb,var(--on-primary)_72%,transparent)]"
        : "text-[color-mix(in_srgb,var(--on-primary)_70%,transparent)]"
      : onDark
        ? "text-[color-mix(in_srgb,var(--surface-container-lowest)_72%,white)]"
        : "text-on-surface-variant",
  ].join(" ");

  const titleClass = isApple
    ? "font-serif text-[1.3125rem] font-bold leading-none tracking-tight text-on-primary"
    : [
        "text-[1.3125rem] leading-none tracking-tight",
        onDark
          ? "text-[color-mix(in_srgb,var(--surface-container-lowest)_98%,white)]"
          : "text-primary",
      ].join(" ");

  return (
    <a
      href={href}
      aria-label={text.aria}
      className={`${badgeShell} ${isApple ? appleStyles : googleStyles}`}
      style={{
        width: STORE_BADGE_SIZE.widthPx,
        height: STORE_BADGE_SIZE.heightPx,
      }}
    >
      <StoreMarkIcon store={store} />
      <span className="flex shrink-0 flex-col justify-center gap-1 whitespace-nowrap">
        <span className={eyebrowClass}>{text.line1}</span>
        {isApple ? (
          <span className={titleClass}>{text.line2}</span>
        ) : (
          <span className={`${titleClass} whitespace-nowrap`}>
            <span className="font-sans font-bold">Google</span>
            <span className="font-serif font-bold"> Play</span>
          </span>
        )}
      </span>
    </a>
  );
}

type StoreBadgeGroupProps = {
  hrefApple?: string;
  hrefGoogle?: string;
  onDark?: boolean;
  className?: string;
};

export function StoreBadgeGroup({
  hrefApple = "#download",
  hrefGoogle = "#download",
  onDark = false,
  className = "",
}: StoreBadgeGroupProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`.trim()}
      role="group"
      aria-label="Download the app"
    >
      <StoreBadge store="apple" href={hrefApple} onDark={onDark} />
      <StoreBadge store="google" href={hrefGoogle} onDark={onDark} />
    </div>
  );
}

/** @deprecated Use StoreBadge or StoreBadgeGroup */
export function StoreBadgePlaceholder({
  store,
  href = "#download",
  variant = "default",
}: {
  store: Store;
  href?: string;
  variant?: "default" | "light";
}) {
  return <StoreBadge store={store} href={href} onDark={variant === "light"} />;
}
