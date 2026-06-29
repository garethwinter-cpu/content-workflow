# Mindvalley Organic Social — Workflow Engine

A single-page map of end-to-end organic content operations: **eight
interconnected phases forming a continuous loop**, each tied to an operating
layer, with its tasks, tools, and the handoff into the next phase.

Rebuilt from [social-workflow-dun.vercel.app](https://social-workflow-dun.vercel.app/)
in the **Wellness** design system (purple brand, cool-grey neutrals, Google Sans,
pill buttons, rounded surfaces, three shadows).

Built with [Next.js](https://nextjs.org) (App Router) + TypeScript.

## Workflows

This repo hosts multiple content-operations workflows:

| Route | Workflow | What it is |
|-------|----------|------------|
| `/` | Organic Social — Workflow Engine | The eight-phase organic content loop. |
| `/podcast` | **Scaling Wisdom — Podcast Workflow Engine** | Vishen's show, end-to-end: guest sourcing → outreach → pre-production & angle testing → shoot → edit hygiene + transcript → AI-assisted three-edit post (trailer / main / social) → review & delivery → launch & analytics. Includes live trackers (guest pipeline, the three edits, distribution sign-off, metrics) that bind to Airtable in a later pass.

### Podcast workflow structure

- `src/app/podcast/page.tsx` — the Scaling Wisdom page (strategy spine, 8-phase loop, live trackers).
- `src/lib/podcast.ts` — show meta, operator laws, guest scorecard, show architecture, the 8 phases, and the tracker seed data.

Strategy is reverse-engineered from the Diary of a CEO team, per the Scaling Wisdom Blueprint.

## The eight phases

| # | Phase | Layer |
|---|-------|-------|
| 01 | Audience & competitive intelligence | Intelligence |
| 02 | Content strategy framework | Architecture |
| 03 | Ideation & briefing | Creative |
| 04 | Content production | Creation |
| 05 | Compliance & legal | Quality |
| 06 | Campaign & calendar planning | Distribution |
| 07 | Community management | Conversation |
| 08 | Reporting & insights loop | Learning |

Phase 08 feeds straight back into Phase 01 — a continuously improving content engine.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — the full single-page layout (hero, loop overview, phase detail, loop close).
- `src/lib/workflow.ts` — the eight phases (name, layer, description, tasks, tools, transition).
- `src/app/globals.css` — the Wellness design system as tokens + `mv-` component classes.

## Design notes

- **Type:** the system specifies **Google Sans** only. It isn't publicly served by
  Google Fonts, so the stack is `'Google Sans', 'Google Sans Text', 'Product Sans',
  sans-serif` — anyone with the font installed sees it; everyone else gets a neutral
  sans fallback.
