# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page static website in **Spanish** for Victoria Montaña, a psychologist offering 100% remote therapy for adolescents and adults. Visual identity inspired by Puerto Varas, Chile.

## Architecture

```
index.html          ← markup only, Vite entry point
src/
  main.js           ← imports styles.scss (Vite entry)
  styles.scss       ← all CSS + Bulma imported from source
public/
  CNAME             ← custom domain (copied to dist/ by Vite)
  assets/           ← static assets (logo, images)
dist/               ← build output (gitignored), deployed to Pages
```

Bulma is compiled from SCSS source — no CDN. Google Fonts (Inter) still loaded via CDN (SRI not possible with Google Fonts — exempted inline).

## Commands

```bash
npm run dev       # local dev server with hot reload (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run validate  # html-validate on index.html
```

## Dev Workflow (local)

1. `npm run dev` for live editing with hot reload
2. Hooks auto-run after every file edit:
   - `.html` edits → `npm run validate`
   - `.scss` / `.js` edits → `npm run build`
3. Before pushing: confirm `npm run validate` and `npm run build` both pass

## CI (GitHub Actions `.github/workflows/ci.yml`) — `master` branch

1. **Build** — `npm ci` → `npm run validate` → `npm run build` → upload artifact
2. **Deploy** — deploy artifact to GitHub Pages (only on push to master)
3. **Lighthouse** — audit the built `dist/` (informational, non-blocking)

## Git Push Protocol

**Always show a summary of commits and changed files before pushing, and wait for user approval.** Do not push without confirmation.

## Research Before Changes

Before proposing any change that involves an external version, action tag, package, or API: research it first (WebSearch/WebFetch/docs), confirm it exists, then propose. Never guess version numbers or assume a "next version" exists.

## Color Palette

| Variable | Hex | Inspiration |
|---|---|---|
| `--primary` | `#B5918B` | Dusty rose (brand card) |
| `--primary-dark` | `#8C6B66` | Dark rose |
| `--accent` | `#EBDCCC` | Warm cream |
| `--bg-soft` | `#F5EDE6` | Soft cream page bg |
| `--text-dark` | `#3D2B27` | Dark brown |
| `--text-mid` | `#7A6460` | Medium brown |
| `--border-soft` | `#D9C8C0` | Soft border |

## Victoria's Voice

Preserve her tone and intent when editing copy:

- **Audience**: adolescentes y adultos
- **Sessions**: 100% remotas, flexibles, empáticas, enfocadas en lo que tú necesitas hoy
- **Philosophy**: "La terapia es un trabajo en equipo. Yo aporto mi experiencia clínica y tú eres el experto en tu propia vida."
- **Personal**: apasionada de la danza, actividades comunitarias y escolares
- **First contact**: pre-entrevista gratuita — llamada para conocerse y organizar sesiones

## Conventions

- All content in Spanish (English version may come later)
- All CSS in `src/styles.scss` — no inline styles in HTML
- Tracking scripts (GA4, Meta Pixel) as placeholders with `TODO` comments
- Cal.com for booking via iframe with `TODO` for real link
- Images in `public/assets/` — `<img>` tags with real src paths
- Sensitive config (domain, DNS, infra) stored in Claude Code memory, not here
