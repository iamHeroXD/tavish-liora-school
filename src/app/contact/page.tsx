import type { Metadata } from "next";
import { schoolContact } from "@/data/schoolInfo";
import { MapPin, Phone, Mail, Clock, Navigation, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FacebookIcon, YoutubeIcon, InstagramIcon } from "@/components/SocialIcons";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact & Campus Location | Tavish Liora Central School",
  description:
    "Contact Tavish Liora Central School in Melamcode, Nemom, Thiruvananthapuram, Kerala 695020. Phone: +91 94976 92852. View interactive map and directions.",
};

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Tavish Liora Central School Melamcode Nemom Thiruvananthapuram Kerala 695020"
  )}`;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-brand-neutral-ivory/60 border-b border-brand-neutral-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-900 text-xs font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-brand-green-600" />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-neutral-charcoal tracking-tight leading-[1.1]">
              Come visit our campus in Melamcode.
            </h1>
            <p className="text-brand-neutral-graphite text-base sm:text-xl leading-relaxed">
              We look forward to meeting your family. Reach out via phone, email, or schedule an informal morning tour of our classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 sm:py-28 bg-brand-neutral-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-soft space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-green-700 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-brand-green-600" />
                  <span>Campus Address</span>
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-brand-neutral-charcoal">
                    Tavish Liora Central School
                  </h2>
                  <p className="text-base text-brand-neutral-graphite mt-2 leading-relaxed">
                    {schoolContact.location.fullAddress}
                  </p>
                  <p className="text-xs text-brand-neutral-slate mt-1">
                    Landmark: {schoolContact.location.landmarks}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green-600 hover:bg-brand-green-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-brand-neutral-border shadow-soft space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-semibold text-brand-blue-700 tracking-wider block">
                    Phone Inquiries
                  </span>
                  <a
                    href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                    className="font-display font-bold text-2xl text-brand-neutral-charcoal hover:text-brand-green-700 transition-colors block"
                  >
                    {schoolContact.contact.phone}
                  </a>
                  <p className="text-xs text-brand-neutral-slate">
                    Mon–Sat: {schoolContact.contact.hours}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-neutral-border/60 space-y-1">
                  <span className="text-xs uppercase font-semibold text-brand-green-700 tracking-wider block">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${schoolContact.contact.email}`}
                    className="text-base font-semibold text-brand-neutral-charcoal hover:text-brand-green-700 transition-colors break-all block"
                  >
                    {schoolContact.contact.email}
                  </a>
                </div>

                <div className="pt-4 border-t border-brand-neutral-border/60 space-y-2">
                  <span className="text-xs uppercase font-semibold text-brand-neutral-slate tracking-wider block">
                    Connect on Social Platforms
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={schoolContact.social.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-brand-neutral-ivory hover:bg-brand-green-100 text-brand-neutral-charcoal hover:text-brand-green-800 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={schoolContact.social.youtube.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-brand-neutral-ivory hover:bg-brand-green-100 text-brand-neutral-charcoal hover:text-brand-green-800 transition-colors"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={schoolContact.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-brand-neutral-ivory hover:bg-brand-green-100 text-brand-neutral-charcoal hover:text-brand-green-800 transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Tour Booking Form (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Google Maps Embed */}
              <div className="w-full aspect-[16/10] min-h-[360px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card relative bg-brand-neutral-ivory">
                <iframe
                  title="Tavish Liora Central School Map"
                  src={schoolContact.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Message Form */}
              <div id="campus-tour">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
