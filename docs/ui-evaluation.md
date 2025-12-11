# UI library evaluation

This project compares **shadcn/ui**, **Chakra UI**, and **MUI** in a Next.js (App Router) + Tailwind CSS setup.

## Commands to scaffold from scratch

```bash
# 1) Create the app with TypeScript and Tailwind
npx create-next-app@latest --typescript --tailwind --app shopuidemo

# 2) Move into the project
cd shopuidemo

# 3) Install UI-focused deps (run when network is available)
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion @mui/material @mui/icons-material @radix-ui/react-dialog class-variance-authority clsx tailwind-merge

# 4) Run the dev server
npm run dev
```

The repo already contains the wired pages and components; the install step above is only needed if you want the official package dependencies.

## Routes/pages

- `/` – Landing page with explanation and links
- `/ui/shadcn` – Tailwind-first shadcn/ui demo
- `/ui/chakra` – Chakra-inspired demo
- `/ui/mui` – MUI-inspired demo

## Demo content per library

Each page includes:

- Top nav/header + link to docs
- Primary + secondary buttons
- Three summary cards
- Data table
- Basic form (text + select + submit)
- Modal/dialog example

## Tailwind + Next.js notes

- App Router is used (`app/` directory).
- Tailwind CSS 4 is enabled via `@import "tailwindcss";` in `app/globals.css`.
- Styling is kept scoped to each page using utility classes.

## Comparison

| Library      | Ease of setup | Out-of-the-box look | Licensing/notes |
|--------------|---------------|---------------------|-----------------|
| shadcn/ui    | ★★★☆ – Tailwind-native; you copy/paste components or use the CLI. Works naturally with App Router. | Minimal, modern defaults designed to be themed; looks clean with Tailwind tokens. | MIT; you own the design system. |
| Chakra UI    | ★★★☆ – Install provider + theme; prop-driven styling is fast. | Soft, friendly defaults with teal accents; components feel approachable. | MIT; good for commercial products. |
| MUI          | ★★★★ – Mature ecosystem; large set of components. | Material Design defaults with strong elevation and typography. | MIT; enterprise-grade ecosystem and docs. |

## Recommendation

**Default choice:** **Chakra UI** for the demo

- Balanced learning curve with ready-to-ship defaults and strong accessibility.
- Works well with Tailwind utility overrides when needed.
- Clear theming story and component coverage for dashboards.

## Verification checklist

- [ ] `npm install` succeeds and adds UI dependencies (when network is available).
- [ ] `npm run dev` starts without build errors.
- [ ] `/` loads and links to `/ui/shadcn`, `/ui/chakra`, and `/ui/mui`.
- [ ] Each library page shows cards, table, form, and a working dialog open/close.
