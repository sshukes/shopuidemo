# UI library comparison (Next.js + Tailwind)

This Next.js (App Router) app compares three popular React UI options—**shadcn/ui**, **Chakra UI**, and **MUI**—inside a Tailwind CSS project. Each library has its own demo route with a mini-dashboard layout.

## Project structure

```
app/
  page.tsx           # Landing page
  layout.tsx         # Shared layout + top nav
  ui/
    shadcn/page.tsx  # shadcn/ui demo
    chakra/page.tsx  # Chakra-inspired demo
    mui/page.tsx     # MUI-inspired demo
components/
  top-nav.tsx        # Global navigation
public/
  ...                # Static assets
```

## Commands

```bash
# install dependencies
npm install

# start dev server
npm run dev

# lint
npm run lint
```

If you are online and want the official UI packages, install them with:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion @mui/material @mui/icons-material @radix-ui/react-dialog class-variance-authority clsx tailwind-merge
```

## Routes

- `/` – Overview with links
- `/ui/shadcn` – Tailwind-first shadcn/ui-styled demo
- `/ui/chakra` – Chakra-inspired demo
- `/ui/mui` – MUI-inspired demo

Each page includes a header, primary/secondary buttons, cards, a table, a simple form, and a dialog example.

## Comparison + recommendation

See [`docs/ui-evaluation.md`](docs/ui-evaluation.md) for installation steps, comparison notes, and the recommended default library (Chakra UI for this demo).

## AWS Amplify

Builds with the standard commands (`npm install` → `npm run build` → `npm start`). No additional configuration is required for Amplify defaults.
