import Image from "next/image";
import { BRAND_ICON, BRAND_MARK_SIZE, type BrandIconTone } from "@/lib/brand";
import { SITE_NAME } from "@/lib/site";

type BrandLockupProps = {
  /** Light icon on dark hero, or primary icon on linen surfaces */
  tone?: BrandIconTone;
  /** Classes on the flex row (e.g. link color utilities) */
  className?: string;
  /** Classes on the wordmark text */
  textClassName?: string;
};

export function BrandMark({ tone = "onLight" }: { tone?: BrandIconTone }) {
  return (
    <Image
      src={BRAND_ICON[tone]}
      alt=""
      width={BRAND_MARK_SIZE}
      height={BRAND_MARK_SIZE}
      className="h-9 w-9 shrink-0"
      unoptimized
      aria-hidden
    />
  );
}

export function BrandLockup({
  tone = "onLight",
  className = "",
  textClassName = "",
}: BrandLockupProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark tone={tone} />
      <span className={textClassName}>{SITE_NAME}</span>
    </span>
  );
}
