/** Education page copy and asset paths (British English). */

export const EDUCATION_ASSETS = {
  hero: "/images/education/education-hero-group.png",
  approach: "/images/education/education-approach.png",
  practicalLearning: "/images/education/education-practical-learning.png",
  careerFocus: "/images/education/education-career-focus.png",
  globalCommunity: "/images/education/education-global-community.png",
  mentorship: "/images/education/education-mentorship.png",
  scholarship: "/images/education/education-scholarship.png",
  youtube: "/images/education/education-youtube.png",
} as const;

export const EDUCATION_HERO = {
  label: "EDUCATION FOR A REALER TOMORROW",
  title: "Learn technology with guidance. Build real opportunities.",
  body:
    "Personalised mentorship, practical learning and a supportive community for people who want to master technology and create better opportunities for themselves.",
  primaryCta: { href: "/contact", label: "Start a conversation" },
  secondaryCta: { href: "#education-approach-heading", label: "See how it works" },
  railHeading: "Learn · Build · Grow",
  railMuted: [
    "Practical skills",
    "Real projects",
    "Personalised support",
    "Career opportunities",
  ],
  railAccent: [
    "Guided learning",
    "Real projects",
    "Personal support",
    "Global opportunities",
  ],
} as const;

export const EDUCATION_APPROACH = {
  label: "OUR APPROACH",
  title: "More than courses. A better way to learn.",
  intro:
    "We focus on understanding, practice and real-world application. You get personal guidance, relevant projects and the support you need to grow with confidence.",
  benefits: [
    {
      title: "Personalised Guidance",
      body:
        "Learning paths shaped around your goals, pace and experience — with mentors who stay with you.",
      icon: "personalised-guidance" as const,
    },
    {
      title: "Practical Learning",
      body:
        "Hands-on projects and real tools so skills transfer directly into work you can do with confidence.",
      icon: "practical-learning" as const,
    },
    {
      title: "Career Focus",
      body:
        "Skills and portfolios oriented toward employability, entrepreneurship and long-term opportunity.",
      icon: "career-focus" as const,
    },
    {
      title: "Global Community",
      body:
        "Connect with learners from Nigeria, Africa and around the world — sharing knowledge and encouragement.",
      icon: "global-community" as const,
    },
  ],
} as const;

export const EDUCATION_PROGRAMMES = [
  {
    num: "01",
    title: "One-to-one Mentorship",
    body:
      "Deep, personalised learning with a mentor who understands your goals — from fundamentals to portfolio-ready work.",
    image: EDUCATION_ASSETS.mentorship,
    imageAlt: "One-to-one mentorship session at a laptop",
    status: null,
    cta: {
      kind: "link" as const,
      href: "/contact",
      label: "Learn about mentorship",
    },
  },
  {
    num: "02",
    title: "Scholarship Programmes",
    body:
      "Cohort-based programmes designed to expand access to quality technology education for more learners.",
    image: EDUCATION_ASSETS.scholarship,
    imageAlt: "Scholarship learners studying together",
    status: "Coming soon",
    cta: {
      kind: "disabled" as const,
      label: "Learn more (coming soon)",
    },
  },
  {
    num: "03",
    title: "Free Public Education",
    body:
      "Technical lessons and live sessions on our YouTube channel — open learning for anyone who wants to start.",
    image: EDUCATION_ASSETS.youtube,
    imageAlt: "Free public education recording setup",
    status: "In development",
    cta: {
      kind: "disabled" as const,
      label: "Visit YouTube (coming soon)",
    },
  },
] as const;

export const EDUCATION_CTA = {
  label: "LET'S LEARN AND BUILD TOGETHER",
  title: "Ready to start your learning journey?",
  body: "Talk to us about your goals and find the right learning path for you.",
  cta: { href: "/contact", label: "Start a conversation" },
} as const;
