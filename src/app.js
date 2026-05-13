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
  {
    id: "heliochain",
    name: "HelioChain Storage",
    sector: "Energy",
    stage: "Series A",
    geography: "Portugal",
    trl: 8,
    ticket: 3.4,
    ask: "EUR 3.4M Series A",
    useOfFunds: "Battery pilot deployments, grid software, and utility certification.",
    model: "Battery storage orchestration software with shared savings on flexibility revenue.",
    maturity: "Commercial pilot",
    regulatory: {
      level: "High",
      character: "Market access and operating burden",
      note: "Grid connection and market participation rules matter, but they also create switching barriers.",
    },
    transition: {
      level: "High",
      character: "Strong tailwind",
      note: "Renewables intermittency and peak-price volatility support storage demand.",
    },
    evidence: ["Two utility pilots", "16MW under management", "Revenue share signed with one aggregator"],
    ip: "Dispatch optimizer and site models proprietary; hardware sourced from certified suppliers.",
    risks: ["Grid rule changes", "Capital intensity", "Asset performance guarantees"],
    rationale: [
      "Clear transition tailwind with visible utility engagement.",
      "Evidence is pilot-level but commercial in nature.",
      "Regulatory burden is a market-entry barrier as much as an execution risk.",
    ],
    missing: ["Annualized revenue per site", "Warranty exposure", "Grid-code approval path by market"],
    nextStep: "Review utility economics and the bankability of the storage model.",
    metrics: { revenue: "Pilot revenue", runway: "10 months", grossMargin: "54%", traction: "16MW pilots" },
    tags: ["energy", "storage", "grid"],
  },
  {
    id: "rostera",
    name: "Rostera Robotics",
    sector: "Mobility",
    stage: "Seed",
    geography: "Netherlands",
    trl: 7,
    ticket: 1.9,
    ask: "EUR 1.9M seed",
    useOfFunds: "Dockside trials, navigation hardware, and service engineers.",
    model: "Robotics-as-a-service for port and warehouse tugs.",
    maturity: "Dockside pilot",
    regulatory: {
      level: "Medium",
      character: "Operational burden",
      note: "Safety and labor coordination slow rollout, but approved systems are hard to displace.",
    },
    transition: {
      level: "Medium",
      character: "Efficiency tailwind",
      note: "Electrification and logistics efficiency are supportive but not the only demand driver.",
    },
    evidence: ["One dockside pilot", "98% navigation uptime", "Letter of intent from logistics operator"],
    ip: "Control stack proprietary; hardware integration remains partially outsourced.",
    risks: ["Site deployment complexity", "Maintenance load", "Customer concentration"],
    rationale: [
      "Real-world deployment gives better signal than a pure lab-stage robotics deal.",
      "Operational diligence is more important than a pure tech diligence frame.",
      "Transition exposure supports the productivity thesis.",
    ],
    missing: ["Service cost by site", "Pilot-to-contract conversion terms", "Fleet expansion roadmap"],
    nextStep: "Assess deployment economics and site readiness before scaling assumptions.",
    metrics: { revenue: "EUR 90k pilot ARR", runway: "8 months", grossMargin: "39%", traction: "1 pilot" },
    tags: ["robotics", "logistics", "industrial"],
  },
  {
    id: "lumenloop",
    name: "LumenLoop Lighting",
    sector: "Circular economy",
    stage: "Series A",
    geography: "France",
    trl: 8,
    ticket: 2.8,
    ask: "EUR 2.8M Series A",
    useOfFunds: "Retail rollout, refurbishment operations, and supply agreements.",
    model: "Refurbish-and-lease lighting hardware to commercial property owners.",
    maturity: "Commercial rollout",
    regulatory: {
      level: "Low",
      character: "Light burden",
      note: "Low direct regulation, but municipal and building standards can affect procurement.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Circular procurement targets and energy-efficiency mandates increase buyer interest.",
    },
    evidence: ["EUR 410k ARR", "12 building contracts", "Refurbishment cycle time under 9 days"],
    ip: "Refurbishment workflow and remanufacturing process proprietary.",
    risks: ["Reverse logistics", "Inventory management", "Contract duration"],
    rationale: [
      "Commercial traction is tangible and recurring.",
      "Transition exposure is a budget driver rather than a penalty.",
      "The model sits between hardware operations and recurring services.",
    ],
    missing: ["Return rate by cohort", "Service margin after logistics", "Building-owner renewal history"],
    nextStep: "Check logistics discipline and retention across contract renewals.",
    metrics: { revenue: "EUR 410k ARR", runway: "11 months", grossMargin: "67%", traction: "12 contracts" },
    tags: ["circular", "lighting", "property"],
  },
  {
    id: "northstack",
    name: "NorthStack Compute",
    sector: "AI/data infrastructure",
    stage: "Seed",
    geography: "Ireland",
    trl: 8,
    ticket: 4.1,
    ask: "EUR 4.1M seed extension",
    useOfFunds: "Data-center partnerships, customer onboarding, and compliance.",
    model: "Private inference and secure vector search for regulated enterprises.",
    maturity: "Live infrastructure",
    regulatory: {
      level: "High",
      character: "Demand tailwind",
      note: "Data sovereignty and AI governance rules support private deployment demand.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Energy intensity should still be monitored as compute scales.",
    },
    evidence: ["EUR 58k MRR", "19 customers", "Private cloud deployment with two banks"],
    ip: "Orchestration layer proprietary; defensibility increases with integration depth.",
    risks: ["Platform dependency", "Security proof burden", "Capacity planning"],
    rationale: [
      "Evidence is commercial and directly tied to regulated customers.",
      "Regulatory exposure is more of a demand tailwind than a drag.",
      "The main diligence question is differentiation versus hyperscaler-native alternatives.",
    ],
    missing: ["Net revenue retention", "Data-center contract terms", "Customer concentration by vertical"],
    nextStep: "Inspect customer retention and infrastructure economics by deployment type.",
    metrics: { revenue: "EUR 58k MRR", runway: "12 months", grossMargin: "73%", traction: "19 customers" },
    tags: ["ai", "infra", "regulated"],
  },
  {
    id: "marinaos",
    name: "MarinaOS",
    sector: "Maritime",
    stage: "Series A",
    geography: "Spain",
    trl: 7,
    ticket: 2.4,
    ask: "EUR 2.4M Series A",
    useOfFunds: "Port integrations, emissions reporting, and enterprise sales.",
    model: "Operational software for port scheduling and vessel turnaround optimization.",
    maturity: "Operational pilot",
    regulatory: {
      level: "Medium",
      character: "Demand support with procurement burden",
      note: "Port sustainability reporting supports need, but procurement cycles are slow.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Shipping decarbonization and port efficiency initiatives increase urgency.",
    },
    evidence: ["Three port pilots", "Vessel turnaround reduced 11%", "One national port authority LOI"],
    ip: "Optimization engine proprietary; integrations with port systems are a moat candidate.",
    risks: ["Long procurement cycles", "Integration complexity", "Seasonality in shipping volumes"],
    rationale: [
      "Clear operational value with transition-related demand pull.",
      "Evidence is strong enough to justify deeper diligence.",
      "The route to scale depends on procurement conversion, not just product strength.",
    ],
    missing: ["Pilot conversion rate", "Integration effort per port", "Emission reporting accuracy review"],
    nextStep: "Validate procurement timing and customer expansion after pilot success.",
    metrics: { revenue: "EUR 120k ARR", runway: "9 months", grossMargin: "63%", traction: "3 ports" },
    tags: ["maritime", "software", "operations"],
  },
  {
    id: "eoncrop",
    name: "EonCrop Systems",
    sector: "Agritech",
    stage: "Seed",
    geography: "Italy",
    trl: 6,
    ticket: 1.1,
    ask: "EUR 1.1M seed",
    useOfFunds: "Greenhouse sensors, farmer support, and agronomy validation.",
    model: "Crop optimization subscription sold with field hardware bundles.",
    maturity: "Field trials",
    regulatory: {
      level: "Low",
      character: "Light burden",
      note: "Regulation is not a major barrier, though water policy can support demand.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Climate stress and water scarcity drive stronger demand for optimization tools.",
    },
    evidence: ["84 deployed sensors", "Yield uplift in pilot plots", "Distributor interest in two regions"],
    ip: "Sensor workflow and crop models proprietary; hardware components are off-the-shelf.",
    risks: ["Seasonality", "Farmer adoption friction", "Support intensity"],
    rationale: [
      "Strong climate need with evidence that touches real field usage.",
      "Good fit for investors comfortable with agritech operating complexity.",
      "Transition exposure provides a demand tailwind, not a simple risk penalty.",
    ],
    missing: ["Cohort retention", "Gross margin after agronomy support", "Distributor economics"],
    nextStep: "Review cohort retention and contract conversion after one full season.",
    metrics: { revenue: "EUR 18k MRR seasonal", runway: "7 months", grossMargin: "46%", traction: "84 sensors" },
    tags: ["agritech", "climate", "hardware"],
  },
  {
    id: "pulseforge",
    name: "PulseForge Med",
    sector: "Medtech",
    stage: "Series A",
    geography: "Germany",
    trl: 8,
    ticket: 3.9,
    ask: "EUR 3.9M Series A",
    useOfFunds: "Clinical studies, MDR submissions, and commercial operations.",
    model: "Hospital planning software plus single-use adjunct device.",
    maturity: "Clinical pilot",
    regulatory: {
      level: "High",
      character: "Burden and defensibility",
      note: "MDR approval is demanding, but clearance can support strong buyer trust and defensibility.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition policy is not central to the thesis.",
    },
    evidence: ["220 patient pilot", "Two hospital procurement conversations", "Clinical advisory board"],
    ip: "Device workflow and software stack partly proprietary; patent family pending.",
    risks: ["Clinical endpoint sufficiency", "Procurement timelines", "Regulatory cost"],
    rationale: [
      "Clinical evidence is more advanced than typical pre-seed medtech.",
      "The key issue is reimbursement and approval pathway clarity.",
      "Regulation is a moat question as much as a burden question.",
    ],
    missing: ["MDR timeline", "Unit economics at scale", "Health-economic model"],
    nextStep: "Review clinical endpoints and reimbursement assumptions before prioritization.",
    metrics: { revenue: "Pilot contracts", runway: "10 months", grossMargin: "Modeled 71%", traction: "2 hospitals" },
    tags: ["medtech", "regulated", "clinical"],
  },
  {
    id: "optishelf",
    name: "OptiShelf Commerce",
    sector: "Retail tech",
    stage: "Seed",
    geography: "France",
    trl: 9,
    ticket: 1.7,
    ask: "EUR 1.7M seed",
    useOfFunds: "Sales expansion, integrations, and customer success.",
    model: "Shelf analytics and pricing optimization sold as SaaS to mid-market retailers.",
    maturity: "Scaling SaaS",
    regulatory: {
      level: "Low",
      character: "Limited burden",
      note: "Regulation is not the main driver, but data handling remains relevant.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition exposure is not central to the thesis.",
    },
    evidence: ["EUR 96k MRR", "41 stores live", "Net retention 114%"],
    ip: "Pricing and shelf optimization engine proprietary; switching cost builds with data history.",
    risks: ["Retail churn", "Integration load", "Price compression"],
    rationale: [
      "One of the stronger commercial SaaS cases in the set.",
      "Evidence is tangible and recurring.",
      "The diligence focus should be retention and scaling economics.",
    ],
    missing: ["Cohort retention by retailer size", "Implementation hours", "Churn by region"],
    nextStep: "Validate retention quality and implementation efficiency across cohorts.",
    metrics: { revenue: "EUR 96k MRR", runway: "13 months", grossMargin: "79%", traction: "41 stores" },
    tags: ["retail", "saas", "analytics"],
  },
  {
    id: "cirruscan",
    name: "CirrusCan Diagnostics",
    sector: "Health tech",
    stage: "Seed",
    geography: "Denmark",
    trl: 7,
    ticket: 1.5,
    ask: "EUR 1.5M seed",
    useOfFunds: "Data collection, clinical workflow integration, and reimbursement studies.",
    model: "AI-assisted diagnostics workflow for outpatient clinics.",
    maturity: "Clinical deployment",
    regulatory: {
      level: "High",
      character: "Burden with credibility upside",
      note: "Clinical requirements are material, but approval would support trust and adoption.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition exposure is not a core thesis element.",
    },
    evidence: ["1800 scans processed", "Two clinic deployments", "Clinician reference panel"],
    ip: "Model tuning and workflow integration proprietary; clinical data rights are critical.",
    risks: ["Clinical validation", "Data access", "Workflow adoption"],
    rationale: [
      "Evidence is closer to real usage than typical seed medtech.",
      "Main diligence concern is the robustness of validation and data rights.",
      "Regulation is a key part of the moat story.",
    ],
    missing: ["Bias audit", "Workflow adoption metrics", "Reimbursement path"],
    nextStep: "Review data governance and clinic utilization before deeper diligence.",
    metrics: { revenue: "EUR 24k MRR", runway: "8 months", grossMargin: "74%", traction: "2 clinics" },
    tags: ["health", "ai", "diagnostics"],
  },
  {
    id: "tidalgrid",
    name: "TidalGrid Flex",
    sector: "Energy",
    stage: "Seed",
    geography: "Belgium",
    trl: 7,
    ticket: 2.1,
    ask: "EUR 2.1M seed",
    useOfFunds: "Utility integrations, market access, and commercial pilots.",
    model: "Flexibility market software for aggregated industrial loads.",
    maturity: "Utility pilot",
    regulatory: {
      level: "High",
      character: "Market access and defensibility",
      note: "Energy-market rules shape revenue capture and can create a barrier to weak entrants.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Renewables volatility and demand response economics support the use case.",
    },
    evidence: ["Two utility pilots", "32 industrial loads connected", "Dispatch simulation completed"],
    ip: "Optimization algorithms proprietary; market access relationships are important.",
    risks: ["Rule changes", "Partner dependence", "Revenue timing"],
    rationale: [
      "Clear transition logic and a useful utility-driven buyer case.",
      "Operational diligence should focus on market design exposure.",
      "The opportunity depends on repeatable dispatch economics.",
    ],
    missing: ["Revenue by dispatch event", "Utility contract terms", "Load aggregation economics"],
    nextStep: "Validate revenue capture and regulatory dependence by geography.",
    metrics: { revenue: "Pilot revenue", runway: "9 months", grossMargin: "56%", traction: "32 loads" },
    tags: ["energy", "grid", "software"],
  },
  {
    id: "biobrick",
    name: "BioBrick Materials",
    sector: "Deep tech materials",
    stage: "Pre-seed",
    geography: "Switzerland",
    trl: 4,
    ticket: 1.0,
    ask: "EUR 1.0M pre-seed",
    useOfFunds: "Lab validation, prototype tooling, and IP prosecution.",
    model: "Bio-based structural materials for industrial applications.",
    maturity: "Lab prototype",
    regulatory: {
      level: "Low",
      character: "Limited burden",
      note: "Compliance matters but is not the key market-access hurdle.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Materials decarbonization and substitution pressure support the thesis.",
    },
    evidence: ["Lab tensile tests", "One industrial design partner", "Grant-funded validation"],
    ip: "Early patent filing on composite formulation; FTO not yet complete.",
    risks: ["Low TRL", "Scale-up yield", "FTO uncertainty"],
    rationale: [
      "High optionality but still at an early technical stage.",
      "Good fit only for investors with deep-tech patience.",
      "Transition tailwind is credible if scale-up works.",
    ],
    missing: ["FTO review", "Pilot production economics", "Industrial partner commitment"],
    nextStep: "Route to technical diligence and IP review before commercial screening.",
    metrics: { revenue: "Pre-revenue", runway: "6 months", grossMargin: "Not proven", traction: "1 partner" },
    tags: ["materials", "deep tech", "bio-based"],
  },
  {
    id: "spherelab",
    name: "SphereLab Compute",
    sector: "AI/data infrastructure",
    stage: "Series A",
    geography: "Germany",
    trl: 9,
    ticket: 5.0,
    ask: "EUR 5.0M Series A",
    useOfFunds: "Sales expansion, infrastructure capacity, and compliance certifications.",
    model: "Enterprise AI orchestration with private deployment options.",
    maturity: "Scaling SaaS",
    regulatory: {
      level: "High",
      character: "Demand tailwind",
      note: "Data sovereignty and AI governance rules support private deployment demand.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Energy intensity should be monitored but is not the primary thesis driver.",
    },
    evidence: ["EUR 1.4M ARR", "26 customers", "Two bank deployments"],
    ip: "Workflow orchestration and security posture proprietary; integration depth matters.",
    risks: ["Crowded market", "Infrastructure cost", "Customer concentration"],
    rationale: [
      "Commercial evidence is strong and the product addresses a real enterprise constraint.",
      "The challenge is differentiation and capital intensity.",
      "Regulatory demand is a genuine tailwind in the current market.",
    ],
    missing: ["CAC payback by segment", "Security audit details", "Customer cohort concentration"],
    nextStep: "Pressure-test market differentiation and infra economics before scaling.",
    metrics: { revenue: "EUR 1.4M ARR", runway: "15 months", grossMargin: "80%", traction: "26 customers" },
    tags: ["ai", "enterprise", "cloud"],
  },
  {
    id: "greenharbor",
    name: "GreenHarbor Systems",
    sector: "Maritime",
    stage: "Seed",
    geography: "Greece",
    trl: 6,
    ticket: 1.6,
    ask: "EUR 1.6M seed",
    useOfFunds: "Port pilots, emissions dashboards, and channel partners.",
    model: "Port emissions and scheduling software for coastal logistics operators.",
    maturity: "Pilot",
    regulatory: {
      level: "Medium",
      character: "Demand support and procurement burden",
      note: "Reporting rules and port efficiency targets can create demand, while procurement stays slow.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Shipping decarbonization and port efficiency programs support adoption.",
    },
    evidence: ["Two port pilots", "Dock turnaround reduced 9%", "One shipping operator LOI"],
    ip: "Optimization logic proprietary; integration depth and domain workflow matter.",
    risks: ["Long procurement cycles", "Integration effort", "Seasonal shipping volumes"],
    rationale: [
      "A credible port-tech thesis with visible pilot usage.",
      "Transition demand is clear, but the sales motion is slow.",
      "Evidence is sufficient to justify diligence, not just watchlisting.",
    ],
    missing: ["Paid pilot conversion", "Integration budget by site", "Emission reporting validation"],
    nextStep: "Review procurement path and pilot conversion mechanics by port authority.",
    metrics: { revenue: "Pilot revenue", runway: "7 months", grossMargin: "58%", traction: "2 pilots" },
    tags: ["maritime", "climate", "software"],
  },
  {
    id: "nanocore",
    name: "NanoCore Films",
    sector: "Deep tech materials",
    stage: "Series A",
    geography: "Austria",
    trl: 7,
    ticket: 2.7,
    ask: "EUR 2.7M Series A",
    useOfFunds: "Pilot production, materials certification, and customer sampling.",
    model: "High-performance films for thermal management in electronics.",
    maturity: "Pilot production",
    regulatory: {
      level: "Low",
      character: "Limited burden",
      note: "Product compliance matters, but the main hurdles are scale and qualification.",
    },
    transition: {
      level: "Medium",
      character: "Efficiency tailwind",
      note: "Lower cooling energy usage can support adoption if performance is proven at scale.",
    },
    evidence: ["Two OEM evaluations", "Independent lab validation", "Pilot production batch completed"],
    ip: "Two patent families filed; FTO partial and ongoing.",
    risks: ["Manufacturing yield", "OEM qualification", "Materials scale-up"],
    rationale: [
      "Technical evidence is stronger than pure research-stage materials deals.",
      "The key diligence question is scale-up and qualification.",
      "Intellectual property appears meaningful but needs review.",
    ],
    missing: ["Pilot yield at volume", "FTO completion", "OEM qualification timeline"],
    nextStep: "Route to technical diligence before commercial prioritization.",
    metrics: { revenue: "Pre-revenue", runway: "10 months", grossMargin: "Not proven", traction: "2 evals" },
    tags: ["materials", "deep tech", "electronics"],
  },
  {
    id: "releaf",
    name: "Releaf Packaging",
    sector: "Circular economy",
    stage: "Seed",
    geography: "Italy",
    trl: 7,
    ticket: 1.3,
    ask: "EUR 1.3M seed",
    useOfFunds: "Pilot line expansion, customer sampling, and certification.",
    model: "Recycled packaging compounds sold to consumer brands.",
    maturity: "Pilot line",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind",
      note: "Packaging regulation and brand sustainability targets support demand, while certification remains relevant.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Circularity mandates and plastic reduction targets are a clear market driver.",
    },
    evidence: ["One brand pilot", "Pilot line completed", "Third-party material test"],
    ip: "Process know-how proprietary; product differentiation depends on feedstock quality and consistency.",
    risks: ["Feedstock variability", "Certification timing", "Brand switching costs"],
    rationale: [
      "Good thematic alignment with circular procurement pressure.",
      "Proof of repeatability is still needed.",
      "The regulatory context is supportive rather than purely restrictive.",
    ],
    missing: ["Pilot economics", "Brand renewal intent", "Feedstock contract terms"],
    nextStep: "Review production consistency and brand conversion before scaling.",
    metrics: { revenue: "Pilot revenue", runway: "7 months", grossMargin: "52%", traction: "1 brand pilot" },
    tags: ["circular", "packaging", "consumer"],
  },
  {
    id: "voltpath",
    name: "VoltPath Charging",
    sector: "Energy",
    stage: "Series A",
    geography: "Spain",
    trl: 8,
    ticket: 4.8,
    ask: "EUR 4.8M Series A",
    useOfFunds: "Site rollouts, hardware procurement, and software improvements.",
    model: "EV fleet charging management with recurring platform fees.",
    maturity: "Commercial rollout",
    regulatory: {
      level: "Medium",
      character: "Operational burden",
      note: "Grid and permitting issues can delay deployment but also limit weaker competition.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Fleet electrification and charging infrastructure buildout underpin demand.",
    },
    evidence: ["EUR 520k ARR", "13 fleet customers", "78 charging sites under management"],
    ip: "Charging orchestration software and fleet analytics proprietary.",
    risks: ["Capex timing", "Site deployment", "Grid connection"],
    rationale: [
      "Commercial traction is meaningful and aligned with fleet electrification.",
      "Deployment and permitting remain the main execution risks.",
      "A useful case for investors comfortable with infrastructure operations.",
    ],
    missing: ["Site-level economics", "Permitting timeline by region", "Fleet churn by cohort"],
    nextStep: "Validate site economics and customer retention across fleet cohorts.",
    metrics: { revenue: "EUR 520k ARR", runway: "11 months", grossMargin: "59%", traction: "13 fleets" },
    tags: ["energy", "mobility", "charging"],
  },
  {
    id: "cargovera",
    name: "CargoVera Logistics",
    sector: "Mobility",
    stage: "Seed",
    geography: "France",
    trl: 8,
    ticket: 2.2,
    ask: "EUR 2.2M seed",
    useOfFunds: "Sales expansion, route optimization, and customer onboarding.",
    model: "SaaS for freight forwarding optimization and emissions reporting.",
    maturity: "Scaling SaaS",
    regulatory: {
      level: "Medium",
      character: "Demand support",
      note: "Emissions reporting and logistics compliance support the product thesis.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Decarbonization pressure and efficiency mandates drive buyer interest.",
    },
    evidence: ["EUR 76k MRR", "24 freight customers", "Average route cost down 7%"],
    ip: "Optimization rules and workflow integration proprietary; data moat still emerging.",
    risks: ["Commoditized category", "Customer churn", "Data quality"],
    rationale: [
      "Commercial evidence is solid and the use case is clear.",
      "The question is whether the product has enough differentiation.",
      "Transition exposure helps the demand story.",
    ],
    missing: ["Churn by cohort", "Implementation hours", "Sales cycle by customer type"],
    nextStep: "Review retention and differentiation against freight SaaS peers.",
    metrics: { revenue: "EUR 76k MRR", runway: "12 months", grossMargin: "77%", traction: "24 customers" },
    tags: ["logistics", "software", "emissions"],
  },
  {
    id: "proteanx",
    name: "ProteanX Biologics",
    sector: "Health tech",
    stage: "Pre-seed",
    geography: "Belgium",
    trl: 4,
    ticket: 0.8,
    ask: "EUR 800k pre-seed",
    useOfFunds: "Lab validation, assay development, and IP filing.",
    model: "Diagnostics reagent platform licensed to laboratories.",
    maturity: "Lab prototype",
    regulatory: {
      level: "High",
      character: "Burden and credibility",
      note: "Clinical and lab standards are demanding, but successful clearance would materially support adoption.",
    },
    transition: {
      level: "Low",
      character: "Limited exposure",
      note: "Transition exposure is not a thesis driver.",
    },
    evidence: ["University assay study", "One lab pilot", "Scientific advisory board"],
    ip: "Early patent application on reagent chemistry; FTO not yet complete.",
    risks: ["Low TRL", "Regulatory pathway", "Lab reproducibility"],
    rationale: [
      "The science is promising, but still early.",
      "The issue is not market demand alone; it's execution and validation.",
      "Best suited to deep diligence or specialist seed investors.",
    ],
    missing: ["Assay reproducibility", "Regulatory classification", "Commercial pilot design"],
    nextStep: "Hold pending assay robustness and regulatory pathway clarity.",
    metrics: { revenue: "Pre-revenue", runway: "4 months", grossMargin: "Not proven", traction: "1 lab pilot" },
    tags: ["biotech", "diagnostics", "deep tech"],
  },
  {
    id: "maplory",
    name: "Maplory Earth",
    sector: "Climate tech",
    stage: "Seed",
    geography: "Germany",
    trl: 7,
    ticket: 1.7,
    ask: "EUR 1.7M seed",
    useOfFunds: "Remote sensing integrations, sales expansion, and model validation.",
    model: "Geospatial analytics for environmental monitoring and reporting.",
    maturity: "Commercial pilots",
    regulatory: {
      level: "Medium",
      character: "Demand tailwind",
      note: "Reporting and compliance needs can support buyer urgency.",
    },
    transition: {
      level: "High",
      character: "Tailwind",
      note: "Climate disclosure and land-use monitoring increase demand for the product.",
    },
    evidence: ["Four pilot customers", "Forest monitoring accuracy validation", "One government procurement pathway"],
    ip: "Model tuning and geospatial workflow proprietary; satellite data is third-party.",
    risks: ["Public sector sales cycle", "Data-source dependency", "Model drift"],
    rationale: [
      "A solid climate-adjacent software case with multiple pilots.",
      "The question is commercialization speed, not product plausibility.",
      "Demand can be supported by compliance and reporting needs.",
    ],
    missing: ["Pilot conversion rate", "Data-source contracts", "Customer retention history"],
    nextStep: "Review government procurement path and pilot-to-paid conversion.",
    metrics: { revenue: "EUR 22k MRR", runway: "8 months", grossMargin: "75%", traction: "4 pilots" },
    tags: ["climate", "geospatial", "software"],
  },
  {
    id: "avernode",
    name: "AverNode Manufacturing",
    sector: "Industrial automation",
    stage: "Series A",
    geography: "Austria",
    trl: 8,
    ticket: 3.1,
    ask: "EUR 3.1M Series A",
    useOfFunds: "Channel partnerships, implementation engineers, and product hardening.",
    model: "Factory planning and predictive maintenance platform.",
    maturity: "Live product",
    regulatory: {
      level: "Low",
      character: "Operational standards",
      note: "Safety and data governance matter, but regulation is not the core adoption driver.",
    },
    transition: {
      level: "Medium",
      character: "Productivity tailwind",
      note: "Reshoring and efficiency pressure support automation spend.",
    },
    evidence: ["EUR 74k MRR", "Eight factories live", "Downtime reduction 12%"],
    ip: "Optimization engine and deployment playbooks proprietary.",
    risks: ["Implementation effort", "Incumbent competition", "Customer support load"],
    rationale: [
      "Commercial evidence is solid and operational outcomes are measurable.",
      "The main diligence issue is implementation scalability.",
      "The product fits a productivity-driven transition case.",
    ],
    missing: ["Implementation hours by customer", "Reference calls", "CAC payback by segment"],
    nextStep: "Check whether services load stays bounded as factory count scales.",
    metrics: { revenue: "EUR 74k MRR", runway: "10 months", grossMargin: "63%", traction: "8 factories" },
    tags: ["industrial", "automation", "software"],
  },
];

const defaultPreferences = {
  sectors: [],
  stages: [],
  maxTicket: 7,
  minTrl: 3,
  risk: "Open",
  geographies: [],
  evidence: "Any",
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
  briefId: "aerolith",
  activeTab: "overview",
  view: "landing",
  workspaceEntered: typeof sessionStorage !== "undefined" && sessionStorage.getItem("workspaceEntered") === "1",
  showAdvanced: false,
  aiResults: {},
};

const sectors = [...new Set(startups.map((startup) => startup.sector))];
const stages = [...new Set(startups.map((startup) => startup.stage))];
const geographies = [...new Set(startups.map((startup) => startup.geography))];
const exposureLevels = ["All", "Low", "Medium", "High"];
const riskProfiles = ["Open", "Conservative", "Balanced", "High uncertainty"];
const evidenceProfiles = ["Any", "Research", "Pilot", "Commercial"];
const tabs = [
  ["overview", "Screening"],
  ["evidence", "Evidence"],
  ["risk", "Risk"],
  ["diligence", "Diligence"],
  ["brief", "Brief"],
  ["ai", "AI Analyst"],
];

const app = document.querySelector("#app");

function startupById(id) {
  return startups.find((startup) => startup.id === id);
}

function parseHash() {
  const raw = decodeURIComponent((location.hash || "").replace(/^#/, ""));
  if (!raw) return { kind: null };
  if (raw.startsWith("startup/")) return { kind: "detail", id: raw.slice("startup/".length) };
  if (raw.startsWith("company/")) return { kind: "detail", id: raw.slice("company/".length) };
  return { kind: null };
}

function syncRouteFromHash() {
  const route = parseHash();

  if (route.kind === "detail") {
    const startup = startupById(route.id);
    if (!startup) {
      state.view = "browse";
      return;
    }
    state.view = "detail";
    state.selectedId = startup.id;
    state.briefId = startup.id;
    state.activeTab = "overview";
    markWorkspaceEntered();
    return;
  }

  state.view = state.workspaceEntered ? "browse" : "landing";
}

function openDetailView(id) {
  const startup = startupById(id);
  if (!startup) return;
  markWorkspaceEntered();
  state.selectedId = startup.id;
  state.briefId = startup.id;
  state.activeTab = "overview";
  location.hash = `startup/${startup.id}`;
  syncRouteFromHash();
  render();
}

function closeDetailView() {
  location.hash = "";
  syncRouteFromHash();
  render();
}

function markWorkspaceEntered() {
  state.workspaceEntered = true;
  if (typeof sessionStorage !== "undefined") sessionStorage.setItem("workspaceEntered", "1");
}

function normalizeTicket(value) {
  return Number.parseFloat(value).toFixed(value % 1 === 0 ? 0 : 1);
}

function scoreStartup(startup, preferences = state.preferences) {
  let score = 28;
  const reasons = [];
  const cautions = [];

  if (preferences.sectors?.length) {
    if (preferences.sectors.includes(startup.sector)) {
      score += 16;
      reasons.push(`Sector matches the current mandate (${startup.sector}).`);
    } else {
      cautions.push(`Sector sits outside the selected mandate.`);
    }
  }

  if (preferences.stages?.length) {
    if (preferences.stages.includes(startup.stage)) {
      score += 12;
      reasons.push(`Stage is within the selected round focus.`);
    } else {
      cautions.push(`Stage differs from the selected round focus.`);
    }
  }

  if (typeof preferences.maxTicket === "number") {
    if (startup.ticket <= preferences.maxTicket) {
      score += 12;
      reasons.push(`Funding ask fits the current ticket ceiling.`);
    } else {
      const gap = (startup.ticket - preferences.maxTicket).toFixed(1);
      cautions.push(`Ask is EUR ${gap}M above the preferred ticket ceiling.`);
    }
  }

  if (typeof preferences.minTrl === "number") {
    if (startup.trl >= preferences.minTrl) {
      score += 10;
      reasons.push(`Maturity is at or above the selected TRL floor.`);
    } else {
      cautions.push(`Maturity is below the selected TRL floor.`);
    }
  }

  if (preferences.geographies?.length) {
    if (preferences.geographies.includes(startup.geography)) {
      score += 6;
    } else {
      cautions.push(`Geography is outside the current focus list.`);
    }
  }

  const evidenceDepth = evidenceScore(startup);
  if (preferences.evidence === "Commercial") {
    if (evidenceDepth >= 3) {
      score += 10;
      reasons.push("Evidence includes commercial traction or paying customers.");
    } else {
      cautions.push("Evidence may be lighter than the current evidence preference.");
    }
  } else if (preferences.evidence === "Pilot") {
    if (evidenceDepth >= 2) {
      score += 8;
      reasons.push("Evidence includes pilots or externally visible validation.");
    } else {
      cautions.push("Evidence may be lighter than the current evidence preference.");
    }
  } else if (preferences.evidence === "Research") {
    score += 5;
  }

  if (preferences.risk === "Conservative") {
    if (startup.trl >= 8 && evidenceDepth >= 3 && startup.regulatory.level !== "High") score += 8;
    if (startup.trl < 6 || startup.regulatory.level === "High") cautions.push("Conservative profile flags this for additional diligence.");
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
    label: bounded >= 78 ? "Strong mandate fit" : bounded >= 60 ? "Inspect further" : bounded >= 42 ? "Watchlist" : "Outside mandate",
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
      ? "Proceed to diligence"
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

// â”€â”€ AI-analyst layer (deterministic, no API, no backend) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function seededRng(seed) {
  let s = seed | 0;
  return () => {
    s = (Math.imul(48271, s) + 2147483647) | 0;
    return (s >>> 0) / 4294967296;
  };
}

function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

function aiSeed(startup) {
  let h = 0;
  for (const ch of startup.id + startup.name) h = (Math.imul(31, h) + ch.charCodeAt(0)) | 0;
  return h;
}

const sectorQs = {
  "Clean Energy": [
    "What is the levelised cost of energy versus grid parity in the target market?",
    "How does the technology behave under curtailment or intermittency conditions?",
    "Has any independent energy yield assessment been completed?",
    "What is the degradation curve over a 20-year asset life?",
  ],
  "Mobility & Logistics": [
    "What is the total cost of ownership versus incumbent ICE or diesel alternatives?",
    "How does range, payload, and charging infrastructure interact in the target use case?",
    "Are there binding offtake agreements or fleet commitments from operators?",
    "How does the unit economics model change at 1Ã—, 10Ã—, and 100Ã— fleet size?",
  ],
  "Climate Tech": [
    "What is the marginal abatement cost relative to current carbon credit benchmarks?",
    "Has the measurement, reporting, and verification methodology been validated externally?",
    "How is additionality established and what is the permanence risk?",
    "Are there co-benefits (biodiversity, water, employment) that have been quantified?",
  ],
  "Deep Tech": [
    "What is the IP protection strategy and what would a freedom-to-operate analysis reveal?",
    "What are the manufacturing scale-up constraints and key material dependencies?",
    "How has the technology been stress-tested outside controlled lab conditions?",
    "Who are the 2-3 most credible potential acquirers and what would drive strategic interest?",
  ],
  "AgriFood": [
    "How does the product perform in head-to-head taste or functionality tests versus incumbents?",
    "What is the current shelf life, cold-chain requirement, and logistics cost?",
    "Which regulatory approval pathways apply and what is the expected timeline?",
    "Have any large food manufacturers conducted pilot integration or commercial pilots?",
  ],
  "Digital Infrastructure": [
    "What is the customer acquisition cost and how does payback period evolve with scale?",
    "How does the product differentiate technically from AWS, Azure, or GCP native offerings?",
    "What is the data residency and sovereignty posture for EU customers?",
    "Has any SOC 2 Type II or ISO 27001 audit been completed?",
  ],
};

const stageQs = {
  "Pre-Seed": [
    "Can the founding team demonstrate domain expertise through publication, patents, or prior exits?",
    "What assumptions must hold for the MVP to reach a commercially useful performance threshold?",
    "How is the team financed through to the next meaningful milestone?",
  ],
  Seed: [
    "What is the conversion rate from pilot to paid contract and what is driving attrition?",
    "Has any third-party validation (academic, certification, or industry body) been obtained?",
    "What is the runway and what triggers the Series A fundraise?",
  ],
  "Series A": [
    "Is the unit economics model proven at current scale and how does it improve with volume?",
    "What is the net revenue retention and what is driving expansion or churn?",
    "How defensible is the go-to-market motion and what would it cost a well-funded competitor to replicate?",
  ],
  "Series B": [
    "What is the path to EBITDA positivity and what are the key operating leverage points?",
    "How does the company's market share trajectory compare to the total addressable market forecast?",
    "Are there any regulatory, procurement, or partnership dependencies that could gate growth?",
  ],
  "Growth": [
    "Is there a clear secondary market or liquidity pathway within a 5-7 year investment horizon?",
    "What is the geographic or vertical expansion roadmap and what is the capital intensity?",
    "How is the management team structured for a potential exit process?",
  ],
};

function generateBriefText(startup, fit, preferences) {
  const rng = seededRng(aiSeed(startup) ^ 0xdeadbeef);
  const fitAdj = fit.score >= 78 ? "strong" : fit.score >= 55 ? "moderate" : "limited";
  const evidAdj = fit.evidence >= 70 ? "substantive" : fit.evidence >= 45 ? "early-stage" : "thin";
  const geoMatch = preferences.geographies.includes(startup.geography);
  const secMatch = preferences.sectors.includes(startup.sector);

  const openers = [
    `${startup.name} is a ${startup.stage.toLowerCase()} company operating in ${startup.sector.toLowerCase()}, headquartered in ${startup.geography}.`,
    `Operating at ${startup.stage.toLowerCase()} in ${startup.geography}, ${startup.name} addresses the ${startup.sector.toLowerCase()} space.`,
    `${startup.name} brings a ${startup.stage.toLowerCase()} proposition in ${startup.sector.toLowerCase()} from ${startup.geography}.`,
  ];

  const para1 = `${pick(openers, rng)} First-level mandate fit: ${fit.score}/100. Screening recommendation: ${fit.decision}. This note is a first-pass signal and does not constitute investment advice.`;

  const para2 = `Mandate alignment is ${fitAdj}. ${secMatch ? `Sector (${startup.sector}) is within the stated mandate.` : `Sector (${startup.sector}) falls outside the stated preference list, limiting mandate fit.`} ${geoMatch ? `Geography (${startup.geography}) is within the target footprint.` : `Geography (${startup.geography}) falls outside the preferred footprint.`} ${fit.reasons.length ? fit.reasons[0] : ""}`;

  const para3 = `Evidence depth: ${evidAdj} (score: ${fit.evidence}/100). Visible evidence: ${startup.evidence.slice(0, 3).join("; ")}. ${fit.cautions.length ? `Caution: ${fit.cautions[0].toLowerCase()}.` : "No immediate mandate cautions flagged, though diligence remains essential."}`;

  const para4 = `Open diligence items: ${startup.missing.slice(0, 3).join("; ")}. Regulatory exposure: ${startup.regulatory.level.toLowerCase()} â€” ${startup.regulatory.character.toLowerCase()}. Transition exposure: ${startup.transition.level.toLowerCase()} â€” ${startup.transition.character.toLowerCase()}.`;

  const para5 = `Suggested next step: ${startup.nextStep} Primary risk signal: ${startup.risks[0] ? startup.risks[0].toLowerCase() : "none flagged at screening level"}. All findings require independent verification.`;

  return [para1, para2, para3, para4, para5];
}

function generateFitLines(startup, fit, preferences) {
  const lines = [];
  if (preferences.sectors.includes(startup.sector))
    lines.push(`Sector match â€” ${startup.sector} is within the stated investment mandate.`);
  else
    lines.push(`Sector gap â€” ${startup.sector} is not in the current mandate; fit is penalised accordingly.`);

  if (preferences.geographies.includes(startup.geography))
    lines.push(`Geographic fit â€” ${startup.geography} is within the target footprint.`);
  else
    lines.push(`Geographic mismatch â€” ${startup.geography} is outside the preferred footprint.`);

  if (startup.ticket <= preferences.maxTicket)
    lines.push(`Ticket size â€” EUR ${normalizeTicket(startup.ticket)}M fits within the maximum initial ticket of EUR ${normalizeTicket(preferences.maxTicket)}M.`);
  else
    lines.push(`Ticket stretch â€” EUR ${normalizeTicket(startup.ticket)}M exceeds the current max ticket (EUR ${normalizeTicket(preferences.maxTicket)}M).`);

  if (startup.trl >= preferences.minTrl)
    lines.push(`Technology readiness â€” TRL ${startup.trl} meets or exceeds the minimum threshold (TRL ${preferences.minTrl}).`);
  else
    lines.push(`TRL gap â€” TRL ${startup.trl} is below the minimum threshold (TRL ${preferences.minTrl}).`);

  if (fit.evidence >= 60)
    lines.push(`Evidence quality â€” ${fit.evidenceLabel.toLowerCase()} evidence base is a positive signal for the current stage.`);
  else
    lines.push(`Evidence thin â€” the evidence base at ${fit.evidenceLabel.toLowerCase()} level may not support the current ask.`);

  if (fit.reasons.length) lines.push(...fit.reasons.slice(0, 2).map((r) => r));
  if (fit.cautions.length) lines.push(...fit.cautions.slice(0, 2).map((c) => `Caution: ${c}`));

  return lines.slice(0, 7);
}

function generateFlagItems(startup) {
  const flags = [];

  if (startup.missing.length >= 4)
    flags.push({ level: "high", text: `Diligence gaps are broad (${startup.missing.length} open items). The information base at this stage may not support advanced deal structuring.` });
  else if (startup.missing.length >= 2)
    flags.push({ level: "medium", text: `${startup.missing.length} open diligence items. Key gaps: ${startup.missing.slice(0, 2).join("; ")}.` });

  if (startup.regulatory.level === "High")
    flags.push({ level: "high", text: `Regulatory exposure is high (${startup.regulatory.character}). This typically extends deal timelines and may increase compliance cost materially.` });
  else if (startup.regulatory.level === "Medium")
    flags.push({ level: "medium", text: `Moderate regulatory exposure (${startup.regulatory.character}). Monitor for changes in the applicable approval landscape.` });

  if (startup.transition.level === "High")
    flags.push({ level: "high", text: `High transition exposure (${startup.transition.character}). Policy or market shifts in this area could affect the commercial thesis.` });
  else if (startup.transition.level === "Medium")
    flags.push({ level: "medium", text: `Transition exposure flagged at medium level â€” confirm sensitivity to carbon pricing or energy policy changes.` });

  if (startup.trl <= 4)
    flags.push({ level: "high", text: `TRL ${startup.trl} indicates early-stage technical development. Commercial risk is elevated and proof-of-concept results may not translate to production.` });
  else if (startup.trl <= 6)
    flags.push({ level: "medium", text: `TRL ${startup.trl} â€” technology is validated at pilot scale. Scale-up risk has not been resolved.` });

  if (startup.risks && startup.risks.length)
    flags.push({ level: "medium", text: startup.risks[0] });

  flags.push({ level: "low", text: "These are first-level screening signals only. All flags require independent verification before any investment decision." });

  return flags.slice(0, 8);
}

function generateQuestions(startup) {
  const rng = seededRng(aiSeed(startup) ^ 0xcafebabe);
  const sector = startup.sector;
  const stage = startup.stage;

  const pool = [
    ...(sectorQs[sector] || sectorQs["Deep Tech"]),
    ...(stageQs[stage] || stageQs["Seed"]),
    "What is the composition of the founding team and what critical skills are missing?",
    "Are there any existing side letters, preference stacks, or anti-dilution provisions that would affect a new investor?",
    "What does the cap table look like and are there any problematic shareholder agreements?",
  ];

  const shuffled = [...pool].sort(() => rng() - 0.5);
  return [...new Set(shuffled)].slice(0, 9);
}

function generateCompareSummary(compareList) {
  if (!compareList.length) return [];

  const sorted = [...compareList].map((s) => ({ s, fit: assessStartup(s) })).sort((a, b) => b.fit.score - a.fit.score);
  const best = sorted[0];
  const names = sorted.map((item) => item.s.name).join(", ");

  const para1 = `Across the ${compareList.length} selected opportunities (${names}), this first-pass analysis identifies ${best.s.name} as carrying the strongest mandate alignment under current preferences (fit score: ${best.fit.score}/100).`;

  const para2 = sorted.map(({ s, fit }) =>
    `${s.name}: ${fit.score}/100 fit, TRL ${s.trl}, ${s.regulatory.level.toLowerCase()} regulatory exposure, ${s.missing.length} open diligence items.`
  ).join(" ");

  const highestTrl = sorted.reduce((a, b) => (a.s.trl > b.s.trl ? a : b));
  const lowestMissing = sorted.reduce((a, b) => (a.s.missing.length <= b.s.missing.length ? a : b));

  const para3 = `On technical readiness, ${highestTrl.s.name} leads with TRL ${highestTrl.s.trl}. On diligence completeness, ${lowestMissing.s.name} has the fewest open items (${lowestMissing.s.missing.length}). These metrics should be read as screening prompts, not conclusions.`;

  const para4 = "This comparison is a structured first-pass signal generated from the current mandate settings and startup structured data. It does not constitute investment advice. All findings require independent diligence before any term-sheet discussion.";

  return [para1, para2, para3, para4];
}

function renderAITab(startup, fit, overrideResult = null) {
  const key = startup.id;
  const result = overrideResult || state.aiResults[key];

  const flagLevelLabel = { high: "High signal", medium: "Medium signal", low: "Note" };

  const resultsHTML = result
    ? `
      <div class="ai-output ai-animate">
        <div class="ai-section">
          <h3>Investor brief</h3>
          <div class="ai-paragraphs">
            ${result.brief.map((p) => `<p>${p}</p>`).join("")}
          </div>
        </div>
        <div class="ai-section">
          <h3>Mandate alignment</h3>
          <ul class="ai-list">
            ${result.fitLines.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </div>
        <div class="ai-section">
          <h3>Red flags â€” first-level signals</h3>
          <ul class="ai-flags">
            ${result.flags.map((f) => `<li class="ai-flag ai-flag--${f.level}"><span>${flagLevelLabel[f.level]}</span>${f.text}</li>`).join("")}
          </ul>
        </div>
        <div class="ai-section">
          <h3>Suggested diligence questions</h3>
          <ol class="ai-questions">
            ${result.questions.map((q) => `<li>${q}</li>`).join("")}
          </ol>
        </div>
      </div>
      <p class="ai-disclaimer">AI-assisted screening Â· first-level signal only Â· requires diligence Â· not investment advice</p>
    `
    : `<div class="ai-idle">
        <p>Generate a structured screening brief, mandate alignment rationale, red flags, and diligence questions for <strong>${startup.name}</strong>.</p>
      </div>`;

  return `
    <div class="ai-panel">
      <div class="ai-panel__header">
        <div>
          <span class="ai-badge">AI Analyst</span>
          <p>Client-side analysis Â· no data transmitted Â· runs in your browser</p>
        </div>
        <button class="button button--small" type="button" data-action="generate-ai" data-id="${startup.id}">
          ${result ? "Regenerate" : "Generate analysis"}
        </button>
      </div>
      ${resultsHTML}
    </div>
  `;
}

function render() {
  const selected = selectedStartup();
  const filtered = getFilteredStartups();
  const selectedFit = assessStartup(selected);
  const landingMode = state.view === "landing";
  const detailMode = state.view === "detail";
  if (landingMode) {
    app.innerHTML = renderLandingPage();
    bindEvents();
    return;
  }
  const topbarStatus = detailMode
    ? `<span class="status-pill">Detail view</span><span class="status-pill status-pill--accent">${selected.name}</span>`
    : `<span class="status-pill">Screening room</span><span class="status-pill status-pill--accent">${filtered.length} opportunities in scope</span>`;
  const topbarBack = detailMode
    ? `<button class="button button--ghost button--small topbar-back" type="button" data-action="close-detail">Back to screening room</button>`
    : "";

  app.innerHTML = `
    <header class="topbar">
      <div class="topbar__left">
        ${topbarBack}
        <div class="brand-block">
          <img src="assets/logos/OpenEconomics-LOGO WHITE.svg" alt="OpenEconomics" />
          <div>
            <h1>Meridian</h1>
          </div>
        </div>
      </div>
      <div class="topbar__right">
        ${topbarStatus}
      </div>
    </header>

    ${detailMode ? renderDetailPage(selected, selectedFit) : renderBrowsePage(selected, selectedFit, filtered)}
  `;

  bindEvents();
}

function renderLandingPage() {
  return `
    <main id="main" class="landing-page">
      <section class="landing-hero panel">
        <div class="landing-hero__copy">
          <p class="eyebrow">Workspace</p>
          <h2>Set the screen, then review the queue.</h2>
          <p class="hero-copy">
            Filter the queue, open dossiers, and compare companies without leaving the workspace.
          </p>
          <div class="landing-hero__notes">
            <span>Live filters</span>
            <span>Queue view</span>
            <span>Company dossiers</span>
          </div>
        </div>
        <div class="landing-hero__panel">
          ${renderMandatePanel()}
          <div class="landing-hero__actions">
            <button class="button" type="button" data-action="start-workspace">Open workspace</button>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderBrowsePage(selected, selectedFit, filtered) {
  return `
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

      <aside class="dealroom panel" aria-label="Screening analysis panel">
        ${renderDealroom(selected, selectedFit)}
      </aside>
    </main>
  `;
}

function renderDetailPage(startup, fit) {
  return `
    <main id="main" class="detail-page">
      <section class="detail-hero panel">
        <div class="detail-hero__copy">
          <p class="eyebrow">Company dossier</p>
          <h2>${startup.name}</h2>
          <p class="detail-hero__summary">${startup.sector} / ${startup.stage} / ${startup.geography} / TRL ${startup.trl}</p>
          <p class="detail-hero__decision">${fit.decision}. Use this page to read the screening lead, verify the evidence trail, and decide whether the case deserves deeper diligence.</p>
          <div class="detail-hero__chips" aria-label="Company tags">
            <span class="detail-chip">${startup.ask}</span>
            <span class="detail-chip">${startup.maturity}</span>
            <span class="detail-chip">${startup.metrics.revenue}</span>
            <span class="detail-chip">${startup.metrics.runway} runway</span>
            <span class="detail-chip">${startup.tags.join(" / ")}</span>
          </div>
        </div>
        <div class="detail-hero__rail">
          ${renderDetailStat("Screening fit", `${fit.score}/100`, fit.label)}
          ${renderDetailStat("Evidence strength", `${fit.evidence}/100`, fit.evidenceLabel)}
          ${renderDetailStat("Risk signal", `${fit.riskSeverity}/100`, "First-level signal")}
          ${renderDetailStat("Diligence completeness", `${fit.diligence}/100`, "Open items remain")}
        </div>
      </section>

      <section class="detail-snapshot panel" aria-label="Company snapshot">
        <div class="detail-snapshot__head">
          <div class="panel-heading">
            <p class="eyebrow">Snapshot</p>
            <h2>What this company is</h2>
          </div>
          <p class="detail-snapshot__lede">
            The snapshot pairs the structured company record with the screening rationale and the proprietary measures used in this POC.
          </p>
        </div>
        <div class="detail-snapshot__layout">
          <div class="detail-snapshot__facts">
            <section class="info-grid">
              ${renderInfo("Sector", startup.sector)}
              ${renderInfo("Stage", startup.stage)}
              ${renderInfo("Geography", startup.geography)}
              ${renderInfo("TRL", `TRL ${startup.trl}`)}
              ${renderInfo("Ask", startup.ask)}
              ${renderInfo("Use of funds", startup.useOfFunds)}
              ${renderInfo("Business model", startup.model)}
              ${renderInfo("IP status", startup.ip)}
            </section>
            <section class="detail-summary-block">
              <h3>Screening read</h3>
              <ul class="clean-list clean-list--tight">
                ${fit.reasons.map((item) => `<li>${item}</li>`).join("")}
                ${fit.cautions.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </section>
          </div>
          <div class="detail-snapshot__lens">
            ${renderProprietaryMeasures(startup, fit, "detail")}
          </div>
        </div>
      </section>

      <section class="detail-layout" aria-label="Company detail sections">
        <div class="detail-main">
          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">Evidence</p>
              <h2>Visible evidence</h2>
            </div>
            ${renderEvidence(startup)}
          </article>

          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">Risk</p>
              <h2>Risk and exposure</h2>
            </div>
            ${renderRisk(startup)}
          </article>

          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">Diligence</p>
              <h2>Open diligence items</h2>
            </div>
            ${renderDiligence(startup)}
          </article>

          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">Brief</p>
              <h2>Investor brief</h2>
            </div>
            ${renderBrief(startup, fit)}
          </article>
        </div>

        <aside class="detail-rail">
          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">Screening</p>
              <h2>Why it is in scope</h2>
            </div>
            ${renderOverview(startup, fit)}
          </article>

          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">Actions</p>
              <h2>Next steps</h2>
            </div>
            <div class="detail-actions"></div>
            <section class="next-step">
              <span>Suggested next step</span>
              <p>${startup.nextStep}</p>
            </section>
          </article>

          <article class="detail-panel panel">
            <div class="panel-heading">
              <p class="eyebrow">AI Analyst</p>
              <h2>Screening note</h2>
            </div>
            ${renderAITab(startup, fit)}
          </article>
        </aside>
      </section>
    </main>
  `;
}

function renderHero(filtered) {
  const strong = filtered.filter((startup) => startup.fit.score >= 78).length;
  const diligence = filtered.filter((startup) => startup.fit.cautions.length > 0).length;
  const regulated = filtered.filter((startup) => startup.regulatory.level === "High").length;

  return `
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">Screening view</p>
        <h2>Which opportunities deserve attention, and why?</h2>
        <p class="hero-copy">
          This room turns mandate preferences into explainable first-level screening signals. Select a company to inspect the summary on the right, then open the full detail page when the case deserves deeper review.
        </p>
      </div>
      <div class="hero-ledger" aria-label="Screening summary">
        <div class="hero-ledger__item">
          <span>Queue read</span>
          <strong>${strong}</strong>
          <small>screened-in opportunities</small>
        </div>
        <div class="hero-ledger__item">
          <span>Diligence load</span>
          <strong>${diligence}</strong>
          <small>need more review</small>
        </div>
        <div class="hero-ledger__item">
          <span>Regulatory exposure</span>
          <strong>${regulated}</strong>
          <small>high exposure cases</small>
        </div>
      </div>
    </section>
  `;
}

function calculateProprietaryMeasures(startup, fit) {
  const evidenceBoost = fit.evidence / 180;
  const fitBoost = fit.score / 42;
  const transitionBoost =
    startup.transition.level === "High" ? 0.4 : startup.transition.level === "Medium" ? 0.22 : 0.08;
  const regulatoryBoost = startup.regulatory.level === "High" ? 0.16 : startup.regulatory.level === "Medium" ? 0.08 : 0.04;
  const expectedSroi = Math.max(1.3, Math.min(5.8, 1.1 + fitBoost + transitionBoost + regulatoryBoost + evidenceBoost));
  const transitionBaseline = startup.transition.level === "High" ? 10 : startup.transition.level === "Medium" ? 6 : 2;
  const baseRisk = Math.max(14, Math.min(92, Math.round(fit.riskSeverity * 0.72 + transitionBaseline)));

  return {
    expectedSroi: expectedSroi.toFixed(1),
    esgScore: calculateEsgScore(startup, fit),
    physicalRisk: calculatePhysicalRiskExposure(startup, fit),
    scenarios: [
      { label: "Policy stress", value: Math.min(95, baseRisk + 12) },
      { label: "Base case", value: baseRisk },
      { label: "Accelerated shift", value: Math.max(8, baseRisk - 10) },
    ],
  };
}

function calculateEsgScore(startup, fit) {
  const sectorBase = {
    "Climate tech": 86,
    "Circular economy": 84,
    Agritech: 80,
    "Water tech": 83,
    Energy: 77,
    "Health tech": 72,
    Medtech: 70,
    Mobility: 68,
    "AI/data infrastructure": 64,
    Cybersecurity: 67,
    "Deep tech materials": 61,
    "Industrial automation": 65,
  };
  const evidenceBoost = Math.min(8, fit.evidence / 12);
  const transitionBoost = startup.transition.level === "High" ? 4 : startup.transition.level === "Medium" ? 2 : -1;
  const regulatoryBoost = startup.regulatory.level === "High" ? 1 : startup.regulatory.level === "Medium" ? 0 : -1;
  return Math.max(35, Math.min(96, Math.round((sectorBase[startup.sector] || 66) + evidenceBoost + transitionBoost + regulatoryBoost)));
}

function calculatePhysicalRiskExposure(startup, fit) {
  const geographyBase = {
    Italy: 58,
    Spain: 64,
    Portugal: 55,
    Netherlands: 42,
    Germany: 46,
    France: 49,
    Denmark: 34,
    Switzerland: 38,
  };
  const sectorBase = {
    "Water tech": 11,
    Agritech: 10,
    "Climate tech": 6,
    Energy: 7,
    Mobility: 4,
    "Industrial automation": 3,
    "Circular economy": 5,
    "Deep tech materials": 2,
    "Health tech": 1,
    Medtech: 1,
    "AI/data infrastructure": -2,
    Cybersecurity: -4,
  };
  const diligenceOffset = fit.diligence >= 70 ? -2 : fit.diligence <= 45 ? 3 : 0;
  return Math.max(
    18,
    Math.min(92, Math.round((geographyBase[startup.geography] || 45) + (sectorBase[startup.sector] || 0) + diligenceOffset))
  );
}

function renderProprietaryMeasures(startup, fit, variant = "detail") {
  const proprietary = calculateProprietaryMeasures(startup, fit);
  return `
    <section class="proprietary-card proprietary-card--${variant}" aria-label="Proprietary measures">
      <div class="proprietary-card__header">
        <p class="eyebrow">Proprietary lens</p>
        <h3>Expected SROI, ESG, and transition scenarios</h3>
      </div>
      <div class="proprietary-card__metrics">
        <div class="proprietary-card__metric">
          <span>Expected SROI</span>
          <strong>${proprietary.expectedSroi}x</strong>
          <small>Innovation spillover estimate</small>
        </div>
        <div class="proprietary-card__metric">
          <span>ESG score</span>
          <strong>${proprietary.esgScore}/100</strong>
          <small>Sustainability proxy estimate</small>
        </div>
        <div class="proprietary-card__metric">
          <span>Physical risk exposure</span>
          <strong>${proprietary.physicalRisk}/100</strong>
          <small>Location and asset proxy estimate</small>
        </div>
      </div>
      <div class="proprietary-card__scenario">
        <span>Transition risk across scenarios</span>
        <div class="scenario-strip">
          ${proprietary.scenarios
            .map(
              (scenario) => `
                <div class="scenario-chip">
                  <strong>${scenario.value}</strong>
                  <span>${scenario.label}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderMandatePanel() {
  const openMandate =
    state.preferences.sectors.length === 0 &&
    state.preferences.stages.length === 0 &&
    state.preferences.geographies.length === 0 &&
    state.preferences.maxTicket === 7 &&
    state.preferences.minTrl === 3 &&
    state.preferences.risk === "Open" &&
    state.preferences.evidence === "Any" &&
    state.preferences.regulatory === "Open" &&
    state.preferences.transition === "Open";
  const ticketLabel = openMandate ? "Any" : formatMoney(state.preferences.maxTicket);
  const trlLabel = openMandate ? "Any" : state.preferences.minTrl;

  return `
    <div class="panel-heading">
      <p class="eyebrow">Mandate</p>
      <h2>Investor preferences</h2>
    </div>
    <div class="field">
      <label for="ticket">Max initial ticket <strong>${ticketLabel}</strong></label>
      <div class="field__control">
        <input id="ticket" type="range" min="0.5" max="7" step="0.1" value="${state.preferences.maxTicket}" data-pref="maxTicket" />
        <input
          class="field__number"
          type="number"
          min="0.5"
          max="7"
          step="0.1"
          inputmode="decimal"
          value="${state.preferences.maxTicket}"
          aria-label="Max initial ticket value"
          data-pref="maxTicket"
        />
      </div>
    </div>
    <div class="field">
      <label for="trl">Minimum maturity / TRL <strong>${trlLabel}</strong></label>
      <div class="field__control">
        <input id="trl" type="range" min="3" max="9" step="1" value="${state.preferences.minTrl}" data-pref="minTrl" />
        <input
          class="field__number"
          type="number"
          min="3"
          max="9"
          step="1"
          inputmode="numeric"
          value="${state.preferences.minTrl}"
          aria-label="Minimum maturity TRL value"
          data-pref="minTrl"
        />
      </div>
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
          <span class="why-line">${startup.fit.reasons[0] || startup.fit.cautions[0] || "Pending mandate screen."}</span>
        </span>
      </button>
      <div class="opportunity__facts">
        <span>${startup.ask}</span>
        <span>${startup.metrics.traction}</span>
        <span>${startup.fit.decision}</span>
        <span>${startup.regulatory.level} regulatory</span>
        <span>${startup.transition.level} transition</span>
      </div>
      ${renderProprietaryMeasures(startup, startup.fit, "list")}
      <div class="opportunity__actions">
        <button class="button button--small" type="button" data-action="select-startup" data-id="${startup.id}">Analyse</button>
      </div>
    </article>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state">
      <h3>No opportunities in scope.</h3>
      <p>Adjust the filters or broaden the mandate parameters to expand the view.</p>
      <button class="button" type="button" data-action="clear-filters">Clear filters</button>
    </div>
  `;
}

function renderDealroom(startup, fit) {
  return `
    <div class="dealroom__mast">
      <div>
        <p class="eyebrow">Analysis</p>
        <h2>${startup.name}</h2>
        <p>${startup.sector} / ${startup.stage} / ${startup.geography}</p>
      </div>
      <div class="dealroom-score">
        <strong>${fit.score}</strong>
        <span>${fit.label}</span>
      </div>
    </div>
    ${renderProprietaryMeasures(startup, fit, "compact")}
    <div class="dealroom__actions">
      <button class="button button--ghost button--small" type="button" data-action="open-detail" data-id="${startup.id}">
        Open full detail page
      </button>
    </div>
    <nav class="tabs" aria-label="Analysis sections">
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
  if (state.activeTab === "ai") return renderAITab(startup, fit);
  return renderOverview(startup, fit);
}

function renderOverview(startup, fit) {
  return `
    <section class="scorecard-note">
      <p>
        The scores reflect how the current mandate reads this opportunity. Higher fit, evidence, and confidence indicate stronger alignment;
        higher risk and lower diligence completeness indicate open questions. These are screening signals â€” not valuations or recommendations.
      </p>
    </section>
    <section class="scorecard" aria-label="Explainability scorecard">
      ${renderGauge("Mandate fit", fit.score, "Alignment with the active mandate parameters.", fit.label)}
      ${renderGauge("Evidence available", fit.evidence, "Volume and quality of evidence currently visible.", fit.evidenceLabel)}
      ${renderGauge("Risk signal", fit.riskSeverity, "Aggregate regulatory and transition exposure.", "Screening caution")}
      ${renderGauge("Data confidence", fit.dataConfidence, "Consistency and completeness of available information.", "Requires confirmation")}
      ${renderGauge("Diligence completeness", fit.diligence, "Share of diligence topics addressed to date.", "Open items remain")}
    </section>
    <section class="next-step">
      <span>Current recommendation</span>
      <p>${fit.decision}. Treat as a diligence lead â€” not a final recommendation.</p>
    </section>
    <section class="deal-section">
      <h3>Mandate alignment</h3>
      <ul class="clean-list">${fit.reasons.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${fit.cautions.length ? `<h3>Screening cautions</h3><ul class="clean-list muted-list">${fit.cautions.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
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

function renderGauge(label, value, description, footer) {
  return `
    <div class="gauge">
      <span>${label}</span>
      <strong>${value}</strong>
      <div class="gauge__track" aria-hidden="true"><i style="width:${value}%"></i></div>
      <p>${description}</p>
      <small>${footer}</small>
    </div>
  `;
}

function renderEvidence(startup) {
  return `
    <section class="metric-grid">
      ${Object.entries(startup.metrics).map(([key, value]) => renderMetric(key, value)).join("")}
    </section>
    <section class="deal-section">
      <h3>Visible evidence</h3>
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
      <h3>Risk signals</h3>
      <ul class="clean-list">${startup.risks.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderDiligence(startup) {
  return `
    <section class="deal-section">
      <h3>Open diligence items</h3>
      <ul class="diligence-list">${startup.missing.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="next-step">
      <span>Suggested next step</span>
      <p>${startup.nextStep}</p>
    </section>
    <section class="deal-section">
      <h3>Structuring notes</h3>
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
        <p class="eyebrow">Investor brief</p>
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
    `${startup.name} is a ${startup.stage.toLowerCase()} ${startup.sector.toLowerCase()} company in ${startup.geography}. First-level mandate fit: ${fit.score}/100. Screening recommendation: ${fit.decision}.`,
    `Mandate alignment: ${fit.reasons[0] || "Some alignment with the active mandate."}. Visible evidence: ${startup.evidence.join("; ")}.`,
    `Open diligence items: ${startup.missing.join("; ")}. Regulatory exposure: ${startup.regulatory.level.toLowerCase()} â€” ${startup.regulatory.character.toLowerCase()}.`,
    `Suggested next step: ${startup.nextStep} This brief is a first-level screening note and does not constitute investment advice.`,
  ].join("\n");
}

function renderInfo(label, value) {
  return `<div class="info-card"><span>${label}</span><p>${value}</p></div>`;
}

function renderDetailStat(label, value, caption) {
  return `
    <div class="detail-stat">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${caption}</small>
    </div>
  `;
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
    state.view = "browse";
    markWorkspaceEntered();
    render();
    return;
  }

  if (action === "start-workspace") {
    markWorkspaceEntered();
    state.selectedId = getFilteredStartups()[0]?.id || state.selectedId;
    state.briefId = state.selectedId;
    state.activeTab = "overview";
    state.view = "browse";
    location.hash = "";
    render();
    return;
  }

  if (action === "open-detail") {
    openDetailView(id);
    return;
  }

  if (action === "close-detail") {
    closeDetailView();
    return;
  }

  if (action === "tab") state.activeTab = event.currentTarget.dataset.tab;
  if (action === "toggle-advanced") state.showAdvanced = !state.showAdvanced;
  if (action === "reset-preferences") state.preferences = structuredClone(defaultPreferences);
  if (action === "clear-filters") {
    state.filters = { query: "", sector: "All", stage: "All", geography: "All", regulatory: "All", transition: "All" };
  }
  if (action === "copy-brief") copyBrief();

  if (action === "generate-ai") {
    const startup = startups.find((s) => s.id === id) || selectedStartup();
    const fit = assessStartup(startup);
    state.aiResults[startup.id] = {
      brief: generateBriefText(startup, fit, state.preferences),
      fitLines: generateFitLines(startup, fit, state.preferences),
      flags: generateFlagItems(startup),
      questions: generateQuestions(startup),
    };
    state.activeTab = "ai";
  }


  render();
}

function handlePreference(event) {
  const key = event.currentTarget.dataset.pref;
  if (!key) return;
  if (key === "maxTicket") {
    const value = event.currentTarget.valueAsNumber;
    if (Number.isFinite(value)) state.preferences.maxTicket = Math.max(0.5, Math.min(7, value));
  } else if (key === "minTrl") {
    const value = event.currentTarget.valueAsNumber;
    if (Number.isFinite(value)) state.preferences.minTrl = Math.max(3, Math.min(9, Math.round(value)));
  }
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

window.addEventListener("hashchange", () => {
  syncRouteFromHash();
  render();
});

syncRouteFromHash();
render();
