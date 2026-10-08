import type { Metadata } from "next";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificate — Wisespire",
  description:
    "Earn a Wisespire certificate on completing a program — recognized proof of the skills you built, backed by hands-on projects and expert mentorship.",
};

const highlights = [
  "Issued on successful completion of any Wisespire program",
  "Shareable on LinkedIn and with employers",
  "Backed by hands-on projects and mentor sign-off",
];

export default function CertificatePage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-orange text-orange">
          <Award size={26} />
        </span>
        <h1 className="mt-5 text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
          A certificate that{" "}
          <span className="text-blue">proves real skill.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-secondary">
          Every Wisespire program ends with a certificate of completion —
          grounded in the projects you built and the skills you actually
          demonstrated, not just time spent watching videos.
        </p>

        <div className="mx-auto mt-10 max-w-md space-y-4 text-left">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 text-[15px] text-text">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-light-blue text-blue">
                <CheckCircle2 size={15} />
              </span>
              {item}
            </div>
          ))}
        </div>

        <Link
          href="/programs"
          className="focus-ring group mt-10 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          Explore Programs
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
