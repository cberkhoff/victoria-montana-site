# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Victoria Montaña** is a single-page static website for a psychologist (Victoria) offering 100% remote therapy sessions for adolescents and adults. The internal project name is "SitioBoa". The site is in **Spanish** — all copy, labels, CTAs, and placeholders must be in Spanish.

Victoria is originally from Puerto Varas, Chile and now lives in Seattle. The visual identity draws from Puerto Varas: Lake Llanquihue blues, Osorno volcano greens, and warm colonial creams.

## Architecture

- **Single file**: `index.html` — no build step, no bundler, no npm
- **CSS framework**: Bulma via CDN (0.9.4), with custom overrides in a `<style>` tag in `<head>`
- **Font**: Inter via Google Fonts CDN
- **Deployment target**: GitHub Pages (static files only, no server-side dependencies)

## Color Palette (CSS Custom Properties)

| Variable | Hex | Inspiration |
|---|---|---|
| `--primary` | `#2E7D8C` | Lago Llanquihue teal-blue |
| `--primary-dark` | `#1D5F6E` | Deep lake shadow |
| `--accent` | `#4A7C59` | Osorno volcano forest green |
| `--bg-soft` | `#F4F0E8` | Warm cream (German colonial houses) |
| `--text-dark` | `#1C2B2E` | Dark charcoal |
| `--text-mid` | `#4A6068` | Muted slate |
| `--border-soft` | `#D6E4E8` | Soft border |

## Key Content (Victoria's Own Words)

These are the practitioner's actual statements — preserve their voice and intent when editing copy:

- **Audience**: adolescentes y adultos
- **Sessions**: 100% remotas, flexibles, empáticas, enfocadas en lo que tú necesitas hoy
- **Philosophy**: "La terapia es un trabajo en equipo. Yo aporto mi experiencia clínica y tú eres el experto en tu propia vida."
- **Personal**: apasionada de la danza, actividades comunitarias y escolares
- **First contact**: pre-entrevista gratuita — primera llamada para conocerse y organizar sesiones

## Development


## Conventions

- All content in Spanish (a future English version may be added later, but not yet)
- All CSS lives in the `<style>` tag inside `<head>` — no external stylesheet files
- Placeholder tracking scripts (GA4, Meta Pixel) go in `<head>` with `TODO` comments marking where to insert real IDs
- Cal.com is used for booking — embed via iframe with a `TODO` comment for the real Cal.com username/event slug
- Images are placeholders (colored `<div>` blocks) until real photos are provided
