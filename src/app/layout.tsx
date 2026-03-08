import type { Metadata } from "next"
import { Noto_Sans_Thai, Plus_Jakarta_Sans, IBM_Plex_Mono, Noto_Naskh_Arabic } from "next/font/google"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import "./globals.css"

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
  title: "HalalHub — ตลาดฮาลาลสำหรับผู้ประกอบการ",
  description: "เชื่อมต่อธุรกิจ ซัพพลายเออร์ และนักลงทุนในระบบเศรษฐกิจฮาลาลที่โปร่งใส",
}

const NAV_LINKS = [
  { href: "/businesses", label: "ธุรกิจ" },
  { href: "/suppliers",  label: "ซัพพลายเออร์" },
  { href: "/businesses?seeking=true", label: "นักลงทุน" },
]

const FOOTER_LINKS = [
  { label: "ธุรกิจ",         href: "/businesses" },
  { label: "ซัพพลายเออร์",  href: "/suppliers" },
  { label: "Halal Tiers",    href: "/#tiers" },
  { label: "ลงทะเบียน",     href: "/review" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} ${notoNaskh.variable} font-sans antialiased`}>

        {/* ── Navbar ─────────────────────────────────────────────── */}
        <nav style={{
          backgroundColor: "rgba(5, 14, 31, 0.80)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}>
          <div style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "linear-gradient(135deg, var(--gold-300), var(--gold-500))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 700,
                color: "#08050A",
                boxShadow: "0 0 16px var(--gold-glow-md)",
                flexShrink: 0,
              }}>☪</div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 15,
                  color: "var(--text-1)",
                  letterSpacing: "-0.02em",
                }}>HalalHub</span>
                <span className="arabic" style={{ fontSize: 9, color: "var(--text-3)" }}>السوق الحلال</span>
              </div>
            </Link>

            {/* Nav links */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 8 }}>
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="nav-pill" style={{ fontFamily: "var(--font-thai)" }}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Search */}
            <div className="search-bar" style={{ flex: 1, maxWidth: 280, margin: "0 auto" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="ค้นหาธุรกิจ, ซัพพลายเออร์..." />
              <span className="mono" style={{ fontSize: 10, color: "var(--text-3)", whiteSpace: "nowrap" }}>⌘K</span>
            </div>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto", flexShrink: 0 }}>
              <ThemeToggle />
              <Link href="/review" className="btn-gold" style={{ padding: "7px 18px", fontSize: 12, borderRadius: 10 }}>
                ลงทะเบียน →
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer style={{
          borderTop: "1px solid var(--border)",
          marginTop: 100,
          padding: "48px 24px 32px",
          background: "var(--bg-0)",
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, marginBottom: 40 }}>
              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, var(--gold-300), var(--gold-500))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    color: "#08050A",
                    fontWeight: 700,
                  }}>☪</div>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--text-1)" }}>HalalHub</span>
                </div>
                <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.6, maxWidth: 300, fontFamily: "var(--font-thai)", margin: 0 }}>
                  ตลาดฮาลาลที่เชื่อมต่อผู้ประกอบการ ซัพพลายเออร์ และนักลงทุนในระบบเศรษฐกิจอิสลาม
                </p>
                <span className="arabic" style={{ fontSize: 12, color: "var(--text-3)", display: "block", marginTop: 10 }}>
                  الاقتصاد الحلال في تايلاند
                </span>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 32 }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.08em", marginBottom: 12 }}>PLATFORM</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {FOOTER_LINKS.map((l) => (
                      <Link key={l.href} href={l.href} className="footer-link" style={{ fontSize: 13, color: "var(--text-2)", textDecoration: "none", fontFamily: "var(--font-thai)" }}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr className="divider" />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20, flexWrap: "wrap", gap: 8 }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>© 2026 HalalHub · ตลาดฮาลาลประเทศไทย</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>Built with</span>
                <span style={{ fontSize: 11, color: "var(--gold-400)" }}>♥</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>for the Ummah</span>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
