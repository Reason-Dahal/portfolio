# 05 · Design System

| | |
|---|---|
| **Phase** | Phase 1 · Design |
| **Version** | v1.0 |
| **Date** | 2026-07-22 |
| **Status** | Approved |

---

## 1. Principles

1. **Mostly neutral.** The page is off-white with near-black text. The accent colour appears on roughly 5% of the page — buttons, links, tags, small highlights. This restraint is what separates professional sites from amateur ones.
2. **Tokens, not hard-coded values.** Every colour, size, and space is a CSS variable. Changing the accent later is a one-line edit, and dark mode becomes a contained addition (NFR-7).
3. **Mobile-first.** Base styles target small screens; larger layouts are added at breakpoints.
4. **One primary action per view.** Enforced by having exactly one solid button style.

## 2. Colour — deep teal

**Chosen direction:** deep teal. Calm and trustworthy for freelance clients, and less common in developer portfolios than the usual indigo, so it stands out slightly at no risk.

### Teal ramp

| Token | Hex | Use |
|-------|-----|-----|
| `--teal-50` | `#E1F5EE` | Tag backgrounds, subtle fills |
| `--teal-100` | `#9FE1CB` | Hover fills |
| `--teal-200` | `#5DCAA5` | Decorative accents |
| `--teal-400` | `#1D9E75` | Links, icons |
| `--teal-600` | `#0F6E56` | **Primary button, primary accent** |
| `--teal-800` | `#085041` | Button hover |
| `--teal-900` | `#04342C` | Text on light teal fills |

### Neutrals

| Token | Hex | Use |
|-------|-----|-----|
| `--neutral-0` | `#FFFFFF` | Cards, surfaces |
| `--neutral-50` | `#FAFAF8` | Page background |
| `--neutral-100` | `#F1EFE8` | Subtle section backgrounds |
| `--neutral-200` | `#D3D1C7` | Borders |
| `--neutral-400` | `#888780` | Muted text, captions |
| `--neutral-600` | `#5F5E5A` | Secondary text |
| `--neutral-900` | `#2C2C2A` | Primary text |

### Semantic tokens

These are what components actually reference — never use a raw ramp value directly in a component.

| Token | Value |
|-------|-------|
| `--color-bg` | `--neutral-50` |
| `--color-surface` | `--neutral-0` |
| `--color-text` | `--neutral-900` |
| `--color-text-secondary` | `--neutral-600` |
| `--color-text-muted` | `--neutral-400` |
| `--color-border` | `--neutral-200` |
| `--color-accent` | `--teal-600` |
| `--color-accent-hover` | `--teal-800` |
| `--color-accent-subtle` | `--teal-50` |
| `--color-on-accent` | `--teal-50` |

## 3. Typography

**Fonts.** Inter for all text; JetBrains Mono for tech tags only. Both are free Google Fonts.

Using one sans family everywhere means fewer decisions, faster loads (NFR-1), and a reliably professional result. Monospace confined to tech tags gives a developer signal without a hard-to-read monospace headline.

### Type scale

| Token | Size | Weight | Line height | Use |
|-------|------|--------|-------------|-----|
| `--text-hero` | 40px / 32px mobile | 600 | 1.15 | Hero headline |
| `--text-h2` | 28px / 24px mobile | 600 | 1.25 | Section headings |
| `--text-h3` | 20px | 600 | 1.3 | Card titles |
| `--text-body-lg` | 18px | 400 | 1.6 | Sub-headline, lead paragraphs |
| `--text-body` | 16px | 400 | 1.7 | Body text |
| `--text-small` | 14px | 400 | 1.5 | Captions, secondary detail |
| `--text-tag` | 13px | 500 | 1 | Tech tags (JetBrains Mono) |

**Rules.** Two weights only — 400 and 600. Sentence case throughout, never Title Case. Body line height stays generous (1.7) for readability. Maximum body line length ~70 characters.

## 4. Spacing

A 4px base scale keeps everything visually aligned.

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 4px | Icon gaps |
| `--space-2` | 8px | Tight gaps between tags |
| `--space-3` | 12px | Inside small components |
| `--space-4` | 16px | Card padding |
| `--space-6` | 24px | Between elements |
| `--space-8` | 32px | Between subsections |
| `--space-12` | 48px | Section padding (mobile) |
| `--space-20` | 80px | Section padding (desktop) |

## 5. Other tokens

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 6px | Tags, inputs |
| `--radius` | 8px | Buttons |
| `--radius-lg` | 12px | Cards |
| `--border-width` | 1px | All borders |
| `--container-max` | 1120px | Max content width, centred |
| `--transition` | 150ms ease | Hover states |

## 6. Component styles

| Component | Specification |
|-----------|---------------|
| Primary button | Background `--color-accent`, text `--color-on-accent`, radius `--radius`, padding 12px 24px. Hover: `--color-accent-hover`. |
| Secondary button | Transparent background, 1px `--color-border`, text `--color-text`. Hover: border `--color-accent`, text `--color-accent`. |
| Card | Background `--color-surface`, 1px `--color-border`, radius `--radius-lg`, padding `--space-4`. Hover (project cards only): border `--color-accent`. |
| Tech tag | Background `--color-accent-subtle`, text `--teal-900`, JetBrains Mono 13px, radius 999px, padding 4px 10px. |
| "Learning" tag | Transparent background, 1px dashed `--color-border`, text `--color-text-muted`. Deliberately distinct from confident-skill tags. |
| Input | Background `--color-surface`, 1px `--color-border`, radius `--radius-sm`, height 44px. Focus: border `--color-accent`. |
| Link | Colour `--color-accent`, underline on hover. |

## 7. Starter CSS

Drop this into `src/styles/tokens.css` in Iteration 1.

```css
:root {
  --teal-50:  #E1F5EE;
  --teal-100: #9FE1CB;
  --teal-200: #5DCAA5;
  --teal-400: #1D9E75;
  --teal-600: #0F6E56;
  --teal-800: #085041;
  --teal-900: #04342C;

  --neutral-0:   #FFFFFF;
  --neutral-50:  #FAFAF8;
  --neutral-100: #F1EFE8;
  --neutral-200: #D3D1C7;
  --neutral-400: #888780;
  --neutral-600: #5F5E5A;
  --neutral-900: #2C2C2A;

  --color-bg:             var(--neutral-50);
  --color-surface:        var(--neutral-0);
  --color-text:           var(--neutral-900);
  --color-text-secondary: var(--neutral-600);
  --color-text-muted:     var(--neutral-400);
  --color-border:         var(--neutral-200);
  --color-accent:         var(--teal-600);
  --color-accent-hover:   var(--teal-800);
  --color-accent-subtle:  var(--teal-50);
  --color-on-accent:      var(--teal-50);

  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-20: 80px;

  --radius-sm: 6px;
  --radius: 8px;
  --radius-lg: 12px;
  --container-max: 1120px;
  --transition: 150ms ease;
}
```

## 8. Accessibility notes

- `--teal-600` on white and `--teal-900` on `--teal-50` both meet WCAG AA contrast for body text.
- Never rely on colour alone to convey meaning — the "currently learning" tags use a dashed border as well as muted colour.
- All interactive elements need a visible focus state (NFR-3).
- Every image requires meaningful alt text.

## 9. Deferred

**Dark mode.** Deferred from Iteration 1 deliberately: it roughly doubles colour decisions and adds React state management on top of an already full learning load, and it is not something recruiters or clients evaluate. Because all colours are variables, it can later be added as a second set of values plus a toggle — a contained task and a good React context exercise. Slotted as an optional stretch goal in a later iteration.

## 10. Revision history

| Version | Date | Change |
|---------|------|--------|
| v1.0 | 2026-07-22 | Deep teal palette, Inter + JetBrains Mono, spacing scale, component specs, and starter CSS approved. |
