# Copilot / Agent Instructions

Read `AGENTS.md` before making changes.

Innovation Dealroom is a frontend-only static POC. Keep it dependency-light, investor-facing, explainable, and cautious. Do not introduce backend infrastructure unless explicitly requested.

Use the local context files in `knowledge_base/`, `target_proposal_research/`, and `Branding and frontend/` as source material, but translate them into product logic rather than dumping them into the UI.

Run the static checks before handoff:

```bash
cmd /c npm run build
node --check src/app.js
node --check scripts/serve.mjs
node --check scripts/check-static.mjs
```
