import { LegalContent } from "@/components/legal-content";
import { PageShell } from "@/components/page-shell";
import { EditorialPanel } from "@/components/editorial-panel";
import { createPageMetadata } from "@/lib/metadata";
import { termsOfServiceDocument } from "@/lib/legal-content";
import { LEGAL_CONTACT } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: termsOfServiceDocument.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell mainLabel="Terms of Service">
      <LegalContent document={termsOfServiceDocument} />
      <EditorialPanel variant="high" className="mt-16">
        <h2 className="type-title m-0">Contact</h2>
        <p className="type-body mt-4 m-0">
          Legal questions:{" "}
          <a
            href={`mailto:${LEGAL_CONTACT.legalEmail}`}
            className="font-bold text-primary no-underline hover:underline"
          >
            {LEGAL_CONTACT.legalEmail}
          </a>
        </p>
      </EditorialPanel>
    </PageShell>
  );
}
