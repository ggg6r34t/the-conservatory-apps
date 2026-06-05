type ChapterIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
  /** Light text on dark sections (archive) */
  inverted?: boolean;
  id?: string;
};

export function ChapterIntro({
  eyebrow,
  title,
  body,
  centered = false,
  inverted = false,
  id,
}: ChapterIntroProps) {
  return (
    <header
      className={`prose-intro ${centered ? "mx-auto text-center" : ""} ${inverted ? "prose-intro-inverted" : ""}`}
    >
      <p className="type-eyebrow m-0">{eyebrow}</p>
      <h2 id={id} className="type-chapter-title mt-5">
        {title}
      </h2>
      {body && <p className="type-body-lg mt-7 max-w-[38rem]">{body}</p>}
    </header>
  );
}
