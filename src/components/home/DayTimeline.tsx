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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-amber-200">
              <Sun className="w-3.5 h-3.5 text-amber-600" />
              <span>THE DAILY RHYTHM</span>
            </div>
            <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight">
              A Day at <span className="text-amber-500">Tavish</span> <span className="text-emerald-600">Liora</span>.
            </h2>
            <p className="text-brand-neutral-slate text-sm sm:text-base font-nunito leading-relaxed">
              A balanced rhythm of focused inquiry, lively discovery, mindful nourishment, and active physical play in Melamcode.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll day timeline left"
              className="p-3 rounded-full border border-stone-200 bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-amber-50 shadow-sm transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll day timeline right"
              className="p-3 rounded-full border border-stone-200 bg-white text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-amber-50 shadow-sm transition-all active:scale-95"
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
          {dayTimeline.map((item, index) => {
            const timeColors = [
              { badge: "bg-amber-100 text-amber-800 border-amber-200", icon: "text-amber-600" },
              { badge: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "text-emerald-600" },
              { badge: "bg-sky-100 text-sky-800 border-sky-200", icon: "text-sky-600" },
              { badge: "bg-rose-100 text-rose-800 border-rose-200", icon: "text-rose-600" },
              { badge: "bg-purple-100 text-purple-800 border-purple-200", icon: "text-purple-600" },
              { badge: "bg-amber-100 text-amber-800 border-amber-200", icon: "text-amber-600" },
            ];
            const currentBadge = timeColors[index % timeColors.length];

            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start"
              >
                <div className="h-full p-6 sm:p-7 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-fredoka font-bold ${currentBadge.badge} border`}>
                        <Clock className={`w-3 h-3 ${currentBadge.icon}`} />
                        {item.time}
                      </span>
                      {item.isVerifiedTiming && (
                        <span className="text-[10px] font-fredoka font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          Verified Timing
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="text-xs font-fredoka font-semibold text-amber-600 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <h3 className="font-fredoka font-bold text-lg text-brand-neutral-charcoal mt-0.5">
                        {item.activity}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-brand-neutral-slate">
                    <span className="font-nunito font-medium">Step {index + 1} of {dayTimeline.length}</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />
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
