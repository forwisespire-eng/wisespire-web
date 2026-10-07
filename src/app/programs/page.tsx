import type { Metadata } from "next";
import { programs } from "@/lib/data";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title: "Programs — Wisespire",
  description:
    "Explore Wisespire's industry-aligned programs across Data Science & AI, Web Development, UI/UX Design, Cloud Computing, Cybersecurity, and Business & Management.",
};

export default function ProgramsPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-orange">
            — OUR PROGRAMS
          </span>
          <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
            Skill paths designed for{" "}
            <span className="text-blue">your future.</span>
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
            Choose from industry-aligned programs, hands-on projects, and
            expert guidance to build the skills that matter.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <ProgramCard key={program.slug} slug={program.slug} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
