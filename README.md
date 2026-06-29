# Content Workflow

A dashboard for tracking content from idea to published across channels
(blog, YouTube, Instagram, TikTok, email, newsletter).

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — the pipeline board (Ideas → Drafting → Review → Scheduled → Published).
- `src/lib/content.ts` — domain types (`ContentItem`, `Stage`, `Channel`) and seed data.
- `src/app/api/content/route.ts` — JSON API (`GET` to list, `POST` to add an item).

## Next steps

- Replace the in-memory store / seed data with a real datastore (DB, Airtable, or CMS).
- Add drag-and-drop to move items between stages.
- Add auth and per-user views.
