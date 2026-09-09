export const site = {
  name: "Fitsum Mulugeta Tesfaye",
  role: "Full-Stack Software Engineer & IT Systems Architect",
  email: "fitmulugeta@gmail.com",
  github: "https://github.com/CappieX",
  linkedin: "https://linkedin.com/in/fitsum-mulugeta-39454750",
  location: "Addis Ababa, Ethiopia",
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  price: string;
  timeline: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-platform-development",
    name: "Web & Platform Development",
    category: "Development",
    summary:
      "Production-grade web applications and APIs built for scale, security and long-term maintainability.",
    price: "From 120,000 ETB",
    timeline: "4–12 weeks",
    features: [
      "Architecture & data modelling",
      "TypeScript front end and API",
      "Authentication, roles and audit trails",
      "Automated deployment pipeline",
    ],
  },
  {
    slug: "systems-architecture-consulting",
    name: "Systems Architecture Consulting",
    category: "Consulting",
    summary:
      "Independent review and design of your infrastructure, integrations and scaling strategy.",
    price: "3,500 ETB / hour",
    timeline: "1–4 weeks",
    features: [
      "Current-state technical audit",
      "Target architecture blueprint",
      "Cost and performance modelling",
      "Migration roadmap",
    ],
  },
  {
    slug: "payment-integration",
    name: "Payment & Fintech Integration",
    category: "Development",
    summary:
      "Telebirr, Chapa, CBE transfer and card payments wired into your product with reconciliation built in.",
    price: "From 60,000 ETB",
    timeline: "2–5 weeks",
    features: [
      "Local and international gateways",
      "Webhook handling and retries",
      "Reconciliation dashboards",
      "PCI-aware security review",
    ],
  },
  {
    slug: "team-augmentation",
    name: "Team Augmentation & Training",
    category: "Training",
    summary:
      "Hands-on engineering leadership for your in-house team, with code review and mentoring.",
    price: "From 90,000 ETB / month",
    timeline: "Ongoing",
    features: [
      "Code review standards",
      "CI/CD and testing culture",
      "Pair programming sessions",
      "Documentation handover",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "national-payments-hub",
    title: "Payments Integration Hub",
    subtitle: "Unified Telebirr, Chapa and bank settlement layer for a retail group",
    category: "System",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    result: "Settlement reconciliation time cut from 3 days to under 15 minutes",
  },
  {
    slug: "logistics-operations-suite",
    title: "Logistics Operations Suite",
    subtitle: "Dispatch, fleet tracking and driver settlement in one operator console",
    category: "Web",
    tech: ["React", "TypeScript", "WebSockets", "MongoDB"],
    result: "Dispatch throughput up 40% with 120 daily active operators",
  },
  {
    slug: "clinic-records-platform",
    title: "Clinic Records Platform",
    subtitle: "Patient records, scheduling and billing for a multi-branch clinic",
    category: "Web",
    tech: ["Next.js", "Prisma", "AWS"],
    result: "Paper records eliminated across 6 branches in one quarter",
  },
  {
    slug: "microfinance-core",
    title: "Microfinance Core Modernisation",
    subtitle: "Legacy core banking modules rebuilt as documented services",
    category: "Consulting",
    tech: ["Architecture", "Kubernetes", "CI/CD"],
    result: "Release cycle shortened from quarterly to weekly",
  },
];

export const timeline = [
  {
    year: "2021 — Present",
    title: "Independent Systems Architect",
    body: "Designing and delivering enterprise platforms for finance, logistics and healthcare clients across Ethiopia and abroad.",
  },
  {
    year: "2017 — 2021",
    title: "Lead Software Engineer",
    body: "Led delivery teams building high-availability transaction systems and internal developer tooling.",
  },
  {
    year: "2014 — 2017",
    title: "Full-Stack Engineer",
    body: "Built customer-facing web products and integrations for local and regional businesses.",
  },
];

export const skills = [
  { name: "TypeScript / Node.js", level: 95 },
  { name: "React & Next.js", level: 93 },
  { name: "System & API Architecture", level: 92 },
  { name: "Databases (SQL & NoSQL)", level: 88 },
  { name: "Cloud & DevOps", level: 85 },
  { name: "Payments & Integrations", level: 90 },
];
