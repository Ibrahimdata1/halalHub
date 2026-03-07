import Link from "next/link"
import { MOCK_BUSINESSES, MOCK_SUPPLIERS } from "@/lib/mockData"
import { BusinessCard } from "@/components/ui/BusinessCard"
import { SupplierCard } from "@/components/ui/SupplierCard"

export default function HomePage() {
  const featuredBusinesses = MOCK_BUSINESSES.slice(0, 3)
  const featuredSuppliers = MOCK_SUPPLIERS.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            แพลตฟอร์มเศรษฐกิจฮาลาล<br />สำหรับประเทศไทย
          </h1>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            เชื่อมธุรกิจฮาลาลกับซัพพลายเออร์ที่น่าเชื่อถือ พนักงานมุสลิม และนักลงทุน Halal
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/review"
              className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              ลงทะเบียนธุรกิจของคุณ — ฟรี
            </Link>
            <Link
              href="/suppliers"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors"
            >
              หาซัพพลายเออร์
            </Link>
          </div>
        </div>
      </section>

      {/* Tier explanation */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-2">Halal Workplace Tiers</h2>
        <p className="text-center text-gray-500 mb-8 text-sm">เกณฑ์สาธารณะ — ผ่านแล้วได้ badge ทันที</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              tier: "Bronze",
              emoji: "🥉",
              color: "border-orange-200 bg-orange-50",
              criteria: ["อาหาร Halal ใน canteen", "ยืดหยุ่นวันศุกร์", "อย่างน้อย 3 จาก 5 เงื่อนไข"],
            },
            {
              tier: "Silver",
              emoji: "🥈",
              color: "border-gray-300 bg-gray-50",
              criteria: ["มีห้องละหมาด", "อาหาร Halal ใน canteen", "ยืดหยุ่นวันศุกร์", "ไม่บังคับแต่งกายขัดอิสลาม"],
            },
            {
              tier: "Gold",
              emoji: "🥇",
              color: "border-yellow-200 bg-yellow-50",
              criteria: ["ครบทุกเงื่อนไข Silver", "ไม่มีแอลกอฮอล์ในกิจกรรมบริษัท"],
            },
          ].map((item) => (
            <div key={item.tier} className={`rounded-xl border-2 p-5 ${item.color}`}>
              <h3 className="text-lg font-bold mb-3">{item.emoji} {item.tier}</h3>
              <ul className="space-y-1.5">
                {item.criteria.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">ธุรกิจล่าสุด</h2>
          <Link href="/businesses" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredBusinesses.map((b) => (
            <BusinessCard key={b.id} business={b} />
          ))}
        </div>
      </section>

      {/* Featured Suppliers */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">ซัพพลายเออร์ Halal</h2>
          <Link href="/suppliers" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredSuppliers.map((s) => (
            <SupplierCard key={s.id} supplier={s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">พร้อมเข้าร่วม HalalHub?</h2>
        <p className="text-emerald-100 mb-6">ลงทะเบียนฟรี — ไม่มีค่าใช้จ่ายในปีแรก</p>
        <Link
          href="/review"
          className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors inline-block"
        >
          เริ่มต้นเลย
        </Link>
      </section>
    </div>
  )
}
