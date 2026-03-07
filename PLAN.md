# HalalHub — Business Model & Role Strategy (v4)

## Core Concept
**"Halal Workplace Review + B2B Matching"** platform that connects Halal businesses with certified suppliers, devout Muslim employees, and Halal investors.

---

## Simplified Model

Start with **2 roles** → other roles follow naturally:

```
Phase 1 (Month 1-3):  Entrepreneur + Supplier
Phase 2 (Month 3-6):  Job Seekers follow (see badge on company website)
Phase 3 (Month 6-12): Investors follow
Phase 4:              Educators follow
```

---

## Role 1: Entrepreneur / Business Owner

**Problem:** Needs devout Muslim employees + Halal investors + certified suppliers, but no trusted channel exists.

**Free value from HalalHub:**
- **Halal Workplace Review** — public criteria review, earn badge + listing
- **Bronze / Silver / Gold tiers** — attract devout Muslim job seekers + investor visibility
- **Auto-matching with suppliers** (Phase 2) — notified when matching supplier joins

---

## Role 2: Halal Supplier / Manufacturer

**Problem:** Invisible — buyers find them only at annual trade fairs or via LINE word-of-mouth.

**Free value from HalalHub:**
- **Verified Supplier Listing** — searchable B2B directory
- **Auto-matching** (Phase 2) — system notifies matching entrepreneurs automatically
- Auto-invited when entrepreneurs mention them in the platform

---

## Halal Workplace Review Scoring

**Criteria must be public before launch:**

| Criteria | Bronze | Silver | Gold |
|---|---|---|---|
| Prayer room available | - | Yes | Yes |
| Halal food in canteen | Yes | Yes | Yes |
| Friday prayer flexibility | Yes | Yes | Yes |
| No alcohol at company events | - | - | Yes |
| No dress code violating Islamic values | - | Yes | Yes |

*(Bronze = 3/5, Silver = 4/5, Gold = 5/5)*

---

## Auto-Matching: Analysis & Plan

### Why It's Needed
- Buyers struggle to find trusted suppliers — not just a discoverability problem
- Thai Halal B2B = community-based, high trust when shared identity (Halal) exists
- Passive notifications re-engage users who signed up and went quiet

### Why It Must Be Phased
**Warning: Poor match quality is worse than no matching**
- Irrelevant notifications = spam = unsubscribes + negative word-of-mouth
- Thai Muslim community is small; word-of-mouth spreads fast

### 3 Dimensions Required for Meaningful Matches
1. **Category** — sufficiently granular taxonomy (40–70 categories)
2. **Region** — province / region
3. **Scale** — MOQ / volume range

---

## Phased Auto-Matching Plan

### Phase 1 (Build Now — Month 1–3): Data Foundation

**Actions:**
- Design **Halal B2B Category Taxonomy** in Thai — 40–70 categories
  (Food ingredients / Packaging / Equipment / Logistics / Services)
- Collect matching data in profiles from day one (**required fields, not optional**)
  - Supplier: category, province, MOQ min, certification body
  - Entrepreneur: needed categories, region, volume range, certification level required
- Build **Search + Filter UI** — delivers value immediately before matching engine is ready

> Announce matching as "Coming Soon" to incentivize complete profile completion.

### Phase 2 (Activate — Month 3–6): Launch Matching at 30+ Suppliers

**Match Logic (rule-based, simple):**
```
IF supplier.category INTERSECTS entrepreneur.neededCategory
AND supplier.region INTERSECTS entrepreneur.region
AND supplier.MOQ_min <= entrepreneur.targetVolume
→ MATCH → notify both parties
```

**Notification channel:**
- Start with **email digest** (simple, measurable, no LINE API needed)
- Measure: notification → profile view rate >= 15% → invest in LINE integration

**Notification copy:**
```
[Supplier]: "3 entrepreneurs are looking for [category] in the South — view their profiles"
[Entrepreneur]: "A new supplier matching your needs was found — see them now"
```

### Phase 3 (Full Feature — Month 6+): Real-time + LINE + Ranking

- Real-time bidirectional matching
- **LINE notification** (primary channel for Thai SMEs)
- **Match score** = category match + certification alignment + response rate
- **"Find Best Supplier"** ranking by score + recency + response rate

---

## Growth Loop (with Matching)

```
Entrepreneur signs up → fills sourcing needs → earns Halal Workplace badge
         ↓
System auto-invites mentioned suppliers → suppliers claim profile
         ↓
Phase 2: Auto-match notifies → both sides get real value
         ↓
Devout Muslims see badge on company website → come to find jobs (job seekers follow)
         ↓
Investors see verified businesses + active matching = credible platform
         ↓
SELF-SUSTAINING ✓
```

---

## Business Model

### Phase 1: Fully Free (Month 1–12) — Target: 150+ reviewed businesses

### Phase 2: Monetize After Critical Mass

| Priority | Revenue | Method | Why They Pay |
|---|---|---|---|
| 1 | **Premium Listing** | THB 500–1,500/month | Higher ranking, analytics |
| 2 | **Recruitment Fee** | 8–12% of first month salary | Pay only when hired |
| 3 | **Review Renewal** | THB 3,000–8,000/year | Badge renewal |
| 4 | **Investor Matching** | 1–2% of deal | When platform facilitates transaction |

---

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| Low match quality = spam | Only activate matching at 30+ suppliers |
| Review credibility decay | Public criteria + non-trivial pass threshold |
| Founder bottleneck | Document review process for delegation from day one |
| Market size ceiling | Capital-light model — no VC scale required |

---

## Key Files to Create (Technical)

```
src/data/categoryTaxonomy.ts         — Halal B2B taxonomy (40-70 categories)
src/models/supplierProfile.ts        — schema with matching fields
src/models/entrepreneurProfile.ts   — schema with sourcing needs
src/services/matchingService.ts      — rule-based match logic (isolated)
src/services/notificationService.ts  — abstraction layer email/LINE
```

---

## Execution Sequence

```
Before Launch:
  - Write Bronze/Silver/Gold scoring criteria + taxonomy
  - Pilot review with 5-10 businesses

Month 1-3:
  - Onboard 100 entrepreneurs
  - Supplier listing follows (auto-invite)
  - Search/filter UI live

Month 3-6:
  - Launch auto-matching (email digest) at 30+ suppliers
  - Job seekers follow organically → add job listing feature

Month 6-12:
  - LINE notification matching
  - Investors follow
  - Begin monetization
```
