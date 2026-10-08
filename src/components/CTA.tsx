"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck, MessageCircle, BadgeCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[36px] bg-gradient-to-br from-navy to-blue px-6 py-14 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-12 -top-16 h-56 w-56 rounded-full bg-orange/70" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-orange/60" />
        <div
          className="pointer-events-none absolute right-16 top-10 h-16 w-16 rounded-full border-2 border-white/20"
          aria-hidden="true"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-orange"
            >
              — READY TO GET STARTED?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[38px]"
            >
              Let&rsquo;s build your brighter future together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-md text-[16px] leading-relaxed text-white/75"
            >
              Book a free consultation and get personalized guidance on the
              right learning path for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Book a Free Consultation
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/programs"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Programs
              </Link>
            </motion.div>
          </div>

          <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-[320px] lg:block">
            <div className="relative h-full w-full overflow-hidden rounded-[28px] border-4 border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop"
                alt="Student smiling, ready to learn"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>

            <FloatingPill
              icon={<UserCheck size={16} />}
              label="Personalized recommendations"
              className="-left-10 top-8"
              delay={0.3}
            />
            <FloatingPill
              icon={<MessageCircle size={16} />}
              label="Talk to our experts"
              className="-right-10 top-1/2 -translate-y-1/2"
              delay={0.45}
            />
            <FloatingPill
              icon={<BadgeCheck size={16} />}
              label="No cost. No obligation."
              className="-left-6 bottom-6"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingPill({
  icon,
  label,
  className,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[13px] font-semibold text-navy shadow-lg ${className}`}
    >
      <span className="text-orange">{icon}</span>
      {label}
    </motion.div>
  );
}
