# Innovation Dealroom

Innovation Dealroom is a frontend-only proof of concept for an investor-facing startup discovery room. It helps answer:

> Which innovation opportunities are worth my attention, and why?

The app is static and uses embedded fictional startup data. It is not a backend product, crowdfunding platform, investment recommendation engine, valuation engine, or portfolio-management tool.

## What The POC Demonstrates

- Adjustable investor preferences for sectors, stages, ticket size, geography, maturity / TRL, evidence depth, risk appetite, regulatory exposure, and transition exposure.
- A curated opportunity queue of fictional startups across climate tech, health tech, AI/data infrastructure, energy, circular economy, agritech, mobility, deep tech materials, water tech, cybersecurity, medtech, and industrial automation.
- Explainable estimated fit signals that show why an opportunity appears relevant and what still requires diligence.
- Structured first-level dealroom tabs for screening rationale, evidence, risk exposure, missing diligence, and a mock investor brief.
- Side-by-side comparison for up to three startups.
- Cautious investor-facing language throughout: screening view, estimated fit, first-level risk signal, evidence available, requires diligence, and suggested next step.

## Design And Product Choices

The visual system uses the OpenEconomics brand materials in the repository:

- Primary foundation: black and white for structure and legibility.
- Accent colors: Bluette `#4400B3` and Lime `#B9FF69`, used sparingly for status, focus, and high-value signals.
- Typography: bundled OpenEconomics font assets, with Atkinson Hyperlegible Next for dense UI and Hedvig Letters Serif for the main product headline.

Product logic is informed by the local venture-investment context files:

- Mandate fit and sourcing logic from `knowledge_base/01-The-Investor-Mandate-and-Sourcing.md`.
- Evidence, diligence, and fixable-vs-terminal risk framing from `knowledge_base/02-Due-Diligence-and-Risk-Assessment.md`.
- Valuation uncertainty and scenario caution from `knowledge_base/03-Valuation-and-Quantifying-Uncertainty.md`.
- Deal structuring watchpoints from `knowledge_base/04-Deal-Structuring-and-Risk-Mitigation.md`.
- Reporting and exit-readiness concepts from `knowledge_base/05-Portfolio-Management-and-Exit-Mechanics.md`.
- Research-to-market and TRL framing from `target_proposal_research/`.

Regulatory and transition exposure are not treated as automatic negatives. The UI distinguishes demand tailwinds, operational burdens, market access barriers, and defensibility effects.

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

The repository is ready for GitHub Pages or any static host. The root files are the deployable site:

```text
index.html
src/
assets/
```

For GitHub Pages:

1. Push this repository to GitHub.
2. In the repository settings, enable Pages.
3. Set the source to the `main` branch and `/root`.
4. Save and wait for the Pages URL to be published.

## Mocked And Out Of Scope

- All startup data is fictional and embedded in `src/app.js`.
- Fit scores are deterministic mock screening logic, not financial advice or investment recommendations.
- Generated investor briefs are static client-side text assembled from the mock data.
- No authentication, backend persistence, document upload, real diligence workflow, real financial model, valuation engine, or investor suitability logic is included.

## Repository Commands

```bash
npm start
npm run build
```

`npm run build` performs a lightweight static file presence check. There is no bundling step because the POC is intentionally dependency-free.

## Agent Development

Future coding agents should start with `AGENTS.md`. A lowercase `agent.md` pointer and `.github/copilot-instructions.md` are also included for tool compatibility.

## Push Commands

GitHub CLI was not available in the current environment.

`git init` was also attempted locally, but this OneDrive-managed folder blocked Git from creating its normal lock/config files. The failed Git metadata was removed so the project is clean. If the same issue appears again, move or copy the folder to a non-OneDrive path, then run:

```bash
git init
git add -A
git commit -m "Build Innovation Dealroom POC"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```
