"use client"

import { useState } from "react"
import { WorkplaceReview, calculateTier } from "@/types"
import { TierBadge } from "@/components/ui/TierBadge"
import { THAI_PROVINCES, CATEGORY_GROUPS } from "@/data/categoryTaxonomy"

const FIELDS: { key: keyof WorkplaceReview; label: string; desc: string }[] = [
  { key: "hasHalalFood", label: "อาหาร Halal ใน canteen", desc: "อาหารทุกรายการได้รับการรับรองฮาลาล" },
  { key: "hasFridayFlexibility", label: "ยืดหยุ่นละหมาดวันศุกร์", desc: "ออกละหมาดได้โดยไม่ต้องใช้วันลา" },
  { key: "hasPrayerRoom", label: "มีห้องละหมาด (มุศอลลา)", desc: "พื้นที่สำหรับละหมาดในหรือใกล้ที่ทำงาน" },
  { key: "noImmodestDressCode", label: "ไม่บังคับแต่งกายขัดอิสลาม", desc: "ไม่มีนโยบายบังคับแต่งกายขัดหลักการ เช่น ห้ามสวมฮิญาบ" },
  { key: "noAlcoholEvents", label: "ไม่มีแอลกอฮอล์ในกิจกรรม", desc: "งานเลี้ยงและกิจกรรมบริษัทปลอดแอลกอฮอล์" },
]

type Step = "info" | "review" | "result"

export default function ReviewPage() {
  const [step, setStep] = useState<Step>("info")
  const [businessName, setBusinessName] = useState("")
  const [province, setProvince] = useState("")
  const [industry, setIndustry] = useState("")
  const [description, setDescription] = useState("")
  const [seekingInvestment, setSeekingInvestment] = useState(false)
  const [neededCategories, setNeededCategories] = useState<string[]>([])
  const [review, setReview] = useState<WorkplaceReview>({
    hasHalalFood: false, hasFridayFlexibility: false,
    hasPrayerRoom: false, noImmodestDressCode: false, noAlcoholEvents: false,
  })

  const tier = calculateTier(review)
  const score = Object.values(review).filter(Boolean).length
  const stepIdx = ["info", "review", "result"].indexOf(step)

  const toggleCat = (id: string) =>
    setNeededCategories((p) => p.includes(id) ? p.filter((c) => c !== id) : [...p, id])

  const inputStyle: React.CSSProperties = { padding: "10px 14px", fontSize: 14, fontFamily: "var(--font-thai)", borderRadius: 10 }

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>تسجيل الأعمال</span>
          <span style={{ width: 32, height: 1, background: "var(--border)" }} />
          <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>REGISTER BUSINESS</span>
        </div>
        <h1 style={{ fontWeight: 800, fontSize: 36, color: "var(--text-1)", margin: 0, fontFamily: "var(--font-thai)" }}>ลงทะเบียน<span style={{ color: "#D4A017" }}>ฟรี</span></h1>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
        {["ข้อมูลธุรกิจ", "Halal Review", "ผลลัพธ์"].map((label, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="mono" style={{
              width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, flexShrink: 0,
              background: i < stepIdx ? "rgba(212,160,23,0.15)" : i === stepIdx ? "#D4A017" : "var(--bg-elevated)",
              color: i < stepIdx ? "#D4A017" : i === stepIdx ? "#0F0F0F" : "var(--text-3)",
              border: i < stepIdx ? "1px solid rgba(212,160,23,0.3)" : "1px solid var(--border)",
            }}>
              {i < stepIdx ? "✓" : i + 1}
            </div>
            <span className="mono" style={{ fontSize: 11, color: i === stepIdx ? "var(--gold)" : "var(--text-3)" }}>{label}</span>
            {i < 2 && <span style={{ width: 24, height: 1, background: "var(--border)" }} />}
          </div>
        ))}
      </div>

      {/* ── Step 1: Info ─────────────────────────────────────── */}
      {step === "info" && (
        <div className="win-card">
          <div className="win-header">
            <span className="win-dot-red" /><span className="win-dot-yellow" /><span className="win-dot-green" />
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 8 }}>business-info.form</span>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>BUSINESS NAME *</div>
                <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="เช่น บริษัท อัล-บารอกะห์ ฟู้ด จำกัด" className="hh-input" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>PROVINCE *</div>
                  <select value={province} onChange={(e) => setProvince(e.target.value)} className="hh-input" style={inputStyle}>
                    <option value="">เลือกจังหวัด</option>
                    {THAI_PROVINCES.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>INDUSTRY *</div>
                  <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="เช่น อาหารแปรรูป" className="hh-input" style={inputStyle} />
                </div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.06em" }}>DESCRIPTION</div>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="อธิบายธุรกิจของคุณ..." className="hh-input" style={{ ...inputStyle, resize: "none" }} />
              </div>

              {/* Sourcing needs */}
              <div>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginBottom: 10, letterSpacing: "0.06em" }}>SOURCING NEEDS — สำหรับ Auto-Matching</div>
                <div style={{ maxHeight: 240, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
                  {CATEGORY_GROUPS.map((g) => (
                    <div key={g.id}>
                      <div className="mono" style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.1em", marginBottom: 6 }}>{g.label.toUpperCase()}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                        {g.categories.map((cat) => {
                          const sel = neededCategories.includes(cat.id)
                          return (
                            <button key={cat.id} type="button" onClick={() => toggleCat(cat.id)}
                              className="mono"
                              style={{
                                padding: "3px 10px", borderRadius: 6, fontSize: 11, cursor: "pointer", transition: "all 150ms",
                                background: sel ? "#D4A017" : "var(--bg-elevated)",
                                color: sel ? "#0F0F0F" : "var(--text-2)",
                                border: sel ? "1px solid #D4A017" : "1px solid var(--border)",
                                fontWeight: sel ? 600 : 400,
                              }}>
                              {cat.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <input type="checkbox" checked={seekingInvestment} onChange={(e) => setSeekingInvestment(e.target.checked)} style={{ width: 16, height: 16, accentColor: "#D4A017" }} />
                <span style={{ fontSize: 14, color: "var(--text-2)", fontFamily: "var(--font-thai)" }}>กำลังมองหานักลงทุน Halal</span>
              </label>
            </div>

            <button onClick={() => setStep("review")} disabled={!businessName || !province || !industry} className="btn-gold" style={{ width: "100%", marginTop: 24, fontSize: 14, justifyContent: "center" }}>
              ถัดไป: Halal Review →
            </button>
          </div>
        </div>
      )}

      {/* ── Step 2: Review ───────────────────────────────────── */}
      {step === "review" && (
        <div className="win-card">
          <div className="win-header">
            <span className="win-dot-red" /><span className="win-dot-yellow" /><span className="win-dot-green" />
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 8 }}>halal-review.criteria</span>
          </div>
          <div style={{ padding: 24 }}>
            {/* Live score */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, padding: 16, borderRadius: 12, background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 48, color: "#D4A017", lineHeight: 1 }}>
                {score}<span style={{ fontSize: 20, color: "var(--text-3)" }}>/5</span>
              </div>
              <div>
                {tier ? <TierBadge tier={tier} /> : <span className="mono" style={{ fontSize: 12, color: "var(--text-3)" }}>// ต้องการ 3/5 เพื่อรับ Badge</span>}
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 6 }}>// อัปเดต real-time</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {FIELDS.map((f) => (
                <label key={f.key}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 16px", borderRadius: 10, cursor: "pointer", transition: "all 150ms",
                    border: review[f.key] ? "1px solid rgba(212,160,23,0.3)" : "1px solid var(--border)",
                    background: review[f.key] ? "rgba(212,160,23,0.04)" : "var(--bg-elevated)",
                  }}>
                  <input type="checkbox" checked={review[f.key]}
                    onChange={(e) => setReview((p) => ({ ...p, [f.key]: e.target.checked }))}
                    style={{ width: 18, height: 18, marginTop: 2, accentColor: "#D4A017", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-1)", fontFamily: "var(--font-thai)" }}>{f.label}</div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 3 }}>// {f.desc}</div>
                  </div>
                </label>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button onClick={() => setStep("info")} className="btn-ghost" style={{ flex: 1, justifyContent: "center", fontSize: 14 }}>← ย้อนกลับ</button>
              <button onClick={() => setStep("result")} className="btn-gold" style={{ flex: 1, justifyContent: "center", fontSize: 14 }}>ส่งข้อมูล →</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 3: Result ───────────────────────────────────── */}
      {step === "result" && (
        <div className="win-card" style={{ textAlign: "center" }}>
          <div className="win-header" style={{ justifyContent: "center" }}>
            <span className="win-dot-red" /><span className="win-dot-yellow" /><span className="win-dot-green" />
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 8 }}>result.output</span>
          </div>
          <div style={{ padding: 32 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>
              {tier === "gold" ? "🥇" : tier === "silver" ? "🥈" : tier === "bronze" ? "🥉" : "📋"}
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 28, color: "var(--text-1)", margin: "0 0 16px", fontFamily: "var(--font-thai)" }}>
              {tier ? "ยินดีด้วย!" : "ขอบคุณที่ลงทะเบียน"}
            </h2>
            {tier ? (
              <>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}><TierBadge tier={tier} /></div>
                <p style={{ color: "var(--text-2)", fontFamily: "var(--font-thai)", marginBottom: 4 }}>
                  <strong style={{ color: "var(--text-1)" }}>{businessName}</strong> ได้รับ Halal Workplace Badge
                </p>
                <p className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 24 }}>// score: {score}/5 · {province}</p>
              </>
            ) : (
              <p style={{ color: "var(--text-2)", fontFamily: "var(--font-thai)", marginBottom: 24 }}>
                ได้รับ {score}/5 เงื่อนไข — ต้องการ 3 ขึ้นไปเพื่อรับ Badge
              </p>
            )}

            {seekingInvestment && tier && (
              <div className="badge-invest" style={{ padding: "12px 16px", borderRadius: 10, marginBottom: 12, textAlign: "left" }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4, fontFamily: "var(--font-thai)" }}>Seeking Investment badge เปิดแล้ว</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>// โปรไฟล์จะปรากฏใน Deal Flow ของนักลงทุน</div>
              </div>
            )}
            {neededCategories.length > 0 && (
              <div className="badge-green" style={{ padding: "12px 16px", borderRadius: 10, marginBottom: 24, textAlign: "left" }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4, fontFamily: "var(--font-thai)" }}>Auto-Matching พร้อม</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>// {neededCategories.length} หมวดที่ลงทะเบียนไว้</div>
              </div>
            )}

            <a href="/businesses" className="btn-gold" style={{ display: "flex", justifyContent: "center", textDecoration: "none", fontSize: 14 }}>
              ดูโปรไฟล์ธุรกิจทั้งหมด →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
