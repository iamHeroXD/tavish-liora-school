"use client";

import { schoolContact } from "@/data/schoolInfo";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, CheckCircle2 } from "lucide-react";

export default function ContactMapSection() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Tavish Liora Central School Melamcode Nemom Thiruvananthapuram Kerala 695020"
  )}`;

  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-brand-neutral-lightest overflow-hidden border-t border-brand-neutral-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-fredoka font-semibold tracking-wider uppercase border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>VISIT OUR CAMPUS</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-neutral-charcoal tracking-tight">
            Come say <span className="text-amber-500">hello</span> to our team.
          </h2>
          <p className="text-brand-neutral-slate text-base sm:text-lg font-nunito leading-relaxed">
            We love welcoming parents and children to walk our garden pathways and experience the calm, joyful energy of our school in person.
          </p>
        </div>

        {/* 2-Column Grid: Verified Contact Cards & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft space-y-2">
                <div className="flex items-center gap-2 text-xs font-fredoka font-bold text-emerald-700 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Campus Location</span>
                </div>
                <h3 className="font-fredoka font-bold text-lg text-brand-neutral-charcoal">
                  Tavish Liora Central School
                </h3>
                <p className="text-sm text-brand-neutral-graphite font-nunito leading-relaxed">
                  {schoolContact.location.fullAddress}
                </p>
                <div className="pt-2">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-fredoka font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-[2rem] bg-white border border-stone-200/80 shadow-soft flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-fredoka font-bold text-sky-700 uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-sky-600" />
                    <span>Admissions Helpline</span>
                  </div>
                  <p className="font-fredoka font-bold text-xl text-brand-neutral-charcoal">
                    {schoolContact.contact.phone}
                  </p>
                  <p className="text-xs text-brand-neutral-slate font-nunito">
                    Office open: {schoolContact.contact.officeDays} ({schoolContact.contact.hours})
                  </p>
                </div>
                <a
                  href={`tel:${schoolContact.contact.phone.replace(/\s+/g, "")}`}
                  className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-amber-950 text-xs font-fredoka font-bold shadow-sm transition-colors flex-shrink-0"
                >
                  Call Now
                </a>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-white border border-brand-neutral-border shadow-soft space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-green-700 uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-brand-green-600" />
                  <span>Email Correspondence</span>
                </div>
                <p className="text-sm font-medium text-brand-neutral-charcoal break-all">
                  {schoolContact.contact.email}
                </p>
                <p className="text-xs text-brand-neutral-slate">
                  We typically reply within one working day.
                </p>
              </div>
            </div>

            {/* Verified Information Banner */}
            <div className="p-4 rounded-2xl bg-brand-green-50 border border-brand-green-200 text-xs text-brand-green-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
              <span>
                Verified official school campus located in Melamcode, Nemom P.O., Thiruvananthapuram PIN 695020.
              </span>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[420px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-card relative bg-brand-neutral-ivory">
              <iframe
                title="Tavish Liora Central School Location Map"
                src={schoolContact.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-neutral-border shadow-soft max-w-xs pointer-events-none">
                <p className="font-display font-bold text-sm text-brand-neutral-charcoal">
                  Tavish Liora Central School
                </p>
                <p className="text-xs text-brand-neutral-slate mt-0.5">
                  Melamcode, Nemom, Thiruvananthapuram 695020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
