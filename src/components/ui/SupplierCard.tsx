import Link from "next/link"
import { Supplier } from "@/types"
import { ALL_CATEGORIES } from "@/data/categoryTaxonomy"

/* Category → color */
const CAT_COLORS: Record<string, string> = {
  "meat-poultry":    "var(--em-400)",
  "frozen-food":     "var(--sky)",
  "eco-packaging":   "var(--em-300)",
  "plastic-packaging": "var(--blue)",
  "labels-printing": "var(--purple)",
  "spices-herbs":    "var(--orange)",
  "fresh-produce":   "var(--em-400)",
}
const DEFAULT_CAT_COLOR = "var(--text-2)"

/* Bar class based on first category */
const CAT_BAR: Record<string, string> = {
  "meat-poultry":    "card-bar-em",
  "frozen-food":     "card-bar-blue",
  "eco-packaging":   "card-bar-em",
  "plastic-packaging": "card-bar-blue",
  "labels-printing": "card-bar-purple",
  "spices-herbs":    "card-bar-orange",
  "fresh-produce":   "card-bar-em",
}

function initials(name: string) {
  const words = name.trim().split(/\s+/)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  const cats = supplier.categoryIds
    .map((id) => ({
      id,
      label: ALL_CATEGORIES.find((c) => c.id === id)?.label ?? id,
      color: CAT_COLORS[id] ?? DEFAULT_CAT_COLOR,
    }))
    .slice(0, 3)

  const barClass = CAT_BAR[supplier.categoryIds[0]] ?? "card-bar-gold"
  const primaryColor = CAT_COLORS[supplier.categoryIds[0]] ?? "var(--gold-400)"

  return (
    <div className="card">
      {/* Accent bar */}
      <div className={`card-bar ${barClass}`} />

      <div style={{ padding: "18px 20px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Logo */}
            <div style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${primaryColor}22, ${primaryColor}0A)`,
              border: `1px solid ${primaryColor}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              color: primaryColor,
              flexShrink: 0,
              letterSpacing: "-0.03em",
            }}>
              {initials(supplier.name)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-1)", lineHeight: 1.3 }}>
                {supplier.nameTh}
              </div>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 2 }}>
                {supplier.name}
              </div>
            </div>
          </div>

          {supplier.verified && (
            <span className="badge badge-green mono" style={{ fontSize: 10, flexShrink: 0 }}>
              ✓ Verified
            </span>
          )}
        </div>

        {/* Description */}
        <p style={{
          fontSize: 12,
          color: "var(--text-2)",
          lineHeight: 1.65,
          marginBottom: 14,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          fontFamily: "var(--font-thai)",
        }}>
          {supplier.description}
        </p>

        {/* Category tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
          {cats.map(({ label, color, id }) => (
            <span key={id} className="mono" style={{
              fontSize: 10,
              padding: "3px 9px",
              borderRadius: 6,
              background: `${color}0F`,
              border: `1px solid ${color}22`,
              color,
            }}>
              {label}
            </span>
          ))}
          {supplier.categoryIds.length > 3 && (
            <span className="mono" style={{
              fontSize: 10,
              padding: "3px 9px",
              borderRadius: 6,
              background: "var(--bg-3)",
              border: "1px solid var(--border)",
              color: "var(--text-3)",
            }}>
              +{supplier.categoryIds.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>
              📍 {supplier.province}
            </span>
            <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>
              MOQ {supplier.moqMin} {supplier.moqUnit}
            </span>
          </div>
          <Link href={`/suppliers/${supplier.id}`} className="mono" style={{
            fontSize: 11,
            color: "var(--gold-400)",
            textDecoration: "none",
          }}>
            ดูโปรไฟล์ →
          </Link>
        </div>
      </div>
    </div>
  )
}
