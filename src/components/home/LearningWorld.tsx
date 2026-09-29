"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { learningPillars } from "@/data/schoolInfo";
import { ArrowRight, Sparkles, CheckCircle2, Cpu, Shapes, Palette, Activity, Mic } from "lucide-react";

// Icon mapping helper
const ICONS: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Shapes: <Shapes className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Activity: <Activity className="w-4 h-4" />,
  Mic: <Mic className="w-4 h-4" />,
};

// Associated atmospheric photo per pillar
const PILLAR_IMAGES: Record<string, string> = {
  "early-foundation": "/photos/art-studio.jpg",
  "stem-robotics": "/photos/stem-discovery.jpg",
  "experiential-math": "/photos/stem-discovery.jpg",
  "creative-crafts": "/photos/art-studio.jpg",
  "holistic-wellness": "/photos/sports-day.jpg",
  "communication-grooming": "/photos/reading-nook.jpg",
};

export default function LearningWorld() {
  const [activePillarId, setActivePillarId] = useState<string>(learningPillars[0].id);
  const activePillar = learningPillars.find((p) => p.id === activePillarId) || learningPillars[0];

  return (
    <section className="py-24 sm:py-32 bg-brand-neutral-ivory/50 overflow-hidden relative" aria-labelledby="learning-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-green-600" />
            <span>INTERACTIVE DISCOVERY BOOK</span>
          </div>
          <h2
            id="learning-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight"
          >
            How learning unfolds at Tavish Liora.
          </h2>
          <p className="text-brand-neutral-slate text-base sm:text-lg">
            Rather than silent textbook drills, learning here is experiential—tasting the joy of science, numbers, colors, body movement, and voice.
          </p>
        </div>

        {/* Discovery Book Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Pillar Selectors (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {learningPillars.map((pillar) => {
              const isSelected = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  type="button"
                  className={`text-left p-4 sm:p-5 rounded-3xl transition-all duration-300 relative border ${
                    isSelected
                      ? "bg-white border-brand-green-300 shadow-soft translate-x-1 sm:translate-x-2"
                      : "bg-white/60 hover:bg-white border-transparent text-brand-neutral-graphite hover:border-brand-neutral-border"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-brand-green-600 text-white shadow-sm"
                            : "bg-brand-neutral-ivory text-brand-neutral-slate"
                        }`}
                      >
                        {ICONS[pillar.iconName]}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base sm:text-lg text-brand-neutral-charcoal leading-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-brand-neutral-slate font-medium mt-0.5">
                          {pillar.theme}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-green-500 flex-shrink-0 animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Discovery Book Page (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full bg-white rounded-[2.5rem] border border-brand-neutral-border shadow-card p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Visual Top Half */}
                <div className="space-y-6">
                  <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden border border-brand-neutral-border/80 shadow-inner">
                    <Image
                      src={PILLAR_IMAGES[activePillar.id] || "/photos/art-studio.jpg"}
                      alt={activePillar.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                        {activePillar.theme}
                      </span>
                      <span className="text-[11px] font-medium text-white/80">
                        Tavish Liora Learning Experience
                      </span>
                    </div>
                  </div>

                  {/* Descriptive Narrative */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-green-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-600" />
                      <span>{activePillar.verifiedSource}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-neutral-charcoal">
                      {activePillar.title}
                    </h3>
                    <p className="text-base text-brand-neutral-graphite leading-relaxed">
                      {activePillar.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-brand-neutral-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-brand-neutral-slate">
                    <span>Part of our child-centered early childhood curriculum</span>
                  </div>
                  <Link
                    href="/learning"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors"
                  >
                    <span>View all learning programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
