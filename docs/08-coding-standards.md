# 08 · Coding Standards & Conventions

| | |
|---|---|
| **Phase** | Cross-cutting (applies to all iterations) |
| **Version** | v1.0 |
| **Date** | 2026-07-22 |
| **Status** | Approved |

---

## 1. Principle

Professional practice is **appropriate rigor applied consistently**, not maximum tooling. Every convention here exists because it prevents a specific problem. Anything that does not is deferred and listed with a reason in section 9.

## 2. Folder structure

Components are **colocated**: each component owns a folder containing its logic, styles, and a barrel export.

```
frontend/
├── public/
│   ├── cv.pdf
│   └── images/
│       ├── photo.jpg
│       └── projects/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   └── index.js
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectCard.css
│   │   │   └── index.js
│   │   └── ...
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
```

**Why colocation.** Everything belonging to a component lives together, so deleting a component means deleting one folder with nothing left behind. This is the dominant convention in production React codebases.

**The `index.js` barrel** contains one line:

```js
export { default } from './Hero';
```

This allows `import Hero from '@/components/Hero'` rather than `'@/components/Hero/Hero'`.

## 3. Naming conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Component file | PascalCase | `ProjectCard.jsx` |
| Component folder | PascalCase, matches component | `ProjectCard/` |
| Non-component file | camelCase | `projects.js` |
| CSS class | BEM: `block__element--modifier` | `hero__headline`, `tag--learning` |
| CSS custom property | kebab-case, semantic | `--color-accent` |
| Boolean prop | `is` or `has` prefix | `isOpen`, `hasDemo` |
| Event handler prop | `on` prefix | `onSubmit` |
| Handler function | `handle` prefix | `handleSubmit` |

## 4. Component rules

- **One component per file.** If a file exports two components, split it.
- **Props destructured in the signature:** `function ProjectCard({ name, tagline, tech })`.
- **No hardcoded content in components.** Copy and data come from `src/data/` or props.
- **Early returns over nested ternaries** for conditional rendering.
- **Keys on list items must be stable identifiers**, never array indices. Use `slug` or `id`.
- Component files are ordered: imports → component function → export.

## 5. CSS rules

- **Never hardcode a colour, spacing value, radius, or font.** Always reference a token from `tokens.css`. A raw hex in a component file is a defect.
- **BEM naming** scopes styles to components without tooling.
- **Mobile-first:** base styles target small screens; `@media (min-width: …)` blocks sit at the bottom of the file and add larger layouts.
- **No `!important`.** If specificity is fighting you, the selector is wrong.
- **No fixed pixel heights on text containers** — content must be free to grow.
- Breakpoints: 640px (tablet), 900px (desktop). Use consistently.

## 6. Accessibility (non-negotiable)

- Semantic elements: `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>` for actions, `<a>` for navigation.
- One `<h1>` per page; heading levels never skip.
- Meaningful `alt` on every image; `alt=""` only for genuinely decorative images.
- All interactive elements reachable by keyboard with a visible focus state.
- Form inputs have associated `<label>` elements.
- Colour is never the sole carrier of meaning.

## 7. Tooling

| Tool | Purpose |
|------|---------|
| ESLint | Catches bugs and bad patterns. Ships with the Vite React template. |
| Prettier | Formats code automatically. Ends all formatting debate. |
| `.editorconfig` | Consistent indentation and line endings across editors. |
| Vite path alias | `@/` resolves to `src/`, avoiding `../../..` import chains. |

Formatting is never a code review topic. Prettier decides.

## 8. Git

Per `docs/07-git-and-documentation-workflow.md`. Conventional commits, one logical change per commit, no secrets committed.

**Iteration 1 exception:** commits go directly to `main` while the owner is learning React. Branch-and-pull-request workflow resumes in Iteration 2, once one variable is being learned at a time rather than three.

## 9. Deferred — and why

| Practice | Reason for deferral |
|----------|---------------------|
| Unit tests | A static marketing page has little testable logic. Introduce alongside the Django backend, where business logic and API contracts justify them. |
| CI/CD (GitHub Actions) | Requires a stable deploy target. Add at the end of Iteration 1, once deployment works manually. |
| Storybook | Built for design systems consumed by multiple teams. Disproportionate for nine components in a solo project. |
| TypeScript | Deliberate: one new language at a time (see `docs/06-frontend-architecture.md`). A strong Iteration 5+ addition. |
| Docker | No deployment or environment problem currently exists that it solves. |

Each of these is a genuine industry practice. The judgment being exercised is *when* they earn their cost — and being able to explain that reasoning is itself a senior-level signal.

## 10. Revision history

| Version | Date | Change |
|---------|------|--------|
| v1.0 | 2026-07-22 | Folder structure, naming, CSS, accessibility, tooling, and deferral rationale approved. |
