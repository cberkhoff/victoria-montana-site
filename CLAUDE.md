# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page static website in **Spanish** for Victoria Montaña, a psychologist offering 100% remote therapy for adolescents and adults. Visual identity inspired by Puerto Varas, Chile.

## Architecture

- `index.html` — entry point, markup only (no inline styles)
- `src/styles.scss` — all custom CSS + Bulma import
- `src/main.js` — Vite entry point (imports styles)
- `public/` — static assets copied as-is to `dist/` (CNAME, logo, images)
- Built with Vite, deployed via GitHub Actions to GitHub Pages (custom domain `victoriamontana.cl`)
- Sensitive config (domain, DNS, infra) is stored in Claude Code memory, not here

## Commands

```bash
npm run dev       # local dev server with hot reload
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run validate  # run html-validate on index.html
```

## Color Palette

| Variable | Hex | Inspiration |
|---|---|---|
| `--primary` | `#B5918B` | Dusty rose (brand card background) |
| `--primary-dark` | `#8C6B66` | Dark rose (shadows, hover) |
| `--accent` | `#EBDCCC` | Warm cream (text, logo) |
| `--bg-soft` | `#F5EDE6` | Soft cream (page background) |
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

## Workflow

- Solo project — push directly to `master`
- Before pushing: `npm run validate` must pass
- CI runs validate → build → deploy on every push to master
- Lighthouse audit runs in CI for informational scores (non-blocking)

## Conventions

- All content in Spanish (English version may come later)
- All CSS in `src/styles.scss` — no inline styles in HTML
- Google Fonts: Inter loaded via CDN (SRI exempted inline — not possible with Google Fonts)
- Tracking scripts (GA4, Meta Pixel) as placeholders with `TODO` comments
- Cal.com for booking via iframe with `TODO` for real link
- Images in `public/assets/` — placeholder `<img>` tags until real photos arrive
