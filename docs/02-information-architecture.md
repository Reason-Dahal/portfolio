# 02 · Information Architecture

| | |
|---|---|
| **Phase** | Phase 1 · Design |
| **Version** | v1.0 |
| **Date** | 2026-07-22 |
| **Status** | Approved |

---

## 1. Structure decision

**Chosen: hybrid — a single-page main site plus a dedicated detail page per app.**

### Options considered

| Option | Verdict |
|--------|---------|
| Single-page scroll (everything on one page) | Rejected — four app case studies on one page becomes bloated and undersells the work. |
| Multi-page (separate Home, Projects, About, Contact) | Rejected — unnecessary navigation friction for a site with this little content. |
| **Hybrid (chosen)** | Main page stays scannable; each app gets room for a real case study. |

### Rationale

1. **Mobile apps need room.** A good app showcase needs screenshots, demo video, the problem solved, the developer's role, tech used, and outcome. Four of those on one scroll is bloated; as cards linking to case studies, it stays clean.
2. **Serves both personas.** Recruiters skim the main page; freelance clients dig into a relevant case study.
3. **Best learning path.** The main page teaches React fundamentals. Detail pages introduce React Router in a later iteration — a core employable skill, learned on a real need rather than a tutorial.

### Trade-off accepted

Slightly more to build than a pure single-page site. Mitigated by sequencing: Iteration 1 ships the main page with project cards; Iteration 2 adds routing and detail pages.

## 2. Site map

```
Home (single scrolling page)
├── Hero        — value proposition + primary CTA + photo
├── About       — three-paragraph bio + quick facts panel
├── Skills      — grouped skills + "currently learning"
├── Projects    — 3–4 app cards ──┐
└── Contact     — form + direct channels + CV   │
                                               │
App detail pages (one per app, ×3–4) ←─────────┘
└── case study: demo media, problem, role, tech, outcome, links
```

`CV.pdf` is a downloadable asset, not a page. It is linked from the hero and the contact section.

## 3. Section purposes

| Section | Purpose | Persona served |
|---------|---------|----------------|
| Hero | State what you build and who it helps within 5 seconds; offer both CTAs immediately. | Both |
| About | Turn a skill list into a person; frame the learning trajectory as a strength. | A (primary) |
| Skills | Show the stack honestly, separating confident from in-progress. | Both |
| Projects | Prove capability with real shipped work. | Both (B primary) |
| Contact | Convert interest into a message. | Both |
| App detail | Depth for anyone evaluating fit seriously. | B (primary) |

## 4. Navigation

- Sticky top nav with anchor links: About · Skills · Projects · Contact.
- Nav collapses to a hamburger menu on mobile.
- App detail pages carry a clear "back to projects" link.

## 5. Build sequencing

| Element | Iteration |
|---------|-----------|
| All five home sections, projects as cards | 1 |
| App detail pages + React Router | 2 |

## 6. Revision history

| Version | Date | Change |
|---------|------|--------|
| v1.0 | 2026-07-22 | Structure chosen and approved; site map and section purposes defined. |
