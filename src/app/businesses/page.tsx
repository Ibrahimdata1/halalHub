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

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">ธุรกิจ Halal</h1>
      <p className="text-gray-500 mb-8">ธุรกิจที่ผ่านการ review Halal Workplace</p>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8 flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">ค้นหา</label>
          <input
            type="text"
            placeholder="ชื่อธุรกิจ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
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
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Tier</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value as HalalTier | "all")}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {TIERS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={seekingInvestment}
            onChange={(e) => setSeekingInvestment(e.target.checked)}
            className="w-4 h-4 accent-emerald-600"
          />
          กำลังหานักลงทุน
        </label>
        <span className="ml-auto text-sm text-gray-400">{filtered.length} รายการ</span>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">ไม่พบธุรกิจที่ตรงกับเงื่อนไข</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((b) => (
            <BusinessCard key={b.id} business={b} />
          ))}
        </div>
      )}
    </div>
  )
}
