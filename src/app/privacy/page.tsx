import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-dark-ink flex flex-col font-sans selection:bg-brand-yellow/30 selection:text-brand-red">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 w-full flex items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-black/5">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium hover:text-brand-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-4 text-balance">
          Privacy Policy
        </h1>
        <p className="text-sm text-black/50 mb-12">Last Updated: June 2026</p>

        <div className="prose prose-lg prose-headings:font-display prose-headings:font-black prose-headings:tracking-tighter prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline max-w-none space-y-8 text-black/80 leading-relaxed">
          <section>
            <h2 className="text-2xl text-dark-ink">1. Introduction</h2>
            <p>
              Maidwise (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our iOS mobile application and cloud sync services (collectively, the &ldquo;Service&rdquo;) in accordance with the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (GDPR), and other applicable data protection laws.
            </p>
            <p className="mt-4">
              By using Maidwise, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">2. Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-dark-ink mt-6 mb-2">A. Personal Information</h3>
            <p>When you register for an account, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile information &amp; avatar URL (provided by identity providers)</li>
            </ul>

            <h3 className="text-xl font-bold text-dark-ink mt-8 mb-2">B. Domestic Help &amp; Attendance Data</h3>
            <p>As part of our attendance and salary tracking service, we sync and backup:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Domestic staff details (names, phone numbers)</li>
              <li>Attendance records and leaves</li>
              <li>Financial records (salary rates, leave deductions, advance logs, payment logs)</li>
            </ul>

            <h3 className="text-xl font-bold text-dark-ink mt-8 mb-2">C. Device-Only (Local) Sensitive Information — We Do Not Upload This Data</h3>
            <p>
              We prioritize privacy and minimize the collection of sensitive personal data on our servers. The following information is stored <strong>exclusively on your device</strong> using iOS secure file encryption and is never transmitted to our servers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Aadhaar Cards &amp; Identification Photos:</strong> Photos of your domestic help&apos;s identification documents (like Aadhaar cards) are stored locally in the app&apos;s secure sandbox directory. They are never uploaded or synced to the cloud. Deleting the App deletes this data permanently.
              </li>
              <li>
                <strong>UPI IDs &amp; Bank Information:</strong> Bank or UPI payment coordinates for your domestic help are saved strictly on-device to facilitate quick transfers through your banking app.
              </li>
              <li>
                <strong>Payment Verification Screenshots:</strong> Any screenshots or files imported as payment receipts remain local.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-dark-ink mt-8 mb-2">D. Usage Data</h3>
            <p>We automatically collect certain information when you use Maidwise:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Device information (device type, operating system, unique identifiers)</li>
              <li>Log data (access times, app features used)</li>
              <li>Analytics data (app performance, crash reports)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide and maintain our attendance and salary tracking service</li>
              <li>Coordinate cloud syncing across your family&apos;s devices</li>
              <li>Personalize your experience and settings</li>
              <li>Send you notifications about your staff and goals</li>
              <li>Improve our app and develop new features</li>
              <li>Communicate with you about updates and support</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>With your consent:</strong> When you explicitly agree to share or add members to your household.
              </li>
              <li>
                <strong>Service providers:</strong> With trusted third parties who help us operate our service:
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><em>Supabase:</em> For hosting our cloud sync database.</li>
                  <li><em>RevenueCat:</em> For processing subscriptions and checking purchase states.</li>
                  <li><em>Google Mobile Ads (AdMob):</em> For serving ads (subject to your App Tracking Transparency consent).</li>
                </ul>
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law or to protect rights and safety.
              </li>
              <li>
                <strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Encryption of data in transit and at rest</li>
              <li>On-device secure file encryption for Aadhaar photos and payment screenshots</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure cloud infrastructure</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Access:</strong> Request a copy of your personal data.
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate information.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and data (can be triggered directly in settings with a safety verification typing test).
              </li>
              <li>
                <strong>Portability:</strong> Export your tracking and financial data.
              </li>
              <li>
                <strong>Restrict processing:</strong> Limit how we use your data.
              </li>
              <li>
                <strong>Right to Nominate (DPDP Act):</strong> Nominate another individual to exercise your rights in the event of death or incapacity.
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:behumoury.ch@gmail.com" className="text-brand-red hover:underline">
                behumoury.ch@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services. When you request the deletion of your account, we will permanently and immediately initiate the deletion of all associated cloud databases, synced household records, and profiles from our active databases.
            </p>
            <p className="mt-4">
              Please note that complete erasure across third-party backups, logs, or cache systems (such as Supabase servers or Google AdMob systems) may take additional time according to those providers&apos; respective policies. We are not liable for the data storage or deletion practices of these third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">8. Third-Party Platforms and Limitation of Liability</h2>
            <p>
              Maidwise relies on infrastructure and services provided by trusted third-party platforms (such as Google Mobile Ads for advertisement delivery, and Supabase for cloud database storage and authentication).
            </p>
            <p className="mt-4">
              While we initiate prompt deletion of all your cloud-backed records and user accounts from our databases immediately upon your request, we do not control the internal data retention, backup systems, caching, or archiving policies of these third-party platforms. To the maximum extent permitted by applicable law, we are not responsible or liable for any failure, delay, storage retention, or security breaches occurring on or by these third-party systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">9. Children&apos;s Privacy</h2>
            <p>
              Maidwise is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">10. International Data Transfers</h2>
            <p>
              Your cloud database information is transferred to and processed in secure cloud servers. These servers may be located in countries other than your country of residence, which may have different data protection laws. We ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">11. California Privacy Rights</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Right to know what personal information we collect</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">13. Contact &amp; Grievance Redressal</h2>
            <p>
              If you have any questions about this Privacy Policy, our data practices, or wish to file a complaint, please contact us:
            </p>
            <div className="mt-4">
              <p><strong>Maidwise</strong></p>
              <p>
                Grievance Officer: Yash Bhandari
              </p>
              <p>
                Email:{" "}
                <a href="mailto:behumoury.ch@gmail.com" className="text-brand-red hover:underline">
                  behumoury.ch@gmail.com
                </a>
              </p>
              <p>
                Website: <a href="https://maidwise.behumoury.com" className="text-brand-red hover:underline">maidwise.behumoury.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-black/5 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-display font-black tracking-tight text-xl text-dark-ink">
            maidwise
          </p>
          <p className="text-sm text-black/50">
            &copy; {new Date().getFullYear()} Maidwise. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
