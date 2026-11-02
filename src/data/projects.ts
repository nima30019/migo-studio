import { Locale } from './translations';

export interface ProjectItem {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  categoryKey: 'vr-mr' | 'ar' | 'games' | 'exhibitions' | '3d' | 'simulation';
  shortDescription: Record<Locale, string>;
  fullOverview: Record<Locale, string>;
  clientSample: Record<Locale, string>;
  year: string;
  challenge: Record<Locale, string>;
  solution: Record<Locale, string>;
  technicalImplementation: Record<Locale, string>;
  technologies: string[];
  outcomes: Record<Locale, string[]>;
  featured: boolean;
  visualGradient: string;
  heroAccent: string;
}

export const PROJECT_CATEGORIES = [
  { key: 'all', label: { en: 'All Projects', fa: 'همه پروژه‌ها' } },
  { key: 'vr-mr', label: { en: 'VR / MR', fa: 'واقعیت مجازی و ترکیبی' } },
  { key: 'ar', label: { en: 'AR / WebAR', fa: 'واقعیت افزوده' } },
  { key: 'games', label: { en: 'Interactive Games', fa: 'بازی‌های تعاملی' } },
  { key: 'exhibitions', label: { en: 'Exhibition Tech', fa: 'فناوری‌های نمایشگاهی' } },
  { key: '3d', label: { en: '3D Visualization', fa: 'طراحی سه‌بعدی' } },
  { key: 'simulation', label: { en: 'Simulation', fa: 'شبیه‌سازی صنعتی' } },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'holo-industrial-vr',
    slug: 'holo-industrial-vr',
    title: {
      en: 'AeroTurbine Immersive VR Maintenance Rig',
      fa: 'شبیه‌ساز واقعیت مجازی تعمیر و نگهداری توربین هوایی',
    },
    category: {
      en: 'VR / MR',
      fa: 'واقعیت مجازی و ترکیبی',
    },
    categoryKey: 'vr-mr',
    shortDescription: {
      en: 'A high-precision VR maintenance trainer allowing aeronautic technicians to disassemble jet turbines with millimeter-accurate physics.',
      fa: 'شبیه‌ساز واقعیت مجازی با دقت میلی‌متری جهت آموزش باز و بست و عیب‌یابی توربین‌های جت توسط مهندسان هوانوردی.',
    },
    fullOverview: {
      en: 'Built for enterprise aerospace engineering, this immersive VR application simulates the complex overhaul sequence of commercial high-bypass turbofan engines. Technicians interact with over 350 individual components using natural hand-tracking in standalone VR headsets.',
      fa: 'این شبیه‌ساز واقعیت مجازی برای مراکز پیشرفته هوانوردی طراحی شده تا پروتکل‌های بازرسی و تعمیر موتورهای توربوفن جت را بدون نیاز به حضور فیزیکی روی موتور واقعی آموزش دهد. مهندسان با بیش از ۳۵۰ قطعه مجزا با رهگیری طبیعی دست‌ها تعامل دارند.',
    },
    clientSample: {
      en: 'Aerospace Engineering Institute (Showcase Prototype)',
      fa: 'موسسه مهندسی هوانوردی (نمونه نمایشی استودیو)',
    },
    year: '2025',
    challenge: {
      en: 'Physical jet engines cost millions and cannot be taken out of flight operations solely for junior mechanic training without immense operational cost and scheduling delays.',
      fa: 'موتورهای جت تجاری هزینه‌های سرسام‌آوری دارند و خارج کردن آن‌ها از مدار پرواز برای آموزش تکنسین‌های تازه‌کار باعث هزینه‌های سنگین و تاخیر در پروازها می‌شد.',
    },
    solution: {
      en: 'MIGO engineered a standalone Meta Quest 3 application utilizing optimized CAD meshes, dynamic torque feedback, and a real-time procedural step-verifier with automatic mistake highlighting.',
      fa: 'استودیو MIGO یک نرم‌افزار روان برای عینک‌های Meta Quest 3 با مش‌های بهینه‌شده صنعتی CAD، بازخورد گشتاور آچارها و راهنمای گام‌به‌گام هوشمند طراحی کرد که خطاهای تکنسین را فوراً مشخص می‌کند.',
    },
    technicalImplementation: {
      en: 'Developed in Unity 6 using the OpenXR runtime. Custom LOD generation reduced 14 million polygon CAD files to 420,000 polygons while preserving micrometer edge chamfers. Spatial audio conveys turbine bearing friction.',
      fa: 'توسعه در موتور یونیتی ۶ با استاندارد OpenXR. با الگوریتم‌های اختصاصی LOD حجم فایل‌های ۱۴ میلیون چندضلعی صنعتی به ۴۲۰ هزار چندضلعی تقلیل یافت بدون آنکه از کیفیت شیارهای میکرومتری کاسته شود.',
    },
    technologies: ['Unity 6', 'C#', 'OpenXR', 'Meta XR SDK', 'Blender', 'Substance Painter'],
    outcomes: {
      en: [
        'Zero physical hardware risk during critical disassembly training',
        '85% reduction in training facility costs per cohort',
        'Real-time automated PDF evaluation logs for instructors',
        'Solid 90 FPS performance on standalone mobile VR chipsets',
      ],
      fa: [
        'صفر شدن خطرات جانی و آسیب به تجهیزات در حین باز و بست قطعات حساس',
        'کاهش ۸۵ درصدی هزینه‌های دوره آموزشی به ازای هر دوره کارآموزی',
        'صدور خودکار کارنامه ارزشیابی با ثبت ثانیه‌به‌ثانیه اشتباهات',
        'نرخ فریم پایدار ۹۰ فریم بر ثانیه روی پردازنده‌های مستقل موبایلی عینک',
      ],
    },
    featured: true,
    visualGradient: 'from-orange-950/40 via-neutral-900 to-black',
    heroAccent: '#FF781F',
  },
  {
    id: 'lumina-motion-wall',
    slug: 'lumina-motion-wall',
    title: {
      en: 'Lumina Motion: Interactive Exhibition Wall',
      fa: 'دیوار تعاملی لومینا: تجربه حسی رویدادهای بین‌المللی',
    },
    category: {
      en: 'Exhibition Technology',
      fa: 'فناوری‌های نمایشگاهی',
    },
    categoryKey: 'exhibitions',
    shortDescription: {
      en: 'A 12-meter ultra-wide interactive projection wall driven by multi-sensor depth tracking and generative particle systems.',
      fa: 'دیوار تعاملی عریض ۱۲ متری با سنسورهای ردیابی حرکتی عمق‌سنج و ذرات دینامیک گرافیکی که با حضور و حرکات دست بازدیدکنندگان واکنش نشان می‌دهد.',
    },
    fullOverview: {
      en: 'Designed for high-traffic technology expos and museum atriums, Lumina Motion turns visitor movement into hypnotic digital art. Multiple synchronized ultra-short-throw laser projectors create a seamless 8K canvas where people interact with brand storylines without wearing or touching anything.',
      fa: 'این چیدمان تعاملی برای رویدادهای فناوری، نمایشگاه‌های بین‌المللی و لابی‌های مدرن طراحی شده است. چندین پروژکتور لیزری پرتوکوتاه یک پرده یکپارچه با رزولوشن 8K ایجاد می‌کنند که بازدیدکنندگان بدون نیاز به دست زدن به هیچ وسیله‌ای، تنها با راه رفتن و اشاره دست با هویت برند تعامل می‌کنند.',
    },
    clientSample: {
      en: 'Tech Expo Global Pavilion (Showcase Concept)',
      fa: 'پاویون فناوری و نوآوری (نمونه مفهومی استودیو)',
    },
    year: '2025',
    challenge: {
      en: 'Standard exhibition booths struggle to retain visitor attention for more than 15 seconds in crowded convention halls.',
      fa: 'غرفه‌های استاندارد و نمایشگرهای سنتی در شلوغی سالن‌های نمایشگاهی توانایی جلب و حفظ توجه مخاطبان را برای بیش از چند ثانیه ندارند.',
    },
    solution: {
      en: 'MIGO created a body-tracking generative wall where approaching visitors trigger colorful shockwaves of light and dynamic product milestones that travel alongside their walking direction.',
      fa: 'استودیو MIGO دیواری تعاملی با رهگیری حرکت بدن ایجاد کرد که با نزدیک شدن افراد، امواجی از نور و ذرات درخشان به همراه المان‌های معرفی محصول در جهت حرکت آن‌ها به جریان می‌افتند.',
    },
    technicalImplementation: {
      en: 'Engineered using TouchDesigner and C# with Azure Kinect depth arrays. Real-time edge blending and geometric warping ensure seamless imagery across curved multi-projector surfaces.',
      fa: 'پیاده‌سازی با نرم‌افزار تاچ‌دیزاینر و موتور یونیتی به همراه آرایه‌ای از سنسورهای عمق‌سنج فروسرخ. الگوریتم اختصاصی Edge Blending تصاویر چند پروژکتور را بدون هیچ خط اتصالی یکپارچه کرد.',
    },
    technologies: ['TouchDesigner', 'Unity', 'Azure Kinect', 'LiDAR', 'GLSL Shaders', 'Resolume'],
    outcomes: {
      en: [
        'Over 18,000 active visitor interactions during a 4-day convention',
        'Average dwell time increased from 20 seconds to 4.2 minutes',
        'Zero downtime across 40 continuous operating hours',
        'Social media share rate reached 34% among engaged visitors',
      ],
      fa: [
        'بیش از ۱۸,۰۰۰ تعامل مستقیم بازدیدکنندگان طی ۴ روز رویداد',
        'افزایش زمان توقف مخاطبان در غرفه از ۲۰ ثانیه به بیش از ۴ دقیقه',
        'پایداری کامل و بدون قطعی در طول ۴۰ ساعت کار مداوم نمایشگاهی',
        'ثبت نرخ ۳۴ درصدی اشتراک‌گذاری ویدیوها در اینستاگرام و شبکه‌های اجتماعی',
      ],
    },
    featured: true,
    visualGradient: 'from-amber-950/40 via-neutral-900 to-black',
    heroAccent: '#FF781F',
  },
  {
    id: 'webar-luxury-showcase',
    slug: 'webar-luxury-showcase',
    title: {
      en: 'Chronos WebAR: Zero-Install 3D Watch Experience',
      fa: 'کرونوس WebAR: تجربه واقعیت افزوده ساعت لوکس بدون نصب',
    },
    category: {
      en: 'AR / WebAR',
      fa: 'واقعیت افزوده',
    },
    categoryKey: 'ar',
    shortDescription: {
      en: 'An instant-load WebAR experience letting customers virtually try on and inspect a luxury chronograph directly from the mobile browser.',
      fa: 'تجربه واقعیت افزوده مبتنی بر وب که به خریداران اجازه می‌دهد ساعت لوکس را در مقیاس دقیق روی مچ دست خود پرو و در زاویه ۳۶۰ درجه بررسی کنند.',
    },
    fullOverview: {
      en: 'Chronos removes the app download barrier completely. By scanning a packaging QR code, mobile shoppers open a high-end 3D watch viewer with realistic reflections, sapphire crystal refraction, and live wrist-placement tracking.',
      fa: 'پروژه کرونوس مانع همیشگی دانلود اپلیکیشن را کاملاً حذف کرد. با اسکن کد QR روی جعبه یا بروشور تبلیغاتی، صفحه وب اختصاصی باز شده و ساعت سه‌بعدی با انکسار واقعی شیشه یاقوت کبود و رهگیری زنده مچ دست ظاهر می‌شود.',
    },
    clientSample: {
      en: 'Horology Atelier (Design Demonstration)',
      fa: 'برند ساعت‌سازی لوکس (نمونه مفهومی استودیو)',
    },
    year: '2026',
    challenge: {
      en: 'Over 80% of e-commerce shoppers abandon AR campaigns when forced to download an app from the App Store or Google Play.',
      fa: 'بیش از ۸۰ درصد مشتریان تجارت الکترونیک در صورتی که برای دیدن واقعیت افزوده ملزم به نصب اپلیکیشن شوند، صفحه را ترک می‌کنند.',
    },
    solution: {
      en: 'MIGO deployed a lightweight WebGL/WebXR pipeline with WebAssembly neural wrist tracking that executes in Chrome and Safari at 60 FPS without any installation.',
      fa: 'استودیو MIGO از پایپ‌لاین سبک WebGL به همراه کتابخانه یادگیری ماشین تشخیص دست در وب استفاده کرد که در مرورگرهای سافاری و کروم با سرعت ۶۰ فریم اجرا می‌شود.',
    },
    technicalImplementation: {
      en: 'Built using Three.js, WebAssembly, and custom PBR shaders for metallic sheen and anisotropic brushed bezels. Total asset payload compressed under 4.8 MB.',
      fa: 'توسعه با کتابخانه Three.js و بهینه‌سازی شیدرهای PBR فلزی و شیشه ضدبازتاب. کل حجم فایل‌های دانلودی زیر ۴.۸ مگابایت فشرده شد تا در اینترنت موبایل سریع باز شود.',
    },
    technologies: ['Three.js', 'WebAssembly', 'WebXR', 'GLSL', 'Blender', 'TypeScript'],
    outcomes: {
      en: [
        '4.8 MB total bundle size for lightning-fast 2-second load times',
        'Zero app downloads required across iOS and Android',
        '28% increase in buyer engagement compared to static 2D product photos',
        'Accurate wrist sizing guide reducing product return rates',
      ],
      fa: [
        'حجم کل زیر ۴.۸ مگابایت و زمان لود ۲ ثانیه‌ای روی اینترنت همراه',
        'سازگاری ۱۰۰ درصدی با آیفون و اندروید بدون هیچ اپلیکیشن واسط',
        'افزایش ۲۸ درصدی تعامل مشتریان نسبت به تصاویر دوبعدی معمولی',
        'تشخیص دقیق اندازه دور مچ و کاهش چشمگیر میزان مرجوعی کالا',
      ],
    },
    featured: true,
    visualGradient: 'from-orange-950/30 via-neutral-900 to-black',
    heroAccent: '#FF781F',
  },
  {
    id: 'cyber-racer-arcade',
    slug: 'cyber-racer-arcade',
    title: {
      en: 'Apex Circuit: Exhibition Kinetic Racing Game',
      fa: 'مدار آپکس: بازی مسابقه‌ای حرکتی برای رویدادها',
    },
    category: {
      en: 'Interactive Games',
      fa: 'بازی‌های تعاملی',
    },
    categoryKey: 'games',
    shortDescription: {
      en: 'A high-octane 90-second arcade racer controlled via physical steering wheels and real-time multiplayer booth competitions.',
      fa: 'بازی مسابقه‌ای هیجان‌انگیز ۹۰ ثانیه‌ای برای غرفه‌های نمایشگاهی با فرمان‌های مسابقه‌ای فیزیکی، چالش چندنفره و جدول آنلاین امتیازات.',
    },
    fullOverview: {
      en: 'Designed specifically to drive competitive energy at tech festivals and automotive expos, Apex Circuit pits two players against each other in futuristic neon racing arenas. Players steer with force-feedback wheels while spectator screens broadcast live telemetry.',
      fa: 'این بازی به طور اختصاصی برای ایجاد هیجان و رقابت در فستیوال‌های فناوری و همایش‌های خودرو طراحی شده است. دو بازیکن هم‌زمان پشت فرمان‌های شبیه‌ساز می‌نشینند و تماشاگران رانندگی آن‌ها را روی مانیتورهای بالای غرفه تماشا می‌کنند.',
    },
    clientSample: {
      en: 'Automotive Innovation Forum (Booth Game Showcase)',
      fa: 'فروم نوآوری صنعت خودرو (پروژه نمونه نمایشگاهی)',
    },
    year: '2025',
    challenge: {
      en: 'Creating a game simple enough for visitors to pick up within 5 seconds without instructions, yet intense enough to generate crowds and cheering.',
      fa: 'طراحی یک بازی که هر کاربری بتواند ظرف ۵ ثانیه کنترل آن را بفهمد، اما آن‌قدر هیجان‌انگیز باشد که جمعیت اطراف غرفه فریاد تشویق سر دهند.',
    },
    solution: {
      en: 'Intuitive drift mechanics, aggressive visual speed cues, and a dynamic handicap system ensuring close finishes and high drama in every 90-second round.',
      fa: 'مکانیک دریفت لذت‌بخش، افکت‌های بصری سرعت بالا، و سیستم هوشمند ایجاد رقابت پایاپای تا آخرین ثانیه مسابقه ۹۰ ثانیه‌ای.',
    },
    technicalImplementation: {
      en: 'Custom Unity physics engine tailored for arcade responsive steering. Direct HID integration with Fanatec and Logitech force feedback wheels. Cloud-synced QR leaderboard.',
      fa: 'کدنویسی موتور فیزیک اختصاصی یونیتی، اتصال مستقیم به پدال و فرمان‌های لاجیتک و فاناتک و ذخیره نتایج مسابقه در جدول آنلاین با اسکن QR کد جایزه.',
    },
    technologies: ['Unity', 'C#', 'DirectInput HID', 'FMOD Studio', 'Post-Processing Stack'],
    outcomes: {
      en: [
        'Over 1,200 matches played across a 3-day expo weekend',
        'Contestant phone numbers collected with 94% consent rate for prize draws',
        'Zero game crashes or input latency delays throughout the event',
      ],
      fa: [
        'بیش از ۱۲۰۰ دست بازی در طول ۳ روز برگزاری نمایشگاه',
        'جمع‌آوری شماره تماس بیش از ۹۴٪ بازیکنان برای شرکت در قرعه‌کشی و لید فروش',
        'پایداری صددرصدی بدون هیچ لگ یا تاخیر در پاسخگویی فرمان‌ها',
      ],
    },
    featured: false,
    visualGradient: 'from-orange-900/30 via-neutral-900 to-black',
    heroAccent: '#FF781F',
  },
  {
    id: 'petrochem-hse-sim',
    slug: 'petrochem-hse-sim',
    title: {
      en: 'PetroSafe: Industrial Hazard Simulator',
      fa: 'پتروسیف: شبیه‌ساز تعاملی مهار حوادث صنعتی',
    },
    category: {
      en: 'Simulation',
      fa: 'شبیه‌سازی صنعتی',
    },
    categoryKey: 'simulation',
    shortDescription: {
      en: 'Emergency gas leak and valve containment simulator for oil refinery operators with physical fluid behavior.',
      fa: 'شبیه‌ساز مهار نشت گاز و سناریوهای مهار فشار خطوط لوله برای اپراتورهای پالایشگاه با شبیه‌سازی دینامیک سیالات و گازهای سمی.',
    },
    fullOverview: {
      en: 'PetroSafe trains plant operators to respond calmly during catastrophic valve ruptures and toxic gas leaks. Users navigate a photorealistic 3D digital twin of a processing plant, identifying pipe pressures, donning virtual breathing gear, and coordinating shutoff sequences.',
      fa: 'نرم‌افزار پتروسیف به پرسنل پالایشگاهی آموزش می‌دهد در لحظات بحرانی نشت گازهای سمی خونسردی خود را حفظ کرده و پروتکل‌های ایمنی را گام‌به‌گام اجرا کنند. سیستم ماکت دیجیتالی دقیقی از تاسیسات با فشارسنج‌ها و شیرهای واقعی است.',
    },
    clientSample: {
      en: 'Refinery Process Safety Consortium (Simulation Prototype)',
      fa: 'کنسرسیوم ایمنی فرایندهای پالایشگاهی (نمونه شبیه‌سازی استودیو)',
    },
    year: '2025',
    challenge: {
      en: 'Practicing real fire and chemical emergencies is physically impossible without endangering lives, wasting fuel, or shutting down active refining operations.',
      fa: 'تمرین آتش‌سوزی واقعی یا نشت گازهای سمی در محیط فیزیکی بدون به خطر انداختن جان انسان‌ها و تعطیلی تاسیسات غیرممکن است.',
    },
    solution: {
      en: 'MIGO designed a realistic physics-backed scenario engine featuring volumetric smoke propagation, pressure gauge calculations, and SCORM telemetry output.',
      fa: 'استودیو MIGO موتور شبیه‌سازی فیزیک واقعی شامل پخش دودهای حجمی، افت فشار گیج‌ها و محاسبه زمان فرار استاندارد را پیاده‌سازی کرد.',
    },
    technicalImplementation: {
      en: 'Created in Unreal Engine 5 using Niagara particle systems for gas diffusion. Telemetry module tracks student decisions and exports grade cards directly to corporate HR systems.',
      fa: 'پیاده‌سازی در موتور آنریل انجین ۵ با سیستم ذرات نیاگارا برای رفتار سیالات و گازها، همراه با ماژول لاگ‌گیری عملکرد کارآموزان و خروجی گزارش به سامانه آموزش سازمان.',
    },
    technologies: ['Unreal Engine 5', 'Niagara VFX', 'C++', 'Chaos Physics', 'LMS SCORM API'],
    outcomes: {
      en: [
        '100% elimination of safety hazards during trainee emergency response drills',
        'Operator emergency response reaction time improved by 42%',
        'Seamless integration with corporate compliance tracking databases',
      ],
      fa: [
        'حذف ۱۰۰ درصدی خطرات جانی در دوره‌های آموزش واکنش اضطراری پرسنل',
        'بهبود ۴۲ درصدی زمان واکنش و بستن به موقع شیرهای اطمینان در ارزیابی نهایی',
        'اتصال خودکار به دیتابیس آموزش ضمن خدمت پرسنل',
      ],
    },
    featured: false,
    visualGradient: 'from-amber-950/30 via-neutral-900 to-black',
    heroAccent: '#FF781F',
  },
  {
    id: 'automotive-configurator-3d',
    slug: 'automotive-configurator-3d',
    title: {
      en: 'Velocita: Real-Time Web 3D EV Configurator',
      fa: 'ولوچیتا: کانفیگوراتور سه‌بعدی آنلاین خودروهای الکتریکی',
    },
    category: {
      en: '3D Visualization',
      fa: 'طراحی سه‌بعدی',
    },
    categoryKey: '3d',
    shortDescription: {
      en: 'Photorealistic WebGL vehicle customizer featuring customizable paint finishes, aero kits, and interior trims.',
      fa: 'سامانه سفارشی‌سازی سه‌بعدی خودرو در وب با رندرینگ فوتورئال، امکان تغییر رنگ‌های متالیک، رینگ‌ها، کیت بدنه و تودوزی چرم کابین.',
    },
    fullOverview: {
      en: 'Velocita puts a multi-million-polygon concept electric hypercar directly into browser windows. Shoppers toggle exterior pearlescent coats, inspect carbon-fiber aero diffusers in macro detail, open doors, and view the instrument cluster in day and night lighting moods.',
      fa: 'کانفیگوراتور ولوچیتا یک ابرخودروی الکتریکی پیشرفته را به صورت ریل‌تایم در مرورگر کاربران به نمایش می‌گذارد. کاربران می‌توانند رنگ‌های متالیک، قطعات فیبر کربن، زاویه باز شدن درها و تریم داخلی کابین را با نورپردازی متغیر روز و شب بررسی کنند.',
    },
    clientSample: {
      en: 'Concept Mobility Ventures (Showcase Demo)',
      fa: 'صنایع تحرک‌پذیری نوین (پروژه نمایشی استودیو)',
    },
    year: '2026',
    challenge: {
      en: 'Delivering cinematic car paint reflections and clear glass materials on average smartphones without draining battery or causing stutter.',
      fa: 'نمایش بازتاب‌های براق رنگ خودرو و شکست نور شیشه‌ها روی گوشی‌های هوشمند معمولی بدون کندی و داغ شدن دستگاه.',
    },
    solution: {
      en: 'MIGO engineered a custom shader library utilizing pre-filtered environment maps (IBL) and baked ambient occlusion, achieving luxury showroom visuals under 60 MB memory footprint.',
      fa: 'استودیو MIGO کتابخانه شیدرهای سفارشی IBL با بازتاب محیطی محاسباتی ایجاد کرد که کیفیتی در سطح رندرهای استودیویی را با کمتر از ۶۰ مگابایت مصرف حافظه ارائه می‌دهد.',
    },
    technicalImplementation: {
      en: 'Next.js App Router front-end hosting a responsive Three.js canvas. Custom clearcoat PBR shader imitating metallic flake dispersion. Instant URL configuration sharing.',
      fa: 'فرانت‌اند Next.js با کانوَس واکنش‌گرای Three.js و شیدر دولایه Clearcoat برای ذرات متالیک رنگ خودرو، همراه با امکان تولید لینک اشتراک‌گذاری مشخصات سفارشی‌شده.',
    },
    technologies: ['Next.js', 'React', 'Three.js', 'WebGL', 'Tailwind CSS', 'Blender'],
    outcomes: {
      en: [
        'Average user time spent customizing exceeded 6.8 minutes per visit',
        'Direct "Save & Share Configuration" rate of 41%',
        'Under 3.5 seconds initial asset load time on 4G cellular connections',
      ],
      fa: [
        'میانگین زمان سپری‌شده هر بازدیدکننده برای شخصی‌سازی بیش از ۶.۸ دقیقه',
        'نرخ ذخیره و ارسال لینک خودرو سفارشی‌شده توسط ۴۱ درصد کاربران',
        'زمان لود اولیه زیر ۳.۵ ثانیه حتی روی اینترنت سیم‌کارت 4G',
      ],
    },
    featured: true,
    visualGradient: 'from-orange-950/40 via-neutral-900 to-black',
    heroAccent: '#FF781F',
  },
];
