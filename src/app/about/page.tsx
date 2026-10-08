import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Wisespire",
  description:
    "Wisespire is an EdTech company that creates learning programs, digital learning platforms, and practical learning experiences for students.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h1 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
              About <span className="text-blue">Wisespire</span>
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
              <strong className="font-semibold text-navy">
                Wisespire is an EdTech company that creates learning
                programs, digital learning platforms, and practical learning
                experiences for students.
              </strong>{" "}
              We bring together education, technology, and hands-on learning
              to make learning more meaningful, engaging, and useful.
            </p>
          </div>

          <p className="text-[16px] leading-relaxed text-text-secondary">
            We believe learning should be more than attending classes,
            reading textbooks, and preparing for exams. Students learn
            differently, and they need opportunities to ask questions,
            explore ideas, try things out, and understand how their
            learning connects to the world around them.
          </p>
          <p className="text-[16px] leading-relaxed text-text-secondary">
            Our offerings include{" "}
            <strong className="font-semibold text-navy">
              skill development programs, digital learning, Learning
              Management Systems (LMS), virtual labs, and technology-based
              learning solutions
            </strong>
            . We use these to give students more opportunities to learn,
            practice, experiment, and build confidence beyond traditional
            classroom learning.
          </p>
          <p className="text-[16px] leading-relaxed text-text-secondary">
            Our aim is to help students become{" "}
            <strong className="font-semibold text-navy">
              curious learners, better thinkers, confident problem-solvers,
              and creative individuals
            </strong>
            . We want to create learning experiences that not only help
            students understand what they learn, but also encourage them
            to think about what they can do with it.
          </p>
          <p className="text-[16px] leading-relaxed text-text-secondary">
            At Wisespire, we believe education is not just about finding
            the right answer. It is about{" "}
            <strong className="font-semibold text-navy">
              learning how to think, how to learn, and how to use what you
              learn.
            </strong>
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[32px] border-4 border-white shadow-[0_30px_70px_-25px_rgba(9,36,91,0.3)] lg:sticky lg:top-24">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
            alt="Students learning together"
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
