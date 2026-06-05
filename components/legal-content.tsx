import type { LegalDocument } from "@/lib/legal-content";
import { LEGAL_LAST_UPDATED } from "@/lib/legal-content";
import { EditorialPanel } from "@/components/editorial-panel";

type LegalContentProps = {
  document: LegalDocument;
};

export function LegalContent({ document }: LegalContentProps) {
  return (
    <article className="mx-auto max-w-[var(--measure-prose)]">
      <header className="mb-12">
        <p className="type-eyebrow m-0">{document.prefaceLabel}</p>
        <h1 className="type-chapter-title mt-5">{document.title}</h1>
        <p className="type-small mt-4 m-0">Effective {LEGAL_LAST_UPDATED}</p>
        <p className="mt-2 text-[var(--text-small)] font-bold text-secondary">
          {document.subtitle}
        </p>
      </header>

      <EditorialPanel className="mb-14">
        <h2 className="type-title m-0">{document.prefaceTitle}</h2>
        <p className="type-body mt-5 m-0">{document.prefaceBody}</p>
      </EditorialPanel>

      <div className="flex flex-col gap-12">
        {document.sections.map((section) => (
          <section key={`${section.eyebrow}-${section.title}`}>
            <p className="type-eyebrow m-0">{section.eyebrow}</p>
            <h2 className="type-title mt-4">{section.title}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="type-body m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
