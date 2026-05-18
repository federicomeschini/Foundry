const profileTemplates = [
  {
    id: "aerolith",
    name: "Aerolith Capture",
    sector: "Climate tech",
    stage: "Seed",
    geography: "Italy",
    trl: 6,
    ask: "EUR 1.8M seed round",
    oneLiner: "Carbon removal spinout for cement producers that need a credible first commercial route.",
    objective: "Research commercialization",
    preferredLens: "commercialization",
    problem: "Industrial emitters need credible decarbonization tools, but many carbon claims still fail on measurement and verification.",
    customer: "Cement groups, industrial decarbonization teams, and buyers of verified carbon removal outcomes.",
    model: "Hardware-enabled carbon removal credits with recurring maintenance.",
    useOfFunds: "Pilot units, sorbent durability testing, and first industrial partnerships.",
    regulatory: {
      level: "Medium",
      character: "Creates demand but requires verification",
      note: "Carbon accounting rules can increase demand, but the company still needs a credible carbon measurement and verification method before broad outreach.",
    },
    transition: {
      level: "High",
      character: "Clear climate tailwind",
      note: "Industrial decarbonization budgets make the problem urgent, while capex cycles may slow conversion.",
    },
    evidence: ["Two cement plant LOIs", "1,200-hour pilot run", "Preliminary LCA reviewed by university lab"],
    ip: "Patent filed for mineralization cartridge geometry; sorbent recipe treated as trade secret.",
    risks: ["Scale-up reliability", "MRV acceptance", "Working capital intensity"],
    missing: ["Independent MRV provider review", "Cost curve at 10x pilot volume", "Customer willingness-to-pay evidence"],
    nextStep: "Package pilot economics, MRV logic, and the first commercial license path into one submission narrative before outreach.",
    metrics: { revenue: "Pre-revenue", runway: "9 months", grossMargin: "Modeled 42%", traction: "2 LOIs" },
    tags: ["hardware", "carbon", "industrial"],
    team: { size: "4–7", founders: "2 founders — CEO (materials scientist, ex-Holcim R&D) and CTO (chemical engineer, PhD in carbon mineralisation)", background: "Deep expertise in carbon accounting, industrial process chemistry, and hardware prototyping.", missingRoles: "CFO", advisors: "Former Lafarge sustainability director; EU carbon markets policy advisor" },
    market: { tam: "~€30B (global industrial carbon removal market by 2035)", sam: "~€4B (European cement sector facing mandatory decarbonisation targets)", competitors: "Carbon Clean Solutions, Climeworks (DAC), Carbfix, CarbonCure", differentiator: "Cartridge-based system deployable at point of emission — no transport or geological storage needed. Lower capex than competing DAC approaches." },
    unitEconomics: { mrr: "", arr: "", cac: "Not yet established — first commercial conversations in progress", ltv: "Estimated €200k–€800k per cement plant on a 5-year service contract", churn: "Not applicable (pre-revenue)", salesChannel: "Direct enterprise sales to industrial decarbonisation teams" },
    funding: { totalRaised: "EUR 350k (EIC Accelerator grant + angel)", roundCount: "1 pre-institutional round", notableInvestors: "EIC Accelerator grant, industrial angel investor", postMoneyVal: "Not yet established" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "LafargeHolcim, Saint-Gobain, carbon removal platforms, industrial gases majors" },
  },
  {
    id: "neuroharbor",
    name: "NeuroHarbor Health",
    sector: "Health tech",
    stage: "Series A",
    geography: "Germany",
    trl: 7,
    ask: "EUR 4.5M Series A",
    oneLiner: "Digital therapeutic platform prepared for clinic and payer pilots in neurological recovery.",
    objective: "Pilot partner outreach",
    preferredLens: "partner",
    problem: "Neurological recovery is hard to standardize, and clinics struggle to show scalable outcomes to payers.",
    customer: "Clinics, care networks, and insurers evaluating reimbursable digital therapy pathways.",
    model: "B2B digital therapeutic sold to clinics and insurers.",
    useOfFunds: "Clinical validation, MDR documentation, and payer pilots.",
    regulatory: {
      level: "High",
      character: "Adds compliance burden, creates competitive advantage",
      note: "Medical-device approval slows distribution, but a clean regulatory path can materially strengthen credibility.",
    },
    transition: {
      level: "Low",
      character: "Minimal climate exposure",
      note: "Transition policy is not a primary driver; the case depends on clinical and reimbursement proof.",
    },
    evidence: ["Multisite pilot with 340 patients", "Ethics committee approval", "Two insurer evaluation agreements"],
    ip: "Software copyright, clinical protocol know-how, and pending claims on adaptive therapy sequencing.",
    risks: ["Clinical endpoint sufficiency", "Reimbursement pathway", "Long enterprise procurement"],
    missing: ["Health-economic analysis", "Full MDR timeline", "Data privacy audit"],
    nextStep: "Tighten the reimbursement case and present the pilot protocol alongside clinic and insurer traction.",
    metrics: { revenue: "EUR 180k ARR", runway: "11 months", grossMargin: "78%", traction: "3 clinics" },
    tags: ["regulated", "clinical", "saas"],
    team: { size: "16–30", founders: "3 founders — CEO (ex-Fresenius clinical operations), CMO (neurologist, PhD, TU München), CTO (software architect)", background: "Clinical management, neurology research, and SaaS engineering across European health systems.", missingRoles: "CFO", advisors: "KOL neurologist at Charité Berlin; German reimbursement consultant (GKV/IQWiG process)" },
    market: { tam: "~€8B (European digital therapeutics for neurological conditions)", sam: "~€1.2B (German + French reimbursable digital therapy pipeline)", competitors: "Kaia Health, NeuroNation, SWORD Health, Hinge Health", differentiator: "Pathway-based protocols designed for clinic workflows and integrated with payer evidence requirements — not a consumer app." },
    unitEconomics: { mrr: "~EUR 15k", arr: "EUR 180k", cac: "~EUR 8k per clinic (12–18 month sales and onboarding cycle)", ltv: "~EUR 60k per clinic over 3 years", churn: "Under 5% annual logo churn", salesChannel: "Direct B2B to clinics and insurers; reimbursement pathway drives adoption" },
    funding: { totalRaised: "EUR 1.1M (pre-seed + seed)", roundCount: "2", notableInvestors: "Berlin digital health angel syndicate", postMoneyVal: "EUR 6M (post-seed)" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "Philips Healthcare, Siemens Healthineers, large German Krankenkassen, Fresenius Digital" },
  },
  {
    id: "vectorlane",
    name: "VectorLane Systems",
    sector: "AI/data infrastructure",
    stage: "Seed",
    geography: "France",
    trl: 8,
    ask: "EUR 2.6M seed extension",
    oneLiner: "Private retrieval infrastructure for regulated AI teams that need controlled data flows at scale.",
    objective: "Raise preparation",
    preferredLens: "fundraising",
    problem: "Enterprises want AI retrieval systems, but public tooling creates security, residency, and dependency concerns.",
    customer: "Engineering teams, CISOs, and data platform leaders in regulated or privacy-sensitive organizations.",
    model: "Usage-based developer infrastructure for private retrieval systems.",
    useOfFunds: "Enterprise security certifications, vector database connectors, and sales hires.",
    regulatory: {
      level: "Medium",
      character: "Creates market demand",
      note: "AI governance and data residency rules can support the story if the product can prove security discipline.",
    },
    transition: {
      level: "Low",
      character: "Minimal climate exposure",
      note: "Transition exposure is minor, but energy intensity and platform dependency should still be framed honestly.",
    },
    evidence: ["EUR 42k MRR", "14 paying customers", "SOC 2 readiness assessment"],
    ip: "Core indexing code proprietary; defensibility depends on integrations, deployment trust, and switching cost.",
    risks: ["Competitive compression", "Cloud platform dependency", "Security proof burden"],
    missing: ["Net revenue retention history", "Security audit completion", "Dependency map for foundation model providers"],
    nextStep: "Turn customer, retention, and security proof into one clear operator-grade submission room.",
    metrics: { revenue: "EUR 42k MRR", runway: "8 months", grossMargin: "71%", traction: "14 customers" },
    tags: ["ai", "infra", "privacy"],
    team: { size: "8–15", founders: "2 founders — CEO (ex-Criteo data engineer) and CTO (vector database specialist, ex-Pinecone)", background: "Infrastructure engineering, ML systems, and enterprise developer tooling. First-time founders.", missingRoles: "VP Sales", advisors: "Former AWS enterprise solutions architect; CISO advisor from insurance sector" },
    market: { tam: "~€12B (enterprise AI infrastructure and retrieval market)", sam: "~€1.5B (European regulated enterprise AI deployment)", competitors: "Pinecone, Weaviate, MongoDB Atlas Vector, Qdrant", differentiator: "Private deployment by default — no data leaves the customer environment. Purpose-built for regulated industries." },
    unitEconomics: { mrr: "EUR 42k", arr: "EUR 504k (run rate)", cac: "~EUR 5k per customer (self-serve trial + conversion)", ltv: "~EUR 45k per account over 24 months (usage-based expansion)", churn: "8% annual (improving)", salesChannel: "Product-led growth via developer community + enterprise outbound" },
    funding: { totalRaised: "EUR 750k (pre-seed)", roundCount: "1", notableInvestors: "Station F accelerator; 2 enterprise software angels", postMoneyVal: "EUR 4.5M (post pre-seed)" },
    exit: { horizon: "3–5 years", type: "Strategic acquisition", acquirers: "Snowflake, Databricks, cloud-native AI platforms, enterprise SaaS leaders" },
  },
  {
    id: "gridforge",
    name: "GridForge Flex",
    sector: "Energy",
    stage: "Series A",
    geography: "Spain",
    trl: 8,
    ask: "EUR 6M Series A",
    oneLiner: "Grid flexibility platform helping utilities and battery operators turn distributed assets into dispatchable revenue.",
    objective: "Pilot partner outreach",
    preferredLens: "partner",
    problem: "Power systems need flexible capacity, but operators face fragmented assets, complicated tariffs, and slow market access.",
    customer: "Utilities, aggregators, and asset operators navigating flexibility markets.",
    model: "Grid flexibility platform with revenue share on demand response events.",
    useOfFunds: "Aggregator licensing, battery partner integrations, and utility sales.",
    regulatory: {
      level: "High",
      character: "Controls market access, hard to replicate",
      note: "Energy-market rules create real friction, but a company that explains this clearly can show why the space is worth entering.",
    },
    transition: {
      level: "High",
      character: "Climate tailwind, but regulatory uncertainty",
      note: "Renewables volatility increases the need for flexibility, while tariff design can significantly affect the business economics.",
    },
    evidence: ["Utility pilot covering 18MW", "ISO 27001 audit scheduled", "Two battery OEM partnerships"],
    ip: "Optimization models proprietary; dispatch-history advantage is forming but still early.",
    risks: ["Regulatory market design", "Partner concentration", "Revenue timing volatility"],
    missing: ["Regulatory counsel memo", "Dispatch revenue by event type", "Partner exclusivity terms"],
    nextStep: "Explain country-by-country rule exposure and show how the raise unlocks commercial repeatability.",
    metrics: { revenue: "EUR 310k ARR", runway: "10 months", grossMargin: "64%", traction: "18MW pilot" },
    tags: ["energy", "software", "regulated"],
    team: { size: "16–30", founders: "2 founders — CEO (ex-Enel trading desk) and CTO (grid optimisation engineer, PhD)", background: "Energy market operations, dispatch algorithms, and regulatory navigation across three European markets.", missingRoles: "None currently", advisors: "Former Spanish CNMC energy regulator; two battery OEM commercial partners" },
    market: { tam: "~€40B (European grid flexibility and demand response by 2030)", sam: "~€5B (Spain, Italy, UK — active flexibility markets)", competitors: "Voltalis, Enel X, Virtual Peaker, Origis Energy", differentiator: "Asset-agnostic aggregation — works across heterogeneous battery and demand-response assets without vendor lock-in." },
    unitEconomics: { mrr: "~EUR 26k", arr: "EUR 310k", cac: "~EUR 25k per aggregator (long procurement and integration cycle)", ltv: "~EUR 200k per aggregator over 3 years (revenue share model)", churn: "Low — anchored by long-term dispatch contracts", salesChannel: "Direct B2B to utilities, aggregators, and battery OEM partners" },
    funding: { totalRaised: "EUR 2.5M (seed)", roundCount: "1", notableInvestors: "Renewable energy VC; EU innovation pilot grant", postMoneyVal: "EUR 10M (post-seed)" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "Enel, Iberdrola, ABB, Siemens Energy, GE Vernova" },
  },
  {
    id: "circuliq",
    name: "Circuliq Materials",
    sector: "Circular economy",
    stage: "Pre-seed",
    geography: "Netherlands",
    trl: 5,
    ask: "EUR 900k pre-seed",
    oneLiner: "Textile-to-resin conversion process built for a narrow first industrial licensing path.",
    objective: "Research commercialization",
    preferredLens: "commercialization",
    problem: "Apparel supply chains generate difficult waste streams, while buyers still lack scalable circular-material substitutes.",
    customer: "Fashion groups, recycled-material buyers, and industrial processors evaluating circular feedstocks.",
    model: "Licensing and tolling for textile-to-resin conversion.",
    useOfFunds: "Reactor prototype, feedstock contracts, and materials testing.",
    regulatory: {
      level: "Medium",
      character: "Creates market demand",
        note: "Waste and circularity rules can support urgency, but certifications and IP clearance work still need clearer documentation.",
    },
    transition: {
      level: "High",
      character: "Clear climate tailwind",
      note: "Corporate circularity targets support attention, though commodity swings may pressure economics.",
    },
    evidence: ["Bench-scale yield data", "One fashion group LOI", "Grant-funded technical validation"],
    ip: "Provisional patent on catalyst process; IP clearance not yet completed.",
    risks: ["Technology still at an early development stage", "Feedstock variability", "IP clearance uncertainty"],
    missing: ["IP clearance review", "Pilot reactor economics", "Feedstock quality variability tests"],
    nextStep: "Recast the deck around one credible pilot path instead of broad circularity ambition.",
    metrics: { revenue: "Pre-revenue", runway: "6 months", grossMargin: "Not proven", traction: "1 LOI" },
    tags: ["materials", "circular", "deep tech"],
    team: { size: "1–3", founders: "2 founders — CEO (ex-Inditex sustainability buyer) and CTO (polymer chemist, PhD)", background: "Fashion supply chain operations and polymer materials science.", missingRoles: "CFO / COO", advisors: "None formal yet" },
    market: { tam: "~€7B (textile recycling and circular materials global)", sam: "~€800M (European fashion group circular feedstock demand)", competitors: "Renewlondon, Carbios, Worn Again, Circ", differentiator: "Post-consumer textile-to-resin conversion at ambient temperature — lower capex than thermal competitors." },
    unitEconomics: { mrr: "", arr: "", cac: "Not yet established", ltv: "Licensing model — per-ton fee estimated at €200–400 per tonne", churn: "Not applicable", salesChannel: "Direct to fashion group sustainability teams" },
    funding: { totalRaised: "EUR 100k (founder capital + early-stage grant)", roundCount: "0 formal rounds", notableInvestors: "None", postMoneyVal: "Not established" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "Covestro, BASF, Renewlondon, major fashion groups" },
  },
  {
    id: "soilpulse",
    name: "SoilPulse Analytics",
    sector: "Agritech",
    stage: "Seed",
    geography: "Portugal",
    trl: 7,
    ask: "EUR 1.4M seed",
    oneLiner: "Field sensors and seasonal analytics aimed at conservation programs and grant-backed deployments.",
    objective: "Grant and impact packaging",
    preferredLens: "grant",
    problem: "Growers need usable water intelligence, but most tools are either too generic or too expensive to operate in the field.",
    customer: "Specialty-crop growers, agronomists, and irrigation distributors.",
    model: "Hardware plus seasonal analytics subscription for specialty crops.",
    useOfFunds: "Sensor manufacturing, agronomist support, and distributor onboarding.",
    regulatory: {
      level: "Low",
      character: "Light compliance requirements",
      note: "Direct regulatory burden is limited, though conservation programs can strengthen the outreach story.",
    },
    transition: {
      level: "High",
      character: "Climate tailwind, but slow adoption",
      note: "Climate stress increases water-management need, but farm adoption still depends on trust and channel execution.",
    },
    evidence: ["126 deployed sensors", "Water-use reduction study", "Distributor signed in Iberia"],
    ip: "Sensor enclosure design registered; analytics models proprietary.",
    risks: ["Hardware support cost", "Seasonality", "Distributor dependence"],
    missing: ["Churn across full crop cycle", "Maintenance cost by sensor cohort", "Distributor margin schedule"],
    nextStep: "Show one clean seasonal economics story and who owns the grower relationship at scale.",
    metrics: { revenue: "EUR 22k MRR seasonal", runway: "7 months", grossMargin: "48%", traction: "126 sensors" },
    tags: ["agritech", "water", "hardware"],
    team: { size: "8–15", founders: "2 founders — CEO (agronomist, ex-irrigation consultant) and CTO (IoT hardware engineer)", background: "Field agronomy, crop-cycle analytics, and IoT sensor deployment.", missingRoles: "CMO / Marketing", advisors: "Iberian distributor partner; crop scientist from Portuguese agricultural institute" },
    market: { tam: "~€5B (smart irrigation and precision agriculture in Europe)", sam: "~€600M (Iberian and Italian specialty-crop growers)", competitors: "CropX, Sentek, Lindsay FieldNET, John Deere precision ag", differentiator: "Seasonal analytics calibrated for specialty crops in the field — not adapted from greenhouse or commodity-crop products." },
    unitEconomics: { mrr: "EUR 22k (seasonal)", arr: "~EUR 180k annualised", cac: "~EUR 1.5k per grower via distributor channel", ltv: "~EUR 6k per grower over 4 seasons", churn: "Unknown — first full crop cycle completing", salesChannel: "Distributor-led — signed channel partner in Iberia" },
    funding: { totalRaised: "EUR 450k (seed grant + pre-seed angel)", roundCount: "1 informal round", notableInvestors: "Regional innovation fund (Portugal)", postMoneyVal: "Not formally established" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "Valmont Industries, Lindsay, Netafim, John Deere, Trimble" },
  },
  {
    id: "quantweave",
    name: "QuantWeave Materials",
    sector: "Deep tech materials",
    stage: "Seed",
    geography: "Switzerland",
    trl: 4,
    ask: "EUR 2.2M seed",
    oneLiner: "Advanced thermal films for electronics manufacturers that need one clear qualification path.",
    objective: "Research commercialization",
    preferredLens: "commercialization",
    problem: "Electronics OEMs need better thermal management, but qualification cycles are long and proof burdens are technical.",
    customer: "Electronics manufacturers, packaging teams, and advanced-material integration labs.",
    model: "Licensing advanced thermal films to electronics manufacturers.",
    useOfFunds: "TRL 4 to 6 validation, external lab testing, and IP prosecution.",
    regulatory: {
      level: "Low",
      character: "Minimal regulatory impact",
      note: "Compliance matters but is not the primary blocker; the bigger issue is how the startup frames technical proof and qualification timing.",
    },
    transition: {
      level: "Medium",
      character: "Energy / resource efficiency opportunity",
      note: "Lower cooling-energy demand can support adoption if manufacturing yield is believable.",
    },
    evidence: ["Peer-reviewed thermal performance", "Two OEM technical evaluations", "University spinout agreement"],
    ip: "Two patent families assigned to company; IP clearance partially complete.",
    risks: ["Early technology stage", "Manufacturing yield", "Long manufacturer qualification process"],
    missing: ["Manufacturing scale plan", "Full IP clearance", "Manufacturer qualification milestones"],
    nextStep: "Package the company as a commercialization candidate focused on one specific first market, not a broad platform.",
    metrics: { revenue: "Pre-revenue", runway: "10 months", grossMargin: "Not proven", traction: "2 evals" },
    tags: ["deep tech", "materials", "spinout"],
    team: { size: "4–7", founders: "2 founders — CEO (materials engineering, ex-ETH spinout) and CTO (physicist, PhD nanomaterials)", background: "Nanomaterials synthesis, thermal interface characterisation, and IP prosecution.", missingRoles: "CFO / commercial lead", advisors: "ETH Zurich technology transfer office; patent advisor (EP/US)" },
    market: { tam: "~€3B (advanced thermal interface materials global)", sam: "~€400M (European electronics OEM segment)", competitors: "Henkel Bergquist, 3M, Shin-Etsu, Parker Chomerics", differentiator: "Film form factor that eliminates paste application step — reduces manufacturing time and improves yield predictability." },
    unitEconomics: { mrr: "", arr: "", cac: "Not established — OEM evaluations ongoing", ltv: "Licensing fee per product line — estimated €50k–€500k per OEM agreement", churn: "Not applicable", salesChannel: "Direct to OEM technical and procurement teams via lab evaluation cycle" },
    funding: { totalRaised: "EUR 800k (ETH spinout grant + first angel round)", roundCount: "1", notableInvestors: "ETH spinout programme", postMoneyVal: "EUR 3.5M (estimated)" },
    exit: { horizon: "7+ years", type: "Strategic acquisition", acquirers: "Henkel, 3M, Shin-Etsu, Merck KGaA, Saint-Gobain" },
  },
  {
    id: "aquacipher",
    name: "AquaCipher Water",
    sector: "Water tech",
    stage: "Seed",
    geography: "Greece",
    trl: 7,
    ask: "EUR 1.6M seed",
    oneLiner: "Leak-detection analytics for water utilities that need a pilot-to-procurement story.",
    objective: "Pilot partner outreach",
    preferredLens: "partner",
    problem: "Municipal utilities lose water and budget to network leakage, but procurement cycles reward proof over promises.",
    customer: "Municipal water utilities, infrastructure operators, and regional distributors.",
    model: "Leak detection analytics sold to municipal water utilities.",
    useOfFunds: "Municipal pilots, corrosion testing, and channel partnerships.",
    regulatory: {
      level: "Medium",
      character: "Procurement delays, but drives demand",
      note: "Public procurement slows deals, while leakage-reduction mandates can make the budget easier to defend.",
    },
    transition: {
      level: "High",
      character: "Clear climate tailwind",
      note: "Water scarcity and resilience programs increase urgency across the target market.",
    },
    evidence: ["Three municipal pilots", "Detected 17 priority leaks", "Distributor conversations in two regions"],
    ip: "Algorithms proprietary; sensor package uses off-the-shelf devices.",
    risks: ["Municipal procurement", "Long payback proof", "Integration with legacy SCADA"],
    missing: ["Paid conversion terms", "Payback model by municipality size", "SCADA integration cost"],
    nextStep: "Convert the pilot story into a paid-procurement story before broad fundraising outreach.",
    metrics: { revenue: "Pilot fees", runway: "8 months", grossMargin: "69% software", traction: "3 pilots" },
    tags: ["water", "municipal", "software"],
    team: { size: "4–7", founders: "2 founders — CEO (ex-utility procurement manager) and CTO (signal processing engineer, PhD)", background: "Water infrastructure operations and acoustic leak detection algorithms.", missingRoles: "VP Sales / BD", advisors: "Municipal procurement advisor; utility engineering contact (Greek water authority)" },
    market: { tam: "~€10B (global water infrastructure monitoring and leak detection)", sam: "~€1.2B (European municipal water utilities)", competitors: "Itron, Sensus, Suez leak detection, Xylem Pure Technologies", differentiator: "Software-first — deploys on existing sensor infrastructure without new hardware procurement cycle." },
    unitEconomics: { mrr: "Pilot fees (~EUR 5k/month)", arr: "Not yet on recurring contracts", cac: "High — 12–18 month municipal procurement cycle", ltv: "Estimated €80k–€200k per utility over 5 years", churn: "Not applicable (pilot phase)", salesChannel: "Direct to utility procurement and technical teams" },
    funding: { totalRaised: "EUR 500k (pre-seed + pilot project co-funding)", roundCount: "1", notableInvestors: "Regional water utility co-investor", postMoneyVal: "EUR 4M (estimated)" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "Xylem, Itron, Veolia, Suez, Diehl Metering" },
  },
  {
    id: "ciphernest",
    name: "CipherNest Security",
    sector: "Cybersecurity",
    stage: "Series A",
    geography: "Ireland",
    trl: 9,
    ask: "EUR 3.8M Series A",
    oneLiner: "Supplier-risk monitoring software for regulated enterprises under compliance pressure.",
    objective: "Raise preparation",
    preferredLens: "fundraising",
    problem: "Enterprises face rising third-party risk obligations, but internal teams still manage supplier exposure with fragmented workflows.",
    customer: "Risk, compliance, procurement, and security leaders in regulated enterprises.",
    model: "B2B SaaS for supplier-risk monitoring in regulated enterprises.",
    useOfFunds: "Sales expansion, partner marketplace, and compliance certifications.",
    regulatory: {
      level: "High",
      character: "Creates market demand",
      note: "NIS2, DORA, and vendor-risk obligations make the category timely if the company can show sales efficiency and product differentiation.",
    },
    transition: {
      level: "Low",
      character: "Minimal climate exposure",
      note: "Transition is not a central angle here; the company should stay disciplined about what makes the case strong.",
    },
    evidence: ["EUR 1.1M ARR", "Net revenue retention 118%", "ISO 27001 certified"],
    ip: "Workflow and scoring engine proprietary; defensibility comes mainly from integrations and switching cost.",
    risks: ["Crowded category", "Enterprise sales efficiency", "Data-source dependency"],
    missing: ["Customer acquisition cost payback by segment", "Win/loss analysis", "Data-source contracts"],
    nextStep: "Sharpen the differentiation case and document what the next round unlocks operationally.",
    metrics: { revenue: "EUR 1.1M ARR", runway: "14 months", grossMargin: "82%", traction: "36 customers" },
    tags: ["cybersecurity", "saas", "regulated"],
    team: { size: "31–50", founders: "2 founders — CEO (ex-Deloitte risk and cyber partner) and CTO (security software engineer)", background: "Enterprise risk consulting, compliance automation, and B2B SaaS architecture.", missingRoles: "None currently", advisors: "CISO council member (Fortune 500 financial); legal tech advisor (NIS2 / DORA specialist)" },
    market: { tam: "~€6B (European third-party risk management and GRC software)", sam: "~€1.5B (regulated financial services and insurance enterprises)", competitors: "OneTrust, Archer GRC, ProcessUnity, Prevalent, Venminder", differentiator: "Supplier-facing monitoring with automated evidence collection — not just questionnaires. Continuous rather than point-in-time." },
    unitEconomics: { mrr: "~EUR 92k", arr: "EUR 1.1M", cac: "~EUR 18k per enterprise (12-month sales cycle)", ltv: "~EUR 150k per enterprise over 3 years (net revenue retention 118%)", churn: "Under 6% logo churn annual", salesChannel: "Outbound enterprise sales + compliance ecosystem partnerships (Big 4, legal advisors)" },
    funding: { totalRaised: "EUR 2.2M (seed)", roundCount: "1", notableInvestors: "Dublin enterprise tech VC", postMoneyVal: "EUR 8M (post-seed)" },
    exit: { horizon: "3–5 years", type: "Strategic acquisition", acquirers: "OneTrust, ServiceNow, IBM Security, SAP GRC, Workiva" },
  },
  {
    id: "factorymesh",
    name: "FactoryMesh AI",
    sector: "Industrial automation",
    stage: "Seed",
    geography: "Austria",
    trl: 8,
    ask: "EUR 2.9M seed",
    oneLiner: "Factory intelligence software for mid-market manufacturers that need to prove ROI without heavy service drag.",
    objective: "Raise preparation",
    preferredLens: "fundraising",
    problem: "Factories need practical automation gains, but deployments fail when implementation complexity outruns software economics.",
    customer: "Plant managers, operations leaders, and manufacturing groups with legacy equipment environments.",
    model: "Annual software license plus implementation fee for mid-market factories.",
    useOfFunds: "Deployment team, PLC integrations, and channel partnerships.",
    regulatory: {
      level: "Low",
      character: "Operational compliance standards",
      note: "Safety and data standards matter, but the bigger readiness issue is proving implementation can scale without service creep.",
    },
    transition: {
      level: "Medium",
      character: "Productivity and energy efficiency opportunity",
      note: "Energy prices and reshoring pressure support demand when the ROI case is concrete.",
    },
    evidence: ["EUR 68k MRR", "Five factories live", "Average downtime reduction 14%"],
    ip: "Deployment playbooks and anomaly models proprietary; limited patentability.",
    risks: ["Implementation scalability", "Incumbent automation suites", "Data quality variability"],
    missing: ["Implementation hours by customer", "Customer acquisition cost payback", "Reference calls with plant managers"],
    nextStep: "Package live-factory proof and services-burden discipline into one narrative before the next raise.",
    metrics: { revenue: "EUR 68k MRR", runway: "9 months", grossMargin: "61%", traction: "5 factories" },
    tags: ["industrial", "ai", "saas"],
    team: { size: "16–30", founders: "2 founders — CEO (ex-Siemens manufacturing ops) and CTO (computer vision engineer, PhD)", background: "Factory automation, machine learning for industrial sensors, and implementation delivery.", missingRoles: "VP Sales", advisors: "Mid-market manufacturing operator (DACH); PLC and OPC-UA integration specialist" },
    market: { tam: "~€8B (European industrial software and AI for manufacturing)", sam: "~€1.5B (mid-market manufacturers in DACH region)", competitors: "Sight Machine, C3.ai industrial, Siemens MindSphere, Rockwell Automation", differentiator: "Deployable in legacy environments without new hardware — integration-first, not platform-first. Faster time-to-value." },
    unitEconomics: { mrr: "EUR 68k", arr: "EUR 816k (run rate)", cac: "~EUR 12k per factory (6-month sales and integration cycle)", ltv: "~EUR 70k per factory over 3 years", churn: "Under 10% annual", salesChannel: "Direct to plant managers; OEM channel partnership in development" },
    funding: { totalRaised: "EUR 1.2M (pre-seed + seed)", roundCount: "2", notableInvestors: "DACH industrial tech angels; EIC Accelerator grant", postMoneyVal: "EUR 7M (post-seed)" },
    exit: { horizon: "5–7 years", type: "Strategic acquisition", acquirers: "Siemens, ABB, Dassault Systèmes, AVEVA, Rockwell Automation" },
  },
];

const STORAGE_KEY = "openeconomics-foundry-profiles-v1";
const tabs = [
  ["workspace", "Overview"],
  ["intake", "Profile"],
  ["evidence", "Evidence"],
  ["memo", "Memo"],
  ["esg", "ESG"],
];

const marketSignals = [
  "Investors want to see real evidence, financial discipline, and a clear plan for how the money will be used.",
  "Pilot partners want to know who owns implementation, how much work is involved, and what the expected return looks like.",
  "Grant programs look for a clear commercialization plan, clean IP ownership, and measurable outcomes.",
];

const stageOptions = ["Pre-seed", "Seed", "Series A", "Series B", "Growth"];
const geographyOptions = ["Austria", "France", "Germany", "Greece", "Ireland", "Italy", "Netherlands", "Portugal", "Spain", "Switzerland", "United Kingdom", "European Union"];
const trlOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const levelOptions = ["Low", "Medium", "High"];
const exposureLevelOptions = ["Not sure", "Low", "Medium", "High"];
const yesNoOptions = ["Unknown", "Yes", "No"];
const teamSizeOptions = ["1–3", "4–7", "8–15", "16–30", "31–50", "50+"];
const missingRoleOptions = ["None currently", "CFO", "CTO", "CMO / Marketing", "VP Sales", "COO", "Clinical / Medical lead", "Regulatory lead"];
const salesChannelOptions = ["Direct enterprise sales", "Product-led growth", "Distributor / channel partner", "OEM / licensing", "Government procurement", "Marketplace or platform", "Mixed"];
const exitHorizonOptions = ["2–3 years", "3–5 years", "5–7 years", "7+ years", "Not decided yet"];
const exitTypeOptions = ["Strategic acquisition", "Financial acquisition (PE / buy-out)", "IPO", "Management buyout", "Not decided yet"];
const questionnaireStatusOptions = ["Not started", "In progress", "Ready for review", "Completed"];
const esgQuestionOptions = ["Yes", "Working on it", "No"];
const timeframeOptions = ["Unknown", "Less than 1 year", "1-3 years", "3-5 years", "More than 5 years"];
const evidenceOptions = ["Unknown", "Founder estimate", "Internal data", "Third-party evidence"];

const lensConfig = {
  fundraising: {
    label: "Raise preparation",
    short: "Raise",
    eyebrow: "Fundraising track",
    intro: "Get ready for a fundraising conversation: clear ask, real evidence, and honest open questions — all in one place.",
    bestFor: "Fundraising conversations where the reader needs a clear picture of the ask, the proof, and the next milestone.",
    outcome: "A tighter fundraising narrative with the ask, evidence, risks, and use of funds clearly connected.",
    weights: { completeness: 0.18, evidence: 0.24, narrative: 0.24, diligence: 0.22, exposure: 0.12 },
    guide: [
      {
        label: "What the raise is for",
        need: "What you're raising, what you'll spend it on, and what it should make possible.",
        destination: "Profile: Funding ask and Use of funds",
        source: "Start from your budget and hiring plan. Focus on the 2–3 spend items that will most change the company's risk profile.",
        fields: ["ask", "useOfFunds", "nextStep"],
      },
      {
        label: "Proof of customer demand",
        need: "Proof that the problem is real — not just what you believe, but what customers have confirmed.",
        destination: "Evidence: Evidence available and Missing items",
        source: "Look for letters of intent, pilots, usage data, paid contracts, customer references, or written feedback.",
        fields: ["evidence", "metrics.traction", "missing"],
      },
      {
        label: "Answering due diligence",
        need: "The questions an investor will ask before committing — about who owns what, the business model, and what could go wrong.",
        destination: "Evidence: Risks and missing items; Profile: IP position",
        source: "Check your ownership structure, IP assignments, freedom-to-operate status, unit economics, and any unresolved legal or technical issues.",
        fields: ["risks", "missing", "ip"],
      },
    ],
    checklist: [
      "Define exactly what this round funds and what milestone it unlocks.",
      "Back up your claims with real proof: pilots, paying customers, signed contracts, or validated results.",
      "Show how the next round becomes easier if this one lands.",
      "Be ready to answer questions about ownership, IP, and any regulatory requirements before they come up.",
    ],
  },
  partner: {
    label: "Pilot partner outreach",
    short: "Partner",
    eyebrow: "Partnership track",
    intro: "Prepare the company for a partner that expects proof, a realistic implementation plan, and clear expectations — not just a good story.",
    bestFor: "Partner or channel reviews where implementation realism matters as much as the narrative.",
    outcome: "A clear partner case: buyer problem, proof of results, what deployment involves, and who owns the risk.",
    weights: { completeness: 0.16, evidence: 0.28, narrative: 0.2, diligence: 0.18, exposure: 0.18 },
    guide: [
      {
        label: "Who buys and how",
        need: "Who has the problem, who uses the product, who signs the deal, and how their day-to-day changes.",
        destination: "Profile: Customer and buyer; Problem statement",
        source: "Use discovery notes, pilot calls, procurement conversations, and implementation notes. Name job roles, not just organizations.",
        fields: ["customer", "problem"],
      },
      {
        label: "What deployment involves",
        need: "What a partner needs to set up, approve, train, or manage to make a pilot work.",
        destination: "Profile: Regulatory exposure; Evidence: Risks",
        source: "Review your integration requirements, security needs, site setup, data access, and ongoing support expectations.",
        fields: ["assessment.exposure.note", "assessment.exposure.certificationsNeeded", "risks"],
      },
      {
        label: "Proving results",
        need: "A clear before-and-after picture of what the pilot proves and how success will be measured.",
        destination: "Evidence: Evidence available and Missing items",
        source: "Use pilot targets, baseline data, outcome reports, ROI models, deployment records, and partner feedback.",
        fields: ["evidence", "metrics.traction", "missing"],
      },
    ],
    checklist: [
      "Describe the problem in the buyer's language, not in startup or technical terms.",
      "Show what it takes to implement, what needs to be connected, and the expected return for each customer type.",
      "Turn pilots or evaluations into a simple proof story: what was measured before, during, and after.",
      "Be clear about who signs the agreement, who uses the product, and who owns the risk once it's deployed.",
    ],
  },
  commercialization: {
    label: "Research commercialization",
    short: "R&D",
    eyebrow: "Commercialization track",
    intro: "For spinouts and research teams moving from a validated result to a credible commercial path.",
    bestFor: "Spinouts and research teams translating what they've built into a credible route to market.",
    outcome: "A clear path from what you've built — technology maturity, ownership, and first target market — to a believable commercial plan.",
    weights: { completeness: 0.18, evidence: 0.18, narrative: 0.2, diligence: 0.18, exposure: 0.26 },
    guide: [
      {
        label: "What you've built",
        need: "The specific result you've developed, how mature it is, who owns it, and which market to target first.",
        destination: "Profile: One-liner, TRL, IP position, and Business model",
        source: "Use your project reports, lab results, patent filings, university agreements, and any external technical evaluations.",
        fields: ["oneLiner", "trl", "ip", "model"],
      },
      {
        label: "Path to commercialization",
        need: "Whether to spin out a company, license the technology, or pursue a pilot-led route to market.",
        destination: "Profile: Customer and buyer; Use of funds; Next step",
        source: "Consider partner interest, manufacturing requirements, qualification timelines, and the fastest credible path to your first customer.",
        fields: ["customer", "useOfFunds", "nextStep"],
      },
      {
        label: "Bridging tech and business value",
        need: "Evidence that what you've built has real business value — not just that it works, but that buyers will pay for it.",
        destination: "Evidence: Evidence available, Risks, and Missing items",
        source: "Look for external validation, manufacturer evaluations, prototype results, cost models, IP clearance work, and certification requirements.",
        fields: ["evidence", "risks", "missing", "assessment.exposure.certificationsNeeded"],
      },
    ],
    checklist: [
      "Clearly define what you've built, how developed it is, and which market you're targeting first.",
      "Decide on your commercialization route: spin-off company, licensing, or a mix of both.",
      "Document who owns the IP, confirm you're free to commercialize it, and map out your most realistic path to market.",
      "Translate your technical strength into one commercial story that someone outside your field can understand.",
    ],
  },
  grant: {
    label: "Grant and impact packaging",
    short: "Grant",
    eyebrow: "Grant track",
    intro: "Prepare the company for non-dilutive or impact-led applications where evidence, a clear commercialization plan, and delivery structure are evaluated.",
    bestFor: "Grant and impact applications where your commercialization plan, measurable outcomes, and ability to deliver are reviewed.",
    outcome: "A preparation package that connects evidence, delivery plan, downstream impact, and open questions.",
    weights: { completeness: 0.22, evidence: 0.2, narrative: 0.18, diligence: 0.16, exposure: 0.24 },
    guide: [
      {
        label: "Why this program fits",
        need: "Why this work matters now, who benefits from it, and how it moves from research into real-world use.",
        destination: "Profile: Problem statement, Transition note, and SROI data",
        source: "Use the program call, policy priorities, evidence of who benefits, and interviews with customers or stakeholders.",
        fields: ["problem", "transition.note", "assessment.sroi.beneficiaryGroups", "assessment.sroi.primaryOutcome"],
      },
      {
        label: "Who delivers what",
        need: "Who does the work, what you depend on, and what proves your team can actually deliver.",
        destination: "Profile: Use of funds and Regulatory exposure; Evidence: Evidence available",
        source: "Review your work plan, team roles, subcontractors, pilot sites, procurement constraints, certifications, and evidence of past delivery.",
        fields: ["useOfFunds", "assessment.exposure.note", "assessment.exposure.certificationsNeeded", "evidence"],
      },
      {
        label: "Proof of impact",
        need: "The outcome you're targeting, what you're measuring it against, and the data you'll need to prove impact.",
        destination: "Profile: SROI data and ESG tracking",
        source: "Use baseline data, beneficiary counts, monitoring data, ESG forms, and any third-party evidence available.",
        fields: ["assessment.sroi.beneficiaryGroups", "assessment.sroi.primaryOutcome", "assessment.sroi.annualReach", "assessment.esg.questionnaire.socialOutcome"],
      },
    ],
    checklist: [
      "Show why this work matters now and how it moves from research into real-world use.",
      "Tie impact claims to measurable outcomes, not broad mission statements.",
      "Be clear about any partners, delivery channels, or networks you depend on to deliver results.",
      "Describe your commercialization plan, what funding you need, and what commercial impact you expect.",
    ],
  },
};

const app = document.querySelector("#app");
const PROFILE_STORAGE_VERSION = 2;

const state = {
  profiles: loadProfiles(),
  activeId: "aerolith",
  lens: "fundraising",
  query: "",
  sector: "All",
  stage: "All",
  tab: "workspace",
  onboarding: typeof localStorage !== "undefined" && !localStorage.getItem(STORAGE_KEY),
  draft: { name: "", sector: "", stage: "", geography: "", ask: "", roundType: "", oneLiner: "" },
};

let searchRenderTimer = null;

syncStateFromHash();

app.addEventListener("click", handleClick);
app.addEventListener("input", handleInput);
app.addEventListener("change", handleChange);
app.addEventListener("keydown", handleKeyDown);
window.addEventListener("hashchange", () => {
  syncStateFromHash();
  render();
});

render();

function loadProfiles() {
  if (typeof localStorage === "undefined") return seedProfiles();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedProfiles();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return seedProfiles();
    return normalizeStoredProfiles(parsed);
  } catch {
    return seedProfiles();
  }
}

function seedProfiles() {
  return profileTemplates.map((template) => buildProfileRecord(template, { source: "template", templateId: template.id }));
}

function normalizeStoredProfiles(savedProfiles) {
  const byTemplateId = new Map();
  const customProfiles = [];
  const now = new Date().toISOString();

  for (const saved of savedProfiles) {
    if (!saved || typeof saved !== "object") continue;
    const templateId = saved.templateId || (profileTemplates.some((template) => template.id === saved.id) ? saved.id : "");
    if (templateId && profileTemplates.some((template) => template.id === templateId)) {
      byTemplateId.set(templateId, saved);
      continue;
    }
    customProfiles.push(normalizeProfileRecord(saved, { source: "custom", templateId: null, now }));
  }

  const templateProfiles = profileTemplates.map((template) => {
    const saved = byTemplateId.get(template.id);
    return normalizeProfileRecord(saved || {}, {
      source: "template",
      templateId: template.id,
      template,
      now,
    });
  });

  return [...templateProfiles, ...customProfiles];
}

function buildProfileRecord(template, metadata = {}, saved = {}) {
  return normalizeProfileRecord(saved, {
    source: metadata.source || "template",
    templateId: metadata.templateId ?? template.id,
    template,
    now: new Date().toISOString(),
  });
}

function normalizeProfileRecord(saved, metadata = {}) {
  const template = metadata.template || profileTemplates.find((item) => item.id === metadata.templateId) || null;
  const baseTemplate = template ? structuredClone(template) : null;
  const source = metadata.source || saved.source || (template ? "template" : "custom");
  const templateId = metadata.templateId ?? saved.templateId ?? (template ? template.id : null);
  const base = baseTemplate
    ? {
        ...baseTemplate,
        assessment: defaultAssessment(baseTemplate),
        team: { ...defaultTeam(), ...(baseTemplate.team || {}) },
        market: { ...defaultMarket(), ...(baseTemplate.market || {}) },
        unitEconomics: { ...defaultUnitEconomics(), ...(baseTemplate.unitEconomics || {}) },
        funding: { ...defaultFunding(), ...(baseTemplate.funding || {}) },
        exit: { ...defaultExit(), ...(baseTemplate.exit || {}) },
      }
    : createEmptyProfile(saved.id || `custom-${Date.now().toString(36)}`);

  const merged = {
    ...base,
    ...saved,
    source,
    templateId,
    createdAt: saved.createdAt || metadata.now || new Date().toISOString(),
    updatedAt: saved.updatedAt || saved.createdAt || metadata.now || new Date().toISOString(),
    regulatory: { ...(base.regulatory || {}), ...(saved.regulatory || {}) },
    transition: { ...(base.transition || {}), ...(saved.transition || {}) },
    metrics: { ...(base.metrics || {}), ...(saved.metrics || {}) },
    team: { ...defaultTeam(), ...(base.team || {}), ...(saved.team || {}) },
    market: { ...defaultMarket(), ...(base.market || {}), ...(saved.market || {}) },
    unitEconomics: { ...defaultUnitEconomics(), ...(base.unitEconomics || {}), ...(saved.unitEconomics || {}) },
    funding: { ...defaultFunding(), ...(base.funding || {}), ...(saved.funding || {}) },
    exit: { ...defaultExit(), ...(base.exit || {}), ...(saved.exit || {}) },
    assessment: mergeAssessment(base.assessment || defaultAssessment(base), saved.assessment),
    evidence: Array.isArray(saved.evidence) ? saved.evidence : base.evidence || [],
    risks: Array.isArray(saved.risks) ? saved.risks : base.risks || [],
    missing: Array.isArray(saved.missing) ? saved.missing : base.missing || [],
    tags: Array.isArray(saved.tags) ? saved.tags : base.tags || [],
  };

  if (!merged.preferredLens || !lensConfig[merged.preferredLens]) {
    merged.preferredLens = template ? template.preferredLens : saved.preferredLens || "fundraising";
  }

  if (source === "custom") {
    merged.source = "custom";
    merged.templateId = null;
  }

  return merged;
}

function createEmptyProfile(id) {
  return {
    id,
    name: "My company",
    source: "custom",
    templateId: null,
    preferredLens: "fundraising",
    sector: "Climate tech",
    stage: "Seed",
    geography: "European Union",
    oneLiner: "",
    problem: "",
    customer: "",
    model: "",
    ask: "",
    useOfFunds: "",
    nextStep: "",
    trl: "",
    ip: "",
    evidence: [],
    risks: [],
    missing: [],
    regulatory: { level: "Low", character: "Minimal regulatory impact", note: "" },
    transition: { level: "Low", character: "Minimal climate exposure", note: "" },
    tags: [],
    metrics: { revenue: "", runway: "", grossMargin: "", traction: "" },
    team: defaultTeam(),
    market: defaultMarket(),
    unitEconomics: defaultUnitEconomics(),
    funding: defaultFunding(),
    exit: defaultExit(),
    assessment: defaultAssessment({ geography: "European Union", sector: "Climate tech", tags: [], evidence: [] }),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function defaultTeam() {
  return { size: "", founders: "", background: "", missingRoles: "", advisors: "" };
}
function defaultMarket() {
  return { tam: "", sam: "", competitors: "", differentiator: "" };
}
function defaultUnitEconomics() {
  return { mrr: "", arr: "", cac: "", ltv: "", churn: "", salesChannel: "" };
}
function defaultFunding() {
  return { totalRaised: "", roundCount: "", notableInvestors: "", postMoneyVal: "" };
}
function defaultExit() {
  return { horizon: "", type: "", acquirers: "" };
}

function defaultAssessment(profile) {
  return {
    exposure: {
      primaryJurisdiction: profile.geography,
      regulatedActivity: "Unknown",
      approvalPathKnown: "Unknown",
      approvalBodies: "",
      publicProcurementExposure: /municipal|water|energy/i.test(`${profile.sector} ${profile.tags.join(" ")}`) ? "Yes" : "Unknown",
      personalDataExposure: /health|ai|data|cyber/i.test(`${profile.sector} ${profile.tags.join(" ")}`) ? "Yes" : "Unknown",
      safetyCriticalExposure: /health|water|energy|industrial|materials/i.test(`${profile.sector} ${profile.tags.join(" ")}`) ? "Yes" : "Unknown",
      crossBorderConstraints: "Unknown",
      certificationsNeeded: "",
      note: "",
    },
    esg: {
      questionnaire: {
        envTracking: "",
        envPolicy: "",
        emissionsImpact: "",
        diversityPolicy: "",
        wellbeingTracking: "",
        socialOutcome: "",
        hasBoard: "",
        ethicsPolicy: "",
        financialsReviewed: "",
      },
    },
    sroi: {
      beneficiaryGroups: "",
      primaryOutcome: "",
      baselineAvailable: "Unknown",
      outcomeEvidence: profile.evidence.length >= 3 ? "Internal data" : "Unknown",
      measurementWindow: "Unknown",
      monetizationProxyAvailable: "Unknown",
      deadweightEstimated: "Unknown",
      attributionDataAvailable: "Unknown",
      annualReach: "",
      note: "",
    },
  };
}

function mergeAssessment(base, saved = {}) {
  return {
    exposure: { ...base.exposure, ...(saved.exposure || {}) },
    esg: { ...base.esg, ...(saved.esg || {}), questionnaire: { ...base.esg.questionnaire, ...((saved.esg || {}).questionnaire || {}) } },
    sroi: { ...base.sroi, ...(saved.sroi || {}) },
  };
}

function persistProfiles() {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.profiles.map((profile) => serializeProfile(profile))));
}

function serializeProfile(profile) {
  return {
    ...structuredClone(profile),
    source: profile.source || (profile.templateId ? "template" : "custom"),
    templateId: profile.templateId ?? null,
    createdAt: profile.createdAt || new Date().toISOString(),
    updatedAt: profile.updatedAt || profile.createdAt || new Date().toISOString(),
  };
}

function syncStateFromHash() {
  const raw = (location.hash || "").replace(/^#/, "");
  if (!raw) return;
  const params = new URLSearchParams(raw);
  const profile = params.get("profile");
  const lens = params.get("lens");
  const tab = params.get("tab");
  const activeProfileId = profile && profileById(profile) ? profile : null;
  if (activeProfileId) {
    state.activeId = activeProfileId;
    if (lens && lensConfig[lens]) {
      state.lens = lens;
    } else {
      state.lens = preferredLensForProfile(profileById(activeProfileId));
    }
  } else if (lens && lensConfig[lens]) {
    state.lens = lens;
  }
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

function preferredLensForProfile(profile) {
  if (profile && profile.preferredLens && lensConfig[profile.preferredLens]) return profile.preferredLens;
  return computeBestLens(profile).key;
}

function activeProfile() {
  return profileById(state.activeId) || state.profiles[0];
}

function allSectors() {
  return ["All", ...new Set(state.profiles.map((profile) => profile.sector).filter(Boolean))];
}

function allStages() {
  return ["All", ...new Set(state.profiles.map((profile) => profile.stage).filter(Boolean))];
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

const readinessBlueprint = {
  completeness: {
    label: "Profile completeness",
    note: "Core company fields are in place.",
    checks: [
      { id: "one-liner", label: "The company has a one-line description", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.oneLiner) },
      { id: "problem", label: "The problem is stated", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.problem) },
      { id: "customer", label: "The customer or buyer is named", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.customer) },
      { id: "model", label: "The business model is stated", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.model) },
      { id: "ask", label: "The funding ask is filled in", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.ask) },
      { id: "use-of-funds", label: "Use of funds is explained", category: "coverage", points: 10, threshold: 1, test: (profile) => specificTextScore(profile.useOfFunds, ["pilot", "hire", "validation", "commercial", "launch", "certification", "deployment", "repeatable"]) },
      { id: "next-step", label: "The next preparation step is action-oriented", category: "quality", points: 10, threshold: 0.7, test: (profile) => actionOrientedScore(profile.nextStep) },
      { id: "team", label: "The founding team is described", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.team.founders) },
      { id: "metrics", label: "At least one operating metric is present", category: "coverage", points: 10, threshold: 1, test: (profile) => operatingMetricScore(profile) },
      { id: "ip", label: "IP position is stated", category: "coverage", points: 10, threshold: 1, test: (profile) => basicPresenceScore(profile.ip) },
    ],
  },
  evidence: {
    label: "Evidence quality",
    note: "Proof is specific and linked to an outcome.",
    checks: [
      { id: "has-evidence", label: "Evidence items are listed", category: "coverage", points: 16, threshold: 1, test: (profile) => countList(profile.evidence) > 0 },
      { id: "customer-proof", label: "At least one customer-facing proof point is visible", category: "quality", points: 16, threshold: 0.7, test: (profile) => evidenceListScore(profile.evidence, ["pilot", "loi", "customer", "contract", "agreement", "paying", "buyer", "reference", "clinic", "factory", "utility", "partner"]) },
      { id: "technical-proof", label: "At least one technical or operational proof point is visible", category: "quality", points: 16, threshold: 0.7, test: (profile) => evidenceListScore(profile.evidence, ["validation", "lab", "study", "tested", "deployed", "audit", "certified", "prototype", "pilot run", "evaluation"]) },
      { id: "metric-linked", label: "Evidence links to a metric, milestone, or named outcome", category: "quality", points: 16, threshold: 0.7, test: (profile) => evidenceOutcomeScore(profile) },
      { id: "specificity", label: "Evidence is more specific than generic claims", category: "quality", points: 20, threshold: 0.7, test: (profile) => evidenceSpecificityScore(profile.evidence) },
      { id: "missing-proof", label: "Missing proof is named clearly", category: "coverage", points: 16, threshold: 1, test: (profile) => countList(profile.missing) > 0 },
    ],
  },
  narrative: {
    label: "Narrative clarity",
    note: "The story is concrete and action-oriented.",
    checks: [
      { id: "problem-specific", label: "The problem is concrete", category: "coverage", points: 16, threshold: 0.7, test: (profile) => specificTextScore(profile.problem, ["customer", "market", "compliance", "deployment", "workflow", "cost", "risk", "pain"]) },
      { id: "customer-specific", label: "The customer definition is specific", category: "coverage", points: 16, threshold: 0.7, test: (profile) => specificTextScore(profile.customer, ["buyer", "user", "clinic", "utility", "factory", "team", "operator", "procurement"]) },
      { id: "ask-specific", label: "The ask is concrete", category: "coverage", points: 16, threshold: 0.7, test: (profile) => specificTextScore(profile.ask, ["round", "grant", "pilot", "seed", "series", "funding", "partnership"]) },
      { id: "funds-linked", label: "Use of funds links to a milestone", category: "quality", points: 16, threshold: 0.7, test: (profile) => milestoneLinkScore(profile.useOfFunds) },
      { id: "next-step", label: "The next step is action-oriented", category: "quality", points: 16, threshold: 0.7, test: (profile) => actionOrientedScore(profile.nextStep) },
      { id: "model-clear", label: "The business model is easy to explain", category: "coverage", points: 20, threshold: 0.7, test: (profile) => specificTextScore(profile.model, ["subscription", "licensing", "usage", "service", "contract", "hardware", "pilot", "recurring", "revenue"]) },
    ],
  },
  diligence: {
    label: "Diligence visibility",
    note: "Risks and open questions are easy to inspect.",
    checks: [
      { id: "ip", label: "IP status is stated", category: "coverage", points: 20, threshold: 1, test: (profile) => basicPresenceScore(profile.ip) },
      { id: "risks", label: "Risks are named", category: "coverage", points: 20, threshold: 1, test: (profile) => countList(profile.risks) > 0 },
      { id: "missing", label: "Missing items are named", category: "coverage", points: 20, threshold: 1, test: (profile) => countList(profile.missing) > 0 },
      { id: "regulatory-note", label: "Regulatory context is explained", category: "quality", points: 20, threshold: 0.7, test: (profile) => specificTextScore(profile.regulatory.note, ["demand", "burden", "access", "barrier", "defensibility", "timing", "approval", "compliance"]) },
      { id: "transition-note", label: "Transition context is explained", category: "quality", points: 10, threshold: 0.7, test: (profile) => specificTextScore(profile.transition.note, ["demand", "burden", "access", "barrier", "defensibility", "timing", "tailwind", "resilience"]) },
      { id: "ownership-path", label: "Ownership or commercialization path questions are visible", category: "quality", points: 10, threshold: 0.7, test: (profile) => ownershipPathScore(profile) },
    ],
  },
  exposure: {
    label: "Exposure framing",
    note: "Regulatory and transition exposure are framed as context, not noise.",
    checks: [
      { id: "reg-level", label: "Regulatory exposure level is set", category: "coverage", points: 16, threshold: 1, test: (profile) => nonUnknownPresenceScore(profile.regulatory.level) },
      { id: "transition-level", label: "Transition exposure level is set", category: "coverage", points: 16, threshold: 1, test: (profile) => nonUnknownPresenceScore(profile.transition.level) },
      { id: "market", label: "Primary market is named", category: "coverage", points: 16, threshold: 1, test: (profile) => basicPresenceScore(profile.assessment.exposure.primaryJurisdiction) },
      { id: "reg-framing", label: "Regulatory note frames the trade-off", category: "quality", points: 16, threshold: 0.7, test: (profile) => exposureFramingScore(profile.regulatory.note) },
      { id: "transition-framing", label: "Transition note frames the trade-off", category: "quality", points: 16, threshold: 0.7, test: (profile) => exposureFramingScore(profile.transition.note) },
      { id: "extra-context", label: "Approval or certification context is captured when relevant", category: "quality", points: 20, threshold: 0.7, test: (profile) => exposureContextScore(profile) },
    ],
  },
};

function computeReadiness(profile, lensKey = state.lens) {
  const lens = lensConfig[lensKey];
  const moduleMap = Object.entries(readinessBlueprint).map(([key, module]) => evaluateReadinessModule(profile, key, module));
  const moduleByKey = Object.fromEntries(moduleMap.map((module) => [module.key, module]));
  const weighted = Math.round(
    moduleByKey.completeness.value * lens.weights.completeness +
      moduleByKey.evidence.value * lens.weights.evidence +
      moduleByKey.narrative.value * lens.weights.narrative +
      moduleByKey.diligence.value * lens.weights.diligence +
      moduleByKey.exposure.value * lens.weights.exposure
  );

  const overall = clamp(weighted, 18, 96);
  const status = overall >= 80 ? "Ready to share" : overall >= 64 ? "Sharpen before outreach" : overall >= 48 ? "Needs more work" : "Too early to circulate";
  const strongestModule = [...moduleMap].sort((a, b) => b.value - a.value)[0];
  const weakestModule = [...moduleMap].sort((a, b) => a.value - b.value)[0];
  const strongestChecks = unique(moduleMap.flatMap((module) => module.triggeredChecks.map((check) => check.label))).slice(0, 4);
  const blockers = unique(moduleMap.flatMap((module) => module.missingChecks.map((check) => check.note || check.label)).concat(profile.missing.slice(0, 3))).slice(0, 6);

  return {
    overall,
    status,
    moduleScores: moduleMap,
    strongSignals: strongestChecks.length ? strongestChecks : [strongestModule.summary],
    blockers,
    weakestModule: weakestModule.key,
  };
}

function evaluateReadinessModule(profile, key, module) {
  const checks = module.checks.map((check) => {
    const rawValue = check.test(profile);
    const value = clamp(typeof rawValue === "number" ? rawValue : rawValue ? 1 : 0, 0, 1);
    const threshold = check.threshold ?? 0.75;
    return {
      ...check,
      value,
      met: value >= threshold,
    };
  });

  const totalPoints = checks.reduce((sum, check) => sum + check.points, 0) || 1;
  const earnedPoints = checks.reduce((sum, check) => sum + check.points * check.value, 0);
  const value = clamp(Math.round((earnedPoints / totalPoints) * 100), 0, 100);
  const triggeredChecks = checks.filter((check) => check.met);
  const missingChecks = checks.filter((check) => !check.met);
  const triggeredLabels = triggeredChecks.map((check) => check.label);
  const missingLabels = missingChecks.map((check) => check.label);
  const summary = `${triggeredChecks.length} of ${checks.length} checks met`;
  const detail = triggeredLabels.length && missingLabels.length
    ? `Met: ${triggeredLabels.slice(0, 2).join("; ")}. Missing: ${missingLabels.slice(0, 2).join("; ")}.`
    : triggeredLabels.length
      ? `Met: ${triggeredLabels.slice(0, 3).join("; ")}.`
      : `Missing: ${missingLabels.slice(0, 3).join("; ")}.`;
  const note = `${module.note} ${summary}.`;

  return {
    key,
    label: module.label,
    value,
    note,
    summary,
    detail,
    triggeredChecks,
    missingChecks,
    coverage: scoreChecksByCategory(checks, "coverage"),
    quality: scoreChecksByCategory(checks, "quality"),
  };
}

function scoreChecksByCategory(checks, category) {
  const subset = checks.filter((check) => check.category === category);
  if (!subset.length) return 0;
  const totalPoints = subset.reduce((sum, check) => sum + check.points, 0) || 1;
  const earnedPoints = subset.reduce((sum, check) => sum + check.points * check.value, 0);
  return clamp(Math.round((earnedPoints / totalPoints) * 100), 0, 100);
}

function basicPresenceScore(value) {
  return isPresent(value) ? 1 : 0;
}

function nonUnknownPresenceScore(value) {
  if (!isPresent(value)) return 0;
  const normalized = String(value).trim().toLowerCase();
  return ["unknown", "not started", "not sure", "not assessed"].includes(normalized) ? 0 : 1;
}

function specificTextScore(value, markers = []) {
  const text = normalizeText(value);
  if (!text) return 0;
  let score = 0.18;
  if (text.length >= 32) score += 0.22;
  if (text.length >= 72) score += 0.15;
  if (/\d|%|€|\$/.test(text)) score += 0.15;
  if (markers.some((marker) => text.toLowerCase().includes(marker.toLowerCase()))) score += 0.2;
  if (text.split(/\s+/).length >= 10) score += 0.1;
  return clamp(score, 0, 1);
}

function actionOrientedScore(value) {
  const text = normalizeText(value);
  if (!text) return 0;
  const verbs = ["show", "package", "validate", "convert", "launch", "ship", "prepare", "reduce", "secure", "close", "pilot", "publish", "hire", "complete"];
  let score = specificTextScore(text, verbs);
  if (verbs.some((verb) => text.toLowerCase().startsWith(verb))) score += 0.1;
  return clamp(score, 0, 1);
}

function milestoneLinkScore(value) {
  const text = normalizeText(value);
  if (!text) return 0;
  const markers = ["pilot", "validation", "certification", "launch", "hire", "commercial", "deployment", "procurement", "repeatable", "revenue", "scale", "conversion", "qualification"];
  return specificTextScore(text, markers);
}

function ownershipPathScore(profile) {
  const text = normalizeText(`${profile.ip} ${profile.team.missingRoles} ${profile.nextStep}`);
  return specificTextScore(text, ["ownership", "license", "spinout", "assignment", "trade secret", "freedom to operate", "commercial", "route to market", "qualification"]);
}

function exposureFramingScore(value) {
  const text = normalizeText(value);
  if (!text) return 0;
  return specificTextScore(text, ["demand", "burden", "access", "barrier", "defensible", "defensibility", "timing", "compliance", "tailwind", "risk", "market"]);
}

function exposureContextScore(profile) {
  const text = normalizeText(`${profile.assessment.exposure.certificationsNeeded} ${profile.assessment.exposure.approvalBodies} ${profile.assessment.exposure.crossBorderConstraints} ${profile.assessment.exposure.approvalPathKnown}`);
  if (!text) return 0;
  return specificTextScore(text, ["certification", "approval", "audit", "cross-border", "procurement", "data", "medical", "safety", "regulatory"]);
}

function operatingMetricScore(profile) {
  const values = [profile.metrics.revenue, profile.metrics.runway, profile.metrics.grossMargin, profile.metrics.traction];
  return values.some((value) => isPresent(value)) ? (values.filter((value) => specificTextScore(value) > 0.3).length >= 2 ? 1 : 0.75) : 0;
}

function evidenceListScore(items, markers = []) {
  if (!Array.isArray(items) || !items.length) return 0;
  const scores = items.map((item) => specificTextScore(item, markers));
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function evidenceSpecificityScore(items) {
  if (!Array.isArray(items) || !items.length) return 0;
  const scores = items.map((item) => {
    const text = normalizeText(item);
    if (!text) return 0;
    let score = 0.15;
    if (text.length >= 24) score += 0.2;
    if (text.length >= 50) score += 0.15;
    if (/\d|%|€|\$/.test(text)) score += 0.2;
    if (/[A-Z][a-z]+/.test(text) || /\b[A-Z]{2,}\b/.test(text)) score += 0.15;
    if (/(pilot|LOI|customer|contract|agreement|study|audit|certified|deployed|validation|metric|outcome|runway|revenue|arr|mrr)/i.test(text)) score += 0.2;
    return clamp(score, 0, 1);
  });
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function evidenceOutcomeScore(profile) {
  const evidenceText = normalizeText(profile.evidence.join(" "));
  const metricText = normalizeText(`${profile.metrics.revenue} ${profile.metrics.traction} ${profile.metrics.runway} ${profile.metrics.grossMargin}`);
  if (!evidenceText) return 0;
  return specificTextScore(`${evidenceText} ${metricText}`, ["metric", "milestone", "outcome", "revenue", "runway", "traction", "pilot", "customer", "patient", "factory", "sensor", "MW", "clinic", "contract", "reduction", "improvement"]);
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function computeBestLens(profile) {
  const ranked = Object.entries(lensConfig)
    .map(([key, config]) => ({ key, label: config.label, readiness: computeReadiness(profile, key) }))
    .sort((a, b) => b.readiness.overall - a.readiness.overall);
  return ranked[0];
}

function computeExposureCollection(profile) {
  const fields = [
    profile.regulatory.level,
    profile.transition.level,
    profile.assessment.exposure.primaryJurisdiction,
  ];
  return buildCollectionStatus(fields, "Regulatory exposure", "This section affects readiness because it frames market access, compliance burden, and defensibility in the current profile.");
}

function computeEsgCollection(profile) {
  const q = profile.assessment.esg.questionnaire;
  const fields = [q.envTracking, q.envPolicy, q.emissionsImpact, q.diversityPolicy, q.wellbeingTracking, q.socialOutcome, q.hasBoard, q.ethicsPolicy, q.financialsReviewed];
  return buildCollectionStatus(fields, "ESG questionnaire", "Optional structured preparation input stored for later reuse. It does not change the readiness score directly.");
}

function computeSroiCollection(profile) {
  const sroi = profile.assessment.sroi;
  const fields = [sroi.beneficiaryGroups, sroi.primaryOutcome, sroi.annualReach];
  return buildCollectionStatus(fields, "Social impact data", "Optional structured preparation input for later memo and impact packaging work. It does not change the readiness score directly.");
}

function buildCollectionStatus(fields, label, detail) {
  const total = fields.length;
  const completed = fields.filter(hasCollectionValue).length;
  const status = completed === total ? "Complete" : completed >= Math.ceil(total * 0.55) ? "In progress" : "Incomplete";
  return { total, completed, status, detail, label };
}

function render(options = {}) {
  const focusState = options.preserveFocus ? captureFocusState() : null;
  if (state.onboarding) {
    app.innerHTML = renderOnboarding();
    if (options.focusTab) focusTabButton(options.focusTab);
    if (focusState) restoreFocusState(focusState);
    return;
  }

  const profile = activeProfile();
  const readiness = computeReadiness(profile);
  const bestLens = computeBestLens(profile);
  const submissionLens = lensConfig[state.lens] || lensConfig[preferredLensForProfile(profile)];

  updateHash();

  app.innerHTML = `
    <div class="shell">
      ${renderTopbar(profile, readiness)}
      <main id="main" class="page">
        ${renderHero(profile, readiness, submissionLens)}
        <section class="workspace">
          ${renderNavigator()}
          ${renderStudio(profile, readiness)}
          ${renderReadinessRail(profile, readiness, bestLens)}
        </section>
      </main>
    </div>
  `;

  if (options.focusTab) focusTabButton(options.focusTab);
  if (focusState) restoreFocusState(focusState);
}

function scheduleRender(options = {}) {
  clearTimeout(searchRenderTimer);
  searchRenderTimer = setTimeout(() => render(options), 120);
}

function captureFocusState() {
  const element = document.activeElement;
  if (!element || !app.contains(element)) return null;
  const selector = focusSelectorForElement(element);
  if (!selector) return null;
  return {
    selector,
    start: typeof element.selectionStart === "number" ? element.selectionStart : null,
    end: typeof element.selectionEnd === "number" ? element.selectionEnd : null,
  };
}

function restoreFocusState(focusState) {
  const element = app.querySelector(focusState.selector);
  if (!element) return;
  element.focus();
  if (typeof focusState.start === "number" && typeof focusState.end === "number" && typeof element.setSelectionRange === "function") {
    element.setSelectionRange(focusState.start, focusState.end);
  }
}

function focusSelectorForElement(element) {
  if (element.id) return `#${element.id}`;
  for (const key of ["input", "field", "metric", "list", "draft", "action", "tab"]) {
    if (element.dataset && element.dataset[key]) return `[data-${key}="${element.dataset[key]}"]`;
  }
  if (element.getAttribute("role") === "tab" && element.dataset.tab) return `[data-action="set-tab"][data-tab="${element.dataset.tab}"]`;
  return null;
}

function focusTabButton(tabKey) {
  const button = app.querySelector(`[data-action="set-tab"][data-tab="${tabKey}"]`);
  if (button) button.focus();
}

function renderOnboarding() {
  const d = state.draft;
  const roundOptions = ["Pre-seed", "Seed", "Series A", "Series B+", "Grant", "Strategic partnership"];
  const sectorOptions = allSectors().filter((s) => s !== "All");
  const stageOptions = allStages().filter((s) => s !== "All");

  const makeSelect = (field, placeholder, options, current) => `
    <div class="field">
      <label><span>${escapeHtml(placeholder)}</span>
        <select class="select-input" data-draft="${escapeAttr(field)}">
          <option value="" ${!current ? "selected" : ""}>Select…</option>
          ${options.map((o) => `<option value="${escapeAttr(o)}" ${o === current ? "selected" : ""}>${escapeHtml(o)}</option>`).join("")}
        </select>
      </label>
    </div>`;

  const makeText = (field, placeholder, current) => `
    <div class="field">
      <label><span>${escapeHtml(placeholder)}</span>
        <input class="text-input" type="text" data-draft="${escapeAttr(field)}" value="${escapeAttr(current)}" placeholder="${escapeAttr(placeholder)}" />
      </label>
    </div>`;

  return `
    <div class="shell">
      <header class="topbar">
        <div class="topbar__brand">
          <img src="assets/logos/OpenEconomics-LOGO WHITE.svg" alt="OpenEconomics" />
          <div>
            <p class="eyebrow">Preparation workspace</p>
            <h1>Foundry</h1>
          </div>
        </div>
      </header>
      <main id="main" class="onboarding-page">
        <div class="onboarding-split">
          <div class="onboarding-ask">
            <div>
              <p class="eyebrow">Start here</p>
              <h2>How much are you raising?</h2>
              <p>Your workspace is built around the ask. Start here and we'll guide you through the rest.</p>
            </div>
            <div class="form-grid">
              ${makeSelect("roundType", "Round type", roundOptions, d.roundType)}
              ${makeText("ask", "Target amount — e.g. €1.5M", d.ask)}
            </div>
          </div>
          <div class="onboarding-form">
            <div class="section-heading">
              <p class="eyebrow">Your company</p>
              <h3>A few details to personalise your workspace</h3>
            </div>
            <div class="form-grid">
              ${makeText("name", "Company name", d.name)}
              ${makeSelect("sector", "Sector", sectorOptions, d.sector)}
              ${makeSelect("stage", "Current stage", stageOptions, d.stage)}
              ${makeSelect("geography", "Primary market", geographyOptions, d.geography)}
            </div>
            <div class="field">
              <label><span>One-liner (optional)</span>
                <input class="text-input" type="text" data-draft="oneLiner" value="${escapeAttr(d.oneLiner)}" placeholder="Describe what you do in one sentence" />
              </label>
            </div>
            <div class="onboarding-cta">
              <button class="button" data-action="start-preparing">Start preparing</button>
              <button class="onboarding-skip" data-action="skip-onboarding">Load an example company instead</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
}

function createProfileFromDraft(draft) {
  const id = `custom-${Date.now().toString(36)}`;
  return normalizeProfileRecord(
    {
      id,
      name: draft.name || "My company",
      tagline: draft.oneLiner || "",
      sector: draft.sector || "Climate tech",
      stage: draft.stage || "Seed",
      geography: draft.geography || "European Union",
      problem: "",
      solution: "",
      oneLiner: draft.oneLiner || "",
      trl: "",
      ip: "",
      customer: "",
      model: "",
      ask: draft.ask || "",
      useOfFunds: "",
      nextStep: "",
      evidence: [],
      missing: [],
      risks: [],
      regulatory: { level: "Low", character: "Minimal regulatory impact", note: "" },
      transition: { level: "Low", character: "Minimal climate exposure", note: "" },
      tags: [],
      metrics: { revenue: "", runway: "", grossMargin: "", traction: "" },
      preferredLens: state.lens,
    },
    { source: "custom", templateId: null, now: new Date().toISOString() }
  );
}

function renderTopbar(profile, readiness) {
  const lens = lensConfig[state.lens];
  const sourceLabel = profile.source === "custom" ? "Custom profile" : "Example profile";
  const actions =
    profile.source === "custom"
      ? `
        <button class="button button--ghost" type="button" data-action="clear-profile">Clear profile</button>
        <button class="button button--ghost" type="button" data-action="duplicate-profile">Duplicate</button>
        <button class="button button--ghost" type="button" data-action="delete-profile">Delete</button>
      `
      : `
        <button class="button button--ghost" type="button" data-action="reset-profile">Reset to template</button>
        <button class="button button--ghost" type="button" data-action="duplicate-profile">Duplicate as custom</button>
      `;
  return `
    <header class="topbar">
      <div class="topbar__brand">
        <img src="assets/logos/OpenEconomics-LOGO WHITE.svg" alt="OpenEconomics" />
        <div>
          <p class="eyebrow">Preparation workspace</p>
          <h1>Foundry</h1>
        </div>
      </div>
      <div class="topbar__status">
        <span class="status-pill">${lens.short}</span>
        <span class="status-pill status-pill--accent">${readiness.overall}/100</span>
        <span class="status-pill">Saved locally</span>
        <span class="status-pill">${sourceLabel}</span>
      </div>
      <div class="topbar__actions">
        <button class="button" type="button" data-action="copy-memo">Copy memo</button>
        ${actions}
      </div>
    </header>
  `;
}

function renderHero(profile, readiness, bestLens) {
  const insight = buildPreparationInsightV2(profile, readiness, bestLens);
  return `
    <section class="hero panel">
      <div class="hero__copy">
        <p class="eyebrow">Submission room</p>
        <h2>Get ${profile.name} ready for a serious investor or partner conversation.</h2>
        <p class="hero-copy">
          Founders rarely lack a story. What they often lack is a clean, readable proof path — what's being asked, why it matters now,
          what evidence exists, what's still uncertain, and which open items should be resolved before outreach.
        </p>
        <p class="hero-copy hero-copy--subtle">
          This example is tuned for ${escapeHtml(profile.objective || bestLens.label)} and opens on the ${escapeHtml(bestLens.label)} path.
        </p>
        <div class="market-strip" aria-label="Market needs">
          ${marketSignals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
        </div>
      </div>
      <div class="hero-ledger" aria-label="Readiness summary">
        <div class="hero-ledger__item">
          <strong>${readiness.overall}</strong>
          <span>Readiness score</span>
          <small>${readiness.status}</small>
        </div>
        <div class="hero-ledger__item">
          <strong>${countList(profile.evidence)}</strong>
          <span>Evidence items</span>
          <small>Proof points visible in this room</small>
        </div>
        <div class="hero-ledger__item">
          <strong>${countList(profile.missing)}</strong>
          <span>Open gaps</span>
          <small>Flagged rather than hidden</small>
        </div>
        <div class="hero-ledger__item">
          <strong>${bestLens.label}</strong>
          <span>Submission path</span>
          <small>Driven by the selected example</small>
        </div>
        <div class="hero-ledger__item hero-ledger__item--wide">
          <strong>${escapeHtml(insight.priorityLabel)}</strong>
          <span>Preparation priority</span>
          <small>${escapeHtml(insight.priorityDetail)}</small>
        </div>
      </div>
    </section>
  `;
}

function renderNavigator() {
  const profiles = filteredProfiles();
  const profile = activeProfile();
  const currentLens = lensConfig[state.lens];
  return `
    <aside class="navigator panel">
      <div class="panel-heading">
        <p class="eyebrow">Companies</p>
        <h2>Select a company to prepare</h2>
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
        <p class="eyebrow">Example objective</p>
        <h2>${escapeHtml(profile.objective || "Submission path")}</h2>
      </div>

      <p class="navigator-note">
        ${escapeHtml(profile.name)} opens on the ${escapeHtml(currentLens.label.toLowerCase())} path.
        Use the buttons below only if you want to inspect another framing.
      </p>

      <div class="lens-list" role="group" aria-label="Submission lenses">
        ${Object.entries(lensConfig)
          .map(
            ([key, lens]) => `
              <button
                class="lens-toggle ${state.lens === key ? "is-active" : ""}"
                type="button"
                data-action="set-lens"
                data-lens="${key}"
                aria-pressed="${state.lens === key ? "true" : "false"}"
              >
                <strong>${lens.label}</strong>
                <span>${lens.bestFor}</span>
              </button>
            `
          )
          .join("")}
      </div>

      <div class="panel-heading panel-heading--compact">
        <p class="eyebrow">Example companies</p>
        <h2>${profiles.length} ${profiles.length === 1 ? "company" : "companies"}</h2>
      </div>

      <div class="profile-list" role="list">
        ${profiles
          .map((profile) => {
            const profileLens = lensConfig[profile.preferredLens] || computeBestLens(profile);
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
                <span class="profile-item__meta">${profile.source === "custom" ? "Custom profile" : "Example profile"}</span>
                <span class="profile-item__meta">Objective: ${escapeHtml(profile.objective || profileLens.label)}</span>
                <span class="profile-item__meta">Path: ${escapeHtml(profileLens.label)}</span>
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
  const activeTabId = `tab-${state.tab}`;
  return `
    <section class="studio">
      <div class="studio__header panel">
        <div class="studio__identity">
          <p class="eyebrow">Selected company</p>
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
        <div class="tabs__bar" role="tablist" aria-label="Studio tabs">
          ${tabs
            .map(
              ([key, label]) => `
                <button
                  id="tab-${key}"
                  class="tab-button ${state.tab === key ? "is-active" : ""}"
                  type="button"
                  data-action="set-tab"
                  data-tab="${key}"
                  role="tab"
                  aria-selected="${state.tab === key ? "true" : "false"}"
                  aria-controls="tabs-panel"
                  tabindex="${state.tab === key ? "0" : "-1"}"
                >
                  ${label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="tabs__body">
          ${renderTabGuide(profile)}
          <div class="tabs__panel" id="tabs-panel" role="tabpanel" aria-labelledby="${activeTabId}" tabindex="0">
            ${renderTabContent(profile, readiness)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTabGuide(profile) {
  const lens = lensConfig[state.lens];
  const guide = lens.guide;
  const focusedFields = unique(guide.flatMap((step) => step.fields));
  const filled = focusedFields.filter((field) => hasGuideValue(readPath(profile, field))).length;
  const tabCopy = {
    workspace: {
      label: "Your preparation overview.",
      detail: "Work through the steps below, then go to the specific fields and evidence areas this lens focuses on.",
    },
    intake: {
      label: "Edit the fields that matter for this submission path.",
      detail: "The field map at the top shows what the selected lens uses first. Start there.",
    },
    evidence: {
      label: "Build evidence around what a reader will actually ask.",
      detail: "Good evidence targets a specific question. Don't just add more — close the right gaps.",
    },
    memo: {
      label: "Export a summary from this room.",
      detail: "The memo adapts to the selected lens and surfaces what's still uncertain.",
    },
    esg: {
      label: "Fill in the ESG questionnaire.",
      detail: "Questions are tailored to your sector. Answer what you can, then reuse the answers in later preparation.",
    },
  }[state.tab];

  return `
    <section class="tab-guide">
      <div>
        <p class="eyebrow">${escapeHtml(lens.eyebrow)}</p>
        <h3>${escapeHtml(tabCopy.label)}</h3>
        <p>${escapeHtml(tabCopy.detail)}</p>
      </div>
      <div class="tab-guide__status">
        <span>${filled}/${focusedFields.length}</span>
        <p>Fields ready for this lens</p>
      </div>
    </section>
  `;
}

function renderTabContent(profile, readiness) {
  if (state.tab === "intake") return renderIntakeTabV2(profile);
  if (state.tab === "evidence") return renderEvidenceTab(profile, readiness);
  if (state.tab === "memo") return renderMemoTab(profile, readiness);
  if (state.tab === "esg") return renderEsgTabV2(profile);
  return renderWorkspaceTab(profile, readiness);
}

function renderWorkspaceTab(profile, readiness) {
  const collections = buildAssessmentCollections(profile);
  const currentLens = lensConfig[state.lens];
  const insight = buildPreparationInsightV2(profile, readiness, currentLens);
  return `
    <div class="content-grid">
      <section class="section-block section-block--wide room-brief">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(currentLens.eyebrow)}</p>
          <h3>${escapeHtml(currentLens.label)}</h3>
        </div>
        <div class="room-brief__grid">
          <article class="room-brief__primary">
            <span>What this path is for</span>
            <strong>${escapeHtml(insight.openQuestion)}</strong>
            <p>${escapeHtml(currentLens.intro)}</p>
          </article>
          <article class="room-step">
            <span>Audience</span>
            <strong>${escapeHtml(insight.audience)}</strong>
            <p>${escapeHtml(insight.audienceReason)}</p>
          </article>
          <article class="room-step">
            <span>Best for</span>
            <strong>When to use this lens</strong>
            <p>${escapeHtml(currentLens.bestFor)}</p>
          </article>
          <article class="room-step">
            <span>Output</span>
            <strong>What a good result looks like</strong>
            <p>${escapeHtml(currentLens.outcome)}</p>
          </article>
        </div>
      </section>

      <section class="section-block section-block--wide lens-panel">
        <div class="section-heading">
          <p class="eyebrow">Step-by-step guide</p>
          <h3>What to prepare, where it goes, and where to find it</h3>
        </div>
        <div class="guide-process">
          ${renderLensGuide(profile, currentLens)}
        </div>
      </section>

      <section class="section-block section-block--wide lens-field-map">
        <div class="section-heading">
          <p class="eyebrow">Field map</p>
          <h3>Fields this lens uses first</h3>
        </div>
        <div class="field-map-grid">
          ${renderLensFieldMap(profile, currentLens)}
        </div>
      </section>

      <section class="section-block section-block--wide lens-panel">
        <div class="section-heading">
          <p class="eyebrow">Score breakdown</p>
          <h3>How this lens influences the readiness score</h3>
        </div>
        <div class="lens-panel__body lens-panel__body--compact">
          <p>${escapeHtml(currentLens.outcome)}</p>
          <div class="lens-weight-grid">
            ${renderLensWeights(currentLens)}
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Company story</p>
          <h3>The narrative in this room</h3>
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
          <p class="eyebrow">Key metrics</p>
          <h3>Operating figures in the profile</h3>
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
          <p class="eyebrow">Assessment inputs</p>
          <h3>Data captured for readiness or later preparation</h3>
        </div>
        <div class="assessment-grid">
          ${renderCollectionCard("Exposure", collections.exposure)}
          ${renderCollectionCard("ESG questionnaire", collections.esg)}
          ${renderCollectionCard("SROI", collections.sroi)}
        </div>
        <p class="model-note">Exposure framing influences readiness. ESG and SROI inputs are stored for later memo and packaging work, but they do not change the readiness score directly.</p>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Readiness signals</p>
          <h3>What's working and what needs attention</h3>
        </div>
        <div class="two-column-list">
          <div>
            <span>What's working</span>
            <ul class="clean-list">${readiness.strongSignals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
          <div>
            <span>Gaps to address</span>
            <ul class="clean-list muted-list">${readiness.blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>

      <section class="section-block section-block--wide">
        <div class="section-heading">
          <p class="eyebrow">Next steps</p>
          <h3>Things to address before sharing this room</h3>
        </div>
        <div class="move-list">
          ${[...insight.nextMoves, ...collections.missingActions.slice(0, 1)]
            .map(
              (move, index) => `
                <article class="move-item">
                  <span>0${index + 1}</span>
                  <p>${escapeHtml(move)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderIntakeTabV2(profile) {
  const exposure = computeExposureCollection(profile);
  const esg = computeEsgCollection(profile);
  const sroi = computeSroiCollection(profile);
  const lens = lensConfig[state.lens];
  const lensTitle = {
    fundraising: "Raise preparation",
    partner: "Partner deployment",
    commercialization: "Commercialization",
    grant: "Grant and impact",
  }[state.lens];
  const lensIntro = {
    fundraising: "Start with the ask, the spend plan, and the proof that makes the round easier to defend.",
    partner: "Start with the buyer, the deployment burden, and what a successful pilot actually looks like.",
    commercialization: "Start with what has been built, who owns it, and the first route to market that can actually work.",
    grant: "Start with the beneficiary, the outcome, and the delivery plan behind the application.",
  }[state.lens];

  const lensFields = {
    fundraising: `
      ${renderTextField("Funding ask", "ask", profile.ask)}
      ${renderTextField("Use of funds", "useOfFunds", profile.useOfFunds, "textarea")}
      ${renderMetricField("Revenue", "revenue", profile.metrics.revenue)}
      ${renderMetricField("Runway", "runway", profile.metrics.runway)}
      ${renderMetricField("Traction", "traction", profile.metrics.traction)}
      ${renderTextField("Funding history", "funding.totalRaised", profile.funding.totalRaised)}
    `,
    partner: `
      ${renderTextField("Customer and buyer", "customer", profile.customer, "textarea")}
      ${renderTextField("Problem statement", "problem", profile.problem, "textarea")}
      ${renderTextField("Deployment requirements", "assessment.exposure.note", profile.assessment.exposure.note, "textarea")}
      ${renderTextareaField("Risks to acknowledge", "risks", profile.risks)}
      ${renderTextField("Expected pilot outcome", "nextStep", profile.nextStep, "textarea")}
    `,
    commercialization: `
      ${renderTextField("One-liner", "oneLiner", profile.oneLiner)}
      ${renderSelectField("TRL", "trl", String(profile.trl), trlOptions)}
      ${renderTextField("IP position", "ip", profile.ip, "textarea")}
      ${renderTextField("Business model", "model", profile.model, "textarea")}
      ${renderTextField("First target customer", "customer", profile.customer, "textarea")}
      ${renderTextField("Use of funds", "useOfFunds", profile.useOfFunds, "textarea")}
    `,
    grant: `
      ${renderTextField("Problem statement", "problem", profile.problem, "textarea")}
      ${renderTextField("Transition note", "transition.note", profile.transition.note, "textarea")}
      ${renderTextField("Beneficiary groups", "assessment.sroi.beneficiaryGroups", profile.assessment.sroi.beneficiaryGroups, "textarea")}
      ${renderTextField("Primary outcome to value", "assessment.sroi.primaryOutcome", profile.assessment.sroi.primaryOutcome, "textarea")}
      ${renderTextField("Use of funds", "useOfFunds", profile.useOfFunds, "textarea")}
    `,
  }[state.lens];

  return `
    <div class="form-layout">
      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(lens.eyebrow)}</p>
          <h3>${escapeHtml(lensTitle)} fields first</h3>
        </div>
        <p class="model-note">${escapeHtml(lensIntro)}</p>
        <div class="field-map-grid field-map-grid--compact">
          ${renderLensFieldMap(profile, lens)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Shared company core</p>
          <h3>The fields every submission path reuses</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("Company name", "name", profile.name)}
          ${renderSelectField("Sector", "sector", profile.sector, allSectors().filter((option) => option !== "All"))}
          ${renderSelectField("Stage", "stage", profile.stage, stageOptions)}
          ${renderSelectField("Geography", "geography", profile.geography, geographyOptions)}
          ${renderTextField("One-liner", "oneLiner", profile.oneLiner)}
          ${renderTextField("Problem statement", "problem", profile.problem, "textarea")}
          ${renderTextField("Customer and buyer", "customer", profile.customer, "textarea")}
          ${renderTextField("Business model", "model", profile.model, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(lens.eyebrow)}</p>
          <h3>Lens-specific fields first</h3>
        </div>
        <p class="model-note">This section changes with the selected lens, so the workflow stays specific instead of generic.</p>
        <div class="form-grid">${lensFields}</div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Evidence and gaps</p>
          <h3>What is visible, what is risky, and what still needs proof</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("Evidence", {
            total: Math.max(3, countList(profile.evidence)),
            completed: countList(profile.evidence),
            status: profile.evidence.length ? "Visible" : "Empty",
            detail: "Structured proof points used in readiness and memo work.",
          })}
        </div>
        <div class="evidence-preview-grid">
          ${renderStructuredCollectionPreview("Evidence items", buildStructuredEvidence(profile.evidence))}
          ${renderStructuredCollectionPreview("Risks", buildStructuredRisks(profile.risks))}
          ${renderStructuredCollectionPreview("Missing items", buildStructuredMissing(profile.missing))}
        </div>
        <div class="evidence-columns">
          ${renderTextareaField("Evidence available", "evidence", profile.evidence)}
          ${renderTextareaField("Risks to acknowledge", "risks", profile.risks)}
          ${renderTextareaField("Missing items", "missing", profile.missing)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Team, market, and metrics</p>
          <h3>The context that makes the story credible</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("Founding team", "team.founders", profile.team.founders, "textarea")}
          ${renderTextField("Team background", "team.background", profile.team.background, "textarea")}
          ${renderSelectField("Full-time team size", "team.size", profile.team.size, teamSizeOptions)}
          ${renderSelectField("Key role currently missing", "team.missingRoles", profile.team.missingRoles, missingRoleOptions)}
          ${renderTextField("Key advisors (optional)", "team.advisors", profile.team.advisors)}
          ${renderTextField("Total addressable market", "market.tam", profile.market.tam)}
          ${renderTextField("Serviceable market", "market.sam", profile.market.sam)}
          ${renderTextField("Main competitors", "market.competitors", profile.market.competitors, "textarea")}
          ${renderTextField("Competitive advantage", "market.differentiator", profile.market.differentiator, "textarea")}
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
          <p class="eyebrow">Funding and exit</p>
          <h3>Where the company is going next</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("Funding ask", "ask", profile.ask)}
          ${renderTextField("Use of funds", "useOfFunds", profile.useOfFunds, "textarea")}
          ${renderTextField("Total raised to date", "funding.totalRaised", profile.funding.totalRaised)}
          ${renderTextField("Number of previous rounds", "funding.roundCount", profile.funding.roundCount)}
          ${renderTextField("Key existing investors", "funding.notableInvestors", profile.funding.notableInvestors)}
          ${renderTextField("Last known post-money valuation", "funding.postMoneyVal", profile.funding.postMoneyVal)}
          ${renderSelectField("Expected exit horizon", "exit.horizon", profile.exit.horizon, exitHorizonOptions)}
          ${renderSelectField("Preferred exit type", "exit.type", profile.exit.type, exitTypeOptions)}
          ${renderTextField("Potential acquirers or strategic partners", "exit.acquirers", profile.exit.acquirers, "textarea")}
          ${renderTextField("Suggested next step", "nextStep", profile.nextStep, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Regulatory exposure</p>
          <h3>Optional framing that does affect readiness</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("Exposure collection", exposure)}
        </div>
        <p class="model-note">Answer what you can. This section is used directly in the readiness view because it frames market access, compliance burden, and defensibility.</p>
        <div class="form-grid">
          ${renderSelectField("How much regulatory oversight does your activity face?", "regulatory.level", profile.regulatory.level, exposureLevelOptions)}
          ${renderSelectField("How exposed is your company to climate or sustainability regulations?", "transition.level", profile.transition.level, exposureLevelOptions)}
          ${renderSelectField("Primary market", "assessment.exposure.primaryJurisdiction", profile.assessment.exposure.primaryJurisdiction, geographyOptions)}
          ${renderTextField("Anything else the founder should note?", "assessment.exposure.note", profile.assessment.exposure.note, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">ESG tracking</p>
          <h3>Optional structured preparation for later reuse</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("ESG questionnaire", esg)}
        </div>
        <p class="model-note">This questionnaire is optional structured preparation. It stays local and is reused in the memo when useful.</p>
        <button class="button" data-action="set-tab" data-tab="esg">Go to questionnaire</button>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Social impact data</p>
          <h3>Optional impact inputs for later packaging</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("SROI collection", sroi)}
        </div>
        <p class="model-note">These inputs help later preparation and memo drafting. They do not change the readiness score directly.</p>
        <div class="form-grid">
          ${renderTextField("Who benefits from what you do?", "assessment.sroi.beneficiaryGroups", profile.assessment.sroi.beneficiaryGroups, "textarea")}
          ${renderTextField("What is the main outcome you create for them?", "assessment.sroi.primaryOutcome", profile.assessment.sroi.primaryOutcome, "textarea")}
          ${renderTextField("How many people does this reach per year?", "assessment.sroi.annualReach", profile.assessment.sroi.annualReach)}
        </div>
      </section>
    </div>
  `;
}

function getEsgQuestions(sector) {
  const base = [
    { key: "envTracking", group: "Environment", label: "Do you track your company's energy use or carbon footprint?" },
    { key: "envPolicy", group: "Environment", label: "Do you have a written environmental or sustainability policy?" },
    { key: "emissionsImpact", group: "Environment", label: "Does your product or service directly reduce emissions, waste, or resource use?" },
    { key: "diversityPolicy", group: "Social", label: "Do you have a diversity or inclusion policy?" },
    { key: "wellbeingTracking", group: "Social", label: "Do you track employee satisfaction or wellbeing?" },
    { key: "socialOutcome", group: "Social", label: "Does your work create a measurable positive outcome for a specific community or group?" },
    { key: "hasBoard", group: "Governance", label: "Does the company have a board or advisory board?" },
    { key: "ethicsPolicy", group: "Governance", label: "Do you have written policies for ethics or conflicts of interest?" },
    { key: "financialsReviewed", group: "Governance", label: "Are your financials reviewed by an external accountant or auditor?" },
  ];
  const overrides = {
    "Climate tech": {
      envTracking: "Do you track the emissions your product avoids or reduces, at scale?",
      emissionsImpact: "Is reducing emissions, waste, or resource use the core purpose of your product?",
      socialOutcome: "Does your technology improve access to clean energy or sustainable resources for underserved communities?",
    },
    "Energy": {
      envTracking: "Do you track the carbon or resource impact of your energy product or service?",
      emissionsImpact: "Does your product directly replace or reduce fossil fuel use?",
      socialOutcome: "Does your product improve energy access or affordability for underserved communities?",
    },
    "Circular economy": {
      envTracking: "Do you track material flows, waste reduction, or lifecycle emissions in your operations?",
      emissionsImpact: "Does your business model extend product life, recover materials, or eliminate waste?",
      socialOutcome: "Does your model create economic opportunities from waste or resource recovery for local communities?",
    },
    "Health tech": {
      emissionsImpact: "Does your product reduce waste, energy use, or chemical use in healthcare settings?",
      socialOutcome: "Does your product directly improve patient outcomes or expand access to care?",
    },
    "AI/data infrastructure": {
      envTracking: "Do you track the energy consumption of your cloud infrastructure or data centers?",
      emissionsImpact: "Does your software help customers reduce their own emissions or resource use?",
      socialOutcome: "Do you have policies to ensure your technology does not cause harm to vulnerable groups?",
    },
    "Cybersecurity": {
      emissionsImpact: "Do you consider environmental impact in your infrastructure choices (e.g. server efficiency, cloud provider)?",
      socialOutcome: "Does your product protect individuals or communities from digital harm?",
    },
    "Agritech": {
      envTracking: "Do you track land use, water use, or emissions in your operations or supply chain?",
      emissionsImpact: "Does your product reduce food waste, improve soil health, or lower agricultural emissions?",
      socialOutcome: "Does your product improve livelihoods or food security for farmers or rural communities?",
    },
    "Water tech": {
      envTracking: "Do you measure the water savings or efficiency gains your product delivers?",
      emissionsImpact: "Does your product reduce water waste, contamination, or energy use in water systems?",
      socialOutcome: "Does your product improve access to clean water for underserved communities?",
    },
    "Deep tech materials": {
      envTracking: "Do you track the lifecycle emissions or resource use of your materials?",
      emissionsImpact: "Do your materials enable lower-emissions manufacturing or replace virgin resource extraction?",
    },
    "Industrial automation": {
      envTracking: "Do you track the energy or emissions savings your automation delivers to clients?",
      emissionsImpact: "Does your automation reduce energy use, waste, or emissions in industrial processes?",
    },
  };
  const sectorOverrides = overrides[sector] || {};
  return base.map((q) => ({ ...q, label: sectorOverrides[q.key] || q.label }));
}

function renderEsgTabV2(profile) {
  const esg = computeEsgCollection(profile);
  const questions = getEsgQuestions(profile.sector);
  const groups = ["Environment", "Social", "Governance"];
  return `
    <div class="content-grid">
      <section class="section-block section-block--wide">
        <div class="section-heading">
          <p class="eyebrow">ESG questionnaire</p>
          <h3>Optional structured prep for later reuse</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("ESG questionnaire", esg)}
        </div>
        <p class="model-note">Answer as honestly as you can. "Working on it" or "No" is fine. The answers stay local and can be reused later in the memo or in a more detailed preparation pack.</p>
        ${groups
          .map((group) => {
            const qs = questions.filter((q) => q.group === group);
            return `
              <p class="eyebrow" style="margin-top:1.5rem">${escapeHtml(group)}</p>
              <div class="form-grid">
                ${qs.map((q) => renderSelectField(q.label, `assessment.esg.questionnaire.${q.key}`, profile.assessment.esg.questionnaire[q.key], esgQuestionOptions)).join("")}
              </div>
            `;
          })
          .join("")}
      </section>
    </div>
  `;
}

function renderEvidenceTab(profile, readiness) {
  const lens = lensConfig[state.lens];
  const insight = buildPreparationInsightV2(profile, readiness, lens);
  const structuredEvidence = buildStructuredEvidence(profile.evidence);
  const structuredRisks = buildStructuredRisks(profile.risks);
  const structuredMissing = buildStructuredMissing(profile.missing);
  return `
    <div class="content-grid">
      <section class="section-block section-block--wide">
        <div class="section-heading">
          <p class="eyebrow">Evidence overview</p>
          <h3>How this submission path shapes your evidence needs</h3>
        </div>
        <div class="guide-process">
          ${renderLensGuide(profile, lens)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Your evidence</p>
          <h3>What you have, what's at risk, and what's missing</h3>
        </div>
        <p class="model-note">Add one item per line. Each line is treated as a separate proof point, risk, or open diligence item.</p>
        <div class="evidence-preview-grid">
          ${renderStructuredCollectionPreview("Evidence items", structuredEvidence)}
          ${renderStructuredCollectionPreview("Risks", structuredRisks)}
          ${renderStructuredCollectionPreview("Missing items", structuredMissing)}
        </div>
        <div class="evidence-columns">
          ${renderTextareaField("Evidence available", "evidence", profile.evidence)}
          ${renderTextareaField("Risks to acknowledge", "risks", profile.risks)}
          ${renderTextareaField("Missing items", "missing", profile.missing)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${lensConfig[state.lens].eyebrow}</p>
          <h3>Preparation checklist</h3>
        </div>
        <ul class="clean-list prompt-list">
          ${lensConfig[state.lens].checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Key questions to answer</p>
          <h3>What a reader will want to know before engaging</h3>
        </div>
        <div class="question-map">
          ${insight.counterpartyQuestions
            .map(
              (question) => `
                <article>
                  <span>${escapeHtml(question.label)}</span>
                  <p>${escapeHtml(question.question)}</p>
                  <strong>${escapeHtml(question.answer)}</strong>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Score breakdown</p>
          <h3>Why your score looks like this</h3>
        </div>
        <div class="score-list">
          ${readiness.moduleScores
            .map(
              (score) => `
                <article class="score-row">
                  <div>
                    <strong>${escapeHtml(score.label)}</strong>
                    <p>${escapeHtml(score.note)}</p>
                    <p class="score-row__detail">${escapeHtml(score.detail)}</p>
                  </div>
                  <div class="score-row__meta">
                    <span>${score.value}/100</span>
                    <small>Coverage ${score.coverage}/100</small>
                    <small>Quality ${score.quality}/100</small>
                    <small>${escapeHtml(score.summary)}</small>
                  </div>
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
  const memo = generateMemoV2(profile, readiness);
  const lens = lensConfig[state.lens];
  return `
    <section class="memo">
      <div class="memo-prep">
        <div>
          <p class="eyebrow">How the memo is built</p>
          <h3>${escapeHtml(lens.outcome)}</h3>
          <p>${escapeHtml(lens.bestFor)}</p>
        </div>
        <div class="lens-weight-grid">
          ${renderLensWeights(lens)}
        </div>
      </div>
      <div class="memo__header">
        <div>
          <p class="eyebrow">Generated memo</p>
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
  const collections = buildAssessmentCollections(profile);
  return `
    <aside class="rail panel">
      <div class="panel-heading">
        <p class="eyebrow">Readiness</p>
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
                <p class="bar-block__detail">${escapeHtml(score.detail)}</p>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="rail-section">
        <span>What changed the score</span>
        <p>${escapeHtml(readiness.strongSignals[0] || "The strongest visible signal is still the overall profile coverage.")}</p>
      </div>

      <div class="rail-section">
        <span>Best fit</span>
        <p>${escapeHtml(bestLens.label)} is the strongest path for ${profile.name}.</p>
      </div>

      <div class="rail-section">
        <span>Next step</span>
        <p>${escapeHtml(collections.nextStep.detail)}</p>
      </div>

      <div class="rail-section">
        <span>Current blockers</span>
        <ul class="clean-list muted-list">${readiness.blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>

      <div class="rail-section">
        <span>About this score</span>
        <p>
          Regulatory environment and climate exposure aren't automatically bad for your score. We ask you to think about whether they
          create market demand, add operational burden, limit market access, or make your position harder to copy — it depends on your situation.
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

function renderCollectionCard(label, collection) {
  return `
    <article class="assessment-card">
      <span>${escapeHtml(label)}</span>
      <strong>${collection.completed}/${collection.total}</strong>
      <p>${escapeHtml(collection.status)}</p>
      <small>${escapeHtml(collection.detail)}</small>
    </article>
  `;
}

function renderStructuredCollectionPreview(label, items) {
  const visible = items.slice(0, 3);
  return `
    <article class="structured-card">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(label)}</p>
      </div>
      ${
        visible.length
          ? `
            <ul class="structured-list">
              ${visible
                .map(
                  (item) => `
                    <li>
                      <strong>${escapeHtml(item.title)}</strong>
                      <span>${escapeHtml(item.type)}</span>
                      <p>${escapeHtml(item.summary)}</p>
                    </li>
                  `
                )
                .join("")}
            </ul>
            ${items.length > visible.length ? `<p class="structured-card__more">+${items.length - visible.length} more item${items.length - visible.length === 1 ? "" : "s"}</p>` : ""}
          `
          : `<p class="structured-card__more">Nothing added yet.</p>`
      }
    </article>
  `;
}

function buildStructuredEvidence(items) {
  return (Array.isArray(items) ? items : []).filter(Boolean).map((item) => {
    const text = normalizeText(item);
    const lower = text.toLowerCase();
    const type =
      /(pilot|loi|contract|customer|paid|agreement|buyer|reference)/.test(lower)
        ? "Commercial proof"
        : /(lab|validation|study|audit|certified|deployed|prototype|technical|operational)/.test(lower)
          ? "Technical proof"
          : /(metric|revenue|mrr|arr|runway|traction|outcome|reduction|improvement|patients|mw|units)/.test(lower)
            ? "Metric-linked proof"
            : "Evidence item";
    const strength = evidenceItemStrength(text);
    return {
      title: text,
      type,
      summary: strength >= 0.7 ? "Strong and specific" : strength >= 0.45 ? "Moderately specific" : "Needs more detail",
    };
  });
}

function buildStructuredRisks(items) {
  return (Array.isArray(items) ? items : []).filter(Boolean).map((item) => {
    const text = normalizeText(item);
    return {
      title: text,
      type: riskTypeForText(text),
      summary: riskSeverityForText(text),
    };
  });
}

function buildStructuredMissing(items) {
  return (Array.isArray(items) ? items : []).filter(Boolean).map((item) => ({
    title: normalizeText(item),
    type: "Open diligence item",
    summary: "Still needs a named owner or proof path",
  }));
}

function evidenceItemStrength(text) {
  return specificTextScore(text, ["pilot", "customer", "contract", "agreement", "validation", "study", "metric", "outcome", "revenue", "traction", "certified"]);
}

function riskTypeForText(text) {
  const lower = normalizeText(text).toLowerCase();
  if (/(regulat|compliance|approval|procurement|certif)/.test(lower)) return "Regulatory";
  if (/(sales|market|pricing|demand|conversion)/.test(lower)) return "Commercial";
  if (/(scale|implementation|integration|deployment|ops|manufacturing)/.test(lower)) return "Operational";
  return "Execution";
}

function riskSeverityForText(text) {
  const lower = normalizeText(text).toLowerCase();
  if (/(long|high|uncertain|critical|burden|material)/.test(lower)) return "Potentially material";
  if (/(early|limited|unknown|open)/.test(lower)) return "Needs clarification";
  return "Track and revisit";
}

function renderLensWeights(lens) {
  const labels = {
    completeness: "Profile",
    evidence: "Evidence",
    narrative: "Narrative",
    diligence: "Due diligence",
    exposure: "Risk & reg.",
  };
  const maxWeight = Math.max(...Object.values(lens.weights));
  return Object.entries(lens.weights)
    .map(([key, value]) => {
      const width = Math.round((value / maxWeight) * 100);
      return `
        <div class="lens-weight">
          <span>${escapeHtml(labels[key])}</span>
          <div class="progress" aria-hidden="true"><span style="width:${width}%"></span></div>
          <strong>${Math.round(value * 100)}%</strong>
        </div>
      `;
    })
    .join("");
}

function renderLensGuide(profile, lens) {
  return lens.guide
    .map((step, index) => {
      const filled = step.fields.filter((field) => hasGuideValue(readPath(profile, field))).length;
      const total = step.fields.length;
      const tab = step.destination.includes("Evidence:") ? "evidence" : "intake";
      return `
        <article class="guide-step">
          <div class="guide-step__index">${index + 1}</div>
          <div class="guide-step__body">
            <div>
              <span>${escapeHtml(step.label)}</span>
              <strong>${escapeHtml(step.need)}</strong>
            </div>
            <div class="guide-step__detail">
              <p><b>Where it goes:</b> ${escapeHtml(step.destination)}</p>
              <p><b>Where to find it:</b> ${escapeHtml(step.source)}</p>
            </div>
            <div class="guide-step__footer">
              <span>${filled}/${total} fields already completed</span>
              <button class="button button--small" type="button" data-action="set-tab" data-tab="${tab}">Go to ${tab === "evidence" ? "evidence" : "profile"}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLensFieldMap(profile, lens) {
  const fields = unique(lens.guide.flatMap((step) => step.fields));
  return fields
    .map((field) => {
      const value = readPath(profile, field);
      const filled = hasGuideValue(value);
      return `
        <article class="field-map-card ${filled ? "is-filled" : ""}">
          <span>${escapeHtml(fieldLabel(field))}</span>
          <strong>${filled ? "Complete" : "Missing"}</strong>
          <p>${escapeHtml(fieldPreview(value))}</p>
          <button class="button button--small button--quiet" type="button" data-action="set-tab" data-tab="${fieldTab(field)}">${fieldTab(field) === "evidence" ? "Evidence" : "Edit"}</button>
        </article>
      `;
    })
    .join("");
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
        ${options.map((option) => `<option value="${escapeAttr(option)}" ${String(option) === String(value) ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
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

function generateMemoV2(profile, readiness) {
  const lens = lensConfig[state.lens];
  const insight = buildPreparationInsightV2(profile, readiness, lens);
  const collections = buildAssessmentCollections(profile);
  const strongestModule = readiness.moduleScores.find((module) => module.key === readiness.strongestModule) || readiness.moduleScores[0];
  const weakestModule = readiness.moduleScores.find((module) => module.key === readiness.weakestModule) || readiness.moduleScores[0];
  const structuredEvidence = buildStructuredEvidence(profile.evidence).slice(0, 3);
  const structuredRisks = buildStructuredRisks(profile.risks).slice(0, 2);
  const structuredMissing = buildStructuredMissing(profile.missing).slice(0, 3);
  const firstEvidence = structuredEvidence[0]?.title || "No evidence items listed yet.";
  const firstGap = structuredMissing[0]?.title || "a sharper evidence package";
  const firstRisk = structuredRisks[0]?.title || "execution risk";

  return [
    `Company snapshot: ${profile.name} is a ${profile.stage.toLowerCase()} ${profile.sector.toLowerCase()} company in ${profile.geography}. The current submission readiness based on the current profile is ${readiness.overall}/100, which reads as ${readiness.status.toLowerCase()}.`,
    `Why this company matters now: ${insight.marketDetail} The best first audience is ${insight.audience.toLowerCase()} because ${insight.audienceReason.charAt(0).toLowerCase() + insight.audienceReason.slice(1)}`,
    `Current evidence available: ${firstEvidence}${structuredEvidence.length > 1 ? `; ${structuredEvidence[1].title}` : ""}${structuredEvidence.length > 2 ? `; ${structuredEvidence[2].title}` : ""}. The strongest visible signal is ${readiness.strongSignals[0] || strongestModule.summary}.`,
    `Open diligence items: ${structuredMissing.length ? structuredMissing.map((item) => item.title).join("; ") : "No named missing items yet."} The main unresolved item to address next is ${firstGap}.`,
    `Readiness interpretation based on the current profile: ${weakestModule.label} is the weakest module at ${weakestModule.value}/100, while ${strongestModule.label} is the strongest at ${strongestModule.value}/100. ${weakestModule.detail}`,
    `Suggested next preparation step: ${insight.priorityDetail} The next useful proof package is ${insight.proofTarget.toLowerCase()}: ${insight.proofDetail.charAt(0).toLowerCase() + insight.proofDetail.slice(1)}`,
    `Risk framing: ${structuredRisks.length ? structuredRisks.map((item) => item.title).join("; ") : "No risks named yet."} The first risk to acknowledge is ${firstRisk}.`,
    `Optional structured inputs: regulatory exposure ${collections.exposure.completed}/${collections.exposure.total}, ESG tracking ${collections.esg.completed}/${collections.esg.total}, SROI ${collections.sroi.completed}/${collections.sroi.total}. Exposure framing affects readiness; ESG and SROI are kept for later packaging work.`,
    `This note is based on the current profile only and should be used as a founder-side preparation output before outreach, not as financing advice or a substitute for third-party diligence.`,
  ].join("\n");
}

function buildPreparationInsightV2(profile, readiness, bestLens) {
  const weakestModule = readiness.moduleScores.find((module) => module.key === readiness.weakestModule) || readiness.moduleScores[0];
  const strongestModule = readiness.moduleScores.find((module) => module.key === readiness.strongestModule) || readiness.moduleScores[0];
  const topMissing = weakestModule?.missingChecks?.[0]?.note || weakestModule?.missingChecks?.[0]?.label || profile.missing[0] || "a sharper evidence package";
  const topSignal = readiness.strongSignals[0] || strongestModule.summary;
  const lowerSector = `${profile.sector} ${profile.tags.join(" ")}`.toLowerCase();
  const hasRevenue = /arr|mrr|revenue|fees|customers|pilot/i.test(`${profile.metrics.revenue} ${profile.metrics.traction}`);
  const isRegulated = profile.regulatory.level === "High" || /health|energy|water|cyber|regulated|clinical|municipal/.test(lowerSector);
  const isDeepTech = profile.trl <= 6 || /deep tech|materials|hardware|climate|carbon|circular/.test(lowerSector);
  const isAi = /ai|data|infra|security|automation/.test(lowerSector);

  const marketDetail = isAi
    ? "The profile should show security credentials, real workflow impact, margin structure, and why you're hard to copy. AI markets are crowded and buyers compare options quickly."
    : isDeepTech
      ? "The profile should connect technical validation to a specific first market, a qualification path, and real buyer interest before asking anyone to believe the bigger vision."
      : isRegulated
        ? "The profile should show how regulation, procurement requirements, or compliance create both challenges to adoption and reasons the company may be hard to replicate."
        : "The profile should turn customer pain, traction, and use of funds into a clear preparation story that holds up under a critical first read.";

  const audience = bestLens.key === "partner"
    ? "Pilot or commercial partner"
    : bestLens.key === "commercialization"
      ? "Commercialization partner or tech transfer office"
      : bestLens.key === "grant"
        ? "Grant program or impact funder"
        : hasRevenue
          ? "Lead investor or sector specialist"
          : "Early-stage investor or design partner";

  const audienceReason = bestLens.key === "partner"
    ? "The current profile is strongest when it proves deployment value and removes uncertainty about implementation."
    : bestLens.key === "commercialization"
      ? "The company would benefit most from translating its technical assets into a clear path to market."
      : bestLens.key === "grant"
        ? "The strongest angle here is measurable impact, a clear commercialization plan, and delivery credibility."
        : hasRevenue
          ? "There's enough operating evidence to have a financing conversation, as long as the open questions are named honestly."
          : "The case needs sharper proof before broad outreach, so the first audience should help stress-test and refine the evidence.";

  const proofTarget = weakestModule.key === "evidence"
    ? "Evidence package"
    : weakestModule.key === "narrative"
      ? "Narrative clarity"
      : weakestModule.key === "diligence"
        ? "Open diligence items"
        : weakestModule.key === "exposure"
          ? "Exposure framing"
          : "Core profile coverage";

  const proofDetail = weakestModule.detail || "Focus on the missing checks until the next round of outreach is easier to defend.";
  const priorityLabel = readiness.overall >= 80
    ? "Almost ready — prepare your outreach materials"
    : readiness.overall >= 64
      ? "Close the key gaps"
      : "Strengthen the core case";
  const priorityDetail = readiness.overall >= 80
    ? "You're nearly ready to share. Focus on making your evidence, risks, and ask easy for a reader to check."
    : readiness.overall >= 64
      ? `The story is usable, but ${topMissing.toLowerCase()} should be made clearer before broad outreach.`
      : "The profile needs a clearer connection between the problem you're solving, the evidence you have, what you're asking for, and what comes next.";
  const openQuestion = weakestModule.key === "evidence"
    ? "What proof is missing before the next conversation?"
    : weakestModule.key === "narrative"
      ? "Is the story specific enough to survive a quick read?"
      : weakestModule.key === "diligence"
        ? "What would a serious reader still ask to verify?"
        : weakestModule.key === "exposure"
          ? "How should the regulatory or transition context be framed?"
          : isRegulated
            ? "What makes this worth navigating the regulatory hurdles?"
            : isDeepTech
              ? "What proves this can move from the lab into real-world use?"
              : hasRevenue
                ? "Can the company keep growing without the economics falling apart?"
                : "Who needs this urgently enough to act now?";

  const nextMoves = [
    `Package the missing item "${topMissing}" and connect it directly to the ask of ${profile.ask.toLowerCase()}.`,
    `Name "${readiness.blockers[1] || "the next unresolved question"}" as an open diligence item and assign an owner.`,
    `Tailor your next outreach to ${audience.toLowerCase()} specifically, not a generic audience.`,
  ];

  const counterpartyQuestions = [
    {
      label: "Signal",
      question: "What is already strong enough to share?",
      answer: topSignal,
    },
    {
      label: "Gap",
      question: "What still needs clarification before outreach?",
      answer: topMissing,
    },
    {
      label: "Next step",
      question: "What happens after the next yes?",
      answer: profile.useOfFunds,
    },
    {
      label: "Risk",
      question: "Which risk should be named before they ask?",
      answer: readiness.blockers[0] || "execution risk",
    },
  ];

  return {
    marketDetail,
    audience,
    audienceReason,
    proofTarget,
    proofDetail,
    priorityLabel,
    priorityDetail,
    openQuestion,
    nextMoves,
    counterpartyQuestions,
  };
}

function buildAssessmentCollections(profile) {
  const exposure = computeExposureCollection(profile);
  const esg = computeEsgCollection(profile);
  const sroi = computeSroiCollection(profile);
  const missingActions = [
    nextMissingExposureAction(profile),
    nextMissingEsgAction(profile),
    nextMissingSroiAction(profile),
  ];

  return {
    exposure: {
      ...exposure,
      summary: `${exposure.completed} of ${exposure.total} regulatory fields completed.`,
    },
    esg: {
      ...esg,
      summary: `${esg.completed} of ${esg.total} ESG tracking fields completed.`,
    },
    sroi: {
      ...sroi,
      summary: `${sroi.completed} of ${sroi.total} SROI inputs completed.`,
    },
    nextStep: buildCollectionNextStep(exposure, esg, sroi),
    missingActions,
  };
}

function buildCollectionNextStep(exposure, esg, sroi) {
  const items = [
    { key: "Regulatory exposure", gap: exposure.total - exposure.completed, detail: "Fill in the regulatory level, climate exposure, and primary market." },
    { key: "ESG questionnaire", gap: esg.total - esg.completed, detail: "Fill in the 9 questions across environment, social, and governance." },
    { key: "Social impact data", gap: sroi.total - sroi.completed, detail: "Record who you help, the main outcome, and how many people you reach per year." },
  ].sort((a, b) => b.gap - a.gap);

  return {
    title: items[0].key,
    detail: items[0].detail,
  };
}

function nextMissingExposureAction(profile) {
  if (!hasCollectionValue(profile.regulatory.level)) return "Select the level of regulatory oversight your company faces.";
  if (!hasCollectionValue(profile.transition.level)) return "Select your exposure to climate and sustainability regulations.";
  if (!hasCollectionValue(profile.assessment.exposure.primaryJurisdiction)) return "Select the primary market your company operates in.";
  return "Add any extra context in the notes field if useful.";
}

function nextMissingEsgAction(profile) {
  const q = profile.assessment.esg.questionnaire;
  if (!hasCollectionValue(q.envTracking)) return "Start with the environment section of the ESG questionnaire.";
  if (!hasCollectionValue(q.diversityPolicy)) return "Continue with the social section of the ESG questionnaire.";
  if (!hasCollectionValue(q.hasBoard)) return "Complete the governance section to finish the ESG questionnaire.";
  return "Review the answers and reuse them in the memo or the next preparation pack.";
}

function nextMissingSroiAction(profile) {
  const sroi = profile.assessment.sroi;
  if (!hasCollectionValue(sroi.beneficiaryGroups)) return "Identify who this company's work directly affects.";
  if (!hasCollectionValue(sroi.primaryOutcome)) return "Define the main outcome that SROI should value.";
  if (!hasCollectionValue(sroi.annualReach)) return "Estimate how many people you reach per year before attempting the social return calculation.";
  return "Add baseline data, impact evidence, counterfactual estimate, attribution data, and financial proxy before calculating.";
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "open-profile") {
    const profile = profileById(target.dataset.id);
    state.activeId = target.dataset.id;
    state.lens = preferredLensForProfile(profile);
    state.tab = "workspace";
    render();
    return;
  }

  if (action === "set-lens") {
    state.lens = target.dataset.lens;
    state.tab = "workspace";
    render();
    return;
  }

  if (action === "set-tab") {
    state.tab = target.dataset.tab;
    render({ focusTab: state.tab });
    return;
  }

  if (action === "start-preparing") {
    const profile = createProfileFromDraft(state.draft);
    state.profiles.push(profile);
    state.activeId = profile.id;
    state.onboarding = false;
    state.tab = "intake";
    persistProfiles();
    render();
    return;
  }

  if (action === "skip-onboarding") {
    state.onboarding = false;
    persistProfiles();
    render();
    return;
  }

  if (action === "reset-profile") {
    resetActiveProfile();
    render({ focusTab: state.tab });
    return;
  }

  if (action === "clear-profile") {
    clearActiveProfile();
    render({ focusTab: state.tab });
    return;
  }

  if (action === "duplicate-profile") {
    duplicateActiveProfile();
    render({ focusTab: state.tab });
    return;
  }

  if (action === "delete-profile") {
    deleteActiveProfile();
    render({ focusTab: state.tab });
    return;
  }

  if (action === "copy-memo") {
    copyMemo();
  }
}

function handleInput(event) {
  const { target } = event;

  if (target.dataset.draft) {
    state.draft[target.dataset.draft] = target.value;
    return;
  }

  if (target.dataset.input === "query") {
    state.query = target.value;
    scheduleRender({ preserveFocus: true });
    return;
  }

  if (target.dataset.input === "sector") {
    state.sector = target.value;
    render({ preserveFocus: true });
    return;
  }

  if (target.dataset.input === "stage") {
    state.stage = target.value;
    render({ preserveFocus: true });
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

  if (target.dataset.draft) {
    state.draft[target.dataset.draft] = target.value;
    return;
  }

  if (target.dataset.field) {
    writeField(target.dataset.field, target.value);
    persistProfiles();
    render({ preserveFocus: true, focusTab: state.tab });
    return;
  }

  if (target.dataset.metric) {
    activeProfile().metrics[target.dataset.metric] = target.value;
    persistProfiles();
    render({ preserveFocus: true, focusTab: state.tab });
    return;
  }

  if (target.dataset.list) {
    activeProfile()[target.dataset.list] = splitLines(target.value);
    persistProfiles();
    render({ preserveFocus: true, focusTab: state.tab });
  }
}

function handleKeyDown(event) {
  if (!event.target.closest('[role="tablist"] [role="tab"]')) return;
  const tabsInOrder = tabs.map(([key]) => key);
  const currentTab = state.tab;
  let nextTab = null;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    const index = tabsInOrder.indexOf(currentTab);
    nextTab = tabsInOrder[(index + 1) % tabsInOrder.length];
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    const index = tabsInOrder.indexOf(currentTab);
    nextTab = tabsInOrder[(index - 1 + tabsInOrder.length) % tabsInOrder.length];
  } else if (event.key === "Home") {
    nextTab = tabsInOrder[0];
  } else if (event.key === "End") {
    nextTab = tabsInOrder.at(-1);
  }

  if (!nextTab) return;
  event.preventDefault();
  state.tab = nextTab;
  render({ focusTab: nextTab });
}

function writeField(path, value) {
  const profile = activeProfile();
  const parts = path.split(".");
  let cursor = profile;
  for (let index = 0; index < parts.length - 1; index += 1) {
    cursor = cursor[parts[index]];
  }
  cursor[parts.at(-1)] = value;
  touchProfile(profile);
}

function resetActiveProfile() {
  const profile = activeProfile();
  if (!profile) return;
  const template = profileTemplates.find((item) => item.id === profile.templateId || item.id === profile.id);
  const index = state.profiles.findIndex((profile) => profile.id === state.activeId);
  if (!template || index < 0) return;
  state.profiles[index] = normalizeProfileRecord(
    {
      id: template.id,
      source: "template",
      templateId: template.id,
      createdAt: profile.createdAt,
    },
    { source: "template", templateId: template.id, template, now: new Date().toISOString() }
  );
  persistProfiles();
}

function clearActiveProfile() {
  const profile = activeProfile();
  if (!profile || profile.source !== "custom") return;
  const index = state.profiles.findIndex((item) => item.id === profile.id);
  if (index < 0) return;
  state.profiles[index] = buildClearedCustomProfile(profile);
  persistProfiles();
}

function duplicateActiveProfile() {
  const profile = activeProfile();
  if (!profile) return;
  const duplicate = normalizeProfileRecord(structuredClone(profile), { source: "custom", templateId: null, now: new Date().toISOString() });
  duplicate.id = `custom-${Date.now().toString(36)}`;
  duplicate.name = `${profile.name} copy`;
  duplicate.source = "custom";
  duplicate.templateId = null;
  duplicate.createdAt = new Date().toISOString();
  duplicate.updatedAt = duplicate.createdAt;
  state.profiles.push(duplicate);
  state.activeId = duplicate.id;
  state.tab = "intake";
  persistProfiles();
}

function deleteActiveProfile() {
  const profile = activeProfile();
  if (!profile || profile.source !== "custom") return;
  const index = state.profiles.findIndex((item) => item.id === profile.id);
  if (index < 0) return;
  state.profiles.splice(index, 1);
  state.activeId = state.profiles[index]?.id || state.profiles[index - 1]?.id || state.profiles[0]?.id;
  state.tab = "workspace";
  persistProfiles();
}

function buildClearedCustomProfile(profile) {
  const cleared = createEmptyProfile(profile.id);
  cleared.assessment.exposure.primaryJurisdiction = profile.geography || cleared.assessment.exposure.primaryJurisdiction;
  return {
    ...cleared,
    name: profile.name || cleared.name,
    source: "custom",
    templateId: null,
    preferredLens: profile.preferredLens || cleared.preferredLens,
    sector: profile.sector || cleared.sector,
    stage: profile.stage || cleared.stage,
    geography: profile.geography || cleared.geography,
    createdAt: profile.createdAt,
    updatedAt: new Date().toISOString(),
  };
}

function touchProfile(profile) {
  if (!profile) return;
  profile.updatedAt = new Date().toISOString();
}

async function copyMemo() {
  const text = generateMemoV2(activeProfile(), computeReadiness(activeProfile()));
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

function readPath(source, path) {
  return path.split(".").reduce((cursor, part) => (cursor && cursor[part] !== undefined ? cursor[part] : undefined), source);
}

function hasGuideValue(value) {
  if (Array.isArray(value)) return value.some((item) => isPresent(item));
  return hasCollectionValue(value) || (typeof value === "number" && Number.isFinite(value));
}

function fieldPreview(value) {
  if (Array.isArray(value)) {
    return value.length ? value.slice(0, 2).join("; ") : "Nothing added yet.";
  }
  if (typeof value === "number") return String(value);
  if (!hasGuideValue(value)) return "Not filled in yet.";
  const text = String(value).trim();
  return text.length > 130 ? `${text.slice(0, 127)}...` : text;
}

function fieldTab(field) {
  if (field.startsWith("assessment.esg.questionnaire")) return "esg";
  if (["evidence", "risks", "missing"].includes(field)) return "evidence";
  return "intake";
}

function fieldLabel(field) {
  const labels = {
    ask: "Funding ask",
    useOfFunds: "Use of funds",
    nextStep: "Next step",
    evidence: "Evidence available",
    "metrics.traction": "Traction",
    missing: "Missing items",
    risks: "Risks to acknowledge",
    ip: "IP position",
    customer: "Customer and buyer",
    problem: "Problem statement",
    "assessment.exposure.note": "Exposure notes",
    "assessment.exposure.certificationsNeeded": "Required certifications or audits",
    oneLiner: "One-liner",
    trl: "TRL",
    model: "Business model",
    "transition.note": "Transition note",
    "assessment.sroi.beneficiaryGroups": "Beneficiary groups",
    "assessment.sroi.primaryOutcome": "Primary outcome to value",
    "assessment.sroi.baselineAvailable": "Baseline available",
    "assessment.sroi.outcomeEvidence": "Outcome evidence",
    "assessment.sroi.measurementWindow": "Measurement window",
    "assessment.esg.questionnaire.socialOutcome": "Social outcome",
    "assessment.esg.questionnaire.envTracking": "Energy / carbon tracking",
    "team.founders": "Founding team",
    "team.background": "Team background",
    "team.missingRoles": "Key missing role",
    "market.tam": "Total addressable market",
    "market.sam": "Serviceable market",
    "market.competitors": "Main competitors",
    "market.differentiator": "Competitive advantage",
    "unitEconomics.mrr": "MRR",
    "unitEconomics.arr": "ARR",
    "unitEconomics.cac": "Customer acquisition cost",
    "unitEconomics.ltv": "Customer lifetime value",
    "unitEconomics.churn": "Churn rate",
    "unitEconomics.salesChannel": "Sales channel",
    "funding.totalRaised": "Total raised",
    "funding.notableInvestors": "Key investors",
    "exit.horizon": "Exit horizon",
    "exit.type": "Exit type",
    "exit.acquirers": "Potential acquirers",
  };
  return labels[field] || field;
}

function unique(values) {
  return [...new Set(values)];
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
  if (level === "Not assessed") return 0;
  return 1;
}

function hasCollectionValue(value) {
  if (!isPresent(value)) return false;
  const normalized = String(value).trim().toLowerCase();
  return !["unknown", "not started"].includes(normalized);
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
