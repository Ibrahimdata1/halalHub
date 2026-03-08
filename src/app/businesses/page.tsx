"use client"

import { useState } from "react"
import { MOCK_BUSINESSES } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { HalalTier } from "@/types"

const REGIONS = ["ทุกภาค", "ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคตะวันออกเฉียงเหนือ", "ภาคใต้"]
const TIERS: { label: string; value: HalalTier | "all" }[] = [
  { label: "ทุก Tier",   value: "all"    },
  { label: "✦ Gold",    value: "gold"   },
  { label: "✦ Silver",  value: "silver" },
  { label: "✦ Bronze",  value: "bronze" },
]

const INPUT_STYLE: React.CSSProperties = {
  padding: "8px 14px",
  fontSize: 13,
  fontFamily: "inherit",
  borderRadius: 10,
  appearance: "none" as const,
  WebkitAppearance: "none",
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

      {/* Page header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span className="arabic" style={{ fontSize: 12, color: "var(--text-3)" }}>الأعمال الحلال</span>
          <span style={{ width: 28, height: 1, background: "var(--border-gold)" }} />
          <span className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.07em" }}>HALAL BUSINESSES</span>
        </div>
        <h1 style={{
          fontWeight: 800,
          fontSize: 44,
          color: "var(--text-1)",
          margin: "0 0 10px",
          fontFamily: "var(--font-thai)",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
        }}>
          ธุรกิจ<span className="text-gold">ฮาลาล</span>
        </h1>
        <p style={{ color: "var(--text-2)", fontFamily: "var(--font-thai)", fontSize: 14, margin: 0 }}>
          ธุรกิจที่ผ่านการ review Halal Workplace — เกณฑ์สาธารณะ โปร่งใส
        </p>
      </div>

      {/* Filter bar */}
      <div className="filter-panel" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>SEARCH</div>
            <input
              type="text"
              placeholder="ชื่อธุรกิจ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="hh-input"
              style={{ ...INPUT_STYLE, width: 200 }}
            />
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>REGION</div>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="hh-input"
              style={{ ...INPUT_STYLE, width: 180, cursor: "pointer" }}
            >
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>TIER</div>
            <select
              value={tier}
              onChange={(e) => setTier(e.target.value as HalalTier | "all")}
              className="hh-input"
              style={{ ...INPUT_STYLE, width: 140, cursor: "pointer" }}
            >
              {TIERS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <label style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            fontSize: 13,
            color: "var(--text-2)",
            fontFamily: "var(--font-thai)",
            padding: "8px 14px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: seekingInvestment ? "var(--gold-glow)" : "transparent",
            borderColor: seekingInvestment ? "var(--border-gold)" : "var(--border)",
            transition: "all 200ms",
          }}>
            <input
              type="checkbox"
              checked={seekingInvestment}
              onChange={(e) => setSeekingInvestment(e.target.checked)}
              style={{ width: 14, height: 14, accentColor: "var(--gold-400)", cursor: "pointer" }}
            />
            กำลังหานักลงทุน
          </label>

          <span className="badge badge-invest mono" style={{ marginLeft: "auto", fontSize: 12, padding: "5px 14px" }}>
            {filtered.length} results
          </span>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "100px 0", color: "var(--text-3)" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <div className="mono" style={{ fontSize: 22, marginBottom: 8 }}>// not found</div>
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
