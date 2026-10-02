"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { schoolContact } from "@/data/schoolInfo";
import { ArrowUpRight, Play, Sparkles, Heart } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export default function SocialWorld() {
  return (
    <section className="py-24 sm:py-32 bg-brand-neutral-lightest overflow-hidden border-t border-brand-neutral-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-sky-200">
              <InstagramIcon className="w-3.5 h-3.5 text-sky-600" />
              <span>FROM OUR SCHOOL WORLD</span>
            </div>
            <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight">
              Glimpses of life at <span className="text-amber-500">Tavish</span> <span className="text-emerald-600">Liora</span>.
            </h2>
            <p className="text-brand-neutral-slate text-sm sm:text-base font-nunito leading-relaxed">
              Moments from our classroom experiments, eco-farm excursions, and festive school celebrations in Melamcode.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={schoolContact.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-fredoka font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 shadow-soft transition-all group"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @tavishlioracentralschool</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Curated Editorial Social Mosaic (One large reel + 2 small posts + 1 tall + 1 quote) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* 1. Large Featured Reel Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative group rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card bg-brand-neutral-charcoal min-h-[380px] flex flex-col justify-end p-6"
          >
            <Image
              src="/photos/stem-discovery.jpg"
              alt="Hands-on Little Scientists and Robotics discovery"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Play Button Indicator */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-soft group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>

            <div className="relative z-10 space-y-2 text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-xs font-fredoka font-semibold text-white border border-emerald-300">
                <Sparkles className="w-3 h-3" />
                Featured Video Highlight
              </span>
              <h3 className="font-fredoka font-bold text-xl leading-snug">
                Little Scientists & STEM Discovery Day
              </h3>
              <p className="text-xs text-white/90 font-nunito line-clamp-2">
                Young inquisitive minds testing plant sprouts, learning robotic logic, and celebrating their discoveries in Melamcode.
              </p>
            </div>
          </motion.div>

          {/* 2. Middle Column: Two Stacked Activity Posts (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Post A: Math Fun Mania */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-3xl bg-white border border-brand-neutral-border shadow-soft flex gap-4 items-center group"
            >
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/photos/art-studio.jpg"
                  alt="Math Fun Mania & Craft"
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  Math Fun Mania
                </span>
                <h4 className="font-fredoka font-bold text-sm text-brand-neutral-charcoal">
                  Puzzles, Tangrams & Geometry Play
                </h4>
                <p className="text-xs text-brand-neutral-slate font-nunito line-clamp-1">
                  Making mathematics tangible and joyous.
                </p>
              </div>
            </motion.div>

            {/* Post B: Annual Sports Relay */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-3xl bg-white border border-stone-200/80 shadow-soft flex gap-4 items-center group"
            >
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/photos/sports-day.jpg"
                  alt="Annual Sports Meet"
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Sports Meet
                </span>
                <h4 className="font-fredoka font-bold text-sm text-brand-neutral-charcoal">
                  Joyous Athletic Relays & Camaraderie
                </h4>
                <p className="text-xs text-brand-neutral-slate font-nunito line-clamp-1">
                  Running barefoot on the green lawn under palm shade.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. Right Column: Tall Editorial Quote / Community Post (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 p-7 rounded-[2.5rem] bg-gradient-to-br from-emerald-800 to-teal-950 text-white shadow-soft flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-emerald-300">
                <span className="font-fredoka font-bold text-lg">Parent & School Heart</span>
                <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
              </div>
              <p className="font-fredoka text-lg font-medium leading-relaxed text-white/95">
                “Every child carries an innate spark. In our Melamcode garden, we give that spark the soil, sunlight, and encouragement to blossom.”
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 text-xs text-emerald-200/90 font-nunito">
              <span className="block font-fredoka font-bold text-white text-sm">Tavish Liora Central School</span>
              <span>Melamcode, Nemom P.O.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
