# 01 · Vision & Requirements

| | |
|---|---|
| **Project** | Personal portfolio website |
| **Phase** | Phase 0 · Requirements & Planning |
| **Version** | v0.2 |
| **Date** | 2026-07-22 |
| **SDLC model** | Iterative & Incremental |
| **Status** | Approved — baseline for Phase 1 |

> Living document. Requirements may change as we learn; every change is logged in the revision history.

---

## 1. Vision statement

A fast, professional portfolio website that showcases real mobile apps and skills to convince two audiences — internship recruiters and freelance clients — that this developer can build things that help their team or business grow. The build itself doubles as a hands-on learning project for React, Django, and PostgreSQL, documented end to end following a proper SDLC.

## 2. Goals

**Primary.** Win opportunities — land a first internship and attract freelance clients — by clearly demonstrating skills and project outcomes.

**Secondary.** Learn React, Django, and PostgreSQL incrementally at ~5–10 hrs/week, producing documentation at each step.

### Success criteria

- Site is live on the registered `.com.np` domain over HTTPS.
- 3–4 apps presented clearly, each explaining problem, solution, and tech used.
- A visitor can get in touch and download the CV without friction.
- Codebase and docs are clean enough to themselves serve as a portfolio piece.
- The developer can confidently explain the SDLC process followed.

## 3. Personas

**Persona A — Internship recruiter / hiring manager.**
Wants strong fundamentals, real projects, evidence of fast learning, and a sense of the person. Values a downloadable CV, an about section, and honesty about skill level.

**Persona B — Freelance client.**
Wants proof this developer can solve a real problem, communicate clearly, and be reliable. Values clear project outcomes and easy contact.

Both care most about the same thing: **real projects, clearly explained.** One site serves both, provided the messaging says "here is how I can help you" and makes clear the developer is open to both internships and freelance work.

## 4. Scope

**In scope.** Public portfolio site; hero, about, skills, projects, contact; per-app case study pages; CV download; React frontend, later backed by Django + PostgreSQL; deployment to the live domain; full SDLC documentation.

**Out of scope (for now).** Visitor accounts or authentication; e-commerce, payments, booking; blog or CMS; rebuilding the developer's mobile apps (they are showcased, not rebuilt); dark mode (deferred — see NFR-7).

## 5. Functional requirements

| ID | Requirement | Iteration |
|----|-------------|-----------|
| FR-1 | Landing hero with value proposition addressing both audiences, and one primary CTA. | 1 |
| FR-2 | Projects section: 3–4 app cards, each with a device-framed screenshot, a one-line problem statement, tech tags, and a link to its case study. | 1 |
| FR-3 | Skills section separating confident skills from those currently being learned. | 1 |
| FR-4 | About section: three-part bio plus a scannable quick-facts panel. | 1 |
| FR-5 | Contact section with a three-field form as the primary action. | 1 |
| FR-6 | CV delivered as a PDF hosted on the site; download links in hero and contact. | 1 |
| FR-7 | Fully responsive, mobile-first layout. | 1–2 |
| FR-8 | Per-app case study pages with demo media, role, outcomes, and store/repo links, reached via React Router. | 2 |
| FR-9 | Contact form submissions persisted to PostgreSQL via a Django backend. | 3–4 |
| FR-10 | Django admin panel to add, edit, and remove projects without code changes. | 3 |
| FR-11 | Project data served dynamically from the backend API to the React frontend. | 4 |

## 6. Non-functional requirements

| ID | Requirement |
|----|-------------|
| NFR-1 | Fast initial load; basic SEO (titles, meta descriptions, semantic HTML). |
| NFR-2 | Mobile-first responsive across phone, tablet, and desktop. |
| NFR-3 | Accessible: adequate contrast, alt text on all images, keyboard navigable. |
| NFR-4 | Live on the `.com.np` domain over HTTPS. |
| NFR-5 | Clean, documented, Git-versioned code. |
| NFR-6 | Easy to update with new projects (via admin panel from Iteration 3). |
| NFR-7 | All colours defined as CSS variables so dark mode can be added later as a contained change. |

## 7. Technology stack

| Layer | Technology | Status | Rationale |
|-------|-----------|--------|-----------|
| Frontend | React | Learning | Modern and in demand; built first so a real site goes live early. |
| Routing | React Router | Learning | Needed for case study pages (FR-8); a core employable skill. |
| Backend | Django (Python) | Learning | Batteries included; its admin panel satisfies FR-10 quickly. |
| Database | PostgreSQL | Learning | Relational store for messages and project data. |
| Existing | Flutter, Node.js, Express.js, MongoDB | Known | Already in the toolkit; showcased as prior work, not rebuilt. |
| Tooling | Git; hosting TBD | — | Version control from day one; host chosen before Iteration 1 deploy. |

## 8. Constraints & assumptions

- Pace: ~5–10 hrs/week, roughly two-week iterations.
- Solo developer learning three new technologies at once; refactors are expected and acceptable.
- A `.com.np` domain is registered (exact name TBD).
- Frontend-first sequencing means the site is publicly useful before any backend exists.

## 9. Content inventory

| Content | Status |
|---------|--------|
| App screenshots / demo videos | On hand |
| Written project descriptions | On hand |
| CV / resume (PDF) | On hand |
| Professional photo | **To capture** |
| About / bio text (3 paragraphs) | **To write** |
| Headline and value-proposition copy | **To write** |
| Per-app metadata (role, tech tags, store/repo links) | To consolidate |

## 10. Conversion strategy

- **Primary action:** "Get in touch" — works for both personas; appears in hero and contact.
- **Secondary action:** "Download CV" — prominent for recruiters; repeated in hero and contact.
- Hire and call enquiries emerge naturally from the contact step; no separate booking flow.

## 11. Open questions

| # | Question | Status |
|---|----------|--------|
| 1 | Exact `.com.np` domain name (likely the brand identity)? | Open |
| 2 | Contact email address for form submissions? | Open |
| 3 | Hosting provider for frontend (and later backend)? | Open — decide before Iteration 1 deploy |

## 12. Revision history

| Version | Date | Change |
|---------|------|--------|
| v0.1 | 2026-07-21 | Initial draft from Phase 0 requirements gathering. |
| v0.2 | 2026-07-22 | CV confirmed as hosted PDF; photo confirmed; projects confirmed as mobile apps; case study pages promoted to FR-8; dark mode deferred with NFR-7 added; requirements renumbered. |
