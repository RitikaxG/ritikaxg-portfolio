# Ritika Gupta Portfolio

One-page systems portfolio with separate project case-study pages.

## Structure

- `/` — one-page portfolio: hero, about, offers, featured systems, journals, resume/contact
- `/projects/claimflow-ai` — ClaimFlow AI case study
- `/projects/runstate` — RunState case study
- `/projects/spinup` — SpinUp case study
- `/sitemap.xml` — generated sitemap
- `/robots.txt` — generated robots file
- `/opengraph-image` — generated social preview image
- `/icon` — generated favicon

The design is intentionally dark, monochrome, and dashboard-like so the site feels like an engineering case-study portfolio instead of a generic personal landing page.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content-first project data
- Vercel-ready deployment

## Environment

Set this in production:

```txt
NEXT_PUBLIC_SITE_URL=https://your-final-domain
```

This powers canonical URLs, sitemap URLs, robots metadata, and social preview links.

## Development

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Resume PDF

The resume download is controlled by `content/resume.ts`.

Add the final PDF here:

```txt
public/resume/ritika-gupta-resume.pdf
```

Then set:

```ts
isAvailable: true
```

## Deployment

See `docs/deployment-checklist.md`.
