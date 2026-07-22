# 07 · Git, GitHub & Documentation Workflow

| | |
|---|---|
| **Phase** | Cross-cutting (applies to all iterations) |
| **Version** | v1.0 |
| **Date** | 2026-07-22 |
| **Status** | Approved — adopt from the first commit |

---

## 1. Documentation strategy: docs as code

Documentation lives in a `/docs` folder in the repository root, committed alongside the code.

### Why markdown in the repo

| Reason | Detail |
|--------|--------|
| Diffs cleanly | Git shows exactly what changed in a requirement, when, and in which commit. |
| Stays current | Docs update in the same commit as the code they describe. External wikis drift within weeks. |
| Reviewable | Documentation changes appear in pull requests like any other change. |
| Portable | Plain text; no vendor lock-in, renders natively on GitHub. |
| Portfolio value | A public repo containing requirements, wireframe specs, and a design system is a strong hiring signal. |

### The core discipline

**If a change affects a document, update the document in the same commit or pull request as the code.** Documentation treated as a separate chore does not get done.

### README vs docs

| File | Purpose |
|------|---------|
| `README.md` (root) | The front door: what this project is, live link, screenshots, tech stack, how to run it locally. Written for a visitor. |
| `/docs/*.md` | The depth behind it: requirements, architecture, design decisions. Written for a maintainer or reviewer. |

The README is itself a portfolio artifact — recruiters read it. It deserves real effort.

## 2. Repository structure

A single repository for the whole project. When Django arrives in Iteration 3, it becomes a folder rather than a second repository — simpler to manage, and the full stack stays visible in one place.

```
portfolio/
├── README.md
├── .gitignore
├── .env.example
├── docs/
│   ├── 01-vision-and-requirements.md
│   ├── 02-information-architecture.md
│   ├── 03-user-flow.md
│   ├── 04-wireframes.md
│   ├── 05-design-system.md
│   ├── 06-frontend-architecture.md
│   ├── 07-git-and-documentation-workflow.md
│   └── reviews/
│       └── iteration-1-review.md
├── frontend/          React app (Iteration 1)
└── backend/           Django app (Iteration 3)
```

## 3. Branching: GitHub Flow

`main` is always deployable. All work happens on branches and returns through pull requests.

```
main ─────●──────────────────────●────●  tag v0.1.0
           \                    /
            ●───●───●───●──────●
            feat/hero-section    PR
```

### The loop

1. Create an issue describing the task.
2. Branch from `main`.
3. Commit in small, focused steps.
4. Push and open a pull request.
5. Review your own diff, then merge.
6. Delete the branch.

### Why pull requests when working solo

Opening a pull request to yourself feels redundant, but:

- It forces a review of the complete diff before merging, which reliably catches mistakes.
- It creates a visible record of how you work.
- It is the workflow every team uses, so arriving already fluent is an advantage.

A repository with well-described merged pull requests reads very differently to a reviewer than one with commits pushed directly to `main`.

### Branch naming

| Prefix | Use | Example |
|--------|-----|---------|
| `feat/` | New feature | `feat/project-card-component` |
| `fix/` | Bug fix | `fix/mobile-nav-overflow` |
| `docs/` | Documentation only | `docs/design-system-tokens` |
| `refactor/` | Restructuring, no behaviour change | `refactor/extract-skill-tag` |
| `chore/` | Tooling, dependencies, config | `chore/add-eslint` |

## 4. Commit messages: conventional commits

Format: `type: short description in the imperative mood`

| Type | Use |
|------|-----|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting only, no logic change |
| `refactor` | Restructuring, no behaviour change |
| `test` | Adding or fixing tests |
| `chore` | Build process, dependencies, config |

**Good**

```
feat: add ProjectCard component with tech tags
fix: correct hero button alignment on mobile
docs: update requirements with hosted CV decision
```

**Poor**

```
update
fixed stuff
asdf
final version 2
```

### Commit granularity

One logical change per commit. If the message needs the word "and", it is probably two commits. Small commits are easier to review, easier to revert, and produce a history that reads as a narrative.

## 5. Secrets and .gitignore

**Never commit secrets.** `.env` is always gitignored. Commit a `.env.example` listing the keys with no values.

```
# .env.example
DATABASE_URL=
DJANGO_SECRET_KEY=
CONTACT_EMAIL=
```

This becomes critical in Iteration 3, when Django introduces database credentials and a secret key. Leaked secrets in a public repository are a common and serious mistake — and note that removing a secret in a later commit does **not** remove it from history. If it is ever pushed, the credential must be rotated.

### Minimum .gitignore

```
node_modules/
dist/
build/
.env
.env.local
__pycache__/
*.pyc
venv/
.DS_Store
```

## 6. Mapping GitHub to the SDLC

| SDLC concept | GitHub feature |
|--------------|----------------|
| Iteration | Milestone |
| Task / requirement | Issue |
| Work in progress | Branch + pull request |
| Iteration complete | Tagged release (`v0.1.0`) |
| Iteration review | `docs/reviews/iteration-N-review.md` |
| Backlog | GitHub Projects board |

This makes the process visible. A reviewer can see not only the finished site but how it was planned and delivered.

### Versioning

Semantic versioning, tagged at the end of each iteration:

| Tag | Meaning |
|-----|---------|
| `v0.1.0` | Iteration 1 complete — React frontend live |
| `v0.2.0` | Iteration 2 complete — case study pages |
| `v0.3.0` | Iteration 3 complete — Django + PostgreSQL |
| `v1.0.0` | Full launch |

## 7. Iteration review notes

At the end of each iteration, write a short note in `docs/reviews/` covering:

- What was completed against the definition of done.
- What went wrong or took longer than expected.
- What was learned about the technology.
- What changes to make in the next iteration.

This is the "inspect and adapt" step that makes the model genuinely iterative rather than a waterfall in disguise. It is also excellent interview material.

## 8. Deferred

**CI/CD with GitHub Actions.** Automated build, lint, and deploy on merge to `main`. Deferred until the deployment pipeline is stable, then added as a focused learning task. Highly valued by employers.

**Automated tests.** Deferred; introduce alongside the Django backend where the value is clearest.

## 9. Revision history

| Version | Date | Change |
|---------|------|--------|
| v1.0 | 2026-07-22 | Documentation strategy, branching model, commit conventions, secret handling, and SDLC-to-GitHub mapping approved. |
