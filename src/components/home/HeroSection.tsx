"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Compass } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Tasteful multi-layer parallax rates
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "35%"]);
  const shapesY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-25%"]);
  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "50%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-brand-neutral-lightest"
      aria-label="Tavish Liora Central School Introduction"
    >
      {/* Layer 1: Background Cinematic Campus Photograph with Parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-neutral-lightest via-brand-neutral-lightest/90 to-brand-neutral-lightest/60 z-10 lg:via-brand-neutral-lightest/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-neutral-lightest via-transparent to-brand-neutral-lightest/40 z-10" />
        <Image
          src="/photos/campus-courtyard.jpg"
          alt="Tavish Liora school garden courtyard in Melamcode, Nemom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Subtle decorative paper grain texture */}
        <div className="absolute inset-0 paper-texture pointer-events-none z-10" />
      </motion.div>

      {/* Layer 2: Animated Organic Shapes Derived from Logo (Blue wave & Green leaf arcs) */}
      <motion.div
        style={{ y: shapesY }}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      >
        {/* Top-Right Blue Wave Flow */}
        <div
          className="absolute -top-16 -right-16 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-blue-200/25 blur-2xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        {/* Mid-Left Botanical Green Leaf Flow */}
        <div
          className="absolute top-1/3 -left-20 w-80 sm:w-[28rem] h-80 sm:h-[28rem] organic-leaf bg-brand-green-200/20 blur-3xl transform -rotate-45"
        />
        {/* Warm ochre accent glow */}
        <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-brand-accent-yellowLight blur-2xl opacity-60" />
      </motion.div>

      {/* Layer 3: Foreground Content & Editorial Typography */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Story Column (7 cols) */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Location & Establishment Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-green-200 shadow-sm text-xs sm:text-sm text-brand-neutral-charcoal backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-green-500 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-brand-green-600" />
              <span className="font-semibold text-brand-green-900">Melamcode, Nemom</span>
              <span className="text-brand-neutral-slate">·</span>
              <span className="text-brand-neutral-graphite">Thiruvananthapuram · Est. 2019</span>
            </motion.div>

            {/* Oversized Editorial Typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-brand-neutral-charcoal leading-[1.08]"
              >
                Tavish Liora
                <span className="block text-brand-green-700 font-serif font-normal italic text-3xl sm:text-5xl xl:text-6xl mt-1">
                  Central School
                </span>
              </motion.h1>

              {/* Tagline / School Motto */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="pt-2"
              >
                <p className="font-display text-xl sm:text-2xl text-brand-neutral-graphite font-medium leading-snug">
                  “Where little minds grow into big possibilities.”
                </p>
                <p className="font-sans text-xs text-brand-neutral-slate mt-1 italic tracking-wide">
                  — Dedicated children&apos;s early childhood & primary education community
                </p>
              </motion.div>
            </div>

            {/* Story Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="text-base sm:text-lg text-brand-neutral-graphite max-w-xl leading-relaxed"
            >
              Set amidst the calm greenery of Melamcode, Tavish Liora is a school designed around the rhythm of a child: hands-on STEM discovery, joyful mathematics, nature exploration, and heartfelt values.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="#school-essence"
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-brand-green-600 hover:bg-brand-green-700 transition-all duration-300 shadow-soft hover:shadow-card transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Compass className="w-4 h-4 text-brand-green-200 transition-transform duration-300 group-hover:rotate-45" />
                <span>Explore Our School</span>
              </Link>

              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-brand-neutral-charcoal bg-white/90 hover:bg-white border border-brand-neutral-border shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Admissions & Enquiry</span>
                <ArrowUpRight className="w-4 h-4 text-brand-green-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Quick Contact Micro-Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex items-center gap-6 text-xs text-brand-neutral-slate"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500" />
                Admissions open for 2025–26
              </span>
              <a
                href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                className="hover:text-brand-green-700 underline underline-offset-4 decoration-brand-green-300 transition-colors"
              >
                Call: {schoolContact.contact.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Layer 4: Multi-layered Editorial Visual Composition (5 cols) */}
          <motion.div
            style={{ y: decorY }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Primary Feature Card: Art & Hands-on Craft */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card border-4 border-white transform rotate-1 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/photos/art-studio.jpg"
                alt="Child discovering natural painting at Tavish Liora"
                fill
                sizes="(max-width: 1200px) 50vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-script text-amber-300 text-lg">Joy of Creation</span>
                <p className="font-display font-medium text-lg leading-snug">
                  Where hands touch colors, textures & living plants
                </p>
              </div>
            </div>

            {/* Secondary Overlapping Card: Sprout Discovery (Parallax Float) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-12 w-48 aspect-square rounded-3xl overflow-hidden shadow-float border-4 border-white bg-white"
            >
              <Image
                src="/photos/stem-discovery.jpg"
                alt="Plant sprout observation"
                fill
                sizes="200px"
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-brand-green-600 text-white rounded-full p-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </motion.div>

            {/* Decorative Floating Pill */}
            <div className="absolute -top-6 -right-6 px-4 py-2.5 rounded-full bg-white/95 border border-brand-green-100 shadow-soft text-xs font-semibold text-brand-green-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue-500" />
              <span>STEM & HowNWhy Robotics</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-neutral-slate">
          <span className="text-[11px] uppercase tracking-widest font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-brand-green-600" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
