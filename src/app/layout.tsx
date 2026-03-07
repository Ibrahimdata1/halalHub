import type { Metadata } from "next"
import { Playfair_Display, Noto_Sans_Thai, Noto_Sans_Arabic, Noto_Sans } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
})
const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})
const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
})
const noto = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HalalUmmah — แพลตฟอร์มเศรษฐกิจฮาลาล",
  description: "เชื่อมธุรกิจฮาลาลกับซัพพลายเออร์ พนักงานมุสลิม และนักลงทุน Halal",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${playfair.variable} ${notoThai.variable} ${notoArabic.variable} ${noto.variable} font-sans antialiased`}>
        {/* Navbar */}
        <nav
          className="sticky top-0 z-50 border-b"
          style={{
            backgroundColor: "var(--hh-bg-surface)",
            borderColor: "var(--hh-border-subtle)",
            backdropFilter: "blur(12px) saturate(1.4)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold"
                style={{ backgroundColor: "var(--hh-gold-400)", color: "#0D0F0E" }}
              >
                ☪
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-lg tracking-tight"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--hh-text-primary)" }}
                >
                  HalalUmmah
                </span>
                <span
                  className="text-[10px] tracking-wider"
                  style={{ fontFamily: "var(--font-noto-arabic)", color: "var(--hh-text-muted)" }}
                >
                  الاقتصاد الحلال
                </span>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/businesses" className="hh-nav-link">ธุรกิจ</Link>
              <Link href="/suppliers" className="hh-nav-link">ซัพพลายเออร์</Link>
            </div>

            {/* CTA */}
            <Link href="/review" className="hh-btn-primary px-5 py-2 text-sm">
              ลงทะเบียน — ฟรี
            </Link>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer
          className="border-t mt-20 py-10"
          style={{ backgroundColor: "var(--hh-bg-surface)", borderColor: "var(--hh-border-subtle)" }}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span style={{ color: "var(--hh-gold-400)" }}>☪</span>
              <span className="text-sm font-semibold" style={{ color: "var(--hh-text-primary)" }}>HalalUmmah</span>
              <span className="text-sm" style={{ color: "var(--hh-text-muted)" }}>· แพลตฟอร์มเศรษฐกิจฮาลาลประเทศไทย</span>
            </div>
            <p className="text-xs" style={{ color: "var(--hh-text-muted)" }}>© 2025 HalalUmmah · สงวนลิขสิทธิ์</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
