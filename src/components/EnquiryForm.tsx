"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    ageGrade: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate gentle network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-[2.5rem] bg-brand-green-50/80 border-2 border-brand-green-300 text-center space-y-4 shadow-soft">
        <div className="w-16 h-16 rounded-full bg-brand-green-500 text-white flex items-center justify-center mx-auto shadow-sm animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-2xl text-brand-neutral-charcoal">
          Thank you, {formData.parentName || "Parent"}!
        </h3>
        <p className="text-sm text-brand-neutral-graphite max-w-md mx-auto leading-relaxed">
          We have received your enquiry for <strong>{formData.childName || "your child"}</strong>. Our admissions coordinator at Melamcode, Nemom will reach out to you within 24 hours at <strong>{formData.phone}</strong>.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ parentName: "", childName: "", ageGrade: "", phone: "", email: "", message: "" });
            }}
            className="text-xs font-semibold text-brand-green-700 underline underline-offset-4 hover:text-brand-green-900"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-card space-y-5"
    >
      <div className="space-y-1 pb-3 border-b border-stone-200/80">
        <h3 className="font-fredoka font-bold text-2xl text-brand-neutral-charcoal">
          Admissions Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-brand-neutral-slate font-nunito">
          Connect directly with our admissions desk in Melamcode, Nemom.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Parent Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-fredoka font-semibold text-brand-neutral-graphite uppercase tracking-wider block">
            Parent / Guardian Name *
          </label>
          <input
            type="text"
            required
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            placeholder="e.g. Anjali Nair"
            className="w-full px-4 py-3 rounded-2xl bg-amber-50/30 border border-stone-200 text-sm font-nunito text-brand-neutral-charcoal focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
          />
        </div>

        {/* Child Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-fredoka font-semibold text-brand-neutral-graphite uppercase tracking-wider block">
            Child&apos;s Name *
          </label>
          <input
            type="text"
            required
            value={formData.childName}
            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
            placeholder="e.g. Aarav"
            className="w-full px-4 py-3 rounded-2xl bg-amber-50/30 border border-stone-200 text-sm font-nunito text-brand-neutral-charcoal focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
          />
        </div>

        {/* Child Age / Grade of Interest */}
        <div className="space-y-1.5">
          <label className="text-xs font-fredoka font-semibold text-brand-neutral-graphite uppercase tracking-wider block">
            Age / Grade of Interest *
          </label>
          <select
            required
            value={formData.ageGrade}
            onChange={(e) => setFormData({ ...formData, ageGrade: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-amber-50/30 border border-stone-200 text-sm font-nunito text-brand-neutral-charcoal focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
          >
            <option value="">Select Level</option>
            <option value="Pre-KG / Play (Age 2.5 - 3.5)">Pre-KG / Play (Age 2.5 - 3.5)</option>
            <option value="LKG / Kindergarten (Age 3.5 - 4.5)">LKG / Kindergarten (Age 3.5 - 4.5)</option>
            <option value="UKG / Kindergarten (Age 4.5 - 5.5)">UKG / Kindergarten (Age 4.5 - 5.5)</option>
            <option value="Primary Grade 1 - 5">Primary (Grade 1 - 5)</option>
            <option value="After-School / Co-Curricular">After-School Enrichment / Tuition</option>
          </select>
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="text-xs font-fredoka font-semibold text-brand-neutral-graphite uppercase tracking-wider block">
            Contact Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 94976 92852"
            className="w-full px-4 py-3 rounded-2xl bg-amber-50/30 border border-stone-200 text-sm font-nunito text-brand-neutral-charcoal focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-xs font-fredoka font-semibold text-brand-neutral-graphite uppercase tracking-wider block">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. parent@example.com"
          className="w-full px-4 py-3 rounded-2xl bg-amber-50/30 border border-stone-200 text-sm font-nunito text-brand-neutral-charcoal focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
        />
      </div>

      {/* Message / Specific Questions */}
      <div className="space-y-1.5">
        <label className="text-xs font-fredoka font-semibold text-brand-neutral-graphite uppercase tracking-wider block">
          Any questions or notes for the educators?
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your child's personality, favorite activities, or any questions regarding school timings/transport."
          className="w-full px-4 py-3 rounded-2xl bg-amber-50/30 border border-stone-200 text-sm font-nunito text-brand-neutral-charcoal focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all resize-none"
        />
      </div>

      {/* Privacy Guarantee Note */}
      <div className="flex items-start gap-2.5 text-xs text-brand-neutral-slate font-nunito pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
        <span>
          Your privacy matters. Information submitted is handled strictly by Tavish Liora Central School admissions and never shared.
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full text-base font-fredoka font-bold tracking-wide text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-soft hover:shadow-card transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending your enquiry...</span>
          </>
        ) : (
          <>
            <span>SUBMIT ADMISSIONS ENQUIRY</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
