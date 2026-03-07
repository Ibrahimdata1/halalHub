import Link from "next/link"
import { Business } from "@/types"
import { TierBadge } from "./TierBadge"

export function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="hh-card p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-snug truncate" style={{ color: "var(--hh-text-primary)" }}>
            {business.nameTh}
          </h3>
          <p className="text-xs mt-0.5 truncate" style={{ color: "var(--hh-text-muted)" }}>
            {business.name}
          </p>
        </div>
        {business.tier && <TierBadge tier={business.tier} />}
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--hh-text-secondary)" }}>
        {business.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--hh-text-muted)" }}>
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{business.province}</span>
        <span>·</span>
        <span>{business.industry}</span>
      </div>

      {/* Divider */}
      <hr className="hh-divider" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        {business.seekingInvestment && (
          <span className="hh-badge-investment inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium">
            <span className="hh-pulse-dot" />
            กำลังหานักลงทุน
          </span>
        )}
        <Link
          href={`/businesses/${business.id}`}
          className="ml-auto text-xs font-medium transition-colors"
          style={{ color: "var(--hh-gold-300)" }}
        >
          ดูโปรไฟล์ →
        </Link>
      </div>
    </div>
  )
}
