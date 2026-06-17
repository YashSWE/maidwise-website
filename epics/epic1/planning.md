# Epic 1 Planning — 2026-06-17

**Branch:** main
**Status:** planning

---

## Raw Ideas & Discussion
- User wants to add two new pages to the Maidwise website (Next.js app at `/Users/yashbhandari/Development/Maidwise-website`).
- The two pages are:
  1. FAQs page: A "coming soon" page. URL path `/faq`.
  2. Terms and Conditions page: A terms and conditions page. URL path `/terms`.

---

## Goals Taking Shape
- Add `/faq` route with a premium, animated "Coming Soon" screen matching the app's visual style.
- Add `/terms` route with comprehensive, App Store compliant Terms and Conditions.
- Update website footers and navigation to link to these new pages.

---

## Features / Stories Being Considered
- Story 1: Add `/faq` coming soon page with high-fidelity styling.
- Story 2: Add `/terms` page containing complete Terms of Service.
- Story 3: Update links in home page and privacy page footers to link to `/faq` and `/terms`.

---

## Firm Decisions
- Decision: Match the premium sunset-gradient and glassmorphic styling of the landing page.
- Decision: Implement the routes under `src/app/faq/page.tsx` and `src/app/terms/page.tsx` within the website repository.
- Decision: Write standard basic terms and conditions covering subscription plans, liability, and account termination.
- Decision: Build a modern styled placeholder for the FAQ "Coming Soon" page.

---

## Out of Scope (Decided or Leaning)
- Updating the iOS mobile app's embedded URLs (which already point to `https://maidwise.behumoury.com/terms` and `https://maidwise.behumoury.com/faq`).

---

## Open Questions
- What specific copy should the Terms and Conditions page have? We will draft clean, comprehensive Terms and Conditions tailored for a subscription-based family organizer app (Maidwise).
- Are there specific questions the FAQ should list, or is a simple interactive "Coming Soon" teaser with email contact sufficient? We will design a gorgeous "Coming Soon" screen for FAQs.

---

## Technical Notes
- Next.js App Router (TypeScript, Tailwind CSS).
- Framer Motion is available (used in `src/app/page.tsx`).
- Website repository: `/Users/yashbhandari/Development/Maidwise-website`.

---

## Resume Instructions (if context lost)
**Last discussed:** Phase 0 exit.
**Next:** Proceed to Phase 1 (Epic Creation).

---

## Final Summary
- Distilled Goals: Add `/faq` (animated coming soon) and `/terms` (basic terms and conditions) pages to the website, and link them from the home and privacy pages.
- Confirmed Stories:
  - S01: Add `/faq` Page (Coming Soon page matching brand aesthetics)
  - S02: Add `/terms` Page (Standard terms and conditions)
  - S03: Update Website Footers (Home and privacy footers updated to point to `/faq` and `/terms`)
- Scope: Website-only changes, including routing, page design, dynamic animations, and footer navigation.
- Out of Scope: App-side changes.
