import type { Metadata } from "next";
import Image from "next/image";
import {
  Lightbulb,
  HeartHandshake,
  Globe2,
  Scale,
  Award,
  Target,
  Compass,
  Hammer,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Wisespire",
  description:
    "Wisespire Business Solutions Pvt Ltd delivers high-quality, end-to-end project solutions across diverse sectors — driven by innovation, operational excellence, and a client-first approach.",
};

const values = [
  { icon: Lightbulb, title: "Integrity and Innovation" },
  { icon: HeartHandshake, title: "Creativity and Compassion" },
  { icon: Globe2, title: "Diversity and Inclusion" },
  { icon: Scale, title: "Accountability and Work Life Balance" },
  { icon: Award, title: "Trust and Excellence" },
  { icon: Target, title: "Customer Focus and Quality" },
];

const process = [
  {
    icon: Compass,
    title: "Dream",
    description:
      "We help you dream beyond boundaries — transforming ‘What if’ into ‘What next’.",
    accent: "orange" as const,
  },
  {
    icon: Hammer,
    title: "Develop",
    description:
      "Turning those dreams into tangible solutions, with an approach built to meet customer needs — emphasizing quality and expertise.",
    accent: "blue" as const,
  },
  {
    icon: Rocket,
    title: "Deliver",
    description:
      "A commitment to execution and reliability that assures customers their envisioned services arrive with trust.",
    accent: "orange" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-widest text-orange">
              — OUR STORY
            </span>
            <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
              We help you dream beyond{" "}
              <span className="text-blue">boundaries.</span>
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              From modernizing legacy infrastructure to implementing
              transformative technologies, our versatile solutions are
              designed to elevate organizations to new heights. Partner with
              us and unlock your true potential — a future where your
              boldest visions become reality.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[32px] border-4 border-white shadow-[0_30px_70px_-25px_rgba(9,36,91,0.3)]">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
              alt="Team collaborating"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-5 sm:grid-cols-2">
          <div className="rounded-[26px] border border-border bg-white p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-orange text-orange">
              <Target size={20} />
            </span>
            <h2 className="mt-5 text-[20px] font-bold text-navy">Mission</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              Our mission is to empower businesses and communities by
              delivering high-quality, end-to-end project solutions across
              diverse sectors. We are committed to fostering innovation,
              driving operational excellence, and building long-term
              partnerships through integrity, expertise, and a client-first
              approach.
            </p>
          </div>
          <div className="rounded-[26px] border border-border bg-white p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue text-blue">
              <Compass size={20} />
            </span>
            <h2 className="mt-5 text-[20px] font-bold text-navy">Vision</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              To be a leading multi-domain project solutions company,
              delivering innovation, excellence, and sustainable impact
              across industries through strategic expertise, collaboration,
              and technology-driven execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft-gray px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <span className="text-xs font-semibold tracking-widest text-orange">
            — WHY WISESPIRE?
          </span>
          <h2 className="mt-3 max-w-2xl text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
            Whether you&rsquo;re in the public or private sector, our
            tailored services are designed to meet your unique needs and
            unlock your full potential.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex items-center gap-4 rounded-[22px] border border-border bg-white p-6"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    i % 2 === 0 ? "bg-soft-orange text-orange" : "bg-light-blue text-blue"
                  }`}
                >
                  <v.icon size={20} />
                </span>
                <h3 className="text-[15px] font-bold leading-snug text-navy">{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <span className="text-xs font-semibold tracking-widest text-orange">
            — WHAT MAKES US DIFFERENT
          </span>
          <h2 className="mt-3 max-w-xl text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
            Dream. Develop. Deliver.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {process.map((step) => (
              <div
                key={step.title}
                className="rounded-[22px] border border-border bg-white p-7"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${
                    step.accent === "orange" ? "bg-orange" : "bg-blue"
                  }`}
                >
                  <step.icon size={24} />
                </span>
                <h3 className="mt-5 text-[18px] font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
