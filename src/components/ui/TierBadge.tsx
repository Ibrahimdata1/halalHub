import { HalalTier } from "@/types"

const TIER: Record<HalalTier, { label: string; className: string }> = {
  gold:   { label: "Halal Gold",   className: "badge-gold-tier" },
  silver: { label: "Halal Silver", className: "badge-silver-tier" },
  bronze: { label: "Halal Bronze", className: "badge-bronze-tier" },
}

export function TierBadge({ tier }: { tier: HalalTier }) {
  const t = TIER[tier]
  return (
    <span className={`mono ${t.className}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}>
      ✦ {t.label}
    </span>
  )
}
