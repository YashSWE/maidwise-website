import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-black/50 mb-12">Last Updated: June 2026</p>

        <div className="prose prose-lg prose-headings:font-display prose-headings:font-black prose-headings:tracking-tighter prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline max-w-none space-y-8 text-black/80 leading-relaxed">
          <section>
            <h2 className="text-2xl text-dark-ink">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Maidwise mobile application and cloud sync services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not access or use the Service.
            </p>
            <p className="mt-4">
              We reserves the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate the date of the latest update at the top of this page. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">2. Description of Service</h2>
            <p>
              Maidwise is a utility designed to help users track attendance, tasks, salary records, advances, and payouts for their household staff (such as maids, cooks, and drivers). The Service includes the iOS mobile application and secure database synchronization to facilitate coordination across multiple devices belonging to the same household.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">3. User Accounts and Verification</h2>
            <p>
              To use the cloud sync features, you must register for an account (supported via secure email or social login integrations). You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="mt-4">
              You agree to provide accurate, current, and complete information during registration. If you invite other family or household members to access your synced household, you assume full responsibility and liability for their actions and access to the database.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">4. Subscriptions and Payments</h2>
            <p>
              Maidwise offers certain premium features (such as multi-device synchronization and ad-removal) through paid subscriptions or lifetime purchases (&ldquo;Subscriptions&rdquo;). Subscriptions are processed and managed securely through Apple&apos;s App Store and integrated with RevenueCat.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Billing:</strong> You will be billed in advance on a recurring, periodic basis (monthly or annually) according to the plan chosen.
              </li>
              <li>
                <strong>Automatic Renewal:</strong> Your Subscription will automatically renew at the end of each billing cycle unless you disable automatic renewal through your Apple ID Account Settings at least 24 hours before the current period ends.
              </li>
              <li>
                <strong>Refunds:</strong> All purchase transactions and refund requests are governed by Apple&apos;s App Store terms and policies. We do not directly handle refunds.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">5. Advertisements</h2>
            <p>
              Free tiers of the Service may display advertisements served through Google Mobile Ads (AdMob). The delivery of ads and tracking parameters is subject to your consent selections under iOS App Tracking Transparency (ATT). You can choose to opt out of tracking in your iOS system settings or purchase a premium subscription to remove advertisements entirely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">6. On-Device Sensitive Data Disclaimer</h2>
            <p>
              Maidwise is designed to prioritize data minimization. Sensitive data, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Photos or digital copies of identification cards (e.g. Aadhaar cards)</li>
              <li>UPI IDs or banking coordinates for household helpers</li>
              <li>Screenshots of payment verification or receipts</li>
            </ul>
            <p className="mt-4">
              are stored <strong>exclusively on your physical iOS device</strong> using local secure sandboxing. This sensitive information is never uploaded or synced to our cloud databases. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Deleting the Maidwise application will permanently erase this local data from your device.</li>
              <li>We are not responsible or liable for any loss, damage, corruption, or unauthorized retrieval of data stored locally on your device due to hardware failures, device loss, OS modifications, or user error.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">7. Acceptable Use and Restrictions</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Log or collect data about individuals without their explicit knowledge and consent.</li>
              <li>Reverse engineer, decompile, or attempt to extract source code from the mobile application.</li>
              <li>Use any bots, scrapers, or automated tools to access or modify data.</li>
              <li>Interfere with or disrupt the integrity or performance of cloud syncing servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Maidwise, its creators, or operators be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your use or inability to use the Service.</li>
              <li>Any operational issues, service degradation, or data breaches occurring on third-party cloud infrastructure (such as Supabase servers, Google AdMob network, or RevenueCat services).</li>
              <li>Discrepancies, rounding errors, or calculation issues in tracking attendance, helper salaries, advance payouts, or deductions. You are advised to independently verify all financial calculations before issuing payments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, for behavior that we believe violates these Terms.
            </p>
            <p className="mt-4">
              You may terminate your account and delete your data at any time. A secure account deletion flow is provided within the settings menu of the mobile application. Triggering this flow permanently wipes your profile, attendance, and household records from our active cloud sync databases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">10. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be subject to the exclusive jurisdiction of the courts located in Bangalore or Mumbai, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">11. Contact &amp; Grievance Redressal</h2>
            <p>
              If you have any questions about these Terms, or need to file a grievance, please contact us:
            </p>
            <div className="mt-4">
              <p><strong>Maidwise Support</strong></p>
              <p>Grievance Officer: Yash Bhandari</p>
              <p>
                Email:{" "}
                <a href="mailto:behumoury.ch@gmail.com" className="text-brand-red hover:underline">
                  behumoury.ch@gmail.com
                </a>
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
