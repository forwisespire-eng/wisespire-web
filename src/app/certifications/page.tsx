import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications — Wisespire",
  description:
    "Wisespire Business Solutions is certified across quality, security, and process maturity standards — ISO 9001:2015, ISO 27001:2022, CMMI Level 3, MSME, and Startup India.",
  alternates: { canonical: "/certifications" },
};

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System",
    logo: "/images/certifications/iso-9001.png",
  },
  {
    title: "ISO 27001:2022",
    description: "Information Security Management Systems",
    logo: "/images/certifications/iso-27001.png",
  },
  {
    title: "CMMI Level 3 Compliance",
    description: "Defined — processes characterized for the organization and proactive.",
    logo: "/images/certifications/cmmi-level3.png",
  },
  {
    title: "MSME",
    description: "Micro, Small and Medium Enterprises",
    logo: "/images/certifications/msme.png",
  },
  {
    title: "Startup Certification",
    description: "Startup India",
    logo: "/images/certifications/startup-india.jpeg",
  },
];

export default function CertificatePage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="text-center text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
          Our <span className="text-blue">Certifications</span>
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-[15px] text-text-secondary">
          Wisespire Business Solutions is certified and recognized across
          quality, security, and process maturity standards.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-center gap-4 rounded-[22px] border border-border bg-white p-6"
            >
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src={cert.logo}
                  alt={`${cert.title} certification badge`}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </span>
              <div>
                <p className="flex items-center gap-1.5 text-[15px] font-bold text-navy">
                  <CheckCircle2 size={14} className="shrink-0 text-orange" />
                  {cert.title}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
