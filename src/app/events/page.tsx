import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { schoolEvents } from "@/data/schoolInfo";
import { Calendar, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Traditions | Tavish Liora Central School",
  description:
    "Explore verified annual events and learning traditions at Tavish Liora Central School: Annual Sports Meet, Math Fun Mania Day, Little Scientists Discovery, and Farm Trips.",
};

export default function EventsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-brand-green-600" />
              <span>SCHOOL TRADITIONS & MILESTONES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.1]">
              Celebrations that make learning memorable.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl leading-relaxed">
              Every term at Tavish Liora brings landmark experiential celebrations where children lead demonstrations, run athletic races, and showcase scientific prototypes.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {schoolEvents.map((event, index) => (
            <div
              key={event.id}
              className="p-6 sm:p-10 rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-soft flex flex-col lg:flex-row items-center gap-8 lg:gap-12 hover:shadow-card transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative w-full lg:w-5/12 aspect-[16/10] rounded-3xl overflow-hidden flex-shrink-0 bg-brand-neutral-ivory">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-brand-green-800 shadow-sm">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="w-full lg:w-7/12 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display font-bold text-sm text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-neutral-slate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-600" />
                    Verified Event
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-neutral-charcoal">
                  {event.title}
                </h2>

                <p className="text-sm sm:text-base text-brand-neutral-graphite leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights tags */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-neutral-slate block mb-2">
                    Event Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-brand-neutral-ivory border border-brand-neutral-border text-xs font-medium text-brand-neutral-charcoal"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-neutral-border/60">
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-900 group"
                  >
                    <span>View moments in gallery</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
