"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Outcomes() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[32px] border border-border bg-white px-6 py-14 sm:px-12">
        <div className="relative">
          <div className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full bg-light-blue" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-soft-orange" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-xl text-[30px] font-extrabold leading-tight tracking-tight text-navy sm:text-[38px]"
          >
            Turning potential into{" "}
            <span className="text-blue">real opportunities.</span>
          </motion.h2>

          <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p
                  className={`text-[48px] font-extrabold leading-none sm:text-[56px] ${
                    i % 2 === 0 ? "text-orange" : "text-blue"
                  }`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-[15px] text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
