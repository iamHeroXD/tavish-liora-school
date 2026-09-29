"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function EssenceSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const parallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-15%"]);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "20%"]);

  return (
    <section
      id="school-essence"
      ref={targetRef}
      className="relative py-24 sm:py-32 bg-brand-neutral-ivory/60 overflow-hidden"
      aria-labelledby="essence-heading"
    >
      {/* Decorative organic background arcs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-green-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Layered Editorial Visuals (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Main large image */}
            <motion.div
              style={{ y: parallaxSlow }}
              className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card border-4 border-white bg-white"
            >
              <Image
                src="/photos/farm-trip.jpg"
                alt="Children observing sunflowers on eco-farm field trip"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-script text-brand-accent-yellow text-lg">Real Discovery</span>
                <p className="font-display text-lg font-medium">
                  Learning outdoors with sunflowers, soil & living nature
                </p>
              </div>
            </motion.div>

            {/* Overlapping secondary image */}
            <motion.div
              style={{ y: parallaxFast }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-[3/4] rounded-3xl overflow-hidden shadow-float border-4 border-white bg-white hidden sm:block"
            >
              <Image
                src="/photos/reading-nook.jpg"
                alt="Child reading book in peaceful library nook"
                fill
                sizes="240px"
                className="object-cover"
              />
            </motion.div>

            {/* Floating Editorial Badge / Number */}
            <div className="absolute -top-6 -left-4 sm:-left-6 p-4 rounded-3xl bg-white/95 border border-brand-green-200/60 shadow-soft backdrop-blur-sm max-w-[180px]">
              <span className="block font-display text-2xl font-bold text-brand-green-700">2019</span>
              <span className="text-xs text-brand-neutral-slate font-medium leading-tight block mt-0.5">
                Rooted in Nemom with dedicated care
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-brand-green-600" />
              <span>THE TAVISH LIORA PHILOSOPHY</span>
            </div>

            <h2
              id="essence-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal leading-[1.15] tracking-tight"
            >
              “Every child arrives with a world of their own.”
            </h2>

            <div className="space-y-4 text-brand-neutral-graphite text-base sm:text-lg leading-relaxed">
              <p>
                At Tavish Liora Central School in Melamcode, Nemom, education is never a one-size-fits-all conveyor belt. We understand that early childhood is the season of boundless curiosity, physical agility, and wonder.
              </p>
              <p>
                Through active sensory learning—from our hands-on <strong>Math Fun Mania</strong> days to <strong>Little Scientists</strong> lab experiments, outdoor farm immersions, and daily movement—children develop confidence, emotional resilience, and deep respect for the world around them.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-brand-neutral-border shadow-sm">
                <Compass className="w-5 h-5 text-brand-blue-500 mb-2" />
                <h3 className="font-display font-semibold text-sm text-brand-neutral-charcoal">Curiosity First</h3>
                <p className="text-xs text-brand-neutral-slate mt-1">
                  Questions are encouraged, celebrated, and explored.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-neutral-border shadow-sm">
                <ShieldCheck className="w-5 h-5 text-brand-green-600 mb-2" />
                <h3 className="font-display font-semibold text-sm text-brand-neutral-charcoal">Safe & Secure</h3>
                <p className="text-xs text-brand-neutral-slate mt-1">
                  A tranquil Melamcode setting focused on child well-being.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-neutral-border shadow-sm">
                <Heart className="w-5 h-5 text-brand-accent-coral mb-2" />
                <h3 className="font-display font-semibold text-sm text-brand-neutral-charcoal">Values & Poise</h3>
                <p className="text-xs text-brand-neutral-slate mt-1">
                  Grooming empathy, speech poise, and mutual kindness.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors"
              >
                <span>Read our full founding story & values</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
