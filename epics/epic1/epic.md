# Epic 1: Website FAQ & Terms Pages

**Branch:** main
**Created:** 2026-06-17
**Goal:** Add FAQ (Coming Soon) and Terms and Conditions pages to the Maidwise website.
**Status:** complete

## Overview
This epic implements the FAQ and Terms and Conditions pages on the Maidwise website, and hooks them up to the home and privacy page footers. The FAQ page is styled as a premium "Coming Soon" teaser to match the iOS app's aesthetic, while the Terms page provides a standard, professional, App Store compliant document layout.

## Goals
- Add `/faq` route with a gorgeous coming soon layout, subtle micro-animations, and contact links.
- Add `/terms` route with standard basic Terms and Conditions.
- Ensure both pages are fully accessible from home and privacy page footers.

## Success Criteria
- [ ] Visual verification of the `/faq` page with interactive hover effects and fluid layout.
- [ ] Visual verification of the `/terms` page containing complete Terms of Service.
- [ ] Navigation flows successfully from home page and privacy page footer links to both subpages.

## Out of Scope
- Rebuilding mobile application views or editing iOS codebase (except verifying that redirected links work).

---

## Story Overview

| ID | Story | Domain | Points | Priority | Status |
|----|-------|--------|--------|----------|--------|
| S01 | Add FAQ Coming Soon Page | ui-views | 3 | P1 | complete |
| S02 | Add Terms and Conditions Page | ui-views | 2 | P1 | complete |
| S03 | Update Website Footers | ui-views | 1 | P1 | complete |

**Total Story Points:** 6

---

## Stories

### S01: Add FAQ Coming Soon Page
**Domain:** ui-views · **Points:** 3 · **Priority:** P1 · **Status:** complete

Create the route `src/app/faq/page.tsx` with a modern, glassmorphic card layout, sunset-gradient background, clean typography, animations using framer-motion, and supportive text about the FAQ topics.

**Acceptance Criteria:**
- [ ] Page `/faq` compiles and renders properly.
- [ ] Animated elements render smoothly using Framer Motion.
- [ ] Layout matches the homepage aesthetic (sunset gradient, lowercase brand name, modern fonts).
- [ ] Back-to-home button links back to `/`.

---

### S02: Add Terms and Conditions Page
**Domain:** ui-views · **Points:** 2 · **Priority:** P1 · **Status:** complete

Create the route `src/app/terms/page.tsx` containing a standard, clean document layout for the Terms and Conditions (Introduction, Subscriptions, Acceptable Use, Limitation of Liability, Termination, Governing Law, and Contact info).

**Acceptance Criteria:**
- [ ] Page `/terms` compiles and renders properly.
- [ ] Clean markdown/prose design matching the `/privacy` page layout.
- [ ] Back-to-home button links back to `/`.

---

### S03: Update Website Footers
**Domain:** ui-views · **Points:** 1 · **Priority:** P1 · **Status:** complete

Update the footer in `src/app/page.tsx` and header/footer in `src/app/privacy/page.tsx` to link to `/faq` and `/terms` instead of dead links.

**Acceptance Criteria:**
- [ ] Footer links for "Terms of Service" redirect to `/terms`.
- [ ] Links or references to FAQ redirect to `/faq`.
- [ ] Headless/dead hashes `#` are removed.

---

## Domain Groupings

### ui-views
**Stories:** S01, S02, S03
**Rationale:** All stories concern frontend Next.js React views, layouts, and routing using Tailwind CSS.

---

## Code Review Summary
*(Populated in Phase 5)*

---

## SDLC Notes
*(Running notes — updated throughout)*
