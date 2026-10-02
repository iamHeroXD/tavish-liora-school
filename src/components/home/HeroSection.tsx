"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Trophy, GraduationCap, Clock, Award, Compass, Heart } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EE] to-[#FFFDF7] pt-8 pb-16"
      aria-label="Tavish Liora Central School Hero"
    >
      {/* Soft background pastel decorative bubbles */}
      <div className="absolute top-16 left-8 w-24 h-24 rounded-full bg-amber-200/40 blur-xl pointer-events-none" />
      <div className="absolute top-1/3 -left-12 w-64 h-64 rounded-full bg-brand-green-100/50 blur-2xl pointer-events-none" />
      <div className="absolute bottom-16 left-1/4 w-36 h-36 rounded-full bg-brand-blue-100/40 blur-xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-orange-100/50 blur-xl pointer-events-none" />

      {/* Decorative floating white circles (like reference image) */}
      <div className="absolute top-36 left-12 w-8 h-8 rounded-full bg-white/80 shadow-sm pointer-events-none hidden md:block" />
      <div className="absolute bottom-28 left-20 w-12 h-12 rounded-full bg-white/70 shadow-sm pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-4 w-6 h-6 rounded-full bg-white/90 shadow-sm pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Big Playful Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200/80 shadow-sm text-xs sm:text-sm font-fredoka font-semibold text-brand-neutral-charcoal"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-brand-green-600" />
              <span className="text-brand-green-900 font-bold">Melamcode, Nemom</span>
              <span className="text-amber-500 font-black">·</span>
              <span className="text-brand-neutral-graphite">Thiruvananthapuram · Est. 2019</span>
            </motion.div>

            {/* Main Headline: Playful Multi-Colored Lettering (Exact Reference Style) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-fredoka text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-brand-neutral-charcoal leading-[1.12]">
                THE BEST{" "}
                <span className="inline-flex items-baseline tracking-normal">
                  <span className="text-[#F97316]">S</span>
                  <span className="text-[#0878B8]">C</span>
                  <span className="text-[#2E9B50]">H</span>
                  <span className="text-[#F59E0B]">O</span>
                  <span className="text-[#8B5CF6]">O</span>
                  <span className="text-[#EC4899]">L</span>
                </span>
                <br />
                FOR YOUR{" "}
                <span className="text-brand-green-600 underline decoration-amber-300 decoration-wavy decoration-2">
                  CHILDREN
                </span>
              </h1>

              {/* Subtitle / Narrative */}
              <p className="font-fredoka text-lg sm:text-xl text-amber-900/80 font-medium pt-2">
                “Where little minds grow into big possibilities.”
              </p>
              <p className="font-nunito text-sm sm:text-base text-brand-neutral-graphite max-w-xl leading-relaxed pt-1">
                At Tavish Liora Central School in Melamcode, learning is an adventure of hands-on STEM discovery, joyous mathematics, creative arts, and genuine care for every child.
              </p>
            </motion.div>

            {/* Dual CTA Buttons (Matching Reference Image Style: Yellow + Blue) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Button: Warm Amber / Gold */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-fredoka font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>LEARN MORE</span>
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </Link>

              {/* Secondary Button: Sky / Royal Blue */}
              <Link
                href="/learning"
                className="group inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-fredoka font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0878B8] to-[#055F96] hover:from-[#065A8C] hover:to-[#044B74] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>OUR CLASSES</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs font-fredoka font-bold text-brand-neutral-slate"
            >
              <span className="flex items-center gap-1.5 text-brand-green-800">
                <span className="w-2 h-2 rounded-full bg-brand-green-500" />
                Admissions open for 2025–26
              </span>
              <a
                href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                className="hover:text-amber-700 underline underline-offset-4 text-amber-800 transition-colors"
              >
                Call: {schoolContact.contact.phone}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Big Yellow Sun Circle + Smiling Child Portrait + Floating Stickers (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* The Large Warm Golden Sun Backdrop (Reference Image Style) */}
            <div className="relative w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] flex items-center justify-center">
              {/* Pulsing outer sun aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 shadow-2xl opacity-95" />

              {/* Inner glowing ring */}
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-white/40 pointer-events-none" />

              {/* Child Portrait with rounded container */}
              <div className="relative w-64 sm:w-80 md:w-[350px] h-64 sm:h-80 md:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-card z-10 bg-white">
                <Image
                  src="/photos/hero-child.jpg"
                  alt="Happy smiling child student at Tavish Liora Central School"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Sticker 1: 🎓 Graduation Cap (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 z-20 bg-white p-3 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-fredoka font-bold text-purple-900 uppercase">Early Foundation</p>
                  <p className="text-[11px] font-fredoka font-bold text-brand-neutral-charcoal">Pre-KG to Primary</p>
                </div>
              </motion.div>

              {/* Floating Sticker 2: 🏆 Golden Trophy (Top Right) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [4, -2, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-2 sm:top-4 sm:-right-6 z-20 bg-white p-3 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-fredoka font-bold text-amber-700 uppercase">Excellence</p>
                  <p className="text-[11px] font-fredoka font-bold text-brand-neutral-charcoal">Child-Centric</p>
                </div>
              </motion.div>

              {/* Floating Sticker 3: ⏰ Alarm Clock (Mid Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-6 sm:-left-12 z-20 bg-white p-2.5 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-fredoka font-bold text-blue-900 uppercase">Timing</p>
                  <p className="text-[11px] font-fredoka font-bold text-brand-neutral-charcoal">8:30 AM – 3:30 PM</p>
                </div>
              </motion.div>

              {/* Floating Sticker 4: 🤖 STEM & Robotics / Ball (Mid Right) */}
              <motion.div
                animate={{ y: [0, 7, 0], rotate: [-2, 3, -2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-1/2 -right-6 sm:-right-10 z-20 bg-white p-2.5 rounded-2xl shadow-lg border border-amber-100 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[10px] font-fredoka font-bold text-orange-900 uppercase">STEM & AI</p>
                  <p className="text-[11px] font-fredoka font-bold text-brand-neutral-charcoal">With HowNWhy</p>
                </div>
              </motion.div>

              {/* Floating Sticker 5: 🌱 Our Sprout Nature / Karate (Bottom Center) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white px-4 py-2 rounded-full shadow-lg border border-brand-green-200 flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green-500 animate-ping" />
                <span className="text-xs font-fredoka font-bold text-brand-green-800">
                  Melamcode Eco-Campus · Nemom
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
