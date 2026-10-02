"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "LEARNING", href: "/learning" },
  { name: "SCHOOL LIFE", href: "/school-life" },
  { name: "GALLERY", href: "/gallery" },
  { name: "EVENTS", href: "/events" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-full border ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-amber-200/60 shadow-md py-2 px-4 sm:px-6"
            : "bg-white/90 backdrop-blur-sm border-amber-100/60 shadow-sm py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 rounded-full pr-2"
            aria-label="Tavish Liora Central School Home"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/logo-mark.png"
                alt="Tavish Liora Central School Logo"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-fredoka font-bold text-lg sm:text-xl tracking-wide text-brand-neutral-charcoal leading-tight group-hover:text-brand-green-700 transition-colors">
                <span className="text-brand-blue-500">Tavish</span> <span className="text-brand-green-600">Liora</span>
              </span>
              <span className="text-[10px] font-fredoka uppercase tracking-widest text-amber-600 font-semibold hidden sm:inline-block">
                Central School · Nemom
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Reference Style: Clean, Uppercase with Sunny Pill Active State) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-fredoka font-bold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? "text-brand-neutral-charcoal bg-amber-200/90 shadow-sm"
                      : "text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-amber-50/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-amber-200/90 rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: ADMISSION NOW Button + Phone Callout */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold font-fredoka text-brand-green-800 bg-brand-green-50 hover:bg-brand-green-100 px-3 py-2 rounded-full border border-brand-green-200 transition-colors"
              title="Call School"
            >
              <Phone className="w-3.5 h-3.5 text-brand-green-600" />
              <span>{schoolContact.contact.phone}</span>
            </a>

            <Link
              href="/admissions"
              className="relative inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-fredoka font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-600 hover:to-orange-600 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>ADMISSION NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-3 top-20 bg-white/95 backdrop-blur-xl border border-amber-200 shadow-xl rounded-3xl p-6 z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="pb-3 border-b border-amber-100 flex items-center justify-between">
                <div>
                  <p className="font-fredoka font-bold text-lg text-brand-neutral-charcoal">
                    Tavish Liora Central School
                  </p>
                  <p className="text-xs text-amber-700 font-medium">
                    Melamcode, Nemom · Est. 2019
                  </p>
                </div>
                <div className="w-8 h-8 relative">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Logo Mark"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1.5 pt-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-base font-fredoka font-bold tracking-wide transition-colors ${
                        isActive
                          ? "bg-amber-200 text-brand-neutral-charcoal font-bold"
                          : "text-brand-neutral-charcoal hover:bg-amber-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-amber-600" />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 mt-2 border-t border-amber-100 space-y-2.5">
                <Link
                  href="/admissions"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-fredoka font-bold text-sm tracking-wider uppercase transition-colors shadow-md"
                >
                  <span>ADMISSION NOW</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border border-brand-green-200 bg-brand-green-50 text-brand-green-900 text-xs font-bold font-fredoka hover:bg-brand-green-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-green-600" />
                  <span>Call: {schoolContact.contact.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
