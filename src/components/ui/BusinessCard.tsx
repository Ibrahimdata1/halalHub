import Link from "next/link"
import { Business } from "@/types"

const TIER_CLASS: Record<string, string> = {
  gold: "badge-gold-tier",
  silver: "badge-silver-tier",
  bronze: "badge-bronze-tier",
}

export function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="win-card" style={{ cursor: "default" }}>
      {/* Window header */}
      <div className="win-header">
        <span className="win-dot-red" />
        <span className="win-dot-yellow" />
        <span className="win-dot-green" />
        {business.tier && (
          <span className={`mono ${TIER_CLASS[business.tier]}`}
            style={{ marginLeft: 8, padding: "2px 8px", borderRadius: 5, fontSize: 10, fontWeight: 700 }}>
            ✦ Halal {business.tier.charAt(0).toUpperCase() + business.tier.slice(1)}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-1)" }}>{business.nameTh}</div>
          <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{business.name}</div>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {business.description}
        </p>

        <div className="mono" style={{ display: "flex", gap: 6, fontSize: 11, color: "var(--text-3)", marginBottom: 12, alignItems: "center" }}>
          <span>📍</span><span>{business.province}</span>
          <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
          <span>{business.industry}</span>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {business.seekingInvestment ? (
            <span className="mono badge-invest" style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 999, fontSize: 11 }}>
              <span className="pulse-dot" /> กำลังหานักลงทุน
            </span>
          ) : <span />}
          <Link href={`/businesses/${business.id}`} className="mono" style={{ fontSize: 11, color: "var(--gold)", textDecoration: "none" }}>
            ดูโปรไฟล์ →
          </Link>
        </div>
      </div>
    </div>
  )
}
