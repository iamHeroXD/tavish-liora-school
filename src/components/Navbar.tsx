"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { schoolContact } from "@/data/schoolInfo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Learning", href: "/learning" },
  { name: "School Life", href: "/school-life" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-full border ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-brand-neutral-border shadow-soft py-2 px-4 sm:px-6"
            : "bg-white/80 backdrop-blur-sm border-white/60 shadow-sm py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 rounded-full pr-2"
            aria-label="Tavish Liora Central School Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/logo-mark.png"
                alt="Tavish Liora Central School Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-brand-neutral-charcoal leading-tight group-hover:text-brand-green-700 transition-colors">
                Tavish Liora
              </span>
              <span className="text-[10px] uppercase tracking-wider text-brand-neutral-slate font-medium hidden sm:inline-block">
                Central School · Nemom
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 ${
                    isActive
                      ? "text-brand-green-800 font-semibold"
                      : "text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-black/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-green-100/70 border border-brand-green-200 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Enquire CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/admissions"
              className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-green-600 to-brand-green-500 hover:from-brand-green-700 hover:to-brand-green-600 shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-600 focus-visible:ring-offset-2"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-brand-neutral-graphite hover:text-brand-neutral-charcoal hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
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
            className="lg:hidden fixed inset-x-3 top-20 bg-brand-neutral-lightest border border-brand-neutral-border shadow-float rounded-3xl p-6 z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="pb-3 border-b border-brand-neutral-border/60 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-lg text-brand-neutral-charcoal">
                    Tavish Liora Central School
                  </p>
                  <p className="text-xs text-brand-green-700 font-medium">
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
                      className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-brand-green-100 text-brand-green-900 font-semibold"
                          : "text-brand-neutral-charcoal hover:bg-brand-neutral-ivory"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-brand-green-600" />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 mt-2 border-t border-brand-neutral-border/60 space-y-2.5">
                <Link
                  href="/admissions"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand-green-600 text-white font-semibold text-sm hover:bg-brand-green-700 transition-colors shadow-soft"
                >
                  <span>Start Admissions Journey</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border border-brand-neutral-border bg-white text-brand-neutral-charcoal text-xs font-medium hover:bg-brand-neutral-ivory transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue-500" />
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
