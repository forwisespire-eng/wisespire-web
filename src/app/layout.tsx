import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.wisespire.in";
const title = "Wisespire — Learn. Build. Grow.";
const description =
  "Wisespire is an EdTech platform that helps you gain in-demand skills, learn from industry experts, and take confident steps toward your future. Programs in LMS, Skill Development, Virtual Labs, Web Development, Cloud Computing, and Data Science & AI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s",
  },
  description,
  keywords: [
    "Wisespire",
    "EdTech",
    "online learning",
    "skill development",
    "LMS",
    "virtual labs",
    "learning management system",
    "web development course",
    "cloud computing course",
    "data science course India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Wisespire",
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wisespire Business Solutions Pvt Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/images/wisespire-logo.png`,
  email: "info@wisespire.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.1 & 1A Sy No.96, Amruthahalli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560092",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-primary text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
