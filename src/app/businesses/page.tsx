"use client"

import { useState } from "react"
import { MOCK_BUSINESSES } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { HalalTier } from "@/types"

const REGIONS = ["ทุกภาค", "ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคตะวันออกเฉียงเหนือ", "ภาคใต้"]
const TIERS: { label: string; value: HalalTier | "all" }[] = [
  { label: "ทุก Tier", value: "all" },
  { label: "✦ Gold", value: "gold" },
  { label: "✦ Silver", value: "silver" },
  { label: "✦ Bronze", value: "bronze" },
]

const S = {
  input: { padding: "9px 14px", fontSize: 13, fontFamily: "inherit", borderRadius: 10 } as React.CSSProperties,
}

export default function BusinessesPage() {
  const [region, setRegion] = useState("ทุกภาค")
  const [tier, setTier] = useState<HalalTier | "all">("all")
  const [seekingInvestment, setSeekingInvestment] = useState(false)
  const [search, setSearch] = useState("")

  const filtered = MOCK_BUSINESSES.filter((b) => {
    if (region !== "ทุกภาค" && b.region !== region) return false
    if (tier !== "all" && b.tier !== tier) return false
    if (seekingInvestment && !b.seekingInvestment) return false
    if (search && !b.nameTh.includes(search) && !b.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>الأعمال الحلال</span>
          <span style={{ width: 32, height: 1, background: "var(--border)" }} />
          <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>HALAL BUSINESSES</span>
        </div>
        <h1 style={{ fontWeight: 800, fontSize: 40, color: "var(--text-1)", margin: 0, fontFamily: "var(--font-thai)", letterSpacing: "-0.02em" }}>ธุรกิจ<span style={{ color: "#D4A017" }}>ฮาลาล</span></h1>
        <p style={{ marginTop: 8, color: "var(--text-2)", fontFamily: "var(--font-thai)", fontSize: 14 }}>ธุรกิจที่ผ่านการ review Halal Workplace — เกณฑ์สาธารณะ โปร่งใส</p>
      </div>

      {/* Filter bar */}
      <div className="win-card" style={{ borderRadius: 12, marginBottom: 32, borderLeft: "3px solid #D4A017" }}>
        <div style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>SEARCH</div>
            <input type="text" placeholder="ชื่อธุรกิจ..." value={search} onChange={(e) => setSearch(e.target.value)} className="hh-input" style={{ ...S.input, width: 180 }} />
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>REGION</div>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="hh-input" style={{ ...S.input, width: 160 }}>
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>TIER</div>
            <select value={tier} onChange={(e) => setTier(e.target.value as HalalTier | "all")} className="hh-input" style={{ ...S.input, width: 130 }}>
              {TIERS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, color: "var(--text-2)", fontFamily: "var(--font-thai)" }}>
            <input type="checkbox" checked={seekingInvestment} onChange={(e) => setSeekingInvestment(e.target.checked)} style={{ width: 15, height: 15, accentColor: "#D4A017" }} />
            กำลังหานักลงทุน
          </label>
          <span className="mono badge-invest" style={{ marginLeft: "auto", padding: "4px 12px", borderRadius: 999, fontSize: 12 }}>{filtered.length} results</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-3)" }}>
          <div className="mono" style={{ fontSize: 32, marginBottom: 12 }}>// not found</div>
          <p className="mono" style={{ fontSize: 13 }}>ไม่พบธุรกิจที่ตรงกับเงื่อนไข</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map((b) => <BusinessCard key={b.id} business={b} />)}
        </div>
      )}
    </div>
  )
}
