/** Solutions page copy and structured content (British English). */

export const SOLUTIONS_HERO = {
  label: "MANAGED TECHNOLOGY SOLUTIONS",
  title: "Technology built around the way your organisation works.",
  body:
    "We engineer technology systems around real organisational problems — then deploy, configure, and manage the technology that keeps them running.",
  primaryCta: { href: "/contact", label: "Discuss your organisation" },
  secondaryCta: { href: "/#ssl-method-heading", label: "See how we work" },
  rail: [
    "Your organisation",
    "Your workflow",
    "Our technology",
    "A more efficient operation",
  ],
} as const;

export const SOLUTIONS_HERO_IMAGE = "/images/solutions/solutions-hero-workstation.png";

/** Reference-aligned problem card photography. */
export const SOLUTIONS_PROBLEM_IMAGE_PATHS = {
  people: "/images/solutions/problem-people.jpg",
  processes: "/images/solutions/problem-processes.jpg",
  information: "/images/solutions/problem-information.jpg",
  technology: "/images/solutions/problem-technology.jpg",
  betterOutcomes: "/images/solutions/problem-better-outcomes.jpg",
} as const;

export const PROBLEM_SECTION = {
  index: "01",
  label: "THE PROBLEM",
  title: "Technology should fit the organisation — not the other way around.",
  paragraphs: [
    "Most technology is introduced as a product to adopt. We start with how the organisation actually operates — the people, processes, and information involved.",
    "Studira Systems studies the real workflow first, then engineers technology that supports it.",
    "The goal is practical systems that reduce friction — not more software to work around.",
  ],
  themes: [
    {
      title: "People",
      description: "Real teams, real responsibilities",
      imagePath: SOLUTIONS_PROBLEM_IMAGE_PATHS.people,
      imageAlt: "Team members collaborating in a modern workplace",
    },
    {
      title: "Processes",
      description: "Actual workflows and constraints",
      imagePath: SOLUTIONS_PROBLEM_IMAGE_PATHS.processes,
      imageAlt: "Operational workflow documentation and forms",
    },
    {
      title: "Information",
      description: "Critical data and records",
      imagePath: SOLUTIONS_PROBLEM_IMAGE_PATHS.information,
      imageAlt: "Organisational records and information storage",
    },
    {
      title: "Technology",
      description: "Systems designed around your reality",
      imagePath: SOLUTIONS_PROBLEM_IMAGE_PATHS.technology,
      imageAlt: "Technology in use at an operational workstation",
    },
    {
      title: "Better outcomes",
      description: "A more efficient organisation",
      imagePath: SOLUTIONS_PROBLEM_IMAGE_PATHS.betterOutcomes,
      imageAlt: "Improved organisational efficiency and outcomes",
    },
  ],
} as const;

export const WHAT_WE_SOLVE = {
  index: "02",
  label: "WHAT WE SOLVE",
  title: "From operational problems to working systems.",
  intro:
    "We engineer technology around the operational layer of an organisation — the systems, workflows, applications, and infrastructure that keep work moving.",
  items: [
    {
      icon: "operational-systems",
      title: "Operational Systems",
      body:
        "Core systems that coordinate people, processes, and information across the organisation.",
    },
    {
      icon: "workflow-process",
      title: "Workflow & Process",
      body:
        "Technology that supports how work actually moves — approvals, handoffs, records, and accountability.",
    },
    {
      icon: "business-applications",
      title: "Business Applications",
      body:
        "Practical applications configured around organisational roles, policies, and operational requirements.",
    },
    {
      icon: "technology-infrastructure",
      title: "Technology Infrastructure",
      body:
        "Reliable environments, integrations, and supporting architecture that keep systems dependable.",
    },
  ],
} as const;

export const OUR_METHOD = {
  index: "03",
  label: "OUR METHOD",
  title: "From problem to managed system.",
  intro:
    "A structured engineering process that turns real organisational problems into reliable, managed technology systems.",
  steps: [
    {
      num: "01",
      icon: "understand",
      title: "Understand",
      body: "Learn about the organisation, problem, and workflow.",
    },
    {
      num: "02",
      icon: "design",
      title: "Design",
      body: "Translate the problem into a practical technology system.",
    },
    {
      num: "03",
      icon: "build",
      title: "Build",
      body: "Engineer the software and supporting architecture.",
    },
    {
      num: "04",
      icon: "deploy",
      title: "Deploy",
      body: "Put the system into a reliable operating environment.",
    },
    {
      num: "05",
      icon: "manage",
      title: "Manage",
      body: "Maintain, monitor, and evolve the technology.",
    },
  ],
} as const;

export const MANAGED_TECHNOLOGY = {
  index: "04",
  label: "MANAGED TECHNOLOGY",
  title: "We don't stop when the system goes live.",
  intro:
    "Deployment is the beginning of operational responsibility. We stay with the technology — maintaining, monitoring, and adapting it as the organisation changes.",
  cards: [
    {
      icon: "deploy",
      title: "Deploy",
      body: "Put the system into its operating environment.",
    },
    {
      icon: "manage",
      title: "Manage",
      body: "Maintain the technology and infrastructure around it.",
    },
    {
      icon: "evolve",
      title: "Evolve",
      body: "Adapt the system as organisational needs change.",
    },
  ],
} as const;

export const REAL_WORLD_EVIDENCE = {
  index: "05",
  label: "REAL-WORLD EVIDENCE",
  title: "Engineering around real operational requirements.",
  paragraphs: [
    "Our work includes a healthcare management platform engineered for BIO Dental — supporting patient operations, clinical workflows, and organisational management within one system.",
    "The platform reflects how a real clinic operates: registration, records, appointments, and day-to-day operational visibility.",
  ],
  link: { href: "/products", label: "Learn more about our work" },
  captions: {
    primary: "Patient registration and clinical workflow",
    patient: "Patient operations: real patient management workflows.",
    organisation:
      "Organisational operations: operational dashboard and system management.",
  },
} as const;

export const DOMAINS = {
  index: "06",
  label: "BUILT FOR DIFFERENT PROBLEMS",
  title: "One engineering approach. Different organisational realities.",
  intro:
    "The same disciplined engineering approach applies across sectors — configured around the organisation, not a generic template.",
  items: [
    {
      icon: "healthcare",
      title: "Healthcare",
      body: "Clinical and operational systems for care delivery, records, and organisational management.",
    },
    {
      icon: "workforce-hr",
      title: "Workforce & HR",
      body: "Workforce operations, people processes, and the systems that support organisational teams.",
    },
    {
      icon: "agriculture",
      title: "Agriculture",
      body: "Operational technology for production, logistics, and field-to-organisation coordination.",
    },
    {
      icon: "education",
      title: "Education",
      body: "Systems that support institutions, administration, and the information behind learning operations.",
    },
    {
      icon: "other-organisations",
      title: "Other organisations",
      body: "Custom engineering where the problem — not the sector label — defines the system.",
    },
  ],
} as const;

export const SOLUTIONS_CTA = {
  label: "LET'S WORK TOGETHER",
  title: "Have an operational problem technology could solve?",
  body: "Tell us what you're trying to make work. We'll start with the problem.",
  cta: { href: "/contact", label: "Talk to Studira Systems" },
} as const;

export const SOLUTIONS_ICON_BASE = "/images/solutions/icons";
