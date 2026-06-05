import { LegalContent } from "@/components/legal-content";
import { PageShell } from "@/components/page-shell";
import { EditorialPanel } from "@/components/editorial-panel";
import { createPageMetadata } from "@/lib/metadata";
import { privacyPolicyDocument } from "@/lib/legal-content";
import { LEGAL_CONTACT } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: privacyPolicyDocument.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell mainLabel="Privacy Policy">
      <LegalContent document={privacyPolicyDocument} />
      <EditorialPanel variant="high" className="mt-16">
        <h2 className="type-title m-0">Contact</h2>
        <p className="type-body mt-4 m-0">
          Privacy questions:{" "}
          <a
            href={`mailto:${LEGAL_CONTACT.privacyEmail}`}
            className="font-bold text-primary no-underline hover:underline"
          >
            {LEGAL_CONTACT.privacyEmail}
          </a>
        </p>
      </EditorialPanel>
    </PageShell>
  );
}
