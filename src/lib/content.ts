export type Lang = "en" | "ar";
export interface L {
  en: string;
  ar: string;
}
export const l = (en: string, ar: string): L => ({ en, ar });

export const BRAND = {
  name: l("Rawiya Studio", "استوديو راوية"),
  short: l("Rawiya", "راوية"),
  tagline: l("Spaces for modern living.", "مساحات للحياة العصرية."),
  email: "studio@rawiya.example",
  phone: "+966 11 555 0172",
  phoneHref: "tel:+966115550172",
  address: l("King Fahd Road, Al Olaya, Riyadh, Saudi Arabia", "طريق الملك فهد، العليا، الرياض، المملكة العربية السعودية"),
  hours: l("Sunday – Thursday, 9:00 – 18:00", "الأحد – الخميس، ٩:٠٠ – ١٨:٠٠"),
};

export const NAV: { href: string; label: L }[] = [
  { href: "/", label: l("Home", "الرئيسية") },
  { href: "/studio", label: l("Studio", "الاستوديو") },
  { href: "/projects", label: l("Projects", "المشاريع") },
  { href: "/services", label: l("Services", "الخدمات") },
  { href: "/blog", label: l("Blog", "المدونة") },
  { href: "/contact", label: l("Contact", "تواصل") },
];

export const SITEMAP: { href: string; label: L }[] = [
  { href: "/", label: l("Home", "الرئيسية") },
  { href: "/faq", label: l("FAQ", "الأسئلة الشائعة") },
  { href: "/studio", label: l("Studio", "الاستوديو") },
  { href: "/projects", label: l("Projects", "المشاريع") },
  { href: "/services", label: l("Services", "الخدمات") },
  { href: "/blog", label: l("Blog", "المدونة") },
  { href: "/contact", label: l("Contact", "تواصل") },
  { href: "/process", label: l("Process", "آلية العمل") },
];

export const UI = {
  menu: l("Menu", "القائمة"),
  close: l("Close", "إغلاق"),
  explore: l("Explore studio", "اكتشف الاستوديو"),
  lang: l("عربي", "EN"),
  langLabel: l("Switch to Arabic", "Switch to English"),
  startProject: l("Start a project", "ابدأ مشروعاً"),
  startYourProject: l("Start your project", "ابدأ مشروعك"),
  scrollDown: l("(Scroll down)", "(مرّر للأسفل)"),
  viewProject: l("View Project", "عرض المشروع"),
  moreProject: l("More projects", "المزيد من المشاريع"),
  moreAbout: l("More about us", "المزيد عنّا"),
  seeAll: l("See all", "عرض الكل"),
  allServices: l("All services", "جميع الخدمات"),
  fullProcess: l("Our full process", "آلية عملنا بالكامل"),
  contactStudio: l("Contact our studio", "تواصل مع الاستوديو"),
  readMore: l("Read article", "قراءة المقال"),
  backToProjects: l("All projects", "كل المشاريع"),
  backToBlog: l("All articles", "كل المقالات"),
  nextProject: l("Next project", "المشروع التالي"),
  nextArticle: l("Next article", "المقال التالي"),
  prev: l("Previous", "السابق"),
  next: l("Next", "التالي"),
  heroLine1: l("Precise detail.", "تفاصيل دقيقة."),
  heroLine2: l("Tailored architecture.", "عمارة مفصّلة بعناية."),
  heroLine3: l("Quietly crafted.", "صنعة هادئة."),
  heroKicker: l("Designing spaces for modern living", "نصمم مساحات للحياة العصرية"),
  heroTitle: l("Homes with a story", "بيوت لها حكاية"),
  heroEst: l("Riyadh · Est. 2012", "الرياض · تأسس ٢٠١٢"),
  newsletterTitle: l("Sign up for our newsletter to receive updates and content.", "اشترك في نشرتنا البريدية لتصلك أحدث الأخبار والمحتوى."),
  email: l("Enter your email", "أدخل بريدك الإلكتروني"),
  subscribe: l("Subscribe", "اشترك"),
  subscribed: l("Thank you. You are subscribed.", "شكراً لك. تم اشتراكك."),
  invalidEmail: l("Please enter a valid email address.", "يرجى إدخال بريد إلكتروني صحيح."),
  sitemap: l("/ Sitemap", "/ خريطة الموقع"),
  footBuild: l("Building", "نبني"),
  footHome: l("Home", "البيت"),
  footInto: l("Into Masterpieces", "ليصبح تحفة"),
  rights: l("© 2026 Rawiya Studio. A MYFRIX concept project.", "© ٢٠٢٦ استوديو راوية. مشروع تصوري من MYFRIX."),
  year: l("Year", "السنة"),
  type: l("Type", "النوع"),
  location: l("Location", "الموقع"),
  area: l("Area", "المساحة"),
  status: l("Status", "الحالة"),
  published: l("Published", "تاريخ النشر"),
  deliverables: l("What you receive", "ما ستحصل عليه"),
  // contact form
  fName: l("Full name", "الاسم الكامل"),
  fEmail: l("Email", "البريد الإلكتروني"),
  fPhone: l("Phone", "الهاتف"),
  fType: l("Project type", "نوع المشروع"),
  fMessage: l("Tell us about your project", "حدثنا عن مشروعك"),
  fSend: l("Send enquiry", "إرسال الطلب"),
  fSending: l("Sending…", "جارٍ الإرسال…"),
  fThanks: l("Thank you.", "شكراً لك."),
  fThanksText: l("A member of our team will reply within two working days.", "سيرد عليك أحد أعضاء فريقنا خلال يومي عمل."),
  fErrName: l("Please enter your name.", "يرجى إدخال اسمك."),
  fErrEmail: l("Please enter a valid email address.", "يرجى إدخال بريد إلكتروني صحيح."),
  fErrGeneric: l("Something went wrong. Please try again.", "حدث خطأ ما. يرجى المحاولة مرة أخرى."),
  call: l("Call", "اتصل"),
  write: l("Write", "راسل"),
  visit: l("Visit", "زيارة"),
  hours: l("Hours", "ساعات العمل"),
  notFoundTitle: l("This page has wandered off.", "هذه الصفحة غير موجودة."),
  notFoundText: l("The page you are looking for does not exist or has moved.", "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."),
  backHome: l("Back to home", "العودة للرئيسية"),
};

/* ---------- Projects ---------- */
export interface Project {
  slug: string;
  kind: "project";
  title: L;
  year: string;
  type: L;
  location: L;
  area: string;
  status: L;
  image: string;
  gallery: string[];
  short: L;
  body: L[];
}

export const PROJECTS: Project[] = [
  {
    slug: "dune-villa", kind: "project",
    title: l("Dune Villa", "فيلا الكثبان"),
    year: "2025",
    type: l("Private residence", "مسكن خاص"),
    location: l("Red Sea Coast", "ساحل البحر الأحمر"),
    area: "780 m²",
    status: l("Completed", "مكتمل"),
    image: "/images/hero-2.jpg",
    gallery: ["/images/strip-4.jpg", "/images/strip-5.jpg", "/images/about-sea.jpg"],
    short: l("A string of curved terraces stepping down a dune toward the sea.", "مدرجات منحنية تنساب على الكثيب نحو البحر."),
    body: [
      l("Dune Villa follows the contour of a coastal dune. Rather than flatten the site, we let each terrace settle into the slope, so the house reads as part of the shoreline.", "تتبع فيلا الكثبان انحناء الكثيب الساحلي. فبدل تسوية الموقع، تركنا كل مدرّج يستقر على المنحدر، ليبدو البيت جزءاً من الشاطئ."),
      l("Soft white plaster, curved glass balustrades and mature olive trees keep the palette quiet. Every living space opens to the sea and is shaded by deep, sculpted overhangs.", "الجص الأبيض الناعم والدرابزين الزجاجي المنحني وأشجار الزيتون الناضجة تُبقي اللوحة هادئة. وتنفتح كل المساحات على البحر وتظللها أسقف منحوتة عميقة."),
    ],
  },
  {
    slug: "shadow-house", kind: "project",
    title: l("Shadow House", "بيت الظل"),
    year: "2025",
    type: l("Private residence", "مسكن خاص"),
    location: l("Riyadh", "الرياض"),
    area: "620 m²",
    status: l("Completed", "مكتمل"),
    image: "/images/hero-1.jpg",
    gallery: ["/images/strip-3.jpg", "/images/values.jpg", "/images/about-large.jpg"],
    short: l("A glazed ground floor beneath a floating terrace, lit warmly at dusk.", "طابق أرضي زجاجي تحت تراس عائم، يتوهج دفئاً عند الغروب."),
    body: [
      l("Shadow House is designed around the movement of light. A long cantilevered terrace shades the glazed living level, cutting solar gain while framing the garden.", "صُمم بيت الظل حول حركة الضوء. يظلل تراس طويل ممتد الطابق الزجاجي المعيشي، فيقلل الحرارة ويؤطر الحديقة."),
      l("Inside, a sculptural concrete stair rises through the double-height hall. Natural stone, oak and linen keep the interior warm against the cool exterior.", "في الداخل، يصعد درج خرساني نحتي عبر القاعة مزدوجة الارتفاع. وتمنح الحجارة الطبيعية والبلوط والكتان دفئاً داخلياً يقابل برودة الواجهة."),
    ],
  },
  {
    slug: "reflection-pavilion", kind: "project",
    title: l("Reflection Pavilion", "جناح الانعكاس"),
    year: "2024",
    type: l("Experience centre", "مركز تجربة"),
    location: l("Jeddah", "جدة"),
    area: "1,150 m²",
    status: l("Completed", "مكتمل"),
    image: "/images/hero-3.jpg",
    gallery: ["/images/strip-1.jpg", "/images/story-land.jpg", "/images/float-2.jpg"],
    short: l("A low concrete pavilion that appears to float above a still pool.", "جناح خرساني منخفض يبدو كأنه يطفو فوق بركة ساكنة."),
    body: [
      l("The pavilion is a single roof plane resting on a glass wall and a timber-lit entry. A shallow pool wraps the building and doubles its presence at every hour.", "الجناح سقف واحد يرتكز على جدار زجاجي ومدخل مضاء بالخشب. وتحيط به بركة ضحلة تضاعف حضوره في كل ساعة."),
      l("Designed as a sales and experience centre, it lets visitors move from arrival to conversation through one calm, uninterrupted space.", "صُمم كمركز مبيعات وتجربة، ليتنقل الزوار من لحظة الوصول إلى الحوار عبر فضاء واحد هادئ متصل."),
    ],
  },
  {
    slug: "stone-terrace-residence", kind: "project",
    title: l("Stone Terrace Residence", "مسكن المدرجات الحجرية"),
    year: "2024",
    type: l("Private residence", "مسكن خاص"),
    location: l("Al Khobar", "الخبر"),
    area: "540 m²",
    status: l("Completed", "مكتمل"),
    image: "/images/work-1.jpg",
    gallery: ["/images/blog-3.jpg", "/images/strip-2.jpg", "/images/float-3.jpg"],
    short: l("A stacked stone volume balanced on a slim concrete base.", "كتلة حجرية متراصة تتوازن فوق قاعدة خرسانية رفيعة."),
    body: [
      l("A heavy stone volume appears to hover above a light, glazed base. The contrast between mass and transparency defines the house and shelters a shaded entry terrace.", "كتلة حجرية ثقيلة تبدو معلقة فوق قاعدة زجاجية خفيفة. هذا التباين بين الكتلة والشفافية يميز البيت ويظلل تراس المدخل."),
      l("A mature olive on the upper terrace and low desert planting soften the architecture and tie the house to its setting.", "تخفف شجرة زيتون ناضجة على التراس العلوي والنباتات الصحراوية المنخفضة من حدة العمارة وتربط البيت بمحيطه."),
    ],
  },
  {
    slug: "horizon-pavilion", kind: "project",
    title: l("Horizon Pavilion", "جناح الأفق"),
    year: "2024",
    type: l("Sales gallery", "معرض مبيعات"),
    location: l("Riyadh", "الرياض"),
    area: "960 m²",
    status: l("Completed", "مكتمل"),
    image: "/images/work-2.jpg",
    gallery: ["/images/strip-1.jpg", "/images/float-4.jpg", "/images/about-detail.jpg"],
    short: l("A concrete gallery with a continuous glass wall and a quiet reflecting pool.", "معرض خرساني بجدار زجاجي متصل وبركة عاكسة هادئة."),
    body: [
      l("Horizon Pavilion is a long concrete roof held above a continuous glass wall. A tall timber-lined entry marks arrival, while a reflecting pool softens the edge of the building.", "جناح الأفق سقف خرساني طويل يعلو جداراً زجاجياً متصلاً. ويحدد مدخل مكسو بالخشب لحظة الوصول، بينما تلطف بركة عاكسة حافة المبنى."),
      l("Inside, a single open hall holds models, material boards and meeting tables, designed to make property discovery feel personal.", "في الداخل قاعة مفتوحة واحدة تضم المجسمات ولوحات المواد وطاولات الاجتماعات، لتجعل اكتشاف العقار تجربة شخصية."),
    ],
  },
  {
    slug: "wing-headquarters", kind: "project",
    title: l("Wing Headquarters", "مقر الجناح"),
    year: "2023",
    type: l("Corporate headquarters", "مقر شركة"),
    location: l("Dhahran", "الظهران"),
    area: "4,800 m²",
    status: l("Completed", "مكتمل"),
    image: "/images/work-3.jpg",
    gallery: ["/images/float-1.jpg", "/images/blog-1.jpg", "/images/story-land.jpg"],
    short: l("A folded white roof sweeping up from a reflecting plaza.", "سقف أبيض مطوي يرتفع من ساحة عاكسة."),
    body: [
      l("Wing Headquarters is defined by one gesture: a roof that folds up from the plaza to shelter a glowing glazed workplace. The form gives a growing team a shared, memorable home.", "يتميز مقر الجناح بحركة واحدة: سقف ينطوي من الساحة ليظلل مكان عمل زجاجياً متوهجاً. ويمنح هذا الشكل فريقاً متنامياً بيتاً مشتركاً لا يُنسى."),
      l("A shallow reflecting pool doubles the building at sunset, while deep eaves keep the workspace cool and daylit throughout the year.", "تضاعف بركة عاكسة ضحلة المبنى عند الغروب، بينما تبقي الأفاريز العميقة مكان العمل بارداً ومضاءً بنور النهار طوال العام."),
    ],
  },
];

/* ---------- Home copy ---------- */
export const HOME = {
  philosophyLabel: l("(Our philosophy)", "(فلسفتنا)"),
  philosophyLead: l("By storytellers of space", "على يد رواة المكان"),
  philosophy: l(
    "Rawiya Studio shapes tomorrow’s homes through patient architecture, honest materials and the quiet drama of light.",
    "يصوغ استوديو راوية بيوت الغد بعمارة متأنية ومواد صادقة وحضور هادئ للضوء."
  ),
  todayLabel: l("(Today)", "(اليوم)"),
  today: l(
    "We shape environments with intent, balance and a distinctive sense of place, delivering bespoke architectural concepts and considered interior layouts that inspire everyday living.",
    "نصمم البيئات بقصد واتزان وهوية مكانية مميزة، ونقدم مفاهيم معمارية خاصة وتوزيعات داخلية مدروسة تلهم الحياة اليومية."
  ),
  aboutLabel: l("(About us)", "(عنّا)"),
  aboutLead: l(
    "We focus on ideas that last, solutions that scale and strategy designed to align with ambitious client goals.",
    "نركّز على أفكار تدوم وحلول قابلة للنمو واستراتيجية تتوافق مع طموحات عملائنا."
  ),
  aboutCap1: l("Spatial Planning", "التخطيط المكاني"),
  aboutCap2: l("Crafted Details", "تفاصيل مصنوعة بعناية"),
  aboutHeadline: l(
    "Every project is disciplined and tailored for measurable results, not short-term trends.",
    "كل مشروع منضبط ومفصّل لتحقيق نتائج قابلة للقياس، لا لمجاراة الموضة العابرة."
  ),
  aboutPara: l(
    "A full-service architecture and interior practice. We work across villas, hospitality and workplaces, turning complex briefs into calm, enduring spaces.",
    "ممارسة متكاملة في العمارة والتصميم الداخلي. نعمل على الفلل والضيافة وأماكن العمل، ونحوّل المتطلبات المعقدة إلى مساحات هادئة تدوم."
  ),
  statsShort: [
    { to: 14, suffix: "", label: l("Years in practice", "سنة من الممارسة") },
    { to: 60, suffix: "+", label: l("Projects delivered", "مشروعاً منجزاً") },
    { to: 12, suffix: "", label: l("Design awards", "جائزة تصميم") },
  ],
  worksLabel: l("(Our work)", "(أعمالنا)"),
  worksTitle: l("Selected Works", "أعمال مختارة"),
  worksDesc: l(
    "Every build is a balance between utility, light and structure. We partner directly with clients to deliver spaces that endure.",
    "كل مبنى هو توازن بين الوظيفة والضوء والإنشاء. نعمل مباشرة مع عملائنا لتقديم مساحات تدوم."
  ),
  clientsLabel: l("(Our clients)", "(عملاؤنا)"),
  clientsTitle: l("Client Network", "شبكة العملاء"),
  clientsDesc: l("Trusted by teams that demand exceptional quality and execution.", "يثق بنا فرق تطلب جودة وتنفيذاً استثنائيين."),
  servicesLabel: l("(Our services)", "(خدماتنا)"),
  servicesTitle: l("Our Services", "خدماتنا"),
  servicesDesc: l("We bring timeless spaces to life through a harmony of texture, structure and atmosphere.", "نُحيي مساحات خالدة بتناغم الملمس والبنية والأجواء."),
  processLabel: l("(Our process)", "(آلية عملنا)"),
  processTitle: l("Studio Workflow", "مسار العمل في الاستوديو"),
  processDesc: l(
    "More than standard deliverables, our approach is a systematic journey that turns ideas into spaces people love to live in.",
    "أكثر من مخرجات اعتيادية، منهجنا رحلة منظمة تحوّل الأفكار إلى مساحات يحب الناس العيش فيها."
  ),
  insightLabel: l("(Insight)", "(مقالات)"),
  insightTitle: l("Studio Insight", "رؤى الاستوديو"),
  insightDesc: l(
    "In every entry, we discuss concepts in spatial design, material selection and lighting that shape memorable living environments.",
    "في كل مقال نناقش مفاهيم التصميم المكاني واختيار المواد والإضاءة التي تصنع بيئات معيشة لا تُنسى."
  ),
  faqLabel: l("(FAQ)", "(أسئلة)"),
  faqTitle: l("Questions, answered", "أسئلتكم وإجاباتنا"),
  faqDesc: l(
    "Whether you are commissioning a bespoke residence or updating an interior, here are clear answers about how we collaborate.",
    "سواء كنت تُكلّف بمسكن خاص أو تُحدّث مساحة داخلية، إليك إجابات واضحة عن طريقة تعاوننا."
  ),
  faqStill: l("Still have questions?", "ما زالت لديك أسئلة؟"),
  faqStillText: l(
    "Need clarification on our process, timelines or fees? Our team is here to guide you through the details.",
    "تحتاج توضيحاً حول آلية العمل أو المدة أو الأتعاب؟ فريقنا هنا ليرشدك عبر التفاصيل."
  ),
  ctaLabel: l("(Get started)", "(ابدأ الآن)"),
  ctaTitle: l("Start the journey?", "هل نبدأ الرحلة؟"),
  ctaText: l(
    "We shape environments where form, material and light create an enduring harmony between landscape and structure: bespoke, elegant and intentionally lived.",
    "نصمم بيئات يصنع فيها الشكل والمادة والضوء تناغماً دائماً بين المشهد والمبنى: خاصة وأنيقة ومعاشة بقصد."
  ),
};

export const MARQUEE = [
  "/images/strip-1.jpg",
  "/images/strip-2.jpg",
  "/images/strip-3.jpg",
  "/images/strip-4.jpg",
  "/images/strip-5.jpg",
  "/images/blog-2.jpg",
];

export const CLIENTS = [
  "Almar Holdings", "Naseem Hospitality", "Qasr Developments",
  "Wadi Capital", "Sahil Group", "Noor Estates",
  "Layan Hotels", "Tuwaiq Partners", "Dar Al Salam",
];

/* ---------- Services ---------- */
export interface Service {
  title: L;
  short: L;
  body: L;
  items: L[];
}
export const SERVICES: Service[] = [
  {
    title: l("Architectural Planning", "التخطيط المعماري"),
    short: l("Site analysis, massing and full architectural design.", "تحليل الموقع والكتل والتصميم المعماري الكامل."),
    body: l(
      "From the first site walk to construction drawings, we shape buildings that respond to climate, orientation and the way you live.",
      "من الزيارة الأولى للموقع إلى المخططات التنفيذية، نصمم مباني تستجيب للمناخ والاتجاه وطريقة حياتك."
    ),
    items: [l("Site and climate analysis", "تحليل الموقع والمناخ"), l("Concept and schematic design", "التصميم الأولي والمفاهيمي"), l("Permit and construction drawings", "مخططات التراخيص والتنفيذ")],
  },
  {
    title: l("Spatial Curation", "التنسيق المكاني"),
    short: l("Layouts, flow and the composition of every room.", "التوزيعات والانسيابية وتكوين كل غرفة."),
    body: l(
      "We compose rooms as sequences: light, proportion and circulation resolved together so that every space feels considered.",
      "نؤلف الغرف كمتتاليات: الضوء والنِّسب والحركة تُحَل معاً ليبدو كل فضاء مدروساً."
    ),
    items: [l("Space planning and flow", "تخطيط الفراغات والانسيابية"), l("Furniture and lighting layouts", "توزيع الأثاث والإضاءة"), l("3D visuals and walkthroughs", "عروض ثلاثية الأبعاد وجولات افتراضية")],
  },
  {
    title: l("Bespoke Interiors", "تصاميم داخلية خاصة"),
    short: l("Materials, joinery and furnishings made for the home.", "مواد ونجارة وأثاث مصنوع خصيصاً للبيت."),
    body: l(
      "Natural stone, oak, plaster and linen, detailed with custom joinery that ages gracefully and feels made for you.",
      "حجر طبيعي وبلوط وجص وكتان، مع نجارة مخصصة تتقدم في العمر بأناقة وتبدو مصنوعة لك."
    ),
    items: [l("Material and colour palettes", "لوحات المواد والألوان"), l("Custom joinery design", "تصميم النجارة المخصصة"), l("Furnishing and styling", "التأثيث واللمسات النهائية")],
  },
  {
    title: l("Environmental Design", "التصميم البيئي"),
    short: l("Landscape, shade and passive cooling for the Gulf climate.", "تنسيق المواقع والظل والتبريد السلبي لمناخ الخليج."),
    body: l(
      "Courtyards, shaded terraces and native planting reduce energy use and extend the living space outdoors.",
      "الأفنية والتراسات المظللة والنباتات المحلية تقلل استهلاك الطاقة وتمد المعيشة إلى الخارج."
    ),
    items: [l("Landscape and courtyards", "المناظر الطبيعية والأفنية"), l("Passive cooling strategy", "استراتيجية التبريد السلبي"), l("Water and planting design", "تصميم المياه والنباتات")],
  },
];

/* ---------- Process ---------- */
export interface Step {
  title: L;
  body: L;
  long: L;
}
export const PROCESS: Step[] = [
  {
    title: l("Site Consultation", "استشارة الموقع"),
    body: l(
      "We begin with an interview and a site visit to understand your lifestyle, parameters and architectural preferences before drawing a line.",
      "نبدأ بمقابلة وزيارة للموقع لفهم أسلوب حياتك ومحدداتك وتفضيلاتك المعمارية قبل رسم أي خط."
    ),
    long: l("Two to three weeks. Brief, site survey, climate study and a clear scope and fee proposal.", "من أسبوعين إلى ثلاثة. الملخص ومسح الموقع ودراسة المناخ وعرض واضح للنطاق والأتعاب."),
  },
  {
    title: l("Spatial Concepts", "المفاهيم المكانية"),
    body: l(
      "This is where function meets artistry. We draft layouts, material palettes and 3D visuals so every decision is visible before it is built.",
      "هنا تلتقي الوظيفة بالفن. نرسم التوزيعات ولوحات المواد وعروضاً ثلاثية الأبعاد ليكون كل قرار مرئياً قبل البناء."
    ),
    long: l("Four to six weeks. Concept options, massing models, mood boards and a refined preferred direction.", "من أربعة إلى ستة أسابيع. خيارات مفاهيمية ونماذج كتل ولوحات أجواء واتجاه مفضل مصقول."),
  },
  {
    title: l("Crafting Spaces", "صناعة المساحات"),
    body: l(
      "We turn the chosen concept into construction documents. Every detail is calculated, from daylight angles to custom cabinetry.",
      "نحوّل المفهوم المختار إلى وثائق تنفيذية. كل تفصيل محسوب، من زوايا الضوء إلى الخزائن المخصصة."
    ),
    long: l("Eight to twelve weeks. Developed design, detailed drawings, specifications and coordination with engineers.", "من ثمانية إلى اثني عشر أسبوعاً. تصميم مطوّر ورسومات تفصيلية ومواصفات وتنسيق مع المهندسين."),
  },
  {
    title: l("Build & Handover", "البناء والتسليم"),
    body: l(
      "We stay on site with the contractor, review quality at every stage and hand over a home that matches the drawings.",
      "نبقى في الموقع مع المقاول، ونراجع الجودة في كل مرحلة، ونسلّم بيتاً يطابق المخططات."
    ),
    long: l("Through completion. Site supervision, snagging, furnishing support and a post-handover review.", "حتى الإنجاز. إشراف على الموقع وقوائم الملاحظات ودعم التأثيث ومراجعة بعد التسليم."),
  },
];

/* ---------- Studio page ---------- */
export const STUDIO = {
  aboutTitle: l("About Studio", "عن الاستوديو"),
  aboutLabel: l("(About us)", "(عنّا)"),
  aboutStory: l("The story", "القصة"),
  aboutIntro: l(
    "From residential concepts to bespoke spatial environments, every structure here reveals a narrative shaped by light and proportion.",
    "من المفاهيم السكنية إلى البيئات المكانية الخاصة، يكشف كل مبنى هنا سرداً صاغه الضوء والنِّسب."
  ),
  storiesLabel: l("(Stories)", "(حكايات)"),
  stories: l(
    "Rawiya Studio was founded on a simple belief: that a home should tell the story of the people who live in it. It began with a small team of architects connected by a passion for spatial design, tactile materials and light. Inspired by site context, careful proportion and a dedication to timeless elegance, the practice has matured from early sketches into built work across the Kingdom.",
    "تأسس استوديو راوية على إيمان بسيط: أن البيت يجب أن يحكي قصة من يسكنه. بدأ بفريق صغير من المعماريين يجمعهم شغف بالتصميم المكاني والمواد الملموسة والضوء. وبوحي من سياق الموقع والنِّسب الدقيقة والتزام بالأناقة الخالدة، نضجت الممارسة من الرسومات الأولى إلى أعمال منفذة في أرجاء المملكة."
  ),
  howLabel: l("(How we do)", "(كيف نعمل)"),
  how: l(
    "Through site dialogue and craftsmanship, we turn spatial concepts into enduring physical sanctuaries, grounded in warmth and crafted for living.",
    "عبر الحوار مع الموقع والصنعة، نحوّل المفاهيم المكانية إلى ملاذات مادية دائمة، متجذرة في الدفء ومصنوعة للحياة."
  ),
  howSide: l("We turn ambition into proven results, backed by numbers.", "نحوّل الطموح إلى نتائج مثبتة، تدعمها الأرقام."),
  stats: [
    { to: 60, decimals: 0, suffix: "+", label: l("Projects completed", "مشروعاً منجزاً") },
    { to: 14, decimals: 0, suffix: "", label: l("Years of practice", "سنة من الممارسة") },
    { to: 12, decimals: 0, suffix: "", label: l("Brands elevated", "علامة تجارية ارتقينا بها") },
    { to: 16, decimals: 0, suffix: "", label: l("International features", "ظهوراً دولياً") },
    { to: 19, decimals: 0, suffix: "", label: l("Studio collaborators", "متعاوناً في الاستوديو") },
    { to: 1.2, decimals: 1, suffix: "K", label: l("Site visits", "زيارة موقع") },
  ],
  valuesLabel: l("(Our values)", "(قيمنا)"),
  valuesTitle: l("Core Principles", "المبادئ الأساسية"),
  valuesDesc: l("Grounded in spatial clarity, material integrity and lasting craftsmanship.", "قائمة على الوضوح المكاني وصدق المواد والصنعة الدائمة."),
  values: [
    { title: l("Spatial Clarity", "الوضوح المكاني"), text: l("Rethinking structural boundaries to elevate modern daily living.", "إعادة التفكير في الحدود الإنشائية للارتقاء بالحياة اليومية العصرية.") },
    { title: l("Authenticity", "الأصالة"), text: l("Honouring natural materials that age with quiet elegance.", "تكريم المواد الطبيعية التي تتقدم في العمر بأناقة هادئة.") },
    { title: l("Partnership", "الشراكة"), text: l("Working beside clients to realise a shared sanctuary vision.", "العمل إلى جانب العملاء لتحقيق رؤية مشتركة للملاذ.") },
    { title: l("Craftsmanship", "الصنعة"), text: l("Executing every architectural detail with precision and care.", "تنفيذ كل تفصيل معماري بدقة وعناية.") },
  ],
};

/* ---------- FAQ ---------- */
export const FAQS: { q: L; a: L }[] = [
  {
    q: l("What architectural styles do you specialise in?", "ما الأساليب المعمارية التي تتخصصون بها؟"),
    a: l("We specialise in contemporary architecture rooted in Gulf climate and craft: courtyards, deep shade, natural stone, plaster and concrete, with a quiet, timeless character.", "نتخصص في العمارة المعاصرة المتجذرة في مناخ الخليج وحرفه: أفنية وظل عميق وحجر طبيعي وجص وخرسانة، بطابع هادئ خالد."),
  },
  {
    q: l("Do you offer full-service project management?", "هل تقدمون خدمة إدارة المشروع بالكامل؟"),
    a: l("Yes. We can manage the project from concept to handover, including consultants, tenders, site supervision and snagging, or work alongside your own team.", "نعم. يمكننا إدارة المشروع من المفهوم حتى التسليم، بما يشمل الاستشاريين والمناقصات والإشراف على الموقع وقوائم الملاحظات، أو العمل مع فريقك."),
  },
  {
    q: l("Do you work internationally or outside Riyadh?", "هل تعملون خارج الرياض أو دولياً؟"),
    a: l("We work across Saudi Arabia and the wider Gulf, and take selected international commissions with a local partner architect.", "نعمل في أنحاء السعودية والخليج، ونقبل مشاريع دولية مختارة بالتعاون مع معماري شريك محلي."),
  },
  {
    q: l("How do you approach sustainability?", "كيف تتعاملون مع الاستدامة؟"),
    a: l("Through passive design first: orientation, shade, thermal mass and natural ventilation, then efficient systems and local materials to reduce embodied carbon.", "من خلال التصميم السلبي أولاً: الاتجاه والظل والكتلة الحرارية والتهوية الطبيعية، ثم الأنظمة الكفؤة والمواد المحلية لتقليل الكربون المتجسد."),
  },
  {
    q: l("Can I request changes once construction has started?", "هل يمكنني طلب تعديلات بعد بدء البناء؟"),
    a: l("Small adjustments are possible. We freeze the design before construction to protect budget and schedule, and we advise on the cost of any later change.", "التعديلات الصغيرة ممكنة. نُثبّت التصميم قبل البناء لحماية الميزانية والجدول، ونوضح تكلفة أي تغيير لاحق."),
  },
  {
    q: l("What is your typical pricing and project structure?", "ما هو نظام الأتعاب وهيكل المشروع المعتاد؟"),
    a: l("We work on a fixed fee per phase, agreed after the initial consultation, so you always know the cost before each stage begins.", "نعمل بأتعاب ثابتة لكل مرحلة، يُتفق عليها بعد الاستشارة الأولى، لتعرف التكلفة دائماً قبل بدء كل مرحلة."),
  },
];

/* ---------- Blog ---------- */
export interface Post {
  slug: string;
  kind: "post";
  title: L;
  date: L;
  image: string;
  excerpt: L;
  body: L[];
}
export const POSTS: Post[] = [
  {
    slug: "art-of-timeless-design", kind: "post",
    title: l("The Art of Timeless Design: Spaces That Endure", "فن التصميم الخالد: مساحات تدوم"),
    date: l("Aug 12, 2026", "١٢ أغسطس ٢٠٢٦"),
    image: "/images/blog-1.jpg",
    excerpt: l("Why the most lasting homes are shaped by proportion and light, not trends.", "لماذا تُصاغ أطول البيوت عمراً بالنِّسب والضوء لا بالموضة."),
    body: [
      l("Timeless design is rarely loud. It is the result of repeated, patient decisions about proportion, shade and material, made so well that the house never feels dated.", "التصميم الخالد نادراً ما يكون صاخباً. إنه نتيجة قرارات متكررة ومتأنية حول النِّسب والظل والمادة، تُتخذ بإتقان فلا يبدو البيت قديماً أبداً."),
      l("We begin every project by asking what should still feel right in thirty years. Curved walls that catch the evening sun, deep openings that frame a single view, and surfaces that soften with age all pass that test.", "نبدأ كل مشروع بسؤال: ما الذي سيبقى مناسباً بعد ثلاثين عاماً؟ الجدران المنحنية التي تلتقط شمس المساء، والفتحات العميقة التي تؤطر مشهداً واحداً، والأسطح التي تلين مع الزمن، كلها تجتاز هذا الاختبار."),
      l("The result is architecture that asks very little of the people who live in it, and gives a great deal back.", "والنتيجة عمارة تطلب القليل ممن يسكنها، وتعطيه الكثير."),
    ],
  },
  {
    slug: "quiet-power-of-minimalism", kind: "post",
    title: l("The Quiet Power of Minimalism in Modern Interiors", "القوة الهادئة للتبسيط في التصميم الداخلي"),
    date: l("Aug 10, 2026", "١٠ أغسطس ٢٠٢٦"),
    image: "/images/blog-2.jpg",
    excerpt: l("Minimalism is not emptiness. It is the careful removal of everything that does not matter.", "التبسيط ليس فراغاً. إنه إزالة دقيقة لكل ما لا يهم."),
    body: [
      l("A minimal interior is not an empty one. It is a room where every object has been chosen, and everything else has been taken away.", "الداخلية البسيطة ليست خالية. إنها غرفة اختير فيها كل شيء، وأُزيل كل ما عداه."),
      l("In warm climates, minimalism has a practical side: smooth plaster, stone floors and simple geometry keep spaces cool, easy to maintain and calm to be in.", "في المناخات الحارة، للتبسيط جانب عملي: الجص الناعم وأرضيات الحجر والهندسة البسيطة تُبقي المساحات باردة وسهلة الصيانة وهادئة."),
      l("The trick is warmth. A single oak table, a linen curtain or a lamp placed well can do more than a dozen decorative objects.", "السر هو الدفء. طاولة بلوط واحدة أو ستارة كتان أو مصباح في مكانه الصحيح قد يفعل أكثر من عشرات القطع الزخرفية."),
    ],
  },
  {
    slug: "designing-a-home-that-moves-with-the-sun", kind: "post",
    title: l("How to Design a Home That Moves with the Sun", "كيف تصمم بيتاً يتحرك مع الشمس"),
    date: l("Aug 8, 2026", "٨ أغسطس ٢٠٢٦"),
    image: "/images/blog-3.jpg",
    excerpt: l("Orientation, overhangs and courtyards: the first decisions that decide how a home feels.", "الاتجاه والأسقف البارزة والأفنية: القرارات الأولى التي تحدد إحساس البيت."),
    body: [
      l("The sun is the most important client on any project. Where it rises, where it sets and how high it climbs in summer should shape the plan before anything else does.", "الشمس هي العميل الأهم في أي مشروع. مكان شروقها وغروبها وارتفاعها في الصيف يجب أن يشكّل المخطط قبل أي شيء آخر."),
      l("We place living spaces to catch soft morning light and shade them from the harsh afternoon. Deep overhangs, screened terraces and inner courtyards do the work of mechanical cooling, quietly and for free.", "نضع المعيشة لتلتقط ضوء الصباح الناعم ونظللها من ظهيرة قاسية. الأسقف العميقة والتراسات المحجوبة والأفنية الداخلية تقوم بعمل التبريد الميكانيكي بهدوء ودون كلفة."),
      l("A home designed this way is more comfortable, cheaper to run and far more beautiful at every hour of the day.", "والبيت المصمم بهذه الطريقة أكثر راحة وأقل كلفة في التشغيل وأجمل بكثير في كل ساعات النهار."),
    ],
  },
];

export const PROJECT_TYPES: L[] = [
  l("Private residence", "مسكن خاص"),
  l("Hospitality", "ضيافة"),
  l("Workplace", "مكان عمل"),
  l("Interior only", "تصميم داخلي فقط"),
  l("Other", "أخرى"),
];
