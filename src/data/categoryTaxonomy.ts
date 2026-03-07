export type CategoryGroup = {
  id: string
  label: string
  categories: Category[]
}

export type Category = {
  id: string
  label: string
  labelEn: string
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "food-ingredients",
    label: "วัตถุดิบอาหาร",
    categories: [
      { id: "meat-poultry", label: "เนื้อสัตว์และสัตว์ปีก", labelEn: "Meat & Poultry" },
      { id: "seafood", label: "อาหารทะเล", labelEn: "Seafood" },
      { id: "dairy", label: "ผลิตภัณฑ์นม", labelEn: "Dairy Products" },
      { id: "grains-flour", label: "ธัญพืชและแป้ง", labelEn: "Grains & Flour" },
      { id: "oils-fats", label: "น้ำมันและไขมัน", labelEn: "Oils & Fats" },
      { id: "spices-herbs", label: "เครื่องเทศและสมุนไพร", labelEn: "Spices & Herbs" },
      { id: "sugar-sweeteners", label: "น้ำตาลและสารให้ความหวาน", labelEn: "Sugar & Sweeteners" },
      { id: "sauces-condiments", label: "ซอสและเครื่องปรุง", labelEn: "Sauces & Condiments" },
      { id: "beverages-ingredients", label: "วัตถุดิบเครื่องดื่ม", labelEn: "Beverage Ingredients" },
      { id: "frozen-food", label: "อาหารแช่แข็ง", labelEn: "Frozen Food" },
      { id: "snacks-ready-to-eat", label: "ขนมและอาหารสำเร็จรูป", labelEn: "Snacks & Ready-to-Eat" },
    ],
  },
  {
    id: "packaging",
    label: "บรรจุภัณฑ์",
    categories: [
      { id: "plastic-packaging", label: "บรรจุภัณฑ์พลาสติก", labelEn: "Plastic Packaging" },
      { id: "paper-packaging", label: "บรรจุภัณฑ์กระดาษ", labelEn: "Paper Packaging" },
      { id: "glass-packaging", label: "บรรจุภัณฑ์แก้ว", labelEn: "Glass Packaging" },
      { id: "metal-cans", label: "กระป๋องโลหะ", labelEn: "Metal Cans" },
      { id: "flexible-packaging", label: "บรรจุภัณฑ์แบบยืดหยุ่น", labelEn: "Flexible Packaging" },
      { id: "eco-packaging", label: "บรรจุภัณฑ์รักษ์โลก", labelEn: "Eco Packaging" },
      { id: "labels-printing", label: "ฉลากและการพิมพ์", labelEn: "Labels & Printing" },
    ],
  },
  {
    id: "equipment-machinery",
    label: "เครื่องจักรและอุปกรณ์",
    categories: [
      { id: "food-processing", label: "เครื่องแปรรูปอาหาร", labelEn: "Food Processing Equipment" },
      { id: "kitchen-equipment", label: "อุปกรณ์ครัว", labelEn: "Kitchen Equipment" },
      { id: "refrigeration", label: "ระบบความเย็น", labelEn: "Refrigeration" },
      { id: "cleaning-sanitation", label: "อุปกรณ์ทำความสะอาด", labelEn: "Cleaning & Sanitation" },
      { id: "packing-machines", label: "เครื่องบรรจุภัณฑ์", labelEn: "Packing Machines" },
    ],
  },
  {
    id: "logistics",
    label: "โลจิสติกส์",
    categories: [
      { id: "cold-chain", label: "Cold Chain / ห้องเย็น", labelEn: "Cold Chain" },
      { id: "freight-transport", label: "ขนส่งสินค้า", labelEn: "Freight & Transport" },
      { id: "warehousing", label: "คลังสินค้า", labelEn: "Warehousing" },
      { id: "last-mile-delivery", label: "จัดส่งปลายทาง", labelEn: "Last-Mile Delivery" },
      { id: "import-export", label: "นำเข้า-ส่งออก", labelEn: "Import & Export" },
    ],
  },
  {
    id: "services",
    label: "บริการ",
    categories: [
      { id: "halal-certification", label: "บริการ Halal Certification", labelEn: "Halal Certification Service" },
      { id: "lab-testing", label: "ห้องแล็บ / ทดสอบคุณภาพ", labelEn: "Lab & Quality Testing" },
      { id: "consulting", label: "ที่ปรึกษาธุรกิจ Halal", labelEn: "Halal Business Consulting" },
      { id: "marketing-design", label: "การตลาดและออกแบบ", labelEn: "Marketing & Design" },
      { id: "it-software", label: "IT และซอฟต์แวร์", labelEn: "IT & Software" },
      { id: "financial-services", label: "บริการการเงิน (ไม่มีดอกเบี้ย)", labelEn: "Islamic Finance" },
      { id: "training-education", label: "อบรมและการศึกษา", labelEn: "Training & Education" },
    ],
  },
  {
    id: "cosmetics-personal-care",
    label: "เครื่องสำอางและดูแลร่างกาย",
    categories: [
      { id: "skincare", label: "ผลิตภัณฑ์บำรุงผิว", labelEn: "Skincare" },
      { id: "haircare", label: "ผลิตภัณฑ์ดูแลเส้นผม", labelEn: "Haircare" },
      { id: "personal-hygiene", label: "ผลิตภัณฑ์อนามัยส่วนตัว", labelEn: "Personal Hygiene" },
      { id: "fragrance", label: "น้ำหอม (ไม่มีแอลกอฮอล์)", labelEn: "Alcohol-Free Fragrance" },
    ],
  },
  {
    id: "fashion-textile",
    label: "แฟชั่นและสิ่งทอ",
    categories: [
      { id: "modest-fashion", label: "เสื้อผ้า Modest Fashion", labelEn: "Modest Fashion" },
      { id: "fabric-textile", label: "ผ้าและสิ่งทอ", labelEn: "Fabric & Textile" },
      { id: "accessories", label: "อุปกรณ์เสริม", labelEn: "Accessories" },
    ],
  },
  {
    id: "agriculture",
    label: "เกษตรกรรม",
    categories: [
      { id: "fresh-produce", label: "ผักและผลไม้สด", labelEn: "Fresh Produce" },
      { id: "livestock", label: "ปศุสัตว์", labelEn: "Livestock" },
      { id: "aquaculture", label: "การเพาะเลี้ยงสัตว์น้ำ", labelEn: "Aquaculture" },
      { id: "organic-products", label: "สินค้าออร์แกนิค", labelEn: "Organic Products" },
    ],
  },
]

export const ALL_CATEGORIES: Category[] = CATEGORY_GROUPS.flatMap((g) => g.categories)

export const THAI_PROVINCES = [
  "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร",
  "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท",
  "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง",
  "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม",
  "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส",
  "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์",
  "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พะเยา", "พังงา",
  "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์",
  "แพร่", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน",
  "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง",
  "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน", "เลย",
  "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ",
  "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี",
  "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย",
  "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์",
  "อุทัยธานี", "อุบลราชธานี",
]

export const REGIONS: Record<string, string[]> = {
  "ภาคเหนือ": ["เชียงใหม่", "เชียงราย", "น่าน", "พะเยา", "แพร่", "แม่ฮ่องสอน", "ลำปาง", "ลำพูน", "อุตรดิตถ์"],
  "ภาคกลาง": ["กรุงเทพมหานคร", "นนทบุรี", "ปทุมธานี", "สมุทรปราการ", "สมุทรสาคร", "สมุทรสงคราม", "นครปฐม", "สุพรรณบุรี", "กาญจนบุรี", "ราชบุรี", "เพชรบุรี", "ประจวบคีรีขันธ์"],
  "ภาคตะวันออก": ["ชลบุรี", "ระยอง", "จันทบุรี", "ตราด", "ฉะเชิงเทรา", "ปราจีนบุรี", "สระแก้ว"],
  "ภาคตะวันออกเฉียงเหนือ": ["นครราชสีมา", "ขอนแก่น", "อุดรธานี", "อุบลราชธานี", "นครพนม", "สกลนคร", "บึงกาฬ", "หนองคาย", "มุกดาหาร", "ร้อยเอ็ด", "กาฬสินธุ์", "มหาสารคาม", "ชัยภูมิ", "สุรินทร์", "บุรีรัมย์", "ศรีสะเกษ", "ยโสธร", "อำนาจเจริญ", "หนองบัวลำภู", "เลย"],
  "ภาคใต้": ["สงขลา", "นครศรีธรรมราช", "สุราษฎร์ธานี", "ภูเก็ต", "กระบี่", "ตรัง", "พัทลุง", "ปัตตานี", "ยะลา", "นราธิวาส", "สตูล", "ชุมพร", "ระนอง", "พังงา"],
}
