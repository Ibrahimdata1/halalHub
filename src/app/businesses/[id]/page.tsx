import { notFound } from "next/navigation"
import Link from "next/link"
import { MOCK_BUSINESSES } from "@/lib/mockData"
import { TierBadge } from "@/components/ui/TierBadge"

const REVIEW_LABELS = {
  hasPrayerRoom: "มีห้องละหมาด",
  hasHalalFood: "อาหาร Halal ใน canteen",
  hasFridayFlexibility: "ยืดหยุ่นวันศุกร์",
  noAlcoholEvents: "ไม่มีแอลกอฮอล์ในกิจกรรมบริษัท",
  noImmodestDressCode: "ไม่บังคับแต่งกายขัดหลักอิสลาม",
}

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  const business = MOCK_BUSINESSES.find((b) => b.id === params.id)
  if (!business) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/businesses" className="inline-flex items-center gap-1 text-sm mb-6 transition-colors" style={{ color: "var(--hh-gold-300)" }}>
        ← กลับไปรายการธุรกิจ
      </Link>

      <div className="hh-card p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--hh-text-primary)" }}>{business.nameTh}</h1>
            <p className="text-sm mt-0.5" style={{ color: "var(--hh-text-muted)" }}>{business.name}</p>
            <p className="text-sm mt-1" style={{ color: "var(--hh-text-muted)" }}>{business.province} · {business.industry}</p>
          </div>
          {business.tier && <TierBadge tier={business.tier} />}
        </div>

        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--hh-text-secondary)" }}>{business.description}</p>

        <hr className="hh-divider mb-8" />

        {/* Halal Review */}
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4" style={{ color: "var(--hh-text-primary)" }}>Halal Workplace Review</h2>
          <div className="space-y-3">
            {Object.entries(REVIEW_LABELS).map(([key, label]) => {
              const passed = business.review[key as keyof typeof business.review]
              return (
                <div key={key} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      backgroundColor: passed ? "var(--hh-halal-bg)" : "var(--hh-bg-surface-2)",
                      color: passed ? "var(--hh-halal-text)" : "var(--hh-text-muted)",
                      border: passed ? "1px solid rgba(34,197,94,0.2)" : "1px solid var(--hh-border-subtle)",
                    }}
                  >
                    {passed ? "✓" : "✗"}
                  </span>
                  <span className="text-sm" style={{ color: passed ? "var(--hh-text-primary)" : "var(--hh-text-muted)" }}>{label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Halal cert */}
        {business.halalCert && (
          <div
            className="p-4 rounded-lg mb-8 text-sm font-medium"
            style={{ backgroundColor: "var(--hh-halal-bg)", border: "1px solid rgba(34,197,94,0.2)", color: "var(--hh-halal-text)" }}
          >
            Halal Certification: {business.halalCert}
          </div>
        )}

        {/* Investment */}
        {business.seekingInvestment && (
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: "rgba(212,160,23,0.05)", border: "1px solid rgba(212,160,23,0.2)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="hh-pulse-dot" />
              <h2 className="text-sm font-semibold" style={{ color: "var(--hh-gold-300)" }}>กำลังหานักลงทุน</h2>
            </div>
            <div className="space-y-1.5 text-sm mb-4" style={{ color: "var(--hh-text-secondary)" }}>
              {business.investmentAmount && (
                <p>จำนวนที่ต้องการ: <span className="font-medium" style={{ color: "var(--hh-text-primary)" }}>{business.investmentAmount}</span></p>
              )}
              {business.investmentType && (
                <p>รูปแบบ: <span className="font-medium" style={{ color: "var(--hh-text-primary)" }}>
                  {business.investmentType === "musharakah" ? "มุชาระเกาะห์ (Musharakah)" : business.investmentType === "mudharabah" ? "มุฎอเราะบะฮ์ (Mudharabah)" : "อื่นๆ"}
                </span></p>
              )}
            </div>
            <button className="hh-btn-primary px-5 py-2 text-sm">ส่ง Interest Request</button>
          </div>
        )}
      </div>
    </div>
  )
}
