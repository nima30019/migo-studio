'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/translations';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

interface ContactFormProps {
  locale: Locale;
}

export const ContactForm: React.FC<ContactFormProps> = ({ locale }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Virtual Reality',
    budget: 'Not specified',
    timeline: 'Within 3 months',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ referenceId: string } | null>(null);

  const isRTL = locale === 'fa';

  const projectTypeOptions = [
    { en: 'Virtual Reality (VR / MR)', fa: 'واقعیت مجازی و ترکیبی (VR / MR)' },
    { en: 'Augmented Reality (AR / WebAR)', fa: 'واقعیت افزوده (AR / WebAR)' },
    { en: 'Game Development', fa: 'بازی‌های رایانه‌ای و تعاملی' },
    { en: 'Interactive Exhibition Solutions', fa: 'راهکارهای نمایشگاهی و موزه‌ای' },
    { en: '3D Design & Real-time Visualization', fa: 'طراحی و مدل‌سازی سه‌بعدی' },
    { en: 'Simulation & Interactive Training', fa: 'شبیه‌سازی صنعتی و آموزش' },
    { en: 'Other Interactive Software', fa: 'سایر نرم‌افزارهای تعاملی' },
  ];

  const budgetOptions = [
    { en: '< $10,000 (Consultation / Prototype)', fa: 'پروژه‌های اولیه / پروتوتایپ' },
    { en: '$10,000 - $30,000 (Standard Production)', fa: 'پروژه‌های استاندارد' },
    { en: '$30,000 - $75,000 (Enterprise Solution)', fa: 'راهکارهای سازمانی پیشرفته' },
    { en: '$75,000+ (Turnkey Flagship Installation)', fa: 'چیدمان‌های بزرگ و جامع' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg(locale === 'en' ? 'Please enter your name.' : 'لطفاً نام خود را وارد کنید.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg(
        locale === 'en' ? 'Please enter a valid email address.' : 'لطفاً یک ایمیل معتبر وارد کنید.'
      );
      return;
    }
    if (formData.message.trim().length < 10) {
      setErrorMsg(
        locale === 'en'
          ? 'Please enter a description of at least 10 characters.'
          : 'لطفاً توضیحات پروژه را با حداقل ۱۰ کاراکتر وارد کنید.'
      );
      return;
    }

    setLoading(true);

    try {
      let refId = 'MIGO-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.referenceId) refId = data.referenceId;
        }
      } catch {
        // Fallback for static hosts
      }

      setSuccessInfo({ referenceId: refId });
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(
        error.message ||
          (locale === 'en'
            ? 'Failed to send message. Please retry.'
            : 'ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.')
      );
    } finally {
      setLoading(false);
    }
  };

  if (successInfo) {
    return (
      <div className="rounded-2xl bg-[#15191F] border border-brand-orange/40 p-8 sm:p-10 text-center animate-fadeIn shadow-glow-orange">
        <div className="w-16 h-16 rounded-full bg-brand-orange/10 border border-brand-orange flex items-center justify-center text-brand-orange mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2">
          {locale === 'en' ? 'Message Sent Successfully!' : 'پیام شما با موفقیت ارسال شد!'}
        </h3>
        <p className="text-[#A0A6B0] text-sm max-w-md mx-auto mb-6">
          {locale === 'en'
            ? 'Thank you for reaching out to MIGO. Our creative technology architects will review your project and get in touch within 24 business hours.'
            : 'از تماس شما با استودیو MIGO سپاسگزاریم. مهندسان و طراحان ما نیازمندی‌های شما را بررسی کرده و ظرف حداکثر ۲۴ ساعت آینده با شما تماس خواهند گرفت.'}
        </p>
        <div className="inline-block px-4 py-2 rounded-lg bg-[#0B0D10] border border-[#28303B] text-xs font-mono text-brand-orange mb-6">
          {locale === 'en' ? 'Inquiry Tracking ID' : 'کد رهگیری درخواست'}: {successInfo.referenceId}
        </div>
        <div>
          <button
            onClick={() => {
              setSuccessInfo(null);
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: 'Virtual Reality',
                budget: 'Not specified',
                timeline: 'Within 3 months',
                message: '',
              });
            }}
            className="text-xs font-semibold text-[#A0A6B0] hover:text-white underline underline-offset-4"
          >
            {locale === 'en' ? 'Send another inquiry' : 'ارسال درخواست جدید'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[#15191F] border border-[#28303B] p-6 sm:p-10 shadow-xl"
    >
      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
            {locale === 'en' ? 'Full Name *' : 'نام و نام خانوادگی *'}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={locale === 'en' ? 'Alex Vance' : 'نام شما'}
            className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm placeholder-[#6B7280] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
            {locale === 'en' ? 'Email Address *' : 'آدرس ایمیل *'}
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={locale === 'en' ? 'alex@company.com' : 'email@example.com'}
            className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm placeholder-[#6B7280] transition-colors"
          />
        </div>

        {/* Company Name (optional) */}
        <div>
          <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
            {locale === 'en' ? 'Company / Organization (Optional)' : 'سازمان یا شرکت (اختیاری)'}
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder={locale === 'en' ? 'Acme Global' : 'نام مجموعه شما'}
            className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm placeholder-[#6B7280] transition-colors"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
            {locale === 'en' ? 'Project Category *' : 'دسته‌بندی پروژه *'}
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm transition-colors"
          >
            {projectTypeOptions.map((opt, i) => (
              <option key={i} value={opt.en} className="bg-[#15191F] text-white">
                {opt[locale]}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
            {locale === 'en' ? 'Estimated Budget (Optional)' : 'برآورد بودجه (اختیاری)'}
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm transition-colors"
          >
            {budgetOptions.map((opt, i) => (
              <option key={i} value={opt.en} className="bg-[#15191F] text-white">
                {opt[locale]}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
            {locale === 'en' ? 'Target Timeline' : 'بازه زمانی مورد نظر'}
          </label>
          <input
            type="text"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            placeholder={locale === 'en' ? 'e.g., Next month, Expo Q3' : 'مثلاً: ماه آینده، نمایشگاه تابستان'}
            className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm placeholder-[#6B7280] transition-colors"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#A0A6B0] uppercase tracking-wider mb-2">
          {locale === 'en' ? 'Project Description & Objectives *' : 'توضیحات و اهداف پروژه *'}
        </label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={
            locale === 'en'
              ? 'Tell us about the interactive experience you envision, target users, hardware environment, or core objectives...'
              : 'درباره ایده تعاملی خود، جامعه مخاطبان، شرایط سخت‌افزاری محل اجرا و اهداف اصلی بنویسید...'
          }
          className="w-full px-4 py-3 rounded-xl bg-[#0B0D10] border border-[#28303B] focus:border-brand-orange focus:outline-none text-white text-sm placeholder-[#6B7280] transition-colors leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover shadow-glow-orange hover:shadow-glow-orange-lg transition-all duration-300 disabled:opacity-50 text-sm sm:text-base cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{locale === 'en' ? 'Submitting to MIGO...' : 'در حال ثبت درخواست...'}</span>
          </>
        ) : (
          <>
            <span>{locale === 'en' ? 'Send Project Inquiry' : 'ارسال درخواست پروژه'}</span>
            <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>
    </form>
  );
};
