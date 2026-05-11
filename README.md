# Yanamala Sree Hari — Portfolio

A modern, responsive portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Production-ready and zero-config deploy to Vercel.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom dark theme
- **Fonts:** Inter + JetBrains Mono (via `next/font`)
- **SEO:** Built-in `metadata` API + Open Graph / Twitter cards

## Project structure

```
.
├── app/
│   ├── globals.css       # Tailwind layers + base styles
│   ├── layout.tsx        # Root layout, fonts, site-wide metadata/SEO
│   └── page.tsx          # Home page (composes section components)
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Animated hero
│   ├── About.tsx         # Bio + highlight cards
│   ├── Experience.tsx    # Work experience timeline
│   ├── Projects.tsx      # Project cards
│   ├── Skills.tsx        # Grouped skill chips
│   ├── Certifications.tsx# Training / internships (Pantech, Board Infinity)
│   ├── Education.tsx     # Academic background cards
│   ├── Contact.tsx       # Email · LinkedIn · GitHub · Phone
│   └── Footer.tsx
├── lib/
│   └── profile.ts        # ← Single source of truth for all content
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## Editing content

All site content — name, headline, bio, skill groups, experience, projects, training, education, and contact details — lives in **[`lib/profile.ts`](./lib/profile.ts)**. Edit that one file to update the entire site; no component changes needed.

## Running locally

Requires Node.js 18.18+ or 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run Next.js' ESLint config (if you add one)
```

## Deploying to Vercel

This project is plug-and-play with Vercel.

### Option 1 — Deploy via the Vercel dashboard (recommended)

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Vercel auto-detects Next.js — leave all settings at their defaults and click **Deploy**.
4. Your site will be live at `https://<repo-name>.vercel.app` in about a minute.

### Option 2 — Deploy via the Vercel CLI

```bash
npm i -g vercel
vercel             # follow the prompts to link/create a project
vercel --prod      # deploy to production
```

### Custom domain

In the Vercel project dashboard go to **Settings → Domains** and add your domain. Vercel will guide you through the DNS records.

After setting a custom domain, update the `siteUrl` constant inside [`app/layout.tsx`](./app/layout.tsx) so Open Graph / canonical URLs reflect the new domain.

## Customization tips

- **Color theme:** edit the `colors` block in [`tailwind.config.ts`](./tailwind.config.ts).
- **Section order:** rearrange the components inside [`app/page.tsx`](./app/page.tsx).
- **Add or edit a project / job:** update the `projects` or `experience` array in `lib/profile.ts` — the cards regenerate automatically.
- **Favicon / OG image:** drop `favicon.ico` and `opengraph-image.png` into the `app/` directory — Next.js will wire them up automatically.

## License

Personal portfolio code — feel free to use as a template for your own portfolio.
