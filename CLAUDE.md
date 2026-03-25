# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page static website in **Spanish** for Victoria Montaña, a psychologist offering 100% remote therapy for adolescents and adults. Visual identity inspired by Puerto Varas, Chile.

## Architecture

- Single `index.html` — no build step, no npm
- Bulma CSS (0.9.4) via CDN, overrides in `<style>` in `<head>`
- Font: Inter via Google Fonts CDN
- Hosted on GitHub Pages (public repo, custom domain)
- Sensitive config (domain, DNS, infra) is stored in Claude Code memory, not here

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

- Solo project — no PRs, no code review. Push directly to `master`.
- Commit and push when changes are ready.

## Conventions

- All content in Spanish (English version may come later)
- All CSS in `<style>` in `<head>` — no external stylesheets
- Tracking scripts (GA4, Meta Pixel) as placeholders with `TODO` comments
- Cal.com for booking via iframe with `TODO` for real link
- Images are placeholder `<div>` blocks until real photos arrive
