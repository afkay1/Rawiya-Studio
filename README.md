# Rawiya Studio

Bilingual (English / Arabic, full RTL) website for a fictional Riyadh architecture and interior studio. A MYFRIX concept project.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Lenis

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000. Use the language button in the header to switch EN / عربي.

## Check for dead links
```
npm run check:links
```
Scans every internal link and project/blog slug and fails if any points to a missing page.

## Pages
`/` · `/studio` · `/projects` · `/projects/[slug]` · `/services` · `/process` · `/blog` · `/blog/[slug]` · `/faq` · `/contact`

## Content
All copy (English + Arabic), projects, posts and FAQs live in `src/lib/content.ts`. Images are in `public/images`.

## Forms
`/api/contact` and `/api/newsletter` validate input and send via Resend when configured. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Without them the forms still succeed (demo mode).

## Deploy
Push to GitHub, import the repo on Vercel, add the env vars, deploy.
