"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trees, Sparkles, BookOpen, HeartHandshake, Eye } from "lucide-react";

export default function CampusSpaces() {
  return (
    <section className="py-24 sm:py-32 bg-brand-neutral-ivory/60 overflow-hidden relative" aria-labelledby="spaces-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
              <Trees className="w-3.5 h-3.5 text-brand-green-600" />
              <span>CAMPUS ENVIRONMENT</span>
            </div>
            <h2
              id="spaces-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight"
            >
              Spaces that invite curiosity.
            </h2>
            <p className="text-brand-neutral-slate text-base sm:text-lg">
              Set amidst trees and open sky in Melamcode, our campus is curated for children to move freely, breathe naturally, and engage all five senses.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors"
          >
            <span>Explore full gallery & lightbox</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Photo Grid (Not a boring card grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Feature (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 relative group rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card aspect-[4/3] md:aspect-auto min-h-[340px] md:min-h-[460px]"
          >
            <Image
              src="/photos/campus-courtyard.jpg"
              alt="Lush green garden courtyard at Tavish Liora"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2">
                <Trees className="w-3.5 h-3.5 text-brand-green-300" />
                <span>Green Garden Courtyard</span>
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white">
                Sunlit Open-Air Pathways & Tropical Shade
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-md">
                Gentle breezes, birdsong, and natural stone walkways allowing young children to run, observe butterflies, and feel connected to the earth.
              </p>
            </div>
          </motion.div>

          {/* Right Column Stack (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Top Right: Storybook Library Nook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative group rounded-3xl overflow-hidden border-4 border-white shadow-card aspect-[16/10] sm:aspect-[16/9]"
            >
              <Image
                src="/photos/reading-nook.jpg"
                alt="Storybook reading library nook"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-semibold mb-1 text-brand-green-300">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Storybook Corner & Library</span>
                </div>
                <h4 className="font-display font-medium text-base text-white">
                  Cozy Nooks & Literature Discovery
                </h4>
              </div>
            </motion.div>

            {/* Bottom Right: Hands-on Craft & Natural Studio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative group rounded-3xl overflow-hidden border-4 border-white shadow-card aspect-[16/10] sm:aspect-[16/9]"
            >
              <Image
                src="/photos/art-studio.jpg"
                alt="Creative craft and natural painting table"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-semibold mb-1 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tactile Craft & Art Studio</span>
                </div>
                <h4 className="font-display font-medium text-base text-white">
                  Natural Pigments, Stitching & Clay
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
