export type HalalTier = "bronze" | "silver" | "gold"

export type WorkplaceReview = {
  hasPrayerRoom: boolean
  hasHalalFood: boolean
  hasFridayFlexibility: boolean
  noAlcoholEvents: boolean
  noImmodestDressCode: boolean
}

export function calculateTier(review: WorkplaceReview): HalalTier | null {
  const score = Object.values(review).filter(Boolean).length
  if (score >= 5) return "gold"
  if (score >= 4) return "silver"
  if (score >= 3) return "bronze"
  return null
}

export type Business = {
  id: string
  name: string
  nameTh: string
  description: string
  province: string
  region: string
  industry: string
  website?: string
  logoUrl?: string
  review: WorkplaceReview
  tier: HalalTier | null
  halalCert?: string
  seekingInvestment: boolean
  investmentType?: "musharakah" | "mudharabah" | "other"
  investmentAmount?: string
  createdAt: string
}

export type Supplier = {
  id: string
  name: string
  nameTh: string
  description: string
  province: string
  region: string
  categoryIds: string[]
  moqMin: string
  moqUnit: string
  certificationBody?: string
  halalCertNumber?: string
  website?: string
  logoUrl?: string
  contactEmail?: string
  contactPhone?: string
  verified: boolean
  createdAt: string
}

export type MatchResult = {
  supplier: Supplier
  score: number
  matchedCategories: string[]
}
