import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { EditorialPanel } from "@/components/editorial-panel";
import { createPageMetadata } from "@/lib/metadata";
import { LEGAL_CONTACT, SITE_NAME } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Support",
  description: `Help and contact for ${SITE_NAME}—account, privacy, subscriptions, and app questions.`,
  path: "/support",
});

const supportTopics = [
  {
    title: "Account & privacy",
    body: "Update your profile, export collection data, or delete your account from Profile → Privacy & Security in the app. For privacy rights requests, email us directly.",
    email: LEGAL_CONTACT.privacyEmail,
    emailLabel: "Privacy",
  },
  {
    title: "Subscriptions & billing",
    body: "Purchases, renewals, and refunds are managed by Apple or Google. Use Restore Purchases in the app when switching devices. Subscription questions that are not handled by your store:",
    email: LEGAL_CONTACT.supportEmail,
    emailLabel: "Support",
  },
  {
    title: "Data export & backup",
    body: "Export your collection from Profile → Data & Backup. Premium adds enhanced export scope; basic export remains available on the free tier. Backup status reflects actual sync outcomes—see Privacy & Security in the app.",
    email: LEGAL_CONTACT.supportEmail,
    emailLabel: "Support",
  },
  {
    title: "Terms & legal",
    body: "Review our policies on the web or in Profile → Legal inside the app.",
    link: { href: "/terms", label: "Terms of Service" },
    link2: { href: "/privacy", label: "Privacy Policy" },
  },
] as const;

export default function SupportPage() {
  return (
    <PageShell mainLabel="Support">
      <header className="mx-auto max-w-[var(--measure-prose)]">
        <p className="type-eyebrow m-0">Support</p>
        <h1 className="type-chapter-title mt-5">We&apos;re here when you need us</h1>
        <p className="type-body-lg mt-7 m-0">
          Most answers live inside {SITE_NAME} under Profile. For anything else,
          reach out by email—we read every message.
        </p>
      </header>

      <div className="mx-auto mt-14 flex max-w-[var(--measure-prose)] flex-col gap-8">
        {supportTopics.map((topic) => (
          <EditorialPanel key={topic.title}>
            <h2 className="type-title m-0">{topic.title}</h2>
            <p className="type-body mt-4 m-0">{topic.body}</p>
            {"email" in topic && topic.email && (
              <p className="type-body mt-5 m-0">
                <span className="font-bold text-on-surface">{topic.emailLabel}: </span>
                <a
                  href={`mailto:${topic.email}`}
                  className="font-bold text-primary no-underline hover:underline"
                >
                  {topic.email}
                </a>
              </p>
            )}
            {"link" in topic && topic.link && (
              <p className="type-body mt-5 m-0">
                <Link
                  href={topic.link.href}
                  className="font-bold text-primary no-underline hover:underline"
                >
                  {topic.link.label}
                </Link>
                {"link2" in topic && topic.link2 && (
                  <>
                    {" · "}
                    <Link
                      href={topic.link2.href}
                      className="font-bold text-primary no-underline hover:underline"
                    >
                      {topic.link2.label}
                    </Link>
                  </>
                )}
              </p>
            )}
          </EditorialPanel>
        ))}
      </div>

      <EditorialPanel variant="high" className="mx-auto mt-14 max-w-[var(--measure-prose)]">
        <h2 className="type-title m-0">General contact</h2>
        <p className="type-body mt-4 m-0">
          <a
            href={`mailto:${LEGAL_CONTACT.supportEmail}`}
            className="font-bold text-primary no-underline hover:underline"
          >
            {LEGAL_CONTACT.supportEmail}
          </a>
        </p>
      </EditorialPanel>
    </PageShell>
  );
}
