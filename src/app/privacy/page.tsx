import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Wisespire",
  description: "How Wisespire Business Solutions Pvt Ltd collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[780px]">
        <span className="text-xs font-semibold tracking-widest text-orange">
          — LEGAL
        </span>
        <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[14px] text-text-secondary">Last updated: October 8, 2026</p>

        <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-text-secondary">
          <p>
            This Privacy Policy explains how Wisespire Business Solutions
            Pvt Ltd (&ldquo;Wisespire&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects, uses, and protects information when
            you visit{" "}
            <span className="font-medium text-navy">www.wisespire.in</span>{" "}
            or get in touch with us.
          </p>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Information we collect</h2>
            <p className="mt-3">
              We collect information you choose to give us directly for
              example, through the contact form on this website, where we
              ask for your name, email address, organization, an optional
              phone number, and your message. We do not ask for this
              information anywhere else on the site.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">How we use it</h2>
            <p className="mt-3">
              We use the information you submit solely to respond to your
              inquiry to understand what you&rsquo;re asking about and get
              back to you. We don&rsquo;t sell, rent, or share your
              information with third parties for marketing purposes.
            </p>

          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Cookies and analytics</h2>
            <p className="mt-3">
              This website does not currently use cookies, analytics, or
              advertising trackers. If that changes in the future, this
              policy will be updated to reflect it before any such tool
              goes live.
            </p>
          </div>


          <div>
            <h2 className="text-[20px] font-bold text-navy">Data retention</h2>
            <p className="mt-3">
              We retain contact form submissions only as long as needed to
              respond to your inquiry and keep a reasonable record of
              business communications. You can ask us to delete your
              information at any time see &ldquo;Your rights&rdquo;
              below.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Children&rsquo;s privacy</h2>
            <p className="mt-3">
              This website is intended for educators, institutions, and
              adults inquiring about our programs and services. We do not
              knowingly collect personal information from children through
              this site.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Your rights</h2>
            <p className="mt-3">
              You can ask us what information we hold about you, request a
              correction, or ask us to delete it, by writing to{" "}
              <a href="mailto:info@wisespire.in" className="font-medium text-blue hover:underline">
                info@wisespire.in
              </a>
              . We&rsquo;ll respond within a reasonable time.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy as our website or services change.
              The &ldquo;Last updated&rdquo; date above reflects the most
              recent revision.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Contact</h2>
            <p className="mt-3">
              Wisespire Business Solutions Pvt Ltd
              <br />
              No.1 &amp; 1A Sy No.96, Amruthahalli, Bengaluru 560092, Karnataka, India
              <br />
              <a href="mailto:info@wisespire.in" className="font-medium text-blue hover:underline">
                info@wisespire.in
              </a>
            </p>
          </div>

          <p className="text-[14px] text-text-secondary">
            See also our{" "}
            <Link href="/terms" className="font-medium text-blue hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
