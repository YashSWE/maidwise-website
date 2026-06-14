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
              Welcome to Maidwise ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you use the Maidwise iOS application (the "App") and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">2. The Data We Collect</h2>
            <p>
              To provide the core functionality of Maidwise—including our Cloud Sync feature—we may collect, use, and store the following types of personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Identity & Contact Data:</strong> Including your first name, last name, and email address, collected securely when you sign in via Apple, Google, or Supabase Auth.
              </li>
              <li>
                <strong>Profile & Usage Data:</strong> Any information you actively input into the app, such as maid names, attendance records, tasks, and salary advances.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we use your data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To register you as a new user and create your account.</li>
              <li>To provide the Cloud Sync feature, allowing multi-device synchronization so your entire family stays updated.</li>
              <li>To manage our relationship with you (e.g., notifying you of changes to our terms or privacy policy).</li>
            </ul>
            <p className="mt-4 font-semibold text-brand-red">
              We do not sell your personal data to any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">4. Data Security & Storage</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Your data is securely stored in the cloud utilizing industry-standard encryption practices to ensure your family's records are safe and accessible only to authorized devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">5. Your Legal Rights & Data Deletion</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. You have the right to request access, correction, or erasure of your personal data.
            </p>
            <p className="mt-4">
              <strong>Account Deletion:</strong> You can request the deletion of your account and all associated data directly within the App's settings, or by contacting us at support@maidwise.app. Upon request, all personal data and synced records will be permanently deleted from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-dark-ink">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at support@maidwise.app.
            </p>
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
