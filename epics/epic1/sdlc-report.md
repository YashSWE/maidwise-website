# SDLC Report — Epic 1: Website FAQ & Terms Pages

**Branch:** main
**Completed:** 2026-06-17
**Story Points:** 6 delivered / 6 planned
**Stories:** 3 complete, 0 deferred

---

## What Was Built

### Story-by-Story
| Story | Summary |
|-------|---------|
| S01 [Add FAQ Coming Soon Page] | Implemented a dynamic "Coming Soon" placeholder page at `/faq` featuring support contact channels, branded sunset layout, and framer-motion entry transitions. |
| S02 [Add Terms and Conditions Page] | Implemented a static Terms of Service document layout at `/terms` covering subscriptions, liability exclusions, user eligibility, account guidelines, and India-based jurisdiction terms. |
| S03 [Update Website Footers] | Linked both `/terms` and `/faq` routes to the footer navigation containers on the landing page and privacy policy page. |

### Key Files Changed / Created
- `src/app/faq/page.tsx` — [NEW] FAQ Coming Soon page.
- `src/app/terms/page.tsx` — [NEW] Terms of Service document page.
- `src/app/page.tsx` — [MODIFY] Updated footer navigation structure with correct Next.js Links.
- `src/app/privacy/page.tsx` — [MODIFY] Updated footer navigation layout with Home, FAQ, and Terms links.

---

## Code Review Summary

### Critical Findings (fix before shipping)
*(None)*

### High Findings (recommended)
- **S01 & S02 Missing Page-Specific SEO Metadata**: The pages inherit global layout metadata. To improve search engine visibility, `/terms` should export a static metadata block. To prevent Next.js build errors for `/faq` (which is a client component), it should be refactored into a server component wrapper that handles metadata export and imports the client rendering code.

### Medium & Low Findings
- **Branding (Low)**: Logo casing in page footers. Verified that the `lowercase` branding class has been applied across footers to align with the iOS app's lowercase `maidwise` logo.

---

## What Needs Manual Testing

- [ ] **FAQ View**: Navigate to `/faq` -> Verify that the staggered framer-motion entry works correctly and the glassmorphic container renders.
- [ ] **Terms View**: Navigate to `/terms` -> Verify that the structured legal headings render with prose classes matching the privacy policy design.
- [ ] **Link Verification**: Click all footer routes on `/`, `/privacy`, `/terms`, and `/faq` -> Verify that no dead hashes exist and routing behaves smoothly.

---

## What Was Deferred
*(None)*

---

## Known Risks Going to Production
- None. These additions introduce new isolated paths and basic footer changes with zero risk to current application systems.

---

## Metrics
- Stories: 3 / 3
- Story points: 6 / 6
- Findings: 0 critical · 1 high · 0 medium · 1 low
- Files modified: 2 | New files: 2 | Deleted: 0
