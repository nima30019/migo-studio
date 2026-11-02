import { Locale } from './translations';

export interface ServiceItem {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  overview: Record<Locale, string>;
  icon: string;
  badge: Record<Locale, string>;
  capabilities: Record<Locale, string[]>;
  useCases: Array<{
    title: Record<Locale, string>;
    desc: Record<Locale, string>;
  }>;
  technologies: string[];
  relevantProjects: string[];
  faqs: Array<{
    q: Record<Locale, string>;
    a: Record<Locale, string>;
  }>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'vr-mr',
    slug: 'virtual-reality',
    title: {
      en: 'Virtual Reality & Mixed Reality',
      fa: 'واقعیت مجازی و واقعیت ترکیبی (VR / MR)',
    },
    shortDescription: {
      en: 'High-fidelity immersive VR and MR environments for enterprise simulations, education, and entertainment.',
      fa: 'محیط‌های غوطه‌ورکننده با وفاداری بصری بالا برای شبیه‌سازی‌های سازمانی، آموزش پیشرفته و سرگرمی.',
    },
    overview: {
      en: 'MIGO engineers spatial computing applications that transport users into interactive digital realms. From tetherless standalone headsets to high-performance PC-VR rigs, we craft intuitive physics-driven interactions, realistic spatial audio, and photorealistic 3D environments.',
      fa: 'استودیو MIGO نرم‌افزارهای رایانش فضایی (Spatial Computing) طراحی می‌کند که کاربران را به اعماق دنیاهای دیجیتال هدایت می‌کنند. از هدست‌های مستقل بی‌سیم گرفته تا سیستم‌های قدرتمند PC-VR، ما تعاملات فیزیکی طبیعی، صدای فضایی سه‌بعدی و محیط‌های بسیار واقع‌گرایانه خلق می‌کنیم.',
    },
    icon: 'Glasses',
    badge: {
      en: 'Spatial Computing',
      fa: 'رایانش فضایی',
    },
    capabilities: {
      en: [
        'Standalone VR application development (Meta Quest, Pico, HTC Vive)',
        'PC-VR and high-end tethered experiences for industrial centers',
        'Mixed Reality passthrough and spatial anchoring',
        'Educational VR & university interactive laboratories',
        'Industrial VR simulations & hazard-free equipment training',
        'Virtual architectural walkthroughs with real-time lighting',
        'Interactive VR games and branded entertainment',
        'Multi-user collaborative VR meeting spaces',
      ],
      fa: [
        'توسعه اپلیکیشن‌های مستقل VR (Meta Quest، Pico و HTC Vive)',
        'تجربیات با گرافیک پیشرفته PC-VR برای مراکز صنعتی و نمایشگاهی',
        'ادغام واقعیت ترکیبی (MR Passthrough) و لنگراندازی فضایی در محیط واقعی',
        'محیط‌های آموزشی VR و آزمایشگاه‌های مجازی مدارس و دانشگاه‌ها',
        'شبیه‌سازی‌های صنعتی و آموزش کار با ماشین‌آلات سنگین بدون ریسک',
        'تورهای مجازی معماری با نورپردازی و متریال بی‌درنگ (Real-time)',
        'بازی‌های تعاملی VR و محتوای سرگرمی برندها',
        'فضاهای چندکاربره هم‌زمان برای جلسات و آموزش تیمی در واقعیت مجازی',
      ],
    },
    useCases: [
      {
        title: {
          en: 'Industrial Safety & HSE Training',
          fa: 'آموزش ایمنی و بهداشت صنعتی (HSE)',
        },
        desc: {
          en: 'Staff train inside virtual hazardous petrochemical facilities without real-world risk or production downtime.',
          fa: 'پرسنل در تاسیسات پتروشیمی شبیه‌سازی‌شده بدون هیچ‌گونه خطر جانی یا توقف خط تولید، پروتکل‌های اضطراری را تمرین می‌کنند.',
        },
      },
      {
        title: {
          en: 'Interactive Museum Installations',
          fa: 'چیدمان‌های تعاملی موزه‌ها و میراث فرهنگی',
        },
        desc: {
          en: 'Visitors explore reconstructed historical monuments and ancient artifacts at scale with natural gesture controls.',
          fa: 'بازدیدکنندگان ابنیه تاریخی بازسازی‌شده و آثار کهن را با ابعاد واقعی و به کمک ژست‌های حرکتی دست لمس و کاوش می‌کنند.',
        },
      },
      {
        title: {
          en: 'Virtual Medical & Surgical Walkthroughs',
          fa: 'آموزش تجهیزات پزشکی و اتاق عمل',
        },
        desc: {
          en: 'Medical students practice equipment manipulation and surgical theater workflows in high-fidelity 3D.',
          fa: 'دانشجویان پزشکی کار با تجهیزات پیشرفته اتاق عمل و مراحل فرایندهای درمانی را به صورت سه‌بعدی تعاملی می‌آموزند.',
        },
      },
    ],
    technologies: ['Unity', 'Unreal Engine 5', 'Meta XR Core SDK', 'OpenXR', 'WebXR', 'SteamVR', 'Blender'],
    relevantProjects: ['holo-industrial-vr', 'metaverse-exhibition-hub'],
    faqs: [
      {
        q: {
          en: 'Which VR headsets do you develop for?',
          fa: 'برای کدام هدست‌های واقعیت مجازی توسعه می‌دهید؟',
        },
        a: {
          en: 'We develop for all major modern platforms using OpenXR standards, including Meta Quest 2/3/Pro, Pico 4, HTC Vive Focus/XR Elite, Apple Vision Pro, and SteamVR PC headsets.',
          fa: 'ما با استفاده از استانداردهای یکپارچه OpenXR برای تمامی هدست‌های مطرح از جمله Meta Quest 2/3/Pro، Pico 4، HTC Vive و عینک‌های Apple Vision Pro و همچنین سیستم‌های PC-VR نرم‌افزار تولید می‌کنیم.',
        },
      },
      {
        q: {
          en: 'Can multiple users join the same VR simulation?',
          fa: 'آیا امکان حضور هم‌زمان چندین کاربر در یک سناریوی مجازی وجود دارد؟',
        },
        a: {
          en: 'Yes. We build low-latency networked multi-user architecture supporting voice chat, spatial avatars, and synchronized physics interaction.',
          fa: 'بله، ما از زیرساخت‌های چندکاربره شبکه با تاخیر پایین، آواتارهای فضایی، صوت درون‌برنامه‌ای و تعامل هماهنگ با اشیا برای پروژه‌های گروهی استفاده می‌کنیم.',
        },
      },
    ],
  },
  {
    id: 'ar',
    slug: 'augmented-reality',
    title: {
      en: 'Augmented Reality',
      fa: 'واقعیت افزوده (AR & WebAR)',
    },
    shortDescription: {
      en: 'Blending digital layers with reality through mobile AR, WebAR, and interactive product placement.',
      fa: 'پیوند لایه‌های دیجیتال هوشمند با جهان واقعی از طریق واقعیت افزوده موبایل، وب بدون نیاز به نصب اپلیکیشن و جانمایی محصول.',
    },
    overview: {
      en: 'We create intuitive augmented reality solutions that turn physical products, printed media, and physical spaces into interactive touchpoints. Using WebAR, users can experience rich 3D interactions directly inside their mobile browsers without downloading separate apps.',
      fa: 'ما راهکارهای واقعیت افزوده را به گونه‌ای توسعه می‌دهیم که کالاهای فیزیکی، کاتالوگ‌های چاپی و محیط‌های عمومی را به رسانه‌های زنده تعاملی بدل سازد. به لطف فناوری WebAR، مخاطبان بدون نیاز به دانلود هیچ اپلیکیشنی و تنها با اسکن یک QR کد در مرورگر گوشی تجربه را مشاهده می‌کنند.',
    },
    icon: 'Scan',
    badge: {
      en: 'Connected Reality',
      fa: 'واقعیت متصل',
    },
    capabilities: {
      en: [
        'WebAR experiences without app installation (instant QR code access)',
        'Native iOS (ARKit) and Android (ARCore) application development',
        'Interactive 3D product visualization and accurate spatial scale',
        'Augmented reality advertising and experiential marketing campaigns',
        'Image-target and packaging AR tracking',
        'Geolocation-based outdoor AR tours and treasure hunts',
        'Face filter and interactive branding effects',
        'Enterprise maintenance AR assistance and step-by-step guidance',
      ],
      fa: [
        'تجربیات WebAR بدون نیاز به نصب اپلیکیشن (دسترسی سریع با اسکن کد QR)',
        'توسعه اپلیکیشن‌های بومی با ARKit (iOS) و ARCore (Android)',
        'نمایش تعاملی و ابعاد دقیق محصولات صنعتی و تجاری در فضای کاربر',
        'کمپین‌های تبلیغاتی و بازاریابی تجربی (Experiential Marketing)',
        'رهگیری کاتالوگ‌ها، بسته‌بندی کالاها و مجلات چاپی',
        'تورهای مبتنی بر موقعیت مکانی (GPS AR) و بازی‌های محیطی شهری',
        'فیلترهای تعاملی چهره و تجربیات برندینگ شبکه‌های اجتماعی',
        'راهنمای بصری AR گام‌به‌گام برای تعمیرات و خدمات پس از فروش سازمانی',
      ],
    },
    useCases: [
      {
        title: {
          en: 'E-commerce & Furniture Placement',
          fa: 'تجارت الکترونیک و تست پیش از خرید کالا',
        },
        desc: {
          en: 'Customers preview true-to-scale furniture and home appliances in their living rooms before purchasing.',
          fa: 'خریداران می‌توانند لوازم خانگی و مبلمان را با مقیاس کاملاً دقیق ۱:۱ در خانه خود چیدمان و تست کنند.',
        },
      },
      {
        title: {
          en: 'Interactive Packaging & Consumer Brands',
          fa: 'بسته‌بندی هوشمند و تعاملی محصولات',
        },
        desc: {
          en: 'Scanning product packaging launches an animated story, recipes, or interactive prize mini-games.',
          fa: 'اسکن جعبه محصول توسط مشتری، داستان برند، بازی شانس جایزه‌دار یا مدل سه‌بعدی را نمایش می‌دهد.',
        },
      },
      {
        title: {
          en: 'Exhibition Stand AR Extension',
          fa: 'توسعه غرفه‌های نمایشگاهی با واقعیت افزوده',
        },
        desc: {
          en: 'Showcase massive industrial machinery inside small booth spaces through full-scale AR projection.',
          fa: 'نمایش ماشین‌آلات عظیم صنعتی که امکان حمل آن‌ها به غرفه نیست در ابعاد واقعی از طریق تبلت یا موبایل.',
        },
      },
    ],
    technologies: ['ARCore', 'ARKit', '8th Wall', 'Three.js', 'MindAR', 'Unity AR Foundation'],
    relevantProjects: ['webar-luxury-showcase', 'smart-packaging-ar'],
    faqs: [
      {
        q: {
          en: 'Does WebAR require users to download an app?',
          fa: 'آیا برای اجرای WebAR کاربران نیازمند دانلود اپلیکیشن هستند؟',
        },
        a: {
          en: 'No. WebAR runs directly in standard mobile browsers like Chrome and Safari. A user simply scans a QR code to experience the 3D content instantly.',
          fa: 'خیر، WebAR بدون نیاز به نصب هرگونه نرم‌افزار مستقیماً در مرورگرهای استانداردی چون کروم و سافاری تنها با اسکن کد QR در چند ثانیه لود می‌شود.',
        },
      },
    ],
  },
  {
    id: 'games',
    slug: 'game-development',
    title: {
      en: 'Game Development',
      fa: 'توسعه بازی‌های رایانه‌ای و تعاملی',
    },
    shortDescription: {
      en: 'Custom 2D/3D games, serious games, educational titles, and exhibition event mini-games.',
      fa: 'طراحی و ساخت بازی‌های دو و سه‌بعدی، بازی‌های جدی آموزشی (Serious Games) و بازی‌های رویدادی و نمایشگاهی.',
    },
    overview: {
      en: 'We build engaging games with memorable mechanics, responsive controls, and high visual polish. Whether crafting custom serious games for corporate training, viral web games for marketing campaigns, or immersive booth challenges for expo attendees, our game design merges fun with strategic goals.',
      fa: 'ما بازی‌هایی با مکانیک‌های اعتیادآور، کنترل‌های روان و جلوه‌های بصری خیره‌کننده طراحی و پیاده‌سازی می‌کنیم. از بازی‌های جدی (Serious Games) سازمانی برای آموزش کارکنان گرفته تا بازی‌های وبی وایرال برای کمپین‌های تبلیغاتی و چالش‌های تعاملی غرفه‌های نمایشگاهی.',
    },
    icon: 'Gamepad2',
    badge: {
      en: 'Interactive Entertainment',
      fa: 'سرگرمی تعاملی',
    },
    capabilities: {
      en: [
        'Custom 2D & 3D game development for PC, Mobile, and WebGL',
        'Interactive exhibition games and competitive booth leaderboards',
        'Serious games for corporate education and compliance',
        'Advertising and branded promotional games (Advergames)',
        'Educational titles designed for children and young adults',
        'Custom physics systems and touch / motion-control interfaces',
        'Real-time multiplayer architecture and cloud scoreboards',
        'Multi-platform porting and optimization',
      ],
      fa: [
        'طراحی و تولید بازی‌های ۲ بعدی و ۳ بعدی برای PC، موبایل و مرورگر (WebGL)',
        'بازی‌های اختصاصی نمایشگاهی همراه با جدول امتیازات زنده و چالش‌های جوایز',
        'بازی‌های جدی (Serious Games) با هدف آموزش سازمانی و ارزیابی مهارت‌ها',
        'بازی‌های تبلیغاتی برندها (Advergames) جهت ایجاد آگاهی از برند',
        'بازی‌های آموزشی تعاملی کودکان و نوجوانان با استانداردهای پداگوژیک',
        'سیستم‌های فیزیک سفارشی و ادغام با نمایشگرهای لمسی و کنترلرهای حرکتی',
        'معماری چندنفره آنلاین و ثبت نتایج ابری',
        'بهینه‌سازی حداکثری نرخ فریم (60/120 FPS) برای انواع سخت‌افزارها',
      ],
    },
    useCases: [
      {
        title: {
          en: 'Crowd-Engaging Exhibition Booth Games',
          fa: 'بازی‌های جذب جمعیت در غرفه‌های نمایشگاهی',
        },
        desc: {
          en: 'Fast-paced touch or gesture games that collect leads, display live leaderboards, and award brand merchandise.',
          fa: 'بازی‌های سریع و مهیج لمسی یا حرکتی که باعث توقف مخاطبان، ثبت شماره تماس و ایجاد صف بازدید در غرفه می‌شوند.',
        },
      },
      {
        title: {
          en: 'Corporate Serious Simulation Games',
          fa: 'بازی‌های آموزش مدیریتی و سازمانی',
        },
        desc: {
          en: 'Roleplay simulations testing crisis management, customer service skills, and strategic resource allocation.',
          fa: 'شبیه‌سازی‌های سناریومحور که توان تصمیم‌گیری بحران، مذاکره و مدیریت منابع پرسنل را در قالب بازی می‌سنجند.',
        },
      },
    ],
    technologies: ['Unity Engine', 'C#', 'Unreal Engine', 'WebGL', 'FMOD', 'Blender', 'Photon Fusion'],
    relevantProjects: ['cyber-racer-arcade', 'eco-hero-serious-game'],
    faqs: [
      {
        q: {
          en: 'Can the game run in a web browser without players installing anything?',
          fa: 'آیا بازی می‌تواند در بستر مرورگر وب بدون نیاز به نصب اجرا شود؟',
        },
        a: {
          en: 'Yes. We optimize WebGL builds to load fast on modern desktop and mobile browsers with zero installation requirements.',
          fa: 'بله، ما بیلد‌های بهینه‌شده WebGL را به نحوی می‌سازیم که با حجم پایین در مرورگر کاربران بدون نیاز به هیچ نصبی اجرا شوند.',
        },
      },
    ],
  },
  {
    id: 'exhibitions',
    slug: 'interactive-exhibitions',
    title: {
      en: 'Interactive Exhibition Solutions',
      fa: 'راهکارهای نمایشگاهی و موزه‌ای تعاملی',
    },
    shortDescription: {
      en: 'Touchscreens, motion-tracking sensors, projection mapping, and digital kiosks for booths and museums.',
      fa: 'میزها و کیوسک‌های لمسی، سنسورهای ردیابی حرکت، ویدیو مپینگ تعاملی و چیدمان‌های چندرسانه‌ای برای غرفه‌ها و موزه‌ها.',
    },
    overview: {
      en: 'We transform static exhibition booths, cultural centers, and public pavilions into high-impact interactive destinations. Integrating hardware sensors, multi-touch screens, motion tracking, and projection mapping, MIGO builds turnkey installations that stop foot traffic and generate memorable engagement.',
      fa: 'ما فضاهای نمایشگاهی بی‌روح و غرفه‌های سنتی را به مقصدهای هیجان‌انگیز تعاملی بدل می‌کنیم. با تلفیق سنسورهای ردیابی حرکت، میزهای چندلمسی بزرگ، ویدیو پروژکشن‌های مپ‌شده و کیوسک‌های هوشمند، استودیو MIGO راهکارهای جامع و آماده اجرایی ارائه می‌دهد که نگاه هر بیننده‌ای را به خود جلب می‌کند.',
    },
    icon: 'Sparkles',
    badge: {
      en: 'Flagship Specialization',
      fa: 'حوزه تخصصی شاخص',
    },
    capabilities: {
      en: [
        'Multi-touch interactive kiosks and massive video wall software',
        'Motion tracking experiences using Kinect, depth cameras, and LiDAR',
        'Interactive projection mapping on walls, floors, and sculptural objects',
        'Camera-based face and body engagement filters on big screens',
        'Interactive digital product catalog tables with tangible token recognition',
        'Immersive LED tunnel and dome room interactive content',
        'Real-time visitor lead capture and social sharing stations',
        'Turnkey on-site hardware setup and dedicated technical support',
      ],
      fa: [
        'توسعه نرم‌افزارهای مالتی‌تاچ برای کیوسک‌ها و ویدیو وال‌های غول‌پیکر نمایشگاهی',
        'تجارب ردیابی حرکتی بدن با کینکت، دوربین‌های عمق‌سنج و سنسورهای LiDAR',
        'ویدیو مپینگ تعاملی روی دیوارها، کف زمین و حجم‌های دکوراسیون غرفه',
        'سیستم‌های آینه هوشمند و فیلترهای بصری چهره روی نمایشگرهای بزرگ',
        'میزهای لمسی کاتالوگ دیجیتال با قابلیت تشخیص تگ‌های فیزیکی محصولات (Tangible UI)',
        'تولید محتوای تعاملی تونل‌های نوری LED و اتاق‌های ۳۶۰ درجه غوطه‌ورکننده',
        'کیوسک‌های دیجیتال جمع‌آوری اطلاعات مخاطبان و ارسال مستقیم عکس/ویدیو یادگاری',
        'پشتیبانی و اجرای کامل سخت‌افزاری و نرم‌افزاری در محل نمایشگاه یا رویداد',
      ],
    },
    useCases: [
      {
        title: {
          en: 'Flagship Corporate Expo Booth',
          fa: 'غرفه شاخص نمایشگاه‌های بین‌المللی',
        },
        desc: {
          en: 'A synchronized multi-screen installation where visitor footsteps activate generative animations and product details.',
          fa: 'سیستم هماهنگ چندنمایشگره که با نزدیک شدن قدم‌های مخاطب، افکت‌های بصری واکنش نشان داده و اطلاعات محصولات ظاهر می‌شوند.',
        },
      },
      {
        title: {
          en: 'Permanent Museum Interactive Gallery',
          fa: 'گالری تعاملی دائمی موزه‌ها',
        },
        desc: {
          en: 'Interactive touchscreen tables allowing visitors to inspect 3D historical artifacts in 360-degree rotation.',
          fa: 'میزهای تاچ چندکاربره که چندین نفر هم‌زمان می‌توانند اشیای باستانی را به صورت سه‌بعدی بچرخانند و اطلاعات تکمیلی را بخوانند.',
        },
      },
    ],
    technologies: ['Unity', 'TouchDesigner', 'Azure Kinect', 'LiDAR Sensors', 'Resolume', 'C#', 'DirectShow'],
    relevantProjects: ['lumina-motion-wall', 'interactive-expo-kiosk'],
    faqs: [
      {
        q: {
          en: 'Do you provide hardware or only the software?',
          fa: 'آیا شما سخت‌افزارها را نیز تامین می‌کنید یا فقط نرم‌افزار را می‌سازید؟',
        },
        a: {
          en: 'We provide full turnkey delivery: software engineering, hardware specification guidance, sensor calibration, and on-site deployment during exhibition setup days.',
          fa: 'ما خدمات صفر تا صد ارائه می‌دهیم: تولید نرم‌افزار، مشاوره و تهیه سخت‌افزارهای استاندارد (سنسورها، تاچ‌ها، سرورها) و کالیبراسیون و استقرار در محل نمایشگاه.',
        },
      },
    ],
  },
  {
    id: '3d-vis',
    slug: '3d-visualization',
    title: {
      en: '3D Design & Visualization',
      fa: 'طراحی، مدل‌سازی و انیمیشن سه‌بعدی',
    },
    shortDescription: {
      en: 'Photorealistic real-time 3D environments, product renders, character modeling, and architectural previews.',
      fa: 'محیط‌های سه‌بعدی با کیفیت فوتورئال، رندرهای تبلیغاتی محصولات، مدل‌سازی کاراکتر و جلوه‌های سه‌بعدی ریل‌تایم.',
    },
    overview: {
      en: 'We bring concepts to life with meticulous 3D artistry and cutting-edge real-time rendering. Our pipeline spans high-poly hard surface modeling, organic sculpting, procedural texturing in Substance, dynamic character rigging, and optimized real-time assets built for web, games, and cinematic presentations.',
      fa: 'ما کانسپت‌ها و ایده‌ها را با ظرافت هنری و پیشرفته‌ترین روش‌های رندرینگ بی‌درنگ جان می‌بخشیم. پایپ‌لاین تولید ما شامل مدل‌سازی سطوح سخت (Hard Surface)، اسکالپتینگ ارگانیک، تکسچرینگ پیشرفته در Substance، ریگینگ کاراکتر و تولید است‌های سبک و بهینه‌سازی‌شده برای موتورهای بازی و وب است.',
    },
    icon: 'Layers',
    badge: {
      en: 'Visual Craftsmanship',
      fa: 'هنر بصری پیشرفته',
    },
    capabilities: {
      en: [
        'Photorealistic 3D product modeling and cinematic rendering',
        'Real-time low-poly 3D asset optimization for WebGL and mobile',
        'Realistic environment design (sci-fi, industrial, natural, architectural)',
        'PBR texturing and procedural shader development',
        '3D character modeling, rigging, and keyframe / mocap animation',
        'Interactive 3D web model viewers with lighting configurators',
        'Architectural pre-visualization with day/night simulations',
        'Visual VFX and particle dynamics',
      ],
      fa: [
        'مدل‌سازی سه‌بعدی فوتورئالیستیک محصولات صنعتی و رندرهای تبلیغاتی ویدیویی',
        'بهینه‌سازی تخصصی مدل‌های سه‌بعدی (Low-Poly) برای وب، WebGL و موبایل',
        'طراحی محیط‌های وسیع و دقیق (فضاهای علمی-تخیلی، کارخانجات صنعتی و معماری)',
        'تکسچرینگ مبتنی بر فیزیک نور (PBR) و کدنویسی شیدرهای اختصاصی',
        'طراحی کاراکتر، اسکلت‌بندی (Rigging) و انیمیشن‌سازی فریم‌به‌فریم و موکپ',
        'پیاده‌سازی ویوئرهای سه‌بعدی آنلاین در وب با امکان تعویض رنگ و متریال',
        'پیش‌نمایش معماری مدرن همراه با شبیه‌سازی نور روز و شب',
        'طراحی جلوه‌های ویژه بصری (VFX) و سیستم‌های ذرات پیشرفته',
      ],
    },
    useCases: [
      {
        title: {
          en: 'Luxury Product Launch Visuals',
          fa: 'تصاویر و انیمیشن‌های معرفی محصولات لوکس',
        },
        desc: {
          en: 'Cinematic exploded-view 3D animation showing internal engineering components with hyper-realistic materials.',
          fa: 'انیمیشن‌های سینمایی با تکنیک Exploded View جهت نمایش اجزا و فناوری‌های درونی قطعات صنعتی با بازتاب‌های نور دقیق.',
        },
      },
    ],
    technologies: ['Blender', 'Autodesk Maya', 'Substance 3D Painter', 'ZBrush', 'Houdini', 'Three.js'],
    relevantProjects: ['automotive-configurator-3d', 'future-city-concept'],
    faqs: [
      {
        q: {
          en: 'Can your 3D models be viewed directly on our existing website?',
          fa: 'آیا مدل‌های سه‌بعدی شما مستقیماً در وب‌سایت کنونی ما قابل نمایش هستند؟',
        },
        a: {
          en: 'Yes. We deliver lightweight glTF / GLB assets optimized for web browsers and provide ready-to-embed Three.js / WebGL components.',
          fa: 'بله، ما فایل‌های فوق‌العاده بهینه glTF/GLB همراه با کدهای آماده تعبیه‌شده در وب بر پایه Three.js تحویل می‌دهیم که بدون کندی در هر سایتی لود شوند.',
        },
      },
    ],
  },
  {
    id: 'simulation',
    slug: 'simulation',
    title: {
      en: 'Simulation & Interactive Training',
      fa: 'شبیه‌سازی صنعتی و آموزش تعاملی',
    },
    shortDescription: {
      en: 'High-precision physics simulations, HSE procedures, and virtual equipment operations for enterprises.',
      fa: 'شبیه‌سازی دقیق فیزیکی فرایندهای تولید، سناریوهای ایمنی HSE و کار با ماشین‌آلات پیچیده برای سازمان‌ها.',
    },
    overview: {
      en: 'MIGO develops mission-critical simulation software designed to replace dangerous or cost-prohibitive physical training. Our simulators replicate real-world physical dynamics, complex machinery consoles, emergency fire-and-leak procedures, and step-by-step assembly sequences with full scoring and error tracking.',
      fa: 'استودیو MIGO نرم‌افزارهای شبیه‌ساز صنعتی طراحی می‌کند که آموزش‌های پرهزینه، خطرناک یا ناممکن در دنیای فیزیکی را بدون هیچ‌گونه استهلاک تجهیزات ممکن می‌سازد. سیستم‌های ما شامل شبیه‌سازی دقیق فیزیک مواد، پنل‌های کنترلی ماشین‌آلات، سناریوهای اطفای حریق و خطایابی همراه با سیستم ارزیابی کارنامه اپراتور است.',
    },
    icon: 'Activity',
    badge: {
      en: 'Mission Critical',
      fa: 'صنعتی و استراتژیک',
    },
    capabilities: {
      en: [
        'Industrial process and chemical factory pipeline simulations',
        'Health, Safety, and Environmental (HSE) disaster training',
        'Heavy machinery and crane operator simulation rigs',
        'Educational physics and science experiment software',
        'Step-by-step procedural training with error penalty scoring',
        'Scenario-based assessment tools with telemetry tracking',
        'Digital twin integrations reflecting live sensor telemetry',
        'VR/Desktop dual-mode training deployment',
      ],
      fa: [
        'شبیه‌سازی خطوط تولید صنعتی، پایپ‌لاین‌های نفتی و کارخانجات',
        'آموزش‌های جامع مدیریت حوادث، آتش‌سوزی و ایمنی محیط کار (HSE)',
        'شبیه‌ساز کار با جرثقیل‌ها، لیفتراک‌ها و تجهیزات سنگین ترابری',
        'نرم‌افزارهای آموزش آزمایشگاهی فیزیک، شیمی و مهندسی',
        'فرایندهای گام‌به‌گام تعمیر و نگهداری با سیستم امتیازدهی و سنجش خطا',
        'سیستم‌های گزارش‌گیری و صدور گواهی مجازی برای مدیران منابع انسانی',
        'قابلیت پیوند با داده‌های واقعی سنسورها (Digital Twin)',
        'امکان اجرای دوگانه هم روی هدست‌های VR و هم روی مانیتورهای استاندارد',
      ],
    },
    useCases: [
      {
        title: {
          en: 'Refinery Emergency Shut-Down Protocol',
          fa: 'پروتکل قطعی اضطراری پالایشگاهی',
        },
        desc: {
          en: 'Technicians practice emergency valve shutdowns and hazardous leak mitigation in a realistic virtual model.',
          fa: 'تکنسین‌ها بستن شیرهای اضطراری و اقدامات مقابله با نشت مواد سمی را در یک ماکت دقیق دیجیتالی بارها تمرین می‌کنند.',
        },
      },
    ],
    technologies: ['Unity Simulation', 'PhysX', 'C#', 'OpenXR', 'Custom Telemetry Backend'],
    relevantProjects: ['petrochem-hse-sim', 'precision-crane-trainer'],
    faqs: [
      {
        q: {
          en: 'How are trainee errors and scores recorded?',
          fa: 'نمرات و خطاهای پرسنل چگونه ثبت و گزارش می‌شوند؟',
        },
        a: {
          en: 'Our simulators generate detailed PDF reports, log execution timelines, record reaction speeds, and integrate with enterprise LMS via SCORM or xAPI.',
          fa: 'شبیه‌سازهای ما گزارش‌های دقیق PDF و دیتابیس زمان واکنش و نوع خطاها را ذخیره کرده و به سادگی با سامانه‌های LMS سازمانی از طریق استاندارد SCORM یکپارچه می‌شوند.',
        },
      },
    ],
  },
  {
    id: 'interactive-sw',
    slug: 'interactive-software',
    title: {
      en: 'Interactive Software & Digital Experiences',
      fa: 'نرم‌افزارهای تعاملی و تجربیات دیجیتال',
    },
    shortDescription: {
      en: 'Custom 3D web applications, digital product catalogs, virtual showrooms, and enterprise configurators.',
      fa: 'اپلیکیشن‌های وب سه‌بعدی تعاملی، کاتالوگ‌های دیجیتال، شوروم‌های مجازی و کانفیگوراتورهای پیشرفته سازمانی.',
    },
    overview: {
      en: 'We craft bespoke web-based interactive applications and spatial software that captivate audiences and elevate digital commerce. From real-time 3D product configurators to virtual flagship showrooms and creative microsites, we engineer fast, responsive, and aesthetically commanding software.',
      fa: 'ما اپلیکیشن‌های وب سه‌بعدی و نرم‌افزارهای سفارشی نوآورانه‌ای می‌سازیم که مشتریان را مجذوب و فروش دیجیتال را متحول می‌سازد. از کانفیگوراتورهای سه‌بعدی کالا گرفته تا شوروم‌های مجازی آنلاین و مایکروسایت‌های تعاملی رویدادها، تخصص ما در ارائه نرم‌افزارهای چشمگیر و با کارایی بالاست.',
    },
    icon: 'Cpu',
    badge: {
      en: 'Custom Digital Systems',
      fa: 'سیستم‌های دیجیتال سفارشی',
    },
    capabilities: {
      en: [
        'Real-time 3D product configurators with live pricing calculations',
        'Virtual showrooms with interactive guided tours',
        'Custom interactive web applications powered by Three.js & WebGL',
        'Interactive digital catalogs for high-end automotive and architectural brands',
        'Interactive data visualization dashboards for complex analytics',
        'Creative landing experiences for high-profile product announcements',
        'Custom interactive touch software for smart retail spaces',
        'End-to-end cloud backend and CRM integration',
      ],
      fa: [
        'کانفیگوراتورهای سه‌بعدی محصولات با محاسبه قیمت زنده و شخصی‌سازی آپشن‌ها',
        'شوروم‌های مجازی اختصاصی با تورهای تعاملی و نقاط لمسی اطلاعاتی',
        'اپلیکیشن‌های وب سه‌بعدی مدرن با فریم‌ورک‌های Next.js و Three.js',
        'کاتالوگ‌های دیجیتال لوکس برای برندهای خودروسازی، معماری و تجهیزات',
        'داشبوردهای بصری‌سازی داده‌های پیچیده در قالب نمودارهای تعاملی ۳ بعدی',
        'لندینگ‌پیج‌های تعاملی خلاقانه برای رونمایی و معرفی محصولات جدید',
        'نرم‌افزارهای لمسی فروشگاهی برای نمایشگرهای شعب فیزیکی',
        'یکپارچه‌سازی کامل با سیستم‌های ابری، CRM و پایگاه‌های داده سازمان',
      ],
    },
    useCases: [
      {
        title: {
          en: 'Virtual Luxury Automotive Showroom',
          fa: 'شوروم مجازی خودروهای لوکس',
        },
        desc: {
          en: 'Prospective buyers customize paint finishes, wheel rims, and interior leather in full 360-degree real-time 3D.',
          fa: 'مشتریان می‌توانند رنگ بدنه، رینگ‌ها، تریم چرم داخلی خودرو را به صورت ۳۶۰ درجه و زنده شخصی‌سازی و مشاهده کنند.',
        },
      },
    ],
    technologies: ['Next.js', 'React', 'Three.js', 'WebGL', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    relevantProjects: ['automotive-configurator-3d', 'virtual-art-gallery'],
    faqs: [
      {
        q: {
          en: 'Will these interactive 3D web apps run smoothly on mobile phones?',
          fa: 'آیا این اپلیکیشن‌های وب سه‌بعدی روی گوشی‌های موبایل هم روان اجرا می‌شوند؟',
        },
        a: {
          en: 'Absolutely. We implement adaptive quality scaling, asset compression, and mobile-specific shader pipelines to guarantee silky-smooth performance.',
          fa: 'کاملاً. ما با سیستم فشرده‌سازی پیشرفته، مقیاس‌پذیری خودکار کیفیت با توجه به توان پردازنده کاربر، و شیدرهای بهینه موبایل، روانی کامل را تضمین می‌کنیم.',
        },
      },
    ],
  },
];
