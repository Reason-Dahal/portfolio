# 06 · Frontend Architecture

| | |
|---|---|
| **Phase** | Phase 1 · Design |
| **Version** | v1.0 |
| **Date** | 2026-07-22 |
| **Status** | Approved — final Phase 1 deliverable |

> This document is the bridge from design to code. It turns the wireframes in doc 04 into a concrete React plan.

---

## 1. Core concept

A **component** is a reusable piece of UI that receives data (**props**) and returns markup. The Projects section demonstrates why this matters: rather than writing four near-identical cards, we write one `ProjectCard` and render it four times with different props. A styling change then happens in exactly one file.

## 2. Component tree

```
App
├── Navbar                     structure
├── Home                       structure
│   ├── Hero                   section
│   ├── About                  section
│   ├── Skills                 section
│   │   └── SkillTag           reusable · ×9
│   ├── Projects               section
│   │   └── ProjectCard        reusable · ×3–4
│   └── Contact                section
└── Footer                     structure
```

| Type | Meaning |
|------|---------|
| Structure | Holds and arranges other components. |
| Section | One wireframed section of the home page. |
| Reusable | Written once, rendered many times with different props. |

## 3. Component specifications

| Component | Props | Notes |
|-----------|-------|-------|
| `Navbar` | — | Sticky; anchor links; hamburger menu on mobile (needs state). |
| `Hero` | — | Content is static; the only component holding both CTAs. |
| `About` | — | Static bio and quick-facts panel. |
| `Skills` | — | Maps over the skills data and renders `SkillTag`. |
| `SkillTag` | `label`, `status` | `status` is `"confident"` or `"learning"` and drives the dashed styling. |
| `Projects` | — | Maps over the projects data and renders `ProjectCard`. |
| `ProjectCard` | `name`, `tagline`, `image`, `tech[]`, `slug` | `tagline` is the one-line problem statement. |
| `Contact` | — | Form state for three fields; alternative channels; CV link. |
| `Footer` | — | Copyright and social links. |

## 4. Data shape

Data lives in separate files, **not hardcoded inside components**. This is the single most important architectural decision in this document.

`src/data/projects.js`

```js
export const projects = [
  {
    slug: "inventory-app",
    name: "App name",
    tagline: "Helps small shops track daily inventory offline.",
    image: "/images/projects/inventory.png",
    tech: ["Flutter", "Node.js", "MongoDB"],
    links: { store: "", repo: "" }
  }
];
```

`src/data/skills.js`

```js
export const skills = [
  { group: "Mobile",   items: ["Flutter", "Dart"],           status: "confident" },
  { group: "Backend",  items: ["Node.js", "Express.js"],     status: "confident" },
  { group: "Database", items: ["MongoDB"],                   status: "confident" },
  { group: "Tools",    items: ["Git", "REST APIs"],          status: "confident" },
  { group: "Learning", items: ["React", "Django", "PostgreSQL"], status: "learning" }
];
```

**Why this matters.** In Iteration 4, `projects.js` is replaced by a call to the Django API. Because components only ever receive props, **no component code changes** — only the source of the data. Designing for that swap now turns the backend iteration into a clean addition rather than a rewrite.

## 5. Folder structure

```
portfolio/
├── docs/                      SDLC documentation (this folder)
├── public/
│   ├── cv.pdf                 hosted CV (FR-6)
│   └── images/projects/       app screenshots
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillTag.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   └── tokens.css         from doc 05
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

One component per file, named to match the component. Predictable and conventional — reviewers can navigate it without explanation.

## 6. Tooling decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Build tool | Vite | The current standard for React; fast, minimal configuration. |
| Language | JavaScript (not TypeScript) | One new language at a time. TypeScript is a good later addition. |
| Styling | Plain CSS with the tokens from doc 05 | Learn CSS properly before reaching for a framework. |
| Routing | React Router | Deferred to Iteration 2 (FR-8); not needed for a single page. |
| State | Local component state only | No Redux or Context needed at this scale. |

## 7. Iteration 1 build order

Build in this order so something visible works at every step.

| # | Task | Concept learned |
|---|------|-----------------|
| 1 | Vite project setup, Git repo, `tokens.css` | Project scaffolding |
| 2 | `App` + `Footer` | First component, JSX |
| 3 | `Navbar` | Props, mobile menu state |
| 4 | `Hero` | Layout, buttons, responsive CSS |
| 5 | `About` | Grid layout |
| 6 | `SkillTag`, then `Skills` | **Props and `.map()` — the core React idea** |
| 7 | `ProjectCard`, then `Projects` | Reuse the same pattern with richer props |
| 8 | `Contact` | Form state, controlled inputs |
| 9 | Responsive pass | Mobile-first breakpoints |
| 10 | Deploy | Live site on the domain |

Steps 6 and 7 are the heart of the iteration. Once `.map()` over data into components makes sense, the rest of React follows more easily.

## 8. Definition of done for Iteration 1

- All five sections render and match the wireframes in doc 04.
- Layout works correctly on phone, tablet, and desktop.
- CV downloads successfully.
- Contact form submits via a stopgap (`mailto:` or a free form service).
- Site is deployed and reachable on the live domain.
- Code is committed to Git with meaningful commit messages.
- An iteration review note is written for the docs folder.

## 9. Revision history

| Version | Date | Change |
|---------|------|--------|
| v1.0 | 2026-07-22 | Component tree, data shape, folder structure, tooling, and build order approved. |
