# Codebase Analysis — pratikhmehta.github.io

> Personal portfolio site for Pratik Mehta (Tech Lead & Magento Expert). React 18 + Vite + TypeScript + Tailwind CSS, deployed to GitHub Pages.
> Generated: 2026-08-20. Scope: full repo (source, config, CI, git history metadata).

---

## 1. Architecture

- Single-page app, no router. `src/App.tsx` renders one `<main>` with sections (Hero, About, Experience, Skills, Projects, Education, Contact) stacked and navigated via `react-scroll` anchors.
- State is local `useState`/`useEffect` only. `darkMode` lives in `App.tsx:13` and is prop-drilled into every component — no context, no Tailwind `dark:` variant (`tailwind.config.js` has no `darkMode` key at all).
- Every section component (About, Experience, Education, Skills, Projects, Contact — 6 files) re-implements identical Framer Motion `containerVariants`/`itemVariants`/`useInView` boilerplate (~15 lines each). Strong candidate for a shared `useScrollReveal()` hook or `<Section>` wrapper.
- Data layer (`src/data/resume.ts`) is a clean single source of truth for skills, experience, projects, education, social links, contact info — well-typed via `src/types/index.ts`. This part is done well.

## 2. Findings by severity

### Critical
| # | File:Line | Issue |
|---|---|---|
| 1 | [.github/workflows/ci-cd.yml:30](.github/workflows/ci-cd.yml#L30) | Runs `npm test -- --watchAll=false`, but **no test script or test framework exists** in `package.json` — this CI step fails on every run. |
| 2 | [.github/workflows/ci-cd.yml:4-6](.github/workflows/ci-cd.yml#L4-L6) | Triggers on push to `main`, but the repo's actual default branch is `master` (confirmed via git status) — **this workflow likely never fires**. `codeql.yml` correctly targets `master`, confirming the mismatch is a bug, not intentional. |

### High
| # | File:Line | Issue |
|---|---|---|
| 3 | git-tracked | **`dist/` is committed to git** (`dist/assets/*.js`, `*.css`, `index.html`, etc.) — build artifacts should never be version-controlled; CI already rebuilds them. Bloats repo history. |
| 4 | [Contact.tsx:44-48](src/components/Contact.tsx#L44-L48) | EmailJS `service_6fidvhb`, `template_vey2vfq`, and public key are hardcoded in source (and thus in git history across multiple commits) instead of using Vite env vars (`import.meta.env.VITE_*`) — `.gitignore` already excludes `.env*` files, so the env-var path was set up but unused. Recommend rotating the key and restricting allowed origins in the EmailJS dashboard. |
| 5 | duplication | Two redundant deploy mechanisms: `ci-cd.yml` auto-deploys via `peaceiris/actions-gh-pages`, while `package.json`'s `"deploy": "gh-pages -d dist"` script allows manual deploy too — could race or diverge. |

### Medium
| # | File:Line | Issue |
|---|---|---|
| 6 | [.idea/*](.idea) | `.idea/workspace.xml` and other IDE files are tracked in git despite being gitignored (added before the ignore rule existed — ignore doesn't retroactively untrack). `workspace.xml` can leak local machine paths. Run `git rm -r --cached .idea`. |
| 7 | [Hero.tsx:134-135](src/components/Hero.tsx#L134-L135) | Scroll-down arrow (`absolute bottom-10`) has no `relative` positioned ancestor — neither the `<section>` (line 13) nor `.container` (line 18) sets `position: relative`. The arrow escapes to the nearest actual positioned ancestor instead of anchoring to the hero section. |
| 8 | [Header.tsx](src/components/Header.tsx) | Nav menu (`menuItems`, lines 33-40) has no entry for the **Education** section, even though it's a full section with its own heading between Projects and Contact — users can't jump to it directly. |
| 9 | [Header.tsx:120-131](src/components/Header.tsx#L120-L131) | Mobile menu trigger button always shows the `Menu` (hamburger) icon regardless of `isMenuOpen` state — it never visually swaps to indicate "open," relying solely on the overlay covering it. No `Escape`-key handling or focus trap on the full-screen mobile overlay either. |
| 10 | [Skills.tsx:146-160](src/components/Skills.tsx#L146-L160), [About.tsx:122-128](src/components/About.tsx#L122-L128) | "Core Competencies" tags and "Expertise" bullets are hardcoded inline JSX arrays, breaking the otherwise-clean pattern of sourcing all content from `resume.ts`. Updating skills means editing multiple places. |
| 11 | [Projects.tsx:108](src/components/Projects.tsx#L108) | `border-t border-gray-700` divider is not conditional on `darkMode` (every other border/color in the file is) — renders as a dark border even in light mode. |
| 12 | [Hero.tsx:124-128](src/components/Hero.tsx#L124-L128) | Profile `<img>` has no explicit `width`/`height` attributes, risking layout shift (CLS) on load. |
| 13 | SEO | `index.html` has a title and meta description but no Open Graph tags, Twitter card tags, canonical URL, or JSON-LD Person schema — all relevant for a portfolio site meant to be shared as a link. |
| 14 | [SECURITY.md](SECURITY.md) | Entirely unmodified GitHub template boilerplate ("Use this section to tell people...", fake version table) — not a real policy; misleading if someone tries to responsibly report an issue. |
| 15 | Contact form | Only native HTML `required`/`type="email"` validation — no spam protection (honeypot/rate-limit) on a publicly exposed form endpoint. |
| 16 | framer-motion | Used only for simple fade/slide-in transitions repeated identically 6+ times — a fairly heavy dependency for that use case; CSS transitions + `IntersectionObserver` would shrink the bundle. |

### Low / Nitpick
| # | File:Line | Issue |
|---|---|---|
| 17 | [index.html:14](index.html#L14) | `<div className="PraxMehta" id="root">` — uses JSX's `className` in raw HTML instead of `class`. No-op attribute, harmless but sloppy (leftover from copy-paste). |
| 18 | [index.html:5](index.html#L5) | Favicon declared as `type="image/svg+xml"` but the actual file (`public/favicon.ico`) is a `.ico` — mismatched MIME type. |
| 19 | [Contact.tsx:51,59](src/components/Contact.tsx#L51-L59) | `console.log` calls left in production EmailJS handlers; error path uses a plain `alert()`, inconsistent with the rest of the animated UI. |
| 20 | [index.css:56-59](src/index.css#L56-L59) | `.animate-gradient` class and its `@keyframes gradient` are defined but never referenced anywhere in the codebase — dead CSS. |
| 21 | All components | `import React from 'react'` is present in every file despite React 18 + the `react-jsx` transform not requiring it — harmless but a dead import repeated 9 times. |
| 22 | `App.tsx:15-23` | On mount, `darkMode` is set from OS preference then immediately overwritten by `localStorage` in the same effect — the first `setDarkMode` call is wasted, causing a redundant render (not a visible bug, minor inefficiency). |
| 23 | No `robots.txt`/`sitemap.xml` | Absent from `public/` — low impact for a single-page site but trivial to add. |

## 3. What's already good
- TypeScript strictness is solid: `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` all enabled, no `any` types found anywhere.
- Every `target="_blank"` link correctly pairs with `rel="noopener noreferrer"` — no reverse-tabnabbing risk.
- No `dangerouslySetInnerHTML` anywhere.
- No unused npm dependencies detected — everything in `package.json` is actually imported somewhere.
- Data/type layer (`resume.ts` + `types/index.ts`) is clean and makes adding a new job or project low-risk.

## 4. Recommended fix order
1. Fix or remove the broken `npm test` CI step and the `main`/`master` branch mismatch (critical — CI is currently non-functional).
2. Untrack `dist/` and `.idea/` from git (`git rm -r --cached dist .idea`), confirm `.gitignore` covers `dist/`.
3. Move EmailJS IDs to Vite env vars; rotate the key in the EmailJS dashboard and restrict allowed origins.
4. Pick one deploy mechanism (CI-driven recommended) and remove the other.
5. Address the Hero scroll-arrow positioning bug and the missing Education nav link — both are visible/functional.
6. Consolidate the duplicated content (Skills competencies, About expertise) back into `resume.ts`.
7. Everything else (dead CSS, redundant React imports, SEO tags, real SECURITY.md content) can be batched as a low-priority cleanup pass.

---

*This analysis was generated with AI assistance (Claude). Findings should be spot-checked before acting on them, particularly severity judgments and anything touching security or deployment.*

**Information classification: Internal — for repository owner use.**
