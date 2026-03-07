"use client"

import { useState } from "react"
import { MOCK_SUPPLIERS } from "@/lib/mockData"
import { CATEGORY_GROUPS } from "@/data/categoryTaxonomy"
import { SupplierCard } from "@/components/ui/SupplierCard"

const REGIONS = ["ทุกภาค", "ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคตะวันออกเฉียงเหนือ", "ภาคใต้"]

export default function SuppliersPage() {
  const [region, setRegion] = useState("ทุกภาค")
  const [categoryId, setCategoryId] = useState("all")
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [search, setSearch] = useState("")

  const filtered = MOCK_SUPPLIERS.filter((s) => {
    if (region !== "ทุกภาค" && s.region !== region) return false
    if (categoryId !== "all" && !s.categoryIds.includes(categoryId)) return false
    if (verifiedOnly && !s.verified) return false
    if (search && !s.nameTh.includes(search) && !s.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const inputStyle = { padding: "10px 14px", fontSize: 13, fontFamily: "inherit" }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="hh-eyebrow mb-3 w-fit">Halal B2B Supplier Directory</div>
        <h1 className="text-3xl font-bold" style={{ color: "var(--hh-text-primary)" }}>ซัพพลายเออร์ Halal</h1>
        <p className="text-sm mt-1" style={{ color: "var(--hh-text-secondary)" }}>
          B2B directory ที่ค้นหาได้ พร้อม Auto-Matching เร็วๆ นี้
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
            placeholder="ชื่อซัพพลายเออร์..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="hh-input w-44"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--hh-text-muted)" }}>หมวดหมู่</label>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="hh-input" style={{ ...inputStyle, width: 180 }}>
            <option value="all">ทุกหมวด</option>
            {CATEGORY_GROUPS.map((group) => (
              <optgroup key={group.id} label={group.label}>
                {group.categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--hh-text-muted)" }}>ภาค</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="hh-input" style={{ ...inputStyle, width: 160 }}>
            {REGIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "var(--hh-text-secondary)" }}>
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => setVerifiedOnly(e.target.checked)}
            className="w-4 h-4"
            style={{ accentColor: "var(--hh-gold-400)" }}
          />
          Verified เท่านั้น
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
          <p>ไม่พบซัพพลายเออร์ที่ตรงกับเงื่อนไข</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s) => <SupplierCard key={s.id} supplier={s} />)}
        </div>
      )}

      {/* Auto-matching coming soon */}
      <div
        className="mt-12 rounded-xl p-6 text-center"
        style={{ backgroundColor: "var(--hh-bg-surface)", border: "1px solid rgba(212,160,23,0.15)" }}
      >
        <div className="hh-eyebrow mb-3 mx-auto w-fit">เร็วๆ นี้</div>
        <h3 className="font-semibold mb-2" style={{ color: "var(--hh-text-primary)" }}>Auto-Matching</h3>
        <p className="text-sm" style={{ color: "var(--hh-text-secondary)" }}>
          เมื่อมีซัพพลายเออร์ครบ 30 ราย ระบบจะ match และแจ้งเตือนอัตโนมัติ
          <br />กรอก sourcing needs ในโปรไฟล์ไว้เพื่อรับการแจ้งเตือนก่อนใคร
        </p>
      </div>
    </div>
  )
}
