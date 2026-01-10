// About page data - Bold & Confident tone

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Value {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ExpertiseStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

// Team members with placeholder data
export const teamMembers: TeamMember[] = [
  {
    id: "founder-1",
    name: "Alex Rivera",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years transforming businesses through technology.",
    image: "/team/placeholder-1.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    id: "founder-2",
    name: "Jordan Chen",
    role: "CTO & Co-Founder",
    bio: "Engineering mastermind behind our most ambitious technical solutions.",
    image: "/team/placeholder-2.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

// Process steps
export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business DNA. Understanding your challenges, goals, and vision is where legendary solutions begin.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Strategy",
    description:
      "We architect the roadmap to your success. Every decision is data-driven, every milestone is measurable.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Design",
    description:
      "We craft experiences that captivate. User-centric design that doesn't just look beautiful—it converts.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Development",
    description:
      "We build with precision and power. Clean code, scalable architecture, bulletproof performance.",
  },
  {
    id: "step-5",
    number: "05",
    title: "Launch & Scale",
    description:
      "We don't just deliver—we ensure success. Continuous support, optimization, and growth partnership.",
  },
];

// Company values
export const companyValues: Value[] = [
  {
    id: "value-1",
    number: "01",
    title: "Relentless Innovation",
    tagline: "We don't wait for the future—we build it.",
    description:
      "Stagnation is death. We constantly push boundaries, explore emerging technologies, and challenge the status quo to deliver solutions that give you an unfair advantage.",
  },
  {
    id: "value-2",
    number: "02",
    title: "Uncompromising Quality",
    tagline: "Good enough isn't in our vocabulary.",
    description:
      "Every line of code, every pixel, every interaction is crafted with obsessive attention to detail. We don't ship until it's exceptional.",
  },
  {
    id: "value-3",
    number: "03",
    title: "Strategic Partnership",
    tagline: "Your success is our obsession.",
    description:
      "We're not vendors—we're partners invested in your growth. Your wins are our wins. We think long-term and build relationships that last.",
  },
  {
    id: "value-4",
    number: "04",
    title: "Measurable Impact",
    tagline: "If it can't be measured, it didn't happen.",
    description:
      "We're obsessed with results. Every project has clear KPIs, every decision is data-informed, and every outcome is quantifiable.",
  },
];

// Expertise stats
export const expertiseStats: ExpertiseStat[] = [
  {
    id: "stat-1",
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    id: "stat-2",
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    id: "stat-3",
    value: 15,
    suffix: "+",
    label: "Industries Transformed",
  },
  {
    id: "stat-4",
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

// Philosophy content
export const philosophyContent = {
  headline: "We're Not Here to Follow Trends. We Set Them.",
  paragraphs: [
    "In a world drowning in mediocre software and forgettable digital experiences, we chose a different path. Nevada Tech was built on a simple premise: technology should be transformative, not transactional.",
    "We don't just write code—we architect digital empires. We don't just design interfaces—we create experiences that command attention. Every project we touch becomes a testament to what's possible when ambition meets execution.",
    "Our clients don't come to us for safe solutions. They come to us because they're ready to dominate their markets, disrupt their industries, and build something that matters.",
  ],
  quote: "Excellence is not a goal—it's the minimum standard.",
};

// Hero content
export const heroContent = {
  titleLine1: "We Don't Just Build Software",
  titleLine2: "We Build Empires",
  subtitle: "The team behind the transformation",
};

// Careers CTA content
export const careersContent = {
  headline: "Ready to Build Something Legendary?",
  subtitle: "We're always looking for exceptional talent who refuse to settle for ordinary.",
  cta: "Join the Revolution",
};
