# Agent Development Guide

This file is the primary handoff document for coding agents working on Innovation Dealroom.

## Project Summary

Innovation Dealroom is a frontend-only static POC for an investor-facing startup discovery and first-level dealroom experience. It helps an investor understand which fictional innovation opportunities deserve attention and why.

The app is not a backend product, crowdfunding platform, investment recommendation engine, valuation engine, or portfolio-management tool. Keep all product language cautious and explainable.

## Core User Jobs

- Adjust basic investor preferences.
- Browse fictional startup opportunities.
- Filter by sector, stage, ticket size, geography, TRL, risk appetite, regulatory exposure, transition exposure, and evidence available.
- Open a structured first-level dealroom.
- Compare a few startups side by side.
- Generate a concise mock investor brief.

## Repository Map

- `index.html`: static app entrypoint.
- `src/app.js`: embedded mock data, scoring/screening logic, rendering, and interactions.
- `src/styles.css`: full visual system and responsive UI.
- `assets/fonts/`: local OpenEconomics font assets used by the app.
- `assets/logos/`: local OpenEconomics logo assets used by the app.
- `scripts/serve.mjs`: dependency-free local static server.
- `scripts/check-static.mjs`: lightweight static project check.
- `knowledge_base/`: venture decision-making, diligence, valuation, deal structuring, and exit context.
- `target_proposal_research/`: META Group / Horizon Results Booster context.
- `Branding and frontend/`: source brand assets and design guidance.

## Commands

Use `cmd /c npm ...` on Windows PowerShell if `npm.ps1` is blocked by execution policy.

```bash
npm start
npm run build
node --check src/app.js
node --check scripts/serve.mjs
node --check scripts/check-static.mjs
```

Local app URL:

```text
http://localhost:4173
```

The app can also be opened directly through `index.html`.

## Technical Constraints

- Keep the product frontend-only and static.
- Do not introduce a backend, database, API dependency, authentication, or network runtime requirement.
- Keep mock startup data embedded locally unless the user explicitly asks for a different architecture.
- Prefer dependency-free code unless a clear maintainability gain justifies adding tooling.
- If adding a package, update `package.json`, document the reason, and verify install/run instructions.
- Keep files ASCII unless an existing file or brand asset requires otherwise.

## Product Language Rules

Use cautious investor-facing language:

- `estimated fit`
- `screening view`
- `first-level risk signal`
- `evidence available`
- `requires diligence`
- `based on current evidence`
- `suggested next step`
- `not an investment recommendation`

Avoid:

- `recommended investment`
- `predicted return`
- `true risk`
- `guaranteed fit`
- `safe investment`
- `best deal`
- `undervalued`
- `invest now`
- `this company will succeed`

Regulatory and transition exposure must not be treated as automatically negative. Represent them as possible demand tailwinds, operational burdens, market-access barriers, or defensibility signals depending on context.

## UX And Visual Direction

The interface should feel like a serious investor command room, not a startup directory or marketing landing page.

- Use OpenEconomics brand assets.
- Foundation: near-black / off-white surfaces, not pure black / white in CSS surfaces.
- Accent colors: Bluette `#4400B3` and Lime `#B9FF69`.
- Use Lime sparingly for focus, confirmation, or high-value signals.
- Use Atkinson Hyperlegible Next for dense UI.
- Use Hedvig Letters Serif only for sparse editorial emphasis.
- Keep cards purposeful. Avoid nested cards.
- Maintain clear scanability, strong hierarchy, and visible focus states.
- Do not use gradient text or colored side-stripe card accents.
- Keep mobile functional; reflow rather than hiding critical decision data.

## Mock Data Requirements

Each startup should remain credible enough to support browsing, filtering, comparison, and a structured dealroom. When editing or adding startups, include:

- Sector, stage, geography, TRL, ticket / ask.
- Use of funds and business model.
- Evidence available.
- IP status.
- Regulatory exposure and interpretation.
- Transition exposure and interpretation.
- Risk signals.
- Investment rationale.
- Missing diligence.
- Suggested next step.
- Basic metrics for revenue, runway, gross margin, and traction.

## Explainability Model

Do not expose a score without explaining it. The current UI separates:

- Investment fit.
- Evidence strength.
- Risk severity.
- Data confidence.
- Diligence completeness.

If scoring logic changes, keep the explanation trail visible and deterministic. This POC should make uncertainty easier to inspect, not hide it behind a black-box score.

## QA Checklist

Run before handing work back:

```bash
cmd /c npm run build
node --check src/app.js
node --check scripts/serve.mjs
node --check scripts/check-static.mjs
```

Also scan product surfaces for forbidden language and obvious design anti-patterns. Do not include this guide in the language scan because it intentionally lists phrases to avoid.

```powershell
Select-String -Path src\app.js,README.md,index.html -Pattern "recommended investment|predicted return|true risk|guaranteed fit|safe investment|invest now|best deal|undervalued|will succeed" -CaseSensitive:$false
Select-String -Path src\styles.css -Pattern "border-left:\s*[2-9]|border-right:\s*[2-9]|background-clip:\s*text|-webkit-background-clip:\s*text|#000|#fff" -CaseSensitive:$false
```

If a local server is needed:

```powershell
$p = Start-Process -FilePath node -ArgumentList 'scripts/serve.mjs' -WorkingDirectory (Get-Location) -WindowStyle Hidden -PassThru
Invoke-WebRequest -UseBasicParsing http://localhost:4173 | Select-Object -ExpandProperty StatusCode
```

## Git Caveat

This workspace is inside OneDrive. During initial setup, `git init` failed because OneDrive/ACL behavior blocked Git lock/config files. Failed Git artifacts were removed.

If Git still fails here, move or copy the project to a non-OneDrive path and run:

```bash
git init
git add -A
git commit -m "Build Innovation Dealroom POC"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## Editing Guidance

- Keep edits scoped.
- Preserve the local context folders; they are part of the source material for future agents.
- Do not mechanically copy context-file content into the UI.
- Translate investment concepts into refined, investor-facing product logic.
- Prefer `apply_patch` for manual edits.
- Do not remove brand assets or knowledge-base files unless the user explicitly asks.
