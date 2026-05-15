# Agent Development Guide

This file is the primary handoff document for coding agents working on Foundry.

## Project Summary

Foundry is a frontend-only static POC for a startup-facing submission room. It helps founders, startup operators, and commercialization teams structure company information before outreach to investors, pilot partners, accelerators, or public-program operators.

The app is not a backend product, CRM, crowdfunding platform, investment recommendation engine, valuation engine, or live diligence platform. Keep product language cautious and preparation-oriented.

## Core User Jobs

- Create or edit a structured startup profile.
- Clarify customer, problem, business model, ask, and use of funds.
- Stage evidence, traction, IP, regulatory context, and transition context in one place.
- Surface what is still missing before outreach.
- Read a deterministic readiness view based on the current profile.
- Generate a concise startup submission memo.

## Repository Map

- `index.html`: static app entrypoint.
- `src/app.js`: embedded fictional profiles, local editing logic, readiness scoring, rendering, and interactions.
- `src/styles.css`: full visual system and responsive UI.
- `assets/fonts/`: local OpenEconomics font assets used by the app.
- `assets/logos/`: local OpenEconomics logo assets used by the app.
- `scripts/serve.mjs`: dependency-free local static server.
- `scripts/check-static.mjs`: lightweight static project check.
- `knowledge_base/`: venture diligence, valuation, structuring, and exit context used as a preparation reference layer.
- `target_proposal_research/`: META Group / Horizon Results Booster context informing commercialization-oriented packaging.
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
- Do not introduce a backend, database, authentication layer, or network runtime requirement.
- Keep fictional startup profiles embedded locally unless the user explicitly asks for a different architecture.
- Local browser storage is acceptable for draft persistence because it keeps the POC frontend-only.
- Prefer dependency-free code unless a clear maintainability gain justifies adding tooling.
- If adding a package, update `package.json`, document the reason, and verify install/run instructions.
- Keep files ASCII unless an existing file or brand asset requires otherwise.

## Product Language Rules

Use cautious startup-facing language:

- `submission readiness`
- `based on the current profile`
- `evidence available`
- `requires clarification`
- `open diligence item`
- `suggested next preparation step`
- `not financing advice`

Avoid:

- `recommended investment`
- `predicted return`
- `guaranteed fit`
- `safe investment`
- `best deal`
- `invest now`
- `this company will succeed`

Regulatory and transition exposure must not be treated as automatically negative. Represent them as possible demand tailwinds, operational burdens, market-access barriers, or defensibility signals depending on context.

## UX And Visual Direction

The interface should feel like a serious founder preparation room, not a startup marketplace or marketing landing page.

- Use OpenEconomics brand assets.
- Foundation: near-black / off-white surfaces, not pure black / white in CSS surfaces.
- Accent colors: Bluette `#4400B3` and Lime `#B9FF69`.
- Use Lime sparingly for focus, confirmation, or high-value signals.
- Use Atkinson Hyperlegible Next for dense UI.
- Use Hedvig Letters Serif only for sparse editorial emphasis.
- Keep panels purposeful. Avoid card spam and nested-card clutter.
- Maintain clear scanability, strong hierarchy, and visible focus states.
- Do not use gradient text or colored side-stripe card accents.
- Keep mobile functional; reflow rather than hiding critical preparation data.

## Mock Data Requirements

Each fictional startup should remain credible enough to support editing, preparation, and memo generation. When editing or adding companies, include:

- Sector, stage, geography, and TRL.
- One-line company description.
- Problem and customer definition.
- Ask and use of funds.
- Business model.
- Evidence available.
- IP status.
- Regulatory exposure and interpretation.
- Transition exposure and interpretation.
- Risks.
- Missing diligence or preparation items.
- Suggested next step.
- Basic metrics for revenue, runway, gross margin, and traction.

## Explainability Model

Do not expose a readiness score without explaining it. The UI should keep the logic visible and deterministic.

The current fork separates:

- Profile completeness.
- Evidence depth.
- Narrative clarity.
- Diligence coverage.
- Exposure framing.

If readiness logic changes, keep the explanation trail visible. This POC should make uncertainty easier to inspect, not hide it behind a black-box score.

## QA Checklist

Run before handing work back:

```bash
cmd /c npm run build
node --check src/app.js
node --check scripts/serve.mjs
node --check scripts/check-static.mjs
```

Also scan product surfaces for startup-facing language consistency and obvious design anti-patterns. Do not include this guide in the language scan because it intentionally lists phrases to avoid.

```powershell
Select-String -Path src\app.js,README.md,index.html -Pattern "recommended investment|predicted return|guaranteed fit|safe investment|invest now|best deal|will succeed" -CaseSensitive:$false
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
git commit -m "Build Foundry POC"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## Editing Guidance

- Keep edits scoped.
- Preserve the local context folders; they are part of the source material for future agents.
- Do not mechanically copy context-file content into the UI.
- Translate diligence, funding, and commercialization concepts into refined startup-facing product logic.
- Prefer `apply_patch` for manual edits.
- Do not remove brand assets or knowledge-base files unless the user explicitly asks.

## Commit Message Style

- Match the existing repo history rather than using bare, dry summaries.
- Prefer a scoped subject plus a short explanatory tail when the change benefits from context, for example: `feat(foundry): shift platform to startup-side readiness workspace`.
- Keep the first words informative and specific about the user-facing or technical effect.
- Use the longer form for meaningful feature work, UX changes, and docs that explain behavior; reserve terse subjects for tiny mechanical fixes.
