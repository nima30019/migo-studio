import { Locale } from './translations';

export interface IndustryItem {
  id: string;
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
  icon: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'industrial',
    name: {
      en: 'Industrial & Manufacturing',
      fa: 'صنایع سنگین و تولیدی',
    },
    desc: {
      en: 'Process simulation, equipment training, HSE virtual drills, and digital twins.',
      fa: 'شبیه‌سازی خطوط تولید، آموزش اپراتورها، مانورهای ایمنی و دوقلوهای دیجیتال صنعتی.',
    },
    icon: 'Factory',
  },
  {
    id: 'education',
    name: {
      en: 'Education & Learning',
      fa: 'آموزش و پژوهش',
    },
    desc: {
      en: 'Virtual reality science labs, interactive history curricula, and serious games.',
      fa: 'آزمایشگاه‌های واقعیت مجازی، محتوای تعاملی تاریخی و بازی‌های جدی آموزشی.',
    },
    icon: 'GraduationCap',
  },
  {
    id: 'museums',
    name: {
      en: 'Museums & Culture',
      fa: 'موزه‌ها و مراکز فرهنگی',
    },
    desc: {
      en: 'Heritage reconstruction, gesture-controlled galleries, and 360 immersive halls.',
      fa: 'بازسازی آثار باستانی، تالارهای تعاملی لمسی و غوطه‌ورکننده ۳۶۰ درجه.',
    },
    icon: 'Landmark',
  },
  {
    id: 'entertainment',
    name: {
      en: 'Entertainment & Gaming',
      fa: 'سرگرمی و بازی‌های دیجیتال',
    },
    desc: {
      en: 'Interactive arcade experiences, VR attractions, and competitive multiplayer kiosks.',
      fa: 'بازی‌های آرکید تعاملی، جاذبه‌های VR و چالش‌های هیجان‌انگیز چندنفره.',
    },
    icon: 'Gamepad2',
  },
  {
    id: 'exhibitions',
    name: {
      en: 'Exhibitions & Events',
      fa: 'نمایشگاه‌ها و همایش‌ها',
    },
    desc: {
      en: 'Motion-tracking walls, interactive product tables, and foot-traffic capture tech.',
      fa: 'دیوارهای حرکتی تعاملی، میزهای دیجیتال و ابزارهای پیشرفته جذب بازدیدکننده.',
    },
    icon: 'Presentation',
  },
  {
    id: 'marketing',
    name: {
      en: 'Advertising & Marketing',
      fa: 'تبلیغات و بازاریابی تجربی',
    },
    desc: {
      en: 'WebAR packaging experiences, viral 3D web campaigns, and brand engagement apps.',
      fa: 'بسته‌بندی تعاملی با WebAR، کمپین‌های وبی سه‌بعدی و اپلیکیشن‌های وفاداری برند.',
    },
    icon: 'Megaphone',
  },
  {
    id: 'architecture',
    name: {
      en: 'Architecture & Real Estate',
      fa: 'معماری و املاک',
    },
    desc: {
      en: 'Real-time architectural walkthroughs, interactive unit configurators, and VR showrooms.',
      fa: 'تورهای مجازی معماری با نورپردازی زنده، کانفیگوراتور واحدها و شوروم‌های VR.',
    },
    icon: 'Building2',
  },
];

export const TECH_STACK = [
  { name: 'Unity', category: 'Game & VR Engine', desc: 'Industry-standard real-time interactive development' },
  { name: 'Unreal Engine 5', category: 'High-Fidelity Real-Time', desc: 'Cinematic graphics and photorealistic environments' },
  { name: 'Three.js / WebGL', category: 'Web 3D', desc: 'Ultra-fast in-browser interactive 3D experiences' },
  { name: 'Blender', category: '3D Modeling & Animation', desc: 'Precision polygon modeling, sculpting, and rigging' },
  { name: 'Substance 3D', category: 'PBR Texturing', desc: 'Photorealistic material authoring and procedural maps' },
  { name: 'Meta XR / OpenXR', category: 'Spatial Computing', desc: 'Cross-platform headset compatibility and tracking' },
  { name: 'TouchDesigner', category: 'Exhibition & Installation', desc: 'Generative visuals, sensor integration, and mapping' },
  { name: 'C# / TypeScript', category: 'Core Languages', desc: 'Enterprise-grade architecture and robust backend logic' },
];

export const APPROACH_STEPS = [
  {
    step: '01',
    title: { en: 'Discover', fa: 'کشف و تحلیل نیازها' },
    desc: {
      en: 'Understand the client objectives, audience psychology, spatial conditions, and technical requirements.',
      fa: 'بررسی دقیق اهداف کارفرما، تحلیل رفتار مخاطب هدف، شرایط فیزیکی محل استقرار و الزامات فنی.',
    },
  },
  {
    step: '02',
    title: { en: 'Design', fa: 'طراحی کانسپت و تجربه (UX/UI)' },
    desc: {
      en: 'Develop the concept, interaction flow, visual style, 3D prototypes, and technical architecture.',
      fa: 'خلق کانسپت بصری، سناریوی تعاملی، پروتوتایپ‌های اولیه سه‌بعدی و تدوین معماری فنی پروژه.',
    },
  },
  {
    step: '03',
    title: { en: 'Develop', fa: 'توسعه و برنامه‌نویسی' },
    desc: {
      en: 'Engineer the interactive software, integrate physical sensors, optimize real-time shaders, and refine controls.',
      fa: 'کدنویسی نرم‌افزار، اتصال سنسورهای سخت‌افزاری، بهینه‌سازی شیدرها و تنظیم حساسیت تعاملات.',
    },
  },
  {
    step: '04',
    title: { en: 'Deliver', fa: 'استقرار، تست و پشتیبانی' },
    desc: {
      en: 'Rigorous stress-testing, on-site hardware deployment, staff onboarding, and dedicated technical support.',
      fa: 'تست‌های فشار سخت‌گیرانه، نصب و کالیبراسیون در محل، آموزش عوامل و پشتیبانی فنی مداوم در طول رویداد.',
    },
  },
];

export const STUDIO_VALUES = [
  {
    title: { en: 'Spatial Innovation', fa: 'نوآوری فضایی' },
    desc: {
      en: 'We pioneer interactive technologies that break the boundaries of conventional flat screens.',
      fa: 'ما فناوری‌هایی خلق می‌کنیم که از مرزهای مانیتورهای مسطح فراتر رفته و کاربر را در دل محتوا قرار می‌دهند.',
    },
  },
  {
    title: { en: 'Industrial Rigor', fa: 'دقت و پایداری صنعتی' },
    desc: {
      en: 'Behind artistic visuals lies resilient, zero-crash engineering tested under high-traffic demands.',
      fa: 'در پس تصاویر درخشان هنری، مهندسی قدرتمند و بدون خطایی نهفته که در شرایط پرفشار آزموده شده است.',
    },
  },
  {
    title: { en: 'Human-Centered Interaction', fa: 'تعامل انسان‌محور' },
    desc: {
      en: 'Technology must feel intuitive within seconds. If an interaction requires a complex manual, it is redesigned.',
      fa: 'فناوری باید ظرف چند ثانیه فهمیده شود؛ اگر کار با سیستمی نیازمند دفترچه راهنما باشد، دوباره طراحی خواهد شد.',
    },
  },
];
