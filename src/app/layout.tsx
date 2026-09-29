import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { schoolContact } from "@/data/schoolInfo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2E9B50",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Tavish Liora Central School | Melamcode, Nemom, Thiruvananthapuram",
    template: "%s | Tavish Liora Central School",
  },
  description:
    "Official website for Tavish Liora Central School in Melamcode, Nemom, Thiruvananthapuram, Kerala 695020. Fostering holistic growth, curiosity, STEM, and creative early learning.",
  keywords: [
    "Tavish Liora Central School",
    "Tavish Liora Nemom",
    "Tavish Liora Melamcode",
    "schools in Nemom",
    "best school in Nemom Thiruvananthapuram",
    "early childhood education Trivandrum",
    "Tavish Liora Central School Kerala 695020",
  ],
  authors: [{ name: "Tavish Liora Central School" }],
  creator: "Tavish Liora Central School",
  metadataBase: new URL("https://tavishliora.org"),
  openGraph: {
    title: "Tavish Liora Central School | Nemom, Thiruvananthapuram",
    description:
      "A warm, creative children's school in Melamcode, Nemom, Thiruvananthapuram. Established 2019. Where little minds grow into big possibilities.",
    url: "https://tavishliora.org",
    siteName: "Tavish Liora Central School",
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 600,
        alt: "Tavish Liora Central School Emblem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/favicon-256.png",
    apple: "/images/favicon-256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": schoolContact.name,
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Melamcode Road, Nemom",
      "addressLocality": "Nemom, Thiruvananthapuram",
      "addressRegion": "Kerala",
      "postalCode": "695020",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": schoolContact.location.coordinates.lat,
      "longitude": schoolContact.location.coordinates.lng
    },
    "telephone": schoolContact.contact.phone,
    "email": schoolContact.contact.email,
    "url": "https://tavishliora.org",
    "logo": "https://tavishliora.org/images/logo.png"
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-brand-neutral-charcoal bg-brand-neutral-lightest selection:bg-brand-green-100 selection:text-brand-green-900 min-h-screen flex flex-col relative overflow-x-hidden">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
