import type { Metadata } from "next";
import { admissionSteps, schoolContact } from "@/data/schoolInfo";
import EnquiryForm from "@/components/EnquiryForm";
import { Sparkles, Phone, Mail, Clock, HelpCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions | Tavish Liora Central School",
  description:
    "Join our school family in Melamcode, Nemom, Thiruvananthapuram. Explore our 4-step admission journey, FAQs, and submit your online admissions enquiry.",
};

const FAQS = [
  {
    q: "Where is Tavish Liora Central School located?",
    a: "We are situated in Melamcode, Nemom P.O., Thiruvananthapuram, Kerala 695020. Our peaceful campus is easily accessible from the main Nemom road while enjoying serene greenery.",
  },
  {
    q: "What age groups and classes are currently admitted?",
    a: "We accept applications for Foundational Early Years (Pre-KG, LKG, UKG) starting from age 2.5 years, as well as Primary Grade cohorts. Please contact our admissions team regarding specific class availability.",
  },
  {
    q: "What are the school operating hours?",
    a: "Our instructional school day begins with arrival from 8:30 AM and concludes around 3:30 PM. The administrative admissions office is open Monday through Saturday from 8:30 AM to 4:00 PM.",
  },
  {
    q: "What should we expect during a campus visit?",
    a: "A campus visit is an unhurried, informal experience. Parents and children are guided through our green courtyards, activity studios, and reading spaces, followed by a warm discussion with our educational team.",
  },
  {
    q: "How do I reach the admissions office directly?",
    a: "You can phone our admissions coordinator directly at +91 94976 92852 or email Tavishlioracentralschool@gmail.com.",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-green-600" />
              <span>ADMISSIONS & ENROLMENT</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.1]">
              Start their journey with Tavish Liora.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl leading-relaxed">
              We welcome parents who cherish curiosity, kindness, and holistic childhood growth. Enrolment is conducted with warmth, transparency, and personal care.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-green-700">
              The 4-Step Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
              A clear, caring pathway to enrolment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-soft flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-3xl text-brand-green-700">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-brand-green-800 bg-brand-green-100 px-2.5 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-neutral-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-neutral-graphite leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-neutral-border/60 text-xs font-semibold text-brand-green-700">
                  {step.actionText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Direct Contact */}
      <section className="py-20 sm:py-28 bg-brand-neutral-ivory/50 border-t border-brand-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Helpline & Quick Info Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-soft space-y-5">
                <h3 className="font-display font-bold text-xl text-brand-neutral-charcoal">
                  Direct Admissions Help
                </h3>
                <p className="text-sm text-brand-neutral-graphite leading-relaxed">
                  Have questions about admission availability or want to arrange a campus tour today? Our admissions coordinator in Melamcode is ready to assist you.
                </p>

                <div className="space-y-3 pt-2 text-sm">
                  <a
                    href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-neutral-lightest border border-brand-neutral-border text-brand-neutral-charcoal hover:border-brand-green-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-brand-neutral-slate block">Phone Hotline:</span>
                      <span className="font-semibold text-brand-neutral-charcoal">{schoolContact.contact.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${schoolContact.contact.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-neutral-lightest border border-brand-neutral-border text-brand-neutral-charcoal hover:border-brand-green-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-brand-neutral-slate block">Email Correspondence:</span>
                      <span className="font-semibold text-brand-neutral-charcoal break-all">{schoolContact.contact.email}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-neutral-lightest border border-brand-neutral-border text-brand-neutral-charcoal">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-brand-neutral-slate block">Office Working Hours:</span>
                      <span className="font-medium text-brand-neutral-charcoal">{schoolContact.contact.officeDays} ({schoolContact.contact.hours})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admissions Guarantee */}
              <div className="p-6 rounded-3xl bg-brand-green-50 border border-brand-green-200 text-xs text-brand-green-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-green-700 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Commitment to Fairness:</strong> Admissions are conducted transparently based on child readiness and family alignment with our child-centric philosophy. No arbitrary screening tests for early years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent FAQs */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest border-t border-brand-neutral-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-green-700">
              Common Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
              Frequently asked by parents
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={faq.q}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-brand-neutral-border shadow-soft space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-neutral-charcoal">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-sm text-brand-neutral-graphite pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
