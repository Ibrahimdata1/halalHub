import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HalalHub — Halal Business Platform",
  description: "แพลตฟอร์มเชื่อมธุรกิจฮาลาลกับซัพพลายเออร์ พนักงานมุสลิม และนักลงทุน",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${geist.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-700">
              <span className="text-2xl">☪</span>
              HalalHub
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="/businesses" className="text-gray-600 hover:text-emerald-700 transition-colors">
                ธุรกิจ
              </Link>
              <Link href="/suppliers" className="text-gray-600 hover:text-emerald-700 transition-colors">
                ซัพพลายเออร์
              </Link>
              <Link href="/review" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                ลงทะเบียนธุรกิจ
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-gray-200 bg-white mt-16 py-8 text-center text-sm text-gray-500">
          © 2025 HalalHub · แพลตฟอร์มเศรษฐกิจฮาลาลประเทศไทย
        </footer>
      </body>
    </html>
  )
}
