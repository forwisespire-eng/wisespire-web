"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clientSegments } from "@/lib/data";

export default function WeWorkWith() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + clientSegments.length) % clientSegments.length);
  };

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-orange"
            >
              — WHO WE SERVE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-[30px] font-extrabold tracking-tight text-navy sm:text-[38px]"
            >
              We work with a spectrum of partners.
            </motion.h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-bg-soft-gray"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-bg-soft-gray"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden grid-cols-3 gap-5 sm:grid">
          {clientSegments.map((segment, i) => (
            <SegmentCard key={segment.title} segment={segment} accentAlt={i % 2 === 1} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="relative mt-10 overflow-hidden sm:hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <SegmentCard segment={clientSegments[index]} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {clientSegments.map((segment, i) => (
                <span
                  key={segment.title}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-5 bg-orange" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SegmentCard({
  segment,
  accentAlt = false,
}: {
  segment: (typeof clientSegments)[number];
  accentAlt?: boolean;
}) {
  const Icon = segment.icon;
  return (
    <div className="flex h-full flex-col rounded-[22px] border border-border bg-white p-6 shadow-[0_2px_10px_-4px_rgba(9,36,91,0.08)]">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
          accentAlt ? "bg-light-blue text-blue" : "bg-soft-orange text-orange"
        }`}
      >
        <Icon size={22} />
      </span>
      <h3 className="mt-5 text-[18px] font-bold text-navy">{segment.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-text-secondary">
        {segment.description}
      </p>
    </div>
  );
}
