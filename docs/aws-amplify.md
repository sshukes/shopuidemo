# Deploying to AWS Amplify

These steps assume you have an AWS account with Amplify Console access and a GitHub repository containing this project.

## 1) Prerequisites
- Node.js 20+ in your build environment (Amplify’s default is fine; you can set it explicitly below).
- The repository pushed to GitHub with access for Amplify to read it.

## 2) Connect the app in Amplify Console
1. Go to **AWS Amplify Console → New app → Host web app**.
2. Choose **GitHub** as the source, authorize if prompted, and pick your repo/branch.
3. When prompted for build settings, either accept the detected Next.js defaults or paste the `amplify.yml` below to pin Node and commands.

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
    # (Amplify auto-detects Next.js and sets up SSR support.)
  environment:
    # Optional: pin Node runtime for build
    variables:
      NODE_VERSION: '20'
```

> If you prefer `npm install` over `npm ci`, update the preBuild command accordingly.

## 3) Environment variables (optional)
- Set `NEXT_PUBLIC_` variables here if you add API keys later.
- To reduce noise, you can set `NEXT_TELEMETRY_DISABLED=1`.

## 4) Verify the build spec
Amplify should detect the app as **Next.js** and enable SSR automatically. The key commands are:
- `npm ci` (install)
- `npm run build` (build)

No custom start command is needed; Amplify manages the runtime for Next.js.

## 5) Push and deploy
- Commit and push changes to the connected branch.
- Amplify will build and deploy on each push. Watch the build logs for **Next.js detected**.

## 6) Smoke test checklist
- Home page loads: `/`
- Library demos load: `/ui/shadcn`, `/ui/chakra`, `/ui/mui`
- Modals/dialogs open and close without console errors
- `npm run lint` passes locally (mirrors the CI step)

## 7) Troubleshooting
- **Build fails on dependencies:** ensure lockfile (`package-lock.json`) is committed; rerun with `npm ci` locally.
- **Node version mismatch:** set `NODE_VERSION: '20'` in the build env.
- **404s on deep links:** Amplify Next.js hosting handles these automatically; no extra redirects needed.

Once deployed, share the Amplify-provided URL for demos.
