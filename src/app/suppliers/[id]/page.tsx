import { notFound } from "next/navigation"
import Link from "next/link"
import { MOCK_SUPPLIERS } from "@/lib/mockData"
import { ALL_CATEGORIES, CATEGORY_GROUPS } from "@/data/categoryTaxonomy"

export default function SupplierDetailPage({ params }: { params: { id: string } }) {
  const supplier = MOCK_SUPPLIERS.find((s) => s.id === params.id)
  if (!supplier) notFound()

  const categories = supplier.categoryIds.map((id) => ALL_CATEGORIES.find((c) => c.id === id)).filter(Boolean)

  const groupedCategories = CATEGORY_GROUPS.filter((g) =>
    g.categories.some((c) => supplier.categoryIds.includes(c.id))
  )

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/suppliers" className="text-sm text-emerald-600 hover:text-emerald-700 mb-6 inline-flex items-center gap-1">
        ← กลับไปรายการซัพพลายเออร์
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{supplier.nameTh}</h1>
            <p className="text-gray-500">{supplier.name}</p>
            <p className="text-sm text-gray-500 mt-1">{supplier.province}</p>
          </div>
          {supplier.verified && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-200 rounded-full">
              ✓ Verified Supplier
            </span>
          )}
        </div>

        <p className="text-gray-700 mb-8">{supplier.description}</p>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">หมวดหมู่สินค้า</h2>
          <div className="space-y-3">
            {groupedCategories.map((group) => {
              const matched = group.categories.filter((c) => supplier.categoryIds.includes(c.id))
              return (
                <div key={group.id}>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {matched.map((c) => (
                      <span key={c.id} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-lg border border-emerald-100">
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
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-400 mb-1">MOQ ขั้นต่ำ</p>
            <p className="font-semibold text-gray-800">{supplier.moqMin} {supplier.moqUnit}</p>
          </div>
          {supplier.certificationBody && (
            <div className="p-4 bg-emerald-50 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Halal Certification</p>
              <p className="font-semibold text-emerald-800">{supplier.certificationBody}</p>
              {supplier.halalCertNumber && <p className="text-xs text-emerald-600 mt-0.5">{supplier.halalCertNumber}</p>}
            </div>
          )}
        </div>

        {/* Contact */}
        <button className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors">
          ติดต่อซัพพลายเออร์
        </button>
      </div>
    </div>
  )
}
