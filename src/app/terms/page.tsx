import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Wisespire",
  description: "Terms governing use of the Wisespire website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[780px]">
        <span className="text-xs font-semibold tracking-widest text-orange">
          — LEGAL
        </span>
        <h1 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[44px]">
          Terms of Service
        </h1>
        <p className="mt-3 text-[14px] text-text-secondary">Last updated: October 8, 2026</p>

        <div className="mt-10 space-y-8 text-[16px] leading-relaxed text-text-secondary">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
            <span className="font-medium text-navy">www.wisespire.in</span>,
            operated by Wisespire Business Solutions Pvt Ltd
            (&ldquo;Wisespire&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
            using this website, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Use of this website</h2>
            <p className="mt-3">
              This website is provided to share information about
              Wisespire&rsquo;s programs and services and to let visitors
              get in touch with us. You agree not to misuse the site
              including attempting to disrupt it, scrape it at scale, or
              use it for any unlawful purpose.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Our services</h2>
            <p className="mt-3">
              Information about programs, solutions, and services on this
              website is provided for general guidance. Program details,
              timelines, and offerings may change, and specific terms for
              any program or engagement are confirmed separately with you
              before you commit to it. Nothing on this website constitutes
              a guarantee of specific learning, career, or business
              outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Intellectual property</h2>
            <p className="mt-3">
              The Wisespire name, logo, and the content on this website
              (text, graphics, and design) are the property of Wisespire
              Business Solutions Pvt Ltd unless otherwise credited. You may
              not reproduce or redistribute this content without our
              written permission.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Third-party links and services</h2>
            <p className="mt-3">
              This website may link to third-party sites or use
              third-party services (such as our email delivery provider).
              We&rsquo;re not responsible for the content or practices of
              third-party sites you reach through links on this website.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Limitation of liability</h2>
            <p className="mt-3">
              This website and its content are provided &ldquo;as
              is&rdquo;, without warranties of any kind. To the extent
              permitted by law, Wisespire is not liable for any indirect or
              consequential loss arising from your use of this website.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Governing law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of India. Any disputes
              arising from these Terms or your use of this website are
              subject to the exclusive jurisdiction of the courts in
              Bengaluru, Karnataka.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-navy">Changes to these Terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date above reflects the most recent revision.
              Continued use of the website after changes means you accept
              the updated Terms.
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
            <Link href="/privacy" className="font-medium text-blue hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
