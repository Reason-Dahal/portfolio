# 04 · Wireframes

| | |
|---|---|
| **Phase** | Phase 1 · Design |
| **Version** | v1.0 |
| **Date** | 2026-07-22 |
| **Status** | Approved — all five home sections |

> Wireframes define **layout and hierarchy only**. Colour and typography are specified separately in doc 05.

---

## 1. Hero

**Layout.** Two columns: content left, photo right. Stacks on mobile with the photo above the text.

| Element | Detail |
|---------|--------|
| Top nav | Logo/name left; anchor links right (About, Skills, Projects, Contact). Hamburger on mobile. |
| Eyebrow tag | Pill: "open to internships + freelance" — signals both audiences immediately. |
| Headline | The value proposition: what you build and who it helps. |
| Sub-headline | One line naming the tech and the outcome clients get. |
| Primary button | "Get in touch" — solid fill. |
| Secondary button | "Download CV" — outlined, with download icon. |
| Photo | Professional headshot; anchors the right column. |

**Why.** The eyebrow tag resolves the two-audience problem in the first second. Button hierarchy (solid vs outlined) enforces one primary action without hiding the CV.

## 2. About

**Layout.** Bio occupying two-thirds left, quick-facts panel one-third right. Stacks on mobile.

| Element | Detail |
|---------|--------|
| Paragraph 1 | Who you are and what you do. |
| Paragraph 2 | Your trajectory — expanding into React, Django, PostgreSQL; this site is the proof. |
| Paragraph 3 | What you are looking for — internship and freelance work. |
| Quick facts panel | Location · focus · open to · currently learning. |

**Why.** Three short paragraphs each with a single job, because recruiters skim. Paragraph 2 deliberately reframes inexperience as demonstrated fast learning. The panel lets a visitor grasp the situation in five seconds without reading prose.

## 3. Skills

**Layout.** Grid of grouped skill cards, then a separate full-width "currently learning" block.

| Group | Contents |
|-------|----------|
| Mobile | Flutter, Dart |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Tools | Git, REST APIs |
| **Currently learning** | React, Django, PostgreSQL — styled distinctly (dashed outline, muted) |

**Why.** Separating confident skills from in-progress ones is deliberate honesty. Padded skill lists are transparent to experienced recruiters; "currently learning React, Django, PostgreSQL" alongside a site built in exactly those technologies is a far stronger signal than a false claim of mastery.

## 4. Projects

**Layout.** Responsive card grid, 3–4 cards, one column on mobile.

Each card contains, in order:

1. Device-framed screenshot (phone aspect ratio)
2. App name
3. **One line stating the problem it solves**
4. Tech tags
5. "View case study →" link

**Why.**
- The one-line problem statement is the part most portfolios omit. "Flutter app with authentication" describes what was built; "helps small shops track daily inventory offline" explains why it mattered — the second wins work.
- Mobile screenshots are tall and narrow; a device frame prevents them looking broken in a wide card and signals a genuinely shipped app.
- Cards stay shallow so the section remains scannable; depth lives on the case study pages.
- A uniform card structure maps directly to a single reusable `ProjectCard` React component — the ideal first React lesson.

## 5. Contact

**Layout.** Form left, alternative channels and CV right. Stacks on mobile.

| Element | Detail |
|---------|--------|
| Form fields | Name, email, message — **three only** |
| Submit | "Send message" — solid primary button |
| Direct channels | Email, LinkedIn, GitHub |
| CV block | "Download CV (PDF)" — repeated here for recruiters |

**Why.** Every additional form field measurably reduces submissions; follow-up questions can be asked in the reply. Alternative channels capture visitors who will not use forms. The CV is repeated so a visitor who scrolled the full page need not scroll back up.

**Iteration note.** In Iteration 1 the form has no backend; it will use a `mailto:` link or a free form service as a stopgap. Persistence to PostgreSQL via Django arrives in Iteration 3–4 (FR-9). This is incremental development working as intended: functional now, properly engineered later.

## 6. Responsive behaviour

| Breakpoint | Behaviour |
|-----------|-----------|
| Mobile (< 640px) | All two-column sections stack; project cards one per row; nav collapses to hamburger. |
| Tablet (640–1024px) | Project cards two per row; two-column sections may remain stacked. |
| Desktop (> 1024px) | Full two-column layouts; project cards three per row. |

Design and build mobile-first (NFR-2).

## 7. Revision history

| Version | Date | Change |
|---------|------|--------|
| v1.0 | 2026-07-22 | All five home-section wireframes approved with rationale. |
