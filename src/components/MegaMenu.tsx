"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { programs } from "@/lib/data";

export default function MegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState(programs[0].slug);
  const activeProgram = programs.find((p) => p.slug === active) ?? programs[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-x-0 top-full z-40 hidden lg:block"
          onMouseEnter={() => {}}
        >
          <div className="mx-auto max-w-[1100px] px-8 pt-3">
            <div className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_24px_60px_-20px_rgba(9,36,91,0.25)]">
              <div className="grid grid-cols-[320px_1fr]">
                <div className="border-r border-border p-6">
                  <p className="px-3 pb-3 text-xs font-semibold tracking-widest text-text-secondary">
                    OUR PROGRAMS
                  </p>
                  <ul role="list">
                    {programs.map((program) => {
                      const Icon = program.icon;
                      const isActive = program.slug === active;
                      return (
                        <li key={program.slug}>
                          <button
                            type="button"
                            onMouseEnter={() => setActive(program.slug)}
                            onFocus={() => setActive(program.slug)}
                            onClick={() => setActive(program.slug)}
                            className={`focus-ring group flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-3 text-left transition-colors ${
                              isActive
                                ? "bg-soft-orange"
                                : "hover:bg-bg-soft-gray"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                                  isActive
                                    ? "bg-orange text-white"
                                    : "bg-bg-soft-gray text-navy"
                                }`}
                              >
                                <Icon size={18} />
                              </span>
                              <span
                                className={`text-[15px] font-semibold ${
                                  isActive ? "text-orange" : "text-navy"
                                }`}
                              >
                                {program.name}
                              </span>
                            </span>
                            <ArrowRight
                              size={16}
                              className={`transition-transform duration-200 ${
                                isActive
                                  ? "translate-x-0.5 text-orange"
                                  : "text-text-secondary group-hover:translate-x-0.5"
                              }`}
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="relative overflow-hidden p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProgram.slug}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -14 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="grid grid-cols-[1fr_200px] gap-6"
                    >
                      <div>
                        <span className="inline-block rounded-full bg-light-blue px-3 py-1 text-xs font-semibold tracking-wide text-blue">
                          FEATURED
                        </span>
                        <h3 className="mt-3 text-2xl font-bold text-navy">
                          {activeProgram.name}
                        </h3>
                        <p className="mt-2 text-[15px] text-text-secondary">
                          {activeProgram.tagline}
                        </p>
                        <ul className="mt-4 space-y-2.5">
                          {activeProgram.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-[14px] text-text"
                            >
                              <Check size={16} className="shrink-0 text-orange" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/programs/${activeProgram.slug}`}
                          onClick={onClose}
                          className="focus-ring group mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
                        >
                          Explore Program
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>

                      <div className="relative flex items-start justify-center pt-2">
                        <div className="absolute -right-4 top-4 h-28 w-28 rounded-full bg-light-blue" />
                        <div className="absolute -left-2 bottom-0 h-14 w-14 rounded-full bg-soft-orange" />
                        <div className="relative h-40 w-36 overflow-hidden rounded-[22px] border-4 border-white shadow-lg">
                          <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                            alt="Student exploring a program"
                            fill
                            sizes="150px"
                            className="object-cover"
                          />
                        </div>
                        <span className="absolute -right-1 bottom-4 h-2.5 w-2.5 rounded-full bg-orange" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
