import { Locale } from './translations';

export interface ArticleItem {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  category: Record<Locale, string>;
  author: string;
  date: string;
  readTime: Record<Locale, string>;
  featured: boolean;
  content: Record<Locale, Array<{ heading?: string; paragraphs: string[] }>>;
  tags: string[];
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 'future-of-vr',
    slug: 'the-future-of-virtual-reality',
    title: {
      en: 'The Future of Virtual Reality: From Standalone Silicon to Spatial Presence',
      fa: 'آینده واقعیت مجازی: از چیپست‌های مستقل تا حضور فضایی تمام‌عیار',
    },
    excerpt: {
      en: 'How pancake optics, inside-out neural tracking, and high-density micro-OLED panels are transforming VR from niche entertainment into enterprise infrastructure.',
      fa: 'چگونه لنزهای پنکیک، ردیابی عصبی حرکت چشم و پنل‌های میکرو-OLED واقعیت مجازی را از سرگرمی به زیرساختی استراتژیک برای سازمان‌ها تبدیل کرده‌اند.',
    },
    category: {
      en: 'Spatial Computing',
      fa: 'رایانش فضایی',
    },
    author: 'MIGO R&D Lab',
    date: '2026-02-18',
    readTime: {
      en: '6 min read',
      fa: '۶ دقیقه مطالعه',
    },
    featured: true,
    tags: ['Virtual Reality', 'Hardware', 'Enterprise VR', 'Pico 4', 'Apple Vision'],
    content: {
      en: [
        {
          heading: 'The Paradigm Shift in Spatial Displays',
          paragraphs: [
            'For years, virtual reality carried the stigma of being heavy, uncomfortable, and tethered to bulky gaming computers. The arrival of high-efficiency silicon and pancake lenses has shattered that ceiling.',
            'Today, standalone headsets provide 4K per-eye resolution, sub-millimeter inside-out positional tracking, and photorealistic spatial passthrough. Enterprise adoption is accelerating as companies recognize the sheer ROI of virtual prototyping.',
          ],
        },
        {
          heading: 'Zero-Risk Industrial Training',
          paragraphs: [
            'When mistakes in physical training cost lives or millions in machine wear-and-tear, VR becomes an irreplaceable asset. Simulating complex emergency shutdowns or turbine overhauls gives workers muscle memory before they ever touch physical equipment.',
            'At MIGO, our simulations focus on tactile fidelity. By tuning haptic cues and precision physics, we create virtual experiences that transfer directly into real-world competency.',
          ],
        },
      ],
      fa: [
        {
          heading: 'تحول در اپتیک و راحتی کاربری',
          paragraphs: [
            'سال‌ها واقعیت مجازی با تصویر هدست‌های سنگین، کابل‌های متعدد و اتصال به کیس‌های غول‌پیکر شناخته می‌شد. اما معرفی لنزهای پنکیک باریک و پردازنده‌های کم‌مصرف موبایلی، این محدودیت‌ها را به کلی برطرف کرد.',
            'امروزه هدست‌های مستقل با رزولوشن‌های خیره‌کننده 4K برای هر چشم و رهگیری آنی مردمک چشم و دست‌ها، بستری ایده‌آل را برای ورود شرکت‌های بزرگ به دنیای پروتوتایپینگ سه‌بعدی فراهم آورده‌اند.',
          ],
        },
        {
          heading: 'آموزش سازمانی بدون ریسک و هزینه استهلاک',
          paragraphs: [
            'در صنایعی که کوچک‌ترین خطای انسانی در کارگاه یا پالایشگاه عواقب مالی و جانی جبران‌ناپذیر دارد، شبیه‌سازهای VR نقشی حیاتی ایفا می‌کنند. تمرین صدها باره یک پروتکل بحرانی در محیط ایمن، حافظه عضلانی پرسنل را تقویت می‌کند.',
            'تیم MIGO با تمرکز بر بازخوردهای لمسی دقیق و قوانین فیزیکی دنیای واقعی، فضایی را خلق می‌کند که آموخته‌های کاربر بلافاصله در محیط عملیاتی قابل پیاده‌سازی باشد.',
          ],
        },
      ],
    },
  },
  {
    id: 'interactive-exhibitions-guide',
    slug: 'interactive-experiences-in-exhibitions',
    title: {
      en: 'Stop Foot Traffic: Designing Interactive Exhibition Experiences That Convert',
      fa: 'تسخیر توجه مخاطبان: طراحی غرفه‌ها و چیدمان‌های تعاملی نمایشگاهی',
    },
    excerpt: {
      en: 'Why static banners and looping videos are losing the expo floor, and how multi-touch tables, kinetic projection, and gesture interaction capture high-value leads.',
      fa: 'چرا بنرهای چاپی و ویدیوهای تکرارشونده دیگر در سالن‌های نمایشگاهی اثرگذار نیستند و چگونه فناوری‌های حرکتی و لمسی لیدهای تجاری جذب می‌کنند.',
    },
    category: {
      en: 'Exhibition Design',
      fa: 'طراحی نمایشگاهی',
    },
    author: 'MIGO Creative Team',
    date: '2026-01-24',
    readTime: {
      en: '5 min read',
      fa: '۵ دقیقه مطالعه',
    },
    featured: false,
    tags: ['Exhibitions', 'Touchscreen', 'Kinect', 'Event Tech', 'Projection'],
    content: {
      en: [
        {
          heading: 'The 3-Second Rule of Trade Show Booths',
          paragraphs: [
            'In an exhibition hall with hundreds of competing vendors, visitors spend an average of three seconds glancing at a booth before deciding to walk past. Static rollups and corporate brochures are invisible to the modern attendee.',
            'Interactive installations change this equation. When a visitor sees their silhouette spark a wave of light on a kinetic projection wall, curiosity compels them to step in and investigate.',
          ],
        },
        {
          heading: 'From Amusement to High-Intent Business Leads',
          paragraphs: [
            'Entertainment without purpose is wasted effort. Every interactive experience we design at MIGO integrates an organic conversion loop — whether it is entering contact details to download customized 3D design files or competing in a branded leaderboard.',
          ],
        },
      ],
      fa: [
        {
          heading: 'قانون ۳ ثانیه در غرفه‌های نمایشگاهی',
          paragraphs: [
            'در یک سالن نمایشگاهی شلوغ با صدها رقیب، هر بازدیدکننده تنها ۳ ثانیه به نمای بیرونی غرفه نگاه می‌کند و سپس به مسیر خود ادامه می‌دهد. رول‌آپ‌های معمولی و بروشورهای کاغذی دیگر کششی برای مخاطب امروزی ایجاد نمی‌کنند.',
            'راهکارهای تعاملی این بازی را تغییر می‌دهند. وقتی یک رهگذر با تکان دادن دست خود ذرات نورانی روی دیوار ۱۲ متری را جابه‌جا می‌کند یا با لمس یک قطعه فیزیکی روی میز دیجیتال اطلاعات تخصصی آن را می‌بیند، ناخودآگاه وارد حریم غرفه می‌شود.',
          ],
        },
        {
          heading: 'تبدیل هیجان اولیه به قراردادهای تجاری',
          paragraphs: [
            'سرگرمیِ بدون هدف هدررفت بودجه است. تمامی سیستم‌های تعاملی MIGO طوری طراحی می‌شوند که در انتهای تجربه، اطلاعات تماس، ایمیل یا نیازهای کارفرما با رضایت کامل خود بازدیدکننده ثبت شده و به تیم فروش تحویل داده شود.',
          ],
        },
      ],
    },
  },
  {
    id: 'webar-future',
    slug: 'augmented-reality-in-marketing',
    title: {
      en: 'WebAR in Modern Marketing: Breaking Down the App Barrier',
      fa: 'انقلاب WebAR در بازاریابی: پایان دوران اجبار به نصب اپلیکیشن',
    },
    excerpt: {
      en: 'Analyzing how zero-install WebAR achieves 4x higher completion rates compared to native AR apps for consumer product launches.',
      fa: 'بررسی این که چگونه فناوری WebAR بدون نیاز به نصب، نرخ تعامل کمپین‌های تبلیغاتی را تا ۴ برابر نسبت به اپلیکیشن‌های بومی افزایش می‌دهد.',
    },
    category: {
      en: 'Augmented Reality',
      fa: 'واقعیت افزوده',
    },
    author: 'MIGO Engineering',
    date: '2026-01-10',
    readTime: {
      en: '4 min read',
      fa: '۴ دقیقه مطالعه',
    },
    featured: false,
    tags: ['WebAR', 'Marketing', 'Three.js', 'Mobile Web', 'E-commerce'],
    content: {
      en: [
        {
          heading: 'Friction Kills Conversion',
          paragraphs: [
            'When a marketing campaign demands that a smartphone user open an App Store, authenticate, wait for a 120MB download, and approve device permissions, 80% of potential buyers abandon the funnel before ever seeing the product.',
            'WebAR eliminates this entire friction curve. Modern WebGL and WebXR standards allow interactive 3D assets to render instantly inside Safari and Chrome directly from a camera QR scan.',
          ],
        },
      ],
      fa: [
        {
          heading: 'موانع نصب، قاتل کمپین‌های تبلیغاتی',
          paragraphs: [
            'هر بار که برای مشاهده یک تیزر یا محصول از کاربر خواسته می‌شود به اپ‌استور یا گوگل‌پلی برود و یک فایل ۱۰۰ مگابایتی را دانلود کند، بیش از ۸۰ درصد مخاطبان در نیمه راه منصرف می‌شوند.',
            'فناوری WebAR این مانع بزرگ را برای همیشه از بین برده است. استانداردهای پیشرفته وب امروزی اجازه می‌دهند مدل‌های سه‌بعدی با انیمیشن‌های روان تنها با یک اسکن ساده در مرورگر موبایل با سرعت ۶۰ فریم اجرا شوند.',
          ],
        },
      ],
    },
  },
  {
    id: 'serious-games-power',
    slug: 'serious-games-in-education',
    title: {
      en: 'Serious Games: Transforming Complex Corporate Knowledge into Play',
      fa: 'بازی‌های جدی (Serious Games): تبدیل آموزش‌های پیچیده به تجربیات ماندگار',
    },
    excerpt: {
      en: 'How gamification mechanics, branching decision trees, and immediate feedback loops dramatically increase employee retention rates.',
      fa: 'چگونه مکانیک‌های بازی‌سازی، سناریوهای چندشاخه و بازخورد آنی، ماندگاری آموزش‌ها را در ذهن پرسنل تا ۳ برابر ارتقا می‌دهند.',
    },
    category: {
      en: 'Game Design',
      fa: 'بازی‌سازی سازمانی',
    },
    author: 'MIGO R&D Lab',
    date: '2025-12-14',
    readTime: {
      en: '5 min read',
      fa: '۵ دقیقه مطالعه',
    },
    featured: false,
    tags: ['Serious Games', 'Corporate Training', 'Gamification', 'Unity'],
    content: {
      en: [
        {
          heading: 'Why Slide Decks Fail',
          paragraphs: [
            'Passive listening to 60-slide PowerPoint presentations yields an average knowledge retention rate below 15% after 30 days. Humans learn by making decisions and immediately encountering consequences.',
            'Serious games put employees directly into the cockpit or managerial chair. When their decisions trigger simulated outcomes in real time, engagement and retention surge.',
          ],
        },
      ],
      fa: [
        {
          heading: 'چرا اسلایدهای سنتی پاورپینت شکست می‌خورند؟',
          paragraphs: [
            'تحقیقات نشان می‌دهند شنیدن غیرفعال ساعت‌ها سخنرانی و اسلایدهای متنی پس از یک ماه کمتر از ۱۵ درصد در حافظه پرسنل باقی می‌ماند. مغز انسان از طریق تعامل، تصمیم‌گیری و روبرو شدن با پیامد اقدامات یاد می‌گیرد.',
            'بازی‌های جدی (Serious Games) کارمند را در نقش کاپیتان، تکنسین یا مذاکره‌کننده قرار می‌دهند. تصمیم‌گیری در شرایط بحرانی شبیه‌سازی‌شده باعث نهادینه شدن کامل مهارت‌ها می‌شود.',
          ],
        },
      ],
    },
  },
];
