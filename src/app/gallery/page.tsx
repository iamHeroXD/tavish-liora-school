import type { Metadata } from "next";
import GalleryView from "@/components/GalleryView";
import { Sparkles, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "School Photo Gallery | Tavish Liora Central School",
  description:
    "Immerse yourself in moments from Tavish Liora Central School: campus greenery, science discoveries, sports meets, and hands-on artistic creations.",
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-emerald-200">
              <Camera className="w-3.5 h-3.5 text-emerald-600" />
              <span>VISUAL MOMENTS</span>
            </div>
            <h1 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.15]">
              Snapshots from our world of <span className="text-amber-500">learning</span>.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl font-nunito leading-relaxed">
              Explore the daily life, open-air celebrations, scientific investigations, and creative studios of Tavish Liora Central School in Melamcode.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Gallery View */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryView />
        </div>
      </section>
    </div>
  );
}
