# neo457.ch

> Portfolio-Showcase eines privaten AI-Systems auf eigenem Hetzner VPS.

**Live:** [neo457.ch](https://neo457.ch)

![Next.js](https://img.shields.io/badge/Next.js_15-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white)

---

## Was ist das?

Statische Showcase-Seite für ein selbst gehostetes AI-System. Zeigt Architektur, Daten-Pipeline und konkrete Use Cases — gebaut auf einem einzelnen VPS ohne SaaS-Abhängigkeiten.

## Stack

| Layer | Technologie |
|-------|------------|
| Framework | Next.js 15 (App Router, static export) |
| Sprache | TypeScript |
| Styling | Tailwind CSS v4, CSS custom properties |
| Animation | framer-motion |
| Font | Geist (self-hosted via `next/font`) |
| Deployment | PM2 + nginx auf Hetzner CX32 |

## Sections

`Hero` → `Story` → `Pipeline` → `Demo` → `KI-News` → `Why` → `System Setup` → `Use Cases`

## Lokales Setup

```bash
git clone https://github.com/bref457/neo457-landing.git
cd neo457-landing
npm install
npm run dev
# → http://localhost:3000
```

## Verwandte Projekte

- [kinews](https://github.com/bref457/kinews) — KI-News-Aggregator (kinews.neo457.ch)
- [plan-app](https://github.com/bref457/plan-app) — Reminder-App mit Telegram-Daemon (plan.neo457.ch)
