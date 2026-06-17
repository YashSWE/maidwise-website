# Code Review: ui-views

**Epic:** 1 — Website FAQ & Terms Pages
**Stories Covered:** S01, S02, S03
**Date:** 2026-06-17

## Summary
The implementation of the FAQ page, Terms and Conditions page, and footer links is visually clean, highly structured, and fits perfectly into the existing brand identity. Responsive design has been checked. A key SEO/Next.js pitfall has been identified regarding page metadata.

## Findings

### CRITICAL — must fix before shipping
*(None)*

### HIGH — strongly recommended
1. **Missing Page-Specific SEO Metadata**:
   - *Location:* `src/app/terms/page.tsx` and `src/app/faq/page.tsx`
   - *Issue:* Currently, both pages default to the root layout's metadata ("Maidwise | Manage your household help effortlessly"). For optimal search engine indexation and compliance, `/terms` and `/faq` should have unique title tags and descriptions.
   - *Mitigation:* 
     - For `/terms` (server component), export a static `metadata` object.
     - For `/faq` (client component), separate it into a server component `src/app/faq/page.tsx` (which exports the metadata) and import/render a client-side layout `src/app/faq/faq-client.tsx` to prevent Next.js build errors (since `"use client"` files cannot export metadata).

### MEDIUM — should fix, low risk
*(None)*

### LOW / POLISH — optional
1. **Lowercase Branding Typography**:
   - *Location:* `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` footer
   - *Detail:* The footer brand name in `/terms` and `/privacy` is styled as `maidwise`, matching the landing page. We should double-check that the `lowercase` class is applied to guarantee it is lowercase text.

---

## What Looks Good
- **animations**: Entrance stagger animations using framer-motion look sleek and modern.
- **prose styling**: The prose styles render the legal texts with perfect readability, margin widths, and line-heights.
- **responsive footers**: Flex-wrap wrapping in footers prevents links overlapping on smaller viewport widths.

## Manual Testing Recommendations
- **Metadata Inspection**: Open `/terms` and `/faq` in browser, verify the page titles in the tab browser.
- **Link Clicks**: Click all combinations of footers on `/`, `/privacy`, `/terms`, and `/faq` to make sure there are no broken loops.
