import Link from "next/link"
import { MOCK_BUSINESSES, MOCK_SUPPLIERS } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { SupplierCard } from "@/components/ui/SupplierCard"

const STATS = [
  { key: "ธุรกิจ", value: "12,847", color: "#4ADE80", comment: "// ที่ได้รับการรับรองฮาลาล" },
  { key: "นักลงทุน", value: "3,291", color: "#C084FC", comment: "// พร้อมลงทุน Shariah-compliant" },
  { key: "มูลค่าตลาด", value: "฿2.4B", color: "#D4A017", comment: "// ไหลเวียนในระบบ" },
]

const SPARKLINE = [30, 45, 38, 60, 52, 75, 68, 90]

export default function HomePage() {
  return (
    <div>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

        {/* LEFT */}
        <div>
          {/* Bismillah label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span className="arabic" style={{ fontSize: 14, color: "var(--text-3)" }}>بِسْمِ اللهِ</span>
            <span style={{ width: 40, height: 1, background: "rgba(212,160,23,0.3)" }} />
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>halal-marketplace.th</span>
          </div>

          {/* Big headline */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
            <span style={{ color: "#D4A017", fontWeight: 900, fontSize: "clamp(56px,7vw,88px)", lineHeight: 0.9, fontFamily: "var(--font-display)", flexShrink: 0, marginTop: 4 }}>&gt;</span>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 0.95, letterSpacing: "-0.025em", color: "var(--text-1)", fontFamily: "var(--font-thai)", margin: 0 }}>
              ตลาด<span style={{ color: "#D4A017" }}>ฮาลาล</span>
              <br />
              สำหรับ
              <br />
              ผู้ประกอบการ<br />
              <span style={{ color: "var(--text-3)" }}>ที่แท้จริง</span>
            </h1>
          </div>

          {/* Stat block */}
          <div style={{ marginTop: 32, padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
            {STATS.map((s) => (
              <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, fontFamily: "var(--font-mono-var)" }}>
                <span style={{ color: s.color, fontSize: 13 }}>{s.key}</span>
                <span style={{ color: "var(--text-3)", fontSize: 13 }}>=</span>
                <span style={{ color: "#D4A017", fontWeight: 700, fontSize: 22, fontFamily: "var(--font-display)" }}>{s.value}</span>
                <span style={{ color: "var(--text-3)", fontSize: 11, marginLeft: 4 }}>{s.comment}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p style={{ marginTop: 20, color: "var(--text-2)", fontSize: 15, lineHeight: 1.7, maxWidth: 440, fontFamily: "var(--font-thai)" }}>
            เชื่อมต่อผู้ประกอบการ ซัพพลายเออร์ และนักลงทุน
            ในระบบเศรษฐกิจฮาลาลที่โปร่งใส — ไม่มีดอกเบี้ย ไม่มีความไม่แน่ใจ
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <Link href="/review" className="btn-gold" style={{ fontSize: 14 }}>เริ่มต้นฟรี →</Link>
            <Link href="/businesses" className="btn-ghost" style={{ fontSize: 14 }}>ดูธุรกิจทั้งหมด</Link>
          </div>
        </div>

        {/* RIGHT — floating business card panel */}
        <div className="win-card" style={{ maxWidth: 400, marginLeft: "auto" }}>
          {/* Window header */}
          <div className="win-header">
            <span className="win-dot-red" />
            <span className="win-dot-yellow" />
            <span className="win-dot-green" />
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 8 }}>halalhub.th/biz/al-noor-foods</span>
          </div>

          <div style={{ padding: 20 }}>
            {/* Business header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(212,160,23,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#D4A017", fontFamily: "var(--font-arabic)", fontWeight: 700, flexShrink: 0 }}>ن</div>
                <div>
                  <div style={{ color: "var(--text-1)", fontWeight: 600, fontSize: 14 }}>Al-Noor Foods Co.</div>
                  <div className="mono" style={{ color: "var(--text-3)", fontSize: 11, marginTop: 2 }}>เชียงใหม่ · อาหารแปรรูป</div>
                </div>
              </div>
              <span className="mono badge-gold-tier" style={{ padding: "3px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>✦ Gold</span>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
              {[
                { label: "รายได้/ปี", value: "฿4.2M", color: "#4ADE80" },
                { label: "ต้องการทุน", value: "฿800K", color: "#D4A017" },
                { label: "ROI", value: "22%", color: "#C084FC" },
              ].map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: s.color, fontFamily: "var(--font-display)" }}>{s.value}</div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Investment type badges */}
            <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
              <span className="mono badge-purple" style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11 }}>มุชาระเกาะ</span>
              <span className="mono badge-blue" style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11 }}>Seeking Partners</span>
            </div>

            {/* Sparkline */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 48 }}>
                {SPARKLINE.map((h, i) => (
                  <div key={i} style={{
                    flex: 1, borderRadius: "3px 3px 0 0",
                    height: `${h}%`,
                    background: i === SPARKLINE.length - 1
                      ? "#D4A017"
                      : `rgba(212,160,23,${0.12 + i * 0.04})`,
                    transition: "height 300ms",
                  }} />
                ))}
              </div>
              <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 6 }}>รายได้ 8 ไตรมาสที่ผ่านมา</div>
            </div>

            {/* CTA */}
            <button className="btn-ghost mono" style={{ width: "100%", padding: "8px 0", fontSize: 12, borderRadius: 8, justifyContent: "center" }}>
              ดูโปรไฟล์ธุรกิจ →
            </button>
          </div>
        </div>
      </section>

      {/* ══ TIER SECTION ════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>درجات الجودة</span>
          <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>HALAL WORKPLACE TIERS</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { label: "Bronze", className: "badge-bronze-tier", accent: "#D97706", borderAccent: "#6B3F1A", criteria: ["อาหาร Halal ใน canteen", "ยืดหยุ่นวันศุกร์", "อย่างน้อย 3/5 เงื่อนไข"] },
            { label: "Silver", className: "badge-silver-tier", accent: "#94A3B8", borderAccent: "#3D4A5C", criteria: ["มีห้องละหมาด", "อาหาร Halal", "ยืดหยุ่นวันศุกร์", "ไม่บังคับแต่งกายขัด"] },
            { label: "Gold",   className: "badge-gold-tier",   accent: "#D4A017", borderAccent: "#8B6914", criteria: ["ครบทุกเงื่อนไข Silver", "ไม่มีแอลกอฮอล์ในบริษัท"] },
          ].map((t) => (
            <div key={t.label} className="win-card" style={{ borderLeft: `3px solid ${t.borderAccent}` }}>
              <div className="win-header">
                <span className="win-dot-red" /><span className="win-dot-yellow" /><span className="win-dot-green" />
                <span className={`mono ${t.className}`} style={{ marginLeft: 8, padding: "2px 8px", borderRadius: 5, fontSize: 10, fontWeight: 700 }}>✦ Halal {t.label}</span>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.criteria.map((c) => (
                    <li key={c} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "var(--text-2)", fontFamily: "var(--font-thai)" }}>
                      <span style={{ color: t.accent, marginTop: 1, flexShrink: 0, fontFamily: "var(--font-mono-var)" }}>✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BUSINESSES ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>BUSINESSES</span>
            <span style={{ height: 1, width: 32, background: "var(--border)" }} />
          </div>
          <Link href="/businesses" className="mono" style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none" }}>ดูทั้งหมด →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {MOCK_BUSINESSES.map((b) => <BusinessCard key={b.id} business={b} />)}
        </div>
      </section>

      {/* ══ SUPPLIERS ════════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em" }}>SUPPLIERS</span>
            <span style={{ height: 1, width: 32, background: "var(--border)" }} />
          </div>
          <Link href="/suppliers" className="mono" style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none" }}>ดูทั้งหมด →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {MOCK_SUPPLIERS.map((s) => <SupplierCard key={s.id} supplier={s} />)}
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1280, margin: "0 24px 80px", padding: "60px 48px", borderRadius: 20, border: "1px solid rgba(212,160,23,0.15)", background: "var(--bg-surface)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,160,23,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="arabic" style={{ fontSize: 18, color: "var(--text-3)", marginBottom: 16 }}>انضم إلينا اليوم</div>
        <h2 style={{ fontWeight: 800, fontSize: 36, color: "var(--text-1)", margin: "0 0 12px", fontFamily: "var(--font-thai)" }}>พร้อมเข้าร่วม HalalUmmah?</h2>
        <p style={{ color: "var(--text-2)", marginBottom: 32, fontFamily: "var(--font-thai)" }}>ลงทะเบียนฟรี — ไม่มีค่าใช้จ่ายในปีแรก</p>
        <Link href="/review" className="btn-gold" style={{ fontSize: 15, padding: "13px 32px" }}>เริ่มต้นเลย →</Link>
      </section>
    </div>
  )
}
