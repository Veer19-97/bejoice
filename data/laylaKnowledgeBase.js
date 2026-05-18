'use client';
/**
 * Layla RAG Knowledge Base — Sea Freight Orientation
 * Source: Bejoice Orientation – Sea Freight PDF (60 pages)
 * Each chunk: { id, topic, tags[], content }
 */

export const KNOWLEDGE_CHUNKS = [
  // ── LOGISTICS & FREIGHT FORWARDING ──────────────────────────
  {
    id: 'logistics-definition',
    topic: 'Logistics',
    tags: ['logistics', 'supply chain', 'freight', 'forwarding', 'what is logistics', 'definition', 'لوجستيات', 'شحن', 'لوجستي', 'ما هي اللوجستيات', 'شحن البضائع'],
    content: `**Logistics** is the process of planning, implementing, and controlling the efficient flow and storage of goods, services, and information from point of origin to point of consumption. It encompasses transportation, warehousing, inventory management, and customs clearance.\n\n**Freight Forwarding** is a service that organizes shipments for individuals or corporations to get goods from the manufacturer or producer to a market, customer, or final point of distribution. A freight forwarder acts as an intermediary between the shipper and transportation services — negotiating the best price, handling documentation, and ensuring regulatory compliance.`,
    contentAr: `**اللوجستيات** هي عملية التخطيط والتنفيذ والسيطرة على التدفق الفعّال للبضائع والخدمات والمعلومات من نقطة المنشأ إلى نقطة الاستهلاك. تشمل النقل والتخزين وإدارة المخزون والتخليص الجمركي.\n\n**الشحن والتوثيق (Freight Forwarding)** هي خدمة تنظيم شحن البضائع للأفراد والشركات من المصنّع أو المورّد إلى السوق أو العميل أو نقطة التوزيع النهائية. وكيل الشحن يعمل وسيطاً بين المُرسِل وخدمات النقل — يتفاوض على أفضل سعر ويتولى الوثائق ويضمن الامتثال للأنظمة.`,
  },
  {
    id: 'supply-chain',
    topic: 'Supply Chain',
    tags: ['supply chain', '3pl', 'third party logistics', 'logistics provider', 'outsource', 'سلسلة التوريد', 'لوجستيات الطرف الثالث', 'مزود لوجستي'],
    content: `**Supply Chain** is the network between a company and its suppliers to produce and distribute a specific product to the final buyer. It includes every step — from raw materials to the end consumer.\n\n**3PL (Third-Party Logistics):** Companies outsource logistics operations to a 3PL provider like Bejoice. A 3PL manages transportation, warehousing, customs clearance, and distribution — letting businesses focus on their core operations. Bejoice is a full 3PL provider serving Saudi Arabia and the wider GCC region.`,
    contentAr: `**سلسلة التوريد** هي الشبكة التي تربط الشركة بمورّديها لإنتاج وتوزيع منتج معين للمشتري النهائي. تشمل كل خطوة — من المواد الخام حتى المستهلك النهائي.\n\n**3PL (لوجستيات الطرف الثالث):** تعهّد الشركات بعمليات اللوجستيات لمزود 3PL مثل بيجويس. تدير شركة 3PL النقل والتخزين والتخليص الجمركي والتوزيع — مما يتيح للشركات التركيز على أعمالها الأساسية. بيجويس مزود 3PL متكامل يخدم المملكة العربية السعودية ومنطقة الخليج.`,
  },
  {
    id: 'parties-in-freight',
    topic: 'Parties in Freight',
    tags: ['consignee', 'shipper', 'notify party', 'carrier', 'freight forwarder', 'parties', 'who is', 'مُرسِل', 'مستلم', 'مُرسَل إليه', 'ناقل', 'وكيل شحن', 'أطراف الشحن'],
    content: `Key parties in a freight transaction:\n\n• **Shipper / Exporter** — The seller/sender who dispatches the cargo\n• **Consignee / Importer** — The buyer/receiver who takes delivery of the cargo\n• **Notify Party** — Third party (often the consignee's customs broker) notified when cargo arrives\n• **Carrier** — The shipping line or airline that physically transports the goods\n• **Freight Forwarder** — Intermediary that arranges the shipment (like Bejoice)\n• **Customs Broker** — Licensed agent who handles customs clearance on behalf of the importer`,
    contentAr: `الأطراف الرئيسية في عملية الشحن:\n\n• **المُرسِل / المُصدِّر** — البائع/المُرسِل الذي يشحن البضاعة\n• **المستلم / المستورد** — المشتري/المُستقبِل الذي يستلم البضاعة\n• **طرف الإشعار (Notify Party)** — طرف ثالث (غالباً وكيل الجمارك للمستلم) يُبلَّغ عند وصول البضاعة\n• **الناقل (Carrier)** — شركة الشحن أو شركة الطيران التي تنقل البضاعة فعلياً\n• **وكيل الشحن** — الوسيط الذي يرتّب الشحنة (مثل بيجويس)\n• **وكيل الجمارك** — وكيل مرخّص يتولى التخليص الجمركي نيابةً عن المستورد`,
  },

  // ── BILL OF LADING ──────────────────────────────────────────
  {
    id: 'bill-of-lading-basics',
    topic: 'Bill of Lading',
    tags: ['bill of lading', 'b/l', 'bl', 'mbl', 'hbl', 'house bill', 'master bill', 'obl', 'original bl', 'بوليصة الشحن', 'سند الشحن', 'بي ال', 'وثيقة الشحن'],
    content: `**Bill of Lading (B/L)** is the most important document in sea freight. It serves three purposes:\n1. **Receipt** — Confirms the carrier received the goods\n2. **Contract of Carriage** — Legal contract between shipper and carrier\n3. **Document of Title** — Whoever holds the original B/L owns the cargo\n\n**MBL (Master Bill of Lading):** Issued by the shipping line to the freight forwarder. The forwarder's name appears as the shipper.\n\n**HBL (House Bill of Lading):** Issued by the freight forwarder to the actual shipper/consignee. This is what the customer typically receives.\n\nFor Saudi imports, the original B/L (OBL) or a telex release / sea waybill is required to clear customs.`,
    contentAr: `**بوليصة الشحن (B/L)** هي أهم وثيقة في الشحن البحري. تؤدي ثلاثة أغراض:\n1. **إيصال الاستلام** — تؤكد أن الناقل استلم البضاعة\n2. **عقد النقل** — عقد قانوني بين المُرسِل والناقل\n3. **وثيقة ملكية** — من يحمل الأصل يملك البضاعة\n\n**MBL (بوليصة الشحن الرئيسية):** تُصدرها شركة الشحن لوكيل الشحن. يظهر اسم وكيل الشحن كمُرسِل.\n\n**HBL (بوليصة شحن البيت):** تُصدرها شركة الشحن (وكيل الشحن) للمُرسِل/المستلم الفعلي. هذا ما يستلمه العميل عادةً.\n\nللاستيراد إلى السعودية، يُطلب الأصل (OBL) أو إذن التلكس (Telex Release) أو Sea Waybill لإتمام التخليص الجمركي.`,
  },
  {
    id: 'bill-of-lading-types',
    topic: 'Bill of Lading Types',
    tags: ['telex release', 'sea waybill', 'express release', 'negotiable', 'non-negotiable', 'surrender', 'bl types', 'تلكس ريليس', 'أنواع بوليصة الشحن', 'قابلة للتداول'],
    content: `Types of Bill of Lading:\n\n• **Original B/L (OBL)** — Physical document; must be surrendered at destination to release cargo. Used for Letter of Credit shipments.\n• **Telex Release** — Shipper surrenders originals at origin; carrier sends electronic authorization to destination. No physical document needed.\n• **Sea Waybill** — Non-negotiable; consignee can collect without a physical document. Faster but cannot be used with Letters of Credit.\n• **Express Release** — Same as telex release, sometimes used interchangeably.\n\n**Negotiable B/L:** Can be transferred to a third party by endorsement — used in LC transactions.\n**Non-Negotiable B/L:** Issued to a named consignee only; cannot be transferred.`,
    contentAr: `أنواع بوليصة الشحن:\n\n• **الأصل (OBL)** — وثيقة ورقية؛ يجب تسليمها في الوجهة لاسترداد البضاعة. تُستخدم مع خطابات الاعتماد.\n• **Telex Release** — يسلّم المُرسِل الأصول في المنشأ؛ يُرسل الناقل تفويضاً إلكترونياً للوجهة. لا حاجة لوثيقة ورقية.\n• **Sea Waybill** — غير قابلة للتداول؛ يمكن للمستلم استلام البضاعة بدون وثيقة ورقية. أسرع لكن لا تُستخدم مع خطابات الاعتماد.\n• **Express Release** — مثل Telex Release، يُستخدمان بالتبادل أحياناً.\n\n**بوليصة قابلة للتداول:** يمكن نقلها لطرف ثالث بالتظهير — تُستخدم في معاملات خطابات الاعتماد.\n**بوليصة غير قابلة للتداول:** تُصدر باسم مستلم محدد فقط؛ لا يمكن نقلها.`,
  },

  // ── SHIPPING DOCUMENTS ──────────────────────────────────────
  {
    id: 'sea-freight-documents',
    topic: 'Sea Freight Documents',
    tags: ['documents', 'paperwork', 'commercial invoice', 'packing list', 'certificate of origin', 'what documents', 'required documents', 'وثائق الشحن', 'مستندات', 'فاتورة تجارية', 'قائمة التعبئة', 'شهادة منشأ', 'ما هي الوثائق المطلوبة'],
    content: `**Core sea freight documents:**\n\n1. **Bill of Lading (B/L)** — Contract of carriage and title document\n2. **Commercial Invoice** — States the value, description, and terms of sale\n3. **Packing List** — Details each package: weight, dimensions, contents\n4. **Certificate of Origin (COO)** — Declares where goods were manufactured; required for duty calculation\n5. **Bill of Entry** — Filed with Saudi Customs for import clearance\n6. **Delivery Order (DO)** — Issued by shipping line to allow cargo release from port\n7. **Equipment Interchange Receipt (EIR)** — Documents container handover at port\n8. **SABER Certificate** — Saudi conformity certificate for regulated products\n9. **SFDA Approval** — Required for food, pharmaceutical, and medical products\n10. **Dangerous Goods Declaration** — Required if cargo is hazardous (IMDG)\n11. **Import Permit** — Required for certain restricted goods\n12. **Insurance Certificate** — Proof of cargo insurance`,
    contentAr: `**وثائق الشحن البحري الأساسية:**\n\n1. **بوليصة الشحن (B/L)** — عقد النقل ووثيقة الملكية\n2. **الفاتورة التجارية** — تحدد القيمة والوصف وشروط البيع\n3. **قائمة التعبئة** — تفاصيل كل طرد: الوزن والأبعاد والمحتوى\n4. **شهادة المنشأ (COO)** — تُعلن بلد التصنيع؛ مطلوبة لاحتساب الرسوم الجمركية\n5. **البيان الجمركي (Bill of Entry)** — يُقدَّم لجمارك السعودية لإتمام التخليص\n6. **أمر التسليم (DO)** — تُصدره شركة الشحن للسماح بإطلاق البضاعة من الميناء\n7. **إيصال تبادل المعدات (EIR)** — يوثّق استلام الحاوية في الميناء\n8. **شهادة سابر (SABER)** — شهادة المطابقة السعودية للمنتجات الخاضعة للتنظيم\n9. **موافقة هيئة الغذاء والدواء (SFDA)** — مطلوبة للمنتجات الغذائية والصيدلانية والطبية\n10. **إعلان البضائع الخطرة** — مطلوب إذا كانت البضاعة خطرة (IMDG)\n11. **تصريح الاستيراد** — مطلوب لبعض البضائع المقيّدة\n12. **شهادة التأمين** — إثبات التأمين على البضاعة`,
  },
  {
    id: 'commercial-invoice-packing',
    topic: 'Commercial Invoice & Packing List',
    tags: ['commercial invoice', 'packing list', 'invoice', 'what is commercial invoice', 'value', 'فاتورة تجارية', 'قائمة التعبئة', 'الفاتورة', 'ما هي الفاتورة التجارية'],
    content: `**Commercial Invoice** — The primary document in any trade transaction. It must include:\n• Shipper and consignee details\n• Description of goods\n• HS Code (Harmonized System tariff code)\n• Unit price, quantity, total value\n• Currency\n• Country of origin\n• INCO Terms\n• Invoice number and date\n\n**Packing List** — Complements the invoice. Lists every box/package with:\n• Package number and type\n• Gross weight, net weight\n• Dimensions (L × W × H)\n• Contents per package\n\nBoth documents must match exactly — discrepancies cause customs delays.`,
    contentAr: `**الفاتورة التجارية** — الوثيقة الأساسية في أي معاملة تجارية. يجب أن تشمل:\n• بيانات المُرسِل والمستلم\n• وصف البضاعة\n• رمز النظام المنسق (HS Code)\n• سعر الوحدة والكمية والإجمالي\n• العملة\n• بلد المنشأ\n• شروط الإنكوترمز\n• رقم الفاتورة وتاريخها\n\n**قائمة التعبئة** — مكمّلة للفاتورة. تسرد كل صندوق/طرد مع:\n• رقم الطرد ونوعه\n• الوزن الإجمالي والصافي\n• الأبعاد (الطول × العرض × الارتفاع)\n• محتويات كل طرد\n\nيجب أن تتطابق الوثيقتان تماماً — أي تناقض يتسبب في تأخير جمركي.`,
  },

  // ── CUSTOMS ─────────────────────────────────────────────────
  {
    id: 'customs-clearance',
    topic: 'Customs Clearance',
    tags: ['customs', 'customs clearance', 'customs broker', 'zatca', 'import duty', 'tariff', 'hs code', 'duty', 'تخليص جمركي', 'جمارك', 'رسوم جمركية', 'الجمارك السعودية', 'زاتكا'],
    content: `**Customs Clearance** is the process of getting permission from the government to import or export goods. In Saudi Arabia, customs is regulated by **ZATCA** (Zakat, Tax & Customs Authority).\n\nSteps for Saudi import customs clearance:\n1. Arrival of vessel at Saudi port (Jeddah, Dammam, etc.)\n2. Customs broker files **Bill of Entry** via Fasah system\n3. ZATCA reviews documents and HS codes\n4. Duty and VAT assessment (5% VAT + import duty by HS code)\n5. Physical inspection (if flagged)\n6. Duty payment\n7. Release order issued\n8. Cargo collected from port\n\nBejoice holds **AEO (Authorized Economic Operator)** status, enabling faster clearance and priority lanes at Saudi ports.`,
    contentAr: `**التخليص الجمركي** هو عملية الحصول على إذن حكومي لاستيراد أو تصدير البضائع. في المملكة العربية السعودية، تشرف على الجمارك **هيئة الزكاة والضريبة والجمارك (زاتكا)**.\n\nخطوات التخليص الجمركي للاستيراد في السعودية:\n1. وصول السفينة إلى الميناء السعودي (جدة أو الدمام...)\n2. يقدّم وكيل الجمارك **البيان الجمركي** عبر منصة فسح\n3. زاتكا تراجع الوثائق ورموز النظام المنسق\n4. تقييم الرسوم الجمركية وضريبة القيمة المضافة (15% + رسوم حسب الرمز الجمركي)\n5. الفحص المادي (عند الإشارة)\n6. سداد الرسوم الجمركية\n7. إصدار أمر الإفراج\n8. استلام البضاعة من الميناء\n\nبيجويس تحمل شهادة **AEO (المشغّل الاقتصادي المعتمد)** مما يتيح تخليصاً أسرع ومسارات أولوية في الموانئ السعودية.`,
  },
  {
    id: 'hs-codes',
    topic: 'HS Codes',
    tags: ['hs code', 'harmonized system', 'tariff code', 'commodity code', 'classification', 'رمز جمركي', 'النظام المنسق', 'رمز التعريفة', 'تصنيف جمركي'],
    content: `**HS Code (Harmonized System Code)** is a 6–10 digit international code that classifies every traded product. Saudi Customs uses HS codes to determine:\n• Import duty rate\n• Whether a product requires special permits or certifications\n• Statistical tracking\n\nThe first 6 digits are international standard; Saudi Arabia adds additional digits for local specificity. Incorrect HS codes lead to wrong duties, delays, or seizure of cargo.\n\nBejoice's customs team reviews and verifies all HS codes before filing to prevent costly errors.`,
    contentAr: `**رمز النظام المنسق (HS Code)** هو رمز دولي من 6–10 أرقام يصنّف كل منتج مُتداوَل. تستخدمه جمارك السعودية لتحديد:\n• معدل الرسوم الجمركية\n• ما إذا كان المنتج يستلزم تصاريح أو شهادات خاصة\n• التتبع الإحصائي\n\nالأرقام الستة الأولى معيار دولي؛ وتُضيف السعودية أرقاماً إضافية للخصوصية المحلية. الأرقام الخاطئة تؤدي إلى رسوم خاطئة أو تأخيرات أو مصادرة البضاعة.\n\nفريق الجمارك في بيجويس يراجع ويتحقق من جميع رموز HS قبل التقديم لتجنب الأخطاء المكلفة.`,
  },

  // ── CONTAINERISATION ─────────────────────────────────────────
  {
    id: 'fcl-lcl',
    topic: 'FCL vs LCL',
    tags: ['fcl', 'lcl', 'full container', 'less than container', 'container load', 'consolidation', 'groupage', 'حاوية كاملة', 'شحن مجمّع', 'حمولة أقل من حاوية', 'حاوية مشتركة'],
    content: `**FCL (Full Container Load):** You rent the entire container exclusively for your cargo. The container goes from shipper to consignee without being opened.\n• Best for: cargo ≥ 15 CBM, high-value goods, dangerous goods, fragile items\n• Faster transit, lower risk of damage, more cost-effective per CBM at volume\n\n**LCL (Less than Container Load):** Your cargo shares a container with other shippers' cargo. Also called "groupage" or "consolidation."\n• Best for: cargo < 15 CBM, small shipments, testing new markets\n• Charged per CBM (cubic metre) or per tonne — whichever is higher\n• Additional handling = slightly higher damage risk\n• Transit may be longer due to consolidation/deconsolidation\n\nAs a rule of thumb: if your cargo is over 15 CBM, FCL is usually more cost-effective.`,
    contentAr: `**FCL (حاوية كاملة):** تستأجر الحاوية بالكامل حصرياً لبضاعتك. تنتقل الحاوية من المُرسِل إلى المستلم دون فتحها.\n• الأفضل لـ: بضاعة ≥ 15 م³، بضائع عالية القيمة، بضائع خطرة، بضائع هشّة\n• عبور أسرع، مخاطر تلف أقل، أكثر اقتصادية لكل م³ عند الحجوم الكبيرة\n\n**LCL (أقل من حاوية كاملة):** بضاعتك تشارك الحاوية مع بضائع مُرسِلين آخرين. يُسمى أيضاً "شحن مجمّع".\n• الأفضل لـ: بضاعة < 15 م³، شحنات صغيرة، تجربة أسواق جديدة\n• يُحسب بالمتر المكعب (م³) أو بالطن — أيهما أعلى\n• المناولة الإضافية = مخاطر تلف أعلى قليلاً\n• قد يكون العبور أطول بسبب التجميع والفصل\n\nكقاعدة عامة: إذا تجاوزت بضاعتك 15 م³، فإن FCL أكثر اقتصادية في الغالب.`,
  },
  {
    id: 'container-types',
    topic: 'Container Types',
    tags: ['container types', 'dry van', 'reefer', 'flat rack', 'open top', 'tank container', 'roro', 'container specifications', '20ft', '40ft', 'high cube', 'dimensions', 'أنواع الحاويات', 'حاوية مبردة', 'حاوية مفتوحة', 'حاوية مسطحة', 'حاوية خزان', 'مواصفات الحاوية'],
    content: `**Standard Container Types:**\n\n🔲 **Dry Van (GP)** — General purpose, enclosed box\n• 20ft: 5.9m L × 2.35m W × 2.39m H | 33.2 m³ capacity | 21,700 kg max cargo\n• 40ft: 12.03m L × 2.35m W × 2.39m H | 67.7 m³ capacity | 26,780 kg max cargo\n• 40ft HC: 12.03m L × 2.35m W × 2.69m H | 76.4 m³ capacity | 26,460 kg max cargo\n\n❄️ **Reefer** — Temperature-controlled (-25°C to +25°C)\n• Used for: perishables, pharma, chemicals, food\n• 20ft and 40ft sizes available\n\n🏗️ **Flat Rack** — No walls or roof, collapsible sides\n• Used for: heavy machinery, vehicles, oversized cargo, project cargo\n\n🔓 **Open Top** — No roof, tarpaulin cover\n• Used for: tall cargo exceeding standard height (cranes, pipes, coils)\n\n🛢️ **Tank Container** — For liquids and gases (chemicals, wine, food-grade)\n\n🚗 **RoRo (Roll-on/Roll-off)** — Vehicles and wheeled cargo driven on/off the vessel`,
    contentAr: `**أنواع الحاويات القياسية:**\n\n🔲 **حاوية جافة (GP)** — صندوق مغلق للاستخدام العام\n• 20 قدم: 5.9م ط × 2.35م ع × 2.39م ار | سعة 33.2 م³ | 21,700 كجم أقصى حمولة\n• 40 قدم: 12.03م ط × 2.35م ع × 2.39م ار | سعة 67.7 م³ | 26,780 كجم أقصى حمولة\n• 40 قدم HC: 12.03م ط × 2.35م ع × 2.69م ار | سعة 76.4 م³ | 26,460 كجم أقصى حمولة\n\n❄️ **حاوية مبردة (Reefer)** — تتحكم في درجة الحرارة (من -25°م إلى +25°م)\n• تُستخدم لـ: البضائع القابلة للتلف، الأدوية، المواد الكيميائية، الأغذية\n• متاحة بمقاسَي 20 و40 قدم\n\n🏗️ **حاوية مسطحة (Flat Rack)** — بدون جدران أو سقف، جوانب قابلة للطي\n• تُستخدم لـ: الآلات الثقيلة، المركبات، البضائع كبيرة الحجم، شحنات المشاريع\n\n🔓 **حاوية مفتوحة الأعلى (Open Top)** — بدون سقف، مغطاة بقماش مشمّع\n• تُستخدم لـ: البضائع الطويلة التي تتجاوز الارتفاع القياسي (رافعات، أنابيب، ملفات)\n\n🛢️ **حاوية خزان (Tank)** — للسوائل والغازات (مواد كيميائية، نبيذ، أغذية)\n\n🚗 **RoRo (دخول وخروج بالتدحرج)** — المركبات والبضائع ذات العجلات تُحمَّل وتُفرَّغ بالقيادة`,
  },
  {
    id: 'container-sizes',
    topic: 'Container Dimensions',
    tags: ['container dimensions', '20ft dimensions', '40ft dimensions', 'high cube dimensions', 'cbm', 'container capacity', 'container weight', 'أبعاد الحاوية', 'حجم الحاوية', 'سعة الحاوية'],
    content: `**Container Internal Dimensions & Capacities:**\n\n| Type | Internal L | Internal W | Internal H | Volume | Max Cargo |
|------|-----------|-----------|-----------|--------|-----------|
| 20ft Dry | 5.90m | 2.35m | 2.39m | 33.2 m³ | 21,700 kg |
| 40ft Dry | 12.03m | 2.35m | 2.39m | 67.7 m³ | 26,780 kg |
| 40ft HC | 12.03m | 2.35m | 2.69m | 76.4 m³ | 26,460 kg |
| 20ft Reefer | 5.49m | 2.27m | 2.25m | 28.2 m³ | 21,600 kg |
| 40ft Reefer | 11.58m | 2.28m | 2.27m | 59.8 m³ | 26,680 kg |\n\n**Choosing the right size:** Under 25 CBM → 20ft. Over 25 CBM → 40ft. Tall items → 40HC. Temperature-sensitive → Reefer. Oversized → Flat Rack or Open Top.`,
    contentAr: `**الأبعاد الداخلية وسعات الحاويات:**\n\n| النوع | الطول الداخلي | العرض الداخلي | الارتفاع الداخلي | الحجم | أقصى حمولة |\n|-------|-------------|-------------|---------------|------|----------|\n| 20 قدم جاف | 5.90م | 2.35م | 2.39م | 33.2 م³ | 21,700 كجم |\n| 40 قدم جاف | 12.03م | 2.35م | 2.39م | 67.7 م³ | 26,780 كجم |\n| 40 قدم HC | 12.03م | 2.35م | 2.69م | 76.4 م³ | 26,460 كجم |\n| 20 قدم مبرد | 5.49م | 2.27م | 2.25م | 28.2 م³ | 21,600 كجم |\n| 40 قدم مبرد | 11.58م | 2.28م | 2.27م | 59.8 م³ | 26,680 كجم |\n\n**اختيار الحجم المناسب:** أقل من 25 م³ → 20 قدم. أكثر من 25 م³ → 40 قدم. بضائع طويلة → 40HC. حساس للحرارة → مبرد. كبير الحجم → مسطحة أو مفتوحة الأعلى.`,
  },

  // ── DEMURRAGE & DETENTION ───────────────────────────────────
  {
    id: 'demurrage-detention-definition',
    topic: 'Demurrage & Detention',
    tags: ['demurrage', 'detention', 'free days', 'per diem', 'port charges', 'storage', 'delay charges', 'غرامة التأخير', 'رسوم الاحتجاز', 'أيام مجانية', 'رسوم الميناء', 'ديمورج', 'ديتنشن'],
    content: `**Demurrage** — Charged by the shipping line when the importer doesn't collect/clear the cargo from the **port/terminal** within the free days allowed.\n• It's a container occupancy charge at the port\n• Free days: typically 3–7 days at Saudi ports after vessel arrival\n• After free days: charged per container per day\n\n**Detention** — Charged when the importer doesn't return the empty container to the shipping line's depot within the free days after picking it up from port.\n• Free days for return: typically 5–14 days\n• After free days: charged per container per day\n\nKey difference: **Demurrage = container sitting at port. Detention = empty container not returned.**\n\nBoth charges can escalate quickly. Bejoice monitors free day expiry and proactively alerts clients to avoid unnecessary costs.`,
    contentAr: `**رسوم الاحتجاز في الميناء (Demurrage)** — تُفرضها شركة الشحن عندما لا يُخلّص المستورد البضاعة من **الميناء/المحطة** خلال الأيام المجانية المسموح بها.\n• رسوم إشغال حاوية في الميناء\n• الأيام المجانية: عادةً 3–7 أيام في الموانئ السعودية بعد وصول السفينة\n• بعد الأيام المجانية: رسوم يومية لكل حاوية\n\n**رسوم الاحتجاز خارج الميناء (Detention)** — تُفرض عندما لا يُعيد المستورد الحاوية الفارغة إلى مستودع شركة الشحن خلال الأيام المجانية بعد استلامها من الميناء.\n• الأيام المجانية للإعادة: عادةً 5–14 يوماً\n• بعد الأيام المجانية: رسوم يومية لكل حاوية\n\nالفرق الجوهري: **Demurrage = الحاوية راسية في الميناء. Detention = الحاوية الفارغة لم تُعَد.**\n\nكلا الرسمين قد يتصاعد بسرعة. بيجويس تراقب انتهاء الأيام المجانية وتُنبّه العملاء مسبقاً لتجنب التكاليف غير الضرورية.`,
  },
  {
    id: 'demurrage-rates-ksa',
    topic: 'Saudi Arabia Demurrage Rates',
    tags: ['demurrage rates', 'saudi demurrage', 'jeddah demurrage', 'dammam demurrage', 'ksa port charges', 'port charges saudi', 'ksa demurrage', 'رسوم التأخير السعودية', 'ديمورج السعودية', 'رسوم ميناء جدة', 'رسوم ميناء الدمام'],
    content: `**Saudi Arabia Port Demurrage (Official Rates from Bejoice Orientation):**\n\n• Free time: **5 days** to clear cargo from port premises\n• If Bayan (Import Entry) is NOT filed within **3 days of vessel arrival** → demurrage starts from vessel arrival date\n• Demurrage rate: **SAR 20 per day per gross tonne** (including container tare weight)\n• Charged directly by port authorities (not shipping line)\n\nExample: A 20ft container with 20 gross tonnes × SAR 20/day = SAR 400/day after free days.\n\nBejoice average customs clearance: 1–3 days, well within the 5-day free period. Bejoice holds AEO status for priority clearance lanes.`,
    contentAr: `**رسوم الاحتجاز في الموانئ السعودية (الأسعار الرسمية من دليل بيجويس):**\n\n• الفترة المجانية: **5 أيام** لتخليص البضاعة من مبنى الميناء\n• إذا لم يُقدَّم البيان الجمركي خلال **3 أيام من وصول السفينة** → تبدأ رسوم الاحتجاز من تاريخ الوصول\n• معدل الرسوم: **20 ريال سعودي في اليوم لكل طن إجمالي** (بما في ذلك وزن الحاوية الفارغة)\n• تُفرض مباشرة من قِبل سلطات الميناء (وليس شركة الشحن)\n\nمثال: حاوية 20 قدم بوزن إجمالي 20 طن × 20 ريال/يوم = **400 ريال/يوم** بعد انتهاء الفترة المجانية.\n\nمتوسط وقت التخليص الجمركي لدى بيجويس: 1–3 أيام، ضمن الفترة المجانية البالغة 5 أيام. بيجويس تحمل شهادة AEO لمسارات الأولوية.`,
  },
  {
    id: 'demurrage-rates-uae',
    topic: 'UAE Demurrage Rates',
    tags: ['uae demurrage', 'dubai demurrage', 'jebel ali demurrage', 'abu dhabi demurrage', 'uae port charges', 'aed demurrage', 'ديمورج الإمارات', 'رسوم ميناء دبي', 'رسوم جبل علي'],
    content: `**UAE Port Demurrage — Official Tariff (AED per container per day):**\n\nFree Time: Dry = 5 days | Flat/Open Top = 3 days | Reefer = 3 days | IMO = 3 days\n\n**Standard (Dry Containers):**\n• Days 6–9: 20ft = 80 AED | 40ft/45ft = 160 AED\n• Days 10–18: 20ft = 160 AED | 40ft/45ft = 320 AED\n• Day 19+: 20ft = 320 AED | 40ft/45ft = 640 AED\n\n**Reefer:**\n• Days 4–7: 20ft = 200 AED | 40ft = 400 AED\n• Days 8–15: 20ft = 400 AED | 40ft = 800 AED\n• Day 16+: 20ft = 800 AED | 40ft = 1,600 AED\n\n**Flat Rack / Open Top:**\n• Days 4–7: 20ft = 100 AED | 40ft = 150 AED\n• Days 8–15: 20ft = 200 AED | 40ft = 300 AED\n• Day 16+: 20ft = 300 AED | 40ft = 600 AED\n\n**IMO (Dangerous Goods):**\n• Days 4–7: 20ft = 80 AED | 40ft = 160 AED\n• Days 8–15: 20ft = 160 AED | 40ft = 320 AED\n• Day 16+: 20ft = 320 AED | 40ft = 640 AED`,
    contentAr: `**رسوم احتجاز موانئ الإمارات — التعريفة الرسمية (درهم إماراتي/حاوية/يوم):**\n\nالفترة المجانية: جاف = 5 أيام | مسطحة/مفتوحة = 3 أيام | مبردة = 3 أيام | خطرة = 3 أيام\n\n**حاويات جافة قياسية:**\n• أيام 6–9: 20 قدم = 80 درهم | 40/45 قدم = 160 درهم\n• أيام 10–18: 20 قدم = 160 درهم | 40/45 قدم = 320 درهم\n• يوم 19 فأكثر: 20 قدم = 320 درهم | 40/45 قدم = 640 درهم\n\n**حاويات مبردة:**\n• أيام 4–7: 20 قدم = 200 درهم | 40 قدم = 400 درهم\n• أيام 8–15: 20 قدم = 400 درهم | 40 قدم = 800 درهم\n• يوم 16 فأكثر: 20 قدم = 800 درهم | 40 قدم = 1,600 درهم\n\n**حاويات مسطحة/مفتوحة الأعلى:**\n• أيام 4–7: 20 قدم = 100 درهم | 40 قدم = 150 درهم\n• أيام 8–15: 20 قدم = 200 درهم | 40 قدم = 300 درهم\n• يوم 16 فأكثر: 20 قدم = 300 درهم | 40 قدم = 600 درهم\n\n**بضائع خطرة (IMO):**\n• أيام 4–7: 20 قدم = 80 درهم | 40 قدم = 160 درهم\n• أيام 8–15: 20 قدم = 160 درهم | 40 قدم = 320 درهم\n• يوم 16 فأكثر: 20 قدم = 320 درهم | 40 قدم = 640 درهم`,
  },
  {
    id: 'demurrage-rates-oman',
    topic: 'Oman Demurrage Rates',
    tags: ['oman demurrage', 'muscat demurrage', 'salalah demurrage', 'oman port charges', 'omr demurrage', 'ديمورج عُمان', 'رسوم ميناء مسقط', 'رسوم ميناء صلالة'],
    content: `**Oman Port Demurrage — Official Tariff (OMR per container per day):**\n\nFree Time: Dry = 5 days | Flat/Open Top = 3 days | Reefer = 3 days | IMO = 3 days\n\n**Standard (Dry Containers):**\n• Days 6–9: 20ft = 8 OMR | 40ft/45ft = 16 OMR\n• Days 10–18: 20ft = 16 OMR | 40ft/45ft = 32 OMR\n• Day 19+: 20ft = 32 OMR | 40ft/45ft = 64 OMR\n\n**Reefer:**\n• Days 4–7: 20ft = 20 OMR | 40ft = 40 OMR\n• Days 8–15: 20ft = 40 OMR | 40ft = 80 OMR\n• Day 16+: 20ft = 80 OMR | 40ft = 160 OMR\n\n**Flat Rack / Open Top:**\n• Days 4–7: 20ft = 15 OMR | 40ft = 30 OMR\n• Days 8–15: 20ft = 30 OMR | 40ft = 60 OMR\n• Day 16+: 20ft = 60 OMR | 40ft = 120 OMR\n\n**IMO (Dangerous Goods):**\n• Days 4–7: 20ft = 8 OMR | 40ft = 16 OMR\n• Days 8–15: 20ft = 16 OMR | 40ft = 32 OMR\n• Day 16+: 20ft = 32 OMR | 40ft = 64 OMR`,
    contentAr: `**رسوم احتجاز موانئ عُمان — التعريفة الرسمية (ريال عُماني/حاوية/يوم):**\n\nالفترة المجانية: جاف = 5 أيام | مسطحة/مفتوحة = 3 أيام | مبردة = 3 أيام | خطرة = 3 أيام\n\n**حاويات جافة قياسية:**\n• أيام 6–9: 20 قدم = 8 ر.ع | 40/45 قدم = 16 ر.ع\n• أيام 10–18: 20 قدم = 16 ر.ع | 40/45 قدم = 32 ر.ع\n• يوم 19 فأكثر: 20 قدم = 32 ر.ع | 40/45 قدم = 64 ر.ع\n\n**حاويات مبردة:**\n• أيام 4–7: 20 قدم = 20 ر.ع | 40 قدم = 40 ر.ع\n• أيام 8–15: 20 قدم = 40 ر.ع | 40 قدم = 80 ر.ع\n• يوم 16 فأكثر: 20 قدم = 80 ر.ع | 40 قدم = 160 ر.ع\n\n**حاويات مسطحة/مفتوحة الأعلى:**\n• أيام 4–7: 20 قدم = 15 ر.ع | 40 قدم = 30 ر.ع\n• أيام 8–15: 20 قدم = 30 ر.ع | 40 قدم = 60 ر.ع\n• يوم 16 فأكثر: 20 قدم = 60 ر.ع | 40 قدم = 120 ر.ع\n\n**بضائع خطرة (IMO):**\n• أيام 4–7: 20 قدم = 8 ر.ع | 40 قدم = 16 ر.ع\n• أيام 8–15: 20 قدم = 16 ر.ع | 40 قدم = 32 ر.ع\n• يوم 16 فأكثر: 20 قدم = 32 ر.ع | 40 قدم = 64 ر.ع`,
  },
  {
    id: 'demurrage-rates-qatar',
    topic: 'Qatar Demurrage Rates',
    tags: ['qatar demurrage', 'doha demurrage', 'hamad port demurrage', 'qatar port charges', 'qar demurrage', 'gcc demurrage', 'ديمورج قطر', 'رسوم ميناء حمد', 'رسوم ميناء الدوحة'],
    content: `**Qatar Port Demurrage — Official Tariff (QAR per container per day):**\n\nFree Time: Dry = 5 days | Flat/Open Top = 3 days | Reefer = 3 days | IMO = 3 days\n\n**Standard (Dry Containers):**\n• Days 6–9: 20ft = 80 QAR | 40ft/45ft = 160 QAR\n• Days 10–18: 20ft = 160 QAR | 40ft/45ft = 320 QAR\n• Day 19+: 20ft = 320 QAR | 40ft/45ft = 640 QAR\n\n**Reefer:**\n• Days 4–7: 20ft = 200 QAR | 40ft = 400 QAR\n• Days 8–15: 20ft = 400 QAR | 40ft = 800 QAR\n• Day 16+: 20ft = 800 QAR | 40ft = 1,600 QAR\n\n**Flat Rack / Open Top:**\n• Days 4–7: 20ft = 100 QAR | 40ft = 200 QAR\n• Days 8–15: 20ft = 200 QAR | 40ft = 400 QAR\n• Day 16+: 20ft = 400 QAR | 40ft = 800 QAR\n\n**IMO (Dangerous Goods):**\n• Days 4–7: 20ft = 80 QAR | 40ft = 160 QAR\n• Days 8–15: 20ft = 160 QAR | 40ft = 320 QAR\n• Day 16+: 20ft = 320 QAR | 40ft = 640 QAR`,
    contentAr: `**رسوم احتجاز موانئ قطر — التعريفة الرسمية (ريال قطري/حاوية/يوم):**\n\nالفترة المجانية: جاف = 5 أيام | مسطحة/مفتوحة = 3 أيام | مبردة = 3 أيام | خطرة = 3 أيام\n\n**حاويات جافة قياسية:**\n• أيام 6–9: 20 قدم = 80 ر.ق | 40/45 قدم = 160 ر.ق\n• أيام 10–18: 20 قدم = 160 ر.ق | 40/45 قدم = 320 ر.ق\n• يوم 19 فأكثر: 20 قدم = 320 ر.ق | 40/45 قدم = 640 ر.ق\n\n**حاويات مبردة:**\n• أيام 4–7: 20 قدم = 200 ر.ق | 40 قدم = 400 ر.ق\n• أيام 8–15: 20 قدم = 400 ر.ق | 40 قدم = 800 ر.ق\n• يوم 16 فأكثر: 20 قدم = 800 ر.ق | 40 قدم = 1,600 ر.ق\n\n**حاويات مسطحة/مفتوحة الأعلى:**\n• أيام 4–7: 20 قدم = 100 ر.ق | 40 قدم = 200 ر.ق\n• أيام 8–15: 20 قدم = 200 ر.ق | 40 قدم = 400 ر.ق\n• يوم 16 فأكثر: 20 قدم = 400 ر.ق | 40 قدم = 800 ر.ق\n\n**بضائع خطرة (IMO):**\n• أيام 4–7: 20 قدم = 80 ر.ق | 40 قدم = 160 ر.ق\n• أيام 8–15: 20 قدم = 160 ر.ق | 40 قدم = 320 ر.ق\n• يوم 16 فأكثر: 20 قدم = 320 ر.ق | 40 قدم = 640 ر.ق`,
  },

  {
    id: 'detention-detail',
    topic: 'Detention Charges',
    tags: ['detention', 'empty container return', 'container return', 'detention charges', 'per diem', 'free days detention', 'export detention', 'import detention', 'إعادة حاوية فارغة', 'رسوم الاحتجاز الخارجي', 'ديتنشن استيراد', 'ديتنشن تصدير'],
    content: `**Detention** is charged by the shipping line when the consignee delays returning the empty container to the operator's depot/yard after the allocated free time.\n\n**Import Detention:** Container is picked up from port. Consignee must unload and return the empty container within free days.\n• Typical free days: 5–7 days after gate-out from port\n• Once free days lapse, detention is charged per day until empty container is returned\n\n**Export Detention:** Container is dispatched/picked up for loading. If not returned to port and loaded onto vessel within allocated time, detention is charged.\n• Typical free days: 5 days for pick-up, loading, and returning to port\n• Counts from container pick-up until vessel loading\n\n**Key distinction from Demurrage:**\n• Demurrage = container sitting AT the PORT (not yet picked up)\n• Detention = container is OUTSIDE the port, with consignee/shipper\n\nBejoice tracks both demurrage and detention free days on every shipment and sends early warning alerts 48 hours before expiry.`,
    contentAr: `**رسوم الاحتجاز الخارجي (Detention)** تُفرض من شركة الشحن عندما يتأخر المستلم في إعادة الحاوية الفارغة إلى مستودع الشركة بعد انتهاء الوقت المخصص.\n\n**احتجاز الاستيراد:** يستلم المستلم الحاوية من الميناء. يجب عليه تفريغها وإعادتها فارغة خلال الأيام المجانية.\n• الأيام المجانية المعتادة: 5–7 أيام بعد الخروج من الميناء\n• بعد انتهائها، تُفرض رسوم يومية حتى إعادة الحاوية الفارغة\n\n**احتجاز التصدير:** تُسحب الحاوية للتحميل. إذا لم تُعَد للميناء وتُحمَّل على السفينة خلال المهلة المحددة، تُفرض رسوم.\n• الأيام المجانية المعتادة: 5 أيام للسحب والتحميل والإعادة للميناء\n• تُحتسب من سحب الحاوية حتى التحميل على السفينة\n\n**الفرق الجوهري عن Demurrage:**\n• Demurrage = الحاوية داخل الميناء (لم تُستلم بعد)\n• Detention = الحاوية خارج الميناء، لدى المستلم أو المُرسِل\n\nبيجويس تتابع الأيام المجانية لكلٍّ من Demurrage وDetention في كل شحنة وتُرسل تنبيهات مبكرة قبل 48 ساعة من انتهائها.`,
  },
  {
    id: 'sea-import-procedure-detailed',
    topic: 'Sea Import Procedure Detailed',
    tags: ['sea import steps', 'import procedure', 'freight process steps', 'how to ship', 'shipment process', 'bl instructions', 'arrival notice', 'pre-alert', 'خطوات الاستيراد البحري', 'إجراءات الاستيراد', 'كيف يتم الشحن', 'إشعار الوصول'],
    content: `**Bejoice Sea Import Procedure — Detailed Steps:**\n\n1. Client sends cargo inquiry to Bejoice sales\n2. Operations checks rates; prepares quotation (ocean freight + charges + customs)\n3. Client confirms; Sales Coordinator acknowledges and provides: agent details, vessel schedule, carrier details\n4. **Job Opening:** Sea Import job opened in system; shipment tracked daily\n5. **If cargo ready:** Bejoice follows up for vessel schedule and booking confirmation\n6. **BL Instructions** sent to origin agent once booking confirmed\n7. **EXW Terms:** If Ex-Works, Bejoice arranges loading/pick-up at seller's factory\n8. Bejoice checks shipment sailed as per schedule; updates customer\n9. **Draft Documents:** Bejoice follows up for draft HBL/MBL; sends HBL copy to consignee\n10. **Document Check:** Bejoice compares HBL vs MBL — container numbers, weight, volume, description must match\n11. **Pre-alert Docs:** Final MBL/HBL + agent invoice (debit note) received\n12. **Invoice Check:** Buy rate vs sell rate verified for accuracy\n13. **MBL Status Check:** Original / SWB / Telex / Surrender / Express\n14. **Freight Collect:** If MBL is Freight Collect, Bejoice arranges payment at least 3 days before vessel arrival\n15. **Shipment Tracking:** Every 3 days; transshipment ports monitored closely\n16. **Arrival Notice:** Sent to customer 3 days before vessel arrival with HBL copy attached\n17. **Customs Clearance:** Bill of Entry filed via Fasah; duties paid\n18. **Delivery Order (DO):** Issued by shipping line after freight payment\n19. **Port Collection:** Cargo collected and delivered to client's warehouse`,
    contentAr: `**إجراءات الاستيراد البحري لدى بيجويس — الخطوات التفصيلية:**\n\n1. يُرسل العميل استفساراً عن البضاعة لفريق مبيعات بيجويس\n2. العمليات تتحقق من الأسعار وتُعد عرض سعر (شحن بحري + رسوم + جمارك)\n3. العميل يؤكد؛ منسق المبيعات يُقرّ ويُزوّد بـ: تفاصيل الوكيل، جدول السفينة، تفاصيل الناقل\n4. **فتح الملف:** يُفتح ملف الاستيراد البحري في النظام ويُتابع الشحن يومياً\n5. **عند جاهزية البضاعة:** بيجويس تتابع جدول السفينة وتأكيد الحجز\n6. **تعليمات البوليصة** تُرسل لوكيل المنشأ بعد تأكيد الحجز\n7. **شروط EXW:** إذا كانت الشروط Ex-Works، ترتّب بيجويس التحميل/الاستلام من مصنع البائع\n8. بيجويس تتحقق من إبحار الشحنة وفق الجدول وتُحدّث العميل\n9. **الوثائق المسودة:** بيجويس تتابع مسودة HBL/MBL وترسل نسخة HBL للمستلم\n10. **مراجعة الوثائق:** بيجويس تقارن HBL بـ MBL — أرقام الحاويات والوزن والحجم والوصف يجب أن تتطابق\n11. **وثائق الإشعار المسبق:** استلام MBL/HBL النهائية + فاتورة الوكيل\n12. **مراجعة الفاتورة:** التحقق من دقة سعر الشراء مقابل سعر البيع\n13. **فحص حالة MBL:** أصلية / SWB / تلكس / مُسلَّمة / Express\n14. **الشحن Freight Collect:** إذا كانت المبلغ على المستلم، بيجويس ترتّب الدفع قبل 3 أيام على الأقل من الوصول\n15. **تتبع الشحنة:** كل 3 أيام؛ مراقبة موانئ العبور عن كثب\n16. **إشعار الوصول:** يُرسل للعميل قبل 3 أيام من وصول السفينة مع نسخة HBL\n17. **التخليص الجمركي:** البيان الجمركي عبر فسح؛ سداد الرسوم\n18. **أمر التسليم (DO):** تُصدره شركة الشحن بعد سداد الشحن\n19. **الاستلام من الميناء:** استلام البضاعة وتسليمها لمستودع العميل`,
  },
  {
    id: 'letter-of-credit-detailed',
    topic: 'Letter of Credit Process',
    tags: ['letter of credit stages', 'lc process', 'lc parties', 'issuing bank', 'confirming bank', 'advising bank', 'applicant', 'beneficiary', 'lc documents', 'خطاب اعتماد', 'اعتماد مستندي', 'مراحل خطاب الاعتماد', 'بنك مصدر', 'مستفيد'],
    content: `**Letter of Credit (LC) — Complete Process:**\n\n**Key Parties:**\n• **Applicant** — Buyer; requests LC from their bank specifying terms and conditions\n• **Issuing Bank** — Buyer's bank; issues and guarantees the LC\n• **Beneficiary** — Seller; receives payment when LC conditions are met\n• **Advising Bank** — Seller's bank; authenticates and forwards LC to seller\n• **Confirming Bank** — Adds its own guarantee on top of issuing bank's commitment\n\n**10 Stages of LC Performance:**\n1. Opening of Letter of Credit by Applicant's bank\n2. Mailing/transmission of LC to Beneficiary's bank\n3. Examination of LC terms by Exporter (seller)\n4. Amendments to LC (if needed — both parties must agree)\n5. Confirmation (if required)\n6. Shipment of goods\n7. Presentation of documents to beneficiary's bank\n8. Examination of documents by Issuing Bank\n9. Handling of discrepant documents (if any mismatch)\n10. Settlement of payment\n\n**Why LC requires Original B/L:** The Original B/L is the document of title — it must be surrendered to the bank to transfer cargo ownership to the buyer. Without OBL, goods cannot be released.\n\n**Example (from Bejoice orientation):** Saudi Lighting imports $500,000 of goods from China. Saudi British Bank issues LC. China Trading Company ships goods and presents OBL + documents to their bank. Saudi British Bank transfers $500,000 upon document verification. LC fees: typically 1–8% of face value.`,
    contentAr: `**خطاب الاعتماد (LC) — العملية الكاملة:**\n\n**الأطراف الرئيسية:**\n• **المتقدم (Applicant)** — المشتري؛ يطلب خطاب الاعتماد من بنكه محدداً الشروط\n• **البنك المُصدِر** — بنك المشتري؛ يُصدر خطاب الاعتماد ويضمنه\n• **المستفيد (Beneficiary)** — البائع؛ يستلم الدفعة عند استيفاء شروط خطاب الاعتماد\n• **البنك المُبلِّغ** — بنك البائع؛ يصادق على خطاب الاعتماد ويُحيله للبائع\n• **البنك المُؤكِّد** — يُضيف ضمانه الخاص فوق التزام البنك المُصدِر\n\n**10 مراحل تنفيذ خطاب الاعتماد:**\n1. فتح خطاب الاعتماد من قِبَل بنك المتقدم\n2. إرسال خطاب الاعتماد إلى بنك المستفيد\n3. فحص شروط خطاب الاعتماد من قِبَل المُصدِّر (البائع)\n4. التعديلات على خطاب الاعتماد (عند الحاجة — يجب موافقة الطرفين)\n5. التأكيد (إذا كان مطلوباً)\n6. شحن البضائع\n7. تقديم الوثائق لبنك المستفيد\n8. فحص الوثائق من قِبَل البنك المُصدِر\n9. معالجة الوثائق غير المطابقة (عند وجود تناقضات)\n10. تسوية الدفعة\n\n**لماذا تتطلب خطابات الاعتماد الأصل الورقي للبوليصة:** الأصل هو وثيقة ملكية — يجب تسليمها للبنك لنقل ملكية البضاعة للمشتري. بدون الأصل، لا يمكن إطلاق البضاعة.\n\n**مثال:** شركة سعودية تستورد بضاعة بقيمة 500,000 دولار من الصين. يُصدر البنك خطاب الاعتماد. تشحن الشركة الصينية وتقدم الوثائق للبنك. يحول البنك 500,000 دولار بعد التحقق.`,
  },
  // ── INCO TERMS ───────────────────────────────────────────────
  {
    id: 'incoterms-overview',
    topic: 'INCO Terms Overview',
    tags: ['incoterms', 'inco terms', 'trade terms', 'exw', 'fob', 'cif', 'ddp', 'dap', 'cfr', 'cpt', 'cip', 'fca', 'fas', 'dpu', 'delivery terms', 'إنكوترمز', 'شروط التسليم', 'مصطلحات التجارة', 'شروط الشحن'],
    content: `**INCO Terms (International Commercial Terms)** define the responsibilities of buyer and seller in international trade — who arranges and pays for transportation, insurance, and customs at each stage.\n\nThere are **11 INCO Terms** (Incoterms® 2020), grouped by transport mode:\n\n**Any Transport Mode:**\n• EXW — Ex Works\n• FCA — Free Carrier\n• CPT — Carriage Paid To\n• CIP — Carriage and Insurance Paid To\n• DAP — Delivered At Place\n• DPU — Delivered at Place Unloaded\n• DDP — Delivered Duty Paid\n\n**Sea & Inland Waterway Only:**\n• FAS — Free Alongside Ship\n• FOB — Free On Board\n• CFR — Cost and Freight\n• CIF — Cost, Insurance and Freight\n\nMost Saudi imports use **FOB** or **CIF**. For full-service convenience, **DDP** means the seller handles everything.`,
    contentAr: `**الإنكوترمز (شروط التجارة الدولية)** تُحدد مسؤوليات المشتري والبائع في التجارة الدولية — من يرتّب ويدفع تكاليف النقل والتأمين والجمارك في كل مرحلة.\n\nهناك **11 شرطاً للإنكوترمز** (Incoterms® 2020)، مُجمَّعة حسب وسيلة النقل:\n\n**لجميع وسائل النقل:**\n• EXW — من المصنع\n• FCA — تسليم للناقل\n• CPT — النقل مدفوع حتى\n• CIP — النقل والتأمين مدفوعان حتى\n• DAP — التسليم في المكان المحدد\n• DPU — التسليم في المكان المحدد مع التفريغ\n• DDP — التسليم مع دفع الرسوم الجمركية\n\n**للشحن البحري والمائي فقط:**\n• FAS — مجاناً على رصيف السفينة\n• FOB — مجاناً على ظهر السفينة\n• CFR — التكلفة والشحن\n• CIF — التكلفة والتأمين والشحن\n\nمعظم الاستيرادات السعودية تستخدم **FOB** أو **CIF**. أما **DDP** فيعني أن البائع يتكفل بكل شيء.`,
  },
  {
    id: 'incoterms-seller-buyer',
    topic: 'INCO Terms Seller Buyer Responsibility',
    tags: ['incoterms responsibility', 'who pays freight', 'seller responsibility', 'buyer responsibility', 'fob vs cif', 'exw vs ddp', 'مسؤوليات الإنكوترمز', 'من يدفع الشحن', 'مسؤولية البائع', 'مسؤولية المشتري'],
    content: `**INCO Terms: Who Bears Cost and Risk**\n\n| Term | Seller Handles | Buyer Handles |\n|------|---------------|---------------|\n| **EXW** | Nothing — just makes goods available | Everything from seller's door |\n| **FCA** | Export customs + delivery to carrier | Main carriage + insurance + import |\n| **FAS** | Export customs + to port alongside ship | Loading + main carriage + import |\n| **FOB** | Export customs + loading onto vessel | Main carriage + insurance + import |\n| **CFR** | Export customs + freight to destination | Insurance + import customs |\n| **CIF** | Export customs + freight + insurance to destination | Import customs |\n| **CPT** | Export + freight to named destination | Insurance + import |\n| **CIP** | Export + freight + insurance to destination | Import |\n| **DAP** | Export + freight + insurance to destination | Import duties + unloading |\n| **DPU** | Export + freight + insurance + unloading | Import duties |\n| **DDP** | EVERYTHING including import duties | Just receives at destination |\n\n**Risk transfers** at the named point in each term.`,
    contentAr: `**الإنكوترمز: من يتحمل التكلفة والمخاطرة**\n\n| الشرط | مسؤولية البائع | مسؤولية المشتري |\n|-------|--------------|----------------|\n| **EXW** | لا شيء — البضاعة متاحة فقط | كل شيء من باب البائع |\n| **FCA** | جمارك التصدير + التسليم للناقل | الشحن الرئيسي + التأمين + الاستيراد |\n| **FAS** | جمارك التصدير + إلى رصيف السفينة | التحميل + الشحن الرئيسي + الاستيراد |\n| **FOB** | جمارك التصدير + التحميل على السفينة | الشحن الرئيسي + التأمين + الاستيراد |\n| **CFR** | جمارك التصدير + الشحن للوجهة | التأمين + جمارك الاستيراد |\n| **CIF** | جمارك التصدير + الشحن + التأمين للوجهة | جمارك الاستيراد |\n| **CPT** | التصدير + الشحن للوجهة المحددة | التأمين + الاستيراد |\n| **CIP** | التصدير + الشحن + التأمين للوجهة | الاستيراد |\n| **DAP** | التصدير + الشحن + التأمين للوجهة | رسوم الاستيراد + التفريغ |\n| **DPU** | التصدير + الشحن + التأمين + التفريغ | رسوم الاستيراد |\n| **DDP** | كل شيء بما في ذلك رسوم الاستيراد | الاستلام فقط |\n\n**تنتقل المخاطرة** عند النقطة المسماة في كل شرط.`,
  },
  {
    id: 'incoterms-fob-detail',
    topic: 'FOB Incoterm',
    tags: ['fob', 'free on board', 'fob shipping', 'fob origin', 'fob destination', 'فوب', 'مجاناً على ظهر السفينة', 'شرط فوب'],
    content: `**FOB — Free On Board (named port of shipment)**\n\nUnder FOB, the seller is responsible for:\n✅ Packing, labeling, and preparing the goods\n✅ Export customs clearance and export duties\n✅ Delivering goods on board the vessel at the named port\n\nThe buyer (importer) is responsible for:\n✅ Ocean freight from origin port\n✅ Cargo insurance (marine insurance)\n✅ Import customs clearance and import duties\n✅ Delivery to final destination\n\nFOB is one of the most common terms for Saudi imports. Risk transfers to the buyer once goods are on board the vessel.\n\n**Example:** "FOB Shanghai" — Seller delivers to Shanghai port; Bejoice (as buyer's freight forwarder) arranges the ocean freight to Jeddah or Dammam.`,
    contentAr: `**FOB — مجاناً على ظهر السفينة (ميناء الشحن المُسمى)**\n\nبموجب FOB، يكون البائع مسؤولاً عن:\n✅ التعبئة والتغليف وتجهيز البضاعة\n✅ التخليص الجمركي للتصدير ورسومه\n✅ تسليم البضاعة على ظهر السفينة في الميناء المُسمى\n\nأما المشتري (المستورد) فيكون مسؤولاً عن:\n✅ الشحن البحري من ميناء المنشأ\n✅ تأمين البضاعة (التأمين البحري)\n✅ التخليص الجمركي للاستيراد ورسومه\n✅ التسليم للوجهة النهائية\n\nFOB أحد أكثر الشروط شيوعاً للاستيرادات السعودية. تنتقل المخاطرة للمشتري بمجرد تحميل البضاعة على السفينة.\n\n**مثال:** "FOB شنغهاي" — البائع يسلّم في ميناء شنغهاي؛ بيجويس (كوكيل شحن للمشتري) ترتّب الشحن البحري إلى جدة أو الدمام.`,
  },
  {
    id: 'incoterms-cif-detail',
    topic: 'CIF Incoterm',
    tags: ['cif', 'cost insurance freight', 'cif shipping', 'cif vs fob', 'سيف', 'التكلفة والتأمين والشحن', 'شرط سيف'],
    content: `**CIF — Cost, Insurance and Freight (named port of destination)**\n\nUnder CIF, the seller is responsible for:\n✅ Packing, labeling, and preparing the goods\n✅ Export customs and export duties\n✅ Loading onto vessel\n✅ Ocean freight to the destination port\n✅ Minimum cargo insurance (typically 110% of invoice value)\n\nThe buyer (importer) is responsible for:\n✅ Import customs clearance and import duties\n✅ Unloading at destination\n✅ Delivery to final warehouse/destination\n\nRisk transfers to buyer once goods are on board the vessel at origin (same as FOB, despite seller paying freight).\n\n**Note for Saudi imports:** Under CIF, the seller selects the freight forwarder and shipping line — the buyer has less control. FOB gives the importer more control over freight costs and timing.`,
    contentAr: `**CIF — التكلفة والتأمين والشحن (ميناء الوجهة المُسمى)**\n\nبموجب CIF، يكون البائع مسؤولاً عن:\n✅ التعبئة والتغليف وتجهيز البضاعة\n✅ جمارك التصدير ورسومه\n✅ التحميل على السفينة\n✅ الشحن البحري إلى ميناء الوجهة\n✅ الحد الأدنى من تأمين البضاعة (عادةً 110% من قيمة الفاتورة)\n\nأما المشتري (المستورد) فيكون مسؤولاً عن:\n✅ التخليص الجمركي للاستيراد ورسومه\n✅ التفريغ في الوجهة\n✅ التسليم للمستودع/الوجهة النهائية\n\nتنتقل المخاطرة للمشتري بمجرد تحميل البضاعة على السفينة في المنشأ (مثل FOB رغم أن البائع يدفع الشحن).\n\n**ملاحظة للاستيرادات السعودية:** بموجب CIF، البائع هو من يختار وكيل الشحن وخط الملاحة — المشتري لديه سيطرة أقل. FOB يمنح المستورد سيطرة أكبر على تكاليف الشحن والتوقيت.`,
  },
  {
    id: 'incoterms-ddp-detail',
    topic: 'DDP Incoterm',
    tags: ['ddp', 'delivered duty paid', 'ddp shipping', 'ddp vs dap', 'all inclusive shipping', 'شرط دي دي بي', 'تسليم مع دفع الرسوم', 'شحن شامل'],
    content: `**DDP — Delivered Duty Paid (named place of destination)**\n\nThe maximum obligation for the seller. The seller handles EVERYTHING:\n✅ All export formalities and costs\n✅ Ocean/air freight\n✅ Insurance\n✅ Import customs clearance at destination\n✅ All import duties and VAT\n✅ Delivery to the buyer's door\n\nThe buyer simply receives the goods.\n\nDDP is the most buyer-friendly term — but the seller bears all cost and risk. It's common for e-commerce and B2C shipments.\n\n**Important for Saudi imports:** DDP requires the foreign seller to be registered for Saudi VAT or work with a Saudi fiscal representative. Bejoice can advise on DDP implications for Saudi imports.`,
    contentAr: `**DDP — تسليم مع دفع الرسوم الجمركية (المكان المُسمى للوجهة)**\n\nأقصى التزام على البائع. البائع يتكفل بكل شيء:\n✅ جميع إجراءات التصدير وتكاليفه\n✅ الشحن البحري/الجوي\n✅ التأمين\n✅ التخليص الجمركي للاستيراد في الوجهة\n✅ جميع رسوم الاستيراد وضريبة القيمة المضافة\n✅ التسليم لباب المشتري\n\nالمشتري يستلم فقط.\n\nDDP الشرط الأفضل للمشتري — لكن البائع يتحمل كل التكلفة والمخاطرة. شائع في التجارة الإلكترونية وشحنات B2C.\n\n**هام للاستيرادات السعودية:** يتطلب DDP تسجيل البائع الأجنبي لضريبة القيمة المضافة السعودية أو التعامل مع ممثل مالي سعودي. بيجويس يمكنها تقديم المشورة بشأن تداعيات DDP للاستيرادات السعودية.`,
  },

  // ── SEA IMPORT PROCEDURE ─────────────────────────────────────
  {
    id: 'sea-import-procedure',
    topic: 'Sea Import Procedure',
    tags: ['sea import procedure', 'import process', 'how to import', 'import steps', 'freight process', 'shipping procedure', 'إجراءات الاستيراد البحري', 'خطوات الاستيراد', 'كيفية الاستيراد', 'عملية الشحن'],
    content: `**Sea Import Procedure — Step by Step:**\n\n1. **Inquiry** — Client provides cargo details (commodity, weight, volume, origin, destination)\n2. **Pricing** — Bejoice requests rates from shipping lines for FCL or LCL\n3. **Quotation** — Bejoice sends a detailed quotation including: ocean freight, origin charges, destination charges, customs clearance fees, delivery\n4. **Booking Confirmation** — Client confirms; Bejoice places booking with shipping line\n5. **Pre-shipment Documentation** — Shipper prepares: Commercial Invoice, Packing List, Certificate of Origin\n6. **Cargo Loading** — Goods stuffed into container; EIR issued at port\n7. **Bill of Lading Issuance** — Shipping line issues B/L after vessel departure\n8. **Pre-arrival Notification** — Bejoice notifies client; advises on document requirements\n9. **Customs Filing** — Bill of Entry filed via Fasah system (Saudi platform)\n10. **Duty Payment** — Customs duties and VAT paid\n11. **Cargo Release** — Delivery Order issued by shipping line\n12. **Port Collection** — Cargo collected from port and delivered to client's warehouse`,
    contentAr: `**إجراءات الاستيراد البحري — خطوة بخطوة:**\n\n1. **الاستفسار** — يُزوّد العميل بيجويس بتفاصيل البضاعة (السلعة، الوزن، الحجم، المنشأ، الوجهة)\n2. **التسعير** — بيجويس تطلب أسعاراً من شركات الشحن لـ FCL أو LCL\n3. **عرض السعر** — بيجويس تُرسل عرض سعر مفصّلاً يشمل: الشحن البحري، رسوم المنشأ، رسوم الوجهة، رسوم التخليص الجمركي، التوصيل\n4. **تأكيد الحجز** — يؤكد العميل؛ بيجويس تضع الحجز مع شركة الشحن\n5. **وثائق ما قبل الشحن** — يُعدّ المُرسِل: الفاتورة التجارية، قائمة التعبئة، شهادة المنشأ\n6. **تحميل البضاعة** — تُحشى البضاعة في الحاوية؛ يُصدر EIR في الميناء\n7. **إصدار بوليصة الشحن** — تُصدرها شركة الشحن بعد إقلاع السفينة\n8. **إشعار ما قبل الوصول** — بيجويس تُبلّغ العميل وتُعلمه بمتطلبات الوثائق\n9. **التقديم الجمركي** — البيان الجمركي يُقدَّم عبر منصة فسح السعودية\n10. **سداد الرسوم** — دفع الرسوم الجمركية وضريبة القيمة المضافة\n11. **إطلاق البضاعة** — أمر التسليم يُصدر من شركة الشحن\n12. **الاستلام من الميناء** — استلام البضاعة وتسليمها لمستودع العميل`,
  },

  // ── LETTER OF CREDIT ─────────────────────────────────────────
  {
    id: 'letter-of-credit',
    topic: 'Letter of Credit',
    tags: ['letter of credit', 'lc', 'l/c', 'documentary credit', 'bank guarantee', 'trade finance', 'lc payment', 'خطاب الاعتماد', 'اعتماد مستندي', 'ضمان بنكي', 'تمويل تجاري'],
    content: `**Letter of Credit (LC / L/C)** is a payment mechanism used in international trade where a bank guarantees payment to the seller, provided the seller meets all conditions stated in the LC.\n\n**Parties involved:**\n• **Applicant** — The buyer who requests the LC from their bank\n• **Issuing Bank** — The buyer's bank that issues and guarantees the LC\n• **Beneficiary** — The seller/exporter who receives payment\n• **Advising Bank** — The seller's bank that authenticates the LC\n• **Confirming Bank** — (if applicable) Additional bank that guarantees payment\n\n**LC Process:**\n1. Buyer and seller agree on LC terms in the sales contract\n2. Buyer applies to their bank (Issuing Bank) to open the LC\n3. Issuing Bank sends LC to seller's bank (Advising Bank)\n4. Seller ships goods and presents conforming documents to the bank\n5. Bank pays seller (at sight or after agreed period)\n6. Bank releases documents to buyer for customs clearance\n\nLC requires the **original Bill of Lading** — which is why negotiable OBL is critical for LC transactions.`,
    contentAr: `**خطاب الاعتماد (LC / L/C)** آلية دفع تُستخدم في التجارة الدولية حيث يضمن البنك الدفع للبائع شريطة استيفاء شروط خطاب الاعتماد.\n\n**الأطراف المعنية:**\n• **المتقدم** — المشتري الذي يطلب خطاب الاعتماد من بنكه\n• **البنك المُصدِر** — بنك المشتري الذي يُصدر خطاب الاعتماد ويضمنه\n• **المستفيد** — البائع/المُصدِّر الذي يستلم الدفعة\n• **البنك المُبلِّغ** — بنك البائع الذي يصادق على خطاب الاعتماد\n• **البنك المُؤكِّد** — (إذا كان مطلوباً) بنك إضافي يضمن الدفعة\n\n**مراحل خطاب الاعتماد:**\n1. يتفق المشتري والبائع على شروط خطاب الاعتماد في عقد البيع\n2. يتقدم المشتري لبنكه (البنك المُصدِر) لفتح خطاب الاعتماد\n3. يُرسل البنك المُصدِر خطاب الاعتماد لبنك البائع (البنك المُبلِّغ)\n4. يشحن البائع البضاعة ويُقدّم الوثائق المطابقة للبنك\n5. يدفع البنك للبائع (فور الاطلاع أو بعد الفترة المتفق عليها)\n6. يُسلّم البنك الوثائق للمشتري للتخليص الجمركي\n\nيستلزم خطاب الاعتماد **أصل بوليصة الشحن** — ولهذا تكون OBL القابلة للتداول ضرورية في معاملات خطابات الاعتماد.`,
  },

  // ── CBM CALCULATION ──────────────────────────────────────────
  {
    id: 'cbm-calculation',
    topic: 'CBM Calculation',
    tags: ['cbm', 'cubic metre', 'volume weight', 'volumetric weight', 'chargeable weight', 'how to calculate cbm', 'freight calculation', 'متر مكعب', 'حجم البضاعة', 'كيف أحسب المتر المكعب', 'وزن حجمي', 'حساب الشحن'],
    content: `**CBM (Cubic Metre)** is the standard unit for measuring cargo volume in sea freight.\n\n**How to calculate CBM:**\nLength (m) × Width (m) × Height (m) = CBM\n\nExample: A box 1.2m × 0.8m × 0.9m = 0.864 CBM\n\n**For LCL sea freight:** You're charged per CBM or per tonne — whichever is **higher** (Revenue Tonne / W/M).\n• 1 CBM = 1 freight tonne for comparison purposes\n• If your cargo is 5 CBM but weighs 6 tonnes → charged on 6 tonnes\n• If your cargo is 5 CBM but weighs 2 tonnes → charged on 5 CBM\n\n**Container volumes:**\n• 20ft: ~33 CBM usable\n• 40ft: ~67 CBM usable\n• 40HC: ~76 CBM usable\n\nFor air freight, volumetric weight = (L cm × W cm × H cm) ÷ 6000.`,
    contentAr: `**المتر المكعب (CBM)** هو وحدة القياس القياسية لحجم البضاعة في الشحن البحري.\n\n**كيفية حساب CBM:**\nالطول (م) × العرض (م) × الارتفاع (م) = CBM\n\nمثال: صندوق أبعاده 1.2م × 0.8م × 0.9م = 0.864 م³\n\n**لشحن LCL البحري:** يُحسب الشحن بالمتر المكعب أو بالطن — أيهما **أعلى** (طن الإيراد / W/M).\n• 1 م³ = 1 طن شحن للمقارنة\n• إذا كانت بضاعتك 5 م³ وتزن 6 أطنان → يُحسب على 6 أطنان\n• إذا كانت بضاعتك 5 م³ وتزن 2 طن → يُحسب على 5 م³\n\n**سعات الحاويات:**\n• 20 قدم: ~33 م³ صالحة للاستخدام\n• 40 قدم: ~67 م³ صالحة للاستخدام\n• 40 قدم HC: ~76 م³ صالحة للاستخدام\n\nللشحن الجوي، الوزن الحجمي = (الطول سم × العرض سم × الارتفاع سم) ÷ 6000.`,
  },

  // ── SAUDI PORTS ──────────────────────────────────────────────
  {
    id: 'saudi-ports',
    topic: 'Saudi Arabian Ports',
    tags: ['saudi ports', 'jeddah port', 'dammam port', 'jubail port', 'yanbu port', 'jeddah islamic port', 'king abdulaziz port', 'fasah', 'موانئ سعودية', 'ميناء جدة', 'ميناء الدمام', 'ميناء الجبيل', 'ميناء ينبع', 'فسح'],
    content: `**Major Saudi Arabian Seaports:**\n\n🚢 **Jeddah Islamic Port** — Red Sea; Saudi Arabia's largest port; handles ~70% of sea imports\n• Main gateway for goods from Europe, Asia, Americas\n• Connected to JEDDAH dry port (ICD)\n\n🚢 **King Abdulaziz Port (Dammam)** — Arabian Gulf; primary port for Eastern Province\n• Serves industrial and petrochemical supply chains\n• Proximity to ARAMCO and SABIC facilities\n\n🚢 **King Fahd Industrial Port (Jubail)** — Largest industrial port; bulk and liquid cargo\n\n🚢 **Yanbu Commercial Port** — Red Sea; industrial and project cargo\n\n🚢 **Ras Al Khair Port** — Mining and minerals\n\n**Fasah** is the Saudi Customs electronic portal where all customs declarations (Bills of Entry) are filed. Bejoice is a registered Fasah user with direct filing capability.`,
    contentAr: `**الموانئ البحرية الرئيسية في المملكة العربية السعودية:**\n\n🚢 **ميناء جدة الإسلامي** — البحر الأحمر؛ أكبر موانئ السعودية؛ يستقبل ~70% من الواردات البحرية\n• البوابة الرئيسية للبضائع من أوروبا وآسيا والأمريكيتين\n• متصل بالميناء الجاف في جدة\n\n🚢 **ميناء الملك عبدالعزيز (الدمام)** — الخليج العربي؛ الميناء الرئيسي للمنطقة الشرقية\n• يخدم سلاسل التوريد الصناعية والبتروكيماوية\n• قريب من منشآت أرامكو وسابك\n\n🚢 **ميناء الملك فهد الصناعي (الجبيل)** — أكبر ميناء صناعي؛ بضائع سائبة وسائلة\n\n🚢 **ميناء ينبع التجاري** — البحر الأحمر؛ البضائع الصناعية وشحنات المشاريع\n\n🚢 **ميناء رأس الخير** — التعدين والمعادن\n\n**فسح** هي البوابة الإلكترونية لجمارك السعودية حيث تُقدَّم جميع البيانات الجمركية. بيجويس مستخدم مسجّل في فسح بإمكانية التقديم المباشر.`,
  },

  // ── SABER / SASO / SFDA ──────────────────────────────────────
  {
    id: 'saber-saso',
    topic: 'SABER & SASO Conformity',
    tags: ['saber', 'saso', 'conformity certificate', 'product certificate', 'saudi standards', 'sfda', 'product clearance', 'سابر', 'ساسو', 'شهادة المطابقة', 'المواصفات السعودية', 'هيئة الغذاء والدواء'],
    content: `**SABER** is Saudi Arabia's electronic platform for product conformity certificates — mandatory for most regulated products entering Saudi Arabia.\n\n**How SABER works:**\n1. Importer/exporter registers product on SABER platform\n2. Selects an accredited Conformity Assessment Body (CAB)\n3. CAB reviews product documentation and issues a **Product Certificate (PC)**\n4. A **Shipment Certificate (SC)** is generated per shipment\n5. The SC is linked to the customs declaration — no SC = cargo cannot clear\n\n**SASO** (Saudi Standards, Metrology and Quality Organization) is the regulatory body that manages SABER.\n\n**SFDA** (Saudi Food and Drug Authority) — regulates food, pharmaceuticals, medical devices, and cosmetics. SFDA approval required before customs clearance.\n\nBejoice monitors SABER requirements and advises clients on conformity compliance for their specific products.`,
    contentAr: `**سابر (SABER)** هي المنصة الإلكترونية السعودية لشهادات مطابقة المنتجات — إلزامية لمعظم المنتجات الخاضعة للتنظيم الداخلة للسعودية.\n\n**كيفية عمل سابر:**\n1. يسجّل المستورد/المُصدِّر المنتج على منصة سابر\n2. يختار هيئة تقييم المطابقة المعتمدة (CAB)\n3. تراجع الهيئة وثائق المنتج وتُصدر **شهادة المنتج (PC)**\n4. تُصدر **شهادة الشحنة (SC)** لكل شحنة\n5. ترتبط الشهادة بالبيان الجمركي — بدون SC لا يمكن تخليص البضاعة\n\n**هيئة المواصفات والمقاييس والجودة السعودية (ساسو)** هي الجهة التنظيمية التي تُدير منصة سابر.\n\n**هيئة الغذاء والدواء (SFDA)** — تنظّم الغذاء والأدوية والأجهزة الطبية ومستحضرات التجميل. موافقة SFDA مطلوبة قبل التخليص الجمركي.\n\nبيجويس تتابع متطلبات سابر وتُرشد العملاء بشأن الامتثال للمطابقة لمنتجاتهم المحددة.`,
  },

  // ── INSURANCE ───────────────────────────────────────────────
  {
    id: 'cargo-insurance',
    topic: 'Cargo Insurance',
    tags: ['cargo insurance', 'marine insurance', 'insurance', 'icc a', 'icc b', 'icc c', 'all risk', 'coverage', 'تأمين البضاعة', 'تأمين بحري', 'تأمين شحن', 'تغطية شاملة'],
    content: `**Marine Cargo Insurance** protects cargo against loss or damage during transit.\n\n**Coverage Types (Institute Cargo Clauses):**\n• **ICC (A) — All Risks:** Broadest coverage; covers all physical loss or damage except specifically excluded causes\n• **ICC (B):** Named perils — fire, explosion, sinking, collision, water damage, earthquake\n• **ICC (C):** Most limited — fire, explosion, sinking/capsizing only\n\n**What's typically excluded:** Inherent vice, improper packing, delay, nuclear contamination, war (can be added as endorsement)\n\n**Insured Value:** Usually 110% of CIF invoice value (gives 10% margin for additional costs in case of claim)\n\n**Recommendation:** Always insure at ICC (A) for high-value or fragile cargo. Bejoice can arrange comprehensive cargo insurance as part of the freight package.`,
    contentAr: `**التأمين البحري على البضائع** يحمي البضاعة من الفقدان أو التلف أثناء النقل.\n\n**أنواع التغطية (بنود معهد لندن للشحن):**\n• **ICC (A) — جميع المخاطر:** أوسع تغطية؛ تشمل جميع الفقدان أو التلف المادي إلا ما استُثني تحديداً\n• **ICC (B):** مخاطر مُسماة — حريق، انفجار، غرق، تصادم، أضرار المياه، زلزال\n• **ICC (C):** الأكثر تقييداً — حريق وانفجار وغرق/انقلاب فقط\n\n**ما يُستثنى عادةً:** العيب الذاتي، التعبئة السيئة، التأخير، التلوث النووي، الحرب (يمكن إضافتها كملحق)\n\n**قيمة التأمين:** عادةً 110% من قيمة فاتورة CIF (تُعطي هامش 10% للتكاليف الإضافية في حالة المطالبة)\n\n**التوصية:** يُنصح دائماً بتأمين ICC (A) للبضائع عالية القيمة أو الهشّة. بيجويس يمكنها ترتيب تأمين شامل على البضاعة كجزء من حزمة الشحن.`,
  },

  // ── GENERAL FREIGHT KNOWLEDGE ───────────────────────────────
  {
    id: 'freight-costs-components',
    topic: 'Freight Cost Components',
    tags: ['freight costs', 'what is included', 'ocean freight charges', 'baf', 'caf', 'thc', 'origin charges', 'destination charges', 'all in rate', 'تكاليف الشحن', 'مكونات الشحن', 'رسوم الشحن', 'ماذا يشمل', 'رسوم المنشأ', 'رسوم الوجهة'],
    content: `**Sea Freight Cost Components:**\n\n**Origin Charges:**\n• Origin THC (Terminal Handling Charge)\n• Documentation fee\n• Bill of Lading fee\n• Export customs clearance\n• Container stuffing (for LCL)\n\n**Ocean Freight:**\n• Base Ocean Freight (BOF)\n• BAF (Bunker Adjustment Factor) — fuel surcharge\n• CAF (Currency Adjustment Factor)\n• PSS (Peak Season Surcharge) — during busy seasons\n• GRI (General Rate Increase)\n\n**Destination Charges (Saudi Arabia):**\n• Destination THC\n• Delivery Order (DO) fee\n• Port security fees\n• Import customs clearance\n• Duty and VAT (duty varies by HS code; VAT = 5%)\n• Inland delivery (port to warehouse)\n\nBejoice provides **all-in quotations** showing every charge transparently. No hidden fees.`,
    contentAr: `**مكونات تكلفة الشحن البحري:**\n\n**رسوم المنشأ:**\n• رسوم المحطة في المنشأ (THC)\n• رسوم الوثائق\n• رسوم بوليصة الشحن\n• التخليص الجمركي للتصدير\n• تحشية الحاوية (لـ LCL)\n\n**الشحن البحري:**\n• الشحن البحري الأساسي (BOF)\n• BAF (معامل تعديل الوقود) — رسوم الوقود\n• CAF (معامل تعديل العملة)\n• PSS (رسوم موسم الذروة) — خلال المواسم المزدحمة\n• GRI (الزيادة العامة في الأسعار)\n\n**رسوم الوجهة (المملكة العربية السعودية):**\n• رسوم المحطة في الوجهة (THC)\n• رسوم أمر التسليم (DO)\n• رسوم أمن الميناء\n• التخليص الجمركي للاستيراد\n• الرسوم الجمركية وضريبة القيمة المضافة (الرسوم تتفاوت حسب HS code؛ ضريبة القيمة المضافة = 15%)\n• التوصيل الداخلي (من الميناء للمستودع)\n\nبيجويس تُقدّم **عروض أسعار شاملة** تُظهر كل رسم بشفافية. لا رسوم مخفية.`,
  },
  {
    id: 'transit-times',
    topic: 'Sea Freight Transit Times',
    tags: ['transit time', 'how long', 'shipping time', 'sea transit', 'days', 'lead time', 'schedule', 'مدة الشحن', 'كم يستغرق', 'وقت العبور', 'جدول الشحن', 'كم يوم'],
    content: `**Estimated Sea Freight Transit Times to Saudi Arabia (port to port):**\n\n| Origin | Jeddah | Dammam |\n|--------|--------|--------|\n| China (Shanghai/Shenzhen) | 18–25 days | 22–30 days |\n| India (Mumbai/Chennai) | 10–16 days | 14–20 days |\n| Europe (Rotterdam/Hamburg) | 20–28 days | 25–32 days |\n| USA (East Coast) | 28–35 days | 32–38 days |\n| USA (West Coast) | 20–28 days | 25–32 days |\n| Turkey (Istanbul) | 12–18 days | 15–22 days |\n| UAE (Jebel Ali) | 3–5 days | 1–3 days |\n\n*Note: Current Red Sea/Suez disruptions may add 10–14 days for Europe/Americas routes via Cape of Good Hope.*\n\nAdd 2–5 days for customs clearance + inland delivery. Bejoice provides door-to-door estimates including all stages.`,
    contentAr: `**أوقات العبور التقديرية للشحن البحري إلى المملكة العربية السعودية (ميناء إلى ميناء):**\n\n| المنشأ | جدة | الدمام |\n|--------|-----|-------|\n| الصين (شنغهاي/شنتشن) | 18–25 يوماً | 22–30 يوماً |\n| الهند (مومباي/تشيناي) | 10–16 يوماً | 14–20 يوماً |\n| أوروبا (روتردام/هامبورغ) | 20–28 يوماً | 25–32 يوماً |\n| الولايات المتحدة (الساحل الشرقي) | 28–35 يوماً | 32–38 يوماً |\n| الولايات المتحدة (الساحل الغربي) | 20–28 يوماً | 25–32 يوماً |\n| تركيا (إسطنبول) | 12–18 يوماً | 15–22 يوماً |\n| الإمارات (جبل علي) | 3–5 أيام | 1–3 أيام |\n\n*ملاحظة: الاضطرابات الحالية في البحر الأحمر/قناة السويس قد تُضيف 10–14 يوماً لمسارات أوروبا/الأمريكيتين عبر رأس الرجاء الصالح.*\n\nأضف 2–5 أيام للتخليص الجمركي + التوصيل الداخلي. بيجويس تُقدّم تقديرات من الباب إلى الباب تشمل جميع المراحل.`,
  },
  {
    id: 'dangerous-goods',
    topic: 'Dangerous Goods',
    tags: ['dangerous goods', 'hazardous cargo', 'imdg', 'msds', 'sds', 'un number', 'hazmat', 'dg cargo', 'بضائع خطرة', 'مواد خطرة', 'شحن المواد الخطرة', 'رمز الأمم المتحدة'],
    content: `**Dangerous Goods (DG)** in sea freight are regulated by the **IMDG Code** (International Maritime Dangerous Goods Code).\n\n**9 IMDG Classes:**\n1. Explosives\n2. Gases (compressed, liquefied, dissolved)\n3. Flammable liquids\n4. Flammable solids\n5. Oxidizers and organic peroxides\n6. Toxic and infectious substances\n7. Radioactive materials\n8. Corrosives\n9. Miscellaneous dangerous goods\n\n**Documents required:**\n• Dangerous Goods Declaration (DGD)\n• Material Safety Data Sheet (MSDS / SDS)\n• UN Number and proper shipping name\n• Packing Group (I, II, or III)\n\nNot all shipping lines accept all DG classes. Bejoice specializes in DG shipping to Saudi Arabia and handles all regulatory requirements.`,
    contentAr: `**البضائع الخطرة (DG)** في الشحن البحري تخضع لـ **IMDG Code** (كود البحرية الدولية للبضائع الخطرة).\n\n**9 فئات IMDG:**\n1. المتفجرات\n2. الغازات (مضغوطة، مسالة، مذابة)\n3. السوائل القابلة للاشتعال\n4. المواد الصلبة القابلة للاشتعال\n5. المؤكسِدات والبيروكسيدات العضوية\n6. المواد السامة والمعدية\n7. المواد المشعة\n8. المواد الآكِلة\n9. بضائع خطرة متنوعة\n\n**الوثائق المطلوبة:**\n• إعلان البضائع الخطرة (DGD)\n• صحيفة بيانات سلامة المواد (MSDS / SDS)\n• رقم الأمم المتحدة واسم الشحن الصحيح\n• مجموعة التعبئة (I أو II أو III)\n\nليس كل خطوط الشحن تقبل جميع فئات DG. بيجويس متخصصة في شحن البضائع الخطرة إلى المملكة العربية السعودية وتتولى جميع المتطلبات التنظيمية.`,
  },
  {
    id: 'bejoice-sea-freight-services',
    topic: 'Bejoice Sea Freight Services',
    tags: ['bejoice sea freight', 'what does bejoice offer', 'sea freight service', 'ocean freight service', 'bejoice services', 'خدمات بيجويس البحرية', 'ماذا تقدم بيجويس', 'خدمات الشحن البحري', 'خدمات بيجويس'],
    content: `**Bejoice Sea Freight Services:**\n\n✅ **FCL (Full Container Load)** — All container sizes: 20ft, 40ft, 40HC, Reefer, Flat Rack, Open Top\n✅ **LCL (Less than Container Load)** — Consolidation from all major origins\n✅ **Project Cargo** — Heavy lift, ODC, OOG sea shipments\n✅ **RoRo** — Vehicle and wheeled machinery shipping\n✅ **Reefer Cargo** — Temperature-controlled shipments\n✅ **Dangerous Goods** — IMDG certified handling\n✅ **Customs Clearance** — Full Saudi customs service via Fasah\n✅ **Port to Door Delivery** — Final mile delivery across Saudi Arabia\n✅ **Documentation** — B/L, COO, SABER, SFDA handling\n✅ **Insurance** — Comprehensive cargo insurance\n\nBejoice serves all Saudi ports: Jeddah Islamic Port, Dammam, Jubail, Yanbu. Contact: info@bejoiceshipping-ksa.com`,
    contentAr: `**خدمات الشحن البحري لبيجويس:**\n\n✅ **FCL (حاوية كاملة)** — جميع أحجام الحاويات: 20 قدم، 40 قدم، 40HC، مبردة، مسطحة، مفتوحة الأعلى\n✅ **LCL (أقل من حاوية كاملة)** — تجميع من جميع المنشآت الرئيسية\n✅ **شحنات المشاريع** — رفع ثقيل، ODC، شحنات OOG البحرية\n✅ **RoRo** — شحن المركبات والآلات ذات العجلات\n✅ **بضائع مبردة** — شحنات تتحكم في درجة الحرارة\n✅ **بضائع خطرة** — معالجة معتمدة وفق IMDG\n✅ **التخليص الجمركي** — خدمة جمركية سعودية كاملة عبر فسح\n✅ **التسليم من الميناء للباب** — توصيل المرحلة الأخيرة في جميع أنحاء السعودية\n✅ **الوثائق** — معالجة B/L وشهادة المنشأ وسابر وSFDA\n✅ **التأمين** — تأمين شامل على البضاعة\n\nبيجويس تخدم جميع الموانئ السعودية: ميناء جدة الإسلامي، الدمام، الجبيل، ينبع. للتواصل: info@bejoiceshipping-ksa.com`,
  },
]

// ── Retrieval Function ──────────────────────────────────────────
/**
 * Retrieve top-N most relevant chunks for a given query.
 * Uses keyword overlap scoring (frontend-safe, no backend needed).
 * @param {string} query - User's message (lowercased internally)
 * @param {number} topN - Number of chunks to return
 * @param {number} threshold - Minimum score to include a chunk
 * @returns {Array} - Scored chunks sorted by relevance
 */
export function retrieveChunks(query, topN = 2, threshold = 1) {
  const q = query.toLowerCase()

  // Tokenize: remove stop words, keep meaningful tokens ≥ 3 chars
  const stopWords = new Set([
    'a','an','the','is','are','was','were','be','been','being','have','has','had',
    'do','does','did','will','would','could','should','may','might','shall','can',
    'need','dare','ought','used','i','me','my','we','our','you','your','he','his',
    'she','her','it','its','they','their','what','which','who','whom','this','that',
    'these','those','am','at','by','for','in','of','on','to','up','as','if','so',
    'or','and','but','not','how','when','where','why','with','from','tell','about',
    'give','me','us','please','want','know','explain','difference','between','mean',
  ])
  const tokens = q.split(/\W+/).filter(t => t.length >= 3 && !stopWords.has(t))

  const scored = KNOWLEDGE_CHUNKS.map(chunk => {
    let score = 0
    const tagStr = chunk.tags.join(' ').toLowerCase()
    const contentLower = chunk.content.toLowerCase()

    // 1. Exact multi-word tag phrase match in query — highest weight
    for (const tag of chunk.tags) {
      const tagLower = tag.toLowerCase()
      if (q.includes(tagLower)) {
        score += tagLower.includes(' ') ? 8 : 5  // multi-word tags score higher
      }
    }

    // 2. Each query token matches inside a tag string
    for (const token of tokens) {
      if (tagStr.includes(token)) score += 2
    }

    // 3. Query token appears in chunk content (weaker signal)
    for (const token of tokens) {
      if (contentLower.includes(token)) score += 0.5
    }

    // 4. Bonus: chunk topic word appears directly in query
    if (q.includes(chunk.topic.toLowerCase())) score += 3

    return { chunk, score }
  })

  return scored
    .filter(s => s.score >= threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .map(s => s.chunk)
}
