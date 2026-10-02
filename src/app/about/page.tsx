import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { schoolContact, schoolStoryTimeline } from "@/data/schoolInfo";
import { Sparkles, MapPin, Heart, Compass, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tavish Liora Central School",
  description:
    "Learn about the founding, philosophy, and community of Tavish Liora Central School in Melamcode, Nemom, Thiruvananthapuram. Established 2019.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>ABOUT TAVISH LIORA</span>
            </div>
            <h1 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.15]">
              A school born from care for the <span className="text-emerald-600">natural rhythms</span> of childhood.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl font-nunito leading-relaxed">
              Established in 2019 in Melamcode, Nemom, Tavish Liora Central School is dedicated to nurturing early childhood and primary students in Thiruvananthapuram through genuine discovery, warmth, and active play.
            </p>
          </div>
        </div>
      </section>

      {/* Layered Story & Founding Section */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Imagery (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card">
                <Image
                  src="/photos/campus-courtyard.jpg"
                  alt="Tavish Liora school garden in Melamcode"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-3xl bg-white border border-amber-200 shadow-card max-w-[200px]">
                <div className="flex items-center gap-1.5 text-emerald-700 font-fredoka font-bold text-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Est. 2019</span>
                </div>
                <p className="text-xs text-brand-neutral-slate font-nunito mt-1 leading-snug">
                  Melamcode, Nemom, Thiruvananthapuram
                </p>
              </div>
            </div>

            {/* Right Story Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-fredoka text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal tracking-tight">
                Our Story in <span className="text-amber-500">Melamcode</span>, <span className="text-emerald-600">Nemom</span>
              </h2>
              <div className="space-y-4 text-brand-neutral-graphite font-nunito text-base sm:text-lg leading-relaxed">
                <p>
                  Tavish Liora Central School was established in 2019 to provide families in Nemom and greater Thiruvananthapuram with an educational home that avoids mechanical rote pressures.
                </p>
                <p>
                  Instead, we create an environment where children are encouraged to touch soil, observe seedlings, assemble simple robotics with <strong>HowNWhy</strong>, unlock joyful numerical puzzles during <strong>Math Fun Mania</strong>, and express themselves through daily spoken English and fine motor crafts.
                </p>
                <p>
                  Every educator on our campus views children not as empty vessels to be loaded with lectures, but as dynamic individuals already brimming with imagination, dignity, and natural curiosity.
                </p>
              </div>

              {/* Verified Facts Card */}
              <div className="p-6 rounded-[2rem] bg-emerald-50/70 border border-emerald-200 space-y-3">
                <h3 className="font-fredoka font-bold text-base text-emerald-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Verified Institution Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-nunito text-emerald-900">
                  <div>
                    <span className="font-bold block text-brand-neutral-charcoal font-fredoka">Location:</span>
                    <span>Melamcode, Nemom P.O., Thiruvananthapuram 695020</span>
                  </div>
                  <div>
                    <span className="font-bold block text-brand-neutral-charcoal font-fredoka">Founding Year:</span>
                    <span>2019</span>
                  </div>
                  <div>
                    <span className="font-bold block text-brand-neutral-charcoal font-fredoka">Admissions Helpline:</span>
                    <span>+91 94976 92852</span>
                  </div>
                  <div>
                    <span className="font-bold block text-brand-neutral-charcoal font-fredoka">Official Email:</span>
                    <span>Tavishlioracentralschool@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-20 sm:py-28 bg-brand-neutral-ivory/50 border-t border-brand-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest font-fredoka font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Guiding Principles
            </span>
            <h2 className="font-fredoka text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
              What we stand for every day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-fredoka font-bold text-xl text-brand-neutral-charcoal">
                Child-Led Curiosity
              </h3>
              <p className="text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                Children learn best when they formulate questions and test hypotheses. From observing sprouts to engineering blocks, curiosity is our chief curriculum engine.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-fredoka font-bold text-xl text-brand-neutral-charcoal">
                Emotional Belonging & Care
              </h3>
              <p className="text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                A child who feels safe and emotionally understood takes creative risks naturally. We foster small classroom cohorts where every child is personally known.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-fredoka font-bold text-xl text-brand-neutral-charcoal">
                Holistic Vitality
              </h3>
              <p className="text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                Academic readiness must be paired with bodily vitality. Daily movement through karate, yoga, zumba, and open-air play is core to our daily timetable.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-fredoka font-bold text-base shadow-soft hover:shadow-card transition-all"
            >
              <span>Begin Your Child&apos;s Admissions Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
