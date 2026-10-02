"use client";

import { admissionSteps, schoolContact } from "@/data/schoolInfo";
import EnquiryForm from "@/components/EnquiryForm";
import { Sparkles, Phone, MapPin, Calendar, HeartHandshake } from "lucide-react";

export default function AdmissionsBanner() {
  return (
    <section id="admissions" className="py-24 sm:py-32 bg-brand-neutral-ivory/50 overflow-hidden relative" aria-labelledby="admissions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 4-Step Journey Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>START THEIR JOURNEY</span>
              </div>
              <h2
                id="admissions-heading"
                className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight"
              >
                Welcoming families to <span className="text-amber-500">Tavish</span> <span className="text-emerald-600">Liora</span>.
              </h2>
              <p className="text-brand-neutral-slate text-base sm:text-lg font-nunito leading-relaxed">
                Choosing your child&apos;s early learning community is a deeply personal decision. We make the admissions experience thoughtful, unhurried, and welcoming.
              </p>
            </div>

            {/* 4 Steps Process */}
            <div className="space-y-4 pt-2">
              {admissionSteps.map((step, idx) => {
                const stepColors = [
                  { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", badge: "bg-emerald-100 text-emerald-800" },
                  { bg: "bg-sky-50 text-sky-700 border-sky-200", badge: "bg-sky-100 text-sky-800" },
                  { bg: "bg-amber-50 text-amber-700 border-amber-200", badge: "bg-amber-100 text-amber-800" },
                  { bg: "bg-rose-50 text-rose-700 border-rose-200", badge: "bg-rose-100 text-rose-800" },
                ];
                const sc = stepColors[idx % stepColors.length];

                return (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-soft flex items-start gap-4 hover:border-amber-300 transition-colors"
                  >
                    <span className={`font-fredoka font-bold text-xl ${sc.bg} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border`}>
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-fredoka font-bold text-base text-brand-neutral-charcoal">
                          {step.title}
                        </h3>
                        <span className={`text-[10px] uppercase tracking-wider font-fredoka font-semibold ${sc.badge} px-2.5 py-0.5 rounded-full`}>
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs uppercase tracking-wider font-fredoka font-semibold text-sky-700">
                  Prefer to speak directly?
                </p>
                <p className="font-fredoka font-bold text-xl text-sky-950">
                  {schoolContact.contact.phone}
                </p>
                <p className="text-xs text-sky-800/80 font-nunito">
                  Admissions desk open Mon–Sat 8:30 AM – 4:00 PM
                </p>
              </div>
              <a
                href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                className="px-5 py-2.5 rounded-full bg-sky-600 text-white text-xs font-fredoka font-bold hover:bg-sky-700 shadow-sm transition-colors flex-shrink-0"
              >
                Call Admissions
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
