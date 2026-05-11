const startups = [
  {
    id: "aerolith",
    name: "Aerolith Capture",
    sector: "Climate tech",
    stage: "Seed",
    geography: "Italy",
    trl: 6,
    ticket: 1.8,
    ask: "EUR 1.8M seed round",
    useOfFunds: "Pilot units, sorbent durability testing, and first industrial partnerships.",
    model: "Hardware-enabled carbon removal credits with recurring maintenance.",
    maturity: "Pilot validated",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind with verification burden",
      note: "Carbon accounting rules can increase demand, but credit verification needs third-party diligence.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Industrial decarbonization budgets make the problem urgent, while capex cycles may slow adoption.",
    },
    evidence: ["Two cement plant LOIs", "1,200-hour pilot run", "Preliminary LCA reviewed by university lab"],
    ip: "Patent filed for mineralization cartridge geometry; sorbent recipe treated as trade secret.",
    risks: ["Scale-up reliability", "MRV acceptance", "Working capital intensity"],
    rationale: [
      "Clear connection to hard-to-abate industrial demand.",
      "Evidence includes operating data rather than only grant-stage research.",
      "Regulatory exposure could support adoption if verification is credible.",
    ],
    missing: ["Independent MRV provider review", "Cost curve at 10x pilot volume", "Customer willingness-to-pay evidence"],
    nextStep: "Request MRV plan, pilot economics, and customer reference calls.",
    metrics: { revenue: "Pre-revenue", runway: "9 months", grossMargin: "Modeled 42%", traction: "2 LOIs" },
    tags: ["hardware", "carbon", "industrial"],
  },
  {
    id: "neuroharbor",
    name: "NeuroHarbor Health",
    sector: "Health tech",
    stage: "Series A",
    geography: "Germany",
    trl: 7,
    ticket: 4.5,
    ask: "EUR 4.5M Series A",
    useOfFunds: "Clinical validation, MDR documentation, and payer pilots.",
    model: "B2B digital therapeutic sold to clinics and insurers.",
    maturity: "Clinical pilot",
    regulatory: {
      level: "High",
      character: "Burden and defensibility",
      note: "Medical-device approval slows sales, but a cleared product can create a moat.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition policy is not a primary driver for this opportunity.",
    },
    evidence: ["Multisite pilot with 340 patients", "Ethics committee approval", "Two insurer evaluation agreements"],
    ip: "Software copyright, clinical protocol know-how, and pending claims on adaptive therapy sequencing.",
    risks: ["Clinical endpoint sufficiency", "Reimbursement pathway", "Long enterprise procurement"],
    rationale: [
      "Fits investors seeking regulated health opportunities with evidence depth.",
      "Commercial buyer and user are distinct, which is reflected in payer and clinic pilots.",
      "Regulation is not scored as a pure negative because clearance may support defensibility.",
    ],
    missing: ["Health-economic analysis", "Full MDR timeline", "Data privacy audit"],
    nextStep: "Review clinical endpoints, reimbursement assumptions, and MDR gap analysis.",
    metrics: { revenue: "EUR 180k ARR", runway: "11 months", grossMargin: "78%", traction: "3 clinics" },
    tags: ["regulated", "clinical", "saas"],
  },
  {
    id: "vectorlane",
    name: "VectorLane Systems",
    sector: "AI/data infrastructure",
    stage: "Seed",
    geography: "France",
    trl: 8,
    ticket: 2.6,
    ask: "EUR 2.6M seed extension",
    useOfFunds: "Enterprise security certifications, vector database connectors, and sales hires.",
    model: "Usage-based developer infrastructure for private retrieval systems.",
    maturity: "Live product",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind",
      note: "AI governance and data residency rules increase interest in private retrieval infrastructure.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Energy intensity should still be monitored as enterprise workloads scale.",
    },
    evidence: ["EUR 42k MRR", "14 paying customers", "SOC 2 readiness assessment"],
    ip: "Core indexing code proprietary; no patent strategy, defensibility tied to integration depth.",
    risks: ["Competitive compression", "Cloud platform dependency", "Security proof burden"],
    rationale: [
      "Evidence is commercially stronger than typical seed infrastructure companies.",
      "Fit depends on appetite for fast-moving platform risk.",
      "Regulatory exposure can increase demand for private deployment options.",
    ],
    missing: ["Net revenue retention history", "Security audit completion", "Dependency map for foundation model providers"],
    nextStep: "Pressure-test platform dependency and request customer cohort data.",
    metrics: { revenue: "EUR 42k MRR", runway: "8 months", grossMargin: "71%", traction: "14 customers" },
    tags: ["ai", "infra", "privacy"],
  },
  {
    id: "gridforge",
    name: "GridForge Flex",
    sector: "Energy",
    stage: "Series A",
    geography: "Spain",
    trl: 8,
    ticket: 6.0,
    ask: "EUR 6M Series A",
    useOfFunds: "Aggregator licensing, battery partner integrations, and utility sales.",
    model: "Grid flexibility platform with revenue share on demand response events.",
    maturity: "Commercial pilots",
    regulatory: {
      level: "High",
      character: "Market access and defensibility",
      note: "Energy-market rules are complex, but licensing can become a barrier for late entrants.",
    },
    transition: {
      level: "High",
      character: "Tailwind with market-design risk",
      note: "Renewables volatility increases need for flexibility, while tariff design can change unit economics.",
    },
    evidence: ["Utility pilot covering 18MW", "ISO 27001 audit scheduled", "Two battery OEM partnerships"],
    ip: "Optimization models proprietary; data advantage from dispatch history still early.",
    risks: ["Regulatory market design", "Partner concentration", "Revenue timing volatility"],
    rationale: [
      "Strong transition fit for investors comfortable with regulated infrastructure.",
      "Risk is not only technical; market rules drive revenue capture.",
      "Evidence includes utility and OEM relationships that reduce pure execution uncertainty.",
    ],
    missing: ["Regulatory counsel memo", "Dispatch revenue by event type", "Partner exclusivity terms"],
    nextStep: "Validate market rule exposure and revenue-share mechanics by country.",
    metrics: { revenue: "EUR 310k ARR", runway: "10 months", grossMargin: "64%", traction: "18MW pilot" },
    tags: ["energy", "software", "regulated"],
  },
  {
    id: "circuliq",
    name: "Circuliq Materials",
    sector: "Circular economy",
    stage: "Pre-seed",
    geography: "Netherlands",
    trl: 5,
    ticket: 0.9,
    ask: "EUR 900k pre-seed",
    useOfFunds: "Reactor prototype, feedstock contracts, and materials testing.",
    model: "Licensing and tolling for textile-to-resin conversion.",
    maturity: "Lab prototype",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind",
      note: "Waste and circularity rules can support buyer urgency, but certification remains open.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Corporate circularity targets create demand, but commodity pricing may weaken conversion economics.",
    },
    evidence: ["Bench-scale yield data", "One fashion group LOI", "Grant-funded technical validation"],
    ip: "Provisional patent on catalyst process; FTO not yet completed.",
    risks: ["TRL gap", "Feedstock variability", "FTO uncertainty"],
    rationale: [
      "Early but aligned to circularity mandates and corporate procurement pressure.",
      "Fit is higher for investors that accept technical maturation risk.",
      "Evidence is promising but still below commercial proof.",
    ],
    missing: ["Freedom-to-operate review", "Pilot reactor economics", "Feedstock quality variability tests"],
    nextStep: "Treat as watchlist or deep-tech diligence candidate rather than near-term commercial bet.",
    metrics: { revenue: "Pre-revenue", runway: "6 months", grossMargin: "Not proven", traction: "1 LOI" },
    tags: ["materials", "circular", "deep tech"],
  },
  {
    id: "soilpulse",
    name: "SoilPulse Analytics",
    sector: "Agritech",
    stage: "Seed",
    geography: "Portugal",
    trl: 7,
    ticket: 1.4,
    ask: "EUR 1.4M seed",
    useOfFunds: "Sensor manufacturing, agronomist support, and distributor onboarding.",
    model: "Hardware plus seasonal analytics subscription for specialty crops.",
    maturity: "Field deployments",
    regulatory: {
      level: "Low",
      character: "Light burden",
      note: "Limited direct regulation, with possible demand support from water conservation programs.",
    },
    transition: {
      level: "High",
      character: "Tailwind with adoption friction",
      note: "Climate stress increases water-management need, but farm sales cycles remain relationship-heavy.",
    },
    evidence: ["126 deployed sensors", "Water-use reduction study", "Distributor signed in Iberia"],
    ip: "Sensor enclosure design registered; analytics models proprietary.",
    risks: ["Hardware support cost", "Seasonality", "Distributor dependence"],
    rationale: [
      "Evidence links product use to measurable farm outcomes.",
      "Ticket fits early-stage climate-adjacent mandate.",
      "Transition exposure is a demand driver, not a simple risk penalty.",
    ],
    missing: ["Churn across full crop cycle", "Maintenance cost by sensor cohort", "Distributor margin schedule"],
    nextStep: "Review cohort economics and interview growers after a complete season.",
    metrics: { revenue: "EUR 22k MRR seasonal", runway: "7 months", grossMargin: "48%", traction: "126 sensors" },
    tags: ["agritech", "water", "hardware"],
  },
  {
    id: "dockmotion",
    name: "DockMotion Robotics",
    sector: "Mobility",
    stage: "Series A",
    geography: "Denmark",
    trl: 8,
    ticket: 5.2,
    ask: "EUR 5.2M Series A",
    useOfFunds: "Port deployments, ruggedized hardware, and service operations.",
    model: "Robotics-as-a-service for port yard automation.",
    maturity: "Commercial deployment",
    regulatory: {
      level: "Medium",
      character: "Operational burden",
      note: "Safety certification and port labor rules can slow deployment but also limit weak competitors.",
    },
    transition: {
      level: "Medium",
      character: "Efficiency tailwind",
      note: "Electrification and logistics efficiency support demand, though not the sole buying trigger.",
    },
    evidence: ["One live port contract", "Fleet uptime 96%", "Insurance safety review"],
    ip: "Navigation stack proprietary; hardware assembled from commercial components.",
    risks: ["Deployment services intensity", "Labor relations", "Hardware failure liability"],
    rationale: [
      "Commercial deployment provides stronger signal than pilot-only robotics deals.",
      "Operational risk needs diligence because RaaS margins depend on uptime.",
      "Regulatory and labor exposure may slow expansion but can strengthen incumbent advantage after approval.",
    ],
    missing: ["Gross margin after field support", "Safety incident history", "Port sales pipeline conversion"],
    nextStep: "Inspect deployment economics and speak with the port operations sponsor.",
    metrics: { revenue: "EUR 620k ARR", runway: "12 months", grossMargin: "36%", traction: "1 live port" },
    tags: ["robotics", "mobility", "industrial"],
  },
  {
    id: "quantweave",
    name: "QuantWeave Materials",
    sector: "Deep tech materials",
    stage: "Seed",
    geography: "Switzerland",
    trl: 4,
    ticket: 2.2,
    ask: "EUR 2.2M seed",
    useOfFunds: "TRL 4 to 6 validation, external lab testing, and IP prosecution.",
    model: "Licensing advanced thermal films to electronics manufacturers.",
    maturity: "Research validation",
    regulatory: {
      level: "Low",
      character: "Limited burden",
      note: "Product safety and material compliance remain relevant but not central to market formation.",
    },
    transition: {
      level: "Medium",
      character: "Efficiency tailwind",
      note: "Lower cooling energy demand can support adoption if manufacturing yield is proven.",
    },
    evidence: ["Peer-reviewed thermal performance", "Two OEM technical evaluations", "University spinout agreement"],
    ip: "Two patent families assigned to company; FTO partially complete.",
    risks: ["Low TRL", "Manufacturing yield", "Long OEM qualification"],
    rationale: [
      "High optionality, but the evidence is still technical rather than commercial.",
      "Best suited to investors with deep-tech patience and strong technical diligence capacity.",
      "IP position appears meaningful but should be independently reviewed.",
    ],
    missing: ["Manufacturing scale plan", "Full FTO", "OEM qualification milestones"],
    nextStep: "Route to technical diligence before commercial prioritization.",
    metrics: { revenue: "Pre-revenue", runway: "10 months", grossMargin: "Not proven", traction: "2 evals" },
    tags: ["deep tech", "materials", "spinout"],
  },
  {
    id: "aquacipher",
    name: "AquaCipher Water",
    sector: "Water tech",
    stage: "Seed",
    geography: "Greece",
    trl: 7,
    ticket: 1.6,
    ask: "EUR 1.6M seed",
    useOfFunds: "Municipal pilots, corrosion testing, and channel partnerships.",
    model: "Leak detection analytics sold to municipal water utilities.",
    maturity: "Municipal pilots",
    regulatory: {
      level: "Medium",
      character: "Procurement burden and demand driver",
      note: "Public procurement slows deals, while leakage-reduction mandates can make the budget easier to justify.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Water scarcity and infrastructure resilience programs increase urgency.",
    },
    evidence: ["Three municipal pilots", "Detected 17 priority leaks", "Distributor conversations in two regions"],
    ip: "Algorithms proprietary; sensor package uses off-the-shelf devices.",
    risks: ["Municipal procurement", "Long payback proof", "Integration with legacy SCADA"],
    rationale: [
      "Problem is urgent and procurement-driven, not consumer-demand-driven.",
      "Evidence is operational but needs conversion into paid contracts.",
      "Regulatory pressure can support purchasing rather than only adding burden.",
    ],
    missing: ["Paid conversion terms", "Payback model by municipality size", "SCADA integration cost"],
    nextStep: "Focus diligence on pilot-to-contract conversion and procurement timeline.",
    metrics: { revenue: "Pilot fees", runway: "8 months", grossMargin: "69% software", traction: "3 pilots" },
    tags: ["water", "municipal", "software"],
  },
  {
    id: "ciphernest",
    name: "CipherNest Security",
    sector: "Cybersecurity",
    stage: "Series A",
    geography: "Ireland",
    trl: 9,
    ticket: 3.8,
    ask: "EUR 3.8M Series A",
    useOfFunds: "Sales expansion, partner marketplace, and compliance certifications.",
    model: "B2B SaaS for supplier-risk monitoring in regulated enterprises.",
    maturity: "Scaling SaaS",
    regulatory: {
      level: "High",
      character: "Demand tailwind",
      note: "NIS2, DORA, and vendor-risk obligations create budget pressure for enterprise buyers.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition exposure is not a meaningful part of the thesis.",
    },
    evidence: ["EUR 1.1M ARR", "Net revenue retention 118%", "ISO 27001 certified"],
    ip: "Workflow and scoring engine proprietary; defensibility mostly data integrations and switching cost.",
    risks: ["Crowded category", "Enterprise sales efficiency", "Data-source dependency"],
    rationale: [
      "High evidence depth with current revenue and retention.",
      "Regulatory exposure is a clear demand tailwind for the buyer.",
      "Category competition requires close diligence on differentiation and CAC payback.",
    ],
    missing: ["CAC payback by segment", "Win/loss analysis", "Data-source contracts"],
    nextStep: "Review sales efficiency, customer references, and differentiation against GRC suites.",
    metrics: { revenue: "EUR 1.1M ARR", runway: "14 months", grossMargin: "82%", traction: "36 customers" },
    tags: ["cybersecurity", "saas", "regulated"],
  },
  {
    id: "cardioprint",
    name: "CardioPrint Labs",
    sector: "Medtech",
    stage: "Pre-seed",
    geography: "Belgium",
    trl: 5,
    ticket: 1.2,
    ask: "EUR 1.2M pre-seed",
    useOfFunds: "Prototype refinement, preclinical validation, and patent prosecution.",
    model: "Disposable cardiac planning models sold through hospital procurement.",
    maturity: "Prototype",
    regulatory: {
      level: "High",
      character: "Burden and clinical credibility",
      note: "Clinical and device requirements are heavy, but successful clearance would materially improve buyer trust.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition policy is not relevant to the investment thesis.",
    },
    evidence: ["Surgeon advisory board", "20 simulated procedures", "Prototype biocompatibility screen"],
    ip: "Patent application filed for printable composite material and workflow.",
    risks: ["Clinical validation", "Hospital procurement", "Regulatory timeline"],
    rationale: [
      "Promising clinician pull, but evidence is not yet clinical-outcome evidence.",
      "Fit depends on appetite for regulated pre-seed medtech.",
      "Regulatory burden is high, but not automatically negative if it creates clinical credibility.",
    ],
    missing: ["Regulatory classification confirmation", "Clinical protocol", "Unit economics at production volume"],
    nextStep: "Hold pending regulatory pathway and clinical validation plan.",
    metrics: { revenue: "Pre-revenue", runway: "5 months", grossMargin: "Modeled 58%", traction: "20 simulations" },
    tags: ["medtech", "regulated", "prototype"],
  },
  {
    id: "factorymesh",
    name: "FactoryMesh AI",
    sector: "Industrial automation",
    stage: "Seed",
    geography: "Austria",
    trl: 8,
    ticket: 2.9,
    ask: "EUR 2.9M seed",
    useOfFunds: "Deployment team, PLC integrations, and channel partnerships.",
    model: "Annual software license plus implementation fee for mid-market factories.",
    maturity: "Live product",
    regulatory: {
      level: "Low",
      character: "Operational standards",
      note: "Safety and data standards matter, but regulation is not the core adoption driver.",
    },
    transition: {
      level: "Medium",
      character: "Productivity and energy-efficiency tailwind",
      note: "Energy prices and reshoring pressures support automation budgets.",
    },
    evidence: ["EUR 68k MRR", "Five factories live", "Average downtime reduction 14%"],
    ip: "Deployment playbooks and anomaly models proprietary; limited patentability.",
    risks: ["Implementation scalability", "Incumbent automation suites", "Data quality variability"],
    rationale: [
      "Commercial traction and measurable factory outcomes support first-level relevance.",
      "Risk centers on implementation scale, not only product functionality.",
      "Transition exposure provides budget justification through energy and productivity savings.",
    ],
    missing: ["Implementation hours by customer", "CAC payback", "Reference calls with plant managers"],
    nextStep: "Audit services load and repeatability before treating ARR as scalable SaaS.",
    metrics: { revenue: "EUR 68k MRR", runway: "9 months", grossMargin: "61%", traction: "5 factories" },
    tags: ["industrial", "ai", "saas"],
  },
];

const defaultPreferences = {
  sectors: ["Climate tech", "Energy", "AI/data infrastructure", "Cybersecurity", "Industrial automation"],
  stages: ["Seed", "Series A"],
  maxTicket: 4.0,
  minTrl: 6,
  risk: "Balanced",
  geographies: ["Italy", "Germany", "France", "Spain", "Ireland", "Austria"],
  evidence: "Commercial",
  regulatory: "Open",
  transition: "Open",
};

const state = {
  preferences: structuredClone(defaultPreferences),
  filters: {
    query: "",
    sector: "All",
    stage: "All",
    geography: "All",
    regulatory: "All",
    transition: "All",
  },
  selectedId: "aerolith",
  compareIds: ["aerolith", "vectorlane"],
  briefId: "aerolith",
  activeTab: "overview",
  showAdvanced: false,
};

const sectors = [...new Set(startups.map((startup) => startup.sector))];
const stages = [...new Set(startups.map((startup) => startup.stage))];
const geographies = [...new Set(startups.map((startup) => startup.geography))];
const exposureLevels = ["All", "Low", "Medium", "High"];
const riskProfiles = ["Conservative", "Balanced", "High uncertainty"];
const evidenceProfiles = ["Research", "Pilot", "Commercial"];
const tabs = [
  ["overview", "Screening"],
  ["evidence", "Evidence"],
  ["risk", "Risk"],
  ["diligence", "Diligence"],
  ["brief", "Brief"],
];

const app = document.querySelector("#app");

function normalizeTicket(value) {
  return Number.parseFloat(value).toFixed(value % 1 === 0 ? 0 : 1);
}

function scoreStartup(startup, preferences = state.preferences) {
  let score = 28;
  const reasons = [];
  const cautions = [];

  if (preferences.sectors.includes(startup.sector)) {
    score += 16;
    reasons.push(`Sector matches the current mandate (${startup.sector}).`);
  } else {
    cautions.push(`Sector sits outside the selected mandate.`);
  }

  if (preferences.stages.includes(startup.stage)) {
    score += 12;
    reasons.push(`Stage is within the selected round focus.`);
  } else {
    cautions.push(`Stage differs from the selected round focus.`);
  }

  if (startup.ticket <= preferences.maxTicket) {
    score += 12;
    reasons.push(`Funding ask fits the current ticket ceiling.`);
  } else {
    const gap = (startup.ticket - preferences.maxTicket).toFixed(1);
    cautions.push(`Ask is EUR ${gap}M above the preferred ticket ceiling.`);
  }

  if (startup.trl >= preferences.minTrl) {
    score += 10;
    reasons.push(`Maturity is at or above the selected TRL floor.`);
  } else {
    cautions.push(`Maturity is below the selected TRL floor.`);
  }

  if (preferences.geographies.includes(startup.geography)) {
    score += 6;
  } else {
    cautions.push(`Geography is outside the current focus list.`);
  }

  const evidenceDepth = evidenceScore(startup);
  if (preferences.evidence === "Commercial" && evidenceDepth >= 3) {
    score += 10;
    reasons.push("Evidence includes commercial traction or paying customers.");
  } else if (preferences.evidence === "Pilot" && evidenceDepth >= 2) {
    score += 8;
    reasons.push("Evidence includes pilots or externally visible validation.");
  } else if (preferences.evidence === "Research") {
    score += 5;
  } else {
    cautions.push("Evidence may be lighter than the current evidence preference.");
  }

  if (preferences.risk === "Conservative") {
    if (startup.trl >= 8 && evidenceDepth >= 3 && startup.regulatory.level !== "High") score += 8;
    if (startup.trl < 6 || startup.regulatory.level === "High") cautions.push("Conservative profile flags this for deeper diligence.");
  }

  if (preferences.risk === "High uncertainty") {
    if (startup.trl <= 6 || startup.stage === "Pre-seed") score += 8;
    reasons.push("Current risk setting allows earlier technical uncertainty.");
  }

  if (preferences.regulatory === "Prefer tailwinds" && startup.regulatory.character.toLowerCase().includes("tailwind")) {
    score += 6;
    reasons.push("Regulatory exposure appears more demand-supportive than purely burdensome.");
  }

  if (preferences.transition === "Prefer tailwinds" && startup.transition.character.toLowerCase().includes("tailwind")) {
    score += 6;
    reasons.push("Transition exposure appears aligned with demand formation.");
  }

  const bounded = Math.max(8, Math.min(96, score));
  return {
    score: bounded,
    label: bounded >= 78 ? "Strong screening fit" : bounded >= 60 ? "Relevant to inspect" : bounded >= 42 ? "Watchlist fit" : "Low current fit",
    reasons: reasons.slice(0, 4),
    cautions: cautions.slice(0, 4),
  };
}

function assessStartup(startup) {
  const fit = scoreStartup(startup);
  const evidenceDepth = evidenceScore(startup);
  const evidence = evidenceDepth === 3 ? 82 : evidenceDepth === 2 ? 61 : 38;
  const exposureWeight = { Low: 14, Medium: 25, High: 38 };
  const riskSeverity = Math.min(92, exposureWeight[startup.regulatory.level] + exposureWeight[startup.transition.level] + startup.risks.length * 6);
  const diligence = Math.max(22, Math.min(86, 88 - startup.missing.length * 11 + evidenceDepth * 5));
  const dataConfidence = Math.max(30, Math.min(88, evidence + (startup.trl - 6) * 6));
  const decision =
    fit.score >= 78 && evidenceDepth >= 2
      ? "Proceed to deeper diligence"
      : fit.score >= 60
        ? "Proceed with conditions"
        : fit.score >= 42
          ? "Monitor"
          : "Defer";

  return {
    ...fit,
    evidence,
    riskSeverity,
    diligence,
    dataConfidence,
    decision,
    evidenceLabel: evidenceDepth === 3 ? "Commercial evidence" : evidenceDepth === 2 ? "Pilot evidence" : "Research evidence",
  };
}

function evidenceScore(startup) {
  const text = `${startup.evidence.join(" ")} ${startup.metrics.revenue} ${startup.metrics.traction}`.toLowerCase();
  if (text.includes("arr") || text.includes("mrr") || text.includes("customers") || text.includes("contract")) return 3;
  if (text.includes("pilot") || text.includes("loi") || text.includes("deployed")) return 2;
  return 1;
}

function getFilteredStartups() {
  return startups
    .map((startup) => ({ ...startup, fit: assessStartup(startup) }))
    .filter((startup) => {
      const query = state.filters.query.trim().toLowerCase();
      const queryMatch =
        !query ||
        [startup.name, startup.sector, startup.stage, startup.geography, startup.tags.join(" "), startup.rationale.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query);
      return (
        queryMatch &&
        (state.filters.sector === "All" || startup.sector === state.filters.sector) &&
        (state.filters.stage === "All" || startup.stage === state.filters.stage) &&
        (state.filters.geography === "All" || startup.geography === state.filters.geography) &&
        (state.filters.regulatory === "All" || startup.regulatory.level === state.filters.regulatory) &&
        (state.filters.transition === "All" || startup.transition.level === state.filters.transition)
      );
    })
    .sort((a, b) => b.fit.score - a.fit.score || b.trl - a.trl);
}

function selectedStartup() {
  return startups.find((startup) => startup.id === state.selectedId) || startups[0];
}

function formatMoney(value) {
  return `EUR ${normalizeTicket(value)}M`;
}

function render() {
  const selected = selectedStartup();
  const filtered = getFilteredStartups();
  const compare = state.compareIds.map((id) => startups.find((startup) => startup.id === id)).filter(Boolean);
  const selectedFit = assessStartup(selected);

  app.innerHTML = `
    <header class="topbar">
      <div class="brand-block">
        <img src="assets/logos/OpenEconomics-LOGO BLACK.svg" alt="OpenEconomics" />
        <div>
          <p class="eyebrow">Frontend-only POC</p>
          <h1>Innovation Dealroom</h1>
        </div>
      </div>
      <div class="topbar__right">
        <span class="status-pill">Static screening room</span>
        <span class="status-pill status-pill--accent">${filtered.length} visible opportunities</span>
      </div>
    </header>

    <main id="main" class="workspace">
      <aside class="mandate panel" aria-label="Investor preferences">
        ${renderMandatePanel()}
      </aside>

      <section class="queue" aria-label="Startup opportunity queue">
        ${renderHero(filtered)}
        ${renderFilterBar()}
        <div class="opportunity-list" id="opportunity-list">
          ${filtered.length ? filtered.map((startup) => renderOpportunityCard(startup)).join("") : renderEmptyState()}
        </div>
      </section>

      <aside class="dealroom panel" aria-label="Structured dealroom for selected startup">
        ${renderDealroom(selected, selectedFit)}
      </aside>
    </main>

    <section class="compare-strip" aria-label="Startup comparison workspace">
      ${renderCompare(compare)}
    </section>
  `;

  bindEvents();
}

function renderHero(filtered) {
  const strong = filtered.filter((startup) => startup.fit.score >= 78).length;
  const diligence = filtered.filter((startup) => startup.fit.cautions.length > 0).length;
  const regulated = filtered.filter((startup) => startup.regulatory.level === "High").length;

  return `
    <section class="hero">
      <div>
        <p class="eyebrow">Screening view</p>
        <h2>Which opportunities deserve attention, and why?</h2>
        <p class="hero-copy">
          This room converts mandate preferences into explainable first-level screening signals.
          Fit, evidence, regulatory exposure, and transition exposure are shown as diligence prompts, not investment advice.
        </p>
      </div>
      <div class="hero-ledger" aria-label="Screening summary">
        <div><strong>${strong}</strong><span>strong fits</span></div>
        <div><strong>${diligence}</strong><span>with diligence gaps</span></div>
        <div><strong>${regulated}</strong><span>high regulatory exposure</span></div>
      </div>
    </section>
  `;
}

function renderMandatePanel() {
  return `
    <div class="panel-heading">
      <p class="eyebrow">Mandate</p>
      <h2>Investor preferences</h2>
    </div>
    <div class="field">
      <label for="ticket">Max initial ticket <strong>${formatMoney(state.preferences.maxTicket)}</strong></label>
      <input id="ticket" type="range" min="0.5" max="7" step="0.1" value="${state.preferences.maxTicket}" data-pref="maxTicket" />
    </div>
    <div class="field">
      <label for="trl">Minimum maturity / TRL <strong>${state.preferences.minTrl}</strong></label>
      <input id="trl" type="range" min="3" max="9" step="1" value="${state.preferences.minTrl}" data-pref="minTrl" />
    </div>
    <fieldset class="segmented" aria-label="Risk appetite">
      <legend>Risk appetite</legend>
      ${riskProfiles.map((profile) => renderSegment("risk", profile, state.preferences.risk === profile)).join("")}
    </fieldset>
    <fieldset class="chip-field" aria-label="Preferred sectors">
      <legend>Preferred sectors</legend>
      ${sectors.map((sector) => renderToggleChip("sectors", sector, state.preferences.sectors.includes(sector))).join("")}
    </fieldset>
    <fieldset class="chip-field" aria-label="Stages">
      <legend>Stages</legend>
      ${stages.map((stage) => renderToggleChip("stages", stage, state.preferences.stages.includes(stage))).join("")}
    </fieldset>
    <button class="text-button" type="button" data-action="toggle-advanced">
      ${state.showAdvanced ? "Hide advanced preferences" : "Show advanced preferences"}
    </button>
    <div class="advanced ${state.showAdvanced ? "advanced--open" : ""}">
      <div>
        <label class="select-label" for="evidencePref">Evidence preference</label>
        <select id="evidencePref" data-pref="evidence">
          ${evidenceProfiles.map((item) => `<option ${item === state.preferences.evidence ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="select-label" for="regPref">Regulatory stance</label>
        <select id="regPref" data-pref="regulatory">
          ${["Open", "Prefer tailwinds"].map((item) => `<option ${item === state.preferences.regulatory ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </div>
      <div>
        <label class="select-label" for="transitionPref">Transition stance</label>
        <select id="transitionPref" data-pref="transition">
          ${["Open", "Prefer tailwinds"].map((item) => `<option ${item === state.preferences.transition ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </div>
      <fieldset class="chip-field" aria-label="Geography">
        <legend>Geography</legend>
        ${geographies
          .map((geo) => renderToggleChip("geographies", geo, state.preferences.geographies.includes(geo)))
          .join("")}
      </fieldset>
    </div>
    <button class="button button--ghost" type="button" data-action="reset-preferences">Reset preferences</button>
  `;
}

function renderSegment(group, value, checked) {
  return `
    <label class="segment ${checked ? "segment--active" : ""}">
      <input type="radio" name="${group}" value="${value}" ${checked ? "checked" : ""} data-pref="${group}" />
      <span>${value}</span>
    </label>
  `;
}

function renderToggleChip(group, value, checked) {
  return `
    <label class="toggle-chip ${checked ? "toggle-chip--active" : ""}">
      <input type="checkbox" value="${value}" ${checked ? "checked" : ""} data-pref-list="${group}" />
      <span>${value}</span>
    </label>
  `;
}

function renderFilterBar() {
  return `
    <div class="filterbar">
      <label class="search">
        <span>Search</span>
        <input type="search" value="${state.filters.query}" data-filter="query" placeholder="Company, sector, evidence..." />
      </label>
      ${renderSelectFilter("sector", ["All", ...sectors], "Sector")}
      ${renderSelectFilter("stage", ["All", ...stages], "Stage")}
      ${renderSelectFilter("geography", ["All", ...geographies], "Geography")}
      ${renderSelectFilter("regulatory", exposureLevels, "Regulatory")}
      ${renderSelectFilter("transition", exposureLevels, "Transition")}
    </div>
  `;
}

function renderSelectFilter(name, options, label) {
  return `
    <label class="select-filter">
      <span>${label}</span>
      <select data-filter="${name}">
        ${options.map((option) => `<option ${state.filters[name] === option ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderOpportunityCard(startup) {
  const isSelected = startup.id === state.selectedId;
  const inCompare = state.compareIds.includes(startup.id);
  return `
    <article class="opportunity ${isSelected ? "opportunity--selected" : ""}">
      <button class="opportunity__main" type="button" data-action="select-startup" data-id="${startup.id}" aria-pressed="${isSelected}">
        <span class="score-dial" style="--score:${startup.fit.score}%">
          <strong>${startup.fit.score}</strong>
          <span>fit</span>
        </span>
        <span class="opportunity__body">
          <span class="opportunity__title">${startup.name}</span>
          <span class="meta-row">${startup.sector} / ${startup.stage} / ${startup.geography} / TRL ${startup.trl}</span>
          <span class="fit-label">${startup.fit.label}</span>
          <span class="why-line">${startup.fit.reasons[0] || startup.fit.cautions[0] || "Requires first-level screening."}</span>
        </span>
      </button>
      <div class="opportunity__facts">
        <span>${startup.ask}</span>
        <span>${startup.metrics.traction}</span>
        <span>${startup.fit.decision}</span>
        <span>${startup.regulatory.level} regulatory</span>
        <span>${startup.transition.level} transition</span>
      </div>
      <div class="opportunity__actions">
        <button class="button button--small" type="button" data-action="select-startup" data-id="${startup.id}">Open dealroom</button>
        <button class="button button--small ${inCompare ? "button--active" : "button--ghost"}" type="button" data-action="toggle-compare" data-id="${startup.id}">
          ${inCompare ? "In compare" : "Compare"}
        </button>
      </div>
    </article>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state">
      <h3>No opportunities match this screen.</h3>
      <p>Loosen a filter or adjust the mandate. The room is designed to show why an opportunity is screened in or out.</p>
      <button class="button" type="button" data-action="clear-filters">Clear filters</button>
    </div>
  `;
}

function renderDealroom(startup, fit) {
  return `
    <div class="dealroom__mast">
      <div>
        <p class="eyebrow">Virtual dealroom</p>
        <h2>${startup.name}</h2>
        <p>${startup.sector} / ${startup.stage} / ${startup.geography}</p>
      </div>
      <div class="dealroom-score">
        <strong>${fit.score}</strong>
        <span>${fit.label}</span>
      </div>
    </div>
    <nav class="tabs" aria-label="Dealroom sections">
      ${tabs
        .map(
          ([id, label]) => `
            <button type="button" class="${state.activeTab === id ? "tab tab--active" : "tab"}" data-action="tab" data-tab="${id}">
              ${label}
            </button>
          `
        )
        .join("")}
    </nav>
    <div class="dealroom__content">
      ${renderTab(startup, fit)}
    </div>
  `;
}

function renderTab(startup, fit) {
  if (state.activeTab === "evidence") return renderEvidence(startup);
  if (state.activeTab === "risk") return renderRisk(startup);
  if (state.activeTab === "diligence") return renderDiligence(startup);
  if (state.activeTab === "brief") return renderBrief(startup, fit);
  return renderOverview(startup, fit);
}

function renderOverview(startup, fit) {
  return `
    <section class="scorecard" aria-label="Explainability scorecard">
      ${renderGauge("Investment fit", fit.score, fit.label)}
      ${renderGauge("Evidence strength", fit.evidence, fit.evidenceLabel)}
      ${renderGauge("Risk severity", fit.riskSeverity, "First-level signal")}
      ${renderGauge("Data confidence", fit.dataConfidence, "Requires confirmation")}
      ${renderGauge("Diligence completeness", fit.diligence, "Open items remain")}
    </section>
    <section class="next-step">
      <span>Screening state</span>
      <p>${fit.decision}. This should be treated as a diligence lead, not a conclusion.</p>
    </section>
    <section class="deal-section">
      <h3>Why it appears relevant</h3>
      <ul class="clean-list">${fit.reasons.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${fit.cautions.length ? `<h3>Why it still needs care</h3><ul class="clean-list muted-list">${fit.cautions.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    </section>
    <section class="info-grid">
      ${renderInfo("Ask", startup.ask)}
      ${renderInfo("Use of funds", startup.useOfFunds)}
      ${renderInfo("Business model", startup.model)}
      ${renderInfo("IP status", startup.ip)}
    </section>
    <section class="deal-section">
      <h3>Investment rationale</h3>
      <ul class="clean-list">${startup.rationale.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderGauge(label, value, description) {
  return `
    <div class="gauge">
      <span>${label}</span>
      <strong>${value}</strong>
      <div class="gauge__track" aria-hidden="true"><i style="width:${value}%"></i></div>
      <small>${description}</small>
    </div>
  `;
}

function renderEvidence(startup) {
  return `
    <section class="metric-grid">
      ${Object.entries(startup.metrics).map(([key, value]) => renderMetric(key, value)).join("")}
    </section>
    <section class="deal-section">
      <h3>Evidence available</h3>
      <ul class="evidence-list">${startup.evidence.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderRisk(startup) {
  return `
    <section class="exposure-grid">
      <div class="exposure-card">
        <span class="risk-dot risk-dot--${startup.regulatory.level.toLowerCase()}"></span>
        <h3>Regulatory exposure: ${startup.regulatory.level}</h3>
        <strong>${startup.regulatory.character}</strong>
        <p>${startup.regulatory.note}</p>
      </div>
      <div class="exposure-card">
        <span class="risk-dot risk-dot--${startup.transition.level.toLowerCase()}"></span>
        <h3>Transition exposure: ${startup.transition.level}</h3>
        <strong>${startup.transition.character}</strong>
        <p>${startup.transition.note}</p>
      </div>
    </section>
    <section class="deal-section">
      <h3>First-level risk signals</h3>
      <ul class="clean-list">${startup.risks.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderDiligence(startup) {
  return `
    <section class="deal-section">
      <h3>Missing diligence</h3>
      <ul class="diligence-list">${startup.missing.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="next-step">
      <span>Suggested next step</span>
      <p>${startup.nextStep}</p>
    </section>
    <section class="deal-section">
      <h3>Deal structuring watchpoints</h3>
      <ul class="clean-list">
        <li>Confirm whether future capital needs make milestone tranching appropriate.</li>
        <li>Review information rights, IP assignment, and conditions precedent before any term-sheet discussion.</li>
        <li>Use valuation ranges and scenario logic; do not treat this screening view as price discovery.</li>
      </ul>
    </section>
  `;
}

function renderBrief(startup, fit) {
  return `
    <section class="brief">
      <div class="brief__header">
        <p class="eyebrow">Mock investor brief</p>
        <button class="button button--small" type="button" data-action="copy-brief">Copy text</button>
      </div>
      <div class="brief__body" id="brief-text">
        ${briefText(startup, fit)
          .split("\n")
          .map((line) => `<p>${line}</p>`)
          .join("")}
      </div>
    </section>
  `;
}

function briefText(startup, fit) {
  return [
    `${startup.name} is a ${startup.stage.toLowerCase()} ${startup.sector.toLowerCase()} opportunity in ${startup.geography} with an estimated first-level fit of ${fit.score}/100 under the current mandate. Current screening state: ${fit.decision}.`,
    `The opportunity appears relevant because ${fit.reasons[0] ? fit.reasons[0].toLowerCase() : "it has some alignment with the selected mandate."} Evidence currently includes: ${startup.evidence.join("; ")}.`,
    `Key diligence topics are ${startup.missing.join("; ")}. Regulatory exposure is ${startup.regulatory.level.toLowerCase()} and should be read as ${startup.regulatory.character.toLowerCase()}, not as an automatic negative signal.`,
    `Suggested next step: ${startup.nextStep} This brief is a mock screening note and is not an investment recommendation.`,
  ].join("\n");
}

function renderCompare(compare) {
  return `
    <div class="compare-strip__header">
      <div>
        <p class="eyebrow">Comparison workspace</p>
        <h2>Side-by-side first pass</h2>
      </div>
      <button class="button button--ghost" type="button" data-action="clear-compare">Clear comparison</button>
    </div>
    ${
      compare.length
        ? `<div class="compare-table" role="table" aria-label="Selected startup comparison">
            ${["Company", "Fit", "Ask", "Stage / TRL", "Evidence", "Regulatory", "Transition", "Main diligence gap"]
              .map((header) => `<div class="compare-cell compare-cell--head" role="columnheader">${header}</div>`)
              .join("")}
            ${compare.map((startup) => renderCompareRow(startup)).join("")}
          </div>`
        : `<div class="empty-state empty-state--compact"><p>Select up to three opportunities to compare evidence, risk exposure, and missing diligence.</p></div>`
    }
  `;
}

function renderCompareRow(startup) {
  const fit = assessStartup(startup);
  return `
    <div class="compare-cell" role="cell"><strong>${startup.name}</strong><span>${startup.sector}</span></div>
    <div class="compare-cell" role="cell">${fit.score}<span>${fit.label}</span></div>
    <div class="compare-cell" role="cell">${startup.ask}</div>
    <div class="compare-cell" role="cell">${startup.stage}<span>TRL ${startup.trl}</span></div>
    <div class="compare-cell" role="cell">${startup.evidence[0]}</div>
    <div class="compare-cell" role="cell">${startup.regulatory.level}<span>${startup.regulatory.character}</span></div>
    <div class="compare-cell" role="cell">${startup.transition.level}<span>${startup.transition.character}</span></div>
    <div class="compare-cell" role="cell">${startup.missing[0]}</div>
  `;
}

function renderInfo(label, value) {
  return `<div class="info-card"><span>${label}</span><p>${value}</p></div>`;
}

function renderMetric(label, value) {
  return `<div class="metric"><span>${label.replace(/([A-Z])/g, " $1")}</span><strong>${value}</strong></div>`;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", handleAction);
  });

  document.querySelectorAll("[data-pref]").forEach((element) => {
    element.addEventListener("input", handlePreference);
    element.addEventListener("change", handlePreference);
  });

  document.querySelectorAll("[data-pref-list]").forEach((element) => {
    element.addEventListener("change", handlePreferenceList);
  });

  document.querySelectorAll("[data-filter]").forEach((element) => {
    element.addEventListener("input", handleFilter);
    element.addEventListener("change", handleFilter);
  });
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  const id = event.currentTarget.dataset.id;

  if (action === "select-startup") {
    state.selectedId = id;
    state.briefId = id;
    state.activeTab = "overview";
  }

  if (action === "toggle-compare") {
    if (state.compareIds.includes(id)) {
      state.compareIds = state.compareIds.filter((item) => item !== id);
    } else {
      state.compareIds = [...state.compareIds.slice(-2), id];
    }
  }

  if (action === "tab") state.activeTab = event.currentTarget.dataset.tab;
  if (action === "toggle-advanced") state.showAdvanced = !state.showAdvanced;
  if (action === "reset-preferences") state.preferences = structuredClone(defaultPreferences);
  if (action === "clear-filters") {
    state.filters = { query: "", sector: "All", stage: "All", geography: "All", regulatory: "All", transition: "All" };
  }
  if (action === "clear-compare") state.compareIds = [];
  if (action === "copy-brief") copyBrief();

  render();
}

function handlePreference(event) {
  const key = event.currentTarget.dataset.pref;
  if (!key) return;
  if (key === "maxTicket") state.preferences.maxTicket = Number(event.currentTarget.value);
  else if (key === "minTrl") state.preferences.minTrl = Number(event.currentTarget.value);
  else state.preferences[key] = event.currentTarget.value;
  render();
}

function handlePreferenceList(event) {
  const key = event.currentTarget.dataset.prefList;
  const value = event.currentTarget.value;
  const current = new Set(state.preferences[key]);
  if (event.currentTarget.checked) current.add(value);
  else current.delete(value);
  state.preferences[key] = [...current];
  render();
}

function handleFilter(event) {
  const key = event.currentTarget.dataset.filter;
  state.filters[key] = event.currentTarget.value;
  render();
}

async function copyBrief() {
  const startup = selectedStartup();
  const fit = scoreStartup(startup);
  const text = briefText(startup, fit);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    document.body.append(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
}

render();
