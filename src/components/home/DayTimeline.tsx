"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { dayTimeline } from "@/data/schoolInfo";
import { Clock, Sun, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function DayTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-brand-neutral-lightest overflow-hidden border-t border-brand-neutral-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent-yellowLight text-amber-800 text-xs font-semibold tracking-wider uppercase">
              <Sun className="w-3.5 h-3.5 text-amber-600" />
              <span>THE DAILY RHYTHM</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight">
              A Day at Tavish Liora.
            </h2>
            <p className="text-brand-neutral-slate text-sm sm:text-base">
              A balanced rhythm of focused inquiry, lively discovery, mindful nourishment, and active physical play in Melamcode.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll day timeline left"
              className="p-3 rounded-full border border-brand-neutral-border bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-brand-neutral-ivory shadow-sm transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll day timeline right"
              className="p-3 rounded-full border border-brand-neutral-border bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-brand-neutral-ivory shadow-sm transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal journey */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dayTimeline.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start"
            >
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-brand-neutral-border shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-green-50 text-brand-green-800 border border-brand-green-200">
                      <Clock className="w-3 h-3 text-brand-green-600" />
                      {item.time}
                    </span>
                    {item.isVerifiedTiming && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-neutral-slate">
                        Verified Timing
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-xs font-script text-brand-green-700 text-base">
                      {item.label}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-brand-neutral-charcoal mt-0.5">
                      {item.activity}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-neutral-graphite leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-brand-neutral-border/60 flex items-center justify-between text-xs text-brand-neutral-slate">
                  <span className="font-medium">Step {index + 1} of {dayTimeline.length}</span>
                  <Sparkles className="w-3.5 h-3.5 text-brand-green-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
