import { notFound } from "next/navigation"
import Link from "next/link"
import { MOCK_SUPPLIERS } from "@/lib/mockData"
import { ALL_CATEGORIES, CATEGORY_GROUPS } from "@/data/categoryTaxonomy"

export default function SupplierDetailPage({ params }: { params: { id: string } }) {
  const supplier = MOCK_SUPPLIERS.find((s) => s.id === params.id)
  if (!supplier) notFound()

  const groupedCategories = CATEGORY_GROUPS.filter((g) =>
    g.categories.some((c) => supplier.categoryIds.includes(c.id))
  )

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/suppliers" className="inline-flex items-center gap-1 text-sm mb-6 transition-colors" style={{ color: "var(--hh-gold-300)" }}>
        ← กลับไปรายการซัพพลายเออร์
      </Link>

      <div className="hh-card p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--hh-text-primary)" }}>{supplier.nameTh}</h1>
            <p className="text-sm mt-0.5" style={{ color: "var(--hh-text-muted)" }}>{supplier.name}</p>
            <p className="text-sm mt-1" style={{ color: "var(--hh-text-muted)" }}>{supplier.province}</p>
          </div>
          {supplier.verified && (
            <span className="hh-badge-halal inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm font-bold tracking-wide">
              ✓ Verified
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--hh-text-secondary)" }}>{supplier.description}</p>

        <hr className="hh-divider mb-8" />

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4" style={{ color: "var(--hh-text-primary)" }}>หมวดหมู่สินค้า</h2>
          <div className="space-y-4">
            {groupedCategories.map((group) => {
              const matched = group.categories.filter((c) => supplier.categoryIds.includes(c.id))
              return (
                <div key={group.id}>
                  <p className="text-[11px] font-medium uppercase tracking-wider mb-2" style={{ color: "var(--hh-text-muted)" }}>{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {matched.map((c) => (
                      <span
                        key={c.id}
                        className="px-2.5 py-1 text-xs rounded-lg"
                        style={{ backgroundColor: "rgba(212,160,23,0.08)", color: "var(--hh-gold-300)", border: "1px solid rgba(212,160,23,0.2)" }}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* MOQ & Cert */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: "var(--hh-bg-surface-2)", border: "1px solid var(--hh-border-subtle)" }}
          >
            <p className="text-xs mb-1" style={{ color: "var(--hh-text-muted)" }}>MOQ ขั้นต่ำ</p>
            <p className="font-semibold text-sm" style={{ color: "var(--hh-text-primary)" }}>{supplier.moqMin} {supplier.moqUnit}</p>
          </div>
          {supplier.certificationBody && (
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: "var(--hh-halal-bg)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <p className="text-xs mb-1" style={{ color: "var(--hh-text-muted)" }}>Halal Certification</p>
              <p className="font-semibold text-sm" style={{ color: "var(--hh-halal-text)" }}>{supplier.certificationBody}</p>
              {supplier.halalCertNumber && <p className="text-xs mt-0.5" style={{ color: "var(--hh-text-muted)" }}>{supplier.halalCertNumber}</p>}
            </div>
          )}
        </div>

        <button className="hh-btn-primary w-full py-3 text-sm">ติดต่อซัพพลายเออร์</button>
      </div>
    </div>
  )
}
