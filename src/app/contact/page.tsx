"use client";

import { useState, type SubmitEvent } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "US / Canada (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+33", label: "France (+33)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+86", label: "China (+86)" },
  { code: "+27", label: "South Africa (+27)" },
];

type Errors = Partial<Record<"name" | "email" | "organization" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const organization = String(data.get("organization") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Please enter your full name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!emailPattern.test(email)) errors.email = "Please enter a valid email address.";
  if (!organization) errors.organization = "Please enter your organization name.";
  if (!message) errors.message = "Let us know what you'd like to achieve.";

  return errors;
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const fieldErrors = validate(data);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("loading");

    const countryCode = String(data.get("countryCode") ?? "");
    const phoneDigits = String(data.get("phone") ?? "").trim();

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      organization: data.get("organization"),
      phone: phoneDigits ? `${countryCode} ${phoneDigits}` : "",
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
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
                <Phone size={17} />
              </span>
              +91 70936 00115
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
          {status === "success" ? (
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
                <Field label="Full name" name="name" type="text" error={errors.name} />
                <Field label="Email address" name="email" type="email" error={errors.email} />
              </div>
              <Field
                label="Organization"
                name="organization"
                type="text"
                error={errors.organization}
              />
              <div>
                <label htmlFor="phone" className="mb-2 block text-[14px] font-semibold text-navy">
                  Phone number <span className="text-text-secondary font-normal">(optional)</span>
                </label>
                <div className="flex gap-2">
                  <select
                    id="countryCode"
                    name="countryCode"
                    defaultValue="+91"
                    aria-label="Country code"
                    className="focus-ring w-[132px] shrink-0 rounded-2xl border border-border bg-bg-very-light px-3 py-3 text-[15px] text-text outline-none"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="focus-ring w-full rounded-2xl border border-border bg-bg-very-light px-4 py-3 text-[15px] text-text outline-none placeholder:text-text-secondary/60"
                  />
                </div>
              </div>
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
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`focus-ring w-full rounded-2xl border bg-bg-very-light px-4 py-3 text-[15px] text-text outline-none placeholder:text-text-secondary/60 ${
                    errors.message ? "border-orange" : "border-border"
                  }`}
                  placeholder="Tell us about your goals..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-[13px] text-orange">
                    {errors.message}
                  </p>
                )}
              </div>
              {status === "error" && (
                <p className="text-[14px] text-orange">
                  Something went wrong sending your message. Please try again or email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="focus-ring group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
              >
                {status === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Book a Free Consultation
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
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
  error,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
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
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`focus-ring w-full rounded-2xl border bg-bg-very-light px-4 py-3 text-[15px] text-text outline-none placeholder:text-text-secondary/60 ${
          error ? "border-orange" : "border-border"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-[13px] text-orange">
          {error}
        </p>
      )}
    </div>
  );
}
