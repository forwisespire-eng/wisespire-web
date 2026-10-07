"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, ArrowRight, Menu } from "lucide-react";
import { motion } from "framer-motion";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProgramsOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(9,36,91,0.04)]"
          : "bg-bg-primary border-b border-transparent"
      }`}
      onMouseLeave={() => setProgramsOpen(false)}
    >
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main"
      >
        <Link href="/" className="flex items-center gap-2 focus-ring" aria-label="Wisespire home">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/wisespire-logo.png"
              alt="Wisespire"
              width={164}
              height={29}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </motion.span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            className={`focus-ring rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
              programsOpen
                ? "bg-soft-orange text-orange"
                : "text-text hover:bg-bg-soft-gray"
            }`}
            onMouseEnter={() => setProgramsOpen(true)}
            onClick={() => setProgramsOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={programsOpen}
          >
            Programs
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="focus-ring rounded-full px-4 py-2 text-[15px] font-medium text-text transition-colors hover:bg-bg-soft-gray"
              onMouseEnter={() => setProgramsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="focus-ring hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-secondary transition-colors hover:text-blue sm:flex"
          >
            <Search size={18} />
          </button>
          <Link
            href="/contact"
            className="focus-ring group hidden items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
          >
            Get Started
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <MegaMenu open={programsOpen} onClose={() => setProgramsOpen(false)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </motion.header>
  );
}
