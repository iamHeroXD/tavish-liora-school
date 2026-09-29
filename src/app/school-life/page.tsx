import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Trophy, Flower2, Heart, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "School Life | Tavish Liora Central School",
  description:
    "Discover daily student life at Tavish Liora Central School: annual sports meets, eco-farm field trips, karate, yoga, stitching crafts, and investiture ceremonies.",
};

const LIFE_ASPECTS = [
  {
    title: "Annual Sports Meet & Athletic Joy",
    category: "Sports & Vitality",
    image: "/photos/sports-day.jpg",
    description:
      "A high-energy annual tradition where children participate in sprint relays, obstacle courses, and cooperative games under the shade of Melamcode trees.",
    icon: <Trophy className="w-5 h-5 text-amber-600" />,
  },
  {
    title: "Eco-Farm & Nature Field Trips",
    category: "Outdoor Ecology",
    image: "/photos/farm-trip.jpg",
    description:
      "Hands-on agricultural excursions giving children direct contact with sunflower fields, soil micro-organisms, and the journey of organic food from seed to table.",
    icon: <Flower2 className="w-5 h-5 text-brand-green-600" />,
  },
  {
    title: "Tactile Crafts & Textile Stitching",
    category: "Creativity & Fine Motor",
    image: "/photos/art-studio.jpg",
    description:
      "Patience and motor coordination nurtured through watercolor illustration, paper folding, clay molding, and foundational needle-and-thread handcrafts.",
    icon: <Sparkles className="w-5 h-5 text-rose-500" />,
  },
  {
    title: "Investiture Ceremony & Leadership",
    category: "Values & Empathy",
    image: "/photos/campus-courtyard.jpg",
    description:
      "Instilling democratic empathy, peer responsibility, and dignity through school house appointments, student prefects, and community service.",
    icon: <Award className="w-5 h-5 text-brand-blue-600" />,
  },
];

export default function SchoolLifePage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 text-brand-green-600" />
              <span>LIFE AT TAVISH LIORA</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.1]">
              Every school day is a story waiting to be told.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl leading-relaxed">
              Beyond books and blackboards, school life here is rich with physical movement, artistic freedom, outdoor discovery, and warm lifelong friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Key School Experiences */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {LIFE_ASPECTS.map((aspect) => (
              <div
                key={aspect.title}
                className="rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-soft overflow-hidden flex flex-col justify-between group hover:shadow-card transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-neutral-ivory">
                  <Image
                    src={aspect.image}
                    alt={aspect.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-brand-neutral-charcoal shadow-sm">
                    {aspect.icon}
                    <span>{aspect.category}</span>
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="font-display font-bold text-2xl text-brand-neutral-charcoal group-hover:text-brand-green-700 transition-colors">
                    {aspect.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-neutral-graphite leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-[2.5rem] bg-gradient-to-r from-brand-green-700 to-brand-green-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Experience the atmosphere in person.
              </h2>
              <p className="text-brand-green-100 text-sm sm:text-base max-w-xl">
                We invite prospective parents to tour our classrooms and playgrounds in Melamcode, Nemom during a morning school session.
              </p>
            </div>
            <Link
              href="/admissions"
              className="px-8 py-4 rounded-full bg-white text-brand-green-900 font-semibold text-sm hover:bg-brand-neutral-ivory shadow-soft transition-colors flex-shrink-0"
            >
              Book Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
