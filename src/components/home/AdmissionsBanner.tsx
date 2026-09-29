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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-green-600" />
                <span>START THEIR JOURNEY</span>
              </div>
              <h2
                id="admissions-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight"
              >
                Welcoming families to Tavish Liora.
              </h2>
              <p className="text-brand-neutral-slate text-base sm:text-lg leading-relaxed">
                Choosing your child&apos;s early learning community is a deeply personal decision. We make the admissions experience thoughtful, unhurried, and welcoming.
              </p>
            </div>

            {/* 4 Steps Process */}
            <div className="space-y-4 pt-2">
              {admissionSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-3xl bg-white border border-brand-neutral-border shadow-soft flex items-start gap-4 hover:border-brand-green-300 transition-colors"
                >
                  <span className="font-display font-bold text-xl text-brand-green-600 bg-brand-green-50 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand-green-100">
                    {step.step}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-base text-brand-neutral-charcoal">
                        {step.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-green-800 bg-brand-green-100/70 px-2 py-0.5 rounded-full">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-neutral-graphite leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-6 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-blue-700">
                  Prefer to speak directly?
                </p>
                <p className="font-display font-bold text-lg text-brand-blue-950">
                  {schoolContact.contact.phone}
                </p>
                <p className="text-xs text-brand-blue-800/80">
                  Admissions desk open Mon–Sat 8:30 AM – 4:00 PM
                </p>
              </div>
              <a
                href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                className="px-4 py-2.5 rounded-full bg-brand-blue-600 text-white text-xs font-semibold hover:bg-brand-blue-700 shadow-sm transition-colors flex-shrink-0"
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
