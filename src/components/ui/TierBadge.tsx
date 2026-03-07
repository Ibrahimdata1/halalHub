import { HalalTier } from "@/types"

const TIER_CONFIG = {
  gold: {
    label: "Gold",
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-300",
    icon: "🥇",
  },
  silver: {
    label: "Silver",
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-300",
    icon: "🥈",
  },
  bronze: {
    label: "Bronze",
    bg: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-300",
    icon: "🥉",
  },
}

export function TierBadge({ tier }: { tier: HalalTier }) {
  const config = TIER_CONFIG[tier]
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border}`}
    >
      {config.icon} Halal Workplace {config.label}
    </span>
  )
}
