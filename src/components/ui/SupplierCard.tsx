import Link from "next/link"
import { Supplier } from "@/types"
import { ALL_CATEGORIES } from "@/data/categoryTaxonomy"

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  const cats = supplier.categoryIds
    .map((id) => ALL_CATEGORIES.find((c) => c.id === id)?.label)
    .filter(Boolean)
    .slice(0, 3)

  return (
    <div className="win-card">
      {/* Window header */}
      <div className="win-header">
        <span className="win-dot-red" />
        <span className="win-dot-yellow" />
        <span className="win-dot-green" />
        {supplier.verified && (
          <span className="mono badge-green" style={{ marginLeft: 8, padding: "2px 8px", borderRadius: 5, fontSize: 10, fontWeight: 700 }}>
            ✓ Verified
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-1)" }}>{supplier.nameTh}</div>
          <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{supplier.name}</div>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {supplier.description}
        </p>

        {/* Category tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
          {cats.map((label) => (
            <span key={label} className="mono" style={{ fontSize: 10, padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "var(--text-2)" }}>
              {label}
            </span>
          ))}
          {supplier.categoryIds.length > 3 && (
            <span className="mono" style={{ fontSize: 10, padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "var(--text-3)" }}>
              +{supplier.categoryIds.length - 3}
            </span>
          )}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>
            {supplier.province} · MOQ {supplier.moqMin}
          </span>
          <Link href={`/suppliers/${supplier.id}`} className="mono" style={{ fontSize: 11, color: "var(--gold)", textDecoration: "none" }}>
            ดูโปรไฟล์ →
          </Link>
        </div>
      </div>
    </div>
  )
}
