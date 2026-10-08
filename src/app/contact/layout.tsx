import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Wisespire",
  description:
    "Book a free consultation with Wisespire. Reach us at info@wisespire.in or visit our Bengaluru (registered) and Hyderabad (branch) offices.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
