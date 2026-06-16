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
            <p>
              Welcome to Maidwise (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal data in accordance with the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (GDPR), and other applicable data protection laws.
            </p>
            <p className="mt-4">
              This Privacy Policy explains how we collect, use, store, and share your personal data when you use the Maidwise iOS application (the &ldquo;App&rdquo;) and your website interactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">1. Data We Collect &amp; How We Process It</h2>
            
            <h3 className="text-xl font-bold text-dark-ink mt-6 mb-2">A. Device-Only (Local) Storage — We Do Not Upload This Data</h3>
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

            <h3 className="text-xl font-bold text-dark-ink mt-8 mb-2">B. Cloud Storage (Synced Data)</h3>
            <p>
              To provide the multi-device sync feature, the following data is processed and stored on our secure cloud database (powered by Supabase):
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Identity &amp; Account Information:</strong> Your name, profile picture, and email address collected during sign-in (via Google Sign-In or Sign in with Apple).
              </li>
              <li>
                <strong>Household &amp; Staff Records:</strong> Maid names, phone numbers, task records, and daily attendance logs.
              </li>
              <li>
                <strong>Financial Logs:</strong> Monthly salaries, leave deduction settings, recorded advance payments, and salary history.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">2. Legal Basis for Processing</h2>
            <p>We process your personal data under the following legal grounds:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>
                <strong>Consent:</strong> Your explicit consent given when creating your account.
              </li>
              <li>
                <strong>Contractual Necessity:</strong> To provide the core sync features and subscription management (via RevenueCat).
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To prevent fraud, ensure app security, and deliver ads (via Google Mobile Ads).
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">3. Sharing with Third Parties</h2>
            <p>We do not sell your personal data. We only share data with trusted service providers to run the App:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Supabase:</strong> For hosting our cloud sync database.
              </li>
              <li>
                <strong>RevenueCat:</strong> For processing subscriptions and checking purchase states.
              </li>
              <li>
                <strong>Google Mobile Ads (AdMob):</strong> For serving personalized or non-personalized ads (subject to your App Tracking Transparency consent).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">4. Data Security &amp; Retention</h2>
            <p>Your cloud sync data is encrypted in transit and at rest.</p>
            <p className="mt-4">
              <strong>Retention Period:</strong> We retain your cloud data only as long as your account is active. If you request account deletion, <strong>all data associated with your user ID and households is permanently and immediately deleted from our servers</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">5. Your Rights (DPDP Act &amp; GDPR)</h2>
            <p>You have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Right to Access &amp; Correct:</strong> Access your profile and correct incorrect records.
              </li>
              <li>
                <strong>Right to Erasure (Withdrawal of Consent):</strong> Delete your account and all associated cloud data directly from the App&apos;s Profile settings.
              </li>
              <li>
                <strong>Right to Nominate (DPDP Act):</strong> The right to nominate another individual to exercise your rights in the event of death or incapacity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">6. Grievance Redressal</h2>
            <p>
              If you have questions, concerns, or wish to file a complaint regarding your personal data, please contact our Grievance Officer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Grievance Officer:</strong> Yash Bhandari
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:yashbhandari.contact@gmail.com"
                  className="text-brand-red hover:underline"
                >
                  yashbhandari.contact@gmail.com
                </a>
              </li>
            </ul>
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
