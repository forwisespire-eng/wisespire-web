import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { programs } from "@/lib/data";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.name} — Wisespire`,
    description: program.description.join(" "),
  };
}

const heroImages: Record<string, string> = {
  lms: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
  "skill-development":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  "virtual-labs":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  "web-development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  "cloud-computing":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
  "data-science-ai":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
};

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const Icon = program.icon;
  const isOrange = program.accent === "orange";

  return (
    <article className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <nav aria-label="Breadcrumb" className="text-[13px] text-text-secondary">
          <Link href="/programs" className="hover:text-blue">
            Programs
          </Link>{" "}
          / <span className="text-navy">{program.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                isOrange ? "bg-soft-orange text-orange" : "bg-light-blue text-blue"
              }`}
            >
              <Icon size={26} />
            </span>
            <h1 className="mt-5 text-[36px] font-extrabold leading-tight tracking-tight text-navy sm:text-[46px]">
              {program.name}
            </h1>
            <div className="mt-4 max-w-lg space-y-3 text-[16px] leading-relaxed text-text-secondary">
              {program.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href="/contact"
              className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              View Program
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_24px_60px_-20px_rgba(9,36,91,0.3)]">
            <Image
              src={heroImages[program.slug] ?? heroImages["data-science-ai"]}
              alt={`Student learning ${program.name}`}
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 rounded-[28px] border border-border bg-white p-8 sm:p-10">
          <h2 className="text-[22px] font-bold text-navy">What&rsquo;s included</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {program.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-text">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-soft-orange text-orange">
                  <Check size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-5">
          {programs
            .filter((p) => p.slug !== program.slug)
            .slice(0, 3)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="focus-ring flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[14px] font-medium text-navy transition-colors hover:border-blue hover:text-blue"
              >
                <p.icon size={15} />
                {p.name}
              </Link>
            ))}
        </div>
      </div>
    </article>
  );
}
