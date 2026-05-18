# Foundry — Information Architecture Redesign

## Diagnosis

The current IA is organized by *content type* — all guidance in Overview, all data in Profile, proof in Evidence. Every tab ends up doing too many jobs: Profile has 9 sections, Overview has 8, Evidence repeats content from both. The fix is to organize by *user intent*: each tab answers one question and does one job.

---

## Tab Structure

### Tab 1 — Guide *(replaces Overview)*

**One question: "Where am I and what matters next?"**

Orientation layer only. Read-only. No data entry.

| Section | Content | Action |
|---|---|---|
| Lens summary | 1 compact card: what this path is for, best for, outcome | Collapse 4-card room-brief grid → 1 card |
| Field map | Filled vs missing for this lens — click any card to jump to field | Keep, make it the visual anchor |
| Preparation priority | 1 action statement + 3 numbered next moves | Keep, promote visually |
| Readiness signals | What's working / what needs attention — 3 items each max | Trim from current 4–6 items |

**Remove from this tab:**
- Step-by-step guide detail (3-step accordion) — replaced by field map + rail
- Score breakdown panel — rail only
- Company story read-only recap — duplicates Profile
- Key metrics read-only recap — duplicates Profile
- Assessment collection cards (Exposure / ESG / SROI) — status visible in rail

---

### Tab 2 — Profile *(restructured)*

**One question: "What information does this company have?"**

Split into four sections with a clear break between required and optional depth.

#### Section A — Company core *(always visible, ~8 fields)*
Fields every lens needs. Completable in under 5 minutes.

- Company name, One-liner, Problem statement, Customer and buyer, Business model
- Sector, Stage, Geography

#### Section B — For this path *(lens-specific, ~5 fields)*
Fields the active lens weights most. Label the section heading with the lens name. Make it visually prominent — this is the priority block.

| Lens | Fields |
|---|---|
| Fundraising | Ask, Use of funds, Next step, Runway, Traction |
| Partner | Deployment note, Expected pilot outcome, Ask, Use of funds |
| Commercialization | TRL, IP position, Use of funds, Ask, Next step |
| Grant | Transition note, Beneficiary groups, Primary outcome, Use of funds, Ask |

#### Section C — Exposure *(3 fields, labeled "affects readiness")*
Regulatory level, Transition level, Primary jurisdiction. Kept visible — these fields change the readiness score.

#### Section D — Extended profile *(collapsible, collapsed by default)*
Team, Market, Metrics, Funding history, Exit planning. Optional depth. Collapsed under a labeled disclosure: *"Extended profile — team, market, metrics, funding history, exit."* Shows a field count inside. Expands in place.

**Remove from Profile:**
- ESG button/card — it's a tab
- SROI inputs — they belong in the Impact tab
- Evidence / Risks / Missing textareas — Evidence tab only, no duplication

---

### Tab 3 — Evidence *(simplified)*

**One question: "What proof does this company have?"**

| Section | Content | Change |
|---|---|---|
| Inputs | Evidence available, Risks, Missing items textareas | Move to TOP |
| Structured preview | 3 parsed-item cards (inferred types and strength) | Keep below inputs |
| Checklist | 4 lens-specific preparation bullets | Keep at bottom, lightweight reference |

**Remove from Evidence:**
- Repeated lens guide — it's in the Guide tab
- Counterparty questions (4 Q&A cards) — move to rail
- Score breakdown panel — rail only

---

### Tab 4 — Memo *(unchanged)*

Already restructured with section headers. No changes.

---

### Tab 5 — Impact *(replaces ESG)*

**One question: "What optional structured inputs support impact claims?"**

Rename "ESG" → "Impact". Frame the tab as optional at the top. Combine both optional datasets here.

| Section | Content |
|---|---|
| ESG questionnaire | 9 questions, sector- and stage-adaptive |
| Social return inputs | Beneficiary groups, Primary outcome, Annual reach |

---

## Rail Redesign

The rail is currently 8 sections. Target: 4 sections, fits in viewport at 1280px without scrolling.

**Keep:**
- Readiness score (large lime number) + status label
- 5 module progress bars — compact, 3px height
- Top blocker — ONE item only, the most critical gap
- Next step — ONE sentence

**Remove:**
- "Strongest signal" sub-section → Guide tab
- "Best fit" sub-section → already shown as topbar pill
- "About this score" paragraph → move to `?` tooltip on the score number

**Add:**
- 4 counterparty Q&A cards (Signal / Gap / Next step / Risk) — currently buried in Evidence, these are persistent-reference content that belongs in the rail

---

## Content Migration Table

| Content | Currently | Moves to |
|---|---|---|
| Lens guide (3-step detail) | Overview + Evidence | **Remove** (replaced by field map + rail) |
| Score breakdown panel | Overview + Evidence | **Rail only** |
| Company story recap | Overview | **Remove** (duplicates Profile) |
| Key metrics recap | Overview | **Remove** (duplicates Profile metrics) |
| Assessment collection cards | Overview | **Remove** (status visible in rail) |
| Counterparty questions (4 Q&A) | Evidence | **Rail** |
| Evidence / Risks / Missing textareas | Profile + Evidence | **Evidence only** |
| SROI inputs | Profile | **Impact tab only** |
| ESG link button in Profile | Profile | **Remove** (tab exists) |
| "About this score" | Rail | **Tooltip on score number** |
| "Strongest signal" / "Best fit" | Rail | **Remove** |

---

## Visual Hierarchy

The three zones have distinct visual weights:

- **Navigator (left)** — lowest density. Company list, search, lens selector. Quiet.
- **Studio (center)** — medium density. Working surface. Sections need more breathing room — current `--space-sm` gap between sections is too tight for form work. Use `--space-xl` between sections, `--space-md` between fields within a section.
- **Rail (right)** — controlled density. Score + 5 bars always in frame. After redesign, no scrolling required at 1280px.

The extended profile section needs a distinct visual treatment: subtle background tint (e.g. `--paper-deep`), disclosure chevron, field count badge. Not a modal — an expandable region.

---

## Key States

| State | What the user sees |
|---|---|
| Empty custom profile | Guide: all field map cards "Missing"; rail: score near 0; Profile: core fields blank |
| Partial profile | Guide: mixed field map; rail: top blocker; 3 next moves |
| Well-filled profile | Guide: mostly green field map; rail score ≥ 64; priority label updates |
| Example profile | Same as above; topbar shows "Example profile"; reset button visible |
| Extended section expanded | Region opens in place; fields use same form style as core |
| Lens switched | Field map reshuffles; lens-specific section swaps; hero copy and signals update |

---

## Open Questions

1. **Extended section expand behavior** — scroll user to it, or open in place? Recommend in-place.
2. **Rail counterparty questions** — update in real-time as fields change, or only on tab switch? Real-time is possible; may feel noisy.
3. **Guide tab field map click** — confirm click-to-navigate behavior (tab switch + scroll-to-field) is preserved.
4. **Extended profile default** — collapsed for new profiles (cleaner), open for example profiles (more discoverable)?
5. **"Impact" tab rename** — "ESG" is recognizable in the target audience; "Impact" is friendlier. Confirm before implementing.
