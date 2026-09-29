"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already visited in this session
    const visited = sessionStorage.getItem("tlcs_visited");
    if (visited) {
      setHasVisited(true);
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("tlcs_visited", "true");
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (hasVisited) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-neutral-lightest overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading Tavish Liora Central School"
        >
          {/* Subtle background ambient blur */}
          <div className="absolute w-96 h-96 rounded-full bg-brand-green-100/40 blur-3xl -top-20 -left-20 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-brand-blue-100/30 blur-3xl -bottom-20 -right-20 pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Logo container with multi-step reveal */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6">
              {/* Outer soft breathing ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.08, 1], opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-brand-green-200/50 bg-white/70 shadow-soft"
              />

              {/* Logo emblem */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-2 flex items-center justify-center"
              >
                <Image
                  src="/images/logo-mark.png"
                  alt="Tavish Liora Symbol"
                  width={100}
                  height={100}
                  priority
                  className="object-contain w-auto h-auto max-h-20"
                />
              </motion.div>
            </div>

            {/* School Name Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="space-y-1"
            >
              <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral-charcoal">
                Tavish Liora
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-brand-neutral-slate">
                Central School · Nemom
              </p>
            </motion.div>

            {/* Progress bar line */}
            <motion.div
              className="mt-6 h-1 w-36 bg-brand-neutral-border/60 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-brand-blue-500 to-brand-green-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8 }}
              className="mt-3 font-script text-brand-green-700 text-sm tracking-wide"
            >
              Growing little minds in Melamcode
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
