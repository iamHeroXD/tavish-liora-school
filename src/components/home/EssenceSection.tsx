"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Play, Phone, ArrowRight, Sparkles, Heart } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

export default function EssenceSection() {
  return (
    <section
      id="about-work"
      className="py-20 sm:py-28 bg-white overflow-hidden relative border-t border-amber-100/80"
      aria-labelledby="about-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative, 4 Colorful Check Badges, Button & Call Contact (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-fredoka font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                TAVISH LIORA PHILOSOPHY
              </span>

              {/* Exact reference style heading */}
              <h2
                id="about-work-heading"
                className="font-fredoka text-3xl sm:text-5xl font-bold text-brand-neutral-charcoal leading-[1.2] tracking-tight"
              >
                Learn About Our Work and Cultural Activities.
              </h2>

              <p className="font-nunito text-base sm:text-lg text-brand-neutral-graphite leading-relaxed pt-2">
                At Tavish Liora Central School in Melamcode, Nemom, we believe that every child arrives with an innate universe of curiosity. We provide the warm soil, encouragement, and innovative tools for that curiosity to bloom into lifelong confidence.
              </p>
            </div>

            {/* 4 Feature Checkmark Badges (2x2 Grid - Exact Reference Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Badge 1: Yellow / Quality Educators */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-3 shadow-sm hover:shadow transition-shadow">
                <div className="w-9 h-9 rounded-full bg-amber-400 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 fill-amber-500 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-sm text-brand-neutral-charcoal">
                    Child-Centered Educators
                  </h3>
                  <p className="text-[11px] text-amber-800/80 font-nunito font-semibold">
                    Small cohorts & individual care
                  </p>
                </div>
              </div>

              {/* Badge 2: Blue / STEM & Robotics */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-center gap-3 shadow-sm hover:shadow transition-shadow">
                <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 fill-blue-600 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-sm text-brand-neutral-charcoal">
                    STEM & HowNWhy Robotics
                  </h3>
                  <p className="text-[11px] text-blue-800/80 font-nunito font-semibold">
                    Hands-on building & coding logic
                  </p>
                </div>
              </div>

              {/* Badge 3: Teal-Green / Math Fun Mania */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3 shadow-sm hover:shadow transition-shadow">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 fill-emerald-600 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-sm text-brand-neutral-charcoal">
                    Math Fun Mania & Discovery
                  </h3>
                  <p className="text-[11px] text-emerald-800/80 font-nunito font-semibold">
                    Tactile puzzles & spatial intuition
                  </p>
                </div>
              </div>

              {/* Badge 4: Orange / Sports & Movement */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-center gap-3 shadow-sm hover:shadow transition-shadow">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 fill-orange-600 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka font-bold text-sm text-brand-neutral-charcoal">
                    Sports, Yoga & Karate
                  </h3>
                  <p className="text-[11px] text-orange-800/80 font-nunito font-semibold">
                    Physical vitality & body discipline
                  </p>
                </div>
              </div>
            </div>

            {/* Action Row: ABOUT US button + Principal/Admissions Phone Widget */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              {/* Sunny Yellow ABOUT US button */}
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full text-sm font-fredoka font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
              >
                <span>ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Call Widget (Avatar + Phone Number like in reference) */}
              <a
                href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-300 shadow-sm flex-shrink-0 bg-amber-100 flex items-center justify-center">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Admissions Desk"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-fredoka font-bold text-base text-brand-neutral-charcoal group-hover:text-amber-600 transition-colors block">
                    {schoolContact.contact.phone}
                  </span>
                  <span className="text-[11px] font-fredoka font-semibold uppercase tracking-wider text-brand-neutral-slate">
                    Call Admissions · Melamcode
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Multi-Photo Collage with Video Play Overlay (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Top Photo: Creative Art Studio */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-card bg-amber-50">
              <Image
                src="/photos/art-studio.jpg"
                alt="Children exploring natural arts and colors"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-fredoka font-bold text-brand-neutral-charcoal shadow-sm">
                Tactile Studio
              </div>
            </div>

            {/* Overlapping Lower Photo with Play Video Button (Exact Reference Style) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative -mt-16 sm:-mt-20 ml-auto w-10/12 aspect-[16/10] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white group cursor-pointer"
            >
              <Image
                src="/photos/farm-trip.jpg"
                alt="Eco-farm field trip with sunflowers"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/95 text-amber-500 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-amber-500 ml-1" />
                </div>
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-fredoka font-bold drop-shadow">
                <span>Eco-Farm Field Trip Moments</span>
                <span className="bg-amber-500/90 px-2 py-0.5 rounded-full text-[10px]">Watch Moments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
