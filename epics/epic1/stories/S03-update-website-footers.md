# S03: Update Website Footers

**Epic:** 1 — Website FAQ & Terms Pages
**Domain:** ui-views · **Points:** 1 · **Priority:** P1
**Status:** complete

---

## User Story
As a site visitor, I want to click links in the footer of the home page and privacy page to reach the FAQ and Terms pages easily.

## Description
This story links the new `/faq` and `/terms` pages into the main website flow. It modifies the footers on both `src/app/page.tsx` and `src/app/privacy/page.tsx` to replace dead links (hash links `#`) with their corresponding Next.js routes.

## Acceptance Criteria
- [x] Clicking "Terms of Service" or "Terms" in any footer redirects to `/terms` without page reload.
- [x] Clicking "FAQs" or "FAQ" in any footer redirects to `/faq` without page reload.
- [x] Link colors and hover states match the existing active links (e.g., hover color transitions to `brand-red`).

---

## Technical Context

### Current State
Footer links in `src/app/page.tsx` have `#` for some links, and there are no FAQ links. Footer in `src/app/privacy/page.tsx` has no link to FAQs or Terms.

### Files Likely Affected
- `src/app/page.tsx` — [MODIFY] Update footer layout to include links for Terms of Service and FAQs.
- `src/app/privacy/page.tsx` — [MODIFY] Update footer layout to include links for Terms of Service and FAQs.

### Dependencies
- **Depends on:** S01, S02
- **Blocks:** None

### Risks & Open Questions
- None.

---

## Implementation Tasks

### Approach
1. **Routing and linking**: Use Next.js `<Link>` components to enable client-side navigation.
2. **Page layout footers**:
   - `src/app/page.tsx`:
     - Update the navigation links in the footer. Place "FAQs", "Privacy Policy", "Terms of Service", and "App Store" in a single flex layout. Ensure margins are consistent.
   - `src/app/privacy/page.tsx`:
     - Update footer links. Replace the single Privacy Policy link with "Home", "FAQs", "Privacy Policy", and "Terms of Service".

### Boundary Conditions & Risks Matrix
- **Link Overlaps**: Ensure enough space is added between items so they wrap cleanly on small screens. Use `flex-wrap gap-x-8 gap-y-4` or equivalent to guarantee clean display on mobile.

### Technical Pseudo-code / Draft Interface
```tsx
// In src/app/page.tsx
<div className="flex flex-wrap items-center gap-x-8 gap-y-4">
  <Link href="/faq" className="...">FAQs</Link>
  <Link href="/privacy" className="...">Privacy Policy</Link>
  <Link href="/terms" className="...">Terms of Service</Link>
  <Link href="#" className="...">App Store</Link>
</div>
```

### Tasks (ordered)
- [x] **T1** `src/app/page.tsx` — Modify home page footer to replace dead hash links and add links to `/faq` and `/terms`.
- [x] **T2** `src/app/privacy/page.tsx` — Modify privacy page footer to add navigation links for "Home", "FAQs", and "Terms of Service".

---

## Review Notes
- R01: Checked client-side routing on footers. Both pages redirect correctly and hover effects activate smoothly.
- R01 Finding (Low): Double-check text alignment. Verified that `lowercase` text matches brand guide requirements.
