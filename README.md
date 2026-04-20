# neo457.ch — Landingpage

Portfolio-Showcase fuer ein privates AI-System auf einem Hetzner VPS.
Zeigt Architektur, Pipeline und Use Cases hinter dem Setup.

**Live:** [https://neo457.ch](https://neo457.ch)

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **framer-motion** fuer Section-Animationen
- **Geist Font** (via `next/font`)

## Sections

- **Hero** — Einstieg + Claim
- **Story** — Kontext und Motivation
- **Pipeline** — Datenfluss zwischen den Diensten
- **Demo** — Interaktive Vorschau
- **KI-News** — Vorschau auf den kinews-Feed
- **Why** — Warum dieses Setup
- **System** — Komponenten-Uebersicht
- **Use Cases** — Konkrete Anwendungsfaelle

## Setup

```bash
npm install
npm run dev
```

App laeuft auf [http://localhost:3000](http://localhost:3000).

## Verwandte Projekte

- `kinews`
- `plan-app`