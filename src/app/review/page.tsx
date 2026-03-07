"use client"

import { useState } from "react"
import { WorkplaceReview, calculateTier } from "@/types"
import { TierBadge } from "@/components/ui/TierBadge"
import { THAI_PROVINCES, CATEGORY_GROUPS } from "@/data/categoryTaxonomy"

const REVIEW_FIELDS: { key: keyof WorkplaceReview; label: string; description: string }[] = [
  {
    key: "hasHalalFood",
    label: "อาหาร Halal ใน canteen / โรงอาหาร",
    description: "อาหารและเครื่องดื่มทุกรายการในที่ทำงานได้รับการรับรองฮาลาล",
  },
  {
    key: "hasFridayFlexibility",
    label: "ยืดหยุ่นสำหรับละหมาดวันศุกร์",
    description: "พนักงานมุสลิมสามารถออกไปละหมาดวันศุกร์ได้โดยไม่ต้องใช้วันลา",
  },
  {
    key: "hasPrayerRoom",
    label: "มีห้องละหมาด (มุศอลลา)",
    description: "มีพื้นที่สำหรับละหมาดภายในหรือใกล้ที่ทำงาน",
  },
  {
    key: "noImmodestDressCode",
    label: "ไม่บังคับแต่งกายขัดหลักอิสลาม",
    description: "ไม่มีนโยบายบังคับแต่งกายที่ขัดกับหลักอิสลาม เช่น ไม่อนุญาตให้สวมฮิญาบ",
  },
  {
    key: "noAlcoholEvents",
    label: "ไม่มีแอลกอฮอล์ในกิจกรรมบริษัท",
    description: "งานเลี้ยง กิจกรรม team building และกิจกรรมอื่นๆ ของบริษัทไม่มีแอลกอฮอล์",
  },
]

type Step = "info" | "review" | "result"

export default function ReviewPage() {
  const [step, setStep] = useState<Step>("info")
  const [businessName, setBusinessName] = useState("")
  const [province, setProvince] = useState("")
  const [industry, setIndustry] = useState("")
  const [description, setDescription] = useState("")
  const [review, setReview] = useState<WorkplaceReview>({
    hasHalalFood: false,
    hasFridayFlexibility: false,
    hasPrayerRoom: false,
    noImmodestDressCode: false,
    noAlcoholEvents: false,
  })
  const [seekingInvestment, setSeekingInvestment] = useState(false)
  const [neededCategories, setNeededCategories] = useState<string[]>([])

  const tier = calculateTier(review)
  const score = Object.values(review).filter(Boolean).length

  const toggleCategory = (id: string) => {
    setNeededCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {(["info", "review", "result"] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step === s ? "bg-emerald-600 text-white" : i < ["info","review","result"].indexOf(step) ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
              {i + 1}
            </div>
            <span className={`text-sm ${step === s ? "font-medium text-emerald-700" : "text-gray-400"}`}>
              {s === "info" ? "ข้อมูลธุรกิจ" : s === "review" ? "Halal Review" : "ผลลัพธ์"}
            </span>
            {i < 2 && <div className="w-8 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      {/* Step 1: Business Info */}
      {step === "info" && (
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-2xl font-bold mb-2">ลงทะเบียนธุรกิจ</h1>
          <p className="text-gray-500 mb-8 text-sm">ฟรี — ได้รับ Halal Workplace Badge ทันทีหลังผ่านเกณฑ์</p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อธุรกิจ (ภาษาไทย) *</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="เช่น บริษัท อัล-บารอกะห์ ฟู้ด จำกัด"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">จังหวัด *</label>
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">เลือกจังหวัด</option>
                {THAI_PROVINCES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ประเภทธุรกิจ *</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="เช่น อาหารและเครื่องดื่ม, นำเข้า-ส่งออก, ร้านอาหาร"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียดธุรกิจ</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="อธิบายธุรกิจของคุณสั้นๆ..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
            </div>

            <div className="border-t border-gray-100 pt-5">
              <p className="text-sm font-medium text-gray-700 mb-3">ต้องการซัพพลายเออร์ประเภทใด? (สำหรับ Auto-Matching)</p>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {CATEGORY_GROUPS.map((group) => (
                  <div key={group.id}>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1.5">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                            neededCategories.includes(cat.id)
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={seekingInvestment}
                onChange={(e) => setSeekingInvestment(e.target.checked)}
                className="w-4 h-4 accent-emerald-600"
              />
              <span className="text-sm text-gray-700">กำลังมองหานักลงทุน Halal</span>
            </label>
          </div>

          <button
            onClick={() => setStep("review")}
            disabled={!businessName || !province || !industry}
            className="mt-8 w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ถัดไป: Halal Review →
          </button>
        </div>
      )}

      {/* Step 2: Halal Review */}
      {step === "review" && (
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-2">Halal Workplace Review</h2>
          <p className="text-gray-500 mb-2 text-sm">ทำเครื่องหมายเงื่อนไขที่ธุรกิจของคุณมี</p>

          {/* Live score */}
          <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-emerald-700">{score}/5</div>
            <div>
              {tier ? (
                <TierBadge tier={tier} />
              ) : (
                <span className="text-sm text-gray-400">ต้องการ 3/5 ขึ้นไปเพื่อรับ Badge</span>
              )}
              <p className="text-xs text-gray-400 mt-1">อัปเดตแบบ real-time</p>
            </div>
          </div>

          <div className="space-y-4">
            {REVIEW_FIELDS.map((field) => (
              <label key={field.key} className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                <input
                  type="checkbox"
                  checked={review[field.key]}
                  onChange={(e) =>
                    setReview((prev) => ({ ...prev, [field.key]: e.target.checked }))
                  }
                  className="w-5 h-5 accent-emerald-600 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{field.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{field.description}</p>
                </div>
              </label>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setStep("info")}
              className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← ย้อนกลับ
            </button>
            <button
              onClick={() => setStep("result")}
              className="flex-1 bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              ส่งข้อมูล →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Result */}
      {step === "result" && (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">
            {tier === "gold" ? "🥇" : tier === "silver" ? "🥈" : tier === "bronze" ? "🥉" : "📋"}
          </div>
          <h2 className="text-2xl font-bold mb-3">
            {tier ? "ยินดีด้วย! คุณได้รับ Badge" : "ขอบคุณที่ลงทะเบียน"}
          </h2>
          {tier ? (
            <>
              <div className="flex justify-center mb-4">
                <TierBadge tier={tier} />
              </div>
              <p className="text-gray-500 text-sm mb-2">
                <span className="font-medium text-gray-800">{businessName}</span> ได้รับ Halal Workplace Badge ระดับ{" "}
                {tier === "gold" ? "Gold" : tier === "silver" ? "Silver" : "Bronze"}
              </p>
              <p className="text-gray-400 text-xs mb-8">
                คะแนน {score}/5 เงื่อนไข · {province}
              </p>
            </>
          ) : (
            <p className="text-gray-500 text-sm mb-8">
              ธุรกิจของคุณได้รับ {score}/5 เงื่อนไข — ต้องการ 3 ขึ้นไปเพื่อรับ Badge
              ปรับปรุงสภาพแวดล้อมและกลับมา review ใหม่ได้เลย
            </p>
          )}

          {seekingInvestment && tier && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-sm text-green-700 text-left">
              <p className="font-medium mb-1">Seeking Investment badge เปิดใช้งานแล้ว</p>
              <p>โปรไฟล์ของคุณจะปรากฏในหน้า Deal Flow สำหรับนักลงทุน</p>
            </div>
          )}

          {neededCategories.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-700 text-left">
              <p className="font-medium mb-1">Auto-Matching พร้อมแล้ว</p>
              <p>เราจะแจ้งเตือนเมื่อพบซัพพลายเออร์ที่ตรงกับความต้องการของคุณ ({neededCategories.length} หมวด)</p>
            </div>
          )}

          <a
            href={`/businesses`}
            className="block w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            ดูโปรไฟล์ธุรกิจทั้งหมด
          </a>
        </div>
      )}
    </div>
  )
}
