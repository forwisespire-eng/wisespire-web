"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { programs, navLinks } from "@/lib/data";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const itemVariants = {
    hidden: { opacity: 0, x: 16 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.08 + i * 0.05, duration: 0.3, ease: "easeOut" as const },
    }),
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-bg-primary lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <Image
              src="/images/wisespire-logo.png"
              alt="Wisespire"
              width={150}
              height={27}
              className="h-7 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 py-4">
            <motion.div custom={0} variants={itemVariants} initial="hidden" animate="show">
              <button
                type="button"
                onClick={() => setProgramsOpen((v) => !v)}
                className="focus-ring flex w-full items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-navy"
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${
                    programsOpen ? "rotate-180 text-orange" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {programsOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden pl-4"
                  >
                    {programs.map((program) => (
                      <li key={program.slug}>
                        <Link
                          href={`/programs/${program.slug}`}
                          onClick={onClose}
                          className="focus-ring flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-text-secondary hover:bg-bg-soft-gray hover:text-navy"
                        >
                          <program.icon size={17} className="text-orange" />
                          {program.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.div key={link.label} custom={i + 1} variants={itemVariants} initial="hidden" animate="show">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="focus-ring flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-navy hover:bg-bg-soft-gray"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              custom={navLinks.length + 1}
              variants={itemVariants}
              initial="hidden"
              animate="show"
              className="mt-4"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="focus-ring flex items-center justify-center gap-2 rounded-full bg-blue px-5 py-3.5 text-[16px] font-semibold text-white"
              >
                Get Started
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
