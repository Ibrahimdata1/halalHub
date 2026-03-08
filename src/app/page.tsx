"use client"

import { useState } from "react"
import Link from "next/link"
import { MOCK_BUSINESSES, MOCK_SUPPLIERS } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { SupplierCard } from "@/components/ui/SupplierCard"

/* ── Data ───────────────────────────────────────────────────────── */
const STATS = [
  { label: "ธุรกิจฮาลาล",    value: "12,847", sub: "ที่ได้รับการรับรอง", color: "var(--em-400)",    icon: "🏢" },
  { label: "นักลงทุน",       value: "3,291",  sub: "Shariah-compliant",   color: "var(--purple)",    icon: "💼" },
  { label: "มูลค่าตลาด",     value: "฿2.4B",  sub: "ไหลเวียนในระบบ",      color: "var(--gold-400)", icon: "📈" },
  { label: "ซัพพลายเออร์",   value: "5,120",  sub: "ซัพพลายเออร์รับรอง",   color: "var(--blue)",      icon: "🏭" },
]

const CATEGORIES = [
  { icon: "🥩", label: "อาหาร & เครื่องดื่ม", count: "4.2K",  color: "#34D399", bg: "rgba(52,211,153,0.08)",  industry: "อาหารและเครื่องดื่ม" },
  { icon: "💄", label: "ความงาม & สุขภาพ",    count: "1.8K",  color: "#A78BFA", bg: "rgba(167,139,250,0.08)", industry: "ความงาม" },
  { icon: "🏦", label: "การเงิน Halal",        count: "892",   color: "#E8B84B", bg: "rgba(232,184,75,0.08)",  industry: "การเงิน" },
  { icon: "🏭", label: "ซัพพลายเออร์",         count: "5.1K",  color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  industry: "นำเข้า-ส่งออก" },
  { icon: "📚", label: "การศึกษา & คอร์ส",    count: "342",   color: "#38BDF8", bg: "rgba(56,189,248,0.08)",  industry: "การศึกษา" },
  { icon: "🏗️", label: "ก่อสร้าง & อสังหา",  count: "1.2K",  color: "#FB923C", bg: "rgba(251,146,60,0.08)",  industry: "ก่อสร้าง" },
]

const SPARKLINE = [28, 42, 36, 55, 48, 68, 60, 88]

/* ── Component ──────────────────────────────────────────────────── */
export default function HomePage() {
  const [selectedCat, setSelectedCat] = useState<string | null>(null)

  const filteredBusinesses = selectedCat
    ? MOCK_BUSINESSES.filter((b) => b.industry === selectedCat)
    : MOCK_BUSINESSES

  return (
    <div>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 96px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>

          {/* LEFT ─────────────────────────────────────────────── */}
          <div>
            {/* Bismillah tag */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, padding: "6px 14px", borderRadius: 999, border: "1px solid var(--border-gold)", background: "var(--gold-glow)" }}>
              <span className="arabic" style={{ fontSize: 14, color: "var(--gold-400)" }}>بِسْمِ اللهِ</span>
              <span style={{ width: 1, height: 12, background: "var(--border-gold)" }} />
              <span className="mono" style={{ fontSize: 11, color: "var(--text-2)", letterSpacing: "0.08em" }}>HALAL MARKETPLACE · TH</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontWeight: 800,
              fontSize: "clamp(42px, 5.5vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "var(--text-1)",
              fontFamily: "var(--font-thai)",
              margin: "0 0 24px",
            }}>
              ตลาด<span className="text-gold">ฮาลาล</span>
              <br />
              <span style={{ color: "var(--text-2)", fontWeight: 700 }}>สำหรับ</span>
              <br />
              ผู้ประกอบการ
              <br />
              <span style={{ color: "var(--text-3)", fontSize: "0.65em", fontWeight: 600 }}>ที่แท้จริง</span>
            </h1>

            {/* Description */}
            <p style={{
              color: "var(--text-2)",
              fontSize: 18,
              lineHeight: 1.75,
              maxWidth: 440,
              fontFamily: "var(--font-thai)",
              marginBottom: 36,
            }}>
              เชื่อมต่อผู้ประกอบการ ซัพพลายเออร์ และนักลงทุน
              ในระบบเศรษฐกิจฮาลาลที่โปร่งใส —
              <span style={{ color: "var(--gold-400)" }}> ไม่มีดอกเบี้ย</span> ไม่มีความไม่แน่ใจ
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
              <Link href="/review" className="btn-gold" style={{ fontSize: 16, padding: "13px 28px" }}>
                เริ่มต้นฟรี →
              </Link>
              <Link href="/businesses" className="btn-ghost" style={{ fontSize: 15, padding: "12px 24px" }}>
                ดูธุรกิจทั้งหมด
              </Link>
            </div>

            {/* Stats row */}
            <div className="stats-row" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span className="stat-num" style={{ fontSize: 24, color: s.color }}>{s.value}</span>
                  <span style={{ fontSize: 13, color: "var(--text-3)", fontFamily: "var(--font-thai)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Business preview card ─────────────────────── */}
          <div style={{ position: "relative" }}>
            {/* Glow behind card */}
            <div style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "radial-gradient(circle, var(--gold-glow-md) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }} />

            <div className="card" style={{
              maxWidth: 380,
              marginLeft: "auto",
              zIndex: 1,
              position: "relative",
            }}>
              {/* Accent bar */}
              <div className="card-bar card-bar-em" />

              <div style={{ padding: 24 }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Logo placeholder */}
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(52,211,153,0.08))",
                      border: "1px solid rgba(52,211,153,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      fontFamily: "var(--font-arabic)",
                      fontWeight: 700,
                      color: "var(--em-400)",
                      flexShrink: 0,
                    }}>ن</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-1)", marginBottom: 2 }}>Al-Noor Foods Co.</div>
                      <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>เชียงใหม่ · อาหารแปรรูป</div>
                    </div>
                  </div>
                  <span className="badge badge-gold-tier mono" style={{ fontSize: 11 }}>✦ Gold</span>
                </div>

                {/* Stats grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 18 }}>
                  {[
                    { label: "รายได้/ปี",   value: "฿4.2M", color: "var(--em-400)" },
                    { label: "ต้องการทุน",  value: "฿800K", color: "var(--gold-400)" },
                    { label: "ROI",          value: "22%",   color: "var(--purple)" },
                  ].map((s) => (
                    <div key={s.label} style={{
                      background: "var(--bg-3)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "10px 8px",
                      textAlign: "center",
                    }}>
                      <div className="stat-num" style={{ fontSize: 17, color: s.color }}>{s.value}</div>
                      <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
                  <span className="badge badge-purple mono" style={{ fontSize: 11 }}>มุชาระเกาะ</span>
                  <span className="badge badge-blue mono" style={{ fontSize: 11 }}>Seeking Partners</span>
                </div>

                {/* Sparkline */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 44 }}>
                    {SPARKLINE.map((h, i) => (
                      <div key={i} className="spark-bar" style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i === SPARKLINE.length - 1
                          ? "var(--gold-400)"
                          : `rgba(232,184,75,${0.10 + i * 0.045})`,
                      }} />
                    ))}
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 6 }}>
                    รายได้ 8 ไตรมาสที่ผ่านมา
                  </div>
                </div>

                {/* Halalhub URL */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "var(--bg-3)", borderRadius: 8, marginBottom: 14 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--em-400)", boxShadow: "0 0 6px var(--em-glow)", flexShrink: 0 }} />
                  <span className="mono" style={{ fontSize: 11, color: "var(--text-2)" }}>halalummah.vercel.app/biz/al-noor-foods</span>
                </div>

                <button className="btn-ghost mono" style={{ width: "100%", padding: "9px 0", fontSize: 13, borderRadius: 10, justifyContent: "center" }}>
                  ดูโปรไฟล์ธุรกิจ →
                </button>
              </div>
            </div>

            {/* Floating mini badge */}
            <div style={{
              position: "absolute",
              top: -12,
              right: -12,
              padding: "8px 14px",
              borderRadius: 12,
              background: "var(--bg-glass)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid var(--border-gold)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              zIndex: 2,
            }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 2 }}>Active Deals</div>
              <div className="stat-num text-gold" style={{ fontSize: 20 }}>247</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div className="section-head" style={{ marginBottom: 28 }}>
          <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>الفئات</span>
          <span className="mono" style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: "0.07em" }}>CATEGORIES</span>
          {selectedCat && (
            <button
              onClick={() => setSelectedCat(null)}
              className="mono"
              style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-3)", background: "none", border: "1px solid var(--border)", borderRadius: 8, padding: "3px 10px", cursor: "pointer" }}
            >
              × ล้างตัวกรอง
            </button>
          )}
        </div>

        <div className="cat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
          {CATEGORIES.map((c) => {
            const isSelected = selectedCat === c.industry
            return (
              <button
                key={c.label}
                onClick={() => setSelectedCat(isSelected ? null : c.industry)}
                className="cat-card"
                style={{
                  textDecoration: "none",
                  background: isSelected ? c.bg : "var(--bg-2)",
                  borderColor: isSelected ? c.color : undefined,
                  boxShadow: isSelected ? `0 0 20px ${c.color}22` : undefined,
                  border: isSelected ? `2px solid ${c.color}88` : undefined,
                  width: "100%",
                }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: c.bg,
                  border: `1px solid ${c.color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 4,
                }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: isSelected ? c.color : "var(--text-1)", fontFamily: "var(--font-thai)", textAlign: "center", lineHeight: 1.3 }}>
                  {c.label}
                </div>
                <div className="mono" style={{ fontSize: 11, color: c.color }}>{c.count} รายการ</div>
              </button>
            )
          })}
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: 1280, margin: "0 auto 80px", padding: "0 24px" }} />

      {/* ══════════════════════════════════════════════════════════
          FEATURED BUSINESSES
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <div className="section-head" style={{ flex: 1, marginBottom: 0 }}>
            <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>الأعمال المميزة</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: "0.07em" }}>
              {selectedCat ? `BUSINESSES — ${CATEGORIES.find(c => c.industry === selectedCat)?.label}` : "FEATURED BUSINESSES"}
            </span>
          </div>
          <Link href="/businesses" className="mono" style={{ fontSize: 13, color: "var(--gold-400)", textDecoration: "none", marginLeft: 16, whiteSpace: "nowrap" }}>
            ดูทั้งหมด →
          </Link>
        </div>

        {filteredBusinesses.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)" }}>
            <div className="mono" style={{ fontSize: 28, marginBottom: 10 }}>// not found</div>
            <p style={{ fontFamily: "var(--font-thai)", fontSize: 15 }}>ไม่พบธุรกิจในหมวดนี้</p>
          </div>
        ) : (
          <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {filteredBusinesses.map((b) => <BusinessCard key={b.id} business={b} />)}
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          HALAL TIERS
      ══════════════════════════════════════════════════════════ */}
      <section id="tiers" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div className="section-head" style={{ marginBottom: 28 }}>
          <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>درجات الجودة</span>
          <span className="mono" style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: "0.07em" }}>HALAL WORKPLACE TIERS</span>
        </div>

        <div className="tier-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            {
              label: "Bronze",
              className: "badge-bronze-tier",
              barClass: "card-bar-amber",
              accent: "var(--amber)",
              criteria: ["อาหาร Halal ใน canteen", "ยืดหยุ่นวันศุกร์", "อย่างน้อย 3/5 เงื่อนไข"],
            },
            {
              label: "Silver",
              className: "badge-silver-tier",
              barClass: "card-bar-blue",
              accent: "#94A3B8",
              criteria: ["มีห้องละหมาด", "อาหาร Halal", "ยืดหยุ่นวันศุกร์", "ไม่บังคับแต่งกายขัดศาสนา"],
            },
            {
              label: "Gold",
              className: "badge-gold-tier",
              barClass: "card-bar-gold",
              accent: "var(--gold-300)",
              criteria: ["ครบทุกเงื่อนไข Silver", "ไม่มีแอลกอฮอล์ในบริษัท"],
            },
          ].map((t) => (
            <div key={t.label} className="card">
              <div className={`card-bar ${t.barClass}`} />
              <div style={{ padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span className={`badge ${t.className} mono`} style={{ fontSize: 12 }}>✦ Halal {t.label}</span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.criteria.map((c) => (
                    <li key={c} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 14, color: "var(--text-2)", fontFamily: "var(--font-thai)", alignItems: "flex-start" }}>
                      <span style={{ color: t.accent, flexShrink: 0, fontFamily: "var(--font-mono-var)", marginTop: 1 }}>✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SUPPLIERS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <div className="section-head" style={{ flex: 1, marginBottom: 0 }}>
            <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>الموردون</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: "0.07em" }}>HALAL SUPPLIERS</span>
          </div>
          <Link href="/suppliers" className="mono" style={{ fontSize: 13, color: "var(--gold-400)", textDecoration: "none", marginLeft: 16, whiteSpace: "nowrap" }}>
            ดูทั้งหมด →
          </Link>
        </div>

        <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {MOCK_SUPPLIERS.map((s) => <SupplierCard key={s.id} supplier={s} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS BANNER
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{
          borderRadius: 24,
          border: "1px solid var(--border-gold)",
          background: "var(--bg-2)",
          padding: "40px 48px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 90% at 50% 50%, var(--gold-glow) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 30, marginBottom: 6 }}>{s.icon}</div>
                <div className="stat-num" style={{ fontSize: 32, color: s.color, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-1)", fontFamily: "var(--font-thai)" }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2, fontFamily: "var(--font-thai)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{
          borderRadius: 28,
          background: "linear-gradient(135deg, var(--bg-3) 0%, var(--bg-2) 100%)",
          border: "1px solid var(--border-gold)",
          padding: "72px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: -80, left: -80,
            width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: -80, right: -80,
            width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, var(--em-glow) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative" }}>
            <div className="arabic" style={{ fontSize: 20, color: "var(--gold-400)", marginBottom: 16 }}>
              انضم إلينا اليوم
            </div>
            <h2 style={{
              fontWeight: 800,
              fontSize: 40,
              color: "var(--text-1)",
              margin: "0 0 14px",
              fontFamily: "var(--font-thai)",
              letterSpacing: "-0.02em",
            }}>
              พร้อมเข้าร่วม <span className="text-gold">HalalHub</span>?
            </h2>
            <p style={{ color: "var(--text-2)", marginBottom: 36, fontSize: 17, fontFamily: "var(--font-thai)" }}>
              ลงทะเบียนฟรี — ไม่มีค่าใช้จ่ายในปีแรก · เก็บเฉพาะเมื่อคุณได้ผล
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/review" className="btn-gold" style={{ fontSize: 16, padding: "14px 32px" }}>
                เริ่มต้นเลย →
              </Link>
              <Link href="/businesses" className="btn-ghost" style={{ fontSize: 15, padding: "13px 28px" }}>
                ดูธุรกิจทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
