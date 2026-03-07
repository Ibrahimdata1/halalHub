import Link from "next/link"
import { MOCK_BUSINESSES, MOCK_SUPPLIERS } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { SupplierCard } from "@/components/ui/SupplierCard"

export default function HomePage() {
  const featuredBusinesses = MOCK_BUSINESSES.slice(0, 3)
  const featuredSuppliers = MOCK_SUPPLIERS.slice(0, 3)

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: 620, backgroundColor: "var(--hh-bg-base)" }}>
        {/* Gold radial glow top-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(212,160,23,0.07) 0%, transparent 70%)" }}
        />
        {/* Green radial glow bottom-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 40% at 90% 80%, rgba(22,163,74,0.04) 0%, transparent 60%)" }}
        />
        {/* Islamic geometric pattern — top-right corner */}
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none hh-pattern-overlay opacity-60"
          style={{ maskImage: "radial-gradient(ellipse at top right, black 20%, transparent 70%)" }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--hh-bg-base))" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            {/* Eyebrow */}
            <div className="hh-eyebrow mb-8 w-fit">
              ☪ แพลตฟอร์มเศรษฐกิจฮาลาล · ประเทศไทย
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-3" style={{ color: "var(--hh-text-primary)" }}>
              เชื่อมธุรกิจ{" "}
              <span className="hh-text-gradient-gold">ฮาลาล</span>
              <br />
              สู่อนาคตที่ยั่งยืน
            </h1>

            {/* Arabic subtitle */}
            <p
              className="text-base mb-5"
              style={{ fontFamily: "var(--font-noto-arabic)", color: "var(--hh-text-muted)", direction: "rtl" }}
            >
              الاقتصاد الحلال في تايلاند
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--hh-text-secondary)" }}>
              เชื่อมธุรกิจฮาลาลกับซัพพลายเออร์ที่น่าเชื่อถือ
              พนักงานมุสลิมที่เหมาะสม และนักลงทุน Halal — ฟรีในปีแรก
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/review" className="hh-btn-primary px-7 py-3 text-sm text-center">
                ลงทะเบียนธุรกิจของคุณ — ฟรี
              </Link>
              <Link href="/suppliers" className="hh-btn-secondary px-7 py-3 text-sm text-center">
                หาซัพพลายเออร์ →
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#D4A017", "#8B6914", "#374039", "#2A2E2B"].map((bg, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: bg, borderColor: "var(--hh-bg-base)", color: "#F0EDE6" }}>
                    {["ก", "บ", "ค", "ง"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: "var(--hh-text-secondary)" }}>
                ธุรกิจกว่า <span style={{ color: "var(--hh-gold-300)", fontWeight: 600 }}>200+</span> แห่งเข้าร่วมแล้ว
              </p>
            </div>
          </div>

          {/* Right — floating card cluster */}
          <div className="hidden lg:flex flex-1 justify-center items-center relative" style={{ height: 360 }}>
            {/* Card back */}
            <div className="absolute" style={{ transform: "rotate(-6deg) translateX(-20px) translateY(20px)", opacity: 0.4, width: 280 }}>
              <BusinessCard business={MOCK_BUSINESSES[1]} />
            </div>
            {/* Card mid */}
            <div className="absolute" style={{ transform: "rotate(3deg) translateX(20px)", opacity: 0.7, width: 280 }}>
              <BusinessCard business={MOCK_BUSINESSES[2]} />
            </div>
            {/* Card front */}
            <div
              className="absolute"
              style={{
                width: 280,
                boxShadow: "0 0 0 1px rgba(212,160,23,0.35), 0 24px 60px rgba(0,0,0,0.8)",
                borderRadius: 12,
              }}
            >
              <BusinessCard business={MOCK_BUSINESSES[0]} />
            </div>

            {/* Floating chip 1 */}
            <div
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
              style={{ backgroundColor: "var(--hh-bg-surface-2)", border: "1px solid var(--hh-border-default)", borderLeft: "3px solid var(--hh-halal-400)", color: "var(--hh-halal-text)" }}
            >
              ✓ Halal Verified
            </div>
            {/* Floating chip 2 */}
            <div
              className="absolute bottom-4 left-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
              style={{ backgroundColor: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.2)", color: "var(--hh-gold-300)" }}
            >
              <span className="hh-pulse-dot" />
              กำลังหานักลงทุน
            </div>
          </div>
        </div>
      </section>

      {/* ── Tier Section ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="hh-eyebrow mb-4 mx-auto w-fit">เกณฑ์สาธารณะ</div>
          <h2 className="text-2xl font-bold" style={{ color: "var(--hh-text-primary)" }}>Halal Workplace Tiers</h2>
          <p className="text-sm mt-2" style={{ color: "var(--hh-text-secondary)" }}>ผ่านเกณฑ์ → ได้ Badge ทันที ไม่มีค่าใช้จ่าย</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: "Bronze",
              className: "hh-badge-bronze",
              accentColor: "#D97706",
              criteria: ["อาหาร Halal ใน canteen", "ยืดหยุ่นวันศุกร์", "อย่างน้อย 3 จาก 5 เงื่อนไข"],
            },
            {
              label: "Silver",
              className: "hh-badge-silver",
              accentColor: "#94A3B8",
              criteria: ["มีห้องละหมาด", "อาหาร Halal ใน canteen", "ยืดหยุ่นวันศุกร์", "ไม่บังคับแต่งกายขัดอิสลาม"],
            },
            {
              label: "Gold",
              className: "hh-badge-gold",
              accentColor: "#D4A017",
              criteria: ["ครบทุกเงื่อนไข Silver", "ไม่มีแอลกอฮอล์ในกิจกรรมบริษัท"],
            },
          ].map((item) => (
            <div
              key={item.label}
              className="hh-card p-6"
              style={{ borderLeft: `3px solid ${item.accentColor}` }}
            >
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide mb-4 ${item.className}`}>
                ✦ Halal {item.label}
              </div>
              <ul className="space-y-2">
                {item.criteria.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm" style={{ color: "var(--hh-text-secondary)" }}>
                    <span className="mt-0.5 text-xs" style={{ color: item.accentColor }}>✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Businesses ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ color: "var(--hh-text-primary)" }}>ธุรกิจล่าสุด</h2>
          <Link href="/businesses" className="text-xs font-medium" style={{ color: "var(--hh-gold-300)" }}>
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredBusinesses.map((b) => (
            <BusinessCard key={b.id} business={b} />
          ))}
        </div>
      </section>

      {/* ── Featured Suppliers ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ color: "var(--hh-text-primary)" }}>ซัพพลายเออร์ Halal</h2>
          <Link href="/suppliers" className="text-xs font-medium" style={{ color: "var(--hh-gold-300)" }}>
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredSuppliers.map((s) => (
            <SupplierCard key={s.id} supplier={s} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden mx-6 mb-16 rounded-2xl" style={{ backgroundColor: "var(--hh-bg-surface-2)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,160,23,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-2xl mx-auto py-16 px-6 text-center">
          <div className="hh-eyebrow mb-4 mx-auto w-fit">เริ่มต้นวันนี้</div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--hh-text-primary)" }}>
            พร้อมเข้าร่วม HalalUmmah?
          </h2>
          <p className="mb-8" style={{ color: "var(--hh-text-secondary)" }}>
            ลงทะเบียนฟรี — ไม่มีค่าใช้จ่ายในปีแรก
          </p>
          <Link href="/review" className="hh-btn-primary px-8 py-3 text-sm inline-block">
            เริ่มต้นเลย
          </Link>
        </div>
      </section>
    </div>
  )
}
