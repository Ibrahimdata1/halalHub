"use client"

import { useState } from "react"
import { MOCK_SUPPLIERS } from "@/lib/mockData"
import { CATEGORY_GROUPS } from "@/data/categoryTaxonomy"
import { SupplierCard } from "@/components/ui/SupplierCard"

const REGIONS = ["ทุกภาค", "ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคตะวันออกเฉียงเหนือ", "ภาคใต้"]
const S = { input: { padding: "9px 14px", fontSize: 13, fontFamily: "inherit", borderRadius: 10 } as React.CSSProperties }

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

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>الموردون الحلال</span>
          <span style={{ width: 32, height: 1, background: "var(--border)" }} />
          <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>HALAL SUPPLIERS</span>
        </div>
        <h1 style={{ fontWeight: 800, fontSize: 40, color: "var(--text-1)", margin: 0, fontFamily: "var(--font-thai)", letterSpacing: "-0.02em" }}>ซัพพลายเออร์<span style={{ color: "#D4A017" }}>ฮาลาล</span></h1>
        <p style={{ marginTop: 8, color: "var(--text-2)", fontFamily: "var(--font-thai)", fontSize: 14 }}>B2B directory ที่ค้นหาได้ — Auto-Matching เปิดเมื่อมี 30+ suppliers</p>
      </div>

      {/* Filter bar */}
      <div className="win-card" style={{ borderRadius: 12, marginBottom: 32, borderLeft: "3px solid #4ADE80" }}>
        <div style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>SEARCH</div>
            <input type="text" placeholder="ชื่อซัพพลายเออร์..." value={search} onChange={(e) => setSearch(e.target.value)} className="hh-input" style={{ ...S.input, width: 180 }} />
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>CATEGORY</div>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="hh-input" style={{ ...S.input, width: 180 }}>
              <option value="all">ทุกหมวด</option>
              {CATEGORY_GROUPS.map((g) => (
                <optgroup key={g.id} label={g.label}>
                  {g.categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>REGION</div>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="hh-input" style={{ ...S.input, width: 160 }}>
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, color: "var(--text-2)", fontFamily: "var(--font-thai)" }}>
            <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} style={{ width: 15, height: 15, accentColor: "#4ADE80" }} />
            Verified เท่านั้น
          </label>
          <span className="mono badge-green" style={{ marginLeft: "auto", padding: "4px 12px", borderRadius: 999, fontSize: 12 }}>{filtered.length} results</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-3)" }}>
          <div className="mono" style={{ fontSize: 32, marginBottom: 12 }}>// not found</div>
          <p className="mono" style={{ fontSize: 13 }}>ไม่พบซัพพลายเออร์ที่ตรงกับเงื่อนไข</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map((s) => <SupplierCard key={s.id} supplier={s} />)}
        </div>
      )}

      {/* Auto-matching coming soon */}
      <div className="win-card" style={{ marginTop: 48, textAlign: "center" }}>
        <div className="win-header" style={{ justifyContent: "center" }}>
          <span className="win-dot-red" /><span className="win-dot-yellow" /><span className="win-dot-green" />
          <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 8 }}>auto-matching.service.ts</span>
        </div>
        <div style={{ padding: "32px 24px" }}>
          <div className="mono" style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 8 }}>// coming soon — เปิดเมื่อมี 30+ suppliers</div>
          <h3 style={{ fontWeight: 700, fontSize: 20, color: "var(--text-1)", margin: "0 0 8px", fontFamily: "var(--font-thai)" }}>Auto-Matching Engine</h3>
          <p style={{ color: "var(--text-2)", fontFamily: "var(--font-thai)", fontSize: 14 }}>
            กรอก sourcing needs ในโปรไฟล์ไว้เพื่อรับการแจ้งเตือน email ก่อนใคร
          </p>
        </div>
      </div>
    </div>
  )
}
