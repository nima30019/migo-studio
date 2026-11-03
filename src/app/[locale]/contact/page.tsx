import React from 'react';
import { Metadata } from 'next';
import { Locale, UI_STRINGS } from '@/data/translations';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { StructuredData } from '@/components/StructuredData';
import { createLocalizedMetadata } from '@/utils/seo';
import { getBreadcrumbSchema } from '@/utils/schema';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const locale = params.locale === 'fa' ? 'fa' : 'en';
  return createLocalizedMetadata({
    locale,
    path: '/contact',
    title: locale === 'fa' ? 'تماس با استودیو MIGO — مشاوره پروژه تعاملی' : 'Contact MIGO Studio — Interactive Project Consultation',
    description:
      locale === 'fa'
        ? 'ارتباط مستقیم با مدیران فنی و هنری استودیو MIGO جهت مشاوره، استعلام هزینه و همکاری در پروژه‌های واقعیت مجازی، نمایشگاهی و سه‌بعدی.'
        : 'Connect with MIGO Creative Technology Studio. Contact our team for project inquiries, technical consultation, and collaboration.',
    keywords:
      locale === 'fa'
        ? ['تماس با استودیو MIGO', 'سفارش واقعیت مجازی', 'مشاوره غرفه تعاملی', 'استعلام قیمت نرم افزار سه بعدی']
        : ['Contact MIGO Studio', 'VR Project Consultation', 'Interactive Agency Inquiry', 'Creative Tech RFP'],
  });
}

export default function ContactPage({ params }: ContactPageProps) {
  const locale = params.locale === 'fa' ? 'fa' : 'en';

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'fa' ? 'صفحه اصلی' : 'Home', path: '' },
      { name: locale === 'fa' ? 'تماس با ما' : 'Contact', path: '/contact' },
    ],
    locale
  );

  return (
    <div className="pt-32 pb-24 space-y-16">
      <StructuredData id="contact-breadcrumb-schema" data={breadcrumbSchema} />
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          badge={locale === 'en' ? 'Get in Touch' : 'ارتباط با ما'}
          title={
            locale === 'en' ? (
              <>
                Let's Build Something <span className="text-gradient-orange">Unforgettable</span>
              </>
            ) : (
              <>
                بیایید تجربه‌ای <span className="text-gradient-orange">ماندگار و شگفت‌انگیز</span> خلق کنیم
              </>
            )
          }
          description={
            locale === 'en'
              ? 'Whether you have a fully formed RFP or just an ambitious concept, our creative technologists are ready to collaborate.'
              : 'چه سند نیازمندی‌های کامل (RFP) داشته باشید و چه در مرحله کانسپت اولیه باشید، تیم استودیو MIGO آماده همفکری و همکاری است.'
          }
        />
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Studio Direct Info Column */}
          <div className="space-y-6">
            <div className="p-7 rounded-2xl bg-[#15191F] border border-[#28303B]">
              <div className="w-10 h-10 rounded-xl bg-[#20252D] text-brand-orange flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-1">
                {locale === 'en' ? 'Project Inquiries' : 'پروژه‌ها و استعلام قیمت'}
              </h3>
              <p className="text-xs text-[#A0A6B0] mb-2">
                {locale === 'en'
                  ? 'Send your brief directly to our solutions desk'
                  : 'ارسال مستقیم پروپوزال و بریف پروژه'}
              </p>
              <a
                href="mailto:projects@migo-studio.com"
                className="text-sm font-semibold text-brand-orange hover:underline"
              >
                projects@migo-studio.com
              </a>
            </div>

            <div className="p-7 rounded-2xl bg-[#15191F] border border-[#28303B]">
              <div className="w-10 h-10 rounded-xl bg-[#20252D] text-brand-orange flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-1">
                {locale === 'en' ? 'Studio Phone' : 'تلفن مستقیم استودیو'}
              </h3>
              <p className="text-xs text-[#A0A6B0] mb-2">
                {locale === 'en'
                  ? 'Saturday to Wednesday: 9:00 AM – 6:00 PM'
                  : 'شنبه تا چهارشنبه: ساعت ۹:۰۰ الی ۱۸:۰۰'}
              </p>
              <span className="text-sm font-semibold text-white font-mono" dir="ltr">
                +98 (21) 8800-MIGO
              </span>
            </div>

            <div className="p-7 rounded-2xl bg-[#15191F] border border-[#28303B]">
              <div className="w-10 h-10 rounded-xl bg-[#20252D] text-brand-orange flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-1">
                {locale === 'en' ? 'Physical Studio' : 'محل استودیو و لابراتوار'}
              </h3>
              <p className="text-xs text-[#A0A6B0] leading-relaxed">
                {locale === 'en'
                  ? 'MIGO Creative Tech Studio, Innovation Campus, Tehran'
                  : 'تهران، پارک فناوری و نوآوری دیجیتال، ساختمان استودیو MIGO'}
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
}
