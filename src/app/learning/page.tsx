import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { learningPillars } from "@/data/schoolInfo";
import { Sparkles, CheckCircle2, ArrowRight, BookOpen, Cpu, Shapes, Palette, Activity, Mic, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning & Curriculum | Tavish Liora Central School",
  description:
    "Explore our holistic early childhood and primary learning programs, STEM & Robotics collaboration with HowNWhy, Math Fun Mania, and arts at Tavish Liora Central School.",
};

const ICONS: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Shapes: <Shapes className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
};

const AGE_LEVELS = [
  {
    stage: "Foundational Early Years",
    grades: "Pre-KG, LKG & UKG",
    age: "Ages 2.5 – 5.5 Years",
    status: "verified" as const,
    focus: "Phonics, sensory textures, ABC Fun Days, songs, rhythm, and gentle social socialization in safe child-friendly spaces.",
  },
  {
    stage: "Primary Discovery Years",
    grades: "Grades 1 – 5",
    age: "Ages 6 – 10 Years",
    status: "verified" as const,
    focus: "Integrated language arts, experiential mathematics (Math Fun Mania), Little Scientists experiments, environmental awareness, and basic coding intuition.",
  },
  {
    stage: "Middle & Upper School Pathway",
    grades: "Future Expansion Track",
    age: "Ages 11+ Years",
    status: "cms_placeholder" as const,
    focus: "CMS-ready academic structure prepared for phased curriculum expansion. (Contact admissions desk for current class availability).",
  },
];

export default function LearningPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-emerald-200">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>LEARNING EXPERIENCES</span>
            </div>
            <h1 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.15]">
              Where concepts come alive through <span className="text-amber-500">touch</span> & <span className="text-emerald-600">inquiry</span>.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl font-nunito leading-relaxed">
              At Tavish Liora, children don&apos;t just read about botany—they plant seedlings. They don&apos;t just memorize formulas—they play with geometric balances and code robotic prototypes.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Pillars Deep Dive */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-fredoka font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Core Experiential Pillars
            </span>
            <h2 className="font-fredoka text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
              Hands-on learning programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPillars.map((pillar, idx) => {
              const pillarPalettes = [
                { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
                { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
                { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
                { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
                { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
                { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
              ];
              const pal = pillarPalettes[idx % pillarPalettes.length];

              return (
                <div
                  key={pillar.id}
                  className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft flex flex-col justify-between space-y-6 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${pal.bg} ${pal.text} flex items-center justify-center border ${pal.border} group-hover:scale-110 transition-transform`}>
                        {ICONS[pillar.iconName]}
                      </div>
                      <span className={`text-[10px] uppercase font-fredoka font-bold ${pal.text} ${pal.bg} px-3 py-1 rounded-full border ${pal.border}`}>
                        Verified
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-fredoka font-semibold text-amber-600 block">
                        {pillar.theme}
                      </span>
                      <h3 className="font-fredoka font-bold text-xl text-brand-neutral-charcoal mt-1">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                      {pillar.fullDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 text-xs text-brand-neutral-slate font-nunito flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{pillar.verifiedSource}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Age Groups & Levels */}
      <section className="py-20 sm:py-28 bg-brand-neutral-ivory/50 border-t border-brand-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-fredoka font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Classes & Age Groups
            </span>
            <h2 className="font-fredoka text-3xl sm:text-4xl font-bold text-brand-neutral-charcoal">
              Education tailored to developmental stages
            </h2>
            <p className="text-sm sm:text-base text-brand-neutral-slate font-nunito">
              Clearly distinguishing confirmed early childhood and primary classes from our structured CMS expansion roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AGE_LEVELS.map((level) => (
              <div
                key={level.stage}
                className="p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-fredoka font-bold text-emerald-700 uppercase tracking-wider">
                      {level.age}
                    </span>
                    {level.status === "verified" ? (
                      <span className="text-[10px] font-fredoka font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Active Enrolment
                      </span>
                    ) : (
                      <span className="text-[10px] font-fredoka font-semibold bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full">
                        Roadmap Stage
                      </span>
                    )}
                  </div>
                  <h3 className="font-fredoka font-bold text-xl text-brand-neutral-charcoal">
                    {level.stage}
                  </h3>
                  <p className="text-xs font-fredoka font-semibold text-amber-600">
                    {level.grades}
                  </p>
                  <p className="text-sm text-brand-neutral-graphite font-nunito pt-2 leading-relaxed">
                    {level.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-fredoka font-bold text-emerald-700 hover:text-emerald-900 group"
                  >
                    <span>Enquire for this cohort</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
