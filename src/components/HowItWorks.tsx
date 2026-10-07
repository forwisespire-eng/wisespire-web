"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, Hammer, TrendingUp } from "lucide-react";
import { steps } from "@/lib/data";

const icons = [Search, BookOpen, Hammer, TrendingUp];

export default function HowItWorks() {
  return (
    <section className="bg-bg-soft-gray px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-orange"
          >
            — HOW IT WORKS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-[30px] font-extrabold tracking-tight text-navy sm:text-[38px]"
          >
            A simple path to a brighter future.
          </motion.h2>
        </div>

        {/* Desktop: circular badges on a wavy dotted connector.
            Path x-coordinates (12.5/37.5/62.5/87.5) are percentages that match the
            4-column grid's exact column centers, so the curve always hits each
            badge dead-center regardless of container width. */}
        <div className="relative mt-20 hidden lg:block">
          <svg
            className="absolute left-0 top-0 h-[72px] w-full"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 12.5 20 C 21 4, 29 4, 37.5 20 C 46 36, 54 36, 62.5 20 C 71 4, 79 4, 87.5 20"
              fill="none"
              stroke="#075FEF"
              strokeOpacity="0.4"
              strokeWidth="2.2"
              strokeDasharray="0.5 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = icons[i];
              const isOrange = step.accent === "orange";
              return (
                <motion.div
                  key={step.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    className={`relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full text-white ring-8 ring-bg-soft-gray ${
                      isOrange ? "bg-orange" : "bg-blue"
                    }`}
                  >
                    <Icon size={26} />
                  </span>
                  <p className="mt-5 text-xs font-bold tracking-widest text-text-secondary">
                    {step.index}
                  </p>
                  <h3 className="mt-1 text-[18px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-[14px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="relative mt-14 space-y-8 lg:hidden">
          <div
            className="absolute left-[27px] top-2 h-[calc(100%-16px)] w-[2px] border-l-2 border-dashed border-blue/30"
            aria-hidden="true"
          />
          {steps.map((step, i) => {
            const Icon = icons[i];
            const isOrange = step.accent === "orange";
            return (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="relative flex items-start gap-5"
              >
                <span
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white ring-8 ring-bg-soft-gray ${
                    isOrange ? "bg-orange" : "bg-blue"
                  }`}
                >
                  <Icon size={22} />
                </span>
                <div className="pt-2">
                  <p className="text-xs font-bold tracking-widest text-text-secondary">
                    {step.index}
                  </p>
                  <h3 className="mt-1 text-[17px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
