import type { Metadata } from "next";
import {
  Lightbulb,
  HeartHandshake,
  Globe2,
  Scale,
  Award,
  Target,
  Mail,
  ArrowRight,
  Code2,
  Palette,
  BookOpen,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Wisespire",
  description:
    "Build what's next with Wisespire. We're a small, product-driven EdTech team working on LMS, skill development, and practical learning experiences.",
  alternates: { canonical: "/careers" },
};

const values = [
  { icon: Lightbulb, title: "Integrity and Innovation" },
  { icon: HeartHandshake, title: "Creativity and Compassion" },
  { icon: Globe2, title: "Diversity and Inclusion" },
  { icon: Scale, title: "Accountability and Work Life Balance" },
  { icon: Award, title: "Trust and Excellence" },
  { icon: Target, title: "Customer Focus and Quality" },
];

const areas = [
  {
    icon: Code2,
    title: "Engineering & Product",
    description: "LMS, virtual labs, and the platforms learners use every day.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Learning experiences that are clear, usable, and worth returning to.",
  },
  {
    icon: BookOpen,
    title: "Learning & Content",
    description: "Curriculum, instructional design, and program delivery.",
  },
  {
    icon: Briefcase,
    title: "Business & Operations",
    description: "Partnerships, institutions, and the work that keeps everything running.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <span className="text-xs font-semibold tracking-widest text-orange">
            — CAREERS
          </span>
          <h1 className="mt-3 max-w-2xl text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
            Build what&rsquo;s next,{" "}
            <span className="text-blue">with us.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
            Wisespire is a small, product-driven team working across EdTech
            and technology solutions. We care about doing honest, useful
            work — not just shipping features.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft-gray px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="max-w-2xl text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
            What it&rsquo;s like to work here
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
          <h2 className="max-w-2xl text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
            Where we typically hire
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            We don&rsquo;t always have open roles listed, but these are the
            areas we grow into most often.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <div
                key={area.title}
                className="rounded-[22px] border border-border bg-white p-6"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    i % 2 === 0 ? "bg-soft-orange text-orange" : "bg-light-blue text-blue"
                  }`}
                >
                  <area.icon size={20} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-navy">{area.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px] rounded-[32px] bg-gradient-to-br from-navy to-blue px-6 py-14 text-center sm:px-12">
          <p className="text-[22px] font-bold text-white sm:text-[28px]">
            Don&rsquo;t see an open role that fits?
          </p>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
            Write to us with what you&rsquo;d want to work on. We read every
            message.
          </p>
          <a
            href="mailto:info@wisespire.in"
            className="focus-ring group mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} />
            info@wisespire.in
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </>
  );
}
