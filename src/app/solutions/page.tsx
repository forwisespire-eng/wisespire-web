import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Users, Building2, Compass, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Wisespire",
  description:
    "Wisespire builds learning solutions for students, educators, and institutions — connecting education, technology, and practical learning.",
};

const steps = ["Learn", "Practice", "Build", "Apply", "Improve"];

function SolutionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_24px_60px_-20px_rgba(9,36,91,0.25)]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <span className="text-xs font-semibold tracking-widest text-orange">
            — SOLUTIONS
          </span>
          <h1 className="mt-3 max-w-2xl text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
            Solutions for every part of{" "}
            <span className="text-blue">learning.</span>
          </h1>
        </div>
      </section>

      <section id="students" className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-orange text-orange">
              <GraduationCap size={22} />
            </span>
            <span className="mt-5 block text-xs font-semibold tracking-widest text-orange">
              STUDENT LEARNING
            </span>
            <h2 className="mt-2 text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
              Helping Students Learn Better
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-secondary">
              <p>
                Students need more than information. They need the right
                guidance, opportunities to practice, and enough time to
                understand concepts in their own way.
              </p>
              <p>
                Wisespire provides learning experiences that help students
                build strong foundations, practice regularly, understand
                their progress, and develop confidence as they move forward.
              </p>
              <p>
                Our goal is to make learning easier to understand and more
                interesting, while encouraging students to become curious
                and independent learners.
              </p>
            </div>
          </div>
          <SolutionImage
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop"
            alt="Students studying together"
          />
        </div>
      </section>

      <section id="educators" className="bg-bg-soft-gray px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-light-blue text-blue">
              <Users size={22} />
            </span>
            <span className="mt-5 block text-xs font-semibold tracking-widest text-orange">
              EDUCATOR SOLUTIONS
            </span>
            <h2 className="mt-2 text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
              Supporting Teachers and Educators
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-secondary">
              <p>
                Teachers play the most important role in a learner&rsquo;s
                journey. Technology should support that role, not replace
                it.
              </p>
              <p>
                Wisespire provides digital resources and learning tools that
                help educators organize content, support students, assess
                learning, and get a better understanding of how their
                learners are progressing.
              </p>
              <p>
                This gives educators more flexibility to focus on teaching,
                mentoring, and spending meaningful time with their students.
              </p>
            </div>
          </div>
          <div className="lg:order-1">
            <SolutionImage
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=900&auto=format&fit=crop"
              alt="Teacher mentoring a student"
            />
          </div>
        </div>
      </section>

      <section id="institutions" className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-orange text-orange">
              <Building2 size={22} />
            </span>
            <span className="mt-5 block text-xs font-semibold tracking-widest text-orange">
              SCHOOL &amp; INSTITUTION SOLUTIONS
            </span>
            <h2 className="mt-2 text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
              Creating Better Learning Environments
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-secondary">
              <p>
                Schools and educational institutions are dealing with
                rapidly changing expectations from students, parents,
                educators, and the industry.
              </p>
              <p>
                Wisespire helps institutions bring learning and technology
                together in a way that fits their academic and operational
                needs.
              </p>
              <p>
                From digital learning and assessments to skill development
                and learning insights, our solutions help institutions
                create a more connected learning environment and provide
                students with opportunities beyond traditional classroom
                learning.
              </p>
            </div>
          </div>
          <SolutionImage
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=900&auto=format&fit=crop"
            alt="School and institution campus"
          />
        </div>
      </section>

      <section className="bg-bg-soft-gray px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="lg:order-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-light-blue text-blue">
                <Compass size={22} />
              </span>
              <h2 className="mt-5 text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
                Learning Beyond the Classroom
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">
                We believe the best learning happens when knowledge is
                connected to experience. That means giving learners
                opportunities to ask questions, practice what they learn,
                work on projects, solve problems, and understand how their
                knowledge applies outside the classroom.
              </p>

              <p className="mt-6 text-[14px] font-semibold tracking-widest text-navy">
                OUR APPROACH IS SIMPLE
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-4 py-2 text-[14px] font-semibold ${
                        i % 2 === 0
                          ? "bg-orange text-white"
                          : "bg-blue text-white"
                      }`}
                    >
                      {step}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="text-text-secondary" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[16px] leading-relaxed text-text-secondary">
                This philosophy is at the heart of everything we build at
                Wisespire.
              </p>
            </div>
            <div className="lg:order-1">
              <SolutionImage
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=900&auto=format&fit=crop"
                alt="Students working on a hands-on project"
              />
            </div>
          </div>

          <div className="mt-12 max-w-[700px] border-t border-border pt-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-orange text-orange">
              <Target size={22} />
            </span>
            <h2 className="mt-5 text-[26px] font-bold leading-tight text-navy sm:text-[32px]">
              Our Approach
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-text-secondary">
              <p>
                We combine education, technology, and practical learning to
                create experiences that are useful today and relevant for
                tomorrow.
              </p>
              <p>
                We are not trying to make learning complicated. We want to
                make it clearer, more accessible, and more useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px] rounded-[32px] bg-gradient-to-br from-navy to-blue px-6 py-14 text-center sm:px-12">
          <p className="text-[22px] font-bold text-white sm:text-[28px]">
            Wisespire — Dream. Develop. Deliver.
          </p>
        </div>
      </section>
    </>
  );
}
