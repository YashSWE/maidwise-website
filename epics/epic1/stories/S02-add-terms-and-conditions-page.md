# S02: Add Terms and Conditions Page

**Epic:** 1 — Website FAQ & Terms Pages
**Domain:** ui-views · **Points:** 2 · **Priority:** P1
**Status:** complete

---

## User Story
As a user or App Store reviewer, I want to view the Terms and Conditions so that I understand the rules of using the application and the terms of service.

## Description
This story implements the Terms and Conditions page at the `/terms` path. It will follow the exact same clean, responsive design system as `/privacy`, featuring a header with a "Back to Home" button, a clean typographical title, a last updated timestamp, and a structured legal document formatted using Tailwind's prose classes. The content will be a standard, clean Terms of Service document relevant to the Maidwise app.

## Acceptance Criteria
- [x] Direct navigation to `/terms` renders the Terms and Conditions page.
- [x] Back-to-home button links back to the landing page `/`.
- [x] Text formatting utilizes Tailwind's `prose` classes for high-quality readability.
- [x] Content includes sections on Subscriptions, Eligibility, Termination, Liability Limits, and Contact details.

---

## Technical Context

### Current State
There is no `/terms` route or page in the application.

### Files Likely Affected
- `src/app/terms/page.tsx` — [NEW] Create the route and document page.

### Dependencies
- **Depends on:** None
- **Blocks:** S03

### Risks & Open Questions
- None. Standard static page addition.

---

## Implementation Tasks

### Approach
1. **Client/Server boundary**: This is a static document page. No dynamic state is needed, so keep it as a server component (default, no `"use client";`) to maximize loading performance.
2. **Page layout**:
   - Styled identically to `src/app/privacy/page.tsx`.
   - Header sticky with background blur and a `<Link href="/">` button showing a Lucide `ArrowLeft` icon.
   - Text wrapped in `<div className="prose prose-lg ...">` using sections with clean headings (`h2` and `h3`) and paragraphs.
   - Include standard legal terms tailored specifically for Maidwise:
     - 1. Acceptance of Terms
     - 2. Eligibility & Account Security
     - 3. Usage & Subscriptions (including details on automatic billing, renewals, and Ad-supported tiers)
     - 4. Intellectual Property
     - 5. On-Device Sensitive Data disclaimer (specifically highlighting that Aadhaar copies, identification photos, and local UPI data are kept strictly local on-device, and we are not responsible for any local data loss)
     - 6. Account Deletion & Termination
     - 7. Disclaimers & Limitation of Liability (excluding liability for third-party services like Google AdMob, RevenueCat, Supabase)
     - 8. Governing Law & Dispute Resolution (courts of Bangalore / Mumbai, India)
     - 9. Contact / Grievance Redressal

### Boundary Conditions & Risks Matrix
- **Typographical consistency**: Ensure margins, colors, and line spacing match the privacy page. Avoid nested unescaped HTML characters like `&` directly in TSX, use proper HTML entities like `&amp;` or standard quotes.
- **Header Alignment**: Ensure responsive margins match the footer and privacy policy page.

### Technical Pseudo-code / Draft Interface
```tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    // tsx layout
  );
}
```

### Tasks (ordered)
- [x] **T1** `src/app/terms/page.tsx` — Create the Terms and Conditions document component matching the privacy page's structure and styling.

---

## Review Notes
- R01: Verified page renders properly and matches `/privacy` layout structure.
- R01 Finding (High): Note that page-specific metadata should be configured by exporting a static `metadata` object from `src/app/terms/page.tsx`.
