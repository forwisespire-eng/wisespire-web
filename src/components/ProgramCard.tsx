"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramCard({
  slug,
  index = 0,
}: {
  slug: string;
  index?: number;
}) {
  const program = programs.find((p) => p.slug === slug);
  if (!program) return null;
  const Icon = program.icon;
  const isOrange = program.accent === "orange";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/programs/${program.slug}`}
        className="focus-ring group block h-full rounded-[22px] border border-border bg-white p-6 shadow-[0_2px_10px_-4px_rgba(9,36,91,0.08)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(9,36,91,0.22)]"
      >
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-250 group-hover:scale-110 group-hover:rotate-6 ${
            isOrange ? "bg-soft-orange text-orange" : "bg-light-blue text-blue"
          }`}
        >
          <Icon size={22} />
        </span>
        <h3 className="mt-5 text-[18px] font-bold text-navy">{program.name}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
          {program.tagline}
        </p>
        <span
          className={`mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-250 ${
            isOrange
              ? "bg-soft-orange text-orange group-hover:bg-orange group-hover:text-white"
              : "bg-light-blue text-blue group-hover:bg-blue group-hover:text-white"
          }`}
        >
          <ArrowRight
            size={16}
            className="transition-transform duration-250 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </motion.div>
  );
}
