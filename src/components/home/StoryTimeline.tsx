"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { schoolStoryTimeline } from "@/data/schoolInfo";
import { Calendar, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function StoryTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-brand-neutral-lightest overflow-hidden border-t border-brand-neutral-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-amber-200">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>THE SCHOOL JOURNEY</span>
            </div>
            <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight">
              Rooted in Nemom, <span className="text-brand-green-600">growing</span> with every child.
            </h2>
            <p className="text-brand-neutral-slate text-sm sm:text-base font-nunito leading-relaxed">
              Founded in 2019, Tavish Liora Central School has steadily evolved while maintaining our deep commitment to individual care, natural curiosity, and joyful learning.
            </p>
          </div>

          {/* Desktop Navigation Arrows for Horizontal Scroll */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous timeline milestones"
              className="p-3 rounded-full border border-stone-200 bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-amber-50 shadow-sm transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next timeline milestones"
              className="p-3 rounded-full border border-stone-200 bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-amber-50 shadow-sm transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Horizontal Scrollable Milestones / Mobile: Vertical Stack */}
        <div
          ref={scrollContainerRef}
          className="flex md:flex-row flex-col gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {schoolStoryTimeline.map((item, index) => {
            const yearColors = [
              { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
              { text: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200" },
              { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
              { text: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200" },
            ];
            const color = yearColors[index % yearColors.length];

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-full md:w-[360px] lg:w-[400px] snap-start"
              >
                <div className="h-full p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                  {/* Year Accent Watermark */}
                  <div className="absolute -top-3 -right-2 text-7xl font-fredoka font-bold text-amber-50 pointer-events-none select-none group-hover:text-emerald-50 transition-colors">
                    {item.year}
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`font-fredoka font-bold text-3xl ${color.text}`}>
                        {item.year}
                      </span>
                      {item.status === "verified" ? (
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-fredoka font-semibold ${color.bg} ${color.text} border ${color.border}`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-fredoka font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          Growth Era
                        </span>
                      )}
                    </div>

                    <h3 className="font-fredoka font-bold text-xl text-brand-neutral-charcoal">
                      {item.title}
                    </h3>

                    <p className="text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-brand-neutral-slate font-medium">
                    <span className="font-nunito">Melamcode, Nemom Campus</span>
                    <span className="font-fredoka font-semibold text-brand-green-600 group-hover:translate-x-1 transition-transform">
                      Chapter {index + 1} →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
