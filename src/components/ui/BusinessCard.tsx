import Link from "next/link"
import { Business } from "@/types"
import { TierBadge } from "./TierBadge"

export function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{business.nameTh}</h3>
          <p className="text-sm text-gray-500">{business.name}</p>
        </div>
        {business.tier && <TierBadge tier={business.tier} />}
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{business.description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {business.province}
        </span>
        <span>•</span>
        <span>{business.industry}</span>
      </div>

      <div className="flex items-center justify-between">
        {business.seekingInvestment && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
            กำลังหานักลงทุน
          </span>
        )}
        <Link
          href={`/businesses/${business.id}`}
          className="ml-auto text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          ดูโปรไฟล์ →
        </Link>
      </div>
    </div>
  )
}
