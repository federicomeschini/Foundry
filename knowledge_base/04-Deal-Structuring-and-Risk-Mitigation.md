# 04. Deal Structuring: Strategic Levers and Protection

## 1. Introduction & Instrument Logic
This manual serves as the technical logic layer for the 'Term Sheet Builder' instrument, based on the BVCA (British Venture Capital Association) standard. It provides the algorithmic and legal framework for automating the generation of Series A venture capital term sheets. The document maps 26 critical items into a modular architecture designed for high-precision deal structuring and surgical risk mitigation.

---

## 2. Exhaustive Index & Clause Breakdown

### 2.1. Type of Share
- **Technical Definition:** VC investors typically subscribe to a 'Preferred' class (e.g., Series A Preferred).
- **Instrument Logic:** Binary choice between *Ordinary* and *Preferred*. If Preferred, the instrument must toggle sub-modules for liquidation preference, conversion rights, and anti-dilution.
- **Variation:** In Continental Europe (e.g., France/Italy), share class restrictions may require 'special rights' established via a Shareholders' Agreement (SHA) rather than inherent share characteristics in the Articles.

### 2.2. Valuation and Milestones
- **Pre-money Valuation:** The agreed equity value of the company prior to the new investment.
- **Post-money Valuation:** `Pre-money + Investment Amount`.
- **Purchase Price Calculation:** `Pre-money Valuation / Fully Diluted Share Capital (FDSC)`.
    - *FDSC* must include all issued shares plus the unallocated employee option pool (ESOP), warrants, and convertible debt.
- **Tranching/Milestones:** Staged investment dependent on technical (e.g., prototype completion) or commercial (e.g., £X revenue) targets. 
- **Ratchet Mechanism:** A valuation bridge that adjusts the investor/founder split post-investment based on IRR or performance metrics.

### 2.3. Dividend Rights
- **Cumulative vs. Non-Cumulative:**
    - *Cumulative:* Accrues at a fixed rate (typically 5-10% p.a.) and must be paid in full (or capitalised) upon exit or conversion before any payments to Ordinary holders.
    - *Non-Cumulative:* Only paid if declared by the Board.
- **Preferred Participation:** A 'double-dip' feature where preferred holders receive their preference AND a pro rata share of ordinary dividends.
- **Veto Rights:** Standard 'Investor Majority' consent required for any dividend declaration to protect cash reserves.

### 2.4. Liquidation Preference and Deemed Liquidation
- **Primary Mechanism:** Defines the 'Waterfall' distribution during a Liquidity Event.
- **Technical Scenarios:**
    - **Scenario A: 1x Non-Participating (Exit at £10M, Investment £2M for 20%).** Investor gets £2M (preference) because £2M > 20% of £10M (£2M). If exit was £20M, investor gets £4M (20% pro rata) because £4M > £2M.
    - **Scenario B: 1x Participating (Exit at £10M, Investment £2M for 20%).** Investor gets £2M (preference) PLUS 20% of the remaining £8M (£1.6M) = £3.6M Total.
    - **Scenario C: 2x Non-Participating.** Investor gets first £4M of any exit before others receive anything.
- **Deemed Liquidation Triggers:** 
    - Merger or consolidation.
    - Sale of all or substantially all assets.
    - Change of control (transfer of >50% voting power).
    - Sometimes includes an IPO (if not a 'Qualified IPO').

### 2.5. Redemption
- **Investor Option:** The right to force the company to repurchase shares, typically after a 5-7 year period if an exit hasn't occurred.
- **Redemption Price:** Usually the Original Issue Price plus accrued dividends.
- **Failure to Redeem:** Triggers 'Enhanced Rights' (e.g., the right to appoint a majority of the board or force a sale of the company).
- **Jurisdiction Note:** In the UK, redemption requires 'distributable reserves'. If unavailable, the instrument should switch to a 'Put Option' against founders (common in Continental Europe).

### 2.6. Conversion Rights
- **Optional Conversion:** Preferred holders may convert to Ordinary at any time (initial ratio 1:1).
- **Anti-dilution Adjustments:** Dilutive rounds (down rounds) update the conversion ratio (e.g., 1 Preferred now converts to 1.5 Ordinary).
- **Reorganisation Adjustments:** Adjustments for share splits, consolidations, or recapitalisations.

### 2.7. Automatic Conversion (Forced Conversion)
- **Primary Trigger:** Completion of a 'Qualified IPO' (Q-IPO).
- **Minority Vote:** Often triggered if >75% of preferred holders agree to convert, regardless of IPO status.

### 2.8. Anti-Dilution (Price Protection)
- **Trigger:** A 'Down Round' where shares are issued at a price lower than the Series A price.
- **Calculation Methods (The Technical Formulas):**
    - **Full Ratchet:** `New CP = Price of Down Round`. If Series A was £10/share and Down Round is £5/share, Series A conversion price becomes £5.
    - **Broad-Based Weighted Average:** `CP2 = CP1 * (A + B) / (A + C)`.
        - A = Shares outstanding prior to new issue (including options, warrants, convertibles).
        - B = Total consideration received in new round / CP1.
        - C = Number of new shares issued in new round.
        - *Logic:* Dilutes the 'hit' to founders by factoring in how much capital was actually raised.
    - **Narrow-Based Weighted Average:** Same formula, but 'A' excludes options or warrants, making the denominator smaller and the adjustment larger (more investor-favourable).

### 2.9. Founder Shares (Vesting & Leaver Provisions)
- **Vesting Schedule:** Standard 4-year vesting with a 12-month cliff. Vesting can be monthly or quarterly thereafter.
- **Leaver Categories:**
    - **Good Leaver:** Death, disability, redundancy, or retirement (if approved). Price = Market Value.
    - **Bad Leaver:** Resignation within X years, dismissal for cause, fraud, or gross misconduct. Price = Nominal/Par value.
- **Vesting Acceleration:** 
    - *Single Trigger:* Vesting accelerates upon a change of control.
    - *Double Trigger:* Vesting accelerates if the founder is terminated without cause *following* a change of control.

### 2.10. Pre-emption Rights (Right of First Offer)
- **Pro Rata Participation:** Right to buy a portion of new shares to maintain ownership %.
- **Exempted Securities:** 
    - ESOP issues (usually capped at 10-15%).
    - Shares issued for IP/Assets.
    - Shares issued on conversion of preferred.
    - Anti-dilution shares.

### 2.11. ROFR, Co-sale, and Tag-along
- **Right of First Refusal (ROFR):** Founders must offer shares to the company or investors before selling to third parties.
- **Tag-along:** If a founder sells shares, investors can 'tag along' and sell a proportional amount on the same terms.
- **Exceptions:** Permitted transfers to 'Permitted Transferees' (family members, trusts, or affiliated funds).

### 2.12. Drag-along (Bring-along)
- **Technical Trigger:** Approval of a sale by the 'Investor Majority' AND a 'Founder Majority' (or 75% total).
- **Protection Clauses:** 
    - No liability for investors beyond their share proceeds.
    - No requirement for investors to give operational warranties.
    - 'Squeeze-out' rights for remaining 10% in jurisdictions with 90% legal thresholds.

### 2.13. Representations and Warranties (The 'Tech Checklist')
Detailed warranties required from Founders and the Company:
- **Corporate Status:** Valid incorporation, share capital register accuracy.
- **Accounts:** 'True and fair' view of financial state, no undisclosed liabilities.
- **Operations:** No material adverse changes since last accounts, compliance with laws.
- **Assets & IP:** Company owns all IPR; no infringement of third-party IP; all founder IP assigned.
- **Employment:** Compliance with labor laws, no outstanding claims, key management contracts in place.
- **Taxation:** No unpaid tax liabilities, compliance with tax schemes (e.g., EIS/SEIS in UK).
- **Litigation:** No pending or threatened legal actions.

### 2.14. Voting Rights
- **General Meetings:** Preferred shares vote together with Ordinary (as-converted basis).
- **Class Meetings:** Specific matters require a separate 'Class Vote' of preferred holders.

### 2.15. Protective Provisions (Negative Covenants)
Matters requiring **Investor Majority Consent**:
- **Capital Structure:** Issuing new shares, creating new classes, or changing existing rights.
- **Corporate Governance:** Changing Board size, appointing/removing key executives (CEO/CTO).
- **Strategic Moves:** Mergers, acquisitions, joint ventures, or winding up.
- **Financial Thresholds:** Incurring debt above £X, single capital expenditures above £Y, or selling assets >£Z.
- **Operations:** Changing the nature of the business or the business plan materially.
- **Accounting:** Changing auditor or accounting policies.
- **Dividends:** Declaring or paying any distribution.
- **Litigation:** Commencing or settling material litigation.

### 2.16. Board of Directors and Observers
- **Investor Director:** Right for lead investor(s) to appoint one or more directors.
- **Board Observer:** Right to attend but not vote. Useful for smaller funds or to avoid liability.
- **Committees:** Requirement to establish Audit and Remuneration Committees, chaired by an Investor Director.
- **Board Meetings:** Typically required monthly for early-stage companies.

### 2.17. Information Rights
- **Monthly Reporting:** Management accounts within 15-20 days of month-end.
- **Annual Reporting:** Audited accounts and annual budget (for Board approval).
- **Inspection Rights:** Right to visit company premises and inspect books.

### 2.18. Exit Rights
- **Standard Expectation:** Trade sale or IPO within 5-7 years.
- **Liquidity Events:** Defined list of events triggering the liquidation preference.

### 2.19. Registration Rights
- **US Nexus:** Primarily relevant for companies targeting a NASDAQ/NYSE listing.
- **Modules:** Demand Registration, S-3 Registration, and Piggy-back rights.
- **Cost Allocation:** Company typically bears all registration expenses.

### 2.20. Confidentiality & IP Assignment
- **NDA:** Strict confidentiality regarding the investment process and trade secrets.
- **Assignment:** Founders must sign 'Intellectual Property Assignment Agreements' ensuring all past and future IP belongs to the entity.

### 2.21. Employee Share Option Plan (ESOP)
- **Incentivisation:** Reserving 10-20% of equity for employees.
- **Management:** Options granted at the discretion of the Remuneration Committee.
- **Exclusion:** Major shareholders (>5-10%) usually excluded from the ESOP.

### 2.22. Transaction and Monitoring Fees
- **Transaction Costs:** Capped amount (e.g., £25k-£50k) for investors' legal fees.
- **Monitoring Fees:** Annual fee for investor 'support' (standard in Private Equity, less common in pure VC).

### 2.23. Confidentiality (Standard Clause)
- Binds all parties to secrecy regarding the term sheet existence and content.

### 2.24. Exclusivity (No-Shop)
- **Restriction:** Company and Founders cannot negotiate with other investors for a period (e.g., 45 days).
- **Break Fee:** If founders pull out to take a better deal, they may be liable for investors' costs.

### 2.25. Enforceability & Legal Status
- **Standard:** Term sheet is non-binding except for confidentiality, exclusivity, costs, and governing law.
- **Good Faith Duty:** In Civil Law jurisdictions (Germany, France), breaking off negotiations without 'just cause' can lead to damages under *culpa in contrahendo*.

### 2.26. Conditions Precedent (Completion Checklist)
Before funds are released, the following must be satisfied:
- **Legal:** Negotiation and execution of the Investment Agreement and new Articles.
- **Due Diligence:** Satisfactory legal, financial, commercial, and technical (IP/Code) DD.
- **Insurance:** Key Man Insurance and D&O (Directors & Officers) Insurance.
- **Consents:** Approval from the Board and existing shareholders; any necessary regulatory clearances.
- **Employment:** New service agreements for founders on investor-approved terms.
- **Tax:** VCT/EIS/SEIS tax clearance from HMRC (UK-specific).

---

## 3. Specialized 'Term Sheet Builder' Technical Definitions

### 3.1. The 'Qualified IPO' (Q-IPO) Threshold
A Q-IPO is the 'Gold Standard' exit that forces all preferred shares to convert to ordinary.
- **Market Cap:** Minimum pre-money valuation of £100M+.
- **Price per Share:** At least 3x the Series A issue price.
- **Gross Proceeds:** Minimum of £25M raised for the company.
- **Listing:** Must be on a 'Recognised Investment Exchange' (LSE, NYSE, NASDAQ).

### 3.2. Detailed 'Leaver' Criteria Matrix
| Scenario | Status | Price for Unvested | Price for Vested |
| :--- | :--- | :--- | :--- |
| **Fraud/Gross Misconduct** | Bad Leaver | Nominal | Nominal |
| **Resignation (<1yr)** | Bad Leaver | Nominal | Nominal |
| **Resignation (1-3yrs)** | Bad Leaver | Nominal | Lower of Cost/Market |
| **Death/Permanent Disability**| Good Leaver | Market | Market |
| **Redundancy/Unfair Dismissal**| Good Leaver | Market | Market |

---

## 4. Risk Mitigation & Structural Safeguards

### 4.1. Valuation Risk
- **Mitigation:** Tranching (milestone-based funding) and Ratchets.
- **Instrument Logic:** Adjusts the amount of capital released based on proven KPIs.

### 4.2. Operational Risk
- **Mitigation:** Board representation and Protective Provisions.
- **Instrument Logic:** Shifts control of major decisions (M&A, Capex) to investors.

### 4.3. Personnel Risk
- **Mitigation:** Vesting, Leaver Provisions, and Key Man Insurance.
- **Instrument Logic:** Ensures founders are incentivised to stay and the company is compensated for their loss.

### 4.4. IP Risk
- **Mitigation:** IP Assignment Warranties and Pre-completion IP DD.
- **Instrument Logic:** Prevents the company from being built on stolen or unassigned technology.

---

## 5. Term Sheet Builder: Logic Implementation (Drafting Algorithms)

### 5.1. The Anti-Dilution Algorithm
```python
def calculate_conversion_price(series_a_price, shares_pre_money, total_invested_down, down_round_price):
    # Weighted Average Broad-Based
    A = shares_pre_money
    B = total_invested_down / series_a_price
    C = total_invested_down / down_round_price
    new_conversion_price = series_a_price * (A + B) / (A + C)
    return new_conversion_price
```

### 5.2. Liquidation Waterfall Logic
```python
def calculate_waterfall(exit_value, total_invested, ownership_pct, participation_type):
    if participation_type == "non-participating":
        investor_return = max(total_invested, exit_value * ownership_pct)
    elif participation_type == "participating":
        investor_return = total_invested + (exit_value - total_invested) * ownership_pct
    return investor_return
```

---

## 6. Jurisdiction & Enforceability Blueprint

### 6.1. UK (Common Law / BVCA Standard)
- **High Flexibility:** Contractual freedom to define almost any share right.
- **Articles vs. SHA:** Rights often split between the Articles (public) and the SHA (private).
- **Enforcement:** Courts generally uphold the letter of the contract.

### 6.2. Continental Europe (Civil Law Nuances)
- **Formalism:** Many documents (e.g., in Germany) must be notarized to be valid.
- **Capital Protection:** Strict rules on returning capital to shareholders (limits redemption/buybacks).
- **Fiduciary Duties:** Directors owe primary duty to the 'Company' as a separate entity, sometimes complicating 'Investor Director' instructions.
- **Information Equality:** Statutory rights for minority shareholders to receive the same information as majority holders.

---

## 7. Mandatory Conditions Precedent (Detailed Checklist)
- **Commercial DD:** Market analysis, competitive positioning, customer references.
- **Scientific/Technical DD:** Code review, security audit, architecture validation.
- **Legal DD:** Verification of cap table, no undisclosed encumbrances, IP chain of title.
- **Financial DD:** Review of historic P&L, current balance sheet, 3-year projections.
- **Tax DD:** Qualification for regional tax breaks (e.g. EIS/SEIS in UK).
- **Regulatory:** KYC (Know Your Customer) and AML (Anti-Money Laundering) checks on all major shareholders.

---
*Manual Version: 1.2 (Final Technical Blueprint for VC Deal Architecture)*
