import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { STUDIO_VALUES, TECH_STACK, APPROACH_STEPS } from '@/data/general';
import { SectionHeader } from '@/components/SectionHeader';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getBreadcrumbSchema } from '@/utils/schema';
import { getAssetPath } from '@/utils/asset';
import {
  Sparkles,
  Target,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Users,
} from 'lucide-react';

interface AboutPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '/about',
    title: locale === 'fa' ? 'درباره استودیو فناوری خلاق MIGO' : 'About MIGO — Creative Technology Studio',
    description:
      locale === 'fa'
        ? 'آشنایی با تاریخچه، ارزش‌ها، متدولوژی مهندسی و اکوسیستم فنی استودیو MIGO در خلق دنیاهای تعاملی و واقعیت مجازی.'
        : 'Learn about MIGO Studio: our engineering philosophy, core values, spatial computing methodology, and technology stack.',
    keywords:
      locale === 'fa'
        ? ['درباره استودیو MIGO', 'تیم فناوری خلاق', 'متدولوژی توسعه واقعیت مجازی', 'فلسفه طراحی تعاملی']
        : ['About MIGO Studio', 'Creative Technology Team', 'Spatial Computing Philosophy', 'Interactive Agency'],
  });
}

export default function AboutPage({ params }: AboutPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  const isRTL = locale === 'fa';

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'درباره ما' : 'About', path: '/about' },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-24">
      <StructuredData id="about-breadcrumb-schema" data={breadcrumbSchema} />
      {/* 1. HERO HEADER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#15191F] border border-[#28303B] mb-6">
          <div className="w-4 h-4 relative flex items-center justify-center">
            <img
              src={getAssetPath('/migo-logo-transparent.png')}
              alt={locale === 'en' ? 'MIGO Studio Icon' : 'آیکون استودیو MIGO'}
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
            {locale === 'en' ? 'Creative Tech Studio' : 'استودیو فناوری خلاق'}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mb-6 leading-tight">
          {locale === 'en' ? (
            <>
              Where Technology Meets <br />
              <span className="text-gradient-orange">Immersive</span> Storytelling
            </>
          ) : (
            <>
              تلاقی مهندسی فناوری و <br />
              روایت‌های <span className="text-gradient-orange">غوطه‌ورکننده سه‌بعدی</span>
            </>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-[#A0A6B0] max-w-3xl mx-auto leading-relaxed">
          {UI_STRINGS.aboutPreviewText[locale]}
        </p>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#15191F] border border-[#28303B] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#20252D] border border-brand-orange/40 text-brand-orange flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {locale === 'en' ? 'Our Mission' : 'ماموریت ما'}
              </h3>
              <p className="text-sm sm:text-base text-[#A0A6B0] leading-relaxed">
                {locale === 'en'
                  ? 'To empower enterprises, cultural centers, and ambitious brands through intuitive interactive digital experiences. We bridge the gap between industrial simulation precision and creative visual elegance.'
                  : 'توانمندسازی سازمان‌ها، مراکز فرهنگی و برندهای پیشرو از طریق تجربیات دیجیتال تعاملی و طبیعی. ما پیونددهنده دقت محاسباتی شبیه‌سازی‌های صنعتی با شکوه هنری بصری هستیم.'}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#15191F] border border-[#28303B] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#20252D] border border-brand-orange/40 text-brand-orange flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {locale === 'en' ? 'Our Vision' : 'چشم‌انداز استودیو'}
              </h3>
              <p className="text-sm sm:text-base text-[#A0A6B0] leading-relaxed">
                {locale === 'en'
                  ? 'To establish MIGO as an internationally recognized creative technology studio leading the transition from traditional 2D monitors into spatial computing, tactile projection environments, and real-time 3D.'
                  : 'تبدیل استودیو MIGO به یکی از مراجع بین‌المللی فناوری‌های خلاق در زمینه گذار از مانیتورهای تخت دوبعدی به دنیاهای رایانش فضایی، چیدمان‌های تعاملی لمسی و وب سه‌بعدی بی‌درنگ.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Guiding Principles' : 'اصول و ارزش‌ها'}
          title={locale === 'en' ? 'The Engineering Mindset' : 'دیدگاه مهندسی استودیو MIGO'}
          description={
            locale === 'en'
              ? 'Our work stands on the intersection of three fundamental convictions.'
              : 'فعالیت‌های ما بر پایه سه اصل بنیادین مهندسی و خلاقیت استوار است.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDIO_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#15191F] border border-[#28303B] hover:border-brand-orange/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#20252D] text-brand-orange flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">
                {val.title[locale]}
              </h4>
              <p className="text-xs sm:text-sm text-[#A0A6B0] leading-relaxed">
                {val.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. METHODOLOGY SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={locale === 'en' ? 'Disciplined Execution' : 'فرایند منظم تولید'}
          title={UI_STRINGS.ourApproach[locale]}
          description={UI_STRINGS.ourApproachDesc[locale]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#15191F] border border-[#28303B] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-brand-orange block mb-3">
                  {step.step}
                </span>
                <h4 className="font-display font-bold text-base text-white mb-2">
                  {step.title[locale]}
                </h4>
                <p className="text-xs text-[#A0A6B0] leading-relaxed">
                  {step.desc[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM ROLES & CAPABILITIES (Honoring rule #5: No fake employee names) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#15191F] border border-[#28303B] p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-brand-orange" />
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {locale === 'en' ? 'Interdisciplinary Studio Team' : 'تیم تخصصی چندرشته‌ای استودیو'}
            </h3>
          </div>

          <p className="text-sm text-[#A0A6B0] leading-relaxed mb-8">
            {locale === 'en'
              ? 'Our studio brings together specialized talent spanning real-time graphics engineering, shader development, spatial audio design, physical computing, and interactive UX design.'
              : 'تیم استودیو MIGO متشکل از متخصصان مهندسی گرافیک بی‌درنگ، برنامه‌نویسان شیدر، طراحان صدای فضایی، متخصصان سنسورهای فیزیکی و طراحان تجربه کاربری تعاملی است.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#28303B]">
              <span className="block font-display font-bold text-brand-orange text-lg">VR/XR</span>
              <span className="text-xs text-[#A0A6B0]">
                {locale === 'en' ? 'Engineers' : 'مهندسی واقعیت مجازی'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#28303B]">
              <span className="block font-display font-bold text-brand-orange text-lg">3D & VFX</span>
              <span className="text-xs text-[#A0A6B0]">
                {locale === 'en' ? 'Artists' : 'هنرمندان مدل‌سازی'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#28303B]">
              <span className="block font-display font-bold text-brand-orange text-lg">Hardware</span>
              <span className="text-xs text-[#A0A6B0]">
                {locale === 'en' ? 'Sensor Integrators' : 'متخصصان سخت‌افزار'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#28303B]">
              <span className="block font-display font-bold text-brand-orange text-lg">Game Dev</span>
              <span className="text-xs text-[#A0A6B0]">
                {locale === 'en' ? 'Programmers' : 'توسعه‌دهندگان بازی'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-3xl bg-radial-glow border border-brand-orange/40">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            {locale === 'en'
              ? 'Collaborate with MIGO Studio'
              : 'همکاری و همراهی با استودیو MIGO'}
          </h2>
          <p className="text-sm text-[#A0A6B0] max-w-md mx-auto mb-6">
            {locale === 'en'
              ? 'Tell us about your brand challenge or technical requirements.'
              : 'چالش برند یا نیازمندی فنی پروژه خود را با ما در میان بگذارید.'}
          </p>
          <Link
            href={`/${locale}/start-project`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange transition-all"
          >
            <span>{UI_STRINGS.startProject[locale]}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
