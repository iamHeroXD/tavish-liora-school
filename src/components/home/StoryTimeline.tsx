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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-brand-blue-500" />
              <span>THE SCHOOL JOURNEY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight">
              Rooted in Nemom, growing with every child.
            </h2>
            <p className="text-brand-neutral-slate text-sm sm:text-base">
              Founded in 2019, Tavish Liora Central School has steadily evolved while maintaining our deep commitment to individual care and curiosity.
            </p>
          </div>

          {/* Desktop Navigation Arrows for Horizontal Scroll */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous timeline milestones"
              className="p-3 rounded-full border border-brand-neutral-border bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-brand-neutral-ivory shadow-sm transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next timeline milestones"
              className="p-3 rounded-full border border-brand-neutral-border bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-brand-neutral-ivory shadow-sm transition-all active:scale-95"
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
          {schoolStoryTimeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-full md:w-[360px] lg:w-[400px] snap-start"
            >
              <div className="h-full p-8 rounded-3xl bg-white border border-brand-neutral-border shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                {/* Year Accent Watermark */}
                <div className="absolute -top-4 -right-2 text-7xl font-display font-black text-brand-neutral-ivory pointer-events-none select-none group-hover:text-brand-green-50 transition-colors">
                  {item.year}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-2xl text-brand-green-700">
                      {item.year}
                    </span>
                    {item.status === "verified" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-green-100 text-brand-green-800">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Milestone
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-neutral-ivory text-brand-neutral-slate">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        Growth Era
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-xl text-brand-neutral-charcoal">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-neutral-graphite leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-4 border-t border-brand-neutral-border/60 flex items-center justify-between text-xs text-brand-neutral-slate font-medium">
                  <span>Melamcode, Nemom Campus</span>
                  <span className="text-brand-green-600 group-hover:translate-x-1 transition-transform">
                    Chapter {index + 1} →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
