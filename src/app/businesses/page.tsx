"use client"

import { useState } from "react"
import { MOCK_BUSINESSES } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { HalalTier } from "@/types"

const REGIONS = ["ทุกภาค", "ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคตะวันออกเฉียงเหนือ", "ภาคใต้"]
const TIERS: { label: string; value: HalalTier | "all" }[] = [
  { label: "ทุก Tier", value: "all" },
  { label: "Gold", value: "gold" },
  { label: "Silver", value: "silver" },
  { label: "Bronze", value: "bronze" },
]

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

  const inputStyle = { padding: "10px 14px", fontSize: 13, fontFamily: "inherit" }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="hh-eyebrow mb-3 w-fit">B2B Directory</div>
        <h1 className="text-3xl font-bold" style={{ color: "var(--hh-text-primary)" }}>ธุรกิจ Halal</h1>
        <p className="text-sm mt-1" style={{ color: "var(--hh-text-secondary)" }}>
          ธุรกิจที่ผ่านการ review Halal Workplace
        </p>
      </div>

      {/* Filter bar */}
      <div
        className="rounded-xl p-5 mb-8 flex flex-wrap gap-4 items-end"
        style={{
          backgroundColor: "var(--hh-bg-surface)",
          border: "1px solid var(--hh-border-subtle)",
          borderLeft: "3px solid var(--hh-gold-400)",
        }}
      >
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--hh-text-muted)" }}>ค้นหา</label>
          <input
            type="text"
            placeholder="ชื่อธุรกิจ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="hh-input w-44"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--hh-text-muted)" }}>ภาค</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="hh-input" style={{ ...inputStyle, width: 160 }}>
            {REGIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--hh-text-muted)" }}>Tier</label>
          <select value={tier} onChange={(e) => setTier(e.target.value as HalalTier | "all")} className="hh-input" style={{ ...inputStyle, width: 130 }}>
            {TIERS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "var(--hh-text-secondary)" }}>
          <input
            type="checkbox"
            checked={seekingInvestment}
            onChange={(e) => setSeekingInvestment(e.target.checked)}
            className="w-4 h-4"
            style={{ accentColor: "var(--hh-gold-400)" }}
          />
          กำลังหานักลงทุน
        </label>
        <span
          className="ml-auto text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.2)", color: "var(--hh-gold-300)" }}
        >
          {filtered.length} รายการ
        </span>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: "var(--hh-text-muted)" }}>
          <p className="text-4xl mb-3">🔍</p>
          <p>ไม่พบธุรกิจที่ตรงกับเงื่อนไข</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((b) => <BusinessCard key={b.id} business={b} />)}
        </div>
      )}
    </div>
  )
}
