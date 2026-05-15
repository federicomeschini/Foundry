const profileTemplates = [
  {
    id: "aerolith",
    name: "Aerolith Capture",
    sector: "Climate tech",
    stage: "Seed",
    geography: "Italy",
    trl: 6,
    ask: "EUR 1.8M seed round",
    oneLiner: "Carbon removal systems for cement producers that need measurable decarbonization evidence.",
    problem: "Industrial emitters need credible decarbonization tools, but many carbon claims still fail on measurement and verification.",
    customer: "Cement groups, industrial decarbonization teams, and buyers of verified carbon removal outcomes.",
    model: "Hardware-enabled carbon removal credits with recurring maintenance.",
    useOfFunds: "Pilot units, sorbent durability testing, and first industrial partnerships.",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind with verification burden",
      note: "Carbon accounting rules can increase demand, but the startup still needs a defensible MRV path before broad circulation.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Industrial decarbonization budgets make the problem urgent, while capex cycles may slow conversion.",
    },
    evidence: ["Two cement plant LOIs", "1,200-hour pilot run", "Preliminary LCA reviewed by university lab"],
    ip: "Patent filed for mineralization cartridge geometry; sorbent recipe treated as trade secret.",
    risks: ["Scale-up reliability", "MRV acceptance", "Working capital intensity"],
    missing: ["Independent MRV provider review", "Cost curve at 10x pilot volume", "Customer willingness-to-pay evidence"],
    nextStep: "Package pilot economics, MRV logic, and customer proof into one submission narrative before outreach.",
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
    ask: "EUR 4.5M Series A",
    oneLiner: "Digital therapeutic platform for clinics and insurers managing neurological recovery pathways.",
    problem: "Neurological recovery is hard to standardize, and clinics struggle to show scalable outcomes to payers.",
    customer: "Clinics, care networks, and insurers evaluating reimbursable digital therapy pathways.",
    model: "B2B digital therapeutic sold to clinics and insurers.",
    useOfFunds: "Clinical validation, MDR documentation, and payer pilots.",
    regulatory: {
      level: "High",
      character: "Burden and defensibility",
      note: "Medical-device approval slows distribution, but a clean regulatory path can materially strengthen credibility.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition policy is not a primary driver; the case depends on clinical and reimbursement proof.",
    },
    evidence: ["Multisite pilot with 340 patients", "Ethics committee approval", "Two insurer evaluation agreements"],
    ip: "Software copyright, clinical protocol know-how, and pending claims on adaptive therapy sequencing.",
    risks: ["Clinical endpoint sufficiency", "Reimbursement pathway", "Long enterprise procurement"],
    missing: ["Health-economic analysis", "Full MDR timeline", "Data privacy audit"],
    nextStep: "Tighten the reimbursement case and present the MDR path alongside clinic and insurer traction.",
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
    ask: "EUR 2.6M seed extension",
    oneLiner: "Private retrieval infrastructure for teams that need enterprise-grade AI deployments with controlled data flows.",
    problem: "Enterprises want AI retrieval systems, but public tooling creates security, residency, and dependency concerns.",
    customer: "Engineering teams, CISOs, and data platform leaders in regulated or privacy-sensitive organizations.",
    model: "Usage-based developer infrastructure for private retrieval systems.",
    useOfFunds: "Enterprise security certifications, vector database connectors, and sales hires.",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind",
      note: "AI governance and data residency rules can support the story if the product can prove security discipline.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition exposure is minor, but energy intensity and platform dependency should still be framed honestly.",
    },
    evidence: ["EUR 42k MRR", "14 paying customers", "SOC 2 readiness assessment"],
    ip: "Core indexing code proprietary; defensibility depends on integrations, deployment trust, and switching cost.",
    risks: ["Competitive compression", "Cloud platform dependency", "Security proof burden"],
    missing: ["Net revenue retention history", "Security audit completion", "Dependency map for foundation model providers"],
    nextStep: "Turn customer, retention, and security proof into one clear operator-grade submission room.",
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
    ask: "EUR 6M Series A",
    oneLiner: "Grid flexibility platform turning distributed battery and demand-response assets into dispatchable revenue streams.",
    problem: "Power systems need flexible capacity, but operators face fragmented assets, complicated tariffs, and slow market access.",
    customer: "Utilities, aggregators, and asset operators navigating flexibility markets.",
    model: "Grid flexibility platform with revenue share on demand response events.",
    useOfFunds: "Aggregator licensing, battery partner integrations, and utility sales.",
    regulatory: {
      level: "High",
      character: "Market access and defensibility",
      note: "Energy-market rules create real friction, but a company that explains this clearly can show why the space is worth entering.",
    },
    transition: {
      level: "High",
      character: "Tailwind with market-design risk",
      note: "Renewables volatility increases need for flexibility, while tariff design can change unit economics.",
    },
    evidence: ["Utility pilot covering 18MW", "ISO 27001 audit scheduled", "Two battery OEM partnerships"],
    ip: "Optimization models proprietary; dispatch-history advantage is forming but still early.",
    risks: ["Regulatory market design", "Partner concentration", "Revenue timing volatility"],
    missing: ["Regulatory counsel memo", "Dispatch revenue by event type", "Partner exclusivity terms"],
    nextStep: "Explain country-by-country rule exposure and show how the raise unlocks commercial repeatability.",
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
    ask: "EUR 900k pre-seed",
    oneLiner: "Textile-to-resin conversion process aimed at fashion groups under circularity pressure.",
    problem: "Apparel supply chains generate difficult waste streams, while buyers still lack scalable circular-material substitutes.",
    customer: "Fashion groups, recycled-material buyers, and industrial processors evaluating circular feedstocks.",
    model: "Licensing and tolling for textile-to-resin conversion.",
    useOfFunds: "Reactor prototype, feedstock contracts, and materials testing.",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind",
      note: "Waste and circularity rules can support urgency, but certification and FTO work still need clearer documentation.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Corporate circularity targets support attention, though commodity swings may pressure economics.",
    },
    evidence: ["Bench-scale yield data", "One fashion group LOI", "Grant-funded technical validation"],
    ip: "Provisional patent on catalyst process; FTO not yet completed.",
    risks: ["TRL gap", "Feedstock variability", "FTO uncertainty"],
    missing: ["Freedom-to-operate review", "Pilot reactor economics", "Feedstock quality variability tests"],
    nextStep: "Recast the deck around one credible pilot path instead of broad circularity ambition.",
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
    ask: "EUR 1.4M seed",
    oneLiner: "Field sensors and seasonal analytics helping specialty-crop growers reduce water waste.",
    problem: "Growers need usable water intelligence, but most tools are either too generic or too expensive to operate in the field.",
    customer: "Specialty-crop growers, agronomists, and irrigation distributors.",
    model: "Hardware plus seasonal analytics subscription for specialty crops.",
    useOfFunds: "Sensor manufacturing, agronomist support, and distributor onboarding.",
    regulatory: {
      level: "Low",
      character: "Light burden",
      note: "Direct regulatory burden is limited, though conservation programs can strengthen the outreach story.",
    },
    transition: {
      level: "High",
      character: "Tailwind with adoption friction",
      note: "Climate stress increases water-management need, but farm adoption still depends on trust and channel execution.",
    },
    evidence: ["126 deployed sensors", "Water-use reduction study", "Distributor signed in Iberia"],
    ip: "Sensor enclosure design registered; analytics models proprietary.",
    risks: ["Hardware support cost", "Seasonality", "Distributor dependence"],
    missing: ["Churn across full crop cycle", "Maintenance cost by sensor cohort", "Distributor margin schedule"],
    nextStep: "Show one clean seasonal economics story and who owns the grower relationship at scale.",
    metrics: { revenue: "EUR 22k MRR seasonal", runway: "7 months", grossMargin: "48%", traction: "126 sensors" },
    tags: ["agritech", "water", "hardware"],
  },
  {
    id: "quantweave",
    name: "QuantWeave Materials",
    sector: "Deep tech materials",
    stage: "Seed",
    geography: "Switzerland",
    trl: 4,
    ask: "EUR 2.2M seed",
    oneLiner: "Advanced thermal films for electronics manufacturers under performance and energy constraints.",
    problem: "Electronics OEMs need better thermal management, but qualification cycles are long and proof burdens are technical.",
    customer: "Electronics manufacturers, packaging teams, and advanced-material integration labs.",
    model: "Licensing advanced thermal films to electronics manufacturers.",
    useOfFunds: "TRL 4 to 6 validation, external lab testing, and IP prosecution.",
    regulatory: {
      level: "Low",
      character: "Limited burden",
      note: "Compliance matters but is not the primary blocker; the bigger issue is how the startup frames technical proof and qualification timing.",
    },
    transition: {
      level: "Medium",
      character: "Efficiency tailwind",
      note: "Lower cooling-energy demand can support adoption if manufacturing yield is believable.",
    },
    evidence: ["Peer-reviewed thermal performance", "Two OEM technical evaluations", "University spinout agreement"],
    ip: "Two patent families assigned to company; FTO partially complete.",
    risks: ["Low TRL", "Manufacturing yield", "Long OEM qualification"],
    missing: ["Manufacturing scale plan", "Full FTO", "OEM qualification milestones"],
    nextStep: "Package the company as a commercialization candidate with one narrow beachhead, not as a broad platform.",
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
    ask: "EUR 1.6M seed",
    oneLiner: "Leak-detection analytics for water utilities that need measurable infrastructure resilience gains.",
    problem: "Municipal utilities lose water and budget to network leakage, but procurement cycles reward proof over promises.",
    customer: "Municipal water utilities, infrastructure operators, and regional distributors.",
    model: "Leak detection analytics sold to municipal water utilities.",
    useOfFunds: "Municipal pilots, corrosion testing, and channel partnerships.",
    regulatory: {
      level: "Medium",
      character: "Procurement burden and demand driver",
      note: "Public procurement slows deals, while leakage-reduction mandates can make the budget easier to defend.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Water scarcity and resilience programs increase urgency across the target market.",
    },
    evidence: ["Three municipal pilots", "Detected 17 priority leaks", "Distributor conversations in two regions"],
    ip: "Algorithms proprietary; sensor package uses off-the-shelf devices.",
    risks: ["Municipal procurement", "Long payback proof", "Integration with legacy SCADA"],
    missing: ["Paid conversion terms", "Payback model by municipality size", "SCADA integration cost"],
    nextStep: "Convert the pilot story into a paid-procurement story before broad fundraising outreach.",
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
    ask: "EUR 3.8M Series A",
    oneLiner: "Supplier-risk monitoring software for regulated enterprises under vendor-compliance pressure.",
    problem: "Enterprises face rising third-party risk obligations, but internal teams still manage supplier exposure with fragmented workflows.",
    customer: "Risk, compliance, procurement, and security leaders in regulated enterprises.",
    model: "B2B SaaS for supplier-risk monitoring in regulated enterprises.",
    useOfFunds: "Sales expansion, partner marketplace, and compliance certifications.",
    regulatory: {
      level: "High",
      character: "Demand tailwind",
      note: "NIS2, DORA, and vendor-risk obligations make the category timely if the company can show sales efficiency and product differentiation.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition is not a central angle here; the company should stay disciplined about what makes the case strong.",
    },
    evidence: ["EUR 1.1M ARR", "Net revenue retention 118%", "ISO 27001 certified"],
    ip: "Workflow and scoring engine proprietary; defensibility comes mainly from integrations and switching cost.",
    risks: ["Crowded category", "Enterprise sales efficiency", "Data-source dependency"],
    missing: ["CAC payback by segment", "Win/loss analysis", "Data-source contracts"],
    nextStep: "Sharpen the differentiation case and document what the next round unlocks operationally.",
    metrics: { revenue: "EUR 1.1M ARR", runway: "14 months", grossMargin: "82%", traction: "36 customers" },
    tags: ["cybersecurity", "saas", "regulated"],
  },
  {
    id: "factorymesh",
    name: "FactoryMesh AI",
    sector: "Industrial automation",
    stage: "Seed",
    geography: "Austria",
    trl: 8,
    ask: "EUR 2.9M seed",
    oneLiner: "Factory intelligence software for mid-market manufacturers trying to reduce downtime and energy waste.",
    problem: "Factories need practical automation gains, but deployments fail when implementation complexity outruns software economics.",
    customer: "Plant managers, operations leaders, and manufacturing groups with legacy equipment environments.",
    model: "Annual software license plus implementation fee for mid-market factories.",
    useOfFunds: "Deployment team, PLC integrations, and channel partnerships.",
    regulatory: {
      level: "Low",
      character: "Operational standards",
      note: "Safety and data standards matter, but the bigger readiness issue is proving implementation can scale without service creep.",
    },
    transition: {
      level: "Medium",
      character: "Productivity and energy-efficiency tailwind",
      note: "Energy prices and reshoring pressure support demand when the ROI case is concrete.",
    },
    evidence: ["EUR 68k MRR", "Five factories live", "Average downtime reduction 14%"],
    ip: "Deployment playbooks and anomaly models proprietary; limited patentability.",
    risks: ["Implementation scalability", "Incumbent automation suites", "Data quality variability"],
    missing: ["Implementation hours by customer", "CAC payback", "Reference calls with plant managers"],
    nextStep: "Package live-factory proof and services-burden discipline into one narrative before the next raise.",
    metrics: { revenue: "EUR 68k MRR", runway: "9 months", grossMargin: "61%", traction: "5 factories" },
    tags: ["industrial", "ai", "saas"],
  },
];

const STORAGE_KEY = "openeconomics-foundry-profiles-v1";
const tabs = [
  ["workspace", "Workspace"],
  ["intake", "Data intake"],
  ["evidence", "Evidence room"],
  ["memo", "Submission memo"],
];

const lensConfig = {
  fundraising: {
    label: "Raise preparation",
    short: "Raise",
    eyebrow: "Founder lens",
    intro: "Frame the company for a financing conversation: clear ask, evidence of demand, and open diligence items stated plainly.",
    weights: { completeness: 0.18, evidence: 0.24, narrative: 0.24, diligence: 0.22, exposure: 0.12 },
    checklist: [
      "Define exactly what this round funds and what milestone it should unlock.",
      "Replace broad ambition with proof: pilots, customers, contracts, or hard technical validation.",
      "Show how the next round becomes easier if this round lands.",
      "Surface cap table, IP ownership, and regulatory path before someone has to ask twice.",
    ],
  },
  partner: {
    label: "Pilot partner outreach",
    short: "Partner",
    eyebrow: "Operating lens",
    intro: "Prepare the company for a commercial or deployment partner that wants outcome proof, integration realism, and low confusion.",
    weights: { completeness: 0.16, evidence: 0.28, narrative: 0.2, diligence: 0.18, exposure: 0.18 },
    checklist: [
      "Explain the operational pain point in buyer language, not startup language.",
      "Show implementation load, integration dependencies, and expected ROI by customer type.",
      "Turn pilots or evals into a simple proof path: before, during, after.",
      "Clarify who signs, who uses, and who carries operational risk after rollout.",
    ],
  },
  commercialization: {
    label: "Research commercialization",
    short: "KER",
    eyebrow: "Commercialization lens",
    intro: "Useful for spinouts and technical teams that need to move from result to company-grade exploitation logic.",
    weights: { completeness: 0.18, evidence: 0.18, narrative: 0.2, diligence: 0.18, exposure: 0.26 },
    checklist: [
      "Define the key exploitable result, TRL, and initial beachhead with no ambiguity.",
      "Choose the first commercialization route clearly: spin-off, licensing, or hybrid.",
      "Document IP chain-of-title, FTO work, and the shortest believable time-to-market.",
      "Translate technical strength into one commercial story that a non-specialist can follow.",
    ],
  },
  grant: {
    label: "Grant and impact packaging",
    short: "Grant",
    eyebrow: "Program lens",
    intro: "Package the company for non-dilutive or impact-led applications where evidence, exploitation logic, and delivery structure matter.",
    weights: { completeness: 0.22, evidence: 0.2, narrative: 0.18, diligence: 0.16, exposure: 0.24 },
    checklist: [
      "Show why the work matters now and how it moves beyond research into deployment.",
      "Tie impact claims to measurable outcomes, not broad mission language.",
      "Clarify consortium, channel, or ecosystem dependencies before submission.",
      "State the exploitation path, funding need, and expected downstream commercial effect.",
    ],
  },
};

const app = document.querySelector("#app");

const state = {
  profiles: loadProfiles(),
  activeId: "aerolith",
  lens: "fundraising",
  query: "",
  sector: "All",
  stage: "All",
  tab: "workspace",
};

syncStateFromHash();

app.addEventListener("click", handleClick);
app.addEventListener("input", handleInput);
app.addEventListener("change", handleChange);
window.addEventListener("hashchange", () => {
  syncStateFromHash();
  render();
});

render();

function loadProfiles() {
  if (typeof localStorage === "undefined") return structuredClone(profileTemplates);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(profileTemplates);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return structuredClone(profileTemplates);
    const byId = new Map(parsed.map((profile) => [profile.id, profile]));
    return profileTemplates.map((template) => mergeProfile(template, byId.get(template.id)));
  } catch {
    return structuredClone(profileTemplates);
  }
}

function mergeProfile(template, saved) {
  if (!saved || typeof saved !== "object") return structuredClone(template);
  return {
    ...structuredClone(template),
    ...saved,
    regulatory: { ...template.regulatory, ...(saved.regulatory || {}) },
    transition: { ...template.transition, ...(saved.transition || {}) },
    metrics: { ...template.metrics, ...(saved.metrics || {}) },
    evidence: Array.isArray(saved.evidence) ? saved.evidence : template.evidence,
    risks: Array.isArray(saved.risks) ? saved.risks : template.risks,
    missing: Array.isArray(saved.missing) ? saved.missing : template.missing,
    tags: Array.isArray(saved.tags) ? saved.tags : template.tags,
  };
}

function persistProfiles() {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.profiles));
}

function syncStateFromHash() {
  const raw = (location.hash || "").replace(/^#/, "");
  if (!raw) return;
  const params = new URLSearchParams(raw);
  const profile = params.get("profile");
  const lens = params.get("lens");
  const tab = params.get("tab");
  if (profile && profileById(profile)) state.activeId = profile;
  if (lens && lensConfig[lens]) state.lens = lens;
  if (tab && tabs.some(([value]) => value === tab)) state.tab = tab;
}

function updateHash() {
  const params = new URLSearchParams({
    profile: state.activeId,
    lens: state.lens,
    tab: state.tab,
  });
  history.replaceState(null, "", `#${params.toString()}`);
}

function profileById(id) {
  return state.profiles.find((profile) => profile.id === id);
}

function activeProfile() {
  return profileById(state.activeId) || state.profiles[0];
}

function allSectors() {
  return ["All", ...new Set(profileTemplates.map((profile) => profile.sector))];
}

function allStages() {
  return ["All", ...new Set(profileTemplates.map((profile) => profile.stage))];
}

function filteredProfiles() {
  const query = state.query.trim().toLowerCase();
  return state.profiles.filter((profile) => {
    const matchesQuery =
      !query ||
      [
        profile.name,
        profile.oneLiner,
        profile.sector,
        profile.stage,
        profile.geography,
        profile.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesSector = state.sector === "All" || profile.sector === state.sector;
    const matchesStage = state.stage === "All" || profile.stage === state.stage;
    return matchesQuery && matchesSector && matchesStage;
  });
}

function computeReadiness(profile, lensKey = state.lens) {
  const lens = lensConfig[lensKey];
  const evidenceCount = countList(profile.evidence);
  const riskCount = countList(profile.risks);
  const missingCount = countList(profile.missing);
  const filledCore = [
    profile.oneLiner,
    profile.problem,
    profile.customer,
    profile.model,
    profile.useOfFunds,
    profile.ask,
    profile.ip,
    profile.nextStep,
    profile.metrics.revenue,
    profile.metrics.runway,
    profile.metrics.grossMargin,
    profile.metrics.traction,
    profile.regulatory.note,
    profile.transition.note,
  ];

  const completeness = clamp(Math.round((filledCore.filter(isPresent).length / filledCore.length) * 100), 24, 100);
  const evidence =
    clamp(
      Math.round(
        18 +
          evidenceCount * 11 +
          profile.trl * 3 +
          metricBonus(profile.metrics.revenue, ["ARR", "MRR", "revenue", "fees"], 10) +
          metricBonus(profile.metrics.traction, ["customer", "contract", "pilot", "LOI", "MW", "clinic", "factory"], 8)
      ),
      18,
      96
    );
  const narrative =
    clamp(
      Math.round(
        20 +
          presencePoints([profile.oneLiner, profile.problem, profile.customer, profile.model, profile.useOfFunds, profile.ask, profile.nextStep], 10) +
          metricBonus(profile.metrics.traction, ["ARR", "MRR", "pilot", "LOI", "live"], 6)
      ),
      22,
      96
    );
  const diligence =
    clamp(
      Math.round(
        28 +
          presencePoints([profile.ip, profile.regulatory.note, profile.transition.note], 9) +
          Math.min(18, riskCount * 4) +
          Math.min(12, missingCount * 2) -
          Math.max(0, missingCount - 4) * 4
      ),
      18,
      94
    );
  const exposure =
    clamp(
      Math.round(
        24 +
          levelScore(profile.regulatory.level) * 4 +
          levelScore(profile.transition.level) * 4 +
          presencePoints([profile.regulatory.character, profile.regulatory.note, profile.transition.character, profile.transition.note], 8) +
          metricBonus(profile.ip, ["patent", "trade secret", "assigned", "FTO"], 8)
      ),
      22,
      96
    );

  const weighted = Math.round(
    completeness * lens.weights.completeness +
      evidence * lens.weights.evidence +
      narrative * lens.weights.narrative +
      diligence * lens.weights.diligence +
      exposure * lens.weights.exposure
  );

  const overall = clamp(weighted, 20, 96);
  const status = overall >= 80 ? "Ready to circulate" : overall >= 64 ? "Sharpen before outreach" : overall >= 48 ? "Needs another pass" : "Still too rough";

  const strongSignals = [
    evidenceCount >= 3 ? `${evidenceCount} evidence points already visible.` : "",
    isPresent(profile.metrics.traction) ? `Traction is stated clearly: ${profile.metrics.traction}.` : "",
    isPresent(profile.ip) ? "IP position is at least partly articulated." : "",
    isPresent(profile.regulatory.note) ? "Regulatory exposure is explained instead of hidden." : "",
    isPresent(profile.transition.note) ? "Transition exposure is framed with operational nuance." : "",
  ].filter(Boolean);

  const blockers = [
    ...profile.missing.slice(0, 3).map((item) => `Missing: ${item}.`),
    !isPresent(profile.problem) ? "The problem statement still needs to be made concrete." : "",
    !isPresent(profile.customer) ? "The customer or buyer is not yet explicit." : "",
    !isPresent(profile.useOfFunds) ? "Use of funds is still too vague." : "",
  ].filter(Boolean);

  const moduleScores = [
    {
      label: "Profile completeness",
      value: completeness,
      note: "How much of the core company record is already present.",
    },
    {
      label: "Evidence depth",
      value: evidence,
      note: "What can already be shown, not just claimed.",
    },
    {
      label: "Narrative clarity",
      value: narrative,
      note: "How clearly the company explains problem, customer, ask, and next step.",
    },
    {
      label: "Diligence coverage",
      value: diligence,
      note: "Whether risks, missing items, and ownership questions are visible enough for a serious conversation.",
    },
    {
      label: "Exposure framing",
      value: exposure,
      note: "How well regulatory, transition, and IP context is translated into an actionable story.",
    },
  ];

  return {
    overall,
    status,
    moduleScores,
    strongSignals,
    blockers,
  };
}

function computeBestLens(profile) {
  const ranked = Object.entries(lensConfig)
    .map(([key, config]) => ({ key, label: config.label, readiness: computeReadiness(profile, key) }))
    .sort((a, b) => b.readiness.overall - a.readiness.overall);
  return ranked[0];
}

function render() {
  const profile = activeProfile();
  const readiness = computeReadiness(profile);
  const bestLens = computeBestLens(profile);

  updateHash();

  app.innerHTML = `
    <div class="shell">
      ${renderTopbar(profile, readiness)}
      <main id="main" class="page">
        ${renderHero(profile, readiness, bestLens)}
        <section class="workspace">
          ${renderNavigator()}
          ${renderStudio(profile, readiness)}
          ${renderReadinessRail(profile, readiness, bestLens)}
        </section>
      </main>
    </div>
  `;
}

function renderTopbar(profile, readiness) {
  const lens = lensConfig[state.lens];
  return `
    <header class="topbar">
      <div class="topbar__brand">
        <img src="assets/logos/OpenEconomics-LOGO WHITE.svg" alt="OpenEconomics" />
        <div>
          <p class="eyebrow">Startup submission room</p>
          <h1>Foundry</h1>
        </div>
      </div>
      <div class="topbar__status">
        <span class="status-pill">${lens.short}</span>
        <span class="status-pill status-pill--accent">${readiness.overall}/100</span>
        <span class="status-pill">Local-only edits</span>
      </div>
      <div class="topbar__actions">
        <button class="button button--ghost" type="button" data-action="reset-profile">Restore active template</button>
        <button class="button" type="button" data-action="copy-memo">Copy memo</button>
      </div>
    </header>
  `;
}

function renderHero(profile, readiness, bestLens) {
  return `
    <section class="hero panel">
      <div class="hero__copy">
        <p class="eyebrow">From raw company notes to a cleaner room</p>
        <h2>Build the version of ${profile.name} that investors, partners, and programs can actually work with.</h2>
        <p class="hero-copy">
          The platform is now a founder-side preparation room. The goal is not to rank a company; it is to make the startup's own
          information more structured, more explainable, and easier to circulate based on the current profile.
        </p>
      </div>
      <div class="hero-ledger" aria-label="Readiness summary">
        <div class="hero-ledger__item">
          <strong>${readiness.overall}</strong>
          <span>Submission readiness</span>
          <small>${readiness.status}</small>
        </div>
        <div class="hero-ledger__item">
          <strong>${countList(profile.evidence)}</strong>
          <span>Evidence items</span>
          <small>Proof points currently visible in the room</small>
        </div>
        <div class="hero-ledger__item">
          <strong>${countList(profile.missing)}</strong>
          <span>Open gaps</span>
          <small>Explicitly surfaced instead of hidden</small>
        </div>
        <div class="hero-ledger__item">
          <strong>${bestLens.label}</strong>
          <span>Strongest lane</span>
          <small>Based on the current evidence mix and company shape</small>
        </div>
      </div>
    </section>
  `;
}

function renderNavigator() {
  const profiles = filteredProfiles();
  return `
    <aside class="navigator panel">
      <div class="panel-heading">
        <p class="eyebrow">Company roster</p>
        <h2>Profile library</h2>
      </div>

      <div class="field">
        <label for="profile-query">Search companies</label>
        <input id="profile-query" class="text-input" type="search" placeholder="Name, sector, geography" value="${escapeHtml(state.query)}" data-input="query" />
      </div>

      <div class="field-grid">
        <div class="field">
          <label for="sector-filter">Sector</label>
          <select id="sector-filter" class="select-input" data-input="sector">
            ${allSectors()
              .map((sector) => `<option value="${escapeAttr(sector)}" ${state.sector === sector ? "selected" : ""}>${escapeHtml(sector)}</option>`)
              .join("")}
          </select>
        </div>
        <div class="field">
          <label for="stage-filter">Stage</label>
          <select id="stage-filter" class="select-input" data-input="stage">
            ${allStages()
              .map((stage) => `<option value="${escapeAttr(stage)}" ${state.stage === stage ? "selected" : ""}>${escapeHtml(stage)}</option>`)
              .join("")}
          </select>
        </div>
      </div>

      <div class="panel-heading panel-heading--compact">
        <p class="eyebrow">${lensConfig[state.lens].eyebrow}</p>
        <h2>Submission lens</h2>
      </div>

      <div class="lens-list" role="tablist" aria-label="Submission lenses">
        ${Object.entries(lensConfig)
          .map(
            ([key, lens]) => `
              <button
                class="lens-toggle ${state.lens === key ? "is-active" : ""}"
                type="button"
                data-action="set-lens"
                data-lens="${key}"
              >
                <strong>${lens.label}</strong>
                <span>${lens.intro}</span>
              </button>
            `
          )
          .join("")}
      </div>

      <div class="panel-heading panel-heading--compact">
        <p class="eyebrow">Editable templates</p>
        <h2>${profiles.length} profiles</h2>
      </div>

      <div class="profile-list" role="list">
        ${profiles
          .map((profile) => {
            const readiness = computeReadiness(profile);
            return `
              <button
                class="profile-item ${profile.id === state.activeId ? "is-active" : ""}"
                type="button"
                data-action="open-profile"
                data-id="${profile.id}"
              >
                <span class="profile-item__head">
                  <strong>${escapeHtml(profile.name)}</strong>
                  <span>${readiness.overall}/100</span>
                </span>
                <span class="profile-item__meta">${escapeHtml(profile.sector)} / ${escapeHtml(profile.stage)} / TRL ${profile.trl}</span>
                <span class="profile-item__body">${escapeHtml(profile.oneLiner)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </aside>
  `;
}

function renderStudio(profile, readiness) {
  return `
    <section class="studio">
      <div class="studio__header panel">
        <div class="studio__identity">
          <p class="eyebrow">Active company</p>
          <h2>${escapeHtml(profile.name)}</h2>
          <p>${escapeHtml(profile.oneLiner)}</p>
        </div>
        <div class="studio__facts">
          ${renderFact("Sector", profile.sector)}
          ${renderFact("Stage", profile.stage)}
          ${renderFact("Geography", profile.geography)}
          ${renderFact("TRL", String(profile.trl))}
          ${renderFact("Ask", profile.ask)}
        </div>
      </div>

      <div class="tabs panel">
        <div class="tabs__bar" role="tablist" aria-label="Workspace tabs">
          ${tabs
            .map(
              ([key, label]) => `
                <button
                  class="tab-button ${state.tab === key ? "is-active" : ""}"
                  type="button"
                  data-action="set-tab"
                  data-tab="${key}"
                  role="tab"
                  aria-selected="${state.tab === key ? "true" : "false"}"
                >
                  ${label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="tabs__body">
          ${renderTabContent(profile, readiness)}
        </div>
      </div>
    </section>
  `;
}

function renderTabContent(profile, readiness) {
  if (state.tab === "intake") return renderIntakeTab(profile);
  if (state.tab === "evidence") return renderEvidenceTab(profile, readiness);
  if (state.tab === "memo") return renderMemoTab(profile, readiness);
  return renderWorkspaceTab(profile, readiness);
}

function renderWorkspaceTab(profile, readiness) {
  return `
    <div class="content-grid">
      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Narrative</p>
          <h3>What the company is trying to make legible</h3>
        </div>
        <div class="key-lines">
          <article>
            <span>Problem</span>
            <p>${escapeHtml(profile.problem)}</p>
          </article>
          <article>
            <span>Customer</span>
            <p>${escapeHtml(profile.customer)}</p>
          </article>
          <article>
            <span>Business model</span>
            <p>${escapeHtml(profile.model)}</p>
          </article>
          <article>
            <span>Use of funds</span>
            <p>${escapeHtml(profile.useOfFunds)}</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Commercial shape</p>
          <h3>Core operating facts already in the profile</h3>
        </div>
        <div class="metric-grid">
          ${renderMetric("Revenue", profile.metrics.revenue)}
          ${renderMetric("Runway", profile.metrics.runway)}
          ${renderMetric("Gross margin", profile.metrics.grossMargin)}
          ${renderMetric("Traction", profile.metrics.traction)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Exposure framing</p>
          <h3>Regulatory and transition context</h3>
        </div>
        <div class="exposure-grid">
          ${renderExposureCard("Regulatory", profile.regulatory)}
          ${renderExposureCard("Transition", profile.transition)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Current prep signal</p>
          <h3>What works and what still needs work</h3>
        </div>
        <div class="two-column-list">
          <div>
            <span>Strongest visible signals</span>
            <ul class="clean-list">${readiness.strongSignals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
          <div>
            <span>Main blockers</span>
            <ul class="clean-list muted-list">${readiness.blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderIntakeTab(profile) {
  return `
    <div class="form-layout">
      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Core company record</p>
          <h3>Edit the narrative fields founders actually need</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("One-liner", "oneLiner", profile.oneLiner)}
          ${renderTextField("Problem statement", "problem", profile.problem, "textarea")}
          ${renderTextField("Customer and buyer", "customer", profile.customer, "textarea")}
          ${renderTextField("Business model", "model", profile.model, "textarea")}
          ${renderTextField("Funding ask", "ask", profile.ask)}
          ${renderTextField("Use of funds", "useOfFunds", profile.useOfFunds, "textarea")}
          ${renderTextField("IP position", "ip", profile.ip, "textarea")}
          ${renderTextField("Suggested next prep step", "nextStep", profile.nextStep, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Commercial signals</p>
          <h3>Keep the hard facts close to the story</h3>
        </div>
        <div class="metric-form">
          ${renderMetricField("Revenue", "revenue", profile.metrics.revenue)}
          ${renderMetricField("Runway", "runway", profile.metrics.runway)}
          ${renderMetricField("Gross margin", "grossMargin", profile.metrics.grossMargin)}
          ${renderMetricField("Traction", "traction", profile.metrics.traction)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Interpretation</p>
          <h3>Explain exposure instead of letting it be guessed</h3>
        </div>
        <div class="form-grid">
          ${renderSelectField("Regulatory level", "regulatory.level", profile.regulatory.level, ["Low", "Medium", "High"])}
          ${renderTextField("Regulatory character", "regulatory.character", profile.regulatory.character)}
          ${renderTextField("Regulatory note", "regulatory.note", profile.regulatory.note, "textarea")}
          ${renderSelectField("Transition level", "transition.level", profile.transition.level, ["Low", "Medium", "High"])}
          ${renderTextField("Transition character", "transition.character", profile.transition.character)}
          ${renderTextField("Transition note", "transition.note", profile.transition.note, "textarea")}
        </div>
      </section>
    </div>
  `;
}

function renderEvidenceTab(profile, readiness) {
  return `
    <div class="content-grid">
      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Evidence room</p>
          <h3>Line-by-line proof and what still needs to exist</h3>
        </div>
        <div class="evidence-columns">
          ${renderTextareaField("Evidence available", "evidence", profile.evidence)}
          ${renderTextareaField("Risks to state openly", "risks", profile.risks)}
          ${renderTextareaField("Missing diligence or prep items", "missing", profile.missing)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${lensConfig[state.lens].eyebrow}</p>
          <h3>Lens-specific preparation prompts</h3>
        </div>
        <ul class="clean-list prompt-list">
          ${lensConfig[state.lens].checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Explainability</p>
          <h3>Why this room currently reads the way it does</h3>
        </div>
        <div class="score-list">
          ${readiness.moduleScores
            .map(
              (score) => `
                <article class="score-row">
                  <div>
                    <strong>${escapeHtml(score.label)}</strong>
                    <p>${escapeHtml(score.note)}</p>
                  </div>
                  <span>${score.value}/100</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderMemoTab(profile, readiness) {
  const memo = generateMemo(profile, readiness);
  return `
    <section class="memo">
      <div class="memo__header">
        <div>
          <p class="eyebrow">Generated output</p>
          <h3>${lensConfig[state.lens].label}</h3>
        </div>
        <button class="button" type="button" data-action="copy-memo">Copy memo</button>
      </div>
      <div class="memo__body" id="memo-text">
        ${memo
          .split("\n")
          .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
          .join("")}
      </div>
      <p class="disclaimer">
        Based on the current profile only. This is a founder-side preparation note, not financing advice and not a substitute for diligence.
      </p>
    </section>
  `;
}

function renderReadinessRail(profile, readiness, bestLens) {
  return `
    <aside class="rail panel">
      <div class="panel-heading">
        <p class="eyebrow">Readiness board</p>
        <h2>${readiness.status}</h2>
      </div>

      <div class="rail-score">
        <strong>${readiness.overall}</strong>
        <span>${lensConfig[state.lens].label}</span>
      </div>

      <div class="bar-list">
        ${readiness.moduleScores
          .map(
            (score) => `
              <div class="bar-block">
                <div class="bar-block__head">
                  <span>${escapeHtml(score.label)}</span>
                  <strong>${score.value}</strong>
                </div>
                <div class="progress" aria-hidden="true"><span style="width:${score.value}%"></span></div>
                <p>${escapeHtml(score.note)}</p>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="rail-section">
        <span>Suggested lane</span>
        <p>${escapeHtml(bestLens.label)} currently reads strongest for ${profile.name}.</p>
      </div>

      <div class="rail-section">
        <span>Immediate blockers</span>
        <ul class="clean-list muted-list">${readiness.blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>

      <div class="rail-section">
        <span>Why this is different</span>
        <p>
          Regulatory and transition exposure are not treated as automatic negatives here. The platform asks the startup to interpret them as demand tailwinds,
          operational burdens, market-access barriers, or defensibility signals depending on the case.
        </p>
      </div>
    </aside>
  `;
}

function renderFact(label, value) {
  return `
    <div class="fact">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function renderMetric(label, value) {
  return `
    <div class="metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function renderExposureCard(label, exposure) {
  return `
    <article class="exposure-card">
      <span>${escapeHtml(label)} / ${escapeHtml(exposure.level)}</span>
      <strong>${escapeHtml(exposure.character)}</strong>
      <p>${escapeHtml(exposure.note)}</p>
    </article>
  `;
}

function renderTextField(label, field, value, kind = "text") {
  if (kind === "textarea") {
    return `
      <label class="field field--wide">
        <span>${escapeHtml(label)}</span>
        <textarea class="textarea-input" data-field="${field}" rows="4">${escapeHtml(value)}</textarea>
      </label>
    `;
  }
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <input class="text-input" type="text" data-field="${field}" value="${escapeAttr(value)}" />
    </label>
  `;
}

function renderSelectField(label, field, value, options) {
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <select class="select-input" data-field="${field}">
        ${options.map((option) => `<option value="${escapeAttr(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderMetricField(label, key, value) {
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <input class="text-input" type="text" data-metric="${key}" value="${escapeAttr(value)}" />
    </label>
  `;
}

function renderTextareaField(label, field, values) {
  return `
    <label class="field field--wide">
      <span>${escapeHtml(label)}</span>
      <textarea class="textarea-input textarea-input--tall" data-list="${field}" rows="7">${escapeHtml(values.join("\n"))}</textarea>
    </label>
  `;
}

function generateMemo(profile, readiness) {
  const lens = lensConfig[state.lens];
  const bestLens = computeBestLens(profile);
  const firstSignal = readiness.strongSignals[0] || "The profile already contains a usable starting point.";
  const firstBlocker = readiness.blockers[0] || "No blocker is currently dominating the room.";
  return [
    `${profile.name} is a ${profile.stage.toLowerCase()} ${profile.sector.toLowerCase()} company in ${profile.geography}. Under the ${lens.label.toLowerCase()} lens, the current submission readiness reads at ${readiness.overall}/100 and is best described as ${readiness.status.toLowerCase()}.`,
    `Core company story: ${profile.oneLiner} The stated customer is ${profile.customer.toLowerCase()} and the current ask is ${profile.ask.toLowerCase()}, with funds intended for ${profile.useOfFunds.toLowerCase()}.`,
    `Evidence available: ${profile.evidence.join("; ")}. Current traction reads as ${profile.metrics.traction.toLowerCase()} and the room already benefits from ${firstSignal.toLowerCase()}.`,
    `Main item to sharpen next: ${firstBlocker.replace(/^Missing:\s*/i, "").replace(/\.$/, "")}. The suggested next preparation step is to ${profile.nextStep.charAt(0).toLowerCase() + profile.nextStep.slice(1)}.`,
    `Exposure framing: regulatory context is ${profile.regulatory.level.toLowerCase()} and described as ${profile.regulatory.character.toLowerCase()}, while transition context is ${profile.transition.level.toLowerCase()} and described as ${profile.transition.character.toLowerCase()}. The strongest downstream lane based on the current profile is ${bestLens.label.toLowerCase()}.`,
    `This note is based on the current profile only and should be used as a founder-side preparation output before outreach, not as financing advice or a substitute for third-party diligence.`,
  ].join("\n");
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "open-profile") {
    state.activeId = target.dataset.id;
    state.tab = "workspace";
    render();
    return;
  }

  if (action === "set-lens") {
    state.lens = target.dataset.lens;
    render();
    return;
  }

  if (action === "set-tab") {
    state.tab = target.dataset.tab;
    render();
    return;
  }

  if (action === "reset-profile") {
    resetActiveProfile();
    render();
    return;
  }

  if (action === "copy-memo") {
    copyMemo();
  }
}

function handleInput(event) {
  const { target } = event;

  if (target.dataset.input === "query") {
    state.query = target.value;
    render();
    return;
  }

  if (target.dataset.input === "sector") {
    state.sector = target.value;
    render();
    return;
  }

  if (target.dataset.input === "stage") {
    state.stage = target.value;
    render();
    return;
  }

  if (target.dataset.field) {
    writeField(target.dataset.field, target.value);
    persistProfiles();
    return;
  }

  if (target.dataset.metric) {
    activeProfile().metrics[target.dataset.metric] = target.value;
    persistProfiles();
    return;
  }

  if (target.dataset.list) {
    activeProfile()[target.dataset.list] = splitLines(target.value);
    persistProfiles();
  }
}

function handleChange(event) {
  const { target } = event;
  if (target.dataset.field || target.dataset.metric || target.dataset.list) {
    render();
  }
}

function writeField(path, value) {
  const profile = activeProfile();
  const parts = path.split(".");
  let cursor = profile;
  for (let index = 0; index < parts.length - 1; index += 1) {
    cursor = cursor[parts[index]];
  }
  cursor[parts.at(-1)] = value;
}

function resetActiveProfile() {
  const template = profileTemplates.find((profile) => profile.id === state.activeId);
  const index = state.profiles.findIndex((profile) => profile.id === state.activeId);
  if (!template || index < 0) return;
  state.profiles[index] = structuredClone(template);
  persistProfiles();
}

async function copyMemo() {
  const text = generateMemo(activeProfile(), computeReadiness(activeProfile()));
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

function metricBonus(text, keywords, points) {
  if (!isPresent(text)) return 0;
  const normalized = String(text).toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword.toLowerCase())) ? points : Math.round(points / 2);
}

function presencePoints(values, pointsPerField) {
  return values.filter(isPresent).length * pointsPerField;
}

function levelScore(level) {
  if (level === "High") return 3;
  if (level === "Medium") return 2;
  return 1;
}

function countList(values) {
  return Array.isArray(values) ? values.filter((value) => isPresent(value)).length : 0;
}

function splitLines(value) {
  return String(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function isPresent(value) {
  return typeof value === "string" ? value.trim().length > 0 : value !== null && value !== undefined;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}
