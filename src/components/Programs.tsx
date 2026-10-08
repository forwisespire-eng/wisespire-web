"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-bg-soft-gray px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-orange"
            >
              — EXPLORE PROGRAMS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-navy sm:text-[40px]"
            >
              Skill paths designed for{" "}
              <span className="text-blue">your future</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-[16px] leading-relaxed text-text-secondary"
            >
              Choose from industry-aligned programs, hands-on projects, and
              expert guidance to build the skills that matter.
            </motion.p>
          </div>
          <Link
            href="/programs"
            className="focus-ring group inline-flex w-fit items-center gap-2 rounded-full bg-blue px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            View All Programs
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <ProgramCard key={program.slug} slug={program.slug} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
