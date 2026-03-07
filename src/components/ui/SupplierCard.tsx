import Link from "next/link"
import { Supplier } from "@/types"
import { ALL_CATEGORIES } from "@/data/categoryTaxonomy"

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  const categoryLabels = supplier.categoryIds
    .map((id) => ALL_CATEGORIES.find((c) => c.id === id)?.label)
    .filter(Boolean)
    .slice(0, 3)

  return (
    <div className="hh-card p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-snug truncate" style={{ color: "var(--hh-text-primary)" }}>
            {supplier.nameTh}
          </h3>
          <p className="text-xs mt-0.5 truncate" style={{ color: "var(--hh-text-muted)" }}>
            {supplier.name}
          </p>
        </div>
        {supplier.verified && (
          <span className="hh-badge-halal inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">
            ✓ Verified
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--hh-text-secondary)" }}>
        {supplier.description}
      </p>

      {/* Category chips */}
      <div className="flex flex-wrap gap-1.5">
        {categoryLabels.map((label) => (
          <span
            key={label}
            className="px-2 py-0.5 text-[11px] rounded-md"
            style={{ backgroundColor: "var(--hh-bg-surface-2)", color: "var(--hh-text-secondary)", border: "1px solid var(--hh-border-subtle)" }}
          >
            {label}
          </span>
        ))}
        {supplier.categoryIds.length > 3 && (
          <span
            className="px-2 py-0.5 text-[11px] rounded-md"
            style={{ backgroundColor: "var(--hh-bg-surface-2)", color: "var(--hh-text-muted)", border: "1px solid var(--hh-border-subtle)" }}
          >
            +{supplier.categoryIds.length - 3}
          </span>
        )}
      </div>

      {/* Divider */}
      <hr className="hh-divider" />

      {/* Footer */}
      <div className="flex items-center justify-between text-xs" style={{ color: "var(--hh-text-muted)" }}>
        <span>{supplier.province} · MOQ {supplier.moqMin} {supplier.moqUnit}</span>
        <Link
          href={`/suppliers/${supplier.id}`}
          className="font-medium transition-colors"
          style={{ color: "var(--hh-gold-300)" }}
        >
          ดูโปรไฟล์ →
        </Link>
      </div>
    </div>
  )
}
