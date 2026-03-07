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

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">ซัพพลายเออร์ Halal</h1>
      <p className="text-gray-500 mb-8">B2B directory ซัพพลายเออร์ฮาลาลที่ค้นหาได้</p>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8 flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">ค้นหา</label>
          <input
            type="text"
            placeholder="ชื่อซัพพลายเออร์..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">หมวดหมู่</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
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
          <label className="block text-xs font-medium text-gray-500 mb-1">ภาค</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {REGIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => setVerifiedOnly(e.target.checked)}
            className="w-4 h-4 accent-emerald-600"
          />
          Verified เท่านั้น
        </label>
        <span className="ml-auto text-sm text-gray-400">{filtered.length} รายการ</span>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">ไม่พบซัพพลายเออร์ที่ตรงกับเงื่อนไข</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s) => (
            <SupplierCard key={s.id} supplier={s} />
          ))}
        </div>
      )}

      {/* Coming soon banner */}
      <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
        <h3 className="font-semibold text-emerald-800 mb-1">Auto-Matching — เร็วๆ นี้</h3>
        <p className="text-sm text-emerald-600">
          เมื่อมีซัพพลายเออร์ครบ 30 ราย ระบบจะ match และแจ้งเตือนอัตโนมัติ กรอก sourcing needs ในโปรไฟล์ไว้เลย
        </p>
      </div>
    </div>
  )
}
