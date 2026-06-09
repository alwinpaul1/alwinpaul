# Air Theme Redesign — Design Spec

**Date:** 2026-06-09
**Goal:** Restyle the alwinpaul.me portfolio to the "Air" design system (sky canvas + frosted glass, single Action Blue accent), keeping the existing structure, JS, and the light/dark toggle.

## Approved decisions
- **Scope:** Full Air redesign (not just a token swap).
- **Themes:** Keep the light/dark toggle. Light = Air. Dark = an Air-dark family member (deep sky navy, same Action Blue accent).
- **Fonts:** Load Air's Google-Font substitutes — Inter (body/UI), Oswald (display), Dancing Script (cursive accent), Space Mono (mono accent).
- **Hero:** Oswald display name (drop the rainbow gradient). **Sidebar:** Sky Canvas blue panel.

## Approach
Token-driven re-theme (Approach A). The site already reads from semantic CSS vars and is already glassmorphic, so most of the recolor flows by remapping vars; the rest is targeted component work for the parts that contradict Air.

**Two `:root` copies must stay in sync:** the inline critical CSS in `index.html` (head) and `assets/css/style.css`. Both define `:root` and `[data-theme="dark"]`. Edit both or get a FOUC color flash.

## Color mapping (light = Air)
| Semantic var | Old | New (Air) |
|---|---|---|
| `--accent-color` | `#00d4ff` | `#2b7fff` Action Blue |
| accent (`#149ddd`) literals | cyan | `#2b7fff` |
| `--primary-gradient` | blue gradient | `linear-gradient(135deg,#426188,#2b7fff)` (decorative only) |
| `--body-bg` | `#fff` | `#426188` Sky Canvas (atmospheric base) |
| `--section-bg` | `#f5f8fd` | a sibling sky tone for alternating bands |
| `--bg-dark` (sidebar) | `#0f172a` | deep sky `#33506f` |
| `--heading-color` | `#173b6c` | deep ink for in-card headings |

### Contrast rule (important)
`--body-bg` becomes Sky Canvas blue. To stay readable and follow Air's "no body text directly on sky canvas":
- **Frosted cards → high opacity** (~`rgba(255,255,255,0.82)`) so dark text reads crisply against the blue.
- **On-canvas text** (section titles + descriptions, hero, about bio/badge, sidebar nav) → **Cloud White**.
- Card text stays dark charcoal; card headings stay deep ink.

## Component work
- **Buttons:** CTA radial-gradient buttons, `.glass-btn-primary`, and the contact submit button → Air **outlined Action Blue / ghost** style (transparent bg, `#2b7fff` border+text, soft radius).
- **Hero:** title → Oswald, Cloud White; subtitle/typed → Action Blue / Space Mono accent; drop rainbow + rainbow text-shadow.
- **Sidebar (`#header`):** Sky Canvas panel, Cloud White name/nav, Action Blue hover; profile ring uses the decorative gradient.
- **Section titles:** Cloud White heading on canvas; underline → Action Blue.
- **GitHub band:** deep sky gradient (replace `#0f172a`); Chart.js line/fill/points → `#2b7fff`; streak + activity-graph image URLs → blue ring/line/color params; chart container bg → deep sky.
- **Misc accent literals** (`#149ddd` in services, skills, facts, portfolio dots, contact icons, breadcrumb) → Action Blue.
- **`theme-color` meta** `#149ddd` → `#2b7fff`.

## Typography
- Replace Poppins `--font-stack` with Inter.
- Load Inter + Oswald + Dancing Script + Space Mono via the existing async Google Fonts pattern.
- Apply Oswald to hero/display, optionally Dancing Script as a section-title accent, Space Mono for mono accents (typed subtitle, badges).

## Dark theme (Air-dark)
Keep the toggle. Remap `[data-theme="dark"]`: body-bg sky-tinted navy (`~#1a2737`), Action Blue `#2b7fff` replaces cyan `#38bdf8` throughout, frosted dark cards retained.

## Verification
Serve locally (`python -m http.server 8000`), then screenshot **light + dark** across all sections (hero, about, resume, portfolio, skills, github, contact, sidebar, mobile) with agent-browser. Tune contrast until readable; confirm no rainbow/cyan remnants.

## Out of scope
No layout/structure changes, no content edits, no new sections, no JS behavior changes beyond chart colors.
