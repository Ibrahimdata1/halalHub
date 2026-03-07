import Link from "next/link"
import { Supplier } from "@/types"
import { ALL_CATEGORIES } from "@/data/categoryTaxonomy"

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  const categoryLabels = supplier.categoryIds
    .map((id) => ALL_CATEGORIES.find((c) => c.id === id)?.label)
    .filter(Boolean)
    .slice(0, 3)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{supplier.nameTh}</h3>
          <p className="text-sm text-gray-500">{supplier.name}</p>
        </div>
        {supplier.verified && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 rounded-full">
            ✓ Verified
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{supplier.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {categoryLabels.map((label) => (
          <span key={label} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
            {label}
          </span>
        ))}
        {supplier.categoryIds.length > 3 && (
          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md">
            +{supplier.categoryIds.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{supplier.province} • MOQ {supplier.moqMin} {supplier.moqUnit}</span>
        <Link
          href={`/suppliers/${supplier.id}`}
          className="font-medium text-emerald-600 hover:text-emerald-700"
        >
          ดูโปรไฟล์ →
        </Link>
      </div>
    </div>
  )
}
