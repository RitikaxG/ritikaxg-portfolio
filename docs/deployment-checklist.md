# Deployment Checklist

Use this checklist before deploying or sharing the portfolio link.

## Required environment variable

Set this in Vercel before production deployment:

```txt
NEXT_PUBLIC_SITE_URL=https://your-final-domain
```

This value is used for canonical URLs, sitemap URLs, robots, and social preview metadata.

## Local validation

```bash
npm install
npm run lint
npm run build
npm run dev
```

Check these routes:

```txt
/
/projects/claimflow-ai
/projects/runstate
/projects/spinup
/sitemap.xml
/robots.txt
/opengraph-image
/icon
```

## Resume PDF

The final resume PDF is not committed yet. Add it at:

```txt
public/resume/ritika-gupta-resume.pdf
```

Then update:

```txt
content/resume.ts
```

Set:

```ts
isAvailable: true
```

## Vercel deployment

1. Import `RitikaxG/ritikaxg-portfolio` into Vercel.
2. Framework should be detected as Next.js.
3. Build command should stay `npm run build`.
4. Set `NEXT_PUBLIC_SITE_URL` to the final production URL.
5. Deploy.
6. After deploy, re-check the homepage, all case-study routes, image loading, social preview, sitemap, and robots file.

## Post-deploy checks

- Verify case-study screenshots load from GitHub raw URLs.
- Verify external proof links open correctly.
- Verify Notion engineering journals open correctly.
- Verify social preview image renders.
- Verify the resume button appears only after the PDF is uploaded and `isAvailable` is true.
