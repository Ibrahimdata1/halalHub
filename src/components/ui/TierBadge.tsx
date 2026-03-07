import { HalalTier } from "@/types"

const TIER_CONFIG = {
  gold: { label: "Halal Gold", className: "hh-badge-gold" },
  silver: { label: "Halal Silver", className: "hh-badge-silver" },
  bronze: { label: "Halal Bronze", className: "hh-badge-bronze" },
}

export function TierBadge({ tier }: { tier: HalalTier }) {
  const config = TIER_CONFIG[tier]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide ${config.className}`}>
      <span>✦</span>
      {config.label}
    </span>
  )
}
