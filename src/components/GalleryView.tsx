"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/schoolInfo";
import { X, ChevronLeft, ChevronRight, Sparkles, Eye, Info } from "lucide-react";

const CATEGORIES = ["All", "Campus", "Learning", "Activities", "Celebrations"] as const;

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-fredoka font-bold tracking-wide transition-all duration-200 ${
                isActive
                  ? "bg-amber-400 text-amber-950 shadow-soft scale-105"
                  : "bg-white text-brand-neutral-graphite hover:bg-amber-50/50 border border-stone-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Asymmetrical Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-soft hover:shadow-card cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className={`relative w-full overflow-hidden bg-brand-neutral-ivory ${
                item.aspect === "portrait"
                  ? "aspect-[3/4]"
                  : item.aspect === "square"
                  ? "aspect-square"
                  : "aspect-[16/10]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
            </div>

            {/* Always visible label strip */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-t border-stone-100">
              <div>
                <span className="text-[10px] font-fredoka font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  {item.category}
                </span>
                <h3 className="font-fredoka font-bold text-base text-brand-neutral-charcoal mt-1.5">
                  {item.title}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main modal container */}
          <div className="max-w-4xl w-full flex flex-col items-center max-h-[85vh]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl text-white space-y-1.5 px-4">
              <span className="text-xs uppercase font-fredoka font-semibold text-amber-300">
                {currentItem.category} · {selectedImageIndex! + 1} of {filteredItems.length}
              </span>
              <h3 className="font-fredoka font-bold text-xl sm:text-2xl text-white">
                {currentItem.title}
              </h3>
              <p className="text-sm font-nunito text-white/90">
                {currentItem.caption}
              </p>
              <p className="text-[11px] font-nunito text-white/60 italic pt-1">
                {currentItem.sourceNote}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
