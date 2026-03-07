# HalalUmmah — โมเดลธุรกิจและกลยุทธ์ (v4)

## แนวคิดหลัก
แพลตฟอร์ม **"Halal Workplace Review + B2B Matching"** ที่เชื่อมธุรกิจฮาลาลกับซัพพลายเออร์ที่ผ่านการรับรอง พนักงานมุสลิมเคร่ง และนักลงทุน Halal

---

## โมเดลที่เรียบง่าย

เริ่มด้วย **2 roles** → roles อื่นตามมาเอง:

```
Phase 1 (เดือน 1-3):  ผู้ประกอบการ + ซัพพลายเออร์
Phase 2 (เดือน 3-6):  คนหางานตามมาเอง (เห็น badge บนเว็บบริษัท)
Phase 3 (เดือน 6-12): นักลงทุนตามมา
Phase 4:              ครูสอนตามมา
```

---

## Role 1: ผู้ประกอบการ / เจ้าของธุรกิจ

**ปัญหา:** ต้องการพนักงานมุสลิมเคร่ง + นักลงทุน Halal + ซัพพลายเออร์ที่ certified จริง แต่ไม่มีช่องทางที่น่าเชื่อถือ

**สิ่งที่ได้จาก HalalUmmah ฟรี:**
- **Halal Workplace Review** — รีวิวตามเกณฑ์สาธารณะ ได้ badge + listing
- **ระดับ Bronze / Silver / Gold** — ดึงคนมุสลิมเคร่งมาหางาน + นักลงทุนมองเห็น
- **Auto-matching กับซัพพลายเออร์** (Phase 2) — แจ้งเตือนเมื่อเจอซัพพลายเออร์ที่ตรงกัน

---

## Role 2: ผู้ผลิต / Halal Supplier

**ปัญหา:** มองไม่เห็น — ผู้ซื้อหาผ่าน trade fair ปีละครั้ง หรือ LINE word-of-mouth เท่านั้น

**สิ่งที่ได้จาก HalalUmmah ฟรี:**
- **Verified Supplier Listing** — B2B directory ที่ค้นหาได้
- **Auto-matching** (Phase 2) — ระบบแจ้งเตือนผู้ประกอบการที่ต้องการโดยอัตโนมัติ
- ถูก invite อัตโนมัติเมื่อผู้ประกอบการ mention ชื่อในระบบ

---

## เกณฑ์คะแนน Halal Workplace Review

**ต้องประกาศเกณฑ์สาธารณะก่อน launch:**

| เงื่อนไข | Bronze | Silver | Gold |
|---|---|---|---|
| มีห้องละหมาด | - | ✓ | ✓ |
| อาหาร Halal ใน canteen | ✓ | ✓ | ✓ |
| ยืดหยุ่นวันศุกร์ | ✓ | ✓ | ✓ |
| ไม่มีแอลกอฮอล์ในกิจกรรมบริษัท | - | - | ✓ |
| ไม่บังคับแต่งกายขัดหลักอิสลาม | - | ✓ | ✓ |

*(Bronze = 3/5, Silver = 4/5, Gold = 5/5)*

---

## Auto-Matching: วิเคราะห์และแผน

### ทำไมต้องมี
- ผู้ซื้อหาซัพพลายเออร์ที่ trusted ยากมาก ไม่ใช่แค่หาไม่เจอ
- Thai Halal B2B = community-based ความเชื่อใจสูงถ้ามี shared identity (Halal)
- Notification แบบ passive ดึงคนที่ sign up แล้ว "หายไป" กลับมาได้

### ทำไมต้องทำตามลำดับ
**⚠️ match quality ต่ำ = แย่กว่าไม่มี**
- notification ที่ irrelevant = spam = คน unsubscribe + เล่าให้คนอื่นว่า platform ไม่ดี
- ชุมชนมุสลิมไทยเล็กและ word-of-mouth เร็วมาก

### 3 มิติที่ต้องมีเพื่อให้ match มีความหมาย
1. **Category** — taxonomy ที่ละเอียดพอ (40–70 categories)
2. **Region** — จังหวัด/ภาค
3. **Scale** — MOQ / volume range

---

## แผน Auto-Matching แบบ Phased

### Phase 1 (Build Now — เดือน 1–3): วางรากฐานข้อมูล

**สิ่งที่ต้องทำ:**
- ออกแบบ **Halal B2B Category Taxonomy** ภาษาไทย 40–70 categories
  (วัตถุดิบอาหาร / บรรจุภัณฑ์ / เครื่องจักร / โลจิสติกส์ / บริการ)
- เก็บข้อมูล matching ใน profile ตั้งแต่ต้น (**required fields ไม่ใช่ optional**)
  - ซัพพลายเออร์: category, จังหวัด, MOQ min, หน่วยงานรับรอง
  - ผู้ประกอบการ: ต้องการ category อะไร, ภาค, volume range, ต้องการ cert ระดับไหน
- สร้าง **Search + Filter UI** ที่ดี — เป็น value ทันทีก่อน matching engine พร้อม

> ประกาศ feature นี้เป็น "เร็วๆ นี้" เพื่อจูงใจให้กรอก profile ครบ

### Phase 2 (Activate — เดือน 3–6): เริ่ม Matching เมื่อมี 30+ suppliers

**Match Logic (rule-based, simple):**
```
IF supplier.category ∩ entrepreneur.neededCategory
AND supplier.region ∩ entrepreneur.region
AND supplier.MOQ_min <= entrepreneur.targetVolume
→ MATCH → notify both parties
```

**Notification channel:**
- เริ่มด้วย **email digest** (ง่าย, วัดได้, ไม่ต้องใช้ LINE API)
- วัด: notification → profile view rate >= 15% → ลงทุน LINE integration

**ข้อความ notification:**
```
[ซัพพลายเออร์]: "3 ผู้ประกอบการกำลังมองหา [category] ในภาคใต้ — ดูโปรไฟล์ของพวกเขา"
[ผู้ประกอบการ]: "เจอซัพพลายเออร์ใหม่ที่ตรงกับความต้องการของคุณ — ดูเลย"
```

### Phase 3 (Full Feature — เดือน 6+): Real-time + LINE + Ranking

- Real-time bidirectional matching
- **LINE notification** (ช่องทางหลักของ SME ไทย)
- **Match score** = category match + certification alignment + response rate
- **"Find Best Supplier"** ranking ตาม score + ความใหม่ + response rate

---

## Growth Loop (พร้อม Matching)

```
ผู้ประกอบการสมัคร → กรอก sourcing needs → ได้ badge Halal Workplace
         ↓
ระบบ invite ซัพพลายเออร์ที่ถูก mention → ซัพพลายเออร์ claim profile
         ↓
Phase 2: Auto-match notify → ทั้ง 2 ฝ่ายได้ประโยชน์จริง
         ↓
มุสลิมเคร่งเห็น badge บนเว็บบริษัท → เข้ามาหางาน (คนหางานตามมา)
         ↓
นักลงทุนเห็น verified businesses + active matching = platform น่าเชื่อถือ
         ↓
SELF-SUSTAINING ✓
```

---

## โมเดลธุรกิจ

### Phase 1: ฟรีทั้งหมด (เดือน 1–12) — เป้าหมาย: 150+ ธุรกิจที่ผ่านการ review

### Phase 2: Monetize หลัง Critical Mass

| ลำดับ | รายได้ | วิธี | ทำไมคนยอมจ่าย |
|---|---|---|---|
| 1 | **Premium Listing** | ฿500–1,500/เดือน | ขึ้นอันดับสูง, analytics |
| 2 | **Recruitment Fee** | 8–12% เงินเดือนเดือนแรก | จ่ายเมื่อจ้างได้จริง |
| 3 | **Review Renewal** | ฿3,000–8,000/ปี | ต่ออายุ badge |
| 4 | **Investor Matching** | 1–2% ของ deal | เมื่อ platform facilitate transaction ได้ |

---

## ความเสี่ยงที่ต้องระวัง

| ความเสี่ยง | วิธีป้องกัน |
|---|---|
| Match quality ต่ำ = spam | เริ่ม matching เมื่อมี 30+ suppliers เท่านั้น |
| Review credibility decay | เกณฑ์สาธารณะ + standard พอผ่านยากนิดนึง |
| Founder bottleneck | เขียน review process ให้ delegate ได้ตั้งแต่ต้น |
| Market size ceiling | Capital-light model ไม่ต้องการ VC scale |

---

## ไฟล์สำคัญที่ต้องสร้าง (Technical)

```
src/data/categoryTaxonomy.ts         — Halal B2B taxonomy (40-70 categories)
src/models/supplierProfile.ts        — schema รวม matching fields
src/models/entrepreneurProfile.ts   — schema รวม sourcing needs
src/services/matchingService.ts      — rule-based match logic (isolated)
src/services/notificationService.ts  — abstraction layer email/LINE
```

---

## ลำดับการ Execute

```
ก่อน Launch:
  - เขียนเกณฑ์คะแนน Bronze/Silver/Gold + taxonomy
  - ทดสอบ review กับ 5-10 บริษัทนำร่อง

เดือน 1-3:
  - Onboard ผู้ประกอบการ 100 ราย
  - Supplier listing ตาม (auto-invite)
  - Search/filter UI พร้อมใช้

เดือน 3-6:
  - เปิด auto-matching (email digest) เมื่อมี 30+ suppliers
  - คนหางานตามมาเอง → เพิ่ม job listing feature

เดือน 6-12:
  - LINE notification matching
  - นักลงทุนตามมา
  - เริ่ม monetize
```
