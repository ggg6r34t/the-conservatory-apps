/**
 * Static legal copy ported from the-conservatory mobile repo.
 * Source: features/legal/content/* and features/legal/constants.ts
 * Contact emails use the marketing domain (theconservatory.garden).
 */

import { LEGAL_CONTACT, LEGAL_LAST_UPDATED } from "@/lib/site";

export type LegalSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  subtitle: string;
  description: string;
  prefaceLabel: string;
  prefaceTitle: string;
  prefaceBody: string;
  sections: LegalSection[];
};

const { privacyEmail, legalEmail, supportEmail } = LEGAL_CONTACT;

const privacySecuritySections: LegalSection[] = [
  {
    eyebrow: "LOCAL STORAGE",
    title: "SQLite and on-device files",
    paragraphs: [
      "Plant records, care logs, reminders, photos metadata, and related tables are stored in a local SQLite database on your device.",
      "Photo files and export files are stored in the app sandbox on your device. Other apps cannot access this data without device-level compromise.",
    ],
  },
  {
    eyebrow: "AUTHENTICATION",
    title: "Sessions and credentials",
    paragraphs: [
      "When cloud sign-in is enabled, Supabase Auth manages your account credentials. Session tokens are stored using Expo SecureStore, not plain AsyncStorage.",
      "Local development builds without Supabase may use local-only credentials stored in SQLite for testing; those builds are not intended for production release.",
    ],
  },
  {
    eyebrow: "ENCRYPTION",
    title: "In transit and at rest",
    paragraphs: [
      "Communication with Supabase, RevenueCat, and analytics services uses encrypted HTTPS/TLS.",
      "Device storage benefits from operating-system protections available on your phone or tablet. We do not implement a separate user-managed encryption passphrase for your collection.",
    ],
  },
  {
    eyebrow: "SYNC",
    title: "Cloud sync and queue integrity",
    paragraphs: [
      "When auto-sync is enabled, local changes are written to a sync queue and replayed to Supabase when online. The local database remains the source of truth during normal operation.",
      "Sync diagnostics in Backup Details show queue status honestly, including deferred or abandoned items when applicable.",
    ],
  },
  {
    eyebrow: "BACKUP",
    title: "Premium photo backup",
    paragraphs: [
      "Premium subscribers may back up plant photos to Supabase Storage when sync runs successfully. Free accounts may keep photos on device only.",
      "Backup status reflects actual sync outcomes; the app does not claim backup completeness when uploads are deferred or unavailable.",
    ],
  },
  {
    eyebrow: "NOTIFICATIONS",
    title: "Reminders without remote push",
    paragraphs: [
      "Care reminders use local scheduled notifications on your device. The app does not register an Expo push token or send remote push campaigns in the current release.",
    ],
  },
  {
    eyebrow: "TELEMETRY",
    title: "Product analytics",
    paragraphs: [
      "In production builds with PostHog configured, limited product analytics may be collected to understand feature usage and reliability. Analytics do not include the contents of your care notes or photos.",
    ],
  },
  {
    eyebrow: "SECURITY LIMITS",
    title: "What we cannot guarantee",
    paragraphs: [
      "No security program prevents all unauthorized access, device loss, or user error. Protect your device passcode, store account credentials, and maintain your own export copies for important records.",
    ],
  },
];

const dataRetentionSections: LegalSection[] = [
  {
    eyebrow: "ACTIVE ACCOUNTS",
    title: "While you use the app",
    paragraphs: [
      "Collection data, preferences, reminders, and synced cloud copies are retained while your account is active and you use the service.",
      "Cached entitlement and AI response data on your device may persist until cleared by the app, account deletion, or cache expiry.",
    ],
  },
  {
    eyebrow: "LOCAL DATA",
    title: "On your device",
    paragraphs: [
      "Local SQLite data, photos, drafts, and exports remain on your device until you delete them, delete your account through the app, or uninstall the app.",
      "Uninstalling the app without exporting may permanently remove local-only data that was never synced.",
    ],
  },
  {
    eyebrow: "CLOUD DATA",
    title: "Supabase records",
    paragraphs: [
      "When cloud sync is enabled, collection tables and auth profile data are stored in Supabase until you delete your account or we delete data in accordance with this policy.",
      "Premium photo objects in Supabase Storage remain until deleted through account deletion workflows or manual cleanup. Database row deletion does not automatically guarantee immediate removal of every storage object from all backup tiers.",
    ],
  },
  {
    eyebrow: "BILLING RECORDS",
    title: "Subscription history",
    paragraphs: [
      "Apple, Google, and RevenueCat retain purchase history according to their own policies. We retain entitlement verification timestamps and cached tier state as needed to provide Premium features.",
    ],
  },
  {
    eyebrow: "ANALYTICS RETENTION",
    title: "Product events",
    paragraphs: [
      "PostHog event data, when collected, is retained according to our PostHog project configuration and provider policies.",
    ],
  },
  {
    eyebrow: "LEGAL RETENTION",
    title: "When we keep data longer",
    paragraphs: [
      "We may retain limited records longer where necessary for fraud prevention, security investigations, dispute resolution, or legal compliance.",
    ],
  },
];

const dataExportSections: LegalSection[] = [
  {
    eyebrow: "HOW TO EXPORT",
    title: "In-app export flow",
    paragraphs: [
      "Go to Profile → Data & Backup → Export Collection Data, or open Export Collection Data directly from Privacy & Security.",
      "The app generates a JSON file on your device and opens the system share sheet so you can save or send the file.",
    ],
  },
  {
    eyebrow: "EXPORT FORMAT",
    title: "JSON structure",
    paragraphs: [
      "Exports use JSON format with exportVersion 2. The file includes metadata such as export timestamp, mode, and an explicit note that authentication credentials are excluded.",
      "You may re-import a prior export using Import Collection Data, subject to validation and confirmation in the app.",
    ],
  },
  {
    eyebrow: "BASIC EXPORT",
    title: "Free tier scope",
    paragraphs: [
      "Basic export includes plants, care logs, reminders, memorial/graveyard entries, and preferences.",
      "Photos are represented by counts only in basic mode. Care log tags, status snapshots, specimen tags, and archive curation overrides are not included in full.",
    ],
  },
  {
    eyebrow: "PREMIUM EXPORT",
    title: "Premium tier scope",
    paragraphs: [
      "Premium export includes everything in basic export plus full photo metadata and local URIs, care log tags, plant status snapshots, specimen tags, and archive curation overrides.",
    ],
  },
  {
    eyebrow: "EXCLUDED FROM EXPORT",
    title: "What exports never include",
    paragraphs: [
      "Exports do not include passwords, authentication tokens, Supabase session material, RevenueCat receipts, or platform store billing credentials.",
      "Exports reflect data available on your device at export time. Cloud-only copies not yet hydrated locally may be incomplete until sync completes.",
    ],
  },
];

const accountDeletionSections: LegalSection[] = [
  {
    eyebrow: "HOW TO DELETE",
    title: "In-app steps",
    paragraphs: [
      "Open Profile → Privacy & Security → Delete Account. You must confirm the destructive action in the dialog.",
      "Deleting your account does not automatically cancel an active App Store or Google Play subscription. Cancel billing separately in your platform subscription settings.",
    ],
  },
  {
    eyebrow: "CLOUD DELETION",
    title: "When Supabase is configured",
    paragraphs: [
      "The app invokes our delete-account edge function, which deletes your Supabase Auth user. Database rows tied to your user ID are removed through foreign-key cascade, including plants, photos metadata, care logs, reminders, preferences, and related synced tables.",
      "After remote deletion succeeds, the app clears local collection data and signs you out.",
    ],
  },
  {
    eyebrow: "LOCAL DELETION",
    title: "On-device wipe",
    paragraphs: [
      "The app deletes local SQLite collection tables, sync queue entries, preferences, and user profile rows stored on the device as part of account deletion.",
      "Session tokens, plant drafts, and onboarding flags are cleared. Some non-collection caches may remain until overwritten or until you remove the app.",
    ],
  },
  {
    eyebrow: "STORAGE FILES",
    title: "Photos and backups",
    paragraphs: [
      "Local photo files in the app sandbox are removed as part of clearing local collection data where applicable.",
      "Cloud photo objects in Supabase Storage may not be deleted instantly by the auth deletion flow alone. Residual storage objects, if any, are purged according to provider backup and lifecycle practices.",
    ],
  },
  {
    eyebrow: "LOCAL-ONLY BUILDS",
    title: "Without cloud backend",
    paragraphs: [
      "Development or offline builds without Supabase skip remote deletion and remove local account data and session state only.",
    ],
  },
  {
    eyebrow: "DELETION TIMING",
    title: "Processing window",
    paragraphs: [
      "Account deletion begins immediately when you confirm. Cloud auth deletion is typically completed within minutes, but provider backups or replication may retain deleted data for up to approximately 30 days before automatic purge.",
      "Analytics or billing records held by Apple, Google, RevenueCat, or PostHog are governed by those providers' retention schedules.",
      `If deletion fails or you need confirmation, contact ${privacyEmail}.`,
    ],
  },
];

const subscriptionTermsSections: LegalSection[] = [
  {
    eyebrow: "PLANS",
    title: "Available subscriptions",
    paragraphs: [
      "Premium is offered as monthly and/or annual auto-renewing subscriptions. Plan names, prices, currency, and any free trial length are displayed in the app before you confirm purchase and may vary by region or store listing.",
      "Feature availability may change over time, but your collection data remains yours regardless of subscription status.",
    ],
  },
  {
    eyebrow: "FREE TRIALS",
    title: "Introductory offers",
    paragraphs: [
      "If a free trial is offered for your selected plan, the trial length and price after the trial are shown on the subscription screen before purchase.",
      "Unless you cancel before the trial ends, the trial converts to a paid subscription and your store account is charged at the then-current price for the selected plan.",
      "Trial eligibility is determined by Apple or Google and may be limited to new subscribers.",
    ],
  },
  {
    eyebrow: "RENEWAL",
    title: "Automatic renewal",
    paragraphs: [
      "Subscriptions renew automatically at the end of each billing period unless cancelled at least 24 hours before the current period ends.",
      "Your store account is charged within 24 hours prior to the start of each renewal period at the price shown in your store subscription settings.",
    ],
  },
  {
    eyebrow: "CANCELLATION",
    title: "How to cancel",
    paragraphs: [
      "You may cancel anytime through your Apple App Store or Google Play subscription settings. Cancellation stops future renewals; you retain Premium access until the end of the current paid period unless otherwise required by store policy.",
      "Deleting The Conservatory app does not cancel your subscription. Manage subscriptions in your platform account.",
    ],
  },
  {
    eyebrow: "RESTORE",
    title: "Restore purchases",
    paragraphs: [
      "If you reinstall the app or switch devices, use Restore Purchases on the Subscription Plans screen while signed in with the same store account used for the original purchase.",
      "Restored entitlements depend on Apple or Google purchase records and RevenueCat validation.",
    ],
  },
  {
    eyebrow: "REFUNDS",
    title: "Store-managed refunds",
    paragraphs: [
      "Payments, refunds, and billing disputes are handled by Apple or Google according to their policies. We do not process refunds directly.",
      "To request a refund, use the refund workflow provided by your platform store.",
    ],
  },
  {
    eyebrow: "PRICE CHANGES",
    title: "Changes to pricing",
    paragraphs: [
      "Subscription prices may change in the future. If a price increase applies to your subscription, your platform store will notify you according to its rules and may require your consent before the new price takes effect.",
    ],
  },
  {
    eyebrow: "DOWNGRADES",
    title: "When Premium ends",
    paragraphs: [
      "When Premium expires or is cancelled, Premium-only features such as full photo cloud backup, advanced AI quotas, enhanced export, and certain library filters may become unavailable. Your existing collection data remains on your device and in cloud sync where already stored, subject to your account and sync settings.",
      "See the After Premium screen in the app for a feature-level summary.",
    ],
  },
  {
    eyebrow: "BILLING SUPPORT",
    title: "Contact",
    paragraphs: [
      `Subscription questions: ${supportEmail}. For store billing receipts and refunds, contact Apple or Google support directly.`,
    ],
  },
];

export const privacyPolicyDocument: LegalDocument = {
  title: "Privacy Policy",
  subtitle: "Data stewardship",
  description:
    "How The Conservatory collects, uses, stores, protects, exports, and deletes your information.",
  prefaceLabel: "PRIVACY POLICY",
  prefaceTitle: "Your botanical archive, your control",
  prefaceBody:
    "The Conservatory is a local-first plant care app. Most collection data lives on your device first. When you sign in and enable cloud features, selected data may sync to our backend so you can restore it across sessions or devices.",
  sections: [
    {
      eyebrow: "DATA WE COLLECT",
      title: "Information you provide",
      paragraphs: [
        "Account information such as email address, display name, and profile photo when you create or update an account.",
        "Collection content you enter or upload, including plant names, species, locations, care logs, notes, reminders, memorial and graveyard entries, specimen tags, and photos.",
        "Preferences such as theme, timezone, default watering hour, reminder settings, and auto-sync preferences.",
      ],
    },
    {
      eyebrow: "AUTOMATIC DATA",
      title: "Technical and usage information",
      paragraphs: [
        "Device platform (iOS, Android, or web), app interactions needed to operate core features, sync queue status, and diagnostic information when something fails.",
        "In production builds where configured, we use PostHog to collect product analytics events such as onboarding steps, subscription actions, and feature usage. Analytics are tied to your account identifier when you are signed in.",
        "We do not collect precise GPS location in the app. Plant location fields are free-text labels you choose to enter.",
      ],
    },
    {
      eyebrow: "SUBSCRIPTION DATA",
      title: "Billing and entitlement information",
      paragraphs: [
        "Subscription purchases are processed by Apple or Google. RevenueCat helps us validate Premium entitlement status, renewal dates, and restore purchases. We do not receive or store your full payment card number.",
        "We may store subscription tier, verification timestamps, and cached entitlement state on your device to keep Premium features available offline.",
      ],
    },
    {
      eyebrow: "AI PROCESSING",
      title: "When cloud assistance is used",
      paragraphs: [
        "Many AI features run locally on your device from your care history. When Premium and cloud AI are enabled, selected plant metadata, care notes, photo references, and locally generated summaries may be sent to our Supabase edge functions for processing.",
        "The app does not currently send your data to third-party large language model providers such as OpenAI or Anthropic. Cloud AI responses may use prepared fallbacks or server-side logic configured for the service.",
        "See the AI Disclosure Policy in the app for limitations and your responsibilities.",
      ],
    },
    {
      eyebrow: "WHY WE USE DATA",
      title: "Purposes of processing",
      paragraphs: [
        "Provide account access, collection management, reminders, exports, imports, memorial features, and Premium capabilities you choose to use.",
        "Sync and back up collection data when cloud services are enabled.",
        "Validate subscriptions, enforce usage limits, maintain security, troubleshoot errors, and improve reliability.",
        "Comply with law, respond to lawful requests, and enforce our terms.",
      ],
    },
    {
      eyebrow: "LEGAL BASES",
      title: "GDPR and UK GDPR",
      paragraphs: [
        "Where GDPR or UK GDPR applies, we rely on: (1) performance of a contract to provide the app and Premium features you request; (2) legitimate interests in securing, improving, and operating the service, balanced against your rights; (3) consent where required for optional permissions such as camera, photo library, or notifications; and (4) legal obligation where we must retain or disclose information.",
        "You may withdraw consent for optional permissions in device settings. Withdrawal does not affect processing already performed.",
      ],
    },
    {
      eyebrow: "STORAGE",
      title: "Where data is kept",
      paragraphs: [
        "On device: SQLite database (primary local store), AsyncStorage (drafts, caches, onboarding flags), SecureStore (session tokens), and local photo files.",
        "In cloud (when configured and enabled): Supabase PostgreSQL for synced collection tables, Supabase Storage for Premium photo backup, and Supabase Auth for account credentials.",
        "Analytics events may be processed by PostHog in the United States or the region configured for your PostHog project.",
      ],
    },
    {
      eyebrow: "SHARING",
      title: "Subprocessors and disclosures",
      paragraphs: [
        "We do not sell your personal information. We share information only with service providers that help us operate the app, with platform stores for billing, or when required by law.",
        "Current subprocessors include, where configured: Supabase (authentication, database, storage, edge functions), RevenueCat (subscription management), PostHog (analytics), Expo/React Native platform services, and Apple App Store or Google Play for payments.",
      ],
    },
    {
      eyebrow: "INTERNATIONAL TRANSFERS",
      title: "Cross-border processing",
      paragraphs: [
        "If you use the app outside the United States, your information may be processed in the United States or other countries where our providers operate. We rely on appropriate safeguards such as standard contractual clauses where required.",
      ],
    },
    ...privacySecuritySections,
    ...dataRetentionSections,
    ...dataExportSections,
    ...accountDeletionSections,
    {
      eyebrow: "YOUR RIGHTS",
      title: "Access, correction, deletion, and portability",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, restrict, object to, or port your personal information.",
        "You can update profile information in the app, export collection data from Data & Backup or Privacy & Security, and delete your account from Privacy & Security.",
        `To exercise privacy rights, contact ${privacyEmail}. We may need to verify your identity before responding.`,
      ],
    },
    {
      eyebrow: "CHILDREN",
      title: "Minors",
      paragraphs: [
        "The Conservatory is not directed to children under 13, and we do not knowingly collect personal information from children under 13. Contact us if you believe a child has provided personal information.",
      ],
    },
    {
      eyebrow: "CALIFORNIA",
      title: "CCPA/CPRA notice",
      paragraphs: [
        "California residents: we do not sell or share personal information for cross-context behavioral advertising. You may request access, deletion, or correction as described above.",
      ],
    },
    {
      eyebrow: "CHANGES",
      title: "Updates to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Material changes will be reflected in the app and by updating the effective date below.",
        `Privacy questions: ${privacyEmail}.`,
      ],
    },
  ],
};

export const termsOfServiceDocument: LegalDocument = {
  title: "Terms of Service",
  subtitle: "Membership & billing",
  description:
    "The rules, subscription terms, and expectations that apply when you use The Conservatory.",
  prefaceLabel: "SERVICE TERMS",
  prefaceTitle: "Agreement to these terms",
  prefaceBody:
    "By creating an account, subscribing, or using The Conservatory, you agree to these Terms of Service, including the subscription and billing terms in Part II below. If you do not agree, do not use the app.",
  sections: [
    {
      eyebrow: "ELIGIBILITY",
      title: "Who may use the service",
      paragraphs: [
        "You must be at least 13 years old, or the minimum age required in your jurisdiction, to use The Conservatory. If you are under the age of majority where you live, you may use the app only with permission from a parent or legal guardian who accepts these terms on your behalf.",
        "You are responsible for all activity under your account and for keeping your sign-in credentials secure. You agree to provide accurate account information and to use the app only in lawful ways.",
      ],
    },
    {
      eyebrow: "YOUR CONTENT",
      title: "Ownership and license you grant",
      paragraphs: [
        "Your plant records, care logs, photos, notes, memorial entries, graveyard records, reminders, and related archive content remain yours.",
        "You grant us the limited rights needed to host, store, process, back up, sync, and display that content solely to operate the service and the features you choose to enable.",
      ],
    },
    {
      eyebrow: "ACCEPTABLE USE",
      title: "Prohibited conduct",
      paragraphs: [
        "You may not use The Conservatory to violate applicable law, interfere with the service, attempt unauthorized access, reverse engineer protected systems, misuse other users' information, or upload content you do not have the right to use.",
        "We may limit, suspend, or remove access if conduct threatens the safety, reliability, or integrity of the service.",
      ],
    },
    {
      eyebrow: "AI FEATURES",
      title: "Informational tools only",
      paragraphs: [
        "The Conservatory may provide AI-assisted insights, summaries, species suggestions, and related features. These outputs are generated from your collection data and, where enabled, cloud processing. They are provided for informational purposes only.",
        "AI features do not provide professional horticultural, agricultural, medical, or legal advice. You remain responsible for plant care decisions. See the AI Disclosure Policy in the app for details.",
      ],
    },
    {
      eyebrow: "SERVICE CHANGES",
      title: "Availability and updates",
      paragraphs: [
        "We may update, improve, limit, or discontinue features at any time. We do not guarantee that every feature will remain available in the same form forever.",
        "The app may occasionally be unavailable due to maintenance, technical issues, network failures, provider outages, or circumstances outside our reasonable control.",
      ],
    },
    {
      eyebrow: "INTELLECTUAL PROPERTY",
      title: "App ownership",
      paragraphs: [
        "The Conservatory, including its design, branding, software, and proprietary features, is owned by its rights holders and protected by applicable intellectual property laws. These terms do not transfer ownership of the app or its underlying software to you.",
      ],
    },
    {
      eyebrow: "TERMINATION",
      title: "Ending your use",
      paragraphs: [
        "You may stop using the app at any time and may delete your account from Privacy & Security in the app. We may suspend or terminate access if you materially breach these terms or if required for legal, security, or operational reasons.",
        "Sections that by their nature should survive termination, including disclaimers and limitations of liability, will continue to apply.",
      ],
    },
    {
      eyebrow: "DISCLAIMERS",
      title: "No warranties",
      paragraphs: [
        'To the maximum extent permitted by applicable law, The Conservatory is provided on an "as available" and "as is" basis. We do not guarantee uninterrupted operation, complete accuracy of care reminders or AI outputs, or fitness for every personal, commercial, or horticultural purpose.',
      ],
    },
    {
      eyebrow: "LIABILITY",
      title: "Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of plants, data, profits, or goodwill arising from your use of the service.",
        "Our aggregate liability for claims relating to the service will not exceed the greater of (a) the amount you paid us for Premium in the twelve months before the claim or (b) USD $50, except where applicable law requires otherwise.",
      ],
    },
    {
      eyebrow: "PART II",
      title: "Subscription & billing terms",
      paragraphs: [
        "The Conservatory Premium is sold as an auto-renewing subscription through the Apple App Store or Google Play, processed by RevenueCat on our behalf. Your collection data remains yours and is not deleted when a subscription ends, although some Premium-only features may become unavailable.",
      ],
    },
    ...subscriptionTermsSections,
    {
      eyebrow: "GOVERNING LAW",
      title: "Disputes and contact",
      paragraphs: [
        "These terms are governed by the laws of the State of Delaware, United States, excluding conflict-of-law rules, except where mandatory consumer protection laws in your country of residence provide otherwise.",
        `Questions about these terms may be sent to ${legalEmail}.`,
      ],
    },
  ],
};

export { LEGAL_LAST_UPDATED };
