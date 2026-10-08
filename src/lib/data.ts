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
  description: string[];
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
    description: [
      "Our Learning Management System (LMS) brings lessons, study materials, assignments, activities, and assessments together in one place, making it easier for students to access and manage their learning anytime, from anywhere.",
      "With an organized and interactive learning environment, students can access lessons, practice their skills, complete assignments, take assessments, and follow their learning progress in a simple and structured way.",
      "We believe technology should make learning easier, more engaging, and accessible. Our LMS helps students stay connected with their learning, build good learning habits, and take greater ownership of their educational journey.",
    ],
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
    description: [
      "Our Skill Development programs go beyond traditional classroom learning, helping students build the skills they need to succeed in school, in everyday life, and in the future.",
      "Through engaging activities, hands-on projects, challenges, and practical learning experiences, students develop critical thinking, problem-solving, creativity, communication, collaboration, digital skills, and confidence.",
      "We believe learning is most meaningful when students don't just learn what the answer is, but also learn how to think, explore, ask questions, and discover solutions on their own.",
    ],
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
    description: [
      "Our Virtual Labs give students an opportunity to explore concepts through interactive experiments and activities in a safe and engaging digital environment. They can learn by trying things out, observing results, and understanding how concepts work in real situations.",
      "Through virtual experiments, simulations, and hands-on activities, students can explore different ideas, test their understanding, make observations, and learn from their experiences. This makes complex concepts easier to understand and more enjoyable to learn.",
      "We believe students learn best when they can explore, experiment, ask questions, and discover things for themselves. Our Virtual Labs encourage curiosity and help students develop a deeper understanding of what they learn in the classroom.",
    ],
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
    description: [
      "We design and develop websites that are simple, modern, responsive, and easy to use. Our aim is to create a smooth digital experience that helps organizations present their work, services, and ideas clearly to their audience.",
      "From understanding the requirements and designing the website to development, testing, and deployment, we take care of the complete process. We focus on creating websites that are visually appealing, easy to navigate, reliable, and accessible across different devices.",
      "We believe a good website should be more than just a digital presence. It should clearly communicate, create a positive experience, and serve a meaningful purpose for the organization and its audience.",
    ],
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
    description: [
      "We help organizations design, deploy, and optimize cloud-native applications and infrastructure for performance, scalability, reliability, and efficient resource utilization.",
      "Our services bring together cloud engineering, SRE, Performance Engineering, Observability, capacity planning, performance testing, monitoring, and automation. We work across application, infrastructure, and containerized environments to identify bottlenecks, improve system behavior, and prepare applications for changing workloads.",
      "Our focus is on building cloud environments that are reliable, observable, performance-driven, and scalable, with the engineering practices needed to operate them effectively in real-world conditions.",
    ],
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
    description: [
      "We help organizations use data and AI to understand their business, solve problems, and make better decisions. Our work focuses on turning raw data into useful insights and practical solutions.",
      "We work across data analysis, machine learning, AI models, predictive analytics, automation, and intelligent applications. We help organizations prepare and analyze data, identify meaningful patterns, build AI-driven solutions, and apply them to real-world business needs.",
      "Our focus is on building solutions that are practical, reliable, and useful helping organizations turn their data into insights, automate processes, and make smarter decisions with AI.",
    ],
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
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Certifications", href: "/certificate" },
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
