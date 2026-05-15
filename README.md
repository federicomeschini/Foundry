# Foundry

Foundry is a frontend-only proof of concept for a startup-facing submission room. It helps answer:

> Is our company information structured well enough for investors, partners, or commercialization programs to work with?

This fork keeps the original static, no-backend constraint, but flips the product objective. The platform is now a founder-side workspace for assembling a cleaner company record, staging evidence, surfacing missing diligence, and generating a concise submission memo.

## What The POC Demonstrates

- Editable fictional startup profiles stored locally in the browser.
- A founder-side intake flow for company narrative, customer definition, funding ask, use of funds, IP, regulatory framing, transition framing, traction, risks, and missing items.
- Multiple submission lenses:
  - Raise preparation
  - Pilot partner outreach
  - Research commercialization
  - Grant and impact packaging
- Explainable readiness logic showing:
  - profile completeness
  - evidence depth
  - narrative clarity
  - diligence coverage
  - exposure framing
- A generated submission memo based on the current profile and selected lens.

## Product Logic

The app uses local research already present in the repository, but translates it into startup-side preparation:

- `knowledge_base/02-Due-Diligence-and-Risk-Assessment.md` informs what information tends to get challenged, verified, or requested.
- `knowledge_base/04-Deal-Structuring-and-Risk-Mitigation.md` informs which ownership, IP, and financing details founders should make easier to inspect.
- `target_proposal_research/02-Program-Analysis-Horizon-Results-Booster.md` informs the commercialization and KER-oriented packaging lens.
- Regulatory and transition exposure are treated as context to interpret, not automatic negatives.

## Design Direction

The visual system still uses OpenEconomics brand assets and the same institutional visual language:

- near-black / off-white editorial surfaces
- Bluette as the brand anchor
- Lime as a sparse signal accent
- Atkinson Hyperlegible Next for interface density
- Hedvig Letters Serif for key display moments

The product should feel like a serious founder preparation room, not a startup marketplace or marketing page.

## Local Run

No backend and no dependency install are required.

```bash
npm start
```

Then open:

```text
http://localhost:4173
```

You can also open `index.html` directly in a browser.

## Static Deployment

The repository is still ready for GitHub Pages or any static host. The deployable site remains:

```text
index.html
src/
assets/
```

## Current Boundaries

- All company data is fictional and embedded in `src/app.js`.
- Edits are local-only and persisted through browser storage; there is no backend persistence.
- Readiness outputs are deterministic heuristics based on the visible profile, not financing advice and not automated diligence.
- No authentication, document upload, real CRM, cap-table engine, valuation engine, or investor matching logic is included.

## Repository Commands

```bash
npm start
npm run build
node --check src/app.js
node --check scripts/serve.mjs
node --check scripts/check-static.mjs
```

`npm run build` performs a lightweight static file presence check. There is no bundling step because the POC is intentionally dependency-free.

## Agent Development

Future coding agents should start with `AGENTS.md`. A lowercase `agent.md` pointer and `.github/copilot-instructions.md` are also included for tool compatibility.
