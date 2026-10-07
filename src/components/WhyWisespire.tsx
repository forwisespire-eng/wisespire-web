"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Users, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-relevant learning",
    description: "Curriculum designed with industry experts.",
  },
  {
    icon: Users,
    title: "Hands-on experience",
    description: "Work on real projects and build a portfolio.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    description: "Get mentorship and career guidance.",
  },
];

export default function WhyWisespire() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-orange"
          >
            WHY WISESPIRE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-navy sm:text-[38px]"
          >
            More than just courses. A launchpad for{" "}
            <span className="text-orange">real growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-md text-[16px] leading-relaxed text-text-secondary"
          >
            We combine world-class content, hands-on learning, and
            personalized guidance to help you achieve real-world success.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    i % 2 === 0 ? "bg-soft-orange text-orange" : "bg-light-blue text-blue"
                  }`}
                >
                  <feature.icon size={20} />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-navy">{feature.title}</h3>
                  <p className="mt-1 text-[14px] text-text-secondary">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[420px]"
        >
          <div className="animate-float-slow absolute -left-16 top-0 h-56 w-56 rounded-full bg-blue" />
          <div className="animate-float absolute -bottom-10 -right-8 h-36 w-36 rounded-full bg-orange" />
          <div
            className="absolute -left-4 bottom-10 h-16 w-16 rounded-full border-2 border-dashed border-orange/40"
            aria-hidden="true"
          />
          <div className="absolute right-1/3 -top-3 h-3 w-3 rounded-full bg-blue/50" aria-hidden="true" />

          <div className="relative h-full w-full overflow-hidden rounded-tl-[70px] rounded-br-[70px] rounded-tr-[20px] rounded-bl-[20px] border-4 border-white shadow-[0_30px_70px_-25px_rgba(9,36,91,0.3)]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="Student working on a laptop"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -right-2 -top-4 max-w-[150px] -rotate-3 font-serif text-[15px] italic leading-snug text-navy sm:-right-6"
            style={{ fontFamily: "cursive" }}
          >
            &ldquo;Skills today. Opportunities tomorrow.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
