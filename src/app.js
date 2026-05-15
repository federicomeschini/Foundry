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
    nextStep: "Package pilot economics, MRV logic, and customer proof into one submission narrative before outreach.",
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
    oneLiner: "Digital therapeutic platform for clinics and insurers managing neurological recovery pathways.",
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
    nextStep: "Tighten the reimbursement case and present the MDR path alongside clinic and insurer traction.",
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
    oneLiner: "Private retrieval infrastructure for teams that need enterprise-grade AI deployments with controlled data flows.",
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
    oneLiner: "Grid flexibility platform turning distributed battery and demand-response assets into dispatchable revenue streams.",
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
    oneLiner: "Textile-to-resin conversion process aimed at fashion groups under circularity pressure.",
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
    oneLiner: "Field sensors and seasonal analytics helping specialty-crop growers reduce water waste.",
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
    oneLiner: "Advanced thermal films for electronics manufacturers under performance and energy constraints.",
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
    oneLiner: "Leak-detection analytics for water utilities that need measurable infrastructure resilience gains.",
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
    oneLiner: "Supplier-risk monitoring software for regulated enterprises under vendor-compliance pressure.",
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
    oneLiner: "Factory intelligence software for mid-market manufacturers trying to reduce downtime and energy waste.",
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
  if (typeof localStorage === "undefined") return profileTemplates.map((template) => mergeProfile(template));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return profileTemplates.map((template) => mergeProfile(template));
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return profileTemplates.map((template) => mergeProfile(template));
    const byId = new Map(parsed.map((profile) => [profile.id, profile]));
    return profileTemplates.map((template) => mergeProfile(template, byId.get(template.id)));
  } catch {
    return profileTemplates.map((template) => mergeProfile(template));
  }
}

function mergeProfile(template, saved) {
  const base = {
    ...structuredClone(template),
    assessment: defaultAssessment(template),
    team: { ...defaultTeam(), ...(template.team || {}) },
    market: { ...defaultMarket(), ...(template.market || {}) },
    unitEconomics: { ...defaultUnitEconomics(), ...(template.unitEconomics || {}) },
    funding: { ...defaultFunding(), ...(template.funding || {}) },
    exit: { ...defaultExit(), ...(template.exit || {}) },
  };
  if (!saved || typeof saved !== "object") return base;
  return {
    ...base,
    ...saved,
    regulatory: { ...template.regulatory, ...(saved.regulatory || {}) },
    transition: { ...template.transition, ...(saved.transition || {}) },
    metrics: { ...template.metrics, ...(saved.metrics || {}) },
    team: { ...base.team, ...(saved.team || {}) },
    market: { ...base.market, ...(saved.market || {}) },
    unitEconomics: { ...base.unitEconomics, ...(saved.unitEconomics || {}) },
    funding: { ...base.funding, ...(saved.funding || {}) },
    exit: { ...base.exit, ...(saved.exit || {}) },
    assessment: mergeAssessment(base.assessment, saved.assessment),
    evidence: Array.isArray(saved.evidence) ? saved.evidence : template.evidence,
    risks: Array.isArray(saved.risks) ? saved.risks : template.risks,
    missing: Array.isArray(saved.missing) ? saved.missing : template.missing,
    tags: Array.isArray(saved.tags) ? saved.tags : template.tags,
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
    profile.team.founders,
    profile.team.background,
    profile.market.tam,
    profile.market.competitors,
    profile.funding.totalRaised,
    profile.exit.horizon,
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
        14 +
          presencePoints([profile.oneLiner, profile.problem, profile.customer, profile.model, profile.useOfFunds, profile.ask, profile.nextStep], 8) +
          presencePoints([profile.team.founders, profile.market.tam, profile.market.differentiator], 6) +
          metricBonus(profile.metrics.traction, ["ARR", "MRR", "pilot", "LOI", "live"], 6)
      ),
      22,
      96
    );
  const diligence =
    clamp(
      Math.round(
        22 +
          presencePoints([profile.ip, profile.regulatory.note, profile.transition.note], 8) +
          presencePoints([profile.funding.totalRaised, profile.exit.horizon, profile.market.competitors], 5) +
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
  const status = overall >= 80 ? "Ready to share" : overall >= 64 ? "Sharpen before outreach" : overall >= 48 ? "Needs more work" : "Too early to circulate";

  const strongSignals = [
    evidenceCount >= 3 ? `${evidenceCount} evidence points already visible.` : "",
    isPresent(profile.metrics.traction) ? `Traction is stated clearly: ${profile.metrics.traction}.` : "",
    isPresent(profile.ip) ? "IP ownership is described." : "",
    isPresent(profile.regulatory.note) ? "Regulatory environment is explained." : "",
    isPresent(profile.transition.note) ? "Climate transition context is addressed." : "",
  ].filter(Boolean);

  const blockers = [
    ...profile.missing.slice(0, 3).map((item) => item),
    !isPresent(profile.problem) ? "Problem statement needs to be made concrete." : "",
    !isPresent(profile.customer) ? "Customer or buyer is not yet defined." : "",
    !isPresent(profile.useOfFunds) ? "Use of funds is too vague." : "",
  ].filter(Boolean);

  const moduleScores = [
    {
      label: "Profile completeness",
      value: completeness,
      note: "How complete the core company profile is.",
    },
    {
      label: "Evidence depth",
      value: evidence,
      note: "Evidence you can show, not just claim.",
    },
    {
      label: "Narrative clarity",
      value: narrative,
      note: "How clearly the problem, customer, ask, and next step are explained.",
    },
    {
      label: "Due diligence readiness",
      value: diligence,
      note: "Whether risks and open questions are visible to a reader.",
    },
    {
      label: "Risk & regulation",
      value: exposure,
      note: "How well you've explained the regulatory, climate transition, and IP context.",
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

function computeExposureCollection(profile) {
  const fields = [
    profile.regulatory.level,
    profile.transition.level,
    profile.assessment.exposure.primaryJurisdiction,
  ];
  return buildCollectionStatus(fields, "Regulatory exposure", "Context for the OpenEconomics team to run the regulatory and climate exposure analysis.");
}

function computeEsgCollection(profile) {
  const q = profile.assessment.esg.questionnaire;
  const fields = [q.envTracking, q.envPolicy, q.emissionsImpact, q.diversityPolicy, q.wellbeingTracking, q.socialOutcome, q.hasBoard, q.ethicsPolicy, q.financialsReviewed];
  return buildCollectionStatus(fields, "ESG questionnaire", "Fill in the 9 questions below — the OpenEconomics team reviews and scores your responses.");
}

function computeSroiCollection(profile) {
  const sroi = profile.assessment.sroi;
  const fields = [sroi.beneficiaryGroups, sroi.primaryOutcome, sroi.annualReach];
  return buildCollectionStatus(fields, "Social impact data", "Three inputs for the OpenEconomics team to run the SROI calculation.");
}

function buildCollectionStatus(fields, label, detail) {
  const total = fields.length;
  const completed = fields.filter(hasCollectionValue).length;
  const status = completed === total ? "Complete" : completed >= Math.ceil(total * 0.55) ? "In progress" : "Incomplete";
  return { total, completed, status, detail, label };
}

function render() {
  if (state.onboarding) {
    app.innerHTML = renderOnboarding();
    return;
  }

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
  const template = {
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
  };
  return mergeProfile(template);
}

function renderTopbar(profile, readiness) {
  const lens = lensConfig[state.lens];
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
      </div>
      <div class="topbar__actions">
        <button class="button button--ghost" type="button" data-action="reset-profile">Reset to example</button>
        <button class="button" type="button" data-action="copy-memo">Copy memo</button>
      </div>
    </header>
  `;
}

function renderHero(profile, readiness, bestLens) {
  const insight = buildPreparationInsight(profile, readiness, bestLens);
  return `
    <section class="hero panel">
      <div class="hero__copy">
        <p class="eyebrow">Submission room</p>
        <h2>Get ${profile.name} ready for a serious investor or partner to review in minutes.</h2>
        <p class="hero-copy">
          Founders rarely lack a story. What they often lack is a clean, readable proof path — what's being asked, why it matters now,
          what evidence exists, what's still uncertain, and which open items should be resolved before outreach.
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
          <span>Best submission path</span>
          <small>Based on the current profile and evidence</small>
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
        <p class="eyebrow">${currentLens.eyebrow}</p>
        <h2>Submission path</h2>
      </div>

      <div class="lens-explainer">
        <strong>${escapeHtml(currentLens.label)}</strong>
        <p>${escapeHtml(currentLens.outcome)}</p>
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
          ${renderTabGuide(profile)}
          ${renderTabContent(profile, readiness)}
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
      detail: "The field map at the top shows what the selected lens will review. Start there.",
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
      detail: "Questions are tailored to your sector. Answer what you can — the OpenEconomics team scores your responses.",
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
  if (state.tab === "intake") return renderIntakeTab(profile);
  if (state.tab === "evidence") return renderEvidenceTab(profile, readiness);
  if (state.tab === "memo") return renderMemoTab(profile, readiness);
  if (state.tab === "esg") return renderEsgTab(profile);
  return renderWorkspaceTab(profile, readiness);
}

function renderWorkspaceTab(profile, readiness) {
  const collections = buildAssessmentCollections(profile);
  const insight = buildPreparationInsight(profile, readiness, computeBestLens(profile));
  const currentLens = lensConfig[state.lens];
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
          <h3>Fields this lens will review</h3>
        </div>
        <div class="field-map-grid">
          ${renderLensFieldMap(profile, currentLens)}
        </div>
      </section>

      <section class="section-block section-block--wide lens-panel">
        <div class="section-heading">
          <p class="eyebrow">Score breakdown</p>
          <h3>How this lens weights your readiness score</h3>
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
          <h3>Data captured for later assessment</h3>
        </div>
        <div class="assessment-grid">
          ${renderCollectionCard("Exposure", collections.exposure)}
          ${renderCollectionCard("ESG questionnaire", collections.esg)}
          ${renderCollectionCard("SROI", collections.sroi)}
        </div>
        <p class="model-note">Data collected here feeds into the assessment model. Scores and final outputs will be generated in a later step.</p>
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

function renderIntakeTab(profile) {
  const exposure = computeExposureCollection(profile);
  const esg = computeEsgCollection(profile);
  const sroi = computeSroiCollection(profile);
  const lens = lensConfig[state.lens];
  return `
    <div class="form-layout">
      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Priority fields</p>
          <h3>Start here — these fields matter most for this submission path</h3>
        </div>
        <div class="field-map-grid field-map-grid--compact">
          ${renderLensFieldMap(profile, lens)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Company profile</p>
          <h3>Edit the core fields for this submission</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("One-liner", "oneLiner", profile.oneLiner)}
          ${renderTextField("Problem statement", "problem", profile.problem, "textarea")}
          ${renderTextField("Customer and buyer", "customer", profile.customer, "textarea")}
          ${renderTextField("Business model", "model", profile.model, "textarea")}
          ${renderTextField("Funding ask", "ask", profile.ask)}
          ${renderTextField("Use of funds", "useOfFunds", profile.useOfFunds, "textarea")}
          ${renderTextField("IP position", "ip", profile.ip, "textarea")}
          ${renderTextField("Suggested next step", "nextStep", profile.nextStep, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Team</p>
          <h3>Who is building this, and who is still missing</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("Founding team — names, roles, and brief background", "team.founders", profile.team.founders, "textarea")}
          ${renderTextField("What makes this team the right one to execute this", "team.background", profile.team.background, "textarea")}
          ${renderSelectField("Full-time team size", "team.size", profile.team.size, teamSizeOptions)}
          ${renderSelectField("Key role currently missing", "team.missingRoles", profile.team.missingRoles, missingRoleOptions)}
          ${renderTextField("Key advisors (optional)", "team.advisors", profile.team.advisors)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Market & competition</p>
          <h3>The size of the opportunity and who you are competing with</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("Total addressable market — your best estimate", "market.tam", profile.market.tam)}
          ${renderTextField("Serviceable market — what you can realistically reach", "market.sam", profile.market.sam)}
          ${renderTextField("Main competitors (name 2–4)", "market.competitors", profile.market.competitors, "textarea")}
          ${renderTextField("Why would customers choose you over them?", "market.differentiator", profile.market.differentiator, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Classification</p>
          <h3>Standardized fields for consistent profiling</h3>
        </div>
        <div class="metric-form">
          ${renderSelectField("Sector", "sector", profile.sector, allSectors().filter((option) => option !== "All"))}
          ${renderSelectField("Stage", "stage", profile.stage, stageOptions)}
          ${renderSelectField("Geography", "geography", profile.geography, geographyOptions)}
          ${renderSelectField("TRL", "trl", String(profile.trl), trlOptions)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Metrics</p>
          <h3>Key commercial figures</h3>
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
          <p class="eyebrow">Unit economics</p>
          <h3>The numbers that tell investors whether the business model works</h3>
        </div>
        <p class="model-note">Fill in what you have. Pre-revenue companies can leave MRR/ARR blank and focus on CAC estimates and sales channel.</p>
        <div class="form-grid">
          ${renderTextField("Monthly recurring revenue (MRR)", "unitEconomics.mrr", profile.unitEconomics.mrr)}
          ${renderTextField("Annual recurring revenue (ARR)", "unitEconomics.arr", profile.unitEconomics.arr)}
          ${renderTextField("Customer acquisition cost (CAC)", "unitEconomics.cac", profile.unitEconomics.cac)}
          ${renderTextField("Customer lifetime value (LTV)", "unitEconomics.ltv", profile.unitEconomics.ltv)}
          ${renderTextField("Churn rate", "unitEconomics.churn", profile.unitEconomics.churn)}
          ${renderSelectField("How do you primarily reach customers?", "unitEconomics.salesChannel", profile.unitEconomics.salesChannel, salesChannelOptions)}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Funding & exit</p>
          <h3>Where you have been and where you are going</h3>
        </div>
        <div class="form-grid">
          ${renderTextField("Total raised to date", "funding.totalRaised", profile.funding.totalRaised)}
          ${renderTextField("Number of previous rounds", "funding.roundCount", profile.funding.roundCount)}
          ${renderTextField("Key existing investors", "funding.notableInvestors", profile.funding.notableInvestors)}
          ${renderTextField("Last known post-money valuation", "funding.postMoneyVal", profile.funding.postMoneyVal)}
          ${renderSelectField("Expected exit horizon", "exit.horizon", profile.exit.horizon, exitHorizonOptions)}
          ${renderSelectField("Preferred exit type", "exit.type", profile.exit.type, exitTypeOptions)}
          ${renderTextField("Potential acquirers or strategic partners", "exit.acquirers", profile.exit.acquirers, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Regulatory exposure</p>
          <h3>Three quick questions — our team handles the rest</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("Exposure collection", exposure)}
        </div>
        <p class="model-note">Answer what you can. The OpenEconomics team will use these to run the full regulatory and climate exposure analysis — no expertise required on your end.</p>
        <div class="form-grid">
          ${renderSelectField("How much regulatory oversight does your activity face?", "regulatory.level", profile.regulatory.level, exposureLevelOptions)}
          ${renderSelectField("How exposed is your company to climate or sustainability regulations?", "transition.level", profile.transition.level, exposureLevelOptions)}
          ${renderSelectField("Primary market", "assessment.exposure.primaryJurisdiction", profile.assessment.exposure.primaryJurisdiction, geographyOptions)}
          ${renderTextField("Anything else the team should know?", "assessment.exposure.note", profile.assessment.exposure.note, "textarea")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">ESG tracking</p>
          <h3>Your ESG questionnaire status</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("ESG questionnaire", esg)}
        </div>
        <p class="model-note">Status updates automatically as you fill in the questionnaire.</p>
        <button class="button" data-action="set-tab" data-tab="esg">Go to questionnaire</button>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Social impact data</p>
          <h3>Tell us who you help and what changes for them</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("SROI collection", sroi)}
        </div>
        <p class="model-note">Three questions is all we need from you. The OpenEconomics team will handle the full Social Return on Investment calculation.</p>
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

function renderEsgTab(profile) {
  const esg = computeEsgCollection(profile);
  const questions = getEsgQuestions(profile.sector);
  const groups = ["Environment", "Social", "Governance"];
  return `
    <div class="content-grid">
      <section class="section-block section-block--wide">
        <div class="section-heading">
          <p class="eyebrow">ESG questionnaire</p>
          <h3>Answer once — we use this across all assessments</h3>
        </div>
        <div class="assessment-summary">
          ${renderCollectionCard("ESG questionnaire", esg)}
        </div>
        <p class="model-note">Answer as honestly as you can — "Working on it" or "No" is fine. Questions below are tailored to your sector: <strong>${escapeHtml(profile.sector)}</strong>. The OpenEconomics team reviews your responses and builds the full ESG analysis.</p>
        ${groups.map((group) => {
          const qs = questions.filter((q) => q.group === group);
          return `
            <p class="eyebrow" style="margin-top:1.5rem">${escapeHtml(group)}</p>
            <div class="form-grid">
              ${qs.map((q) => renderSelectField(q.label, `assessment.esg.questionnaire.${q.key}`, profile.assessment.esg.questionnaire[q.key], esgQuestionOptions)).join("")}
            </div>
          `;
        }).join("")}
      </section>
    </div>
  `;
}

function renderEvidenceTab(profile, readiness) {
  const bestLens = computeBestLens(profile);
  const insight = buildPreparationInsight(profile, readiness, bestLens);
  const lens = lensConfig[state.lens];
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
              </div>
            `
          )
          .join("")}
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

function generateMemo(profile, readiness) {
  const lens = lensConfig[state.lens];
  const bestLens = computeBestLens(profile);
  const insight = buildPreparationInsight(profile, readiness, bestLens);
  const collections = buildAssessmentCollections(profile);
  const firstSignal = readiness.strongSignals[0] || "The profile already contains a usable starting point.";
  const firstBlocker = readiness.blockers[0] || "No major blockers identified at this stage.";
  return [
    `${profile.name} is a ${profile.stage.toLowerCase()} ${profile.sector.toLowerCase()} company in ${profile.geography}. Under the ${lens.label.toLowerCase()} lens, the current submission readiness reads at ${readiness.overall}/100 and is best described as ${readiness.status.toLowerCase()}.`,
    `Core company story: ${profile.oneLiner} The stated customer is ${profile.customer.toLowerCase()} and the current ask is ${profile.ask.toLowerCase()}, with funds intended for ${profile.useOfFunds.toLowerCase()}.`,
    `Market-facing interpretation: ${insight.marketDetail} The best first audience is ${insight.audience.toLowerCase()} because ${insight.audienceReason.charAt(0).toLowerCase() + insight.audienceReason.slice(1)}`,
    `Evidence available: ${profile.evidence.join("; ")}. Current traction reads as ${profile.metrics.traction.toLowerCase()} and the profile already reflects ${firstSignal.toLowerCase()}.`,
    `Main item to sharpen next: ${firstBlocker.replace(/^Missing:\s*/i, "").replace(/\.$/, "")}. Suggested next step: ${profile.nextStep.charAt(0).toLowerCase() + profile.nextStep.slice(1)}.`,
    `Preparation priority: ${insight.priorityDetail} The next useful proof package is ${insight.proofTarget.toLowerCase()}: ${insight.proofDetail.charAt(0).toLowerCase() + insight.proofDetail.slice(1)}`,
    `Assessment inputs collected: regulatory exposure ${collections.exposure.completed}/${collections.exposure.total}, ESG tracking ${collections.esg.completed}/${collections.esg.total}, SROI ${collections.sroi.completed}/${collections.sroi.total}. These feed into the assessment model and are not used to calculate a final result here.`,
    `Exposure framing: regulatory context is ${profile.regulatory.level.toLowerCase()} and described as ${profile.regulatory.character.toLowerCase()}, while transition context is ${profile.transition.level.toLowerCase()} and described as ${profile.transition.character.toLowerCase()}. The strongest downstream lane based on the current profile is ${bestLens.label.toLowerCase()}.`,
    `This note is based on the current profile only and should be used as a founder-side preparation output before outreach, not as financing advice or a substitute for third-party diligence.`,
  ].join("\n");
}

function buildPreparationInsight(profile, readiness, bestLens) {
  const lowerSector = `${profile.sector} ${profile.tags.join(" ")}`.toLowerCase();
  const firstMissing = profile.missing[0] || "a sharper evidence package";
  const firstRisk = profile.risks[0] || "execution risk";
  const hasRevenue = /arr|mrr|revenue|fees|customers|pilot/i.test(`${profile.metrics.revenue} ${profile.metrics.traction}`);
  const isRegulated = profile.regulatory.level === "High" || /health|energy|water|cyber|regulated|clinical|municipal/.test(lowerSector);
  const isDeepTech = profile.trl <= 6 || /deep tech|materials|hardware|climate|carbon|circular/.test(lowerSector);
  const isAi = /ai|data|infra|security|automation/.test(lowerSector);

  const marketRead = isAi
    ? "AI and data products need to show concrete deployment value"
    : isDeepTech
      ? "Strong technology needs a clear route to market"
      : isRegulated
        ? "Regulation can work in your favor when explained clearly"
        : "Proof quality matters more than broad market claims";

  const marketDetail = isAi
    ? "The profile should show security credentials, real workflow impact, margin structure, and why you're hard to copy — AI markets are crowded and buyers compare options quickly."
    : isDeepTech
      ? "The profile should connect technical validation to a specific first market, a qualification path, and real buyer interest — before asking anyone to believe the bigger vision."
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

  const proofTarget = isRegulated
    ? "Regulatory and implementation evidence"
    : isDeepTech
      ? "Pilot results and qualification roadmap"
      : hasRevenue
        ? "Proof of repeatable growth"
        : "Customer problem and willingness to pay";

  const proofDetail = isRegulated
    ? "Show the regulatory requirements, any required approvals or procurement steps, data or safety controls, and who owns the risk after deployment."
    : isDeepTech
      ? "Connect your technology maturity level, external validation, cost data, first target customer, IP status, and the milestone that moves you from technical proof to commercial evidence."
      : hasRevenue
        ? "Show customer retention, margins, how efficient your sales process is, implementation effort, and why the next funding or partnership step makes growth more repeatable."
        : "Replace market-size claims with a specific customer problem, proof that it's urgent, and the simplest credible path to a first paying customer or pilot.";

  const priorityLabel = readiness.overall >= 80
    ? "Almost ready — prepare your outreach materials"
    : readiness.overall >= 64
      ? "Close the key gaps"
      : "Strengthen the core case";

  const priorityDetail = readiness.overall >= 80
    ? "You're nearly ready to share. Focus on making your evidence, risks, and ask easy for a reader to check."
    : readiness.overall >= 64
      ? `The story is usable, but ${firstMissing.toLowerCase()} should be made clearer before broad outreach.`
      : "The profile needs a clearer connection between the problem you're solving, the evidence you have, what you're asking for, and what comes next.";

  const openQuestion = isRegulated
    ? "What makes this worth navigating the regulatory hurdles?"
    : isDeepTech
      ? "What proves this can move from the lab into real-world use?"
      : hasRevenue
        ? "Can the company keep growing without the economics falling apart?"
        : "Who needs this urgently enough to act now?";

  const openQuestionDetail = isRegulated
    ? "A serious reader will look for who owns the budget, what the approval path looks like, the timeline, and whether regulation creates demand or only delays it."
    : isDeepTech
      ? "A serious reader will look for external validation, whether it can be manufactured at scale, who owns the IP, and a realistic route to a first paying customer."
      : hasRevenue
        ? "A serious reader will look for retention rates, margins, how much it costs to acquire a customer, implementation effort, and how concentrated the customer base is."
        : "A serious reader will look for specific customer types, what triggers them to buy, their willingness to pay, and a more focused first market.";

  const nextMoves = [
    `Put together a short proof summary around ${firstMissing.toLowerCase()} and connect it directly to the ask of ${profile.ask.toLowerCase()}.`,
    `Address "${firstRisk}" as a known risk — document how you're managing it, who owns it, and when it will be resolved.`,
    `Tailor your next outreach to ${audience.toLowerCase()} specifically, not a generic investor audience.`,
  ];

  const counterpartyQuestions = [
    {
      label: "Urgency",
      question: "Why does this investor or partner need to care right now?",
      answer: profile.transition.note,
    },
    {
      label: "Evidence",
      question: "What proof is available today, and what's still missing?",
      answer: `${profile.evidence[0] || "Evidence still needs to be added."} / Still missing: ${firstMissing}.`,
    },
    {
      label: "Next steps",
      question: "What happens after they say yes?",
      answer: profile.useOfFunds,
    },
    {
      label: "Risks",
      question: "Which risks should you name before they do?",
      answer: firstRisk,
    },
  ];

  return {
    marketRead,
    marketDetail,
    audience,
    audienceReason,
    proofTarget,
    proofDetail,
    priorityLabel,
    priorityDetail,
    openQuestion,
    openQuestionDetail,
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
  return "Review your answers — the OpenEconomics team will take it from here.";
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
    state.activeId = target.dataset.id;
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
    render();
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
    render();
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

  if (target.dataset.draft) {
    state.draft[target.dataset.draft] = target.value;
    return;
  }

  if (target.dataset.field) {
    writeField(target.dataset.field, target.value);
    persistProfiles();
    render();
    return;
  }

  if (target.dataset.metric) {
    activeProfile().metrics[target.dataset.metric] = target.value;
    persistProfiles();
    render();
    return;
  }

  if (target.dataset.list) {
    activeProfile()[target.dataset.list] = splitLines(target.value);
    persistProfiles();
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
  state.profiles[index] = mergeProfile(template);
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
