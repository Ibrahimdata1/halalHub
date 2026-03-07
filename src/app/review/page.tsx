"use client"

import { useState } from "react"
import { WorkplaceReview, calculateTier } from "@/types"
import { TierBadge } from "@/components/ui/TierBadge"
import { THAI_PROVINCES, CATEGORY_GROUPS } from "@/data/categoryTaxonomy"

const REVIEW_FIELDS: { key: keyof WorkplaceReview; label: string; description: string }[] = [
  { key: "hasHalalFood", label: "อาหาร Halal ใน canteen / โรงอาหาร", description: "อาหารและเครื่องดื่มทุกรายการในที่ทำงานได้รับการรับรองฮาลาล" },
  { key: "hasFridayFlexibility", label: "ยืดหยุ่นสำหรับละหมาดวันศุกร์", description: "พนักงานมุสลิมสามารถออกไปละหมาดวันศุกร์ได้โดยไม่ต้องใช้วันลา" },
  { key: "hasPrayerRoom", label: "มีห้องละหมาด (มุศอลลา)", description: "มีพื้นที่สำหรับละหมาดภายในหรือใกล้ที่ทำงาน" },
  { key: "noImmodestDressCode", label: "ไม่บังคับแต่งกายขัดหลักอิสลาม", description: "ไม่มีนโยบายบังคับแต่งกายที่ขัดกับหลักอิสลาม เช่น ไม่อนุญาตให้สวมฮิญาบ" },
  { key: "noAlcoholEvents", label: "ไม่มีแอลกอฮอล์ในกิจกรรมบริษัท", description: "งานเลี้ยง กิจกรรม team building และกิจกรรมอื่นๆ ของบริษัทไม่มีแอลกอฮอล์" },
]

type Step = "info" | "review" | "result"

const STEPS = [
  { key: "info", label: "ข้อมูลธุรกิจ" },
  { key: "review", label: "Halal Review" },
  { key: "result", label: "ผลลัพธ์" },
] as const

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

  const toggleCategory = (id: string) =>
    setNeededCategories((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id])

  const inputCls = "hh-input block"
  const inputStyle = { padding: "10px 14px", fontSize: 14, fontFamily: "inherit" }
  const labelStyle = { color: "var(--hh-text-muted)", fontSize: 12, fontWeight: 500, marginBottom: 6, display: "block" }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Page title */}
      <div className="mb-8">
        <div className="hh-eyebrow mb-3 w-fit">ฟรี — ไม่มีค่าใช้จ่าย</div>
        <h1 className="text-3xl font-bold" style={{ color: "var(--hh-text-primary)" }}>ลงทะเบียนธุรกิจ</h1>
      </div>

      {/* Progress steps */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => {
          const stepIndex = STEPS.findIndex((x) => x.key === step)
          const done = i < stepIndex
          const active = s.key === step
          return (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  backgroundColor: active ? "var(--hh-gold-400)" : done ? "rgba(212,160,23,0.15)" : "var(--hh-bg-surface-2)",
                  color: active ? "#0D0F0E" : done ? "var(--hh-gold-300)" : "var(--hh-text-muted)",
                  border: done ? "1px solid var(--hh-gold-600)" : "1px solid var(--hh-border-default)",
                }}
              >
                {done ? "✓" : i + 1}
              </div>
              <span className="text-xs font-medium" style={{ color: active ? "var(--hh-gold-300)" : "var(--hh-text-muted)" }}>
                {s.label}
              </span>
              {i < 2 && <div className="w-8 h-px" style={{ backgroundColor: "var(--hh-border-subtle)" }} />}
            </div>
          )
        })}
      </div>

      {/* Step 1: Info */}
      {step === "info" && (
        <div className="hh-card p-8">
          <div className="space-y-5">
            <div>
              <label style={labelStyle}>ชื่อธุรกิจ (ภาษาไทย) *</label>
              <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="เช่น บริษัท อัล-บารอกะห์ ฟู้ด จำกัด" className={inputCls} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>จังหวัด *</label>
              <select value={province} onChange={(e) => setProvince(e.target.value)} className={inputCls} style={inputStyle}>
                <option value="">เลือกจังหวัด</option>
                {THAI_PROVINCES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>ประเภทธุรกิจ *</label>
              <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="เช่น อาหารและเครื่องดื่ม, นำเข้า-ส่งออก" className={inputCls} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>รายละเอียดธุรกิจ</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="อธิบายธุรกิจของคุณสั้นๆ..." className={inputCls} style={{ ...inputStyle, resize: "none" }} />
            </div>

            {/* Category picker */}
            <div style={{ borderTop: "1px solid var(--hh-border-subtle)", paddingTop: 20 }}>
              <label style={{ ...labelStyle, marginBottom: 12 }}>ต้องการซัพพลายเออร์ประเภทใด? (สำหรับ Auto-Matching)</label>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {CATEGORY_GROUPS.map((group) => (
                  <div key={group.id}>
                    <p className="text-[11px] font-medium uppercase tracking-wider mb-2" style={{ color: "var(--hh-text-muted)" }}>{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.categories.map((cat) => {
                        const selected = neededCategories.includes(cat.id)
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => toggleCategory(cat.id)}
                            className="px-2.5 py-1 text-xs rounded-lg transition-all"
                            style={{
                              backgroundColor: selected ? "var(--hh-gold-400)" : "var(--hh-bg-surface-2)",
                              color: selected ? "#0D0F0E" : "var(--hh-text-secondary)",
                              border: selected ? "1px solid var(--hh-gold-400)" : "1px solid var(--hh-border-subtle)",
                              fontWeight: selected ? 600 : 400,
                            }}
                          >
                            {cat.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seeking investment */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={seekingInvestment}
                onChange={(e) => setSeekingInvestment(e.target.checked)}
                className="w-4 h-4"
                style={{ accentColor: "var(--hh-gold-400)" }}
              />
              <span className="text-sm" style={{ color: "var(--hh-text-secondary)" }}>กำลังมองหานักลงทุน Halal</span>
            </label>
          </div>

          <button
            onClick={() => setStep("review")}
            disabled={!businessName || !province || !industry}
            className="hh-btn-primary mt-8 w-full py-3 text-sm"
          >
            ถัดไป: Halal Review →
          </button>
        </div>
      )}

      {/* Step 2: Review */}
      {step === "review" && (
        <div className="hh-card p-8">
          {/* Live score */}
          <div
            className="flex items-center gap-4 mb-8 p-4 rounded-xl"
            style={{ backgroundColor: "var(--hh-bg-surface-2)", border: "1px solid var(--hh-border-default)" }}
          >
            <div className="text-4xl font-extrabold" style={{ color: "var(--hh-gold-300)", fontFamily: "var(--font-playfair)" }}>
              {score}<span className="text-xl" style={{ color: "var(--hh-text-muted)" }}>/5</span>
            </div>
            <div>
              {tier ? (
                <TierBadge tier={tier} />
              ) : (
                <span className="text-sm" style={{ color: "var(--hh-text-muted)" }}>ต้องการ 3/5 ขึ้นไปเพื่อรับ Badge</span>
              )}
              <p className="text-xs mt-1" style={{ color: "var(--hh-text-muted)" }}>อัปเดตแบบ real-time</p>
            </div>
          </div>

          <div className="space-y-3">
            {REVIEW_FIELDS.map((field) => (
              <label
                key={field.key}
                className="flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all"
                style={{
                  border: `1px solid ${review[field.key] ? "rgba(212,160,23,0.3)" : "var(--hh-border-default)"}`,
                  backgroundColor: review[field.key] ? "rgba(212,160,23,0.04)" : "var(--hh-bg-surface-2)",
                }}
              >
                <input
                  type="checkbox"
                  checked={review[field.key]}
                  onChange={(e) => setReview((prev) => ({ ...prev, [field.key]: e.target.checked }))}
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ accentColor: "var(--hh-gold-400)" }}
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--hh-text-primary)" }}>{field.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--hh-text-muted)" }}>{field.description}</p>
                </div>
              </label>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button onClick={() => setStep("info")} className="hh-btn-secondary flex-1 py-3 text-sm">
              ← ย้อนกลับ
            </button>
            <button onClick={() => setStep("result")} className="hh-btn-primary flex-1 py-3 text-sm">
              ส่งข้อมูล →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Result */}
      {step === "result" && (
        <div className="hh-card p-8 text-center">
          <div className="text-5xl mb-5">{tier === "gold" ? "🥇" : tier === "silver" ? "🥈" : tier === "bronze" ? "🥉" : "📋"}</div>

          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--hh-text-primary)" }}>
            {tier ? "ยินดีด้วย! คุณได้รับ Badge" : "ขอบคุณที่ลงทะเบียน"}
          </h2>

          {tier ? (
            <>
              <div className="flex justify-center mb-4"><TierBadge tier={tier} /></div>
              <p className="text-sm mb-1" style={{ color: "var(--hh-text-secondary)" }}>
                <span className="font-semibold" style={{ color: "var(--hh-text-primary)" }}>{businessName}</span>{" "}
                ได้รับ Halal Workplace Badge
              </p>
              <p className="text-xs mb-8" style={{ color: "var(--hh-text-muted)" }}>
                คะแนน {score}/5 เงื่อนไข · {province}
              </p>
            </>
          ) : (
            <p className="text-sm mb-8" style={{ color: "var(--hh-text-secondary)" }}>
              ธุรกิจของคุณได้รับ {score}/5 เงื่อนไข — ต้องการ 3 ขึ้นไปเพื่อรับ Badge
            </p>
          )}

          {seekingInvestment && tier && (
            <div
              className="rounded-lg p-4 mb-4 text-sm text-left"
              style={{ backgroundColor: "rgba(212,160,23,0.06)", border: "1px solid rgba(212,160,23,0.2)" }}
            >
              <p className="font-medium mb-1" style={{ color: "var(--hh-gold-300)" }}>Seeking Investment badge เปิดใช้งานแล้ว</p>
              <p style={{ color: "var(--hh-text-secondary)" }}>โปรไฟล์ของคุณจะปรากฏในหน้า Deal Flow สำหรับนักลงทุน</p>
            </div>
          )}

          {neededCategories.length > 0 && (
            <div
              className="rounded-lg p-4 mb-6 text-sm text-left"
              style={{ backgroundColor: "var(--hh-halal-bg)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <p className="font-medium mb-1" style={{ color: "var(--hh-halal-text)" }}>Auto-Matching พร้อมแล้ว</p>
              <p style={{ color: "var(--hh-text-secondary)" }}>
                เราจะแจ้งเตือนเมื่อพบซัพพลายเออร์ที่ตรงกับความต้องการ ({neededCategories.length} หมวด)
              </p>
            </div>
          )}

          <a href="/businesses" className="hh-btn-primary block w-full py-3 text-sm">
            ดูโปรไฟล์ธุรกิจทั้งหมด
          </a>
        </div>
      )}
    </div>
  )
}
