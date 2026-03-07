import type { Metadata } from "next"
import { Noto_Sans_Thai, Plus_Jakarta_Sans, IBM_Plex_Mono, Noto_Naskh_Arabic } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})
const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HalalUmmah — ตลาดฮาลาลสำหรับผู้ประกอบการ",
  description: "เชื่อมต่อธุรกิจ ซัพพลายเออร์ และนักลงทุนในระบบเศรษฐกิจฮาลาลที่โปร่งใส",
}

const PILLS = [
  { label: "ค้นหาธุรกิจ", icon: "☪", color: "#D4A017", bg: "#1A1A0E", href: "/businesses" },
  { label: "หมวดหมู่", icon: "⊞", color: "#4ADE80", bg: "#0E1A12", href: "/suppliers" },
  { label: "นักลงทุน", icon: "◈", color: "#C084FC", bg: "#1A0E1A", href: "/businesses?seeking=true" },
  { label: "Halal Verified", icon: "✦", color: "#FB923C", bg: "#1A1208", href: "/businesses?tier=gold" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} ${notoNaskh.variable} font-sans antialiased`}>
        {/* Navbar */}
        <nav style={{ backgroundColor: "rgba(15,15,15,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", gap: 16 }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#D4A017", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#0F0F0F" }}>☪</div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "var(--text-1)", letterSpacing: "-0.02em" }}>HalalUmmah</span>
              <span style={{ fontFamily: "var(--font-arabic)", fontSize: 11, color: "var(--text-3)", marginLeft: 4 }}>السوق الحلال</span>
            </Link>

            {/* Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 16, flex: 1, overflow: "hidden" }}>
              {PILLS.map((p) => (
                <Link key={p.label} href={p.href} className="nav-pill mono" style={{ backgroundColor: p.bg, color: p.color, textDecoration: "none" }}>
                  <span>{p.icon}</span> {p.label}
                </Link>
              ))}
            </div>

            {/* Auth */}
            <Link href="/review" className="btn-gold" style={{ padding: "7px 18px", fontSize: 13, borderRadius: 10, flexShrink: 0 }}>
              ลงทะเบียน →
            </Link>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "32px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--gold)" }}>☪</span>
              <span className="mono" style={{ fontSize: 13, color: "var(--text-1)", fontWeight: 600 }}>HalalUmmah</span>
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>· ตลาดฮาลาลประเทศไทย</span>
            </div>
            <span className="arabic" style={{ fontSize: 13, color: "var(--text-3)" }}>الاقتصاد الحلال في تايلاند</span>
            <p className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>© 2025 HalalUmmah</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
