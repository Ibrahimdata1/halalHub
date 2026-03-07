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
      <Link href="/businesses" className="text-sm text-emerald-600 hover:text-emerald-700 mb-6 inline-flex items-center gap-1">
        ← กลับไปรายการธุรกิจ
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{business.nameTh}</h1>
            <p className="text-gray-500">{business.name}</p>
            <p className="text-sm text-gray-500 mt-1">{business.province} · {business.industry}</p>
          </div>
          {business.tier && <TierBadge tier={business.tier} />}
        </div>

        <p className="text-gray-700 mb-8">{business.description}</p>

        {/* Halal Review */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Halal Workplace Review</h2>
          <div className="space-y-3">
            {Object.entries(REVIEW_LABELS).map(([key, label]) => {
              const passed = business.review[key as keyof typeof business.review]
              return (
                <div key={key} className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${passed ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"}`}>
                    {passed ? "✓" : "✗"}
                  </span>
                  <span className={`text-sm ${passed ? "text-gray-800" : "text-gray-400"}`}>{label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Halal Cert */}
        {business.halalCert && (
          <div className="mb-8 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <p className="text-sm font-medium text-emerald-800">Halal Certification: {business.halalCert}</p>
          </div>
        )}

        {/* Investment */}
        {business.seekingInvestment && (
          <div className="p-5 bg-green-50 rounded-xl border border-green-200">
            <h2 className="text-base font-semibold text-green-800 mb-2">กำลังหานักลงทุน</h2>
            <div className="space-y-1 text-sm text-green-700">
              {business.investmentAmount && <p>จำนวนที่ต้องการ: <span className="font-medium">{business.investmentAmount}</span></p>}
              {business.investmentType && (
                <p>รูปแบบ: <span className="font-medium">{business.investmentType === "musharakah" ? "มุชาระเกาะห์ (Musharakah)" : business.investmentType === "mudharabah" ? "มุฎอเราะบะฮ์ (Mudharabah)" : "อื่นๆ"}</span></p>
              )}
            </div>
            <button className="mt-3 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              ส่ง Interest Request
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
