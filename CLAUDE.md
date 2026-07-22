# CLAUDE.md

Project context for Claude Code. Read this before making changes.

## Project

Personal portfolio site for Reason Dahal, a full-stack mobile developer (Flutter, Node.js, Express, MongoDB) seeking a first internship and freelance work. The site showcases 3–4 mobile apps and converts visitors into contacts.

The build follows an iterative SDLC. Full documentation is in `/docs` — read `04-wireframes.md`, `05-design-system.md`, and `06-frontend-architecture.md` before building UI.

**Secondary goal:** the owner is learning React, Django, and PostgreSQL through this project. Favour clear, conventional, readable code over clever or compressed code. Add brief comments where a React concept is first introduced.

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Build | Vite | Already scaffolded in `frontend/` |
| Framework | React (JavaScript) | **Not TypeScript** — deliberate, one new language at a time |
| Styling | Plain CSS with custom properties | **No Tailwind, no CSS-in-JS, no UI libraries** |
| Routing | React Router | Iteration 2 only — not yet |
| State | Local component state | No Redux, no Context needed at this scale |
| Backend | Django + PostgreSQL | Iteration 3 — do not add yet |

## Structure

```
portfolio/
├── docs/                    SDLC documentation
├── frontend/
│   ├── public/
│   │   ├── cv.pdf
│   │   └── images/projects/
│   └── src/
│       ├── components/      one component per file
│       ├── data/            projects.js, skills.js
│       ├── styles/tokens.css
│       ├── App.jsx
│       └── index.css
└── backend/                 Iteration 3
```

## Design tokens

All colours, spacing, and fonts are defined in `frontend/src/styles/tokens.css`. **Never hard-code a colour, font, or spacing value** — always reference a variable.

Key tokens: `--color-accent` (deep teal `#0F6E56`), `--color-bg`, `--color-surface`, `--color-text`, `--color-text-secondary`, `--color-border`, `--font-sans` (Inter), `--font-mono` (JetBrains Mono), `--space-1` through `--space-20`, `--radius`, `--radius-lg`, `--container-max` (1120px).

Full specification in `docs/05-design-system.md`.

### Visual principles

- Mostly neutral. The accent colour appears on roughly 5% of the page — buttons, links, tags, small highlights. Restraint is the point.
- Two font weights only: 400 and 600.
- Sentence case everywhere, never Title Case.
- Mobile-first: base styles target small screens, then add breakpoints upward.
- Light mode only. Dark mode is deferred but tokens must stay variable-based so it can be added later.

## Components (Iteration 1)

Per `docs/06-frontend-architecture.md`:

```
App
├── Navbar          sticky, anchor links, hamburger on mobile
├── Hero            eyebrow tag, headline, sub-headline, two CTAs, photo
├── About           three-paragraph bio + quick-facts panel
├── Skills          grouped skill cards
│   └── SkillTag    props: label, status ("confident" | "learning")
├── Projects        card grid
│   └── ProjectCard props: name, tagline, image, tech[], slug
├── Contact         three-field form + direct channels + CV download
└── Footer
```

### Rules

- One component per file, filename matching the component name.
- **Data lives in `src/data/`, never hardcoded inside components.** In Iteration 4 these files are replaced by API calls; components must not need changing when that happens.
- `SkillTag` with `status="learning"` renders with a dashed border and muted text — deliberately distinct from confident skills.
- `ProjectCard` screenshots use a phone aspect ratio (device-framed), since all projects are mobile apps.
- The contact form has **exactly three fields**: name, email, message. Do not add more.
- Contact form has no backend in Iteration 1 — use a `mailto:` link or a form service as a stopgap. Persistence to PostgreSQL comes in Iteration 3–4.

## Accessibility

- Meaningful alt text on every image.
- Visible focus states on all interactive elements.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, real heading hierarchy.
- Never rely on colour alone to convey meaning.

## Content placeholders

The owner has not yet supplied final copy. Where content is missing, use clearly-marked placeholders — do not invent biography details, project outcomes, or credentials. Needed:

- Headline and sub-headline
- Three-paragraph bio
- Project names, taglines, tech tags, screenshots
- Professional photo
- Contact email, social links
- `cv.pdf`

## Conventions

**Commits:** conventional commits — `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`. Imperative mood, one logical change per commit.

**Documentation:** if a change contradicts something in `/docs`, update the document in the same commit and add a row to its revision history. Docs are living documents, not a snapshot.

**Secrets:** never commit `.env`. Keys go in `.env.example` with empty values.

## Out of scope for Iteration 1

Routing and case study pages · Django backend · dark mode · TypeScript · tests · CI/CD · blog or CMS · authentication.
