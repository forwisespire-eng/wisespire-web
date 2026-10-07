"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Globe, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-xs font-semibold tracking-widest text-orange">
            — GET IN TOUCH
          </span>
          <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
            Let&rsquo;s talk about your{" "}
            <span className="text-blue">next step.</span>
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-text-secondary">
            Book a free consultation and get personalized guidance on the
            right learning path for you. No cost, no obligation.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-[15px] text-text">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft-orange text-orange">
                <Mail size={17} />
              </span>
              info@wisespire.in
            </div>
            <div className="flex items-center gap-3 text-[15px] text-text">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-light-blue text-blue">
                <Globe size={17} />
              </span>
              www.wisespire.in
            </div>
            <div className="flex items-start gap-3 text-[15px] text-text">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-orange text-orange">
                <MapPin size={17} />
              </span>
              <span>
                Wisespire Business Solutions Pvt Ltd,
                <br />
                No.1 &amp; 1A Sy No.96, Amruthahalli,
                <br />
                Bengaluru 560092, Karnataka, India
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-border bg-white p-6 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={44} className="text-orange" />
              <h2 className="mt-4 text-[20px] font-bold text-navy">Thank you!</h2>
              <p className="mt-2 max-w-xs text-[14px] text-text-secondary">
                We&rsquo;ve received your message and will be in touch within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" type="text" required />
                <Field label="Email address" name="email" type="email" required />
              </div>
              <Field label="Phone number" name="phone" type="tel" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[14px] font-semibold text-navy"
                >
                  What would you like to achieve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="focus-ring w-full rounded-2xl border border-border bg-bg-very-light px-4 py-3 text-[15px] text-text outline-none placeholder:text-text-secondary/60"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                className="focus-ring group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Book a Free Consultation
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[14px] font-semibold text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="focus-ring w-full rounded-2xl border border-border bg-bg-very-light px-4 py-3 text-[15px] text-text outline-none placeholder:text-text-secondary/60"
      />
    </div>
  );
}
