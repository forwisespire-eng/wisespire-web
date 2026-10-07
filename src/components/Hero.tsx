"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Layers, Rocket } from "lucide-react";

const avatarUrls = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-orange"
          >
            LEARN &bull; BUILD &bull; GROW
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-6 text-[42px] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-[52px] lg:text-[68px] xl:text-[76px]"
          >
            A smarter way to learn{" "}
            <span className="text-orange">for what&rsquo;s next.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-text-secondary"
          >
            Wisespire is an EdTech platform that helps you gain in-demand
            skills, learn from industry experts, and take confident steps
            toward your future.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Started
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/programs"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue px-7 py-3.5 text-[15px] font-semibold text-blue transition-colors hover:bg-light-blue"
            >
              Explore Programs
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarUrls.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-bg-primary object-cover"
                    style={{ zIndex: avatarUrls.length - i }}
                  />
                ))}
              </div>
              <p className="text-[14px] font-medium leading-tight text-text">
                10,000+ learners
                <br />
                <span className="text-text-secondary">trust Wisespire</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-orange" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[14px] font-medium text-text">
                4.8/5 <span className="text-text-secondary">from 1,200+ reviews</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:max-w-none"
        >
          <div className="animate-float-slow absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue sm:h-72 sm:w-72" />
          <div className="animate-float absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-orange sm:h-52 sm:w-52" />
          <div className="animate-float-slow absolute -top-6 left-1/3 h-16 w-16 rounded-full bg-orange/80" />
          <div
            className="absolute -right-6 top-4 h-20 w-20 rounded-full border-2 border-dashed border-blue/40 sm:h-28 sm:w-28"
            aria-hidden="true"
          />
          <div className="absolute right-10 top-1/3 h-4 w-4 rounded-full border-2 border-blue/50" aria-hidden="true" />
          <div className="absolute -left-3 bottom-1/4 h-3.5 w-3.5 rounded-full bg-orange/70" aria-hidden="true" />
          <div className="absolute left-1/4 -bottom-3 h-2.5 w-2.5 rounded-full bg-blue/50" aria-hidden="true" />

          <div className="relative h-full w-full overflow-hidden rounded-[32px] border-4 border-white shadow-[0_30px_70px_-25px_rgba(9,36,91,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
              alt="Student holding a laptop, smiling"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-4 top-10 flex items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg sm:-left-10"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-blue text-blue">
              <TrendingUp size={18} />
            </span>
            <span className="text-[13px] leading-tight">
              <span className="block font-semibold text-navy">Learn</span>
              <span className="text-text-secondary">In-demand skills</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -right-3 top-1/2 flex -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg sm:-right-10"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-soft-orange text-orange">
              <Layers size={18} />
            </span>
            <span className="text-[13px] leading-tight">
              <span className="block font-semibold text-navy">Build</span>
              <span className="text-text-secondary">Real projects</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 left-8 flex items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-blue text-blue">
              <Rocket size={18} />
            </span>
            <span className="text-[13px] leading-tight">
              <span className="block font-semibold text-navy">Grow</span>
              <span className="text-text-secondary">Your career</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
