'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/translations';
import {
  CheckCircle2,
  Sparkles,
  Layers,
  Monitor,
  Smartphone,
  Glasses,
  Zap,
  ArrowRight,
  UploadCloud,
  Check,
} from 'lucide-react';

interface StartProjectFormProps {
  locale: Locale;
}

export const StartProjectForm: React.FC<StartProjectFormProps> = ({ locale }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Virtual Reality']);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Standalone VR']);
  const [budgetTier, setBudgetTier] = useState<string>('Standard ($15k - $35k)');
  const [timelineTier, setTimelineTier] = useState<string>('1 - 2 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isRTL = locale === 'fa';

  const typeOptions = [
    { en: 'Virtual Reality (VR / MR)', fa: 'واقعیت مجازی و ترکیبی' },
    { en: 'Augmented Reality (WebAR)', fa: 'واقعیت افزوده وب' },
    { en: 'Interactive Games', fa: 'بازی‌های تعاملی' },
    { en: 'Exhibition Installation', fa: 'چیدمان نمایشگاهی' },
    { en: '3D Product Configurator', fa: 'کانفیگوراتور سه‌بعدی' },
    { en: 'Industrial Simulator', fa: 'شبیه‌ساز صنعتی' },
  ];

  const platformOptions = [
    { en: 'Meta Quest / Pico VR', fa: 'هدست‌های واقعیت مجازی', icon: Glasses },
    { en: 'Mobile Browser (WebAR)', fa: 'مرورگر موبایل (WebAR)', icon: Smartphone },
    { en: 'Touchscreen / Kiosk', fa: 'کیوسک و میز لمسی', icon: Monitor },
    { en: 'PC / High-End Screen', fa: 'کامپیوتر و نمایشگر بزرگ', icon: Layers },
    { en: 'Mobile App (iOS/Android)', fa: 'اپلیکیشن موبایل', icon: Zap },
  ];

  const toggleType = (val: string) => {
    if (selectedTypes.includes(val)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== val));
      }
    } else {
      setSelectedTypes([...selectedTypes, val]);
    }
  };

  const togglePlatform = (val: string) => {
    if (selectedPlatforms.includes(val)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter((p) => p !== val));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, val]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg(locale === 'en' ? 'Please provide your name.' : 'لطفاً نام خود را وارد کنید.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg(
        locale === 'en' ? 'Please provide a valid email.' : 'لطفاً یک ایمیل معتبر وارد کنید.'
      );
      return;
    }
    if (description.trim().length < 10) {
      setErrorMsg(
        locale === 'en'
          ? 'Please give us a few details about your vision (at least 10 characters).'
          : 'لطفاً حداقل ۱۰ کاراکتر درباره ایده یا نیازمندی پروژه بنویسید.'
      );
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          projectTypes: selectedTypes,
          platforms: selectedPlatforms,
          budget: budgetTier,
          timeline: timelineTier,
          description,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      setSubmittedRef(data.referenceNumber);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(error.message || 'Error submitting');
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedRef) {
    return (
      <div className="rounded-3xl bg-[#15191F] border border-brand-orange/40 p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-glow-orange animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-brand-orange/10 border border-brand-orange flex items-center justify-center text-brand-orange mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="font-display font-bold text-3xl text-white mb-3">
          {locale === 'en' ? 'Project Vision Received' : 'چشم‌انداز پروژه دریافت شد'}
        </h2>
        <p className="text-[#A0A6B0] text-sm leading-relaxed mb-6">
          {locale === 'en'
            ? 'Our technical directors and creative leads are reviewing your project scope. We will prepare an initial proposal and architecture outline within 24 hours.'
            : 'مدیران فنی و هنری ما جزئیات نیاز شما را بررسی خواهند کرد و ظرف ۲۴ ساعت آینده با طرح پیشنهادی اولیه و برآورد زمان با شما تماس می‌گیرند.'}
        </p>
        <div className="inline-block px-5 py-2.5 rounded-xl bg-[#0B0D10] border border-[#28303B] text-sm font-mono text-brand-orange mb-8">
          {locale === 'en' ? 'Reference Case #' : 'شماره پرونده'}: {submittedRef}
        </div>
        <div>
          <button
            onClick={() => {
              setSubmittedRef(null);
              setDescription('');
            }}
            className="text-xs font-semibold text-[#A0A6B0] hover:text-white underline underline-offset-4"
          >
            {locale === 'en' ? 'Start another submission' : 'ثبت پروژه جدید'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10">
      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-800 text-red-200 text-xs">
          {errorMsg}
        </div>
      )}

      {/* Step 1: Project Type */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center">
            1
          </span>
          <h3 className="font-display font-bold text-lg text-white">
            {locale === 'en' ? 'Select Project Domains' : 'حوزه یا حوزه‌های تخصصی پروژه'}
          </h3>
        </div>
        <p className="text-xs text-[#A0A6B0] mb-5">
          {locale === 'en'
            ? 'Choose one or multiple interactive technologies you are interested in.'
            : 'یک یا چند مورد از فناوری‌های مورد نیاز خود را انتخاب کنید.'}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {typeOptions.map((opt, idx) => {
            const isSelected = selectedTypes.includes(opt.en);
            return (
              <button
                type="button"
                key={idx}
                onClick={() => toggleType(opt.en)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange text-white border-brand-orange shadow-glow-orange'
                    : 'bg-[#0B0D10] text-[#A0A6B0] border-[#28303B] hover:border-brand-orange/50 hover:text-white'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
                <span>{opt[locale]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Target Platform */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center">
            2
          </span>
          <h3 className="font-display font-bold text-lg text-white">
            {locale === 'en' ? 'Target Hardware & Platform' : 'سخت‌افزار و پلتفرم هدف'}
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {platformOptions.map((p, idx) => {
            const isSelected = selectedPlatforms.includes(p.en);
            const Icon = p.icon;
            return (
              <button
                type="button"
                key={idx}
                onClick={() => togglePlatform(p.en)}
                className={`p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#20252D] border-brand-orange text-white shadow-glow-orange'
                    : 'bg-[#0B0D10] border-[#28303B] text-[#A0A6B0] hover:border-[#364150]'
                }`}
              >
                <Icon
                  className={`w-5 h-5 mb-3 ${isSelected ? 'text-brand-orange' : 'text-[#6B7280]'}`}
                />
                <span className="text-xs font-semibold">{p[locale]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Project Requirements */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center">
            3
          </span>
          <h3 className="font-display font-bold text-lg text-white">
            {locale === 'en' ? 'Project Vision & Requirements' : 'شرح ایده و نیازمندی‌های پروژه'}
          </h3>
        </div>

        <textarea
          rows={5}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={
            locale === 'en'
              ? 'Tell us what you want to achieve, your event dates, reference inspirations, or key interactive features...'
              : 'درباره اهداف پروژه، زمان تحویل یا رویداد مد نظر، نمونه‌های الهام‌بخش یا ویژگی‌های کلیدی بنویسید...'
          }
          className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm placeholder-[#6B7280] leading-relaxed transition-colors mb-4"
        />

        {/* Attachment Mockup Area */}
        <div className="border border-dashed border-[#28303B] hover:border-brand-orange/50 rounded-xl p-6 text-center bg-[#0B0D10]/50 transition-colors cursor-pointer">
          <UploadCloud className="w-8 h-8 text-[#6B7280] mx-auto mb-2" />
          <p className="text-xs text-[#A0A6B0]">
            {locale === 'en'
              ? 'Attach RFP, design brief, or CAD/3D references (Optional - PDF, ZIP, PNG up to 25MB)'
              : 'پیوست فایل RFP، بریف طراحی یا مستندات سه‌بعدی (اختیاری - PDF, ZIP, PNG تا ۲۵ مگابایت)'}
          </p>
        </div>
      </div>

      {/* Step 4: Budget & Timeline */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center">
            4
          </span>
          <h3 className="font-display font-bold text-lg text-white">
            {locale === 'en' ? 'Budget & Timeline Parameters' : 'بودجه و بازه زمانی تحویل'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-[#A0A6B0] mb-2">
              {locale === 'en' ? 'Estimated Investment Tier' : 'محدوده بودجه تقریبی'}
            </label>
            <select
              value={budgetTier}
              onChange={(e) => setBudgetTier(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-xs"
            >
              <option value="Initial Prototype (< $10k)">
                {locale === 'en' ? 'Prototype / Pilot (< $10k)' : 'پروتوتایپ / نسخه آزمایشی'}
              </option>
              <option value="Standard ($15k - $35k)">
                {locale === 'en' ? 'Standard Production ($15k - $35k)' : 'توسعه استاندارد'}
              </option>
              <option value="Enterprise Flagship ($35k - $80k+)">
                {locale === 'en' ? 'Enterprise Flagship ($35k - $80k+)' : 'پروژه سازمانی شاخص'}
              </option>
              <option value="To Be Discussed">
                {locale === 'en' ? 'Need Technical Guidance' : 'نیاز به برآورد و مشاوره اولیه'}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A0A6B0] mb-2">
              {locale === 'en' ? 'Target Timeline' : 'بازه زمانی تحویل'}
            </label>
            <select
              value={timelineTier}
              onChange={(e) => setTimelineTier(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-xs"
            >
              <option value="Rush (< 1 Month)">
                {locale === 'en' ? 'Urgent / Expo Rush (< 1 Month)' : 'فوری / نمایشگاهی (کمتر از ۱ ماه)'}
              </option>
              <option value="1 - 2 Months">
                {locale === 'en' ? '1 - 2 Months' : '۱ تا ۲ ماه'}
              </option>
              <option value="3 - 6 Months">
                {locale === 'en' ? '3 - 6 Months' : '۳ تا ۶ ماه'}
              </option>
              <option value="Flexible">
                {locale === 'en' ? 'Flexible Roadmap' : 'شناور بر اساس نیاز'}
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 5: Contact Info */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#15191F] border border-[#28303B]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center">
            5
          </span>
          <h3 className="font-display font-bold text-lg text-white">
            {locale === 'en' ? 'Your Contact Details' : 'اطلاعات تماس شما'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#A0A6B0] mb-2">
              {locale === 'en' ? 'Full Name *' : 'نام و نام خانوادگی *'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#A0A6B0] mb-2">
              {locale === 'en' ? 'Business Email *' : 'ایمیل سازمانی / کاری *'}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#A0A6B0] mb-2">
              {locale === 'en' ? 'Organization / Company' : 'نام شرکت یا برند'}
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#A0A6B0] mb-2">
              {locale === 'en' ? 'Phone Number (Optional)' : 'شماره تماس (اختیاری)'}
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm"
            />
          </div>
        </div>
      </div>

      {/* Submit Action */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl font-bold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange hover:shadow-glow-orange-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-base"
      >
        <Sparkles className="w-5 h-5" />
        <span>
          {submitting
            ? locale === 'en'
              ? 'Analyzing & Submitting...'
              : 'در حال ثبت پرونده...'
            : locale === 'en'
            ? 'Submit Project Onboarding Brief'
            : 'ارسال و ثبت نهایی درخواست پروژه'}
        </span>
        <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
      </button>
    </form>
  );
};
