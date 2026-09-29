import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

export const metadata: Metadata = {
  title: "Terms of Service | Tavish Liora Central School",
  description: "Terms and conditions of use for the Tavish Liora Central School official website.",
};

export default function TermsPage() {
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
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
            Terms of Use
          </h1>
          <p className="text-xs text-brand-neutral-slate">
            Tavish Liora Central School · Melamcode, Nemom, Thiruvananthapuram 695020.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-brand-neutral-graphite space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              1. General Notice
            </h2>
            <p>
              This website serves as an informational resource for prospective families, enrolled students, and our wider school community. Content is provided in good faith reflecting our active programs and admissions policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              2. Intellectual Property & School Brand
            </h2>
            <p>
              The official Tavish Liora Central School emblem, logo marks, photographs, written curriculum descriptions, and brand assets are the exclusive property of Tavish Liora Central School and cannot be reproduced for commercial purposes without explicit prior written authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-xl text-brand-neutral-charcoal">
              3. Admissions Communications
            </h2>
            <p>
              Submission of an inquiry through this website initiates an admissions dialogue but does not constitute an automatic guarantee of seat allocation until official documentation and enrollment confirmation are finalized.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
