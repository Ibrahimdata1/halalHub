import { Supplier, MatchResult } from "@/types"

type MatchCriteria = {
  neededCategoryIds: string[]
  province?: string
  region?: string
  targetVolumeMin?: number
}

export function matchSuppliers(
  suppliers: Supplier[],
  criteria: MatchCriteria
): MatchResult[] {
  const results: MatchResult[] = []

  for (const supplier of suppliers) {
    const matchedCategories = supplier.categoryIds.filter((id) =>
      criteria.neededCategoryIds.includes(id)
    )

    if (matchedCategories.length === 0) continue

    const regionMatch =
      !criteria.region || supplier.region === criteria.region
    const provinceMatch =
      !criteria.province || supplier.province === criteria.province

    if (!regionMatch && !provinceMatch) continue

    const categoryScore = matchedCategories.length / criteria.neededCategoryIds.length
    const locationScore = provinceMatch ? 1 : regionMatch ? 0.5 : 0
    const verifiedBonus = supplier.verified ? 0.2 : 0

    const score = Math.min(1, categoryScore * 0.6 + locationScore * 0.3 + verifiedBonus)

    results.push({ supplier, score, matchedCategories })
  }

  return results.sort((a, b) => b.score - a.score)
}
