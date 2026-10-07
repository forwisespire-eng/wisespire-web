"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { footerColumns } from "@/lib/data";
import {
  LinkedinGlyph,
  XGlyph,
  InstagramGlyph,
  YoutubeGlyph,
} from "./SocialGlyphs";

const socials = [
  { icon: LinkedinGlyph, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: XGlyph, label: "X (Twitter)", href: "https://x.com" },
  { icon: InstagramGlyph, label: "Instagram", href: "https://instagram.com" },
  { icon: YoutubeGlyph, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="bg-navy px-5 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/images/wisespire-logo-light.png"
              alt="Wisespire"
              width={164}
              height={29}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/60">
              Learn. Build. Grow. Wisespire empowers learners with the
              skills, guidance, and opportunities to create a brighter
              future.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-orange hover:text-orange"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop columns */}
          <div className="hidden grid-cols-4 gap-8 sm:grid">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[14px] font-bold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring text-[14px] text-white/60 transition-colors hover:text-orange"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile accordion */}
          <div className="divide-y divide-white/10 sm:hidden">
            {footerColumns.map((col) => {
              const isOpen = openSection === col.title;
              return (
                <div key={col.title}>
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpen ? null : col.title)}
                    className="focus-ring flex w-full items-center justify-between py-4 text-left text-[15px] font-bold text-white"
                    aria-expanded={isOpen}
                  >
                    {col.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-orange" : "text-white/60"}`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="space-y-3 pb-4">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="focus-ring text-[14px] text-white/60"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-white/10 py-6 text-[13px] text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; 2026 Wisespire Business Solutions Pvt Ltd. All rights reserved.</p>
          <p className="font-medium text-white">A brighter future, for every learner.</p>
        </div>
      </div>
    </footer>
  );
}
