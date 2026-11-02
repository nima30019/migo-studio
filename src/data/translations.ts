export type Locale = 'en' | 'fa';

export interface NavItem {
  key: string;
  label: Record<Locale, string>;
  href: (locale: Locale) => string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: 'home',
    label: { en: 'Home', fa: 'صفحه اصلی' },
    href: (l) => `/${l}`,
  },
  {
    key: 'services',
    label: { en: 'Services', fa: 'خدمات' },
    href: (l) => `/${l}/services`,
  },
  {
    key: 'work',
    label: { en: 'Our Work', fa: 'پروژه‌ها' },
    href: (l) => `/${l}/work`,
  },
  {
    key: 'about',
    label: { en: 'About', fa: 'درباره ما' },
    href: (l) => `/${l}/about`,
  },
  {
    key: 'insights',
    label: { en: 'Insights', fa: 'مقالات و اخبار' },
    href: (l) => `/${l}/insights`,
  },
  {
    key: 'contact',
    label: { en: 'Contact', fa: 'تماس با ما' },
    href: (l) => `/${l}/contact`,
  },
];

export const UI_STRINGS = {
  brandTagline: {
    en: 'We Create Interactive Experiences.',
    fa: 'ما تجربیات تعاملی خلق می‌کنیم.',
  },
  brandSupporting: {
    en: 'From Virtual Reality to Interactive Worlds.',
    fa: 'از واقعیت مجازی تا دنیاهای تعاملی.',
  },
  heroDescription: {
    en: 'Transforming ideas into immersive digital experiences through VR, AR, interactive games, and creative technology.',
    fa: 'تبدیل ایده‌ها به تجربیات دیجیتال غوطه‌ورکننده از طریق واقعیت مجازی، واقعیت افزوده، بازی‌های تعاملی و فناوری‌های نوین خلاق.',
  },
  exploreWork: {
    en: 'Explore Our Work',
    fa: 'مشاهده پروژه‌ها',
  },
  startProject: {
    en: 'Start a Project',
    fa: 'شروع پروژه',
  },
  whatWeDo: {
    en: 'What We Do',
    fa: 'زمینه‌های فعالیت ما',
  },
  whatWeDoDesc: {
    en: 'We combine technology, creativity, and design to create meaningful digital experiences.',
    fa: 'ما فناوری، خلاقیت و طراحی را ترکیب می‌کنیم تا تجربیات دیجیتالی پرمعنا و ماندگار بسازیم.',
  },
  selectedWork: {
    en: 'Selected Work',
    fa: 'پروژه‌های برگزیده',
  },
  selectedWorkDesc: {
    en: 'A selection of digital experiences, interactive applications, and immersive projects.',
    fa: 'منتخبی از تجربیات دیجیتال، اپلیکیشن‌های تعاملی و پروژه‌های شبیه‌سازی غوطه‌ورکننده.',
  },
  viewAllWork: {
    en: 'View All Projects',
    fa: 'مشاهده تمام پروژه‌ها',
  },
  ourApproach: {
    en: 'From Idea to Experience',
    fa: 'از ایده تا تجربه تعاملی',
  },
  ourApproachDesc: {
    en: 'Our proven multi-stage methodology turns complex creative visions into seamless realities.',
    fa: 'متدولوژی چهارمرحله‌ای ما چشم‌اندازهای خلاقانه و پیچیده را به تجربه‌ای روان و بی‌نقص تبدیل می‌کند.',
  },
  industries: {
    en: 'Industries We Work With',
    fa: 'صنایعی که با آن‌ها همکاری داریم',
  },
  techStackHeadline: {
    en: 'Powered by Technology',
    fa: 'بر پایه فناوری‌های روز دنیا',
  },
  techStackDesc: {
    en: 'We build with industrial-grade game engines, real-time 3D pipelines, and modern web frameworks.',
    fa: 'توسعه با موتورهای بازی‌سازی صنعتی، پایپ‌لاین‌های سه‌بعدی بی‌درنگ و فریم‌ورک‌های مدرن وب.',
  },
  aboutPreviewHeadline: {
    en: 'Technology Meets Creativity.',
    fa: 'تلاقی فناوری، هنر و نوآوری.',
  },
  aboutPreviewText: {
    en: 'MIGO is a creative technology studio focused on designing and developing immersive digital experiences, interactive applications, and engaging games. We combine creativity, 3D design, and interactive technologies to transform ideas into meaningful digital experiences.',
    fa: 'استودیو فناوری خلاق MIGO با تمرکز بر طراحی و توسعه تجربیات غوطه‌ورکننده دیجیتال، اپلیکیشن‌های تعاملی و بازی‌های جذاب فعالیت می‌کند. ما خلاقیت، طراحی سه‌بعدی و فناوری‌های مدرن را به کار می‌گیریم تا ایده‌ها به واقعیت تبدیل شوند.',
  },
  learnMoreAboutUs: {
    en: 'Learn More About Us',
    fa: 'آشنایی بیشتر با استودیو',
  },
  insightsHeadline: {
    en: 'Insights & Updates',
    fa: 'مقالات و رویدادهای استودیو',
  },
  finalCtaHeadline: {
    en: "Have an Idea? Let's Create Something Amazing.",
    fa: 'ایده‌ای در ذهن دارید؟ بیایید تجربه‌ای شگفت‌انگیز خلق کنیم.',
  },
  finalCtaDesc: {
    en: "Let's turn your next idea into an interactive digital experience.",
    fa: 'آماده‌ایم ایده بعدی شما را به یک تجربه دیجیتال پویا و تاثیرگذار تبدیل کنیم.',
  },
  footerDesc: {
    en: 'MIGO is a premier creative technology studio engineering next-generation VR, AR, interactive exhibitions, games, and real-time 3D simulations.',
    fa: 'استودیو MIGO، استودیوی تخصصی فناوری‌های خلاق در زمینه توسعه واقعیت مجازی، واقعیت افزوده، راهکارهای تعاملی نمایشگاهی، بازی‌سازی و شبیه‌سازی سه‌بعدی.',
  },
  rightsReserved: {
    en: 'All rights reserved.',
    fa: 'تمامی حقوق محفوظ است.',
  },
  learnMore: {
    en: 'Learn More',
    fa: 'اطلاعات بیشتر',
  },
  viewProject: {
    en: 'View Project',
    fa: 'مشاهده جزئیات پروژه',
  },
  allCategories: {
    en: 'All',
    fa: 'همه موارد',
  },
  overview: {
    en: 'Overview',
    fa: 'نمای کلی',
  },
  capabilities: {
    en: 'Capabilities',
    fa: 'قابلیت‌ها و امکانات',
  },
  useCases: {
    en: 'Real-world Use Cases',
    fa: 'کاربردها در دنیای واقعی',
  },
  technologiesUsed: {
    en: 'Technologies & Tools',
    fa: 'فناوری‌ها و ابزارها',
  },
  faq: {
    en: 'Frequently Asked Questions',
    fa: 'پرسش‌های متداول',
  },
  projectChallenge: {
    en: 'The Challenge',
    fa: 'چالش پروژه',
  },
  creativeSolution: {
    en: 'Creative Solution',
    fa: 'راهکار خلاقانه',
  },
  technicalImplementation: {
    en: 'Technical Implementation',
    fa: 'پیاده‌سازی فنی',
  },
  outcomes: {
    en: 'Key Outcomes',
    fa: 'نتایج و دستاوردها',
  },
  relatedProjects: {
    en: 'Related Projects',
    fa: 'پروژه‌های مرتبط',
  },
  readArticle: {
    en: 'Read Article',
    fa: 'مطالعه مقاله',
  },
  minRead: {
    en: 'min read',
    fa: 'دقیقه مطالعه',
  },
  contactUs: {
    en: 'Contact Us',
    fa: 'تماس با ما',
  },
  startProjectTitle: {
    en: 'Start a Project with MIGO',
    fa: 'شروع همکاری و سفارش پروژه',
  },
  startProjectSubtitle: {
    en: 'Tell us about your vision. We will analyze your requirements and propose the optimal interactive solution.',
    fa: 'چشم‌انداز و ایده خود را برای ما شرح دهید. ما نیازمندی‌های شما را بررسی کرده و بهترین راهکار تعاملی را پیشنهاد می‌دهیم.',
  },
};
