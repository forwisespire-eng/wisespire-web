import {
  BarChart3,
  Code2,
  Cloud,
  GraduationCap,
  TrendingUp,
  FlaskConical,
  Rocket,
  Handshake,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export type Accent = "orange" | "blue";

export type Program = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  accent: Accent;
  duration: string;
  level: string;
  features: string[];
  includes: string[];
};

export const programs: Program[] = [
  {
    slug: "lms",
    name: "LMS",
    icon: GraduationCap,
    tagline: "A learning management system built to scale.",
    description:
      "A full-featured learning management system for delivering, tracking, and managing courses — built for institutions and businesses alike.",
    accent: "orange",
    duration: "Ongoing",
    level: "All levels",
    features: [
      "Course & Content Management",
      "Hands-on Projects",
      "Industry Expert Mentors",
      "Certification",
      "Career Support",
    ],
    includes: ["Live classes", "Projects", "Mentorship", "Certification", "Career support"],
  },
  {
    slug: "skill-development",
    name: "Skill Development",
    icon: TrendingUp,
    tagline: "Build practical, in-demand skills.",
    description:
      "Structured, outcome-driven training that builds practical skills aligned with what the market actually hires for.",
    accent: "blue",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    features: [
      "Beginner to Advanced",
      "Hands-on Projects",
      "Industry Expert Mentors",
      "Certification",
      "Career Support",
    ],
    includes: ["Live classes", "Projects", "Mentorship", "Certification", "Career support"],
  },
  {
    slug: "virtual-labs",
    name: "Virtual Labs",
    icon: FlaskConical,
    tagline: "Practice in real, hands-on environments.",
    description:
      "Cloud-based virtual labs that let learners practice on real tools and environments — no local setup required.",
    accent: "orange",
    duration: "Self-paced",
    level: "All levels",
    features: [
      "Beginner to Advanced",
      "Hands-on Projects",
      "Industry Expert Mentors",
      "Certification",
      "Career Support",
    ],
    includes: ["Live classes", "Projects", "Mentorship", "Certification", "Career support"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    icon: Code2,
    tagline: "Create modern web experiences.",
    description:
      "Master front-end and back-end engineering, building production-grade web applications with modern frameworks.",
    accent: "blue",
    duration: "10 weeks",
    level: "Beginner to Advanced",
    features: [
      "Beginner to Advanced",
      "Hands-on Projects",
      "Industry Expert Mentors",
      "Certification",
      "Career Support",
    ],
    includes: ["Live classes", "Projects", "Mentorship", "Certification", "Career support"],
  },
  {
    slug: "cloud-computing",
    name: "Cloud Computing",
    icon: Cloud,
    tagline: "Learn cloud tools and infrastructure.",
    description:
      "Gain hands-on expertise in cloud architecture, DevOps practices, and scalable infrastructure.",
    accent: "orange",
    duration: "10 weeks",
    level: "Intermediate",
    features: [
      "Beginner to Advanced",
      "Hands-on Projects",
      "Industry Expert Mentors",
      "Certification",
      "Career Support",
    ],
    includes: ["Live classes", "Projects", "Mentorship", "Certification", "Career support"],
  },
  {
    slug: "data-science-ai",
    name: "Data Science & AI",
    icon: BarChart3,
    tagline: "Build AI skills for tomorrow's world.",
    description:
      "Build in-demand skills for tomorrow's world — from statistics and Python to machine learning and applied AI systems.",
    accent: "blue",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    features: [
      "Beginner to Advanced",
      "Hands-on Projects",
      "Industry Expert Mentors",
      "Certification",
      "Career Support",
    ],
    includes: ["Live classes", "Projects", "Mentorship", "Certification", "Career support"],
  },
];

export const clientSegments = [
  {
    icon: Rocket,
    title: "StartUps",
    description:
      "We focus on more innovative products and services by collaboration with startup ventures.",
  },
  {
    icon: Handshake,
    title: "Agencies",
    description:
      "We work with a spectrum of agencies ranging from independent software vendors to consulting firms.",
  },
  {
    icon: Globe2,
    title: "Enterprises",
    description: "We work with all sectors of enterprises across the globe.",
  },
];

export const trustLogos = [
  "TechSphere",
  "NextGen University",
  "BrightMind",
  "Global Institute",
  "FutureHub",
  "SkillForge",
];

export const stats = [
  { value: 9, suffix: "+", label: "Core service domains delivered end-to-end" },
  { value: 6, suffix: "", label: "Core values guiding every engagement" },
  { value: 3, suffix: "", label: "Client segments served — StartUps, Agencies & Enterprises" },
];

export const steps = [
  {
    index: "01",
    title: "Discover",
    description: "Explore programs that match your goals.",
    accent: "orange" as Accent,
  },
  {
    index: "02",
    title: "Learn",
    description: "Gain in-demand skills through expert-led content.",
    accent: "blue" as Accent,
  },
  {
    index: "03",
    title: "Build",
    description: "Work on real projects and build your portfolio.",
    accent: "orange" as Accent,
  },
  {
    index: "04",
    title: "Grow",
    description: "Get placed, advance your career, or achieve your academic goals.",
    accent: "blue" as Accent,
  },
];

export const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/#resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Programs",
    links: programs.map((p) => ({ label: p.name, href: `/programs/${p.slug}` })),
  },
  {
    title: "Solutions",
    links: [
      { label: "For Students", href: "/solutions/students" },
      { label: "For Professionals", href: "/solutions/professionals" },
      { label: "For Institutions", href: "/solutions/institutions" },
      { label: "For Businesses", href: "/solutions/businesses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Events", href: "/resources/events" },
      { label: "Help Center", href: "/resources/help" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
