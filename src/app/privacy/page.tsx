import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

export const metadata: Metadata = {
  title: "Privacy Policy | Tavish Liora Central School",
  description: "Privacy policy and child information security statement for Tavish Liora Central School.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 sm:py-28 bg-brand-neutral-lightest">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-green-700 hover:text-brand-green-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green-600" />
            <span>CHILD SAFETY & DATA PRIVACY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
            Privacy Policy
          </h1>
          <p className="text-xs text-brand-neutral-slate">
            Effective Date: Academic Year 2025–2026 · Tavish Liora Central School, Melamcode, Nemom.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-brand-neutral-graphite space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              1. Our Stance on Child Privacy
            </h2>
            <p>
              At Tavish Liora Central School, we protect the privacy, dignity, and digital footprint of every child. We do not sell, rent, or commercialize any personal or student data under any circumstances.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              2. Information Collected via this Website
            </h2>
            <p>
              When prospective parents submit an admissions enquiry or tour request, we only collect necessary coordination details: Parent/Guardian name, child name, prospective grade level, phone number, email, and any notes provided. This information is accessible solely by our internal admissions team.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              3. Photography & Media Policy
            </h2>
            <p>
              School event photography published on official social channels and school platforms is conducted with parental awareness and guidance. We never publish sensitive identifiable student records or home addresses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              4. Contact the Data Officer
            </h2>
            <p>
              For questions regarding privacy, data correction, or photo preferences, please reach out to our administration at {schoolContact.contact.email} or call {schoolContact.contact.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
