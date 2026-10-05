export interface DocSection {
  title: string;
  content: string | string[];
}

export interface AppInfoDoc {
  id: string;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: DocSection[];
  meta?: Record<string, string | Record<string, string>[]>;
}

export const APP_INFO_DOCS: Record<string, AppInfoDoc> = {
  about: {
    id: 'about',
    title: 'About MS Family',
    subtitle: 'Your Family. Organized. Connected. Secure.',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Mission & Vision',
        content: 'MS Family is built with a singular vision: to empower modern families with a secure, private, and collaborative ecosystem to manage their daily life. We bring financial organization, family safety, document storage, and shared reminders into one unified application.'
      },
      {
        title: '2. Smart SMS Expense Reader',
        content: [
          'Our signature financial module features a local Smart SMS Reader. When you receive a transaction message from your bank, credit card, or payment gateway (like UPI, GPay, or NetBanking), MS Family parses it locally on your device.',
          '• Local Processing: The parsing engine runs on your device using pattern-matching models. Your raw SMS messages are never uploaded to any cloud server.',
          '• Smart Drafts: Automatically generates transaction drafts (category, merchant, amount, type) and prompts you for verification.',
          '• Multi-currency support: Handles regional transaction formats to maintain expense booking accuracy.'
        ]
      },
      {
        title: '3. Collaborative Family Groups',
        content: [
          'Connect your household with secure, cloud-synchronized Family Groups. Join or create groups using invitation codes.',
          '• Shared Bookkeeping: Track joint accounts, calculate balances, and track who owes whom in real-time.',
          '• Role Management: Group Admins can add or remove members, control document visibility, and manage financial categories.',
          '• Live Tracking & Safety: View real-time location of family members who have opted in. Designed for the safety of children and elderly members.'
        ]
      },
      {
        title: '4. Document Vault (My Proofs)',
        content: [
          'Never lose an invoice, receipt, warranty card, or identity document. The My Proofs vault provides a secure backup solution.',
          '• Cloud Storage Security: Files are uploaded to private cloud storage buckets with infrastructure-level encryption at rest.',
          '• Authorization Gates: Only family members explicitly authorized by the file owner can view documents.',
          '• Fast Retrieval: Filter proofs by category, date, amount, or family member.'
        ]
      },
      {
        title: '5. Savings Goals & Budget Monitors',
        content: [
          'Plan for the future with target-based Savings Goals and multi-category budget monitors.',
          '• Goal Tracking: Calculate monthly targets required, milestone projections, and visual progress bars towards emergency funds, education, or vehicle goals.',
          '• Predictive Alerts: Proactive notifications when category expenditures exceed preset monthly thresholds.'
        ]
      },
      {
        title: '6. Revenue Model',
        content: [
          'MS Family is designed, developed, and operated by XPOOL Technology Pvt Ltd.',
          '• Free Plan: Core features are available at no cost. Free users may see non-intrusive banner advertisements powered by Google AdMob.',
          '• Premium Plans: Paid subscribers enjoy an ad-free experience with expanded storage, unlimited transactions, and advanced features.',
          '• We do not sell, rent, or share your personal data with third-party data brokers or advertisers for profiling purposes.'
        ]
      }
    ],
    meta: {
      developer: 'XPOOL Technology Pvt Ltd',
      website: 'https://xpool.info',
      supportEmail: 'velgo7686@gmail.com',
      version: '2.1.9',
      buildNumber: '219',
      copyright: '© 2026 XPOOL Technology Pvt Ltd. All rights reserved.',
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/xpool-tech' },
        { name: 'Twitter', url: 'https://twitter.com/xpool_tech' },
        { name: 'LinkedIn', url: 'https://linkedin.com/company/xpool-technology' }
      ] as any
    }
  },

  legal: {
    id: 'legal',
    title: 'Legal Information',
    subtitle: 'Legal Framework, Compliance & Liability Rules',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Ownership and Intellectual Property',
        content: 'The MS Family application, including all source code, UX designs, visual assets, layouts, graphics, database queries, SMS parsing patterns, and backend orchestrators, is the exclusive intellectual property of XPOOL Technology Pvt Ltd. Copying, reverse-engineering, modifying, or distributing any code or asset without explicit written consent is strictly prohibited under applicable copyright laws.'
      },
      {
        title: '2. Device Permissions and Data Sharing Consent',
        content: 'By activating features such as Geolocation Sharing, Push Notifications, or the Smart SMS Reader, you explicitly authorize MS Family to request and access the necessary device system APIs. You maintain the right to revoke these permissions at any time via system settings, though doing so will disable the respective functionalities.'
      },
      {
        title: '3. Financial Disclaimer',
        content: 'The financial tools, automated SMS expense draft generators, budget calculators, savings goal monitors, and interest calculators provided within the application are intended solely for personal information and organizational purposes. XPOOL Technology Pvt Ltd does not guarantee mathematical accuracy for tax or official reporting. Users are advised to review and verify all transaction entries manually.'
      },
      {
        title: '4. Location Tracking Responsibility & Safety Usage',
        content: 'Live location sharing is designed as a safety tool for family members. You agree not to use location tracking for illegal surveillance or stalkerware-like activities. You must obtain consent from adult family members before enabling live tracking on their devices. Location data is automatically deleted after 24 hours.'
      },
      {
        title: '5. Advertising',
        content: 'MS Family displays banner advertisements to users on the free plan via Google AdMob. Premium subscribers do not see advertisements. Advertisement data collection and handling is governed by Google\'s advertising policies. Users can manage their ad preferences through Google\'s Ad Settings.'
      },
      {
        title: '6. Limitation of Liability',
        content: 'To the maximum extent permitted by law, XPOOL Technology Pvt Ltd, its directors, developers, and partners shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from database service interruptions, location update lags, files deleted from the proofs locker, or discrepancies in parsed SMS transactions.'
      },
      {
        title: '7. Service Availability',
        content: 'We strive for high uptime for cloud synchronization. However, maintenance windows, database upgrades, and network outages may occasionally restrict access to the app. Offline caching enables local data viewing during outages.'
      }
    ]
  },

  terms: {
    id: 'terms',
    title: 'Terms of Service',
    subtitle: 'Contractual Agreement & Terms of Use for MS Family',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By creating an account, logging into MS Family, utilizing the Smart SMS Transaction Reader, uploading documents to My Proofs, or accessing location features, you enter into a legally binding agreement with XPOOL Technology Pvt Ltd ("we", "us", or "our") and agree to be bound by these Terms of Service. If you do not agree to all terms, you must not use MS Family and should delete your account.'
      },
      {
        title: '2. User Eligibility & Account Registration',
        content: [
          '• Minimum Age: You must be at least 13 years of age (or the minimum legal age in your jurisdiction) to register for an MS Family account.',
          '• Accuracy: You agree to provide accurate, current, and complete registration information (name, email, and authentication credentials) and keep it updated.',
          '• Account Security: You are solely responsible for maintaining the confidentiality of your account credentials, PINs, biometric enrollments, and family group invite codes.',
          '• Minors in Family Groups: If you add minor family members to a group, you certify that you are their parent or legal guardian or have obtained express consent from their parent or legal guardian.'
        ]
      },
      {
        title: '3. Financial & Budgeting Tools Disclaimer',
        content: [
          '• Informational Purpose Only: MS Family is a personal and household organization utility. MS Family does NOT provide banking, investment, financial planning, taxation, or legal advice.',
          '• Not a Regulated Entity: XPOOL Technology Pvt Ltd is not a bank, non-banking financial company (NBFC), payment gateway, or certified financial advisor.',
          '• Verification Responsibility: While automated calculators and SMS parsing engines strive for accuracy, you are responsible for reviewing and verifying all income, expense, loan, and savings goal logs before relying on them for personal or financial decisions.'
        ]
      },
      {
        title: '4. Smart SMS Transaction Reader Rules',
        content: [
          '• Purpose: The Smart SMS Reader is designed strictly for automatic financial transaction detection and record creation.',
          '• Local Execution: SMS parsing is performed entirely on your device. MS Family does not modify, send, forward, delete, or reply to your SMS messages.',
          '• Data Minimization: Raw SMS text is discarded after parsing. Only structured fields (amount, merchant, bank, category, date, and type) are recorded.',
          '• User Control: You may enable or disable SMS detection at any time in Settings or revoke SMS permissions in your Android system settings.'
        ]
      },
      {
        title: '5. Family Groups & Shared Information',
        content: [
          '• Shared Visibility: Joining a Family Group shares designated budget metrics, group expense entries, and authorized document previews with other members of that group.',
          '• Admin Rights: Group Admins have the authority to manage memberships and oversee shared bookkeeping. Use discretion when sharing invite codes.',
          '• Family Administrator Responsibilities: Administrators are responsible for managing group membership appropriately and ensuring that all members have consented to participate in shared features.',
          '• Safety Tracking: Live location sharing must be used solely for lawful family safety and coordination. Enabling location tracking on any device requires the informed consent of that device\'s user.'
        ]
      },
      {
        title: '6. Acceptable Use & Content Restrictions',
        content: [
          'You agree not to use MS Family to:',
          '• Upload files containing malware, viruses, illegal material, or copyright-infringing content to the My Proofs locker.',
          '• Conduct unauthorized surveillance, stalking, or harassment using location features.',
          '• Reverse-engineer, decompile, or intercept proprietary algorithms or database interfaces.',
          '• Attempt unauthorized access to other users\' accounts, databases, or cloud storage buckets.'
        ]
      },
      {
        title: '7. Subscriptions, Payments & Refunds',
        content: [
          '• Google Play Billing: In-app mobile subscriptions are processed securely through Google Play Store Billing subject to Google Play Terms of Service.',
          '• Web Billing: Web subscriptions are processed securely through Razorpay payment gateway.',
          '• Auto-Renewal: Subscriptions auto-renew unless cancelled before the end of the active billing cycle.',
          '• Refund Policy: Web purchases offer a 14-day refund window by contacting support at https://xpool.info/support or velgo7686@gmail.com. In-app Google Play purchases follow Google Play Store refund policies.',
          '• Cancellation: You can cancel your subscription at any time. Premium features remain active until the end of the current billing period.'
        ]
      },
      {
        title: '8. Advertising',
        content: [
          '• Free Plan Users: MS Family displays banner advertisements via Google AdMob to users on the free plan.',
          '• Premium Users: Paid subscribers enjoy an ad-free experience.',
          '• Ad Data: Advertisement delivery may involve Google collecting device identifiers and interaction data as governed by Google\'s advertising policies.',
          '• User Control: You can manage your ad personalization preferences via Google\'s Ad Settings on your device.'
        ]
      },
      {
        title: '9. Intellectual Property',
        content: 'The MS Family application, trademarks, logos, visual interfaces, database architectures, and proprietary parsing heuristics are the exclusive intellectual property of XPOOL Technology Pvt Ltd and are protected by applicable copyright and intellectual property laws.'
      },
      {
        title: '10. Limitation of Liability & Disclaimers',
        content: 'MS Family is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. To the maximum extent permitted by law, XPOOL Technology Pvt Ltd and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the application, data sync delays, service interruptions, or reliance on financial calculations.'
      },
      {
        title: '11. Account Suspension & Termination',
        content: [
          '• Suspension: We reserve the right to suspend accounts that violate these Terms, engage in abusive behavior, or compromise the security of other users.',
          '• Voluntary Termination: You may terminate your agreement at any time by deleting your account through Settings → Privacy & Security → Delete Account or via our public deletion portal at https://xpool.info/delete-account.',
          '• Effect of Termination: Upon account deletion, all associated personal data is removed in accordance with our Data Retention Policy.'
        ]
      },
      {
        title: '12. Governing Law & Dispute Resolution',
        content: 'These Terms shall be governed by the laws of India. Any disputes arising from the use of MS Family shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India. We encourage users to contact us directly at velgo7686@gmail.com or https://xpool.info/support to resolve disputes before pursuing formal legal action.'
      },
      {
        title: '13. Contact & Inquiries',
        content: 'For legal notices or questions regarding these Terms, contact XPOOL Technology Pvt Ltd at velgo7686@gmail.com or https://xpool.info/contact.'
      }
    ]
  },

  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'How We Collect, Use, and Protect Your Information',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Introduction & Developer Identity',
        content: 'MS Family ("we", "us", or "our"), developed and operated by XPOOL Technology Pvt Ltd (website: https://xpool.info, contact: velgo7686@gmail.com), is committed to safeguarding the privacy and security of our users. This Privacy Policy describes how MS Family collects, uses, processes, stores, and protects your information when you use our mobile application and associated web services located at https://xpool.info.'
      },
      {
        title: '2. Information We Collect',
        content: [
          '• Account & Authentication Data: When you register or log in, we collect your email address, full name, chosen username, and profile picture (if uploaded). For Google Sign-In, we receive your verified Google email address, display name, and avatar URL.',
          '• Financial & Transaction Records: User-entered and auto-detected expenses, incomes, categories, bank names, merchant names, amounts, transaction dates, and custom notes.',
          '• Document Vault (My Proofs): Images and PDF documents (receipts, warranties, bills, or identity proofs) uploaded voluntarily by you for storage.',
          '• Live Safety Geolocation (Optional): Real-time latitude and longitude coordinates collected only when you explicitly enable the Family Safety Tracking feature. Location may be collected while the app is in the foreground and background (via a foreground service with persistent notification) when tracking is active.',
          '• Device & Notification Data: Push notification tokens (Firebase Cloud Messaging) and basic device attributes needed for responsive rendering.',
          '• SMS-Derived Financial Data (Optional): When you enable the Smart SMS Reader feature, structured financial information (amount, merchant, bank, date, transaction type) is extracted from bank transaction SMS messages on your device. See Section 3 for details.'
        ]
      },
      {
        title: '3. Smart SMS Transaction Reader & Data Minimization',
        content: [
          '• Purpose of SMS Access: MS Family requests READ_SMS and RECEIVE_SMS permissions solely to detect financial transaction notifications from banks, credit cards, UPI, and digital wallets to automatically create transaction records in your account.',
          '• On-Device Processing: SMS messages are parsed entirely locally on your device using on-device pattern-matching algorithms. Raw SMS message text is not uploaded, transmitted, or backed up to any cloud server.',
          '• Data Minimization: We do not store the original SMS text, sender message body, full account numbers, UPI transaction remarks, or reference texts. Only structured financial details (amount, type, date, bank, merchant) are saved, with the standard note: "Automatically detected from SMS".',
          '• No Advertising Use: SMS content and SMS-derived financial data are not used for advertising, marketing, user profiling, or shared with data brokers.',
          '• Prominent Disclosure & Consent: SMS access is requested only after a separate contextual in-app disclosure with an explicit affirmative consent action. You can toggle this feature off at any time in Settings or revoke SMS permissions in your Android system settings.',
          '• Play Console Declaration Note: This feature requires Google Play approval through a Permissions Declaration Form. READ_SMS and RECEIVE_SMS are restricted permissions under Google Play policy.'
        ]
      },
      {
        title: '4. Geolocation & Family Safety Tracking',
        content: [
          '• Explicit Consent: Geolocation is accessed only when you actively turn on Live Tracking for family safety purposes.',
          '• Background Collection: When tracking is active, location may be collected while the app is in the background via an Android foreground service. A persistent notification informs you that tracking is active.',
          '• Restricted Sharing: Coordinates are transmitted securely and displayed only to members of your verified Family Group.',
          '• Automatic Deletion: Location records are automatically purged from the database after 24 hours via a scheduled cleanup job.',
          '• User Control: You can stop location sharing at any time from the Live Tracking screen or by revoking location permissions in your device settings.',
          '• Play Console Declaration Note: Background location access requires Google Play approval through a Background Location Declaration.'
        ]
      },
      {
        title: '5. Document Vault & Cloud Storage Security',
        content: [
          '• Private Storage Buckets: Files uploaded to My Proofs are stored in private Supabase Storage buckets. These buckets are not publicly accessible.',
          '• Infrastructure Encryption: Files are encrypted at rest by the cloud storage infrastructure provider (Supabase/AWS). All transfers use TLS encryption.',
          '• Row-Level Security (RLS): Database-level access rules ensure that only the file owner can access their uploaded documents. Storage policies enforce user-scoped folder access.'
        ]
      },
      {
        title: '6. Advertising',
        content: [
          '• Google AdMob: MS Family displays banner advertisements to users on the free plan via Google AdMob. Premium subscribers do not see advertisements.',
          '• Data Collection by AdMob: Google AdMob may collect device identifiers, IP address, and ad interaction data as governed by Google\'s advertising policies.',
          '• Personalization: Ad personalization settings are controlled by your device-level Google Ad Settings.',
          '• No Sale of Personal Data: We do not sell your personal information to advertisers. Ads are served by Google\'s network based on their own policies.'
        ]
      },
      {
        title: '7. Third-Party Services & Infrastructure',
        content: [
          'We use the following third-party services:',
          '• Supabase: Managed authentication, PostgreSQL database with Row-Level Security, and encrypted cloud storage for document vault.',
          '• Firebase Cloud Messaging (FCM): Real-time push notifications for alerts and reminders.',
          '• Firebase Analytics: Anonymous usage analytics to understand how users interact with app features. This data helps us improve the application.',
          '• Google Sign-In: Secure, passwordless authentication using Google OAuth2.',
          '• Google AdMob: Banner advertisement delivery for free-plan users.',
          '• Razorpay: Secure payment processing for web-based premium subscriptions.',
          '• Google ML Kit (On-Device): Text recognition for receipt scanning and OCR features. Processing occurs entirely on your device.',
          '• Google Generative AI: AI-powered features for financial insights and categorization assistance. Queries sent to Google\'s AI services do not include raw SMS content or personally identifiable financial data.'
        ]
      },
      {
        title: '8. Data Security Measures',
        content: [
          'We implement administrative, technical, and physical safeguards to protect your data:',
          '• All network communications between the application and our services are encrypted in transit using Transport Layer Security (TLS/HTTPS).',
          '• Database isolation is enforced via PostgreSQL Row-Level Security (RLS), ensuring that users cannot access data belonging to other families.',
          '• Storage access is enforced via per-user folder-scoped policies, preventing unauthorized file access.',
          '• Optional on-device App Lock protected by hardware-backed biometrics (Fingerprint / Face ID) and system PIN.',
          '• Server-side validation prevents unauthorized family_id injection and cross-family data access.',
          '• No system is immune to all threats. We encourage users to keep device credentials and invite codes secure.'
        ]
      },
      {
        title: '9. Data Retention & Deletion',
        content: [
          '• Financial & Profile Data: Maintained as long as your account remains active, enabling you to review multi-year budget trends. Deleted upon account deletion.',
          '• Geolocation Data: Automatically purged after 24 hours via a scheduled database cleanup job.',
          '• Deleted Documents: Removed from active listings immediately upon user action. Permanently purged from cloud storage within 30 days.',
          '• SMS-Derived Data: Only the structured transaction record is retained. Raw SMS text is never stored. Transaction records are deleted upon account deletion.',
          '• Push Notification Tokens: Maintained while needed for notification delivery. Deleted upon account deletion.',
          '• Advertising Data: AdMob data collection and retention is governed by Google\'s privacy policy.'
        ]
      },
      {
        title: '10. Your Rights & Account Deletion',
        content: [
          'You have control over your personal data:',
          '• Access & Export: You can view all records and download your financial history (as PDF) at any time in Settings.',
          '• Edit & Correct: You can edit or delete individual transactions, categories, and documents at any time.',
          '• Complete Account Deletion: You can permanently delete your account and all associated data via Settings → Privacy & Security → Delete Account.',
          '• Web Deletion Portal: If you no longer have access to the app, you can request account deletion via our web portal at https://xpool.info/delete-account. Authenticated users are processed immediately. Unauthenticated requests are verified and processed within 7 business days.',
          '• What Is Deleted: Authentication credentials, user profile, family memberships, transaction records, uploaded documents, storage objects, location records, push notification tokens, and user preferences.',
          '• Ownership Respect: Data belonging exclusively to other family members is not affected by your account deletion.'
        ]
      },
      {
        title: '11. Children\'s Privacy',
        content: [
          'MS Family is not directed to children under 13 years of age. We do not knowingly collect personal information directly from children under 13.',
          '• When family groups include minor children, parent or legal guardian authorization is required.',
          '• Minor family members should not independently create accounts. Parents or guardians should manage their participation in family groups.',
          '• Children\'s data is not used for advertising purposes.'
        ]
      },
      {
        title: '12. Policy Changes & Updates',
        content: 'We may update this Privacy Policy from time to time to reflect feature changes, regulatory adjustments, or platform policy updates. Significant revisions will be notified via in-app banners or email notifications. The "last updated" date at the top of this policy indicates the latest revision.'
      },
      {
        title: '13. Privacy Contact Information',
        content: 'If you have questions, concerns, or data privacy requests regarding this policy or MS Family, please contact us at velgo7686@gmail.com or visit https://xpool.info or https://xpool.info/privacy.'
      }
    ]
  },

  subscription: {
    id: 'subscription',
    title: 'Subscription & Refund Policy',
    subtitle: 'Tiers, Billing Operations & Refund Policies',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Pricing & Feature Tiers',
        content: [
          '• Free Forever (₹0): Log up to 50 transactions per month, create 1 family group (up to 3 members), utilize up to 50MB of My Proofs document storage, and view banner advertisements.',
          '• Personal Premium (₹9/month or ₹99/year): Access unlimited transactions, automated on-device SMS parsing drafts, smart savings & budget goal monitors, 5GB of proofs storage, an ad-free experience, and priority support.',
          '• Family Premium (₹29/month or ₹299/year): Full household access for unlimited family members, unlimited groups, shared bookkeeping & settlements, 20GB proofs storage, live family safety tracking, and an ad-free experience.'
        ]
      },
      {
        title: '2. Payment Processing',
        content: [
          '• Google Play Store Purchases: Mobile subscriptions initiated inside the Android app are processed securely through Google Play Store Billing.',
          '• Web Purchases: Premium subscriptions purchased through the MS Family website (https://xpool.info) are processed securely via Razorpay payment gateway.',
          '• Payment Security: Payment processors are PCI DSS compliant. MS Family does not store your credit card or bank account details directly.',
          '• Currency: All prices are listed in Indian Rupees (₹). Applicable taxes may apply based on your jurisdiction.'
        ]
      },
      {
        title: '3. Grace Period & Expiry',
        content: 'If your payment fails or your subscription expires, your account reverts to the Free Plan. No data is deleted; however, you will be restricted from adding new transactions or uploading files if your usage exceeds Free plan limits. Advertisements will be re-enabled.'
      },
      {
        title: '4. Refund Policy',
        content: [
          '• Web Purchases: We offer a full refund within 14 days of your first premium purchase made via the web portal. Contact us at velgo7686@gmail.com or https://xpool.info/support with your registered email and order details.',
          '• Google Play In-App Purchases: Refunds for purchases made through Google Play Billing are governed directly by Google Play refund policies and can be requested through your Google Play Account order history.',
          '• Processing Time: Approved web refunds are processed back to the original payment method within 5 to 7 business days.',
          '• Exclusions: Refunds are not available for subscription renewals or if the account has been suspended for Terms of Service violations.'
        ]
      },
      {
        title: '5. Cancellations',
        content: 'You can cancel your subscription at any time. Cancellation turns off auto-renewal for the next billing cycle. Premium status remains active on your profile until the end of your prepaid period.'
      }
    ]
  },

  retention: {
    id: 'retention',
    title: 'Data Retention Policy',
    subtitle: 'Data Lifecycles, Retention Periods & Deletion Rules',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Data Retention Summary',
        content: [
          'The following table summarizes how long we retain different types of data:',
          '• Account & Profile Data: Retained while your account is active. Deleted upon account deletion.',
          '• Financial Transaction Records: Retained while your account is active. Deleted upon account deletion.',
          '• Geolocation Coordinates: Automatically purged after 24 hours via a scheduled database cleanup job (runs hourly).',
          '• Document Vault Files: Retained until you delete them or delete your account. Deleted files are removed from active storage immediately and permanently purged within 30 days.',
          '• SMS-Derived Transaction Data: Structured transaction records retained while account is active. Raw SMS text is never stored. Deleted upon account deletion.',
          '• Push Notification Tokens: Retained while needed for notification delivery. Deleted upon account deletion.',
          '• User Preferences & Settings: Retained while account is active. Deleted upon account deletion.',
          '• Advertising Data: Managed by Google AdMob according to Google\'s data retention policies.'
        ]
      },
      {
        title: '2. Location Data Purge Mechanism',
        content: 'To safeguard family privacy, geolocation coordinates generated by the Family Safety Live Tracking feature are strictly temporary. A database cleanup function (cleanup_stale_locations) runs on an hourly schedule and permanently deletes all location coordinate records older than 24 hours.'
      },
      {
        title: '3. Document Storage & Deleted Files',
        content: 'When you delete a document (receipt, invoice, or warranty file) from the My Proofs vault, it is immediately removed from the user interface and access is revoked. The underlying storage object is scheduled for permanent deletion from cloud storage.'
      },
      {
        title: '4. Smart SMS Reader Data Minimization',
        content: 'Raw SMS message bodies are parsed locally on-device and are never saved to our databases. Only the structured transaction output (amount, bank, merchant, date, type) is retained with the note "Automatically detected from SMS".'
      },
      {
        title: '5. Account Deletion & Cascade',
        content: [
          'When you initiate account deletion via Settings → Privacy & Security → Delete Account or the web portal at https://xpool.info/delete-account, the following data is removed:',
          '• Authentication credentials (from auth system)',
          '• User profile',
          '• Family group memberships',
          '• All transaction records created by you',
          '• All uploaded proof documents and associated storage objects',
          '• Location records',
          '• Push notification tokens',
          '• User preferences and settings',
          '• Savings goals and loan records',
          '• Audit log entry is created for compliance records',
          'Data belonging exclusively to other family members is not affected.'
        ]
      },
      {
        title: '6. Inactive Accounts',
        content: 'We do not currently implement automatic deletion of inactive accounts. Your data remains available as long as your account exists. We may introduce an inactive account policy in the future, with prior notice via email.'
      }
    ]
  },

  contact: {
    id: 'contact',
    title: 'Contact & Support',
    subtitle: 'Customer Care & Developer Communications',
    lastUpdated: 'August 20, 2026',
    sections: [
      {
        title: '1. Customer Support',
        content: 'Have questions regarding family groups, budgets, or subscription tiers? Email our support desk at velgo7686@gmail.com or visit https://xpool.info/support. We respond to support tickets within 24 hours on business days (Monday through Friday).'
      },
      {
        title: '2. Bug and Parsing Failure Reporting',
        content: 'If you encounter a UI glitch, app crash, or an issue with the SMS parser, email our engineering team at velgo7686@gmail.com. Please specify your device model, OS version, and the format of the failed bank SMS.'
      },
      {
        title: '3. Feature Requests',
        content: 'Want to suggest an improvement or request a new feature? We evaluate feature proposals regularly. Write to us at velgo7686@gmail.com or submit feedback at https://xpool.info/support.'
      },
      {
        title: '4. Corporate & Legal',
        content: 'MS Family is developed and operated by XPOOL Technology Pvt Ltd. For legal queries, corporate partnerships, or licensing questions, contact our office at velgo7686@gmail.com or visit https://xpool.info/contact.'
      },
      {
        title: '5. Privacy & Data Requests',
        content: 'For data privacy inquiries, data access requests, or account deletion requests, contact us at velgo7686@gmail.com or use the in-app account deletion feature (Settings → Privacy & Security → Delete Account) or visit https://xpool.info/delete-account.'
      }
    ]
  },

  version: {
    id: 'version',
    title: 'App Version & Build Metrics',
    subtitle: 'Software Build & Deployment Metrics',
    lastUpdated: 'August 21, 2026',
    sections: [
      {
        title: '1. App Build Parameters',
        content: [
          '• Version: 2.1.9 (Production Release)',
          '• Build Number: 219',
          '• Release Date: August 21, 2026',
          '• Channel: Stable - Main'
        ]
      },
      {
        title: '2. Native Framework Versions',
        content: [
          '• Capacitor Runtime: 8.3.1',
          '• React Core: 18.2.0',
          '• Recharts: 2.11.0',
          '• Framer Motion: 11.0.3'
        ]
      },
      {
        title: '3. Infrastructure',
        content: [
          '• Developer: XPOOL Technology Pvt Ltd',
          '• Official Domain: https://xpool.info',
          '• Database: PostgreSQL (Supabase-managed)',
          '• API Gateway: Supabase Auth & Storage API',
          '• Connection Security: TLS/HTTPS'
        ]
      }
    ]
  },

  changelog: {
    id: 'changelog',
    title: 'Changelog',
    subtitle: 'History of Releases and Feature Additions',
    lastUpdated: 'August 21, 2026',
    sections: [
      {
        title: 'v2.1.9 (August 21, 2026) - AI Provider & Mobile UI Enhancement Release',
        content: [
          '• [Release] Production build v2.1.9 (build 219).',
          '• [AI Engine] Migrated all AI vision and text services exclusively to OpenRouter high-performance models.',
          '• [AI Vision] Removed premature race timeouts and enhanced document extraction parsing.',
          '• [Mobile UI] Enhanced mobile document cards with responsive Details, Edit, and Copy action controls.'
        ]
      },
      {
        title: 'v2.1.8 (August 20, 2026) - Compliance & Corporate Identity Migration',
        content: [
          '• [Release] Production build v2.1.8 (build 218).',
          '• [Branding] Migrated corporate identity to XPOOL Technology Pvt Ltd and domain to https://xpool.info.',
          '• [Compliance] Comprehensive Google Play policy compliance remediation.',
          '• [Privacy] Rewritten Privacy Policy, Terms of Service, and Data Retention Policy to match actual implementation.',
          '• [Security] Removed unused Android permissions (CALL_PHONE, RECORD_AUDIO, MODIFY_AUDIO_SETTINGS).',
          '• [Security] Externalized signing credentials from build configuration.',
          '• [Accuracy] Removed unsupported "no-ads" claim; accurately documented freemium revenue model.',
          '• [Accuracy] Removed unsupported security and encryption claims.',
          '• [SMS] Enhanced SMS prominent disclosure with comprehensive privacy information.',
          '• [Location] Enhanced background location disclosure with detailed tracking information.'
        ]
      },
      {
        title: 'v2.1.7 (August 14, 2026) - Production Compliance & UI Refresh Release',
        content: [
          '• [Release] Production build v2.1.7 (build 217).',
          '• [Compliance] Google Play Prominent SMS Disclosure & transparent data retention controls.',
          '• [Privacy] Unauthenticated Legal & Account Deletion portal support.',
          '• [UI/UX] Login screen single-viewport optimization with fluid glass responsiveness.'
        ]
      },
      {
        title: 'v2.1.6 (August 10, 2026) - Maintenance Release',
        content: [
          '• [Release] Production build v2.1.6 (build 216).',
          '• [Optimization] Dependency caching & performance enhancements.'
        ]
      },
      {
        title: 'v2.1.4 (August 7, 2026) - Surgical R8 Obfuscation Release',
        content: [
          '• [Release] Production optimized AAB build v2.1.4 (build 214).',
          '• [Optimization] Refactored ProGuard rules to remove blanket third-party keep rules, unlocking maximum R8 obfuscation & shrinking.'
        ]
      },
      {
        title: 'v2.1.3 (August 7, 2026) - Production Optimization & R8 Release',
        content: [
          '• [Release] Production optimized AAB build v2.1.3 (build 213).',
          '• [Optimization] Enabled R8 full mode, code shrinking, resource shrinking, WebP assets, and vendor chunking.'
        ]
      },
      {
        title: 'v2.1.2 (August 6, 2026) - Production Release',
        content: [
          '• [Release] Production level AAB build v2.1.2 (build 212).',
          '• [Performance & Security] Verified signed Android bundle packaging with release key.'
        ]
      },
      {
        title: 'v2.1.1 (August 6, 2026) - Production Release',
        content: [
          '• [Release] Production level AAB build v2.1.1 (build 211).',
          '• [Performance & Security] Verified signed Android bundle packaging with release key and optimized native assets.'
        ]
      },
      {
        title: 'v1.0.0 (July 13, 2026) - Official Launch',
        content: [
          '• [Feature] Hierarchical App Information: Consolidated settings subpages into a clean list landing page (`/settings/app-info`).',
          '• [Feature] Multi-language Proverb Greeting: Dashboard card translates proverbs dynamically to user language.',
          '• [Improvement] Search Z-index Fix: Fixed search input icon visibility inside AppInfoDocViewer.',
          '• [Improvement] Chart Dimension Optimization: Redesigned SafeChartContainer using cloneElement and ResizeObserver.',
          '• [Assets] Replaced placeholder text icons with the official application logo.'
        ]
      },
      {
        title: 'v0.9.8 (June 28, 2026) - Beta Release',
        content: [
          '• [Feature] Local Smart SMS Reader: Parses credit card, debit card, and UPI alerts locally.',
          '• [Feature] Biometric Lock: Toggle biometrics (fingerprint/facial templates) or PIN code.',
          '• [Improvement] Offline database synchronization via localForage cache hooks.'
        ]
      },
      {
        title: 'v0.9.0 (May 15, 2026) - Alpha testing',
        content: [
          '• [Feature] Live Family Location Sharing: Real-time coordination sharing inside groups.',
          '• [Feature] Proofs Vault: Encrypted receipt storage with custom member visibility gates.'
        ]
      }
    ]
  }
};
