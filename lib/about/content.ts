/** About page copy (British English). */

export const ABOUT_ASSETS = {
  founder: "/images/home/founder/studira-founder-system.png",
  beauty: "/images/home/founder/beauty-coo.jpeg",
} as const;

export const ABOUT_HERO = {
  label: "ABOUT STUDIRA SYSTEMS LIMITED",
  title: "Technology systems for real-world problems.",
  body:
    "We work with organisations to understand their challenges, engineer practical technology solutions and manage the underlying technology — so they can operate more efficiently, serve their people better and grow with confidence.",
  primaryCta: { href: "/contact", label: "Talk to us" },
  secondaryCta: { href: "#about-company-overview", label: "Learn more" },
} as const;

export const ABOUT_OPERATE = {
  id: "about-company-overview",
  label: "WHO WE ARE",
  title: "A product and managed technology solutions company.",
  intro:
    "Studira Systems Limited identifies real-world organisational problems, designs and builds technology systems to solve them, and provides the ongoing technology support needed to keep organisations running and growing.",
  principles: [
    {
      key: "understand" as const,
      title: "Understand",
      body:
        "We take time to understand your organisation, people, processes and goals.",
    },
    {
      key: "engineer" as const,
      title: "Engineer",
      body: "We design and build practical technology systems that fit how you work.",
    },
    {
      key: "deploy" as const,
      title: "Deploy",
      body: "We implement and integrate the solution into your operations.",
    },
    {
      key: "manage" as const,
      title: "Manage",
      body:
        "We provide ongoing technology management and support so your systems remain secure, reliable and effective.",
    },
  ],
} as const;

export const ABOUT_LEADERSHIP = {
  label: "OUR LEADERSHIP",
  title: "Experienced leadership. Complementary strengths.",
  intro:
    "We combine technical expertise and operational leadership to build technology systems that work for real organisations and the people who run them.",
  daniel: {
    name: "Daniel Williams",
    roles: [
      "Founder, Studira Systems Limited",
      "Co-founder & Lead Technical Architect, Parent Telegram (US)",
    ],
    badges: ["Technology Founder", "Software Engineer", "Product Architect"],
    summary:
      "A technology founder and certified software engineer working across application development, database engineering, cloud infrastructure and emerging AI/ML technologies. He designs and engineers practical systems that solve real-world organisational problems.",
    credentials: [
      { label: "Certified Software Engineer", icon: "code" as const },
      { label: "Certified MongoDB Developer", icon: "database" as const },
      { label: "Certified MongoDB Database Administrator", icon: "database" as const },
      { label: "AWS cloud experience", icon: "cloud" as const },
      { label: "Stanford certificates in Machine Learning/AI", icon: "ml" as const },
    ],
    imageAlt:
      "Daniel Williams, founder of Studira Systems Limited, in the Studira workspace",
  },
  beauty: {
    name: "Beauty Nunyiegia, PHRi, ACIHRM",
    role: "Human Resources Specialist",
    badges: ["HR Leadership", "People Operations", "Talent Acquisition"],
    summary:
      "A Human Resources professional with experience in HR strategy, HR operations, talent acquisition, employee relations, workforce planning and performance management.",
    capabilities: [
      { label: "HR Strategy & Operations", icon: "people" as const },
      { label: "Talent Acquisition", icon: "talent" as const },
      { label: "Employee Relations", icon: "relations" as const },
      { label: "HR Systems & Compliance", icon: "compliance" as const },
    ],
    imageAlt: "Beauty Nunyiegia, Human Resources Specialist at Studira Systems Limited",
  },
} as const;
