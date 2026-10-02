"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Cpu, Palette, Activity } from "lucide-react";

const CLASSES = [
  {
    title: "Foundational Early Years",
    grades: "Pre-KG, LKG & UKG",
    age: "Age: 2.5 – 5.5 Years",
    image: "/photos/art-studio.jpg",
    color: "amber",
    bgClass: "bg-[#FFFDF6] border-amber-200",
    badgeClass: "bg-amber-100 text-amber-800",
    buttonClass: "bg-amber-500 hover:bg-amber-600",
    description: "Phonics, sensory textures, playful ABC Fun Days, early counting, and gentle social socialization in a safe, loving environment.",
    icon: <BookOpen className="w-4 h-4 text-amber-600" />,
  },
  {
    title: "STEM & Robotics Lab",
    grades: "Little Scientists Program",
    age: "Age: 5 – 10 Years",
    image: "/photos/stem-discovery.jpg",
    color: "blue",
    bgClass: "bg-[#F3F8FC] border-blue-200",
    badgeClass: "bg-blue-100 text-blue-800",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    description: "Practical engineering tinkers, plant biology observations, and coding logic facilitated in collaboration with HowNWhy.",
    icon: <Cpu className="w-4 h-4 text-blue-600" />,
  },
  {
    title: "Creative Arts & Stitching",
    grades: "Fine Motor Skills Studio",
    age: "All Grade Levels",
    image: "/photos/art-studio.jpg",
    color: "orange",
    bgClass: "bg-[#FFF6F2] border-orange-200",
    badgeClass: "bg-orange-100 text-orange-800",
    buttonClass: "bg-orange-500 hover:bg-orange-600",
    description: "Hands-on needle-and-thread stitching, watercolor illustration, clay pottery molding, and paper crafts developing patience and artistic voice.",
    icon: <Palette className="w-4 h-4 text-orange-600" />,
  },
  {
    title: "Movement, Karate & Yoga",
    grades: "Physical Vitality Program",
    age: "Daily Morning Track",
    image: "/photos/sports-day.jpg",
    color: "green",
    bgClass: "bg-[#F1F9F4] border-emerald-200",
    badgeClass: "bg-emerald-100 text-emerald-800",
    buttonClass: "bg-emerald-600 hover:bg-emerald-700",
    description: "Disciplined Karate kata balance, kids' stretching yoga, energetic Zumba dance, and outdoor grass lawn games in Melamcode.",
    icon: <Activity className="w-4 h-4 text-emerald-600" />,
  },
];

export default function ClassesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF8] overflow-hidden border-t border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-fredoka font-bold uppercase tracking-widest text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200 inline-block">
              OUR LEARNING PROGRAMS
            </span>
            <h2 className="font-fredoka text-3xl sm:text-5xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.2]">
              Explore Our Popular Classes & Activities.
            </h2>
            <p className="font-nunito text-base sm:text-lg text-brand-neutral-graphite">
              Every class is structured around experiential discovery, individual attention, and holistic childhood growth.
            </p>
          </div>

          <Link
            href="/learning"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-amber-200 shadow-sm text-sm font-fredoka font-bold text-brand-neutral-charcoal hover:bg-amber-50 transition-colors"
          >
            <span>View All Curriculum Details</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>

        {/* 4 Cheerful Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border ${item.bgClass} shadow-soft hover:shadow-card transition-all duration-300 p-5 flex flex-col justify-between group transform hover:-translate-y-1.5`}
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-fredoka font-bold text-brand-neutral-charcoal shadow-sm">
                    {item.icon}
                    <span>{item.age}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <span className={`text-[10px] font-fredoka font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${item.badgeClass}`}>
                    {item.grades}
                  </span>
                  <h3 className="font-fredoka font-bold text-lg text-brand-neutral-charcoal leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-nunito text-xs text-brand-neutral-graphite leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between">
                <Link
                  href="/admissions"
                  className={`w-full py-2.5 rounded-full text-white text-xs font-fredoka font-bold uppercase tracking-wider text-center shadow-sm transition-colors ${item.buttonClass}`}
                >
                  ENROL NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
