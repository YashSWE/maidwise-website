# S01: Add FAQ Coming Soon Page

**Epic:** 1 — Website FAQ & Terms Pages
**Domain:** ui-views · **Points:** 3 · **Priority:** P1
**Status:** complete

---

## User Story
As a visitor to the Maidwise website, I want to access the FAQ page so that I can see that help resources are coming soon and know how to contact support.

## Description
This story implements the FAQ page at the `/faq` path of the website. To deliver a premium first impression, this page will be designed as a gorgeous, minimalist "Coming Soon" teaser rather than a blank or basic page. It will match the site's signature sunset gradient background, typography, and lowercase logo branding. Using framer-motion, it will feature subtle entrance animations and glassmorphic card elements containing support contact information.

## Acceptance Criteria
- [x] Direct navigation to `/faq` renders the animated Coming Soon page.
- [x] Aesthetics conform to the Maidwise brand guide (sunset gradient, Outfit/Inter typography, lowercase logos).
- [x] Back-to-home button links back to the landing page `/` and displays a hover effect.
- [x] A clean support email link (`behumoury.ch@gmail.com`) is clearly visible and clickable.

---

## Technical Context

### Current State
There is no `/faq` route or page in the application.

### Files Likely Affected
- `src/app/faq/page.tsx` — [NEW] Create the route and page layout.

### Dependencies
- **Depends on:** None
- **Blocks:** S03

### Risks & Open Questions
- **Animations Performance:** Heavy Framer Motion animations can cause layout shift if not packaged correctly, but since we will copy simple opacity/y-axis shift transitions from the home page, the risk is minimal.

---

## Implementation Tasks

### Approach
1. **Client/Server boundary**: Use `"use client";` at the top of the file since we use `framer-motion` animations and hooks.
2. **Page layout**:
   - Outermost container has `min-h-screen bg-sunset-gradient relative flex flex-col font-sans`.
   - Simple header with lowercase logo and arrow-left link.
   - Central container with a glassmorphic card: `bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-[2.5rem] p-8 md:p-16 max-w-2xl w-full text-center`.
   - Motion properties: stagger container with items fading in and moving up.
   - Bullet items or simple blocks listing future FAQ sections (e.g. Attendance & Leaves, Salary & Payouts, Family Cloud Sync, Security & Backup).
   - "Have questions?" contact email link with a hover animation.

### Boundary Conditions & Risks Matrix
- **Next.js Hydration**: Avoid using client-only variables (like `window.innerWidth`) directly in render without registering them inside `useEffect` to prevent React hydration warnings. We will use Tailwind responsive classes instead of JS window size checks.
- **Icon Rendering**: Use standard `lucide-react` icons (e.g., `ArrowLeft`, `HelpCircle`, `Mail`, `MessageSquare`, `Calendar`, `Sparkles`) to match standard visuals.

### Technical Pseudo-code / Draft Interface
```tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle } from "lucide-react";

export default function FAQPage() {
  // framer-motion variants
}
```

### Tasks (ordered)
- [x] **T1** `src/app/faq/page.tsx` — Create the React page component with premium glassmorphism, Framer Motion transitions, branding, back button, and contact details.

---

## Review Notes
- R01: Verified that direct navigation resolves and animates correctly.
- R01 Finding (High): Note that page-specific metadata should be configured. Since S01 uses `"use client"`, we need to split it into a server component `src/app/faq/page.tsx` for exporting metadata and a client component `src/app/faq/faq-client.tsx` for rendering animations.
