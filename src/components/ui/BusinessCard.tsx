import Link from "next/link"
import { Business } from "@/types"

/* Industry → color bar + icon */
const INDUSTRY_META: Record<string, { barClass: string; icon: string; color: string }> = {
  "อาหารและเครื่องดื่ม": { barClass: "card-bar-em",     icon: "🥩", color: "var(--em-400)"    },
  "ร้านอาหาร":           { barClass: "card-bar-orange",  icon: "🍽️", color: "var(--orange)"    },
  "นำเข้า-ส่งออก":       { barClass: "card-bar-blue",    icon: "📦", color: "var(--blue)"      },
  "ความงาม":             { barClass: "card-bar-purple",  icon: "💄", color: "var(--purple)"    },
  "การเงิน":             { barClass: "card-bar-gold",    icon: "🏦", color: "var(--gold-400)"  },
  "ก่อสร้าง":            { barClass: "card-bar-amber",   icon: "🏗️", color: "var(--amber)"    },
  "การศึกษา":            { barClass: "card-bar-blue",    icon: "📚", color: "var(--sky)"       },
}
const DEFAULT_META = { barClass: "card-bar-gold", icon: "🏢", color: "var(--gold-400)" }

const TIER_CLASS: Record<string, string> = {
  gold:   "badge-gold-tier",
  silver: "badge-silver-tier",
  bronze: "badge-bronze-tier",
}

/* Two-letter initials from name */
function initials(name: string) {
  const words = name.trim().split(/\s+/)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

export function BusinessCard({ business }: { business: Business }) {
  const meta = INDUSTRY_META[business.industry] ?? DEFAULT_META

  return (
    <div className="card" style={{ cursor: "default" }}>
      {/* Accent bar */}
      <div className={`card-bar ${meta.barClass}`} />

      <div style={{ padding: "18px 20px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Logo */}
            <div style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${meta.color}22, ${meta.color}0A)`,
              border: `1px solid ${meta.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              color: meta.color,
              flexShrink: 0,
              letterSpacing: "-0.03em",
            }}>
              {initials(business.name)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-1)", lineHeight: 1.3 }}>
                {business.nameTh}
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>
                {business.name}
              </div>
            </div>
          </div>
          {business.tier && (
            <span className={`badge ${TIER_CLASS[business.tier]} mono`} style={{ fontSize: 10, flexShrink: 0 }}>
              ✦ {business.tier.charAt(0).toUpperCase() + business.tier.slice(1)}
            </span>
          )}
        </div>

        {/* Description */}
        <p style={{
          fontSize: 14,
          color: "var(--text-2)",
          lineHeight: 1.65,
          marginBottom: 14,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          fontFamily: "var(--font-thai)",
        }}>
          {business.description}
        </p>

        {/* Meta tags */}
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            color: "var(--text-3)",
            fontFamily: "var(--font-mono-var)",
            padding: "2px 8px",
            borderRadius: 6,
            background: "var(--bg-3)",
            border: "1px solid var(--border)",
          }}>
            📍 {business.province}
          </span>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontSize: 11,
            color: meta.color,
            fontFamily: "var(--font-mono-var)",
            padding: "2px 8px",
            borderRadius: 6,
            background: `${meta.color}0F`,
            border: `1px solid ${meta.color}20`,
          }}>
            {meta.icon} {business.industry}
          </span>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {business.seekingInvestment ? (
            <span className="badge badge-invest mono" style={{ fontSize: 11, display: "inline-flex", alignItems: "center", gap: 5 }}>
              <span className="pulse-dot" />
              หานักลงทุน
            </span>
          ) : <span />}
          <Link href={`/businesses/${business.id}`} className="mono" style={{
            fontSize: 11,
            color: "var(--gold-400)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 3,
            transition: "gap 150ms",
          }}>
            ดูโปรไฟล์ →
          </Link>
        </div>
      </div>
    </div>
  )
}
