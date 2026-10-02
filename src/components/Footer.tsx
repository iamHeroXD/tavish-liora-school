import Link from "next/link";
import Image from "next/image";
import { schoolContact } from "@/data/schoolInfo";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Heart } from "lucide-react";
import { FacebookIcon, YoutubeIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-green-950 text-white/90 overflow-hidden pt-16 pb-12">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green-400/40 to-transparent" />
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-brand-green-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Warm Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white/10 rounded-2xl p-1.5 backdrop-blur-sm border border-white/15">
                <Image
                  src="/images/logo-white.png"
                  alt="Tavish Liora Central School Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h2 className="font-fredoka font-bold text-2xl text-white tracking-wide">
                  Tavish Liora
                </h2>
                <p className="text-xs uppercase font-fredoka tracking-widest text-amber-300 font-bold">
                  Central School · Melamcode, Nemom
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-green-100/80 leading-relaxed max-w-md">
              A nurturing children’s school in Nemom, Thiruvananthapuram, dedicated to early childhood discovery, creative thinking, hands-on STEM exploration, and joyful holistic growth since 2019.
            </p>

            {/* Social Channels (Real & Verified) */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-green-300/80 mb-3">
                Official School Community
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={schoolContact.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tavish Liora Central School on Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={schoolContact.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tavish Liora Central School on YouTube"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>

                <a
                  href={schoolContact.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Search Tavish Liora Central School on Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-white/70 hover:text-white transition-colors">
                  Learning & STEM
                </Link>
              </li>
              <li>
                <Link href="/school-life" className="text-white/70 hover:text-white transition-colors">
                  Life at Tavish Liora
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-white transition-colors">
                  Events & Moments
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Inquiries (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
              Admissions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/admissions" className="text-white/70 hover:text-white transition-colors">
                  Enrolment Steps
                </Link>
              </li>
              <li>
                <Link href="/admissions#enquiry-form" className="text-white/70 hover:text-white transition-colors">
                  Online Enquiry Form
                </Link>
              </li>
              <li>
                <Link href="/contact#campus-tour" className="text-white/70 hover:text-white transition-colors">
                  Book Campus Walkthrough
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
              Campus & Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-brand-green-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green-400 flex-shrink-0 mt-0.5" />
                <span>
                  {schoolContact.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {schoolContact.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green-400 flex-shrink-0" />
                <a
                  href={`mailto:${schoolContact.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {schoolContact.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>
                  {schoolContact.contact.officeDays} · {schoolContact.contact.hours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green-300 hover:text-white transition-colors group"
              >
                <span>Interactive Map & Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-green-200/60">
          <p>
            © {currentYear} Tavish Liora Central School. All rights reserved. Melamcode, Nemom, Thiruvananthapuram.
          </p>
          <div className="flex items-center gap-1 text-brand-green-300/80">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
            <span>for growing little minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
